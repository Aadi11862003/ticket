const express = require('express');
const cors = require('cors');
const { getGroqChatCompletion } = require('./api');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const chatCompletion = await getGroqChatCompletion(prompt);
    // Assuming the response from Groq API contains an array of choices
    const answer = chatCompletion.choices[0]?.message?.content || "No answer found.";
    res.json({ answer });
  } catch (error) {
    console.error('Error with Groq API:', error);
    res.status(500).send('Error with Groq API');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


