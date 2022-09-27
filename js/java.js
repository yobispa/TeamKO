console.log("Game started!");

let computerDice = 0;
let playerDice = 0;
let playerScore = 0;
let computerScore = 0;
const computerBtn = document.body.querySelector('.computer-button');
const playerBtn = document.body.querySelector('.player-button');
const submit = document.body.querySelector('.submit');
// const playerSubmit = document.querySelector('submit');
// console.log("Document.body = " + document.body.innerHTML);

const playerName = prompt ("Wat is je username?. (Minstens 6 letters of nummers)", 'Sweaty');

document.getElementById("demo").innerHTML = playerName;
document.getElementById("demo1").innerHTML = playerName;

const ageRestriction= prompt ("Hoe oud ben je?", 18);

if (ageRestriction > 0 && ageRestriction < 18) {
  alert(`Je bent onder de 18. Jij bent ${ageRestriction} jaar oud.`);
} else if (ageRestriction > "a" && ageRestriction < "z") {
  alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
} else if (ageRestriction > "A" && ageRestriction < "Z") {
  alert('Er is een fout opgetreden. Type alleen nummers (bijv. 18).');
} else{
  alert(`Je bent ${ageRestriction} jaar oud.`);
}

function toggleClass() {
  this.classList.toggle('active');
} function addClass() {
  this.classList.add('finished');
}

if (computerBtn) {
  computerBtn.addEventListener('click', function (click) {
    computerDice = Math.floor(Math.random() * 5);
    computerDice++;
    console.log(`Computer gooit ${computerDice}`);
    document.getElementById("computer").innerHTML = computerDice;
  });
} else {
  console.log("Computer button not found!");
}

playerBtn.addEventListener("click", function (click) {
  playerDice = Math.floor(Math.random() * 5);
  playerDice++;
  console.log(`Speler gooit ${playerDice}`);
  document.getElementById("player").innerHTML = playerDice;

  checkWinner();
});

function checkWinner(){
 if (playerDice > computerDice) {
  document.getElementById("demo2").innerText = (`${playerName} gooit hoger. ${playerName} gooit ${playerDice - computerDice} meer hoger dan de computer. ${playerName} winss!!!`)
  console.log(`${playerName} gooit hoger. ${playerName} gooit ${playerDice}. ${playerName} wins!!!.`);
  playerScore = playerScore + 1;
  document.getElementById("playerScore1").innerText = (`${playerName} score  = ${playerScore}`);
 } else if (computerDice > playerDice) {
  document.getElementById("demo2").innerText = (`De computer gooit hoger. Computer gooit ${computerDice - playerDice} meer hoger dan ${playerName}. Computer winss!!!`)
  console.log(`De computer gooit hoger. De computer gooit ${computerDice}. ${playerName} heeft ${playerDice} gegooit. De computer wins!!!.`);
  computerScore = computerScore +  1;
  document.getElementById("computerScore1").innerText = (`Computer Score = ${computerScore}`)
} else{
  document.getElementById("demo2").innerText = ("Draw")
  console.log("Draw");
}};