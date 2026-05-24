const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const { requireAdmin } = require('../middleware/auth');

// Public: get visible testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ visible: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: get all testimonials
router.get('/all', requireAdmin, async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: add testimonial
router.post('/', requireAdmin, async (req, res) => {
  try {
    const { name, role, company, message, rating } = req.body;
    if (!name || !role || !message) {
      return res.status(400).json({ error: 'Name, role, and message are required.' });
    }
    const t = new Testimonial({ name, role, company, message, rating });
    await t.save();
    res.status(201).json(t);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: toggle visibility
router.patch('/:id/visibility', requireAdmin, async (req, res) => {
  try {
    const t = await Testimonial.findById(req.params.id);
    if (!t) return res.status(404).json({ error: 'Not found.' });
    t.visible = !t.visible;
    await t.save();
    res.json(t);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: delete testimonial
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted.' });
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
