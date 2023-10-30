let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "it's a tie, you both chose " + playerSelection;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissor' && computerSelection == 'paper')){
            playerScore++;
            return "You win, " + playerSelection + " beats " + computerSelection;
        }
    else {
        computerScore++;
        return "You lost, " + computerSelection + " beats " + playerSelection;
    }
}

const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

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