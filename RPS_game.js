//Global variables
let RPS = ["Rock", "Paper", "Scissors"]; //string array of the possible options for a player to pick from
let playerScore = 0; //stores the score of the player
let computerScore = 0; //stores the score of the computer
let tieCount = 0; //stores the count of ties
let roundNumber = 1; //stores what round the game is on
let gameRounds = 5; //defines the number of rounds in a game
let roundOutcome; //stores the outcome of the round;

function computerPlay() {
    //calculates a random number from 0 to 2, and selects an option from the RPS string array
    let randomNumber = Math.floor(Math.random()*3);
    console.log("computerChoice: ", RPS[randomNumber]);
    computerChoice_img.src = `Images/${RPS[randomNumber]}.png`
    return RPS[randomNumber];
}

function gameRound(playerSelection, computerSelection) {
    // This method uses switch-case statement applying fallthrough to combine similar scenarios.
    // 'break;' is not used here since we want to return out of the switch statement instead of continuing which is fine.
    let selection = playerSelection.concat(computerSelection); //combine player and computer selection to make a single string
    switch (selection) {
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tieCount+=1;
            gameResult_element.textContent = "This round is a tie";
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore+=1;
            gameResult_element.textContent = "CPU won this round";
            break;
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            playerScore+=1;
            gameResult_element.textContent = "You won this round!";
            break;
    }
 }

function playGame(playerChoice){
    //modify playerChoice so that first letter is capitalized and all remaining chars are lowercase
    //let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    console.log("playerChoice: ", playerChoice);
    //verify playerChoice is an available option otherwise recall prompt.
    if (!(playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors")) {
        alert("That is not a valid option!");
    }

    if(roundNumber<=gameRounds) {
        roundOutcome = gameRound(playerChoice,computerPlay());
        playerChoice_img.src = `Images/${playerChoice}.png`
        console.log("Round ", roundNumber,": ", roundOutcome);
        console.log("Player Score: ", playerScore, "Computer Score: ", computerScore)
        
        // if game rounds = 5 then check who is winner
        console.log("roundNumber: ", roundNumber, "gameRounds: ", gameRounds);
        if (roundNumber === gameRounds) {
            if(computerScore > playerScore) {
                gameResult_element.textContent = "The Computer Won the Game!";
            } else if (playerScore > computerScore) {
                gameResult_element.textContent = "You Won the Game!";
            } else {
                gameResult_element.textContent = "This Game is a Tie!";
            }
        }
        roundNumber+=1;
        if (roundNumber>gameRounds){roundNumber_element.textContent = "Game Over"}
        else {roundNumber_element.textContent = roundNumber + " of " + gameRounds;}        
        computerScore_element.textContent = computerScore;
        playerScore_element.textContent = playerScore;
        tieCount_element.textContent = tieCount;
    }

}

function resetGame() {
    roundNumber = 1;
    computerScore = 0;
    playerScore = 0;
    tieCount = 0;
    gameResult_element.textContent = "Game Reset";
    computerScore_element.textContent = computerScore;
    playerScore_element.textContent = playerScore;
    tieCount_element.textContent = tieCount;
    roundNumber_element.textContent = roundNumber + " of " + gameRounds;
    computerChoice_img.src = "";
}


const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const btnResetGame = document.querySelector('#btnResetGame');

btnRock.addEventListener('click', () => {
    playGame(RPS[0]);
});
btnPaper.addEventListener('click', () => {
    playGame(RPS[1]);
});
btnScissors.addEventListener('click', () => {
    playGame(RPS[2]);
});
btnResetGame.addEventListener('click', () => {
    resetGame();
    
});

const computerScore_element = document.querySelector('#computerScore');
const playerScore_element = document.querySelector('#playerScore');
const roundNumber_element = document.querySelector('#roundNumber');
const tieCount_element = document.querySelector('#tieCount');
const gameResult_element = document.querySelector('#gameResult');
const computerChoice_img = document.querySelector("#computerImg");
const playerChoice_img = document.querySelector("#playerImg");

//initialize game round
roundNumber_element.textContent = roundNumber + " of " + gameRounds;


