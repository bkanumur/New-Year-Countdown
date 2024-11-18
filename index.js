const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const newYearEl = document.getElementById("new-year");
const celebrationMessage = document.getElementById("celebration-message");
const celebrationYearEl = document.getElementById("celebration-year");
const currentYear = new Date().getFullYear();
const upcomingNewYear = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
newYearEl.textContent = currentYear + 1;
celebrationYearEl.textContent = currentYear + 1;
function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = upcomingNewYear - currentTime;
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-container").classList.add("hidden");
    celebrationMessage.classList.remove("hidden");
    return;
  }
  const secondsInDay = 86400;
  const secondsInHour = 3600;
  const secondsInMinute = 60;
  const days = Math.floor(timeLeft / (secondsInDay * 1000));
  const hours = Math.floor((timeLeft % (secondsInDay * 1000)) / (secondsInHour * 1000));
  const minutes = Math.floor((timeLeft % (secondsInHour * 1000)) / (secondsInMinute * 1000));
  const seconds = Math.floor((timeLeft % (secondsInMinute * 1000)) / 1000);
  daysEl.innerHTML = `${days}`;
  hoursEl.innerHTML = `${hours}`;
  minutesEl.innerHTML = `${minutes}`;
  secondsEl.innerHTML = `${seconds}`;
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();