// Write the logic to get the computer choice
  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Write the logic to get the human choice
  function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    choice = choice.toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Please choose 'rock', 'paper', or 'scissors'");
      choice = choice.toLowerCase();
    }
    return choice;
  }

// Declare the players score variables
  let humanScore = 0;
  let computerScore = 0;

// Write the logic to play the entire game
  function playGame(n) {

    if (n > 0) {
      function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) {
          alert(`It's a tie! 
            Your score: ${humanScore} 
            Computer score: ${computerScore}`);
        }
    
        if (humanChoice === "rock") {
          if (computerChoice === "scissors") {
            alert(`You win! Rock beats Scissors. 
              Your score: ${humanScore += 1}
              Computer score: ${computerScore}`);
          }
          else if (computerChoice === "paper") {
            alert(`You lose! Paper beats Rock.
              Your score: ${humanScore}
              Computer score: ${computerScore += 1}`);
          }
        }
        
        if (humanChoice === "paper") {
          if (computerChoice === "rock") {
            alert(`You win! Paper beats Rock.
              Your score: ${humanScore += 1}
              Computer score: ${computerScore}`);
          }
          else if (computerChoice === "scissors") {
            alert(`You lose! Scissors beats Paper.
              Your score: ${humanScore}
              Computer score: ${computerScore += 1}`);
          }
        }
    
        if (humanChoice === "scissors") {
          if (computerChoice === "paper") {
            alert(`You win! Scissors beats Paper.
              Your score: ${humanScore += 1}
              Computer score: ${computerScore}`);
          }
          else if (computerChoice === "rock") {
            alert(`You lose! Rock beats Scissors.
              Your score: ${humanScore}
              Computer score: ${computerScore += 1}`);
          }
        }
      }
      
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      
      playRound(humanSelection, computerSelection);

      playGame(n - 1);
    }
  }

  playGame(5);

  if (humanScore > computerScore) {
    alert(`Congrats, You are the winner! 
      Please, refresh the page to make another game.`);
  } else if (humanScore < computerScore) {
    alert(`Sorry, the machine is the winner! 
      Please, refresh the page to make another game.`);
  } else {
    alert(`It's a draw! Please, refresh the page to make anothe game.`);
  }