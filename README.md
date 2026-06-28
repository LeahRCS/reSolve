# reSolve - Revisor de Código Inteligente

## Objetivo do Projeto
A **reSolve** é uma plataforma focada em desenvolvimento e revisão de código que atua como uma revisora de código inteligente. Seu propósito é não ser apenas um chat genérico, mas sim uma ferramenta de nicho com uma finalidade clara: receber trechos de código-fonte e retornar uma análise técnica, apontando erros de sintaxe ou de lógica, e sugerindo alternativas para melhorar e corrigir o código.

A aplicação foi construída utilizando uma arquitetura cliente-servidor (Node.js + Express no Back-End e HTML/CSS/JS no Front-End), garantindo que a chave da API (OpenRouter) fique totalmente protegida e invisível para o lado do cliente.

## Estrutura da Aplicação
- **Entrada:** O usuário informa um trecho de código fonte em qualquer linguagem de programação através da área de texto da interface gráfica.
- **Processamento:** O Front-End envia o código para a API local (Express). O Back-End, de posse da API Key protegida e injetando um *System Prompt* robusto para forçar a persona de Revisor de Código, encaminha a requisição para o LLM via OpenRouter.
- **Saída:** O sistema exibe visualmente na interface do usuário (em formato Markdown amigável e estilizado) o relatório contendo os problemas encontrados e as correções sugeridas passo a passo.

## ✨ Funcionalidades Adicionais
- **Múltiplos Modelos:** Seleção dinâmica da IA pelo Front-End (ex: GPT OSS, Gemini, Llama, Qwen).
- **Cópia Rápida:** Botão para exportar o relatório cru em Markdown para a área de transferência.
- **Ajuda Integrada:** Modais de onboarding ("Como usar") e FAQ embutidos na interface.

---

## 🚀 Como Instalar e Executar o Projeto

Siga o passo a passo abaixo para rodar a aplicação na sua máquina local:

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.

### 2. Clonar ou Baixar o Repositório
Faça o download dos arquivos ou clone o repositório público:
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd reSolve
```

### 3. Instalar Dependências
Na raiz do projeto (onde está o arquivo `package.json`), execute o comando abaixo no terminal para instalar o Express, CORS e Dotenv:
```bash
npm install
```

### 4. Configurar a Chave da API (Arquivo .env)
Por medidas de segurança, a chave da API não foi enviada (comitada) para o GitHub. Você precisa configurá-la localmente:
1. Na raiz do projeto, localize o arquivo chamado `.env.example`.
2. Renomeie este arquivo para `.env` (remova o ".example").
3. Abra o arquivo `.env` e cole a sua chave do OpenRouter logo após o sinal de igual (sem aspas e sem espaços):
```env
PORT=3000
OPENROUTER_API_KEY=sk-or-v1-... (sua chave real aqui)
```

### 5. Executar o Servidor
Com as dependências instaladas e o `.env` devidamente configurado, inicie a aplicação com o comando:
```bash
npm start
```
O terminal exibirá a mensagem: `Servidor reSolve rodando na porta 3000`.

### 6. Acessar a Aplicação
Abra o seu navegador e acesse:
[http://localhost:3000](http://localhost:3000)

Insira um código, clique em "Analisar Código" e aguarde o relatório!
