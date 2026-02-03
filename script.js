//elemen
const startBtn = document.getElementById('startbtn');
const pauseBtn = document.getElementById('pausebtn');
const resetBtn = document.getElementById('resetbtn');

const pomodoroBtn = document.getElementById('pomodorobtn');
const shortBtn = document.getElementById('shortbrkbtn');
const longBtn = document.getElementById('longbrkbtn');

const progressText = document.querySelector('.progressbar-number');
const progressBar = document.querySelector('.progressbar');

// waktu
const TIMES = {
  POMODORO: 1500,
  SHORT: 300,
  LONG: 900,
};

let currentType = 'POMODORO';
let timerValue = TIMES[currentType];
let interval = null;

// event
startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;

pomodoroBtn.onclick = () => setMode('POMODORO');
shortBtn.onclick = () => setMode('SHORT');
longBtn.onclick = () => setMode('LONG');

// function
function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    timerValue--;
    updateUI();

    if (timerValue <= 0) {
      pauseTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  timerValue = TIMES[currentType];
  updateUI();
}

function setMode(type) {
  currentType = type;
  resetTimer();

  pomodoroBtn.classList.toggle('active', type === 'POMODORO');
  shortBtn.classList.toggle('active', type === 'SHORT');
  longBtn.classList.toggle('active', type === 'LONG');
}

function updateUI() {
  progressText.textContent = formatTime(timerValue);

  const total = TIMES[currentType];
  const progress = (timerValue / total) * 360;
  progressBar.style.setProperty('--progress', `${progress}deg`);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// INIT
updateUI();
