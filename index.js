const fs = require('fs');


function selectRandomWord() {
  const words = fs.readFileSync('words.txt', 'utf8').split('\n');
  let randomWord = '';
  while (randomWord.length !== 5) {
    randomWord = words[Math.floor(Math.random() * words.length)].trim().toLowerCase();
  }
  return randomWord;
}

console.log(selectRandomWord());


//this goes in the web page:

// const timerDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
// let timerExpirationTime = localStorage.getItem('timerExpirationTime');

// if (!timerExpirationTime || Date.now() > timerExpirationTime) {
//   // The timer has not been set or has expired, so set a new timer
//   timerExpirationTime = Date.now() + timerDuration;
//   localStorage.setItem('timerExpirationTime', timerExpirationTime);
// }

// // Start the timer countdown
// const countdownInterval = setInterval(() => {
//   const remainingTime = timerExpirationTime - Date.now();

//   if (remainingTime <= 0) {
//     // The timer has expired, so clear the interval and do something
//     clearInterval(countdownInterval);
//     localStorage.removeItem('timerExpirationTime');
//     console.log('Timer expired!');
//   } else {
//     // Update the remaining time
//     console.log(`Timer: ${remainingTime / 1000} seconds remaining`);
//   }
// }, 1000);