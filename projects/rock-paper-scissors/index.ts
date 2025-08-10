import * as readline from 'readline'

enum Moves {
    rock = 1,
    paper,
    scissors
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playerScore: number = 0;
let computerScore: number = 0;

function getComputerMove(): Moves {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum as Moves;
}

function getWinner(player: Moves, computer: Moves): 'player' | 'computer' | 'draw' {
    if (player === computer) return 'draw'

    if (
        (player === Moves.rock && computer === Moves.scissors) ||
        (player === Moves.paper && computer === Moves.rock) ||
        (player === Moves.scissors && computer === Moves.paper)
    ) {
        return 'player'
    } else {
        return 'computer'
    }
}

function playRound() {
    rl.question('Choose (1) Rock, (2) Paper, (3) Scissors: ', (input) => {
        const playerChoice = Number(input)

        if (![1, 2, 3].includes(playerChoice)) {
            console.log('Invalid choice. Please enter 1, 2, or 3.')
            return playRound();
        }

        const playerMove = playerChoice as Moves;
        const computerMove = getComputerMove();

        console.log(`You chose: ${Moves[playerMove]}`);
        console.log(`Computer chose: ${Moves[computerMove]}`);

        const winner = getWinner(playerMove, computerMove);

        if (winner === 'player') {
            console.log('you won!')
            playerScore++;
        } else if (winner === 'computer') {
            console.log('you lost! computer won!')
            computerScore++;
        } else {
            console.log('Its draw!')
        }

        console.log(`Score → You: ${playerScore} | Computer: ${computerScore}\n`);

        if (playerScore ===3 || computerScore === 3){
            console.log(playerScore === 3 ? 'you won the game' : 'you lost the game')
            rl.close
        }else{
            playRound()
        }
    });
}

console.log("Rock-Paper-Scissors");
playRound();
