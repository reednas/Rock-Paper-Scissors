let playerSelection = prompt("rock paper scissors - Choose one")

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
            return "You win, " + playerSelection + " beats " + computerSelection;
        }
    else {
        return "You lost, " + computerSelection + " beats " + playerSelection;
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
