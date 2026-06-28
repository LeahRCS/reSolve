<div align="center">
  <h1>🔍 reSolve 🤖</h1>
  <p><em>Sua Revisora de Código Pragmática</em></p>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/OpenRouter-000000?style=for-the-badge&logo=openai&logoColor=white" alt="OpenRouter" />
</div>

<br />

## 📖 Sobre o Projeto

O **reSolve** é uma plataforma focada no que todo desenvolvedor precisa, mas tem medo de pedir: uma revisão de código brutal, honesta e puramente pragmática. Nada de saudações educadas ou explicações prolixas de como o seu laço `for` está "quase lá". Aqui a regra é clara: cola o código, toma a correção (em formato Markdown esteticamente impecável) e aprende a usar as APIs nativas direito.

Construído sob o manto de uma arquitetura cliente-servidor para esconder aquela sua chave da API que não deve ver a luz do dia, o sistema canaliza a ira — digo, a sabedoria — de Inteligências Artificiais avançadas (como GPT, Llama e Gemini) via OpenRouter. 

> **Aviso de Sanidade:** A IA que faz as revisões segue o sagrado princípio do *KISS* (Keep It Simple, Stupid). Ela vai refatorar seu código para a versão mais enxuta possível e, no final, ainda vai te lembrar humildemente de testar o que ela mesma sugeriu, porque até cérebros eletrônicos podem "alucinar" funções que só existem na Terra do Nunca.

---

## ✨ Principais Funcionalidades

- 🧑‍💻 **Análise Implacável:** Colete seus bugs de lógica ou de sintaxe, jogue no reSolve e receba uma análise cirúrgica com a alternativa mais moderna possível.
- 🧠 **Seletor de Cérebros (Modelos de IA):** Porque o OpenRouter tem fila. Alterne dinamicamente entre GPT OSS 120B (a lenda), Gemini 2.0 Flash Lite, Llama 3.3 ou Qwen 2.5 Coder. Se um modelo estiver de mau humor (erro 429), apenas escolha outro.
- 📋 **Cópia Rápida de Markdown:** Achou a refatoração incrível? Clique no botão "Copiar Markdown" e leve a documentação crua direto para o seu repositório. O botão até pisca um ✅ para você ter certeza de que funcionou.
- 🌈 **Bordas Animadas (RGB):** Porque um código limpo não é nada se a interface não tiver um gradiente animado brilhando em loop infinito nas bordas da sua tela. O front-end chora de orgulho (mas apenas no dark mode).
- 🌗 **Tema Claro/Escuro:** Respeitamos sua retina. O *Dark Mode* já vem ligado por padrão para manter sua sanidade, mas se você é do tipo que prefere programar de luz acesa, o *Light Mode* está a um clique.
- ℹ️ **Onboarding e FAQ Integrados:** Modais estilosos para caso bata aquela amnésia de como se cola um texto em uma caixa. Ou apenas se você quiser ler algumas perguntas e respostas (sim, eu faço as perguntas e eu as respondo).

| Funcionalidade | O que faz na prática |
| --- | --- |
| **Integração OpenRouter** | Rota `/api/analyze` no Node.js bate na API do OpenRouter injetando um System Prompt blindado. |
| **Tratamento de Markdown** | O front usa a biblioteca `marked.js` para renderizar a fúria da IA em um visual agradável. |
| **Prevenção de Inchaço** | O back-end é forçado por prompt a entregar sempre a refatoração mais objetiva possível (one-liners). |

---

## 🛠️ Arquitetura e Tecnologias

Um stack minimalista para garantir velocidade de desenvolvimento e zero dores de cabeça com builds complexas.

* **[Node.js](https://nodejs.org/) + [Express](https://expressjs.com/):** A dupla dinâmica no Back-End, recebendo as requisições, injetando chaves ocultas e devolvendo JSON.
* **HTML/CSS/JS Vanilla:** Porque frameworks são maravilhosos, mas às vezes a alma pede o bom e velho JavaScript raiz operando direto na DOM.
* **[OpenRouter API](https://openrouter.ai/):** O passaporte diplomático que permite acessar dezenas de LLMs de ponta sem precisar de quinze cartões de crédito diferentes.
* **[Marked.js](https://marked.js.org/):** Para converter a sopa de Markdown da IA num glorioso HTML formatado.

| Camada | Tecnologia |
| --- | --- |
| **Front-End** | HTML5, CSS3, JavaScript (Vanilla) |
| **Back-End** | Node.js (v18+) + Express |
| **Integrações** | dotenv, cors, fetch API nativa |
| **Inteligência** | Modelos variados via OpenRouter |
| **Tipografia** | Google Fonts (Fira Code para código + Inter para texto) |

---

## 🚀 Guia de Instalação (Pé na porta)

Para rodar o reSolve na sua máquina e sofrer as críticas do auditor no conforto do seu local host, siga o roteiro:

**Pré-requisito:** Ter o Node.js instalado.

### 1. Clone o Repositório
```bash
git clone https://github.com/LeahRCS/resolve.git
cd resolve
```

### 2. Instale as Dependências
O clássico comando que baixa metade da internet para a sua pasta `node_modules` (mentira, esse projeto é bem levinho):
```bash
npm install
```

### 3. A Chave do Báu do Tesouro (.env)
A aplicação precisa da sua chave do OpenRouter para respirar.
1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a sua chave no seguinte formato:
```env
PORT=3000
OPENROUTER_API_KEY=sk-or-v1-sua-chave-secreta-aqui
```
*(Nota: O `.gitignore` do projeto já barra a subida desse arquivo. Fique em paz.)*

### 4. Ligue os Motores
```bash
npm start
```
Se tudo deu certo, o terminal vai piscar um singelo `Servidor reSolve rodando na porta 3000`.

Acesse no navegador: **`http://localhost:3000`** e cole seu código sujo na textarea!

---

## 📜 Licença

MIT — Refatore, quebre, copie e cole.

---

<div align="center">
  <br />
  <em>Criado com muito 🫶 (e café) por <a href="https://github.com/LeahRCS">Leah R.C.S.</a></em>
  <br /><br />
</div>
