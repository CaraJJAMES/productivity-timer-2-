let timer;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);
  } else {
    clearInterval(timer);
    isRunning = false;
    alert('Pomodoro session complete! Take a break.');
    startBtn.textContent = 'Start Pomodoro';
  }
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    startBtn.textContent = 'Pause';
  } else {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Resume';
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timeLeft = 25 * 60;
  isRunning = false;
  timerDisplay.textContent = formatTime(timeLeft);
  startBtn.textContent = 'Start Pomodoro';
});
