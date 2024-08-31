require('dotenv').config();
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY });

const getGroqChatCompletion = async (prompt) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
};

module.exports = { getGroqChatCompletion };


