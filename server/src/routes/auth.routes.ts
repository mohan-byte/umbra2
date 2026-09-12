import { Router } from 'express';

const router = Router();

// Placeholder route: POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ message: 'Auth endpoint active' });
});

export default router;