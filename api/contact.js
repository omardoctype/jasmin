const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const metaApiVersion = process.env.META_API_VERSION || 'v21.0';

function normalizePayload(payload) {
  return {
    fullName: String(payload?.fullName || '').trim(),
    email: String(payload?.email || '').trim(),
    phone: String(payload?.phone || '').trim(),
    message: String(payload?.message || '').trim(),
  };
}

function validatePayload(payload) {
  if (!payload.fullName || !payload.email || !payload.phone || !payload.message) {
    return {
      valid: false,
      message: 'Tous les champs sont obligatoires.',
    };
  }

  if (!emailPattern.test(payload.email)) {
    return {
      valid: false,
      message: 'Adresse email invalide.',
    };
  }

  return { valid: true };
}

function buildWhatsAppMessage(payload) {
  return [
    '\u{1F4E9} Nouveau message depuis le site',
    '',
    `\u{1F464} Nom: ${payload.fullName}`,
    `\u{1F4DE} T\u00E9l\u00E9phone: ${payload.phone}`,
    `\u{1F4E7} Email: ${payload.email}`,
    '',
    '\u{1F4AC} Message:',
    payload.message,
  ].join('\n');
}

function getRequestBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return req.body || null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }

  const rawBody = getRequestBody(req);
  if (!rawBody) {
    return res.status(400).json({
      success: false,
      message: 'Payload invalide.',
    });
  }

  const payload = normalizePayload(rawBody);
  const validation = validatePayload(payload);
  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.message,
    });
  }

  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminPhoneNumber = process.env.ADMIN_WHATSAPP_NUMBER;

  if (!token || !phoneNumberId || !adminPhoneNumber) {
    console.error('Missing WhatsApp env vars: WHATSAPP_TOKEN / WHATSAPP_PHONE_NUMBER_ID / ADMIN_WHATSAPP_NUMBER');
    return res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi. Veuillez r\u00E9essayer.",
    });
  }

  try {
    const apiResponse = await fetch(
      `https://graph.facebook.com/${metaApiVersion}/${phoneNumberId}/messages`,
      {
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
            body: buildWhatsAppMessage(payload),
          },
        }),
      },
    );

    const responseData = await apiResponse.json().catch(() => ({}));

    if (!apiResponse.ok) {
      console.error('WhatsApp Cloud API error:', responseData);
      return res.status(502).json({
        success: false,
        message: "Erreur lors de l'envoi. Veuillez r\u00E9essayer.",
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Votre message a \u00E9t\u00E9 envoy\u00E9 avec succ\u00E8s.',
      whatsappResponse: responseData,
    });
  } catch (error) {
    console.error('Contact API failure:', error);
    return res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi. Veuillez r\u00E9essayer.",
    });
  }
}

