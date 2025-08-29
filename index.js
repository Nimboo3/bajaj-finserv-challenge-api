import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const corsOptions = {
  origin: "https://bajaj-finserv-challenge-api-production.up.railway.app/",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

function buildUserId() {
  const fullName = (process.env.FULL_NAME || "john doe").trim().toLowerCase();
  const slug = fullName.replace(/\s+/g, "_").replace(/[^\w_]+/g, "");
  const dob = (process.env.DOB || "17091999").trim(); // ddmmyyyy
  return `${slug}_${dob}`;
}

const DEFAULT_EMAIL = process.env.EMAIL || "john@xyz.com";
const DEFAULT_ROLL = process.env.ROLL_NUMBER || "ABCD123";

function isIntegerString(s) {
  return /^-?\d+$/.test(s);
}

function isAlphaString(s) {
  return /^[A-Za-z]+$/.test(s);
}

app.post("/bfhl", (req, res) => {
  try {
    const userId = buildUserId();
    const email = DEFAULT_EMAIL;
    const roll = DEFAULT_ROLL;

    const payload = req.body;
    if (!payload || !Array.isArray(payload.data)) {
      return res.status(200).json({
        is_success: false,
        user_id: userId,
        email,
        roll_number: roll,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: "",
        error: "Invalid payload: expected JSON with `data` array.",
      });
    }

    const items = payload.data;

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let sum = 0;
    const allAlphabetChars = [];

    for (const raw of items) {
      const token = raw == null ? "" : String(raw);

      if (isIntegerString(token)) {
        const n = parseInt(token, 10);
        if (Number.isFinite(n)) {
          if (Math.abs(n) % 2 === 0) {
            even_numbers.push(String(token));
          } else {
            odd_numbers.push(String(token));
          }
          sum += n;
          continue;
        }
      }

      if (isAlphaString(token)) {
        alphabets.push(token.toUpperCase());
        allAlphabetChars.push(...token.split(""));
        continue;
      }

      if (token !== "") {
        special_characters.push(token);
      }
    }

    const reversed = allAlphabetChars.reverse();
    const concat_string = reversed
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id: userId,
      email,
      roll_number: roll,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    });
  } catch (err) {
    return res.status(200).json({
      is_success: false,
      user_id: buildUserId(),
      email: DEFAULT_EMAIL,
      roll_number: DEFAULT_ROLL,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: "",
      error: "Internal server error",
    });
  }
});

app.get("/", (_, res) => res.send("bfhl endpoint server up. POST /bfhl"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
