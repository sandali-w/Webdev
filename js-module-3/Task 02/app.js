const count = Number(prompt("Enter the number of participants:"));
const participants = [];

for (let i = 0; i < count; i++) {
    const name = prompt(`Enter name for participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

let htmlContent = "<ol>";
for (let i = 0; i < participants.length; i++) {
    htmlContent += `<li>${participants[i]}</li>`;
}
htmlContent += "</ol>";

document.body.innerHTML += htmlContent;