//variabel
const startBtn = document.querySelector('#startbtn');
const stopBtn = document.querySelector('#pausebtn');
const resetBtn = document.querySelector('#resetBtn');
const progressbarNumber = document.querySelector(
  '.progressbar .progressbar-number'
);
const pomodoroBtn = document.getElementById('pomodorobtn');
const shortbrkBtn = document.getElementById('shortbrkbtn');
const shortbrBtn = document.getElementById('shortbrkbtn');
const longbrkBtn = document.getElementById('longbrkbtn');
const pomCount = document.querySelector('.pomodoro-count');

//inisialisasi
let pomodoroCount = 0;
const pomodororountillongbrk = 4;
const pomodorotimer = 1500; //25 menit
const shortbreaktimer = 300; //5 menit
const longbreaktimer = 900; //20 menit
let timerValue = pomodorotimer;
const multiplierValue = 360; //timer value
let progressInterval;
let pomodoroType = 'POMODORO';

//event listener
startBtn.addEventListener('click', () => {
  startTimer();
});
stopBtn.addEventListener('click', () => {
  pauseTimer();
});
pomodoroBtn.addEventListener('click', () => {
  setTimeType('POMODORO');
});
shortbrkBtn.addEventListener('click', () => {
  setTimeType('SHORTBREAK');
});
longbrkBtn.addEventListener('click', () => {
  setTimeType('LONGBREAK');
});
resetBtn.addEventListener('click', () => {
  setTimerType('LONGBREAK');
});

//function
function startTimer() {
  progressInterval = setInterval(() => {
    timerValue--;

    setProgressInfo();

    if (timerValue <= 0) {
      timerValue = 0;
      clearInterval(progressInterval);

      pomodoroCount++;

      pomCount.style.display = 'block';
      pomCount.style.color = 'white';
      pomCount.style.fontSize = '30px';
      pomCount.textContent = `Pomodoro Count ${pomodoroCount}`;

      if (pomodoroCount % pomodoroUntilLongBreak === 0) {
        longbrkBtn.style.display = 'flex';
      }

      setTimeType(pomodoroType);
    }
  }, 1000);
}

function setProgressInfo() {
  progressbarNumber.textContent = `${FormatNumberoString(timerValue)}`;
  progressbarNumber.style.background = `conic-gradient(rgb(243,72,109) ${(timerValue =
    multipliervalue)}deg,crimson 0deg`;
}

function NumbertoString(number) {
  const minutes = Math.trunc(number % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function pauseTimer() {
  clearInterval(progressInterval);
}
