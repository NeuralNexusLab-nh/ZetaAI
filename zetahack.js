function zeta(q) {
  const db = [
    "Who am I? I'm a model trained by NeuralNexusLab and developed by NeuralNexusLab. I can use articles to answer you or compute simple math.",
    "Who are you? I don't know exactly, but I consider you my friend. I can explain AI or help you reason about things.",
    "Artificial intelligence is a field of technology that enables machines to learn, decide, and understand patterns similar to humans.",
    "Developing AI involves data collection, model design, training, testing, and thinking about ethics and responsible use.",
    "Cybersecurity protects systems, networks, and digital information from theft, misuse, or attacks.",
    "Nature includes forests, rivers, mountains, and animals. Humans rely on nature for balance and well-being.",
    "Games help people relax, learn, and enjoy challenges, whether physical, digital, or strategic.",
    "School is a place for learning, social skills, curiosity, and preparation for the future.",
    "Websites are digital spaces that allow interaction, information sharing, or communication across the world.",
    "AI models such as ChatGPT, Gemini, DeepSeek, Gemma, and Copilot help with writing, coding, creativity, and research."
  ];

  const chit = {
    "hi": ["Hey there!", "Hi! Good to see you.", "Hello! How are you feeling today?", "Hey! What's up?"],
    "hello": ["Hello!", "Hi there!", "Nice to see you!", "Greetings!"],
    "hey": ["Hey!", "Heya!", "Yo!", "Hi!"],
    "who are you": ["I'm ZetaHack, a small semantic engine built to chat and explore ideas with you.", "I'm ZetaHack, your compact yet curious AI friend.", "I'm ZetaHack, a mini RAG-powered chatterbox.", "I'm ZetaHack, a lightweight model with a big personality."],
    "what are you": ["I'm ZetaHack, a tiny GPT-like engine running on pure JavaScript.", "I'm ZetaHack, a semantic micro-AI.", "I'm ZetaHack, a compact RAG-style assistant.", "I'm ZetaHack, here to think with you."],
    "嗨": ["嗨！我其實會英文回你！", "哈囉，我是 ZetaHack！", "嗨嗨～今天心情如何？"],
    "你是誰": ["我是 ZetaHack，一個迷你 GPT！", "我是 ZetaHack，你的 JS 小模型。", "ZetaHack 在此！很高興見到你。"]
  };

  function clean(t) {
    return t.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/g);
  }

  const tokens = db.map(clean);
  const vocabSet = new Set();
  tokens.forEach(t => t.forEach(w => vocabSet.add(w)));
  const vocab = Array.from(vocabSet);
  const wi = {};
  vocab.forEach((w, i) => wi[w] = i);

  function vec(tok) {
    const v = new Array(vocab.length).fill(0);
    tok.forEach(w => {
      if (wi[w] !== undefined) v[wi[w]]++;
    });
    return v;
  }

  function cos(a, b) {
    let d = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) {
      d += a[i] * b[i];
      na += a[i] * a[i];
      nb += b[i] * b[i];
    }
    if (!na || !nb) return 0;
    return d / (Math.sqrt(na) * Math.sqrt(nb));
  }

  const userTok = clean(q);
  const userVec = vec(userTok);

  const u = q.toLowerCase().trim();
  for (const k in chit) {
    if (u.includes(k)) {
      const r = chit[k];
      return r[Math.floor(Math.random() * r.length)];
    }
  }

  const sims = [];
  for (let i = 0; i < db.length; i++) {
    sims.push([cos(userVec, vec(tokens[i])), i]);
  }
  sims.sort((a, b) => b[0] - a[0]);

  const top = sims.slice(0, 3).map(x => db[x[1]]);

  function summarize(arr) {
    const p = [
      "In short, it suggests that",
      "Overall, the idea revolves around",
      "Summarizing the essence:",
      "Boiling it down:"
    ];
    const h = [
      "which relates to your question.",
      "and that connects to what you asked.",
      "and these ideas combine to provide insight.",
      "tying together your topic."
    ];
    const body = arr.map(t => t.split(".")[0]).join(", ");
    return p[Math.floor(Math.random() * p.length)] + " " + body + ", " + h[Math.floor(Math.random() * h.length)];
  }

  const styles = [
    "Here's a thought: ",
    "Let me put it this way: ",
    "From a semantic angle: ",
    "Thinking about it creatively: ",
    "ZetaHack interpretation: "
  ];

  return styles[Math.floor(Math.random() * styles.length)] + summarize(top);
}

module.exports = zeta;
