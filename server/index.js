import cors from 'cors';
import express from 'express';
import { config } from './config.js';
import formRoutes from './routes/formRoutes.js';

const app = express();

app.use(
  cors({
    origin: config.appUrl,
  }),
);
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running.',
  });
});

app.use(formRoutes);

app.use((err, _req, res, _next) => {
  console.error('Unhandled server error:', err);

  res.status(500).json({
    success: false,
    message: 'Unexpected server error.',
  });
});

app.listen(config.port, () => {
  console.log(`WhatsApp form server listening on http://localhost:${config.port}`);
});

