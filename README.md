# ZetaAI
ZetaAI is an AI model trained by NeuralNexusLab.

#Models
1. Zeta:
   
    Zeta is a **chatBOT** 100% developed by NueralNexusLab.
    It's a base-rule program.

    API: https://zeta.nethacker.cloud/api/zeta?prompt=what%20is%20ai%3F

    Playground: https://nethacker.cloud/models/zeta

    Source Code: https://huggingface.co/NeuralNexusLab-Nh/Zeta/blob/main/index.js

3. ZetaHack:
   
    ZetaHack is a **AI** developed by NueralNexusLab & DeepSeek.
    It is GPT, MoE, RNN, RAG model.

    API: https://zeta.nethacker.cloud/api?prompt=what%20is%20ai%3F

    Playground: https://nethacker.cloud/models/zetahack

    Source Code: https://huggingface.co/NeuralNexusLab-Nh/Zeta/blob/main/zetahack.js

**Special Skills & How To Use**
1. Explain things:
```
What is AI?
```

2. Talk:
```
Hi!
```

3. Explain by itself:
```
Who are you?
```

4. Computation math:
```
What the answer of 5*(2^16+357-210)-13/10*2^3?
```

**Calling API:**

Method: GET
Address: ZetaHack: https://zeta.nethacker.cloud/api/zetahsck & Zeta: https:/zeta.nethacker.cloud/api/zeta
Query Params (Require): ?prompt= 

Return JSON:
{
  "model": "zeta-hack",
  "return": "Hello!",
  "length": 6
}

**Calling API Example:**
1. JavaScript
```javascript
fetch("https://zeta.nethacker.cloud/api?prompt=What%20is%20AI%3F")
  .then(res => res.json())
  .then((data) => {
    console.log(data.return)
  });
```

2. URL
```
https://zeta.nethacker.cloud/api?prompt=What%20is%20AI%3F
```

3. CLI
```
curl "https://zeta.nethacker.cloud/api?prompt=What%20is%20AI%3F"
```

[Source Code](https://huggingface.co/NeuralNexusLab-Nh/Zeta)

&copy; NeuralNexusLab Zeta Team
