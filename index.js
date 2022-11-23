//constants//
const choices = [rock, paper, scissors];


//user selects//
const userChoiceRock = document.getElementById("rock");
userChoiceRock.addEventListener("click", function(){
    RPS(rock)
});

const userChoicePaper = document.getElementById("paper");
userChoicePaper.addEventListener("click", function(){
    RPS(paper)
});

const userChoiceScissors = document.getElementById("scissors");
userChoiceScissors.addEventListener("click", function(){
    RPS(scissors)
});



//rock paper scissors game//
function RPS(UserChoice) {
    console.log(UserChoice)
    //computer selects//
    let ComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(ComputerChoice)
    //Possibilities//
    //User selected rock//
    if (UserChoice === rock && ComputerChoice === paper) {
        console.log("rock loses")
    }
    else if (UserChoice === rock && ComputerChoice === scissors) {
        console.log("rock wins")
    }
    //User selected paper// 
    else if (UserChoice === paper && ComputerChoice === rock) {
        console.log("paper wins")
    }
    else if (UserChoice === paper && ComputerChoice === scissors) {
        console.log("paper loses")
    }
    //User selected scissors//
    else if (UserChoice === scissors && ComputerChoice === rock) {
        console.log("scissors loses")
    }
    else if (UserChoice === scissors && ComputerChoice === paper) {
        console.log("scissors wins")
    }
    //draw//
    else {
        console.log("draw")
    }
}