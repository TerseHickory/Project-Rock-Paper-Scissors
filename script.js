//getComputerChoice select random option: rock, paper, scissors
function getComputerChoice() {
    //Generate random number
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    //Store generated number in randomNumber
    const randomNumber = getRandomNumber(3) + 1;

    //Use random number to return an option
    if (randomNumber === 3) {
        return ("Scissors");
    } else if (randomNumber === 2) {
        return ("Paper");
    } else {
        return ("Rock");
    }
}

//Store computer's choice in computerSelection and player's choice in playerSelection
const computerSelection = getComputerChoice();
const playerSelection = "Rock";

//Play single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("Game is a tie!");
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper"){
                console.log(computerSelection);
                console.log(playerSelection);
                return ("Computer wins!");
            } else {
                return ("Player wins!");
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return ("Computer wins!");
            } else {
                return ("Player wins!");
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                return ("Computer wins!");
            } else {
                return ("Player wins!");
            }
        } else {
            return ("Please enter a valid response: Rock, Paper, or Scissors")
        }
    }
}

console.log(playRound(playerSelection, computerSelection));