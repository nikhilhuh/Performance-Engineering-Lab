import express from 'express';
const router = express.Router();

// GET /api/click
router.get('/', (req, res) => {
  console.log('🌐 /api/click API CALL');
  res.json({
    message: "Processed",
    timestamp: new Date().toISOString()
  });
});

export default router;
