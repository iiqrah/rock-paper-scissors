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

function game(userChoice) {

  compChoice = getCompChoice();

  console.log("You pressed "+ userChoice);
  console.log("Comp pressed "+ compChoice);


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
