// Write the logic to get the computer choice.
  // Create a new function named "getComputerChoice".
  // Write the code so that "getComputerChoice" will ramdomly "return" one of the string values: "rock", "paper", "scissors".
  
  // Computer logic function with array
  
  function getComputerChoice() { 
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor((Math.random() * choices.length));
  return choices[randomChoice];
}

// Test the function
  console.log(getComputerChoice());  


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
  }

  // Test that the function returns what expected.
    console.log(getComputerChoice());*/


// Write the logic to get the human choice
  // Create a new function named "getHumanChoice".
  // Write the code so that "getHumanChoice" will return one of the valid choices depending on what the user inputs.
  
  /*function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    choice = choice.toLocaleLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice! Please choose 'rock', 'paper', or 'scissors'");
    }
    return choice;
  }*/

  /* if (choice.toLowerCase() === "rock") {
      return choice;
    } else if (choice.toLowerCase() === "paper") {
      return choice;
    } else if (choice.toLowerCase() === "scissors") {
      return choice;
    } else {
      alert ("Please enter a valid entry, choose one of the following:\n'Rock'\n'Paper'\n'Scissors'");
    }*/

  // Test what your function returns by using "console.log".
  //console.log(getHumanChoice());
  
  