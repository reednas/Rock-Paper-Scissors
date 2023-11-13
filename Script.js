/*rock-paper-scissors*/
let playerScore = 0;
let computerScore = 0;

const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "it's a tie, you both chose " + playerSelection;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')){
            playerScore++;
            return "You win, " + playerSelection + " beats " + computerSelection;
        }
    else {
        computerScore++;
        return "You lost, " + computerSelection + " beats " + playerSelection;
    }
}

function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Clear result and score elements
    resultElement.innerHTML = "";
    scoreElement.textContent = "Player: 0 | Computer: 0";

    // Enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function updateResult(result) {
    const resultText = document.createElement("p");
    resultText.textContent = result;
    resultElement.appendChild(resultText);

    scoreElement.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            resultElement.innerHTML += "<p>Player wins the game!</p>";
        } else {
            resultElement.innerHTML += "<p>Computer wins the game!</p>";
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}



        const rockButton = document.getElementById("rock");
        rockButton.addEventListener("click", () => {
            if (playerScore < 5 && computerScore < 5) {
            const computerSelection = getComputerChoice();
            const result = playRound("rock", computerSelection);
            updateResult(result);
            }
        });
        
        const paperButton = document.getElementById("paper");
        paperButton.addEventListener("click", () => { 
            if (playerScore < 5 && computerScore < 5) {
            const computerSelection = getComputerChoice();
            const result = playRound("paper", computerSelection);
            updateResult(result);
            }
        });

        const scissorsButton = document.getElementById("scissors");
        scissorsButton.addEventListener("click", () => {
            if (playerScore < 5 && computerScore < 5) {
            const computerSelection = getComputerChoice();
            const result = playRound("scissors", computerSelection);
            updateResult(result);
            }
        });