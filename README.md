# bfhl api


---

##  Features
- `/bfhl` POST endpoint that:
  - Separates odd/even numbers, alphabets, and special characters
  - Computes sum of all numbers
  - Builds a reversed, alternating-case string from the alphabets
- `/` serves a simple HTML page so input can be tested without curl
- Uses environment variables for user details (name, roll, email, dob)

---

##  Running Locally

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


