import { Router } from 'express';

const router = Router();

// Placeholder route: GET /api/darkweb/search
router.get('/search', (req, res) => {
  res.json({ message: 'Dark web search endpoint active' });
});

export default router;