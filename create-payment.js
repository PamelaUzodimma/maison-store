// Starts a Paystack payment.
// The price is calculated HERE from products-data.js, never trusted from the browser.
const crypto = require('crypto');
const PRODUCTS = require('../../public/products-data.js');

const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
const clean = (v, max = 200) => String(v == null ? '' : v).trim().slice(0, max);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed.' });

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    console.error('PAYSTACK_SECRET_KEY is not set');
    return json(500, { error: 'Card payments are not set up yet.' });
  }

  let body;
  try { body = JSON.parse(event.body || '{}'); }
  catch { return json(400, { error: 'Invalid request.' }); }

  // ---- Validate cart and compute the real total (in naira) ----
  const rawItems = Array.isArray(body.items) ? body.items : [];
  if (rawItems.length < 1 || rawItems.length > 30) return json(400, { error: 'Your bag is empty.' });

  const items = [];
  let total = 0;
  for (const it of rawItems) {
    const product = byId.get(Number(it.id));
    const qty = Number(it.qty);
    if (!product || !Number.isInteger(qty) || qty < 1 || qty > 20) {
      return json(400, { error: 'Your bag contains an invalid item. Please refresh the page.' });
    }
    items.push({ id: product.id, qty });
    total += product.price * qty;
  }
  const amountKobo = Math.round(total * 100);
  if (!(amountKobo > 0)) return json(400, { error: 'Invalid order total.' });

  // ---- Validate customer ----
  const c = body.customer || {};
  const email = clean(c.email);
  if (!/^\S+@\S+\.\S+$/.test(email)) return json(400, { error: 'A valid email address is required.' });

  const customer = {
    name: clean(c.name), phone: clean(c.phone), address: clean(c.address),
    city: clean(c.city), state: clean(c.state), country: clean(c.country), notes: clean(c.notes, 500),
  };

  const reference = 'ME-' + crypto.randomBytes(5).toString('hex').toUpperCase();
  const siteUrl = process.env.URL || `https://${event.headers.host}`;

  try {
    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        amount: amountKobo,
        currency: 'NGN',
        reference,
        callback_url: `${siteUrl}/`,
        metadata: {
          items,
          customer,
          custom_fields: [
            { display_name: 'Customer', variable_name: 'customer', value: customer.name },
            { display_name: 'Phone', variable_name: 'phone', value: customer.phone },
            { display_name: 'Deliver to', variable_name: 'address', value: `${customer.address}, ${customer.city}, ${customer.state}, ${customer.country}` },
            { display_name: 'Order', variable_name: 'order', value: items.map((i) => `${byId.get(i.id).name} x${i.qty}`).join('; ').slice(0, 250) },
            { display_name: 'Notes', variable_name: 'notes', value: customer.notes || '-' },
          ],
        },
      }),
    });
    const data = await res.json();
    if (!res.ok || !data.status || !data.data) {
      console.error('Paystack initialize failed:', res.status, data && data.message);
      return json(502, { error: 'Could not start the payment. Please try again.' });
    }
    return json(200, { authorization_url: data.data.authorization_url, reference });
  } catch (err) {
    console.error('Paystack initialize error:', err.message);
    return json(502, { error: 'Could not reach the payment service. Please try again.' });
  }
};
