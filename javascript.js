// Write the logic to get the computer choice
  // Create a new function named "getComputerChoice"
  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors"
  
  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Test the function
  //console.log(getComputerChoice());  

  /*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let result = getRandomInt(3);
  console.log(result);

  function getComputerChoice() {
    if (result === 0) {
      return "rock";
    } else if (result === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }*/

// Write the logic to get the human choice.
  // Create a new function named "getHumanChoice"
  // Write the code so that "getHumanChoice" will return one of the valid choices depending on what the user inputs
  
  function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    choice = choice.toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Please choose 'rock', 'paper', or 'scissors'");
      choice = choice.toLowerCase();
    }
    return choice;
  }

  /*if (choice.toLowerCase() === "rock") {
      return choice;
    } else if (choice.toLowerCase() === "paper") {
      return choice;
    } else if (choice.toLowerCase() === "scissors") {
      return choice;
    } else {
      alert ("Please enter a valid entry, choose one of the following:\n'Rock'\n'Paper'\n'Scissors'");
    }*/

  // Test the function
  //console.log(getHumanChoice());
  

// Declare the players score variables
  let humanScore = 0;
  let computerScore = 0;

//Write the logic to play a single round
  //Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice)

    if (humanChoice === computerChoice) {
      alert("It's a tie!");
    }

    /*if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        alert("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
      }
      else if (computerChoice === "paper") {
        alert("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
      }
    }*/
    
    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        alert("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
      }
      else if (computerChoice === "scissors") {
        alert("You lose! Scissors beats Paper.");
        computerScore = computerScore + 1;
      }
    }

    /*if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        alert("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
      }
      else if (computerChoice === "paper") {
        alert("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
      }
    }*/
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  