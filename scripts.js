function getComputerChoice() {
    let computerChoice;
    let randomnum = Math.floor(Math.random() * 3) + 1;
    if (randomnum === 1) {
        computerChoice = "rock"
    }
    else if (randomnum === 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    console.log(computerChoice)
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else {
        if (computerSelection === "rock") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, Scissors?")
        if (playerChoice === null || playerChoice === "") {
            console.log("Game was cancelled")
            return;
        }
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            console.log("Invalid input")
            return;
        }
        let computerChoice = getComputerChoice();
        let round = playRound(playerChoice, computerChoice)
        if (round === "Win") {
            wins++;
            console.log(`You won round ${i+1} - ${playerChoice} beats ${computerChoice}`)
        }
        else if (round === "Loss") {
            losses++;
            console.log(`You lost round ${i+1} - ${computerChoice} beats ${playerChoice}`)
        }
        else {
            console.log(`You tied round ${i+1} - both chose ${playerChoice}`)
        }
    }
    if (wins > losses) {
        console.log("You won the game!")
    }
    else if (losses > wins) {
        console.log("You lost the game!")
    }
    else {
        console.log("The game was a tie!")
    }
}