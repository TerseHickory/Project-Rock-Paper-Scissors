let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
for (; roundsPlayed < 5;) {
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
    const playerSelection = prompt("Enter: Rock, Paper, or Scissors");

    //Play single round of Rock, Paper, Scissors
    function playRound(playerSelection, computerSelection) {
        //Let player input lowercase or uppercase option
        computerSelection = computerSelection.toLowerCase();
        playerSelection = playerSelection.toLowerCase();

        //Determine if computer or player won the round
        if (playerSelection === computerSelection) {
            return ("Game is a tie!");
        } else {
            if (playerSelection === "rock") {
                if (computerSelection === "paper"){
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
            } else if (playerSelection === "scissors" || playerSelection === "scissor") {
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

    //console.log(playRound(playerSelection, computerSelection));
    //let roundsPlayed = 0;
    //Play 5 rounds and keep score
    function game() {
        let roundWin = playRound(playerSelection, computerSelection);

        playRound(playerSelection, computerSelection);
        function score() {
            if (roundWin === "Game is a tie!") {
                console.log("Game was a tie! No score given.");
                roundsPlayed = roundsPlayed + 1;
            } else if (roundWin === "Player wins!") {
                playerScore = playerScore + 1;
                roundsPlayed = roundsPlayed + 1;
            } else {
                computerScore = computerScore + 1;
                roundsPlayed = roundsPlayed + 1;
            }

            console.log("Round: " + roundsPlayed);
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        }

            playRound(playerSelection, computerSelection);
            score();
    }
    game();
}