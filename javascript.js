// Write the logic to get the computer choice.
  // Create a new function named "getComputerChoice".
  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  
  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
  
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
  // Create a new function named "getHumanChoice".
  // Write the code so that "getHumanChoice" will return one of the valid choices depending on what the user inputs.
  
  function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    choice = choice.toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Please choose 'rock', 'paper', or 'scissors'");
      choice = choice.toLowerCase();
    }
    return choice;
  }

// Declare the players score variables.
  let humanScore = 0;
  let computerScore = 0;

// Write the logic to play a single round.
  // Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
  

// Write the logic to play the entire game.
  // Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
  
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
            computerScore = computerScore + 1;
          }
        }
    
        if (humanChoice === "scissors") {
          if (computerChoice === "paper") {
            alert(`You win! Scissors beats Paper.
              Your score: ${humanScore += 1}
              Computer score: ${computerScore}`);
            humanScore = humanScore + 1;
          }
          else if (computerChoice === "rock") {
            alert(`You lose! Rock beats Scissors.
              Your score: ${humanScore}
              Computer score: ${computerScore += 1}`);
            computerScore = computerScore + 1;
          }
        }
      }
      
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      
      playRound(humanSelection, computerSelection);

      playGame(n - 1);

      if (humanScore > computerScore) {
        alert(`Congrats, You are the winner! 
          Please, refresh the page to make another game.`);
      } else if (humanScore < computerScore) {
        alert(`Sorry, the machine is the winner! 
          Please, refresh the page to make another game.`)
      } else {
        alert(`It's a draw! Please, refresh the page and make anothe game.`)
      }
    }
  }

  playGame(5);