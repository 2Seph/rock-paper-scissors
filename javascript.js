let playerChoice = "";
let playerChoiceDisplay = document.querySelector(".playerChoice");
let pcChoiceDisplay = document.querySelector(".pcChoice");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;
let gameOver = false; // Flag to indicate if the game is over

rock.addEventListener("click", () => {
  if (gameOver) return; // Do nothing if the game is over
  playerChoice = "rock";
  playerChoiceDisplay.textContent = "✊";
  getComputerChoice();
});
paper.addEventListener("click", () => {
  if (gameOver) return; // Do nothing if the game is over
  playerChoice = "paper";
  playerChoiceDisplay.textContent = "✋";
  getComputerChoice();
});
scissors.addEventListener("click", () => {
  if (gameOver) return; // Do nothing if the game is over
  playerChoice = "scissors";
  playerChoiceDisplay.textContent = "✌";
  getComputerChoice();
});

function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * computerChoice.length);
  computerChoice = computerChoice[random];
  
  // Clear previous choice colors
  pcChoiceDisplay.classList.remove('losingChoice');
  playerChoiceDisplay.classList.remove('losingChoice');
  
  if (computerChoice === 'rock') {
    pcChoiceDisplay.textContent = "✊";
  } else if (computerChoice === 'paper') {
    pcChoiceDisplay.textContent = "✋";
  } else {
    pcChoiceDisplay.textContent = "✌";
  }

  function hasPlayerWon(player, computer) {
    return (player === 'rock' && computer === 'scissors' ||
            player === 'paper' && computer === 'rock' ||
            player === 'scissors' && computer === 'paper');
  }

  let status = document.querySelector('.status');
  if (computerChoice === playerChoice) {
    status.innerText = "it's a tie!";
  } else if (hasPlayerWon(playerChoice, computerChoice)) {
    status.innerText = `${playerChoice} wins over ${computerChoice}`;
    playerScore++;
    
    // Highlight the losing choice in red
    if (playerChoice === 'rock') {
      pcChoiceDisplay.classList.add('losingChoice');
    } else if (playerChoice === 'paper') {
      pcChoiceDisplay.classList.add('losingChoice');
    } else {
      pcChoiceDisplay.classList.add('losingChoice');
    }
  } else {
    status.innerText = `${playerChoice} loses to ${computerChoice}`;
    computerScore++;

    // Highlight the losing choice in red
    if (computerChoice === 'rock') {
      playerChoiceDisplay.classList.add('losingChoice');
    } else if (computerChoice === 'paper') {
      playerChoiceDisplay.classList.add('losingChoice');
    } else {
      playerChoiceDisplay.classList.add('losingChoice');
    }
  }

  // Update scores
  document.querySelector('.playerScore').innerText = playerScore;
  document.querySelector('.pcScore').innerText = computerScore;

  checkFinalScores(); // Check if the game is over
}

function checkFinalScores() {
  if (playerScore === 3 || computerScore === 3) {
    gameOver = true; // Set game over flag

    // Optionally, disable buttons
    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';
    scissors.style.pointerEvents = 'none';

    endGame();
    let status = document.querySelector('.status');
    if (playerScore === 3) {
      status.innerText = `congrats! :D You won ${playerScore} to ${computerScore}!`;
    } else {
      status.innerText = `:O you lost ${playerScore} to ${computerScore}!`;
    }
  }
}

function endGame() {
  // Handle end of the game logic if needed
  // e.g., show a final message, reset the game, etc.
}
