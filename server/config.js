import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT || 3001),
  appUrl: process.env.APP_URL || 'http://localhost:5173',
  metaApiVersion: process.env.META_API_VERSION || 'v21.0',
  accessToken: process.env.ACCESS_TOKEN || '',
  phoneNumberId: process.env.PHONE_NUMBER_ID || '',
  recipientPhone: process.env.RECIPIENT_PHONE || '',
};

export function getMissingConfigKeys() {
  return [
    ['ACCESS_TOKEN', config.accessToken],
    ['PHONE_NUMBER_ID', config.phoneNumberId],
    ['RECIPIENT_PHONE', config.recipientPhone],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
}
