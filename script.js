let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

const computerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

const playRound = (humanSelection, computerSelection) => {
  console.log(humanSelection, computerSelection);
  if (humanSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = `You tied! You both picked ${humanSelection}`;
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Rock crushes scissors";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Scissors cuts paper";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Paper covers rock";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Rock crushes scissors";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Scissors cuts paper";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Paper covers rock";
    outcomeDiv.appendChild(p);
  }
}

rockButton.addEventListener("click", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "rock";
  playRound(humanSelection, computerSelection);
})

paperButton.addEventListener("click", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "paper";
  playRound(humanSelection, computerSelection);
})

scissorsButton.addEventListener("click", () =>{
  const computerSelection = computerChoice();
  const humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
}) 

