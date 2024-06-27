// Write the logic to get the computer choice.

  // Create a new function named "getComputerChoice".

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  console.log(getRandomInt(1, 4));

  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  
  // Test that the function returns what expected.