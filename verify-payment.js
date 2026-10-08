// Confirms a payment with Paystack AFTER the customer returns to the site.
// "Paid" means: status is success, currency is NGN, and the amount matches
// what the cart should cost according to products-data.js.
const PRODUCTS = require('../../public/products-data.js');

const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return json(500, { error: 'Card payments are not set up yet.' });

  const reference = (event.queryStringParameters || {}).reference || '';
  if (!/^ME-[A-Z0-9]{6,20}$/.test(reference)) return json(400, { error: 'Invalid reference.' });

  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secret}` },
    });
    const body = await res.json();
    if (!res.ok || !body.status || !body.data) return json(200, { paid: false, status: 'unknown', reference });

    const d = body.data;
    const items = (d.metadata && Array.isArray(d.metadata.items)) ? d.metadata.items : [];
    let expected = 0;
    for (const it of items) {
      const p = byId.get(Number(it.id));
      if (!p) { expected = 0; break; }
      expected += p.price * Number(it.qty);
    }
    const expectedKobo = Math.round(expected * 100);

    const paid = d.status === 'success' && d.currency === 'NGN' && expectedKobo > 0 && d.amount === expectedKobo;
    if (d.status === 'success' && !paid) console.error('Amount/currency mismatch for', reference, d.amount, expectedKobo, d.currency);
    return json(200, { paid, status: d.status, reference, amount: d.amount / 100 });
  } catch (err) {
    console.error('Paystack verify error:', err.message);
    return json(502, { error: 'Could not reach the payment service.' });
  }
};
