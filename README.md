<h1 align="center">🎮 Jogo Par ou Ímpar – Feito em JavaScript</h1>

<p align="center">
  <img src="/Assets/Captura de tela 2025-10-27 161018.png" width="800" alt="Banner do Jogo Par ou Ímpar">
</p>

<p align="center">
  <b>Desafie a Alexa no clássico jogo de Par ou Ímpar!</b><br>
  Escolha <b>Par ✊</b> ou <b>Ímpar 🤞</b>, clique em <b>🎲 Vamos!</b> e veja quem vence!<br>
  Um projeto divertido feito com <b>HTML, CSS e JavaScript</b>.
</p>

---

## 🧠 Sobre o Projeto

Este é um mini jogo interativo de **Par ou Ímpar**, criado para treinar **lógica de programação** e manipulação do **DOM** com JavaScript.  
O jogo é totalmente funcional, com **sons, animação e placar em tempo real**.

---

## 🚀 Demonstração do Jogo

> O jogador escolhe **Par (✊)** ou **Ímpar (🤞)**, clica em **🎲 Vamos!**, e assiste ao sorteio dos números piscando na tela.  
> O resultado é exibido com emojis, cor dinâmica e som de vitória ou derrota.

💻 Exemplo de resultado:
🤖 Alexa ganhou!
Você jogou 4 e Alexa jogou 1.
Soma = 5 (Ímpar)

yaml
Copiar código

---

## 🧩 Estrutura de Arquivos

📂 par-ou-impar
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┗ 📂 Assets
┣ 🎵 play.mp3
┣ 🎵 ganhou.mp3
┣ 🎵 perdeu.mp3

yaml
Copiar código

---

## ⚙️ Como Funciona o Código

### 🔹 1. Seleção dos elementos HTML
```js
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const result = document.querySelector('.result');
Seleciona os elementos responsáveis por mostrar o placar e o resultado.

🔹 2. Sons do jogo
js
Copiar código
const playSound = new Audio('Assets/play.mp3');
const winSound = new Audio('Assets/win.mp3');
const lostSound = new Audio('Assets/lost.mp3');
Tocam nos momentos de início, vitória e derrota.

🔹 3. Escolha Par ou Ímpar
js
Copiar código
const playHuman = (choice) => {
  document.querySelectorAll('.buttons button').forEach(btn => btn.classList.remove('selected'));
  document.getElementById(choice).classList.add('selected');
};
O jogador escolhe entre Par ou Ímpar, e o botão selecionado ganha um destaque visual com a classe .selected.

🔹 4. Função principal do jogo
js
Copiar código
const playTheGame = (humanChoice, humanNumber, machineNumber) => { ... }
Responsável por:

Somar os números sorteados (0 a 5).

Verificar se o resultado é Par ou Ímpar.

Atualizar o placar e exibir o resultado.

Aplicar cores diferentes para vitória/derrota e tocar o som correspondente.

🔹 5. Sorteio animado
js
Copiar código
const playRandom = () => {
  result.innerHTML = 'Sorteando... 🎲';
  playSound.play();
  // Animação piscando números
};
Cria uma pequena animação antes de exibir o resultado, deixando o jogo mais dinâmico e divertido.

💅 Destaques Visuais (CSS)
css
Copiar código
.result {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  color: #222;
}

.selected {
  background-color: #ffcc00;
  transform: scale(1.1);
  transition: 0.2s;
}
Aumenta o tamanho da mensagem do resultado.

Destaca o botão selecionado com cor e leve aumento de tamanho.

🏆 Funcionalidades
✅ Escolha entre Par ou Ímpar
✅ Sorteio animado dos números
✅ Sons de jogo (início, vitória e derrota)
✅ Placar atualizado em tempo real
✅ Design simples, limpo e interativo

💡 Melhorias Futuras
Adicionar animação de vitória e derrota (piscando verde/vermelho).

Armazenar o placar no localStorage.

Criar um modo “melhor de 5”.

Adicionar vibração em dispositivos móveis.

🧑‍💻 Autor
Feito com ❤️ por Thiago Karpovicz Rodrigues
📚 Projeto criado para estudo e diversão com JavaScript puro.

<p align="center"> <img src="https://img.shields.io/badge/Feito%20com-JavaScript-yellow?style=for-the-badge&logo=javascript" /> <img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5" /> <img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3" /> </p> ```
