let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const resultMessage_p = document.getElementsByClassName('result-message');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getCompChoice() {

  let compChoiceArr = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random()*3);
  return compChoiceArr[randomNumber];

}

function draw() {
  console.log("It's a draw!");
}

function win() {
  console.log("You win!");
}

function lose() {
  console.log("You lose");
}

function game(userChoice) {

  compChoice = getCompChoice();

  console.log(userChoice+ ' '+compChoice);

  switch (userChoice+ ' '+compChoice) {
    case 'rock rock':
    case 'paper paper':
    case 'scissors scissors':
      draw();
      break;

    case 'rock scissors':
    case 'paper rock':
    case 'scissors paper':
      win();
      break;

    case 'rock paper':
    case 'paper scissors':
    case 'scissors rock':
      lose();
      break;
  }
}


function getUserChoice() {

  rock_div.addEventListener('click', function(){
    game("rock");
  })

  paper_div.addEventListener('click', function(){
    game("paper");
  })

  scissors_div.addEventListener('click', function(){
    game("scissors");
  })

}

getUserChoice();
