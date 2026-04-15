export const getUser = async (req, res) => {
  const { id } = req.params;
  // Simulate slow API (1–1.5s delay)
  const delay = 1000 + Math.random() * 500;
  await new Promise(resolve => setTimeout(resolve, delay));
  res.json({
    id,
    name: 'Demo User',
    timestamp: Date.now()
  });
};
