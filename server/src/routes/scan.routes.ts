import { Router } from 'express';

const router = Router();

// Placeholder route: GET /api/scan
router.get('/', (req, res) => {
  res.json({ message: 'Scan endpoint active' });
});

export default router;