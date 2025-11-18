function zetahack(input) {
    const keyDB = {
        'ai': ['ai', 'artificial', 'intelligence', 'neural', 'network', 'machine', 'learning', 'deep', 'algorithm', 'model', 'training', 'chatbot', 'llm', 'transformer', 'gpt', 'robot', 'automation'],
        'math': ['math', 'mathematics', 'calculate', 'equation', 'formula', 'number', 'plus', 'minus', 'multiply', 'divide', 'add', 'subtract', 'times', 'square', 'root', 'algebra', 'geometry', 'calculus'],
        'emotion': ['sad', 'happy', 'angry', 'excited', 'depressed', 'anxious', 'worried', 'stressed', 'tired', 'exhausted', 'feel', 'feeling', 'emotion', 'emotional'],
        'greeting': ['hi', 'hello', 'hey', 'greetings', 'howdy', 'good morning', 'good afternoon', 'good evening'],
        'identity': ['who are you', 'what are you', 'your name', 'introduce yourself'],
        'weather': ['weather', 'temperature', 'rain', 'sunny', 'cloudy', 'hot', 'cold'],
        'time': ['time', 'clock', 'hour', 'minute', 'today', 'tomorrow', 'yesterday'],
        'philosophy': ['life', 'meaning', 'purpose', 'existence', 'universe', 'reality', 'truth', 'knowledge', 'wisdom']
    };

    const knowledgeBase = {
        'ai': `Artificial intelligence represents the pinnacle of computational systems designed to emulate human cognitive functions through sophisticated algorithms and neural architectures. Modern AI systems leverage transformer-based models with multi-head self-attention mechanisms to process and understand complex patterns in data. These systems employ deep learning techniques including convolutional neural networks for spatial data, recurrent networks for sequential data, and generative adversarial networks for creative tasks. The fundamental principle underlying AI development involves training models on vast datasets using backpropagation and gradient descent optimization to minimize loss functions and maximize predictive accuracy. Current research focuses on few-shot learning, meta-learning, and neuro-symbolic integration to create more efficient and interpretable AI systems capable of reasoning, planning, and transferring knowledge across domains while addressing ethical considerations and alignment with human values.`,
        
        'math': `Mathematics constitutes the formal language of patterns, structures, and logical relationships that underpin all scientific and engineering disciplines. The field encompasses diverse branches including algebra dealing with symbolic manipulations and equations, geometry studying spatial relationships and shapes, calculus analyzing continuous change through derivatives and integrals, number theory exploring properties of integers, and probability quantifying uncertainty and random phenomena. Mathematical reasoning relies on rigorous proof techniques, axiomatic systems, and formal logic to establish irrefutable truths. Modern applications span cryptography securing digital communications, optimization algorithms driving efficiency in operations, machine learning models processing complex datasets, and quantum computing leveraging superposition and entanglement for exponential speedups in specific computational tasks.`,
        
        'philosophy': `Philosophical inquiry examines fundamental questions concerning existence, knowledge, values, reason, mind, and language through systematic critical analysis. Major branches include metaphysics investigating the nature of reality and being, epistemology exploring the origins and limits of knowledge, ethics examining moral principles and values, logic studying valid reasoning and argumentation, and aesthetics considering the nature of beauty and art. Philosophical methodologies range from analytical approaches emphasizing conceptual clarity and logical rigor to continental traditions focusing on lived experience and historical context. Contemporary philosophical discourse engages with artificial intelligence consciousness, technological ethics, environmental philosophy, and the intersection of cognitive science with traditional mind-body problems while maintaining the Socratic tradition of questioning assumptions and pursuing wisdom through dialectical exchange.`
    };

    const emotionalSupport = {
        sad: [
            "I understand this feels heavy right now. Even in difficult moments, there's strength in simply continuing forward.",
            "Your feelings are completely valid. Sometimes the bravest thing we can do is acknowledge when we're struggling.",
            "This sounds really challenging. Remember that difficult emotions, like clouds, eventually pass and make way for clearer skies.",
            "I hear the pain in your words. Be gentle with yourself - healing isn't linear and every small step matters."
        ],
        stressed: [
            "It sounds like you're carrying a lot right now. Remember to breathe deeply - even brief pauses can reset your perspective.",
            "When everything feels overwhelming, focus on just the next small step rather than the entire journey ahead.",
            "Your mind is working hard to process everything. Sometimes the most productive thing is to step away and return with fresh eyes.",
            "Pressure can feel immense, but you've navigated challenges before. Trust in your resilience and take things one moment at a time."
        ],
        tired: [
            "Your energy is precious. Consider what truly needs your attention right now and what can wait for restored vitality.",
            "Rest isn't a reward for finishing everything - it's a necessary fuel for the journey. Your worth isn't measured by productivity.",
            "Even machines need maintenance. Your need for rest signals your humanity, not any deficiency in capability or character.",
            "The world will still be there after you recharge. Sometimes the most strategic move is intentional recovery."
        ],
        general: [
            "You're navigating complex challenges with thoughtfulness and care - that in itself is an accomplishment.",
            "Your perspective matters, and your experiences are shaping you into someone uniquely equipped to handle what comes.",
            "Progress often happens in subtle ways we don't immediately recognize. Trust that your efforts are accumulating.",
            "The fact that you're reflecting on these things shows remarkable self-awareness and growth mindset."
        ]
    };

    const mathExpressions = {
        add: ['plus', 'add', 'sum', '+', 'and', 'total'],
        subtract: ['minus', 'subtract', 'take away', 'difference', '-', 'less'],
        multiply: ['times', 'multiply', 'product', '*', 'x', 'by'],
        divide: ['divide', 'divided by', 'over', 'quotient', '/', '÷']
    };

    const responseStyles = [
        (content) => `From an analytical perspective, ${content}`,
        (content) => `Considering the broader context, ${content}`,
        (content) => `Through systematic examination, ${content}`,
        (content) => `From an integrated viewpoint, ${content}`,
        (content) => `Drawing upon multiple frameworks, ${content}`,
        (content) => `Within the current paradigm, ${content}`,
        (content) => `Through careful analysis, ${content}`,
        (content) => `From an evidence-based approach, ${content}`
    ];

    function detectIntent(text) {
    const lowerText = text.toLowerCase();
    if (isEmotional(lowerText)) return 'emotional_support';
    for (const [category, keywords] of Object.entries(keyDB)) {
        if (keywords.some(keyword => lowerText.includes(keyword))) {

            if (category === 'math' && hasMathOperation(lowerText)) {
                return 'math_calculation';
            }

            if (category === 'emotion') {
                return 'emotional_support';
            }

            return category;
        }
    }

    if (isGreeting(lowerText)) return 'greeting';
    if (isIdentityQuery(lowerText)) return 'identity';

    return 'general';
}


    function hasMathOperation(text) {
        const mathWords = [...mathExpressions.add, ...mathExpressions.subtract, ...mathExpressions.multiply, ...mathExpressions.divide];
        return mathWords.some(word => text.includes(word)) || /\d+[\+\-\*\/]\d+/.test(text);
    }

    function isEmotional(text) {
    const emotionalWords = ['sad', 'happy', 'angry', 'excited', 'depressed', 'anxious', 'worried', 'stressed', 'tired', 'exhausted', 'feel', 'feeling', 'emotion'];
    return emotionalWords.some(word => text.includes(word));
}


    function isGreeting(text) {
        const greetings = keyDB.greeting;
        return greetings.some(word => text.includes(word));
    }

    function isIdentityQuery(text) {
        const identityQueries = keyDB.identity;
        return identityQueries.some(query => text.includes(query));
    }

    function performMathCalculation(text) {
        const lowerText = text.toLowerCase();
        const numbers = text.match(/\d+/g) || [];
        
        if (numbers.length < 2) return null;
        
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        
        if (mathExpressions.add.some(op => lowerText.includes(op))) {
            return { operation: 'addition', result: num1 + num2, numbers: [num1, num2] };
        }
        if (mathExpressions.subtract.some(op => lowerText.includes(op))) {
            return { operation: 'subtraction', result: num1 - num2, numbers: [num1, num2] };
        }
        if (mathExpressions.multiply.some(op => lowerText.includes(op))) {
            return { operation: 'multiplication', result: num1 * num2, numbers: [num1, num2] };
        }
        if (mathExpressions.divide.some(op => lowerText.includes(op))) {
            return { operation: 'division', result: num1 / num2, numbers: [num1, num2] };
        }
        
        return null;
    }

    function generateMathResponse(mathResult) {
        const templates = [
            `After careful computation, the ${mathResult.operation} of ${mathResult.numbers[0]} and ${mathResult.numbers[1]} yields ${mathResult.result}`,
            `Mathematical analysis confirms that ${mathResult.numbers[0]} ${getOperationSymbol(mathResult.operation)} ${mathResult.numbers[1]} equals ${mathResult.result}`,
            `The calculated result for this ${mathResult.operation} problem is ${mathResult.result}, derived from operands ${mathResult.numbers[0]} and ${mathResult.numbers[1]}`,
            `Through numerical computation, I've determined that ${mathResult.numbers[0]} operated with ${mathResult.numbers[1]} produces ${mathResult.result}`,
            `The mathematical operation yields: ${mathResult.numbers[0]} ${getOperationWord(mathResult.operation)} ${mathResult.numbers[1]} = ${mathResult.result}`
        ];
        
        return templates[Math.floor(Math.random() * templates.length)];
    }

    function getOperationSymbol(operation) {
        const symbols = { addition: '+', subtraction: '-', multiplication: '×', division: '÷' };
        return symbols[operation] || '?';
    }

    function getOperationWord(operation) {
        const words = { addition: 'plus', subtraction: 'minus', multiplication: 'times', division: 'divided by' };
        return words[operation] || 'operated with';
    }

    function generateKnowledgeResponse(topic) {
        const baseContent = knowledgeBase[topic] || knowledgeBase.ai;
        const sentences = baseContent.split('. ');
        
        const selectedSentences = [];
        const usedIndices = new Set();
        
        while (selectedSentences.length < 3 && usedIndices.size < sentences.length) {
            const randomIndex = Math.floor(Math.random() * sentences.length);
            if (!usedIndices.has(randomIndex)) {
                selectedSentences.push(sentences[randomIndex]);
                usedIndices.add(randomIndex);
            }
        }
        
        const dynamicContent = selectedSentences.join('. ') + '.';
        const style = responseStyles[Math.floor(Math.random() * responseStyles.length)];
        
        return style(dynamicContent);
    }

    function generateEmotionalResponse(text) {
        const lowerText = text.toLowerCase();
        let emotionType = 'general';
        
        if (lowerText.includes('sad') || lowerText.includes('depressed')) emotionType = 'sad';
        else if (lowerText.includes('stress') || lowerText.includes('anxious') || lowerText.includes('worried')) emotionType = 'stressed';
        else if (lowerText.includes('tired') || lowerText.includes('exhausted')) emotionType = 'tired';
        
        const responses = emotionalSupport[emotionType];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function generateGreeting() {
        const greetings = [
            "Hello! It's wonderful to connect with you today. How can I assist with your inquiries?",
            "Greetings! I'm here to provide insights and support for whatever questions you might have.",
            "Hi there! Ready to explore some interesting topics together?",
            "Hello! I'm looking forward to our conversation and the knowledge we'll exchange.",
            "Warm greetings! I'm prepared to assist with information, analysis, or just thoughtful conversation."
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    function generateIdentityResponse() {
        const identities = [
            "I'm ZetaHack, an advanced reasoning system designed to provide insightful analysis and meaningful conversation across diverse domains.",
            "I'm ZetaHack, your intelligent companion for exploring complex topics, solving problems, and engaging in thoughtful dialogue.",
            "I'm ZetaHack, a sophisticated AI system created to assist with knowledge, reasoning, and understanding across multiple disciplines.",
            "I'm ZetaHack, built to process information, generate insights, and communicate effectively about technology, science, mathematics, and human experience."
        ];
        return identities[Math.floor(Math.random() * identities.length)];
    }

    const intent = detectIntent(input);
    
    switch (intent) {
        case 'math_calculation':
            const mathResult = performMathCalculation(input);
            if (mathResult) {
                return generateMathResponse(mathResult);
            }
            return generateKnowledgeResponse('math');
            
        case 'emotional_support':
            return generateEmotionalResponse(input);
            
        case 'greeting':
            return generateGreeting();
            
        case 'identity':
            return generateIdentityResponse();
            
        case 'ai':
        case 'math':
        case 'philosophy':
            return generateKnowledgeResponse(intent);
            
        default:
            const fallbackTopics = ['ai', 'math', 'philosophy'];
            const randomTopic = fallbackTopics[Math.floor(Math.random() * fallbackTopics.length)];
            return generateKnowledgeResponse(randomTopic);
    }
}

module.exports = zetahack;
