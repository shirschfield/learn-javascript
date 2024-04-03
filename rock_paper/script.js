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

console.log(getComputerChoice());


const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === !("")){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
     } if (playerSelection === "Rock" + computerSelection === "Scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "Scissors" + computerSelection === "Rock") {
        return "You lose! Rock beats scissors";
    }  else if (playerSelection === "Scissors" + computerSelection === "Paper") {
        return "You win! Scissors beats paper";
    }  else if (playerSelection === "Paper" + computerSelection === "Scissors") {
        return "You lose! Scissors beats paper";
    }  else if (playerSelection === "Rock" + computerSelection === "Paper") {
        return "You lose! Paper beats rock";
    }  else if (playerSelection === "Paper" + computerSelection === "Rock") {
        return "You win! Paper beats rock";
    }  else {
        return "It's a tie! You both choose ${playerSelection}";
  }
}
  
  console.log(playRound(playerSelection, computerSelection));

  
