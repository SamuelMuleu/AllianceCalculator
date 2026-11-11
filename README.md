# Calculadora de Alianças

Ferramenta para ourivesaria que calcula a **conquilha ideal** e o **peso de ouro** necessário para fundir uma aliança, a partir da numeração, altura (espessura) e largura.

🔗 **Demo:** https://alliance-calculator.vercel.app

## Como funciona

1. Escolha a numeração da aliança (a circunferência interna em mm é preenchida automaticamente).
2. Informe a altura e a largura em milímetros (aceita vírgula ou ponto).
3. O resultado aparece na hora: a conquilha mais próxima entre os tamanhos disponíveis (18; 19,8; 21,9; 24; 25,8 mm) e o peso estimado em gramas.

As fórmulas ficam em [`src/utils/calculations.ts`](src/utils/calculations.ts) e a tabela de numerações em [`src/utils/ringSizes.ts`](src/utils/ringSizes.ts).

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run lint
```
