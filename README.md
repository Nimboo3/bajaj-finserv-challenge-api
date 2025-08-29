# BFHL Backend + Frontend Project

This is my submission for the BFHL assignment.  
It’s a small Node.js + Express app with a static frontend where you can paste JSON input and see the processed output.

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
- **Deployment**: Works on Railway

---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
