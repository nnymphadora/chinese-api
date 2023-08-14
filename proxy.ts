import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));

const FORVO_API_KEY = process.env.FORVO_API_KEY; //
const FORVO_API_URL = "https://apifree.forvo.com";

app.get("/forvo-proxy", async (req: Request, res: Response) => {
  const word = req.query.word as string;
  const language = req.query.language || "zh";

  try {
    const response = await axios.get(
      `${FORVO_API_URL}/key/${FORVO_API_KEY}/format/json/action/word-pronunciations/word/${word}/language/${language}`
    );
    res.json(response.data);
  } catch (error: any) {
    res
      .status(error.response?.status || 500)
      .json({ error: "An error occurred" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
