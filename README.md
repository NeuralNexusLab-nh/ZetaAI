# ZetaAI
ZetaAI is an AI model trained by NeuralNexusLab.

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

1. JavaScript
```javascript
fetch("https://zeta.nethacker.cloud/api/zetahack?prompt=What%20is%20AI%3F")
  .then(res => res.json())
  .then((data) => {
    console.log(data.return)
  });
```

2. URL
```
https://zeta.nethacker.cloud/api/zetahack?prompt=What%20is%20AI%3F
```

3. CLI
```
curl "https://zeta.nethacker.cloud/api/zetahack?prompt=What%20is%20AI%3F"
```

[Source Code](https://huggingface.co/NeuralNexusLab-Nh/Zeta)

&copy; NeuralNexusLab Zeta Team
