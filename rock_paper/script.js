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

const scoreDiv = document.createElement("div");

let playerScoreNumber = 0;
let computerScoreNumber = 0;

const playerScore = document.createElement("p");;
const computerScore = document.createElement("p");
playerScore.textContent = `Player score: ${playerScoreNumber}`;
computerScore.textContent = `Computer score: ${computerScoreNumber}`;
scoreDiv.appendChild(playerScore);
scoreDiv.appendChild(computerScore);
document.body.appendChild(scoreDiv);

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", function(){playRound("Rock")});
paperButton.addEventListener("click", function() { playRound("Paper"); });
scissorsButton.addEventListener("click", function() { playRound("Scissors"); });


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScoreNumber += 1;
        playerScore.textContent = `Player Score: ${playerScoreNumber}`;
        alert("You win!");
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else {
        computerScoreNumber += 1;
        computerScore.textContent = `Computer Score: ${computerScoreNumber}`;
        alert("You lose!");
    }

    // Check for a winner
    if (playerScoreNumber >= 5 || computerScoreNumber >= 5) {
        const winner = playerScoreNumber >= 5 ? "Player" : "Computer";
        alert(`${winner} wins the game!`);
        
        // Reset scores for a new game
        playerScoreNumber = 0;
        computerScoreNumber = 0;
        playerScore.textContent = `Player Score: ${playerScoreNumber}`;
        computerScore.textContent = `Computer Score: ${computerScoreNumber}`;
        
        // Optionally, you can also include logic to disable game buttons or make other UI adjustments indicating the game is over
  
    }
}


