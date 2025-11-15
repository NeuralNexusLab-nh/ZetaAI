const express = require("express");
const app = express();
const path = require("path");

app.use((req, res, next) => {
  if (req.headers["user-agent"]) {
    res.set("X-Frame-Options", "DENY");
    res.set("X-REQUEST-ID", Math.floor(Math.random() * 10000000));
    res.set("Access-Control-Allow-Origin", "*");
    next();
  } 
});

function zetaai(question) {
  
  let answers = [
    `Good question! ${question} is worth discussing.`,
    `That's an interesting question: ${question}.`,
    `I would love to know more about ${question}!`,
    `Can you tell me more details about ${question}?`,
    `I have some knowledge about ${question}, but not everything!`,
    `Great topic! Let's explore ${question} together.`,
    `You seem curious about ${question}!`,
    `I need some time to analyze ${question}.`,
    `Hmm... let me think about ${question}.`,
    `I'm excited to talk about ${question}.`,
    `The topic of "${question}" is quite fascinating!`,
    `I believe ${question} has a deep history.`,
    `Let's dive deeper into ${question}.`,
    `What aspect of ${question} interests you the most?`,
    `There are many perspectives on ${question}, let's discuss!`,
    `I have some insights on ${question}, want to hear them?`,
    `I'm happy to talk about ${question} with you!`,
    `Your question about ${question} is thought-provoking.`,
    `Oh! ${question} is something I know a lot about!`,
    `I think ${question} is a trending topic these days.`
  ];

  return answers[Math.floor(Math.random() * answers.length)] + ' ' + answers[Math.floor(Math.random() * answers.length)];
}

app.use(express.json());
app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <title>Zeta AI</title>
  </head>
  <body>
  <h1>Zeta AI</h1><br>
  <a href="https://github.com/NeuralNexusLab-nh/ZetaAI/">Github Documents</a>
  </body>
  </html>
  `);
});

app.get("/source", (req, res) => {
  res.type("text/plain").sendFile(path.join(__dirname, "source.js"));
});

app.get("/api", (req, res) => {
  const prompt = req.query.prompt || "";
  if (prompt == "") {
    res.status(403).send("PROMPT REQUIRE");
  } else {
    const ans = zetaai(prompt);
    res.json(
      {
        return: ans,
        model: "zeta-ai x1",
        length: ans.length
      }
     );
  }
});

app.listen(process.env.PORT);
