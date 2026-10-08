// Paystack calls this URL after each payment, even if the customer closed the tab.
// Right now it verifies the signature and logs the payment (see Netlify > Logs > Functions).
// Add notifications (email, WhatsApp API) inside the charge.success block later.
const crypto = require('crypto');

exports.handler = async (event) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return { statusCode: 500, body: 'Not configured' };

  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : (event.body || '');
  const signature = (event.headers['x-paystack-signature'] || '');
  const expected = crypto.createHmac('sha512', secret).update(raw).digest('hex');

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { statusCode: 401, body: 'Invalid signature' };
  }

  let payload;
  try { payload = JSON.parse(raw); } catch { return { statusCode: 400, body: 'Bad JSON' }; }

  if (payload.event === 'charge.success' && payload.data) {
    const d = payload.data;
    console.log('PAID', d.reference, `NGN ${d.amount / 100}`, d.customer && d.customer.email);
    // TODO: send the store owner a notification here.
  }
  return { statusCode: 200, body: 'OK' };
};
