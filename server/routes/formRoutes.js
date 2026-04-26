import express from 'express';
import { sendWhatsAppFormMessage } from '../services/whatsappService.js';
import { validateFormPayload } from '../validators/formValidator.js';

const router = express.Router();

router.post('/submit-form', async (req, res) => {
  const validation = validateFormPayload(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.error,
    });
  }

  try {
    const result = await sendWhatsAppFormMessage(validation.data);

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully. WhatsApp notification sent.',
      whatsappResponse: result,
    });
  } catch (error) {
    console.error('WhatsApp submission error:', error);

    return res.status(502).json({
      success: false,
      message: 'Failed to send the WhatsApp notification.',
      error: error.message,
    });
  }
});

export default router;

