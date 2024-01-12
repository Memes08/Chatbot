import { config } from "dotenv";
config();

import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";


const app = express();
app.use(cors());
app.use(express.json());

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

app.post('/get-response', async (req, res) => {
  const input = req.body.message;
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  res.send({ message: response.data.choices[0].message.content });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
