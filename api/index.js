require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });
app.use('/api/contact', contactLimiter);

app.use('/api/contact', require('../server/routes/contact'));
app.use('/api/testimonials', require('../server/routes/testimonials'));
app.use('/api/admin', require('../server/routes/admin'));

app.get('/api/health', (req, res) => res.json({ status: 'online', time: new Date() }));

// Connect once (cached for serverless reuse)
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
};

const handler = async (req, res) => {
  await connectDB();
  return app(req, res);
};

module.exports = handler;
