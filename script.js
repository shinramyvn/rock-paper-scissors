//Create a function that will pick rock paper or scissors
function getComputerChoice() {
    //Choose a random number from 1-3
    let selection = Math.floor(Math.random()*3) + 1;
    if (selection === 1) {
        return "rock"
    } else if (selection === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
//Create a function that will allow player to select their move
function playerSelection(selection) {
    return selection.toLowerCase();
}

//This function will check for a winner, loser, or tie
function playRound(playerMove, computerMove) {
    let player = playerSelection(playerMove);
    let computer = getComputerChoice();
    if (player === computer) {
        return "It is a tie!"
    } else if (player === "rock") {
        if (computer === "paper") {
            return "You lose! Paper beats rock."
        } else if (computer === "scissors") {
            return "You win! Rock beats scissors."
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            return "You win! Paper beats rock."
        } else if (computer === "scissors") {
            return "You lose! Scissors beats paper."
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            return "You lose! Rock beats scissors."
        } else if (computerChoice === "paper") {
            return "You win! Scissors beats paper."
        }
    }
}
const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));