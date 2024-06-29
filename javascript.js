// Write the logic to get the computer choice.
  // Create a new function named "getComputerChoice".
  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  function getRandomInt(max) {
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
  }

  // Test that the function returns what expected.
  getComputerChoice();
  console.log(getComputerChoice());


// Write the logic to get the human choice
  // Create a new function named "getHumanChoice".
  function getHumanChoice() {
  let choice;
  choice = prompt("Welcome to rock-paper-scissors game! Please make your choice:");
  }
  
  getHumanChoice();

  // Write the code so that "getHumanChoice" will return one of the valid choices depending on what the user inputs.

  // Test what your function returns by using "console.log".
  