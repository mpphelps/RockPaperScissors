//Global variables
let RPS = ["Rock", "Paper", "Scissors"]; //string array of the possible options for a player to pick from
let playerScore = 0; //stores the score of the player
let computerScore = 0; //stores the score of the computer
let roundNumber = 1; //stores what round the game is on
let gameRounds = 5; //defines the number of rounds in a game
let roundOutcome; //stores the outcome of the round;

function computerPlay() {
    //calculates a random number from 0 to 2, and selects an option from the RPS string array
    let randomNumber = Math.floor(Math.random()*3);
    console.log("computerChoice: ", RPS[randomNumber]);
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

 function playGame(){
     //keep running the game until out of rounds
     while(roundNumber<=gameRounds) {
        //modify playerChoice so that first letter is capitalized and all remaining chars are lowercase
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        playerChoice = playerChoice.toLowerCase();
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
        console.log("playerChoice: ", playerChoice);
        //verify playerChoice is an available option otherwise recall prompt.
        if (!(playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors")) {
            alert("That is not a valid option!");
            continue;
        }
        roundOutcome = gameRound(playerChoice,computerPlay());
        console.log("Round ", roundNumber,": ", roundOutcome);
        console.log("Player Score: ", playerScore, "Computer Score: ", computerScore)
        roundNumber+=1;
     }
     if (computerScore>playerScore) {
        resetGame();
        return "You Lose the Game!";
     }
     if (playerScore>computerScore) {
        resetGame();
         return "You Win the Game!";
     }
     if (computerScore==playerScore) {
        resetGame();
         return "Game Tied!";
     }
     
 }

 function resetGame() {
     roundNumber = 1;
     computerScore = 0;
     playerScore = 0;
 }