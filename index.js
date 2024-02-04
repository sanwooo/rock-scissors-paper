const choiceMap = {
    0: "rock",
    1: "paper",
    2: "scissors",
};

const playerWins = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock",
}


var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");
var startButton = document.querySelector(".start-btn");

var playerChoice = "rock"; //default to rock


rockButton.addEventListener("click", function () {
    playerChoice = "rock";
    var playerChoiceImage = "./assets/images/" + playerChoice +".png";
    document.querySelector(".player img").setAttribute("src", playerChoiceImage);
    

})
paperButton.addEventListener("click", function () {
    playerChoice = "paper";
    var playerChoiceImage = "./assets/images/" + playerChoice +".png";
    document.querySelector(".player img").setAttribute("src", playerChoiceImage);
    

})
scissorsButton.addEventListener("click", function () {
    playerChoice = "scissors";
    var playerChoiceImage = "./assets/images/" + playerChoice +".png";
    document.querySelector(".player img").setAttribute("src", playerChoiceImage);
    
})

startButton.addEventListener("click", function () {
    playGame();
})


function playGame() {
    document.querySelector("h1").textContent = "Rock Paper Scissors";

    var randomChoiceInt = Math.floor(Math.random() * 3); // 0, 1, 2
    var computerChoice = choiceMap[randomChoiceInt];
    var computerChoiceImage = "./assets/images/" + computerChoice +".png";

    var seconds = 3;
    versusOriginalText = document.querySelector(".versus").textContent;

    let timerId = setTimeout(function tick() {
        if (seconds > 0) {
            document.querySelector(".computer img").setAttribute("src", "./assets/images/random_hand.png");
            document.querySelector(".versus p").textContent=seconds;
            timerId = setTimeout(tick, 1000);
        }
        else {

            document.querySelector(".versus p").textContent=versusOriginalText;
            document.querySelector(".computer img").setAttribute("src", computerChoiceImage);
            decisionMessage = decision(playerChoice, computerChoice);
            document.querySelector(".start-btn").textContent = "Restart";
            document.querySelector("h1").textContent = decisionMessage;
        }
        seconds--;
    }, 0);
}


function decision(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw! 🤝";
    }
    else if (playerChoice === playerWins[computerChoice]) {
        return "Player Win! 🥳";
    }
    else {
        return "Player Lose 😢";
    }
}
