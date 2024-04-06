function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame() {
    for (let i = 0; i < 6; i++) {
        let choice = prompt("Rock, Paper, or Scissors?")

        const playerSelection = choice;
        const computerSelection = getComputerChoice();

        // Normalize the playerSelection input
        let normalizedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        function playRound(playerSelection, computerSelection) {


            // Comparisons to determine the outcome of the round
            if (normalizedPlayerSelection === "Rock" && computerSelection === "Scissors") {
                return "You win! Rock beats scissors";
            } else if (normalizedPlayerSelection === "Scissors" && computerSelection === "Rock") {
                return "You lose! Rock beats scissors";
            } else if (normalizedPlayerSelection === "Scissors" && computerSelection === "Paper") {
                return "You win! Scissors beats paper";
            } else if (normalizedPlayerSelection === "Paper" && computerSelection === "Scissors") {
                return "You lose! Scissors beats paper";
            } else if (normalizedPlayerSelection === "Rock" && computerSelection === "Paper") {
                return "You lose! Paper beats rock";
            } else if (normalizedPlayerSelection === "Paper" && computerSelection === "Rock") {
                return "You win! Paper beats rock";
            } else {
                // Correcting string template syntax for dynamic variable inclusion
                return `It's a tie! You both choose ${normalizedPlayerSelection}`;
            }
        }
        console.log(`Player's choice: ${normalizedPlayerSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);
        // Testing the function with inputs
        console.log(playRound(playerSelection, computerSelection));


    }
}

playGame()

