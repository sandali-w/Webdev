const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter name for dog ${i + 1}:`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let htmlContent = "<ul>";
for (let i = 0; i < dogs.length; i++) {
    htmlContent += `<li>${dogs[i]}</li>`;
}
htmlContent += "</ul>";

document.body.innerHTML += htmlContent;