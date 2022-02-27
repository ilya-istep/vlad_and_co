'use strict';

// main-timer

let DEADLINE = '2022-05-11';

function getTimeRemaining(endtime) {
  const TOTAL    = Date.parse(endtime) - Date.parse(new Date()),
        DAYS    = Math.floor(TOTAL / (1000 * 60 * 60 * 24)),
        HOURS   = Math.floor((TOTAL / (1000 * 60 * 60)) % 24),
        MINUTES = Math.floor((TOTAL / 1000 / 60) % 60),
        SECONDS = Math.floor((TOTAL / 1000) % 60);
        
  return {
    'total': TOTAL,
    'days': DAYS,
    'hours':HOURS,
    'minutes':MINUTES,
    'seconds': SECONDS,
  }
}

function setClock(selector, endtime) {
  const TIMER        = document.querySelector(selector),
        DAYS         = TIMER.querySelector('.main-timer__days'),
        HOURS        = TIMER.querySelector('.main-timer__hours'),
        MINUTES      = TIMER.querySelector('.main-timer__minutes'),
        SECONDS      = TIMER.querySelector('.main-timer__seconds'),
        TIMEINTERVAL = setInterval(updateClock, 1000);

  function updateClock() {
    const TIME = getTimeRemaining(endtime);
  
    DAYS.textContent = addZero(TIME.days);
    HOURS.textContent = addZero(TIME.hours);
    MINUTES.textContent = addZero(TIME.minutes);
    SECONDS.textContent = addZero(TIME.seconds);

    if(TIME.total <= 0) {
      clearInterval(TIMEINTERVAL);
    }
  }

  updateClock();
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

// function addZero(num) {
//   num < 10 ? `0${num}` : num;
// }

setClock('.main-timer__counter', DEADLINE);