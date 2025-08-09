import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const secretNumber: number = Math.floor(Math.random() * 10) + 1;
let attempts: number = 0;

console.log('Number guessisng Game!')
console.log('Guess the number between the 1 and 10')

function askGuess(): void {
    rl.question("Enter your guess: ", (input: string) => {
        const guess: number = parseInt(input, 10);
        attempts++;

        if (isNaN(guess)) {
            console.log('Please enter valid number')
            askGuess();
            return;
        }

        if (guess < secretNumber) {
            console.log('Too low, try again')
            askGuess();
        }
        else if (guess > secretNumber) {
            console.log('Too High, try again')
            askGuess();
        }
        else {
            console.log(`Correct! the number was ${secretNumber} `)
            console.log(`You guessed it in ${attempts} attempts.`)
            rl.close;
        }
    });
}

askGuess()
