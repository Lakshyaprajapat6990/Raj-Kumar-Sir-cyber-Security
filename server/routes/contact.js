const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const { requireAdmin } = require('../middleware/auth');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

// Public: submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, company, email, phone, service, message } = req.body;
    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: 'Required fields missing.' });
    }
    const contact = new Contact({ name, company, email, phone, service, message });
    await contact.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `[CyberSec] New Inquiry from ${name}`,
      html: `<h2 style="color:#00d4ff">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>`
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Rajkumar — CyberSec Expert',
      html: `<div style="background:#0a0a0f;color:#e0e0e0;padding:24px;font-family:monospace">
        <h2 style="color:#00d4ff">// Message Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. I have received your inquiry regarding <strong style="color:#00ff88">${service}</strong> and will respond within 24 hours.</p>
        <p style="color:#00ff88">— Rajkumar | Cybersecurity Expert</p>
        <p style="color:#666;font-size:12px">Committed to Enhancing System Security and User Safety</p>
      </div>`
    });

    res.status(201).json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// Admin: get all contacts
router.get('/', requireAdmin, async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status && status !== 'all' ? { status } : {};
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json(contacts);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: update status (new → read → replied)
router.patch('/:id/status', requireAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' });
    }
    const contact = await Contact.findByIdAndUpdate(
      req.params.id, { status }, { new: true }
    );
    if (!contact) return res.status(404).json({ error: 'Not found.' });
    res.json(contact);
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Admin: delete contact
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted.' });
  } catch {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
