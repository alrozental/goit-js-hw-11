// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

let userSelectedDate = null;

const newDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      startBtn.disabled = true;
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
      });
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr(newDate, options);

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  newDate.disabled = true;

  const intervalId = setInterval(() => {
    const now = new Date();
    const diff = userSelectedDate - now;
    if (diff <= 0) {
      clearInterval(intervalId);

      daysData.textContent = '00';
      hoursData.textContent = '00';
      minutesData.textContent = '00';
      secondsData.textContent = '00';

      newDate.disabled = false;
      return;
    }
    const timeComponents = convertMs(diff);

    daysData.textContent = addLeadingZero(timeComponents.days);
    hoursData.textContent = addLeadingZero(timeComponents.hours);
    minutesData.textContent = addLeadingZero(timeComponents.minutes);
    secondsData.textContent = addLeadingZero(timeComponents.seconds);
  }, 1000);
});
