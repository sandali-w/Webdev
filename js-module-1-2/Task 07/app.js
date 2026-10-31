let diceCount = parseInt(prompt("Enter the number of dice:"));
let sum = 0;

for (let i = 0; i < diceCount; i++) {
    let roll = Math.floor(Math.random() * 6) + 1; // 1 to 6
    sum += roll;
}

document.querySelector("#dice").innerHTML = `Total sum of ${diceCount} dice rolls is: ${sum}`;
