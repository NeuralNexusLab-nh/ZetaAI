function zetahack(input) {
    const keyDB = {
        'ai': ['ai', 'artificial', 'intelligence', 'neural', 'network', 'machine', 'learning', 
               'deep', 'algorithm', 'model', 'training', 'chatbot', 'llm', 'transformer', 'gpt',
               'robot', 'automation', 'smart', 'system', 'cognitive', 'perception', 'reasoning'],
        
        'cybersecurity': ['cybersecurity', 'security', 'hacking', 'malware', 'firewall', 'encryption',
                         'authentication', 'vulnerability', 'penetration', 'testing', 'zero', 'day',
                         'phishing', 'ransomware', 'intrusion', 'detection', 'siem', 'soc'],
        
        'networking': ['networking', 'network', 'tcp', 'ip', 'router', 'switch', 'lan', 'wan', 'vlan',
                      'vpn', 'dns', 'dhcp', 'http', 'https', 'ssl', 'tls', 'bandwidth', 'latency'],
        
        'programming': ['programming', 'coding', 'javascript', 'python', 'java', 'c++', 'rust', 'go',
                       'algorithm', 'data', 'structure', 'oop', 'functional', 'api', 'sdk', 'framework'],
        
        'web_development': ['web', 'development', 'html', 'css', 'javascript', 'react', 'vue', 'angular',
                           'node', 'express', 'database', 'mongodb', 'mysql', 'postgresql', 'rest', 'api'],
        
        'datascience': ['data', 'science', 'analytics', 'big', 'data', 'machine', 'learning', 'statistics',
                       'visualization', 'python', 'r', 'pandas', 'numpy', 'sql', 'etl', 'warehouse'],
        
        'cloud_computing': ['cloud', 'computing', 'aws', 'azure', 'gcp', 'iaas', 'paas', 'saas', 'serverless',
                           'lambda', 'container', 'docker', 'kubernetes', 'microservices', 'api'],
        
        'iot': ['iot', 'internet', 'things', 'sensor', 'actuator', 'embedded', 'system', 'arduino', 'raspberry',
               'pi', 'mqtt', 'coap', 'edge', 'computing', 'smart', 'home', 'industrial'],
        
        'blockchain': ['blockchain', 'cryptocurrency', 'bitcoin', 'ethereum', 'smart', 'contract', 'defi',
                      'nft', 'web3', 'distributed', 'ledger', 'consensus', 'mining', 'wallet'],
        
        'quantum': ['quantum', 'computing', 'qubit', 'superposition', 'entanglement', 'decoherence',
                   'quantum', 'gate', 'algorithm', 'shor', 'grover', 'quantum', 'supremacy'],
        
        'biology': ['biology', 'biological', 'cell', 'dna', 'rna', 'protein', 'enzyme', 'metabolism',
                   'genetics', 'genome', 'evolution', 'ecology', 'biodiversity', 'microbiology'],
        
        'chemistry': ['chemistry', 'chemical', 'molecule', 'atom', 'element', 'compound', 'reaction',
                     'organic', 'inorganic', 'physical', 'quantum', 'chemistry', 'catalyst'],
        
        'physics': ['physics', 'quantum', 'mechanics', 'relativity', 'thermodynamics', 'electromagnetism',
                   'particle', 'nuclear', 'astrophysics', 'cosmology', 'string', 'theory'],
        
        'environment': ['environment', 'ecological', 'sustainability', 'climate', 'change', 'renewable',
                       'energy', 'carbon', 'footprint', 'biodiversity', 'conservation'],
        
        'transportation': ['transportation', 'autonomous', 'vehicle', 'ev', 'electric', 'vehicle', 'aviation',
                          'aerospace', 'logistics', 'supply', 'chain', 'public', 'transit'],
        
        'architecture': ['architecture', 'building', 'design', 'sustainable', 'construction', 'urban', 'planning',
                        'smart', 'city', 'bim', 'parametric', 'design', 'structural', 'engineering'],
        
        'music': ['music', 'audio', 'sound', 'composition', 'production', 'digital', 'audio', 'workstation',
                 'synthesis', 'sampling', 'mixing', 'mastering', 'acoustics', 'harmony', 'melody'],
        
        'gaming': ['gaming', 'game', 'development', 'unity', 'unreal', 'engine', 'vr', 'ar', 'graphics',
                  'rendering', 'gameplay', 'mechanics', 'level', 'design', 'narrative'],
        
        'wireless': ['wireless', 'communication', '5g', '6g', 'wifi', 'bluetooth', 'zigbee', 'lora', 'wan',
                    'cellular', 'network', 'modulation', 'antenna', 'rf', 'signal'],
        
        'medical': ['medical', 'healthcare', 'biomedical', 'diagnostic', 'treatment', 'telemedicine',
                   'medical', 'imaging', 'mri', 'ct', 'scan', 'genomic', 'medicine'],
        
        'finance': ['finance', 'financial', 'investment', 'trading', 'algorithmic', 'trading', 'fintech',
                   'blockchain', 'cryptocurrency', 'risk', 'management', 'portfolio'],
        
        'education': ['education', 'educational', 'pedagogy', 'andragogy', 'elearning', 'mooc', 'edtech',
                     'adaptive', 'learning', 'gamification', 'curriculum', 'design'],
        
        'psychology': ['psychology', 'cognitive', 'behavioral', 'neuroscience', 'psychotherapy', 'clinical',
                      'developmental', 'social', 'psychology', 'personality', 'intelligence'],
        
        'mathematics': ['mathematics', 'algebra', 'calculus', 'geometry', 'topology', 'number', 'theory',
                       'probability', 'statistics', 'optimization', 'linear', 'algebra']
    };

    const valueDB = {
        'ai': [
            "Artificial intelligence leverages deep neural architectures with backpropagation optimization to achieve human-level cognitive performance across diverse domains.",
            "Transformer-based models utilize self-attention mechanisms for contextual understanding, enabling state-of-the-art natural language processing capabilities.",
            "Reinforcement learning frameworks employ policy gradient methods and Q-learning to optimize decision-making in complex, dynamic environments.",
            "Generative adversarial networks establish minimax equilibria between generator and discriminator networks for realistic synthetic data generation."
        ],
        
        'cybersecurity': [
            "Zero-trust architectures implement microsegmentation and continuous authentication to mitigate lateral movement in compromised networks.",
            "Public key infrastructure establishes cryptographic trust chains through certificate authorities and digital signature verification.",
            "Advanced persistent threats employ sophisticated social engineering and polymorphic malware to bypass traditional security controls.",
            "Homomorphic encryption enables computation on ciphertext, preserving data confidentiality during cloud processing operations."
        ],
        
        'networking': [
            "Software-defined networking decouples control and data planes, enabling programmable network management through centralized controllers.",
            "Border Gateway Protocol employs path vector algorithms for inter-autonomous system routing in global internet infrastructure.",
            "Quality of Service mechanisms implement differentiated services code points for traffic prioritization and bandwidth allocation.",
            "Multiprotocol Label Switching establishes label-switched paths for efficient packet forwarding in carrier-grade networks."
        ],
        
        'programming': [
            "Functional programming paradigms emphasize immutable data structures and higher-order functions for robust, testable codebases.",
            "Concurrent programming models utilize goroutines and channels for efficient parallel execution and synchronization.",
            "Memory management systems implement garbage collection algorithms with generational hypothesis optimization.",
            "Static type systems provide compile-time verification through Hindley-Milner type inference and parametric polymorphism."
        ],
        
        'web_development': [
            "Progressive Web Apps implement service workers for offline functionality and web app manifests for native-like installation.",
            "Single Page Applications utilize client-side routing and virtual DOM diffing for seamless user experiences.",
            "GraphQL schemas provide strongly-typed APIs with introspective capabilities and declarative data fetching.",
            "WebAssembly enables near-native performance execution through stack-based virtual machine architecture."
        ],
        
        'datascience': [
            "Ensemble methods aggregate multiple weak learners through bagging and boosting techniques for improved predictive accuracy.",
            "Dimensionality reduction algorithms employ principal component analysis and t-SNE for feature space visualization.",
            "Time series analysis utilizes autoregressive integrated moving average models for temporal pattern forecasting.",
            "Bayesian inference implements Markov Chain Monte Carlo sampling for posterior distribution estimation."
        ],
        
        'cloud_computing': [
            "Serverless architectures employ event-driven execution models with automatic scaling and pay-per-use billing.",
            "Container orchestration platforms implement declarative desired state management through etcd distributed key-value stores.",
            "Infrastructure as Code utilizes idempotent configuration management for reproducible environment provisioning.",
            "Microservices architectures enforce bounded contexts and domain-driven design principles for scalable system decomposition."
        ],
        
        'iot': [
            "Constrained Application Protocol implements RESTful architecture for resource-constrained IoT device communication.",
            "Edge computing frameworks reduce latency through distributed fog computing nodes and local data processing.",
            "Digital twin technology creates virtual representations of physical assets for predictive maintenance and simulation.",
            "LPWAN technologies employ spread spectrum modulation for long-range, low-power IoT connectivity."
        ],
        
        'blockchain': [
            "Byzantine Fault Tolerance consensus algorithms ensure network integrity despite malicious node behavior in distributed systems.",
            "Elliptic Curve Cryptography generates public-private key pairs for digital signature verification in cryptocurrency transactions.",
            "Merkle Patricia Tries provide efficient cryptographic verification of transaction inclusion in blockchain state databases.",
            "Proof of Stake validators secure networks through economic stake deposition and slashing conditions for misbehavior."
        ],
        
        'quantum': [
            "Quantum entanglement enables superdense coding and quantum teleportation through non-local correlation phenomena.",
            "Surface code quantum error correction achieves fault tolerance through topological protection and syndrome measurement.",
            "Quantum Fourier transform provides exponential speedup for period finding in Shor's factorization algorithm.",
            "Adiabatic quantum computation utilizes quantum annealing for global optimization problem solving."
        ],
        
        'biology': [
            "CRISPR-Cas9 systems employ guide RNA and Cas nuclease for precise genome editing through homology-directed repair.",
            "Next-generation sequencing utilizes bridge amplification and fluorescent nucleotide incorporation for high-throughput DNA analysis.",
            "Optogenetics enables neuronal control through channelrhodopsin light-sensitive ion channel expression.",
            "Synthetic biology implements genetic circuit design with promoter engineering and feedback regulation."
        ],
        
        'chemistry': [
            "Density functional theory calculates electronic structure through Kohn-Sham equations and exchange-correlation functionals.",
            "Retrosynthetic analysis disassembles target molecules into simpler precursors using transform-based strategic bonds.",
            "Supramolecular chemistry employs host-guest interactions and molecular recognition for self-assembling systems.",
            "Organometallic catalysis utilizes transition metal complexes for carbon-carbon bond formation through oxidative addition."
        ],
        
        'physics': [
            "Quantum field theory describes particle interactions through gauge boson exchange and renormalization group flow.",
            "General relativity models gravitational phenomena through spacetime curvature and Einstein field equations.",
            "Standard Model of particle physics classifies elementary particles through gauge symmetry groups and Higgs mechanism.",
            "Condensed matter physics explores emergent phenomena including superconductivity and topological insulators."
        ],
        
        'environment': [
            "Life cycle assessment quantifies environmental impacts through inventory analysis and impact category characterization.",
            "Carbon capture technologies employ amine-based absorption and pressure swing adsorption for greenhouse gas sequestration.",
            "Circular economy principles implement material flow analysis and industrial symbiosis for waste elimination.",
            "Renewable energy systems utilize photovoltaic effect and Betz limit optimization for sustainable power generation."
        ],
        
        'transportation': [
            "Autonomous vehicle systems implement simultaneous localization and mapping with sensor fusion for environmental perception.",
            "Electric vehicle powertrains employ permanent magnet synchronous motors with regenerative braking energy recovery.",
            "Air traffic management utilizes automatic dependent surveillance-broadcast for precise aircraft positioning.",
            "Hyperloop systems achieve reduced pressure tube environments for minimal aerodynamic drag at high velocities."
        ],
        
        'architecture': [
            "Building Information Modeling implements parametric object-oriented design with clash detection and quantity takeoff.",
            "Passive house standards achieve energy efficiency through thermal bridge-free construction and heat recovery ventilation.",
            "Structural optimization employs topology optimization algorithms for material-efficient load-bearing systems.",
            "Biophilic design principles incorporate nature-connectedness and environmental psychology for occupant well-being."
        ],
        
        'music': [
            "Digital audio workstations implement non-destructive editing with real-time plugin processing and automation.",
            "Additive synthesis constructs complex timbres through Fourier analysis and harmonic partial summation.",
            "Spatial audio rendering employs head-related transfer functions for three-dimensional sound localization.",
            "Algorithmic composition utilizes Markov chains and genetic algorithms for generative music creation."
        ],
        
        'gaming': [
            "Real-time rendering employs physically-based rendering with global illumination and subsurface scattering.",
            "Game engines implement entity-component-system architecture for flexible game object management.",
            "Procedural content generation utilizes noise functions and wave function collapse for infinite world creation.",
            "Network synchronization employs deterministic lockstep and client-side prediction for multiplayer consistency."
        ],
        
        'wireless': [
            "Orthogonal frequency-division multiplexing mitigates multipath fading through cyclic prefix insertion.",
            "Massive MIMO systems achieve spatial multiplexing through precoding and channel state information feedback.",
            "Beamforming techniques employ phased array antennas for directional signal transmission and interference reduction.",
            "Cognitive radio implements spectrum sensing and dynamic spectrum access for efficient frequency utilization."
        ],
        
        'medical': [
            "Magnetic resonance imaging utilizes nuclear magnetic resonance and gradient coils for soft tissue visualization.",
            "Genome-wide association studies identify single nucleotide polymorphisms correlated with disease susceptibility.",
            "Neural interfaces employ Utah arrays and optrodes for bidirectional brain-computer communication.",
            "Precision medicine implements pharmacogenomics and biomarker identification for personalized treatment regimens."
        ],
        
        'finance': [
            "Black-Scholes-Merton model prices derivatives through stochastic calculus and risk-neutral valuation.",
            "High-frequency trading implements market microstructure analysis and colocation for latency arbitrage.",
            "Portfolio optimization employs mean-variance analysis and capital asset pricing model for efficient frontier construction.",
            "Risk management utilizes value at risk and expected shortfall for quantitative financial risk assessment."
        ],
        
        'education': [
            "Constructivist pedagogy emphasizes scaffolded learning and zone of proximal development for knowledge construction.",
            "Adaptive learning systems implement knowledge space theory and Bayesian knowledge tracing for personalized instruction.",
            "Gamification mechanics employ self-determination theory and flow state induction for enhanced learner engagement.",
            "Learning analytics utilize educational data mining and social network analysis for institutional decision support."
        ],
        
        'psychology': [
            "Cognitive behavioral therapy implements cognitive restructuring and behavioral activation for psychopathological treatment.",
            "Functional magnetic resonance imaging measures blood-oxygen-level-dependent signals for neural activity localization.",
            "Dual-process theory differentiates between automatic System 1 and controlled System 2 cognitive processing.",
            "Neuroplasticity mechanisms involve long-term potentiation and dendritic spine remodeling for experience-dependent change."
        ],
        
        'mathematics': [
            "Category theory abstracts mathematical structures through objects, morphisms, and universal properties.",
            "Galois theory establishes correspondence between field extensions and group theory for polynomial solvability.",
            "Partial differential equations model physical phenomena through separation of variables and characteristic methods.",
            "Computational complexity theory classifies problems through polynomial-time reduction and complexity class hierarchy."
        ]
    };

    const openings = [
        "From a technical perspective regarding {topic}, current research demonstrates that ",
        "In advanced {topic} systems, empirical evidence confirms that ",
        "Modern {topic} frameworks fundamentally operate through mechanisms where ",
        "Cutting-edge {topic} implementations typically leverage architectures wherein ",
        "Contemporary {topic} methodologies consistently employ approaches where ",
        "State-of-the-art {topic} solutions predominantly utilize techniques whereby ",
        "Advanced {topic} paradigms systematically incorporate principles where ",
        "Sophisticated {topic} infrastructures characteristically implement systems where ",
        "Innovative {topic} platforms essentially function through processes wherein ",
        "Next-generation {topic} technologies fundamentally rely on architectures where "
    ];

    const closings = [
        " thereby establishing new paradigms for {topic} innovation and development.",
        " which fundamentally transforms conventional approaches to {topic} implementation.",
        " consequently enabling unprecedented capabilities in {topic} applications.",
        " thus creating novel opportunities for {topic} advancement and refinement.",
        " thereby catalyzing significant progress in {topic} research and deployment.",
        " which substantially enhances the efficacy of {topic} methodologies.",
        " consequently driving rapid evolution in {topic} technologies and practices.",
        " thus establishing robust foundations for future {topic} breakthroughs.",
        " thereby facilitating sophisticated {topic} solutions across diverse domains.",
        " which critically informs next-generation {topic} architectures and systems."
    ];

    const wordConnections = {
        'artificial intelligence leverages': ['deep', 'sophisticated', 'advanced', 'complex'],
        'neural architectures with': ['backpropagation', 'attention', 'convolutional', 'recurrent'],
        'transformer-based models': ['utilize', 'implement', 'leverage', 'employ'],
        'self-attention mechanisms': ['enable', 'facilitate', 'allow', 'permit'],
        'reinforcement learning': ['frameworks', 'algorithms', 'systems', 'methods'],
        'generative adversarial': ['networks', 'models', 'systems', 'architectures'],
        'zero-trust architectures': ['implement', 'utilize', 'employ', 'leverage'],
        'public key': ['infrastructure', 'cryptography', 'encryption', 'authentication'],
        'advanced persistent': ['threats', 'attacks', 'campaigns', 'operations'],
        'software-defined networking': ['decouples', 'separates', 'divides', 'splits'],
        'border gateway protocol': ['employs', 'uses', 'utilizes', 'implements'],
        'quality of service': ['mechanisms', 'protocols', 'systems', 'methods'],
        'functional programming': ['paradigms', 'languages', 'systems', 'approaches'],
        'concurrent programming': ['models', 'systems', 'languages', 'frameworks'],
        'memory management': ['systems', 'algorithms', 'techniques', 'methods'],
        'progressive web': ['apps', 'applications', 'platforms', 'systems'],
        'single page': ['applications', 'interfaces', 'systems', 'platforms'],
        'graphql schemas': ['provide', 'offer', 'deliver', 'supply'],
        'ensemble methods': ['aggregate', 'combine', 'integrate', 'merge'],
        'dimensionality reduction': ['algorithms', 'techniques', 'methods', 'approaches']
    };

    const greetings = {
        'hi': ["Hey there! 👋", "Hi! Good to see you!", "Hello! How are you feeling today?", "Hey! What's up?"],
        'hello': ["Hello! 🌟", "Hi there!", "Nice to see you!", "Greetings!"],
        'hey': ["Hey! 😊", "Heya!", "Yo!", "Hi!"],
        'who are you': [
            "I'm ZetaHack, a sophisticated AI system with specialized knowledge across multiple domains!",
            "I'm ZetaHack, your knowledgeable companion for exploring complex topics together.",
            "I'm ZetaHack, built with an extensive knowledge base and dynamic response generation.",
            "I'm ZetaHack, designed to provide insightful perspectives across science, technology, and beyond!"
        ],
        'what are you': [
            "I'm ZetaHack, an advanced AI system running on pure JavaScript with comprehensive domain expertise!",
            "I'm ZetaHack, a knowledge engine capable of discussing everything from quantum computing to web development!",
            "I'm ZetaHack, your gateway to understanding complex concepts through dynamic, personalized responses!"
        ]
    };

    function detectGreeting(text) {
        const lowerText = text.toLowerCase().trim();
        const greetingPatterns = {
            'hi': ['hi', 'hello', 'hey', 'greetings', 'howdy'],
            'who are you': ['who are you', 'what are you', 'introduce yourself', 'your identity'],
            'what are you': ['what are you', 'what do you do', 'your purpose', 'your function']
        };
      
        for (const [category, patterns] of Object.entries(greetingPatterns)) {
            for (const pattern of patterns) {
                const similarity = calculateSimilarity(lowerText, pattern);
                if (similarity >= 0.7) {
                    return category;
                }
            }
        }
        return null;
    }

    function calculateSimilarity(str1, str2) {
        const words1 = str1.split(' ');
        const words2 = str2.split(' ');
        let matches = 0;
        
        for (const word1 of words1) {
            for (const word2 of words2) {
                if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
                    matches++;
                    break;
                }
            }
        }
        
        const maxLength = Math.max(words1.length, words2.length);
        return matches / maxLength;
    }

    function cleanText(text) {
        return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(word => word.length > 2);
    }

    function detectTopic(words) {
        for (const [topic, keywords] of Object.entries(keyDB)) {
            if (keywords.some(keyword => words.includes(keyword))) {
                return topic;
            }
        }
        return 'ai';
    }

    function getRandomArticle(topic) {
        const articles = valueDB[topic] || valueDB['ai'];
        return articles[Math.floor(Math.random() * articles.length)];
    }

    function generateDynamicSentence(baseArticle) {
        const words = baseArticle.split(' ');
        if (words.length < 4) return baseArticle;
        
        for (let i = 0; i < words.length - 3; i++) {
            const threeWords = words.slice(i, i + 3).join(' ');
            if (wordConnections[threeWords]) {
                const possibleNext = wordConnections[threeWords];
                const nextWord = possibleNext[Math.floor(Math.random() * possibleNext.length)];
                
                const newWords = [...words];
                newWords[i + 3] = nextWord;
                return newWords.join(' ');
            }
        }
        
        return baseArticle;
    }

    const detectedGreeting = detectGreeting(input);
    
    if (detectedGreeting && greetings[detectedGreeting]) {
        const greetingResponses = greetings[detectedGreeting];
        return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    }

    const cleanedInput = cleanText(input);
    const detectedTopic = detectTopic(cleanedInput);
    const baseArticle = getRandomArticle(detectedTopic);
    const dynamicArticle = generateDynamicSentence(baseArticle);
    
    const opening = openings[Math.floor(Math.random() * openings.length)].replace('{topic}', detectedTopic);
    const closing = closings[Math.floor(Math.random() * closings.length)].replace('{topic}', detectedTopic);
    
    return opening + dynamicArticle + closing;
}

module.exports = zetahack;
