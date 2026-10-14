# Rajkumar - Cybersecurity Expert Website (MERN Stack)

## Project Structure

```
├── client/          # React frontend
├── server/          # Express + MongoDB backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   └── index.js     # Server entry point
└── package.json     # Root scripts (concurrently)
```

## Setup

### 1. Prerequisites
- Node.js 18+
- MongoDB running locally (or MongoDB Atlas URI)

### 2. Configure Environment
Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/rajkumar_cybersec
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password   # Generate at myaccount.google.com/apppasswords
CLIENT_URL=http://localhost:3000
```

### 3. Install & Run

**Install all dependencies:**
```bash
npm run install-all
```

**Run both servers (development):**
```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### 4. Production Build
```bash
cd client && npm run build
```
Serve `client/build` via any static host. Point backend to production URL.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/contact` | Submit contact form (saves to DB + sends emails) |
| GET | `/api/contact` | List all inquiries |
| GET | `/api/health` | Server health check |

## Customization
- Update contact info in `client/src/components/Contact.js` and `Footer.js`
- Add social links in `client/src/components/Footer.js`
- Update email in `server/.env`
# Raj-Kumar-Sir-cyber-Security
