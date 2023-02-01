/* I should go over: how to write names of variables correctly,
    how to write correct git commits and anything else relevant. */

let Options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * Options.length);
  return Options[randomIndex];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose your weapon");
  playerChoice = playerChoice.toLowerCase();
  if (
    playerChoice !== Options[0] &&
    playerChoice !== Options[1] &&
    playerChoice !== Options[2]
  ) {
    alert("Wrong weapon, try again");
    return getPlayerChoice();
  } else {
    return playerChoice;
  }
}

function PlayRound(playerSelection, computerSelection) {
  console.log(playerSelection)
  if (computerSelection === playerSelection) {
    alert("Draw!");
    return "Draw";
  } else if (computerSelection == Options[0] && playerSelection == Options[2] ||
    computerSelection == Options[1] && playerSelection == Options[0] ||
    computerSelection == Options[2] && playerSelection == Options[1]) {
      alert("You lose! :(");
      return "Lose";
  } else {
    alert("You win! :)");
    return "Win";
  }

  /* switch (playerSelection) {
    case Options[0]:
      if (computerSelection === Options[0]) {
        alert("Draw!");
        return "Draw";
      } else if (computerSelection === Options[1]) {
        alert("U lose! :(");
        return "Lose";
      } else {
        alert("U win! :)");
        return "Win";
      }
    case Options[1]:
      if (computerSelection === Options[1]) {
        alert("Draw!");
        return "Draw";
      } else if (computerSelection === Options[2]) {
        alert("U lose! :(");
        return "Lose";
      } else {
        alert("U win! :)");
        return "Win";
      }
    case Options[2]:
      if (computerSelection === Options[2]) {
        alert("Draw!");
        return "Draw";
      } else if (computerSelection === Options[0]) {
        alert("U lose! :(");
        return "Lose";
      } else {
        alert("U win! :)");
        return "Win";
      }
  } */
}

let wins = 0,
  draws = 0,
  loses = 0;

function game() {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    let result = PlayRound(getPlayerChoice(), getComputerChoice());
    switch (result) {
      case "Draw":
        draws++;
        break;
      case "Win":
        wins++;
        break;
      case "Lose":
        loses++;
        break;
    }
  console.log(`round ${roundNum} played, you ${result}`)
  }
  return `Final results: Wins - ${wins} | Draws - ${draws} | Loses - ${loses}`;
}

console.log(game());
