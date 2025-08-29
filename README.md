# BFHL Backend + Frontend Project


---

## 📌 Features
- `/bfhl` POST endpoint that:
  - Separates odd/even numbers, alphabets, and special characters
  - Computes sum of all numbers
  - Builds a reversed, alternating-case string from the alphabets
- `/` serves a simple HTML page so input can be tested without curl
- Uses environment variables for user details (name, roll, email, dob)

---

## ⚙️ Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: Plain HTML/CSS/JS (served from `public/`)
- **Deployment**: Render

---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd bajaj-finserv-challenge-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual details
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to test the API

---

## 🚀 Render Deployment

### Prerequisites
- Render account
- GitHub repository

### Deployment Steps

1. **Connect to Render:**
   - Go to [Render](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select this repository

2. **Configure Service:**
   ```
   Name: bajaj-finserv-challenge-api
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **Set Environment Variables:**
   In Render dashboard, add these environment variables:
   ```
   FULL_NAME=your_full_name_here
   DOB=ddmmyyyy  
   EMAIL=your_email@example.com
   ROLL_NUMBER=your_roll_number_here
   NODE_ENV=production
   ```

4. **Deploy:**
   - Render will automatically build and deploy
   - Your app will be available at: `https://bajaj-finserv-challenge-api.onrender.com`

### Render Configuration
- `render.yaml`: Optional configuration file
- Automatic deploys from main branch
- Health checks on `/` endpoint
- Free tier available (with sleep after inactivity)

---

## 📋 API Documentation

### POST /bfhl
Processes an array and returns categorized data.

**Request:**
```json
{
  "data": ["a","1","334","4","R","$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /
Returns a simple status message and serves the test frontend.

---

## 🔧 Project Structure
```
bajaj-finserv-challenge-api/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── Procfile              # Process definition (Railway)
├── render.yaml           # Render configuration
├── .env.example          # Environment template
├── .gitignore           # Git ignore rules
├── README.md            # This file
└── public/
    └── index.html       # Frontend test interface
```

---

## ✅ Production Checklist

- [x] ES6 modules configured
- [x] CORS properly configured for Render
- [x] Environment variables handled
- [x] Error handling implemented
- [x] Render configuration ready
- [x] Health check endpoint
- [x] Static file serving
- [x] Production-ready logging
