const playArea = document.getElementById('play-area');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
let score = 0;
let timeLeft = 30;
let interval;

function createMouse() {
    const mouse = document.createElement('div');
    mouse.classList.add('mouse');
    const x = Math.random() * (playArea.clientWidth - 50);
    const y = Math.random() * (playArea.clientHeight - 50);
    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;

    mouse.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = score;
        playArea.removeChild(mouse);
        createMouse();
    });

    playArea.appendChild(mouse);
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    createMouse();

    interval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert(`Игра окончена! Ваш счёт: ${score}`);
        }
    }, 1000);
}

playArea.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) return;
    if (timeLeft > 0) {
        score -= 5; // Штрафные очки за промах
        scoreDisplay.textContent = score;
    }
});

document.addEventListener('DOMContentLoaded', startGame);
