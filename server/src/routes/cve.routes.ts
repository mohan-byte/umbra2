import { Router } from 'express';

const router = Router();

// Placeholder route: GET /api/cve
router.get('/', (req, res) => {
  res.json({ message: 'CVE feed endpoint active' });
});

export default router;