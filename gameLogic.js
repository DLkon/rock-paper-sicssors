let playerScore = 0;
let computerScore = 0;
let endGame;
const buttons = document.querySelectorAll('button');
let action = document.getElementById('event');
let score = document.getElementById('score');

function computerPlay(){
    let random = Math.floor(Math.random()*3);
    return random;
}

function checkPlayerHand(player){
    let hand;
    if(player == 0){
        hand = "rock";
    } else if(player == 1){
        hand = "paper";
    } else {
        hand = "scissors";
    }
    return hand;
}


function playRound(playerSelection, computerSelection, playerHand, computerHand){

    if(playerSelection  == computerSelection){
        return "Draw";
    } else if (playerSelection == (computerSelection + 1) % 3){
        playerScore += 1;
        return `You win, ${playerHand} beats ${computerHand}`;
    }else {  
        computerScore += 1;
        return `You loose, ${computerHand} beats ${playerHand}`;
    }
}

    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
            
            let playerMove =  parseInt(button.id);
            let computerMove = computerPlay();
            let computerHand = checkPlayerHand(computerMove);
            let playerHand = checkPlayerHand(playerMove);
            let winner = playRound(playerMove, computerMove, playerHand, computerHand);
            checkWinner();
            if(endGame == true){
                score.textContent = "game will be restarted";
                endGame = false;
            } else {
                action.textContent = winner;
                score.textContent = " " + playerScore + "-" + computerScore;             
            }
          
        })
    })

function checkWinner(){
        if(playerScore == 5){
            action.textContent = "You first reach 5 rounds";
            reset()
            endGame = true;
        } else if(computerScore == 5){
            action.textContent = "Computer wins 5 founds first"
            reset();
            endGame = true;
        } else {
            endGame 
        }
   
}

function reset(){
    playerScore = 0;
    computerScore = 0;
}


