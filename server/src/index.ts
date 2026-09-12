import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Route imports (Create these empty files in your routes folder for now)
import authRoutes from './routes/auth.routes';
import scanRoutes from './routes/scan.routes';
import cveRoutes from './routes/cve.routes';
import darkwebRoutes from './routes/darkweb.routes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/cve', cveRoutes);
app.use('/api/darkweb', darkwebRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UMBRA Core Active', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`[+] UMBRA API listening on port ${PORT}`);
});