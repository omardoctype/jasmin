export function formatWhatsAppMessage({ name, email, phone, message }) {
  return [
    '📩 New Form Submission:',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Message: ${message}`,
  ].join('\n');
}

