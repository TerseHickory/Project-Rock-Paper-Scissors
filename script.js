//getComputerChoice select random option: rock, paper, scissors
function getComputerChoice() {
    //Generate random number
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    const randomNumber = getRandomNumber(3);

    //Use random number to print an option
    if (randomNumber === 3) {
        console.log("Scissors");
    } else if (randomNumber === 2) {
        console.log("Paper");
    } else {
        console.log("Rock");
    }
}

getComputerChoice();
