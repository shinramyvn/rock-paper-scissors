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
    if (selection.toLowerCase() == "rock") {
        return selection.toLowerCase()
    } else if (selection.toLowerCase() == "paper") {
        return selection.toLowerCase()
    } else if (selection.toLowerCase() == "scissors") {
        return selection.toLowerCase()
    } else {
        console.log("Invalid move entered");
    }
}

console.log(getComputerChoice());
console.log(playerSelection("rock"));

//This function will check for a winner, loser, or tie
function playRound(playerSelection, getComputerChoice) {

}