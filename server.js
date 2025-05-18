const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const readline = require("readline");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const rl = readline.createInterface({
      input: response.body,
      crlfDelay: Infinity,
    });

    let fullResponse = "";

    rl.on("line", (line) => {
      if (line.trim()) {
        try {
          const data = JSON.parse(line);
          if (data.response) {
            fullResponse += data.response;
          }
        } catch (e) {
          console.error("⚠️ JSON parse error:", e.message);
        }
      }
    });

    rl.on("close", () => {
      res.json({ response: fullResponse });
    });

  } catch (error) {
    console.error("❌ Error connecting to Ollama:", error.message);
    res.status(500).json({ error: "Failed to connect to Ollama backend." });
  }
});

app.get("/", (req, res) => {
  res.send("✅ Proxy server is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
});
