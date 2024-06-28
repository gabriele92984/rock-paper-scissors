// Write the logic to get the computer choice.
  // Create a new function named "getComputerChoice".
  function getComputerChoice() {

  }

  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  // Test that the function returns what expected.

  let compChoiceResult = getComputerChoice();
  console.log(compChoiceResult)


// Write the logic to get the human choice
  // Create a new function named "getHumanChoice".



  // Write the code so that "getHumanChoice" will return one of the valid choices depending on what the user inputs.



  // Test what your function returns by using "console.log".