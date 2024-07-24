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
    const p = document.createElement("p");
    p.innerText = `You tied! You both picked ${humanSelection}`;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Rock crushes scissors";
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Scissors cuts paper";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Paper covers rock";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Rock crushes scissors";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Scissors cuts paper";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Paper covers rock";
  }
}

rockButton.addEventListener("clic", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "rock";
  playRound(humanSelection, computerSelection);
})

paperButton.addEventListener("clic", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "paper";
  playRound(humanSelection, computerSelection);
})

scissorsButton.addEventListener("clic", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
}) 

