

/* initialize at start score */
let humanScore = 0
let computerScore = 0

for (let round=0; round<3; round++) {
    let humanChoice = prompt("Rock, paper, scissors?  ")
    humanChoice = humanChoice.toLowerCase()    
    
    let computerChoice = ['rock','paper','scissors']
    let random = Math.floor(Math.random() * computerChoice.length)
    computerChoice = computerChoice[random]
    
    console.log("You chose "+ humanChoice)
    console.log("Computer chose " +computerChoice)

    playRound()
    function playRound() {
        if (humanChoice === computerChoice) {
            console.log("Tie!")
            round = round - 1
        } else if (humanChoice==="rock" && computerChoice==="paper") {
            console.log("You lose, paper wins over rock")
            computerScore++
        } else if (humanChoice==='rock' && computerChoice==='scissors') {
            console.log("You win, rock wins over scissors")
            humanScore++
        } else if (humanChoice==='paper' && computerChoice==='rock') {
            console.log("You win, paper wins over rock")
            humanScore++
        } else if (humanChoice==='paper' && computerChoice==="scissors") {
            console.log("You lose, paper loses over scissors")
            computerScore++
        } else if (humanChoice==='scissors' && computerChoice==='rock') {
            console.log("You lose, scissors loses over rock")
            computerScore++
        } else if (humanChoice==='scissors' && computerChoice==='paper') {
            console.log("You win, scissors wins over paper")
            humanScore++
        }
        console.log("Computer: "+computerScore + " You: " + humanScore)
        console.log("")
    }
}
console.log("")
    if (computerScore > humanScore) {
        console.log("You lost!")
    } else {
        console.log("You won!")
    }
console.log("Computer: " + computerScore )
console.log("You: " + humanScore)



