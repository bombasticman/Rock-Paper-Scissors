//constants//
const choices = [rock, paper, scissors];
const scoretable = document.getElementById("scoretable");
const userChoiceRock = document.getElementById("rock");
const userChoicePaper = document.getElementById("paper");
const userChoiceScissors = document.getElementById("scissors");
const result = document.getElementById("result")

//scoretable//
let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
computerScore.innerHTML = 0
playerScore.innerHTML = 0

//user options//
//user selects rock//
userChoiceRock.addEventListener("click", function () {
    RPS(rock)
});
//user selects paper//
userChoicePaper.addEventListener("click", function () {
    RPS(paper)
});
//user selects scissors//
userChoiceScissors.addEventListener("click", function () {
    RPS(scissors)
});

//rock paper scissors game//
function RPS(UserChoice) {
    //computer selects//
    let ComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    //check game state//
    //computer wins//
    if (parseInt(computerScore.innerHTML) == 5)
        result.textContent = "Computer wins!"
    //user wins//
    else if (parseInt(playerScore.innerHTML) == 5)
        result.textContent = "Player wins!"
    //User selected rock//
    //user loses//
    else if (UserChoice === rock && ComputerChoice === paper) {
        result.textContent = "Rock loses!";
        let oldValue = parseInt(computerScore.innerHTML)
        console.log(oldValue)
        computerScore.innerHTML = oldValue + 1
    }
    //user wins//
    else if (UserChoice === rock && ComputerChoice === scissors) {
        result.textContent = "Rock wins!"
        let oldValue = parseInt(playerScore.innerHTML)
        console.log(oldValue)
        playerScore.innerHTML = oldValue + 1
    }
    //User selected paper//
    //user wins// 
    else if (UserChoice === paper && ComputerChoice === rock) {
        result.textContent = "Paper wins!"
        let oldValue = parseInt(playerScore.innerHTML)
        console.log(oldValue)
        playerScore.innerHTML = oldValue + 1
    }
    //user loses//
    else if (UserChoice === paper && ComputerChoice === scissors) {
        result.textContent = "Paper loses!"
        let oldValue = parseInt(computerScore.innerHTML)
        console.log(oldValue)
        computerScore.innerHTML = oldValue + 1
    }
    //User selected scissors//
    //user loses//
    else if (UserChoice === scissors && ComputerChoice === rock) {
        result.textContent = "Scissors loses!"
        let oldValue = parseInt(computerScore.innerHTML)
        console.log(oldValue)
        computerScore.innerHTML = oldValue + 1
    }
    //user wins//
    else if (UserChoice === scissors && ComputerChoice === paper) {
        result.textContent = "Scissors wins!"
        let oldValue = parseInt(playerScore.innerHTML)
        console.log(oldValue)
        playerScore.innerHTML = oldValue + 1
    }
    //draw//
    else {
        result.textContent = "Draw!"
    }
}
