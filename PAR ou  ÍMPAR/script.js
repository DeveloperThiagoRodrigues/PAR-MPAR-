const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const result = document.querySelector('.result');
const playSound = new Audio('Assets/play.mp3');
const winSound = new Audio('Assets/ganhou.mp3');
const lostSound = new Audio('Assets/perdeu.mp3');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Emojis que aparecem na animação
const EMOJIS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];
const CHOICES = ['even', 'odd'];

// Função quando o jogador escolhe Par ou Ímpar e clica em "Vamos!"
const playRandom = () => {
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = 'Sorteando... 🎲';
    playSound.play();

    let count = 0;
    const interval = setInterval(() => {
        const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        resultElement.innerHTML = randomEmoji;
        count++;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        // Escolhas aleatórias de números (0 a 5)
        const humanNumber = Math.floor(Math.random() * 6);
        const machineNumber = Math.floor(Math.random() * 6);

        // Pega qual botão o jogador escolheu (Par ou Ímpar)
        const selected = document.querySelector('.selected');
        if (!selected) {
            resultElement.innerHTML = 'Escolha Par ou Ímpar antes de jogar!';
            return;
        }

        const humanChoice = selected.id === 'even' ? 'even' : 'odd';
        playTheGame(humanChoice, humanNumber, machineNumber);
    }, 2000);
};

// Quando o jogador clica em Par ou Ímpar
const playHuman = (choice) => {
    document.querySelectorAll('.buttons button').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(choice).classList.add('selected');
};

// Função principal do jogo
const playTheGame = (humanChoice, humanNumber, machineNumber) => {
    const sum = humanNumber + machineNumber;
    const resultType = sum % 2 === 0 ? 'even' : 'odd';

    console.log(`Humano escolheu ${humanChoice} (${humanNumber})`);
    console.log(`Máquina jogou ${machineNumber} → Soma: ${sum} (${resultType})`);

    if (resultType === humanChoice) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = `🎉 Você ganhou!<br>
        Você jogou <b>${humanNumber}</b> Seu Adversário(a) jogou <b>${machineNumber}</b>.<br>
        Soma = ${sum} (${resultType === 'even' ? 'Par' : 'Ímpar'})`;
        winSound.play();
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = `Adversário (a) GANHOU!<br>
        Você jogou <b>${humanNumber}</b> e Alexa jogou <b>${machineNumber}</b>.<br>
        Soma = ${sum} (${resultType === 'even' ? 'Par' : 'Ímpar'})`;
        lostSound.play();
    }
};
