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
