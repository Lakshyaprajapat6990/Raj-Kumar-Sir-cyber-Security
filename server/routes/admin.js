const express = require('express');
const router = express.Router();

// Simple token-based login — no JWT dependency needed
router.post('/login', (req, res) => {
  const { password } = req.body;
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password.' });
  }
  res.json({ token: process.env.ADMIN_TOKEN });
});

module.exports = router;
