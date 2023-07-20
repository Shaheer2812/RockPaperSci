let computer_score = 0,
  player_score = 0;

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissor"];
  let x = Math.floor(Math.random() * 3);
  return choice[x];
}
//returns 1 if human wins, -1 if computer wins, and 0 if its a tie
function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  if (player == computer) {
    return "It's a Tie!";
    return 0;
  }

  if (player == "rock") {
    if (computer == "paper") {
      computer_score++;
      return "Computer wins! Paper beats Rock";
      return -1;
    } else {
      player_score++;
      return "You win! Rock beats Scissors";
      return 1;
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      player_score++;
      return "You win! Paper beats Rock";
      return 1;
    } else {
      computer_score++;
      return "Computer wins! Scissor beats Paper";
      return -1;
    }
  } else {
    if (computer == "rock") {
      computer_score++;
      return `Computer wins! ${computer} beats ${player}`;
      return -1;
    } else {
      player_score++;
      return `You win! ${player} beats ${computer}`;
      return 1;
    }
  }
}
const div = document.createElement("div");
div.classList.add("winner");

function reset() {
  computer_score = 0;
  player_score = 0;
}

const div1 = document.createElement("div");
div1.classList.add("div1");
//adding an event listener to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.className);
    comp = getComputerChoice();
    console.log(comp);
    div.innerText = playRound(button.className, comp);
    console.log(div.innerText);
    div1.textContent = "";

    div.innerText += `\nCOMPUTER ${computer_score} - ${player_score} YOU`;
    if (computer_score == 5) {
      div1.textContent = "COMPUTER WINS! GIT GUD";
      div1.style.color = "red";
      reset();
    } else if (player_score == 5) {
      div1.textContent = "YOU WIN";
      div1.style.color = 'green'
      reset();
    }
  });
});

const body = document.querySelector("body");
body.append(div1);
body.appendChild(div);
