// Write the logic to get the computer choice.

  // Create a new function named "getComputerChoice".
  function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  
  let computerChoice = getComputerChoice(1, 3);
  console.log(computerChoice)
  
  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  

  
  // Test that the function returns what expected.