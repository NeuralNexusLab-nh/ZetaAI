function zeta (q) {
  const db = [
    `Who am I? I'm a model trained by NeuralNexusLab and developed by NeuralNexusLab. I can use article to answer you or computation math.`,
    `Who are you? I don't know who are you but I know you are my best friend! I can explain what is AI to you, or computation math.`,
    `Artificial intelligence, or AI, is a technology that allows computers to learn, think, and make decisions like humans. Today, AI is used in many parts of our daily lives. It helps us find information online, recommends songs we might like, and even drives cars automatically.AI can understand language, recognize faces, and solve problems faster than people in some cases. However, AI still needs humans to guide it and make sure it is used safely. Many scientists believe that AI will continue to grow and improve, making our future smarter and more efficient. The key is to use it responsibly and for the benefit of everyone.`,
    `Developing AI systems requires a mix of math, programming, and creativity. Engineers begin by collecting data, which helps the AI learn patterns and make predictions. They then design a model, usually using machine-learning frameworks like TensorFlow or PyTorch. After training the model, developers test it to make sure it works correctly and safely.AI development is not only about making machines smart—it also involves careful decision-making. Developers must think about privacy, fairness, and how their technology will be used. Building AI responsibly ensures that it can help people while avoiding harmful effects. As the field grows, AI developers continue to create new tools that push technology forward and open the door to future innovations.`,
    `Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access or attacks. In today’s digital world, people store a lot of personal information online, from bank accounts to social media. Hackers can try to steal this information or cause damage.To stay safe, organizations and individuals use strong passwords, firewalls, and encryption. Regular software updates and careful behavior online are also important. Cybersecurity is not just about technology—it is about awareness and responsibility. By following good practices, we can reduce risks and keep our digital world safe.`,
    `Nature is all around us. It includes trees, rivers, mountains, animals, and the sky. Spending time in nature helps people feel relaxed and happy. Birds sing in the morning, rivers flow peacefully, and the wind moves through the trees.Protecting nature is important because it provides clean air, water, and food. When humans care for the environment, animals and plants can live safely, and the Earth stays healthy. Nature is beautiful and powerful, and it reminds us to live in balance with the world around us.`,
    `Games are a fun way for people to relax, learn, and connect with others. They can be played alone, with friends, or even online with people from around the world. Games come in many types: video games, board games, sports, and puzzles.Playing games can improve skills like problem-solving, teamwork, and creativity. For example, strategy games teach planning, while sports games teach coordination and cooperation. While games are fun, it is important to play in moderation and balance them with study, work, and exercise. Games bring joy, challenge, and excitement to our lives.`,
    `School is a place where students learn new knowledge and skills. Every day, students attend classes, do homework, and participate in activities. Teachers help students understand subjects like math, science, language, and art.School is also a place to make friends and practice teamwork. Students learn how to communicate, solve problems, and work together. While studying is important, schools also encourage students to join sports, clubs, and creative projects. School helps prepare students for the future and teaches them to be responsible, curious, and confident.`,
    `Websites are an important part of the modern world. They can be simple pages with text and images, or dynamic websites that change content based on user input. Dynamic websites allow users to interact, shop online, or post comments. Examples include online stores, social media, and news websites.However, websites must be protected from cyber threats. Web security involves using strong passwords, secure connections (HTTPS), and regular updates to prevent hackers from stealing data or causing damage. Developers also use firewalls, encryption, and safe coding practices to keep websites safe.Dynamic websites offer many benefits, but they must be carefully maintained to ensure that users’ information is secure. A well-protected website provides a safe and smooth experience for everyone online.`,
    `Artificial intelligence has grown rapidly, and many AI models are helping people in different ways. ChatGPT is a language model that can chat, answer questions, and even write text like essays or code. Gemini is another AI developed for understanding language and assisting with research and creative tasks.DeepSeek focuses on analyzing large amounts of data, helping users find patterns and insights quickly. Gemma3 is designed for generating content, such as text, images, or code, making it useful for creative work. Copilot, developed for programmers, helps write code faster by suggesting lines or functions in real time.These AI models show how technology can assist humans in communication, research, and productivity. They are powerful tools, but users should always consider ethics, privacy, and responsible use when using them.`
  ]; 
  //Put article to db array.
  var raw = q.toLowerCase();
  raw = raw.split(" ");
  var res = "";
  var token = 0;

  function evalMath(input) {
    const match = input.match(/[\d+\-*/()^\.]+/);
    if (!match) return false;
    let expr = match[0];
    expr = expr.replace(/\^/g, "**");
  
    try {
      if (!/^[\d+\-*/().\s*]+$/.test(expr)) return false;
      const result = Function(`"use strict"; return (${expr});`)();
      if (typeof result === "number" && isFinite(result)) {
        return result;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  
  if (raw[0] == "do" || raw[0] == "what" || raw[0] == "who" || raw[0] == "which" || raw[0] == "where" || raw[0] == "when" || raw[0] == "was" || raw[0] == "were" || raw[0] == "is" || raw[0] == "are") {
    raw.splice(0, 1);
    token += 1;
  }
  
  raw = raw.filter(word => !["is","are","the"].includes(word));

  var keyword = raw[0] || "nothing";
  
  if (keyword == "you" || keyword == "your") keyword = "i";
  else {
    if (keyword == "i" || keyword == "me") keyword = "you"
  }
  
  keyword = keyword.replace(/[^a-zA-Z\s]/g, '');
  var catc = "";
  var isntAdd == true

  if (q.toLowerCase().includes("web") || q.toLowerCase().includes("net")) {
    var plhd = q.toLowerCase().split(" ");
    var url;
    for (let i = 0; i < raw.length; i++) {
      if (plhd[i].startsWith("http://") || plhd[i].startsWith("https://")) {
        url = plhd[i];
      }
    }
    isntAdd = false;
    fetch(`https://hackdev.nethacker.cloud/fetch?url=${url}`).then(res => res.text()).then((data) => {
      catc += processHTML(data);
    });
  }

  for (let i = 0; i < db.length; i++) {
    if (db[i].toLowerCase().includes(keyword.toLowerCase()) && isntAdd == true) {
      catc += db[i];
      token += db[i].length;
      isntAdd = false;
    }
  }

  if (evalMath(q) != false) {
    catc += `"${q}", the computation's answer is ${evalMath(q)}.`;
  }
  
  res += q + ", about " + keyword + "...\n";
  res += catc + "\n";
  res += `${keyword}, a good discuss for us.`;
  token += 5;

  return {token: token, model: "zeta-xf", return: res};
}

module.exports = zeta;
