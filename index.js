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


