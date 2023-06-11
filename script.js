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
    if (computerScore != 5 && playerScore != 5) {
        if (player === computer) {
            text.textContent = "It is a tie!";
        } else if (player === "rock") {
            if (computer === "paper") {
                text.textContent = "You lose! Paper beats rock.";
                computerScore++;
            } else if (computer === "scissors") {
                text.textContent = "You win! Rock beats scissors.";
                playerScore++;
            }
        } else if (player === "paper") {
            if (computer === "rock") {
                text.textContent = "You win! Paper beats rock.";
                playerScore++;
            } else if (computer === "scissors") {
                text.textContent = "You lose! Scissors beats paper.";
                computerScore++;
            }
        } else if (player === "scissors") {
            if (computer === "rock") {
                text.textContent = "You lose! Rock beats scissors.";
                computerScore++;
            } else if (computer === "paper") {
                text.textContent = "You win! Scissors beats paper.";
                playerScore++;
            }
        }
        
    } else {
        text.textContent = "Game over!";
    }   
    score.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;

}


function game() {
    /*
    //Game 1
    let move1 = prompt("Choose a move (rock, paper, or scissors): ");
    let computerChoice1 = getComputerChoice();
    let game1 = playRound(move1, computerChoice1);
    let playerWins = 0;
    let computerWins = 0;
    if (game1 === 1) {
        playerWins += 1;
    } else if (game1 === 2) {
        computerWins += 1
    }
    //Game 2
    let move2 = prompt("Choose a move (rock, paper, or scissors): ");
    let computerChoice2 = getComputerChoice();
    let game2 = playRound(move2, computerChoice2);
    if (game2 === 1) {
        playerWins += 1;
    } else if (game2 === 2) {
        computerWins += 1
    }
    //Game 3
    let move3 = prompt("Choose a move (rock, paper, or scissors): ");
    let computerChoice3 = getComputerChoice();
    let game3 = playRound(move3, computerChoice3);
    if (game3 === 1) {
        playerWins += 1;
    } else if (game3 === 2) {
        computerWins += 1
    }
    //Game 4
    let move4 = prompt("Choose a move (rock, paper, or scissors): ");
    let computerChoice4 = getComputerChoice();
    let game4 = playRound(move4, computerChoice4);
    if (game4 === 1) {
        playerWins += 1;
    } else if (game4 === 2) {
        computerWins += 1
    }
    //Game 5
    let move5 = prompt("Choose a move (rock, paper, or scissors): ");
    let computerChoice5 = getComputerChoice();
    let game5 = playRound(move5, computerChoice5);
    if (game5 === 1) {
        playerWins += 1;
    } else if (game5 === 2) {
        computerWins += 1
    }
    console.log("Score:");
    console.log("Player - " + playerWins);
    console.log("Computer - " + computerWins);
    */
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const text = document.querySelector('#text');
const score = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    playRound("rock",getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound("scissors",getComputerChoice());
});