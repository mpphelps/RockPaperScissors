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
    computerChoice_element.textContent = RPS[randomNumber];
    return RPS[randomNumber];
}

function gameRound(playerSelection, computerSelection) {
    // This method uses switch-case statement applying fallthrough to combine similar scenarios.
    // 'break;' is not used here since we want to return out of the switch statement instead of continuing which is fine.
    let selection = playerSelection.concat(computerSelection); //combine player and computer selection to make a single string
    switch (selection) {
        case "RockRock":
        case "PaperPaper":
        case "PaperPaper":
            tieCount+=1;
            return "It's a tie";
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerScore+=1;
            return "You Lose!"
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            playerScore+=1;
            return "You Win!";
    }

    /*
    // This method applies several if statements, could work this to be even cleaner by nesting if statements.
    if (playerSelection == "Rock" && computerSelection == "Rock") {return "It's a tie";}
    if (playerSelection == "Paper" && computerSelection == "Paper") {return "It's a tie";}
    if (playerSelection == "Scissors" && computerSelection == "Scissors") {return "It's a tie";}

    if (playerSelection == "Rock" && computerSelection == "Paper") {return "You Lose! Paper beats Rock";}
    if (playerSelection == "Paper" && computerSelection == "Rock") {return "You Win! Paper beats Rock";
    }

    if (playerSelection == "Scissors" && computerSelection == "Paper") {return "You Win! Scissors beats Paper";}
    if (playerSelection == "Paper" && computerSelection == "Scissors") {return "You Lose! Scissors beats Paper";}

    if (playerSelection == "Rock" && computerSelection == "Scissors") {return "You Win! Rock beats Scissors";}
    if (playerSelection == "Scissors" && computerSelection == "Rock") {return "You Lose! Rock beats Scissors";}
    */
    return "Something unexpected happened";
    
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
        console.log("Round ", roundNumber,": ", roundOutcome);
        console.log("Player Score: ", playerScore, "Computer Score: ", computerScore)
    
        computerScore_element.textContent = computerScore;
        playerScore_element.textContent = playerScore;
        tieCount_element.textContent = tieCount;
        roundNumber_element.textContent = roundNumber;
        
        // if game rounds = 5 then check who is winner
        console.log("roundNumber: ", roundNumber, "gameRounds: ", gameRounds);
        if (roundNumber === gameRounds) {
            if(computerScore > playerScore) {
                gameResult_element.textContent = "The Computer Won!";
            } else if (playerScore > computerScore) {
                gameResult_element.textContent = "You Won!";
            } else {
                gameResult_element.textContent = "Its a tie!";
            }
        }
        roundNumber+=1;
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
    roundNumber_element.textContent = roundNumber;
    computerChoice_element.textContent = "";
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
const computerChoice_element = document.querySelector('#computerChoice');



