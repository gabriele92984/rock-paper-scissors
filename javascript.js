// Write the logic to get the computer choice.

  // Create a new function named "getComputerChoice".
  function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
  }

  let computerChoice = getComputerChoice(3).toString();
  console.log(computerChoice)

  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  if (computerChoice === "0") {
    computerChoice ="rock";
  } else if (computerChoice === "1") {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors"
  }
  console.log(computerChoice)

  // Test that the function returns what expected.