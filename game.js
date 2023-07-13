function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'];
    let x = Math.floor((Math.random() * 3));
    return choice[x];

}

//returns 1 if human wins, -1 if computer wins, and 0 if its a tie
function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player == computer) {
        console.log("It's a Tie!")
        return 0
    }

    if (player == "rock") {

        if (computer == "paper") {
            console.log("Computer wins! Paper beats Rock")
            return -1
        }

        else {
            console.log("You win! Rock beats Scissors")
            return 1
        }
    }

    else if (player == "paper") {
        if (computer == "rock") {
            console.log("You win! Paper beats Rock")
            return 1
        }

        else {
            console.log("Computer wins! Scissor beats Paper")
            return -1
        }
    }

    else {
        if (computer =="rock") {
            console.log(`Computer wins! ${computer} beats ${player}`)
            return -1
        }

        else {
            console.log(`You win! ${player} beats ${computer}`)
            return 1
        }
    }
}

function game() {

    let computer_score = 0, player_score = 0
    
    for (let i = 0; i < 5; i++) {
        choice_player = prompt("Enter you choice")
        choice_computer = getComputerChoice()

        ans = playRound(choice_player, choice_computer)

        if (ans == 1) {
            player_score++
        }
        else if (ans == -1) {
            computer_score++;
        }
    }

    if (computer_score == player_score) {
        console.log(`There is no Winner...`)
    }
    else if (computer_score > player_score) {
        console.log(`Computer wins by a score of ${computer_score} to ${player_score}`)
    }
    else {
        console.log(`Human wins by a score of ${player_score} to ${computer_score}`)
    }
}