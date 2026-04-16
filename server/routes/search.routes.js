import express from 'express';
const router = express.Router();

// GET /api/search?q=
router.get('/', async (req, res) => {
  const { q } = req.query;
  // Simulate delay 800-1000ms
  const delay = 800 + Math.floor(Math.random() * 200);
  await new Promise(r => setTimeout(r, delay));
  console.log('🌐 /api/search API CALL', { q });
  res.json({
    query: q,
    results: ["Result 1", "Result 2"],
    timestamp: new Date().toISOString()
  });
});

export default router;
