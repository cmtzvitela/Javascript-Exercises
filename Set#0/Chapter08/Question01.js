const randomSentences = [
  "It is what it is",
  "Make it work",
  "This girl is on fire",
  "Ain't nobody got time fo' dat",
  "It's something",
  "Witchcraft!",
  "It's Britney, b*tch",
  "Now you know what time it is",
  "The cake is a lie",
  "The poison, The poison for Kuzco, the poison chosen especially to kill Kuzco. Kuzco's poison. That poison?",
];

function getRandomSentence() {
  console.log(randomSentences[Math.floor(Math.random() * randomSentences.length)]);
}

setInterval(getRandomSentence, 60 * 1000);
