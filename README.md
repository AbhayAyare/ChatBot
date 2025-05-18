Got it! Here’s the complete README content all in one file. You can copy-paste this into your README.md:

markdown
Copy
Edit
# NeoChat AI

NeoChat AI is a sleek, modern chat interface that connects to a local AI backend server (like Ollama with LLaMA 3). It supports chatting with an AI assistant featuring a smooth typing effect, dynamic bot name changes, and a toggleable dark/light theme.

---

## Features

- Responsive chat UI with user and bot message bubbles.
- Smooth typing animation for bot responses.
- Change bot name dynamically using `/name NewName` command.
- Dark and light theme toggle.
- Connects to a local AI backend server proxy.
- Express.js proxy server to handle requests and stream responses from the AI backend.

---

## Demo Screenshot

*(Replace with your actual screenshot URL)*

---

## Project Structure

/neochat-ai
├── index.html # Frontend chat UI
├── server.js # Express proxy backend
├── package.json # Node.js dependencies
└── README.md # This file

yaml
Copy
Edit

---

## Prerequisites

- Node.js installed (v14+ recommended)
- Ollama or other AI backend running locally on port 11434 (or modify proxy target accordingly)
- Internet connection for Google Fonts

---

## Installation and Setup

1. Clone this repository:

```bash
git clone https://github.com/yourusername/neochat-ai.git
cd neochat-ai
Install backend dependencies:

bash
Copy
Edit
npm install express cors body-parser node-fetch readline
Start the Express proxy server:

bash
Copy
Edit
node server.js
Open index.html in your browser (you can open it directly or serve with a local HTTP server).

The frontend will connect to your backend at http://localhost:3000/chat.

Usage
Type messages and hit Send or press Enter.

To rename the bot, use command: /name NewBotName.

Toggle between dark and light theme using the moon/sun icon.

Notes
Make sure your local AI backend (e.g., Ollama with LLaMA 3) is running and accessible at the specified port.

Adjust the backend URL in server.js if needed.

Feel free to customize this README with your actual demo screenshot and repo URL!

css
Copy
Edit

If you want, I can also generate a downloadable `.md` file — just let me know!
