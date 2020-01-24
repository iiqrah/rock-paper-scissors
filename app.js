let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const resultMessage_p = document.querySelector('.result-message > p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getCompChoice() {

  let compChoiceArr = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random()*3);
  return compChoiceArr[randomNumber];

}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}


function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  resultMessage_p.innerHTML = ( toTitleCase(userChoice) + ' beats ' + compChoice + '. You win!');
}

function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  resultMessage_p.innerHTML = ( toTitleCase(userChoice) + ' beats ' + compChoice + '. You lose!');
}

function draw(userChoice, compChoice) {
  resultMessage_p.innerHTML = ('Both picked ' + userChoice + '. It\'s a draw!');

}

function game(userChoice) {

  compChoice = getCompChoice();

  console.log(userChoice+ ' '+compChoice);

  switch (userChoice+ ' '+compChoice) {
    case 'rock rock':
    case 'paper paper':
    case 'scissors scissors':
      console.log("It's a draw!");
      draw(userChoice, compChoice);
      break;

    case 'rock scissors':
    case 'paper rock':
    case 'scissors paper':
      console.log("You win!");
      win(userChoice, compChoice);
      break;

    case 'rock paper':
    case 'paper scissors':
    case 'scissors rock':
      console.log("You lose");
      lose(userChoice, compChoice);
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
