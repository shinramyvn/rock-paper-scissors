//Create a function that will pick rock paper or scissors
function getComputerChoice() {
    //Choose a random number from 1-3
    return Math.floor(Math.random()*3) + 1;
}
//Create a function that will allow player to select their move
function playerSelection(selection) {
    if (selection.toLowerCase() == "rock") {
        return playerMove = 1;
    } else if (selection.toLowerCase() == "paper") {
        return playerMove = 2;
    } else if (selection.toLowerCase() == "scissors") {
        return playerMove = 3;
    } else {
        console.log("Invalid move entered");
    }
}

console.log(getComputerChoice());
console.log(playerSelection("rock"));

//This function will check for a winner, loser, or tie
function playRound(playerSelection, getComputerChoice) {

}