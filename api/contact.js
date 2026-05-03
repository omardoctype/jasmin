const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9][0-9\s().-]{5,}$/;
const META_API_URL = 'https://graph.facebook.com/v25.0';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function normalizePayload(payload) {
  return {
    fullName: String(payload?.fullName || '').trim(),
    phone: String(payload?.phone || '').trim(),
    email: String(payload?.email || '').trim(),
    message: String(payload?.message || '').trim(),
  };
}

function validatePayload(payload) {
  if (!payload.fullName) {
    return 'fullName is required.';
  }
  if (!payload.phone) {
    return 'phone is required.';
  }
  if (!payload.email) {
    return 'email is required.';
  }
  if (!payload.message) {
    return 'message is required.';
  }
  if (!EMAIL_PATTERN.test(payload.email)) {
    return 'email is invalid.';
  }
  if (!PHONE_PATTERN.test(payload.phone)) {
    return 'phone is invalid.';
  }

  return null;
}

function buildWhatsAppMessage({ fullName, phone, email, message }) {
  return [
    '\u{1F4E9} Nouveau message depuis le site',
    '',
    `\u{1F464} Nom: ${fullName}`,
    `\u{1F4DE} Téléphone: ${phone}`,
    `\u{1F4E7} Email: ${email}`,
    '',
    '\u{1F4AC} Message:',
    message,
  ].join('\n');
}

async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    const trimmed = req.body.trim();
    if (!trimmed) {
      return null;
    }
    return JSON.parse(trimmed);
  }

  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  return JSON.parse(trimmed);
}

export default async function handler(req, res) {
  try {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
      return res.status(200).json({
        success: true,
        message: 'Preflight OK',
      });
    }

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST, OPTIONS');
      return res.status(405).json({
        success: false,
        message: 'Method Not Allowed',
      });
    }

    let body;
    try {
      body = await parseRequestBody(req);
    } catch (error) {
      console.error('Invalid JSON body:', error);
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON body.',
      });
    }

    if (!body) {
      return res.status(400).json({
        success: false,
        message: 'Request body is required.',
      });
    }

    const payload = normalizePayload(body);
    const validationError = validatePayload(payload);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const adminPhoneNumber = process.env.ADMIN_WHATSAPP_NUMBER;

    const missingEnv = [
      ['WHATSAPP_TOKEN', token],
      ['WHATSAPP_PHONE_NUMBER_ID', phoneNumberId],
      ['ADMIN_WHATSAPP_NUMBER', adminPhoneNumber],
    ]
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingEnv.length > 0) {
      const message = `Missing required environment variables: ${missingEnv.join(', ')}`;
      console.error(message);
      return res.status(500).json({
        success: false,
        message,
      });
    }

    const formattedMessage = buildWhatsAppMessage(payload);

    const metaResponse = await fetch(`${META_API_URL}/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: adminPhoneNumber,
        type: 'text',
        text: {
          preview_url: false,
          body: formattedMessage,
        },
      }),
    });

    const metaRawBody = await metaResponse.text();
    let metaData;
    try {
      metaData = metaRawBody ? JSON.parse(metaRawBody) : null;
    } catch {
      metaData = null;
    }

    console.log('Meta WhatsApp API full response:', {
      status: metaResponse.status,
      ok: metaResponse.ok,
      body: metaData ?? metaRawBody,
    });

    if (!metaResponse.ok) {
      if (metaData && typeof metaData === 'object') {
        return res.status(500).json(metaData);
      }

      return res.status(500).json({
        error: {
          message: metaRawBody || 'Meta WhatsApp API request failed.',
          status: metaResponse.status,
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès.',
      data: metaData,
    });
  } catch (error) {
    console.error('api/contact.js unexpected error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
}
