import { config, getMissingConfigKeys } from '../config.js';
import { formatWhatsAppMessage } from '../utils/formatWhatsAppMessage.js';

function buildWhatsAppUrl() {
  return `https://graph.facebook.com/${config.metaApiVersion}/${config.phoneNumberId}/messages`;
}

export async function sendWhatsAppFormMessage(formData) {
  const missingKeys = getMissingConfigKeys();

  if (missingKeys.length > 0) {
    throw new Error(
      `Server configuration is incomplete. Missing: ${missingKeys.join(', ')}`,
    );
  }

  const response = await fetch(buildWhatsAppUrl(), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: config.recipientPhone,
      type: 'text',
      text: {
        preview_url: false,
        body: formatWhatsAppMessage(formData),
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const apiMessage =
      data?.error?.message || 'WhatsApp Cloud API request failed.';

    throw new Error(apiMessage);
  }

  return data;
}
