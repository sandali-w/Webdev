let diceCount = parseInt(prompt("Enter the number of dice:"));
let targetSum = parseInt(prompt("Enter the sum of eye numbers of interest:"));
let simulations = 10000;
let matchCount = 0;

for (let i = 0; i < simulations; i++) {
    let currentSum = 0;
    for (let d = 0; d < diceCount; d++) {
        currentSum += Math.floor(Math.random() * 6) + 1;
    }
    if (currentSum === targetSum) {
        matchCount++;
    }
}

let probability = (matchCount / simulations) * 100;
document.querySelector("#probability").innerHTML = 
    `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;