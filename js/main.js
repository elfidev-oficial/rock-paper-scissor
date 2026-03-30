// Declare global variables
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const match = document.querySelector("#match");
const selections = document.querySelector("#selections");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

// Game loop's logic
function playGame() {
    // Add the event listener to play the round
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
                const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);
        });
    });
}

// Round's logic
function playRound(humanChoice, computerChoice) {
    // Show the the player/computer's selection
    selections.textContent = `(Player) -> ${humanChoice} VS ${computerChoice} <- (CPU)`
    match.appendChild(selections);

    // Show the result
    if (humanChoice === computerChoice) {
        result.textContent = "This round it's a tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        result.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        result.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    match.appendChild(result);

    // Show the actual score
    score.innerHTML = `<br>Your Score: ${humanScore} |----------| CPU Score: ${computerScore}`;

    match.appendChild(score);

    if (humanScore === 5 || computerScore === 5) {
        const winner = document.createElement("div");
        if (humanScore === 5) {
            winner.innerHTML = "<br>YOU WIN THE GAME"
        } else {
            winner.innerHTML = "<br>THE CPU WIN THE GAME"
        }
        match.appendChild(winner);
    }
}

// Get the computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissor';
            break;

        default:
            break;
    }
    return computerChoice;
}

playGame();
