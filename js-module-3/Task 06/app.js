function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    let htmlContent = "<ul>";
    let result = rollDice();
    
    while (result !== 6) {
        htmlContent += `<li>${result}</li>`;
        result = rollDice();
    }
    htmlContent += `<li>${result} (Finished with 6!)</li>`;
    htmlContent += "</ul>";

    document.body.innerHTML += htmlContent;
}

main();