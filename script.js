let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const computerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

const playRound = (humanSelection, computerSelection) => {
  if (humanSelection === computerSelection) {
    return `You tied! You both picked ${humanSelection}`;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lost! Rock crushes scissors";
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    return "You won! Scissors cuts paper";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lost! Paper covers rock";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    return "You won! Rock crushes scissors";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lost! Scissors cuts paper";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return "You won! Paper covers rock";
  }
}
