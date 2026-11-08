const sides = Number(prompt("Enter the number of sides on the dice:"));

function rollCustomDice(maxSides) {
    return Math.floor(Math.random() * maxSides) + 1;
}

function main() {
    let htmlContent = "<ul>";
    let result = rollCustomDice(sides);
    
    while (result !== sides) {
        htmlContent += `<li>${result}</li>`;
        result = rollCustomDice(sides);
    }
    htmlContent += `<li>${result} (Reached maximum sides: ${sides}!)</li>`;
    htmlContent += "</ul>";

    document.body.innerHTML += htmlContent;
}

main();