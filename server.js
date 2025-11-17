const express = require("express");
const app = express();
const path = require("path");
const zeta = require("./zeta.js");

app.use((req, res, next) => {
  if (req.headers["user-agent"]) {
    res.set("X-Frame-Options", "DENY");
    res.set("X-REQUEST-ID", Math.floor(Math.random() * 10000000));
    res.set("Access-Control-Allow-Origin", "*");
    next();
  } 
});

app.use(express.json());
app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/source", (req, res) => {
  res.redirect("https://huggingface.co/NeuralNexusLab-Nh/ZetaAI");
});

app.get("/api", (req, res) => {
  const prompt = req.query.prompt || "";
  if (prompt == "") {
    res.status(403).send("PROMPT REQUIRE");
  } else {
    const ans = zeta(prompt);
    res.json(
      {
        tokens: ans.token,
        model: "zeta-xf",
        return: ans.return,
        length: ans.length
      }
     );
  }
});

app.listen(process.env.PORT);
