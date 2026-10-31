let studentName = prompt("Enter your name for the Sorting Hat:");
let randomNum = Math.floor(Math.random() * 4) + 1; // Generates 1, 2, 3, or 4
let house = "";

switch (randomNum) {
    case 1:
        house = "Gryffindor";
        break;
    case 2:
        house = "Slytherin";
        break;
    case 3:
        house = "Hufflepuff";
        break;
    case 4:
        house = "Ravenclaw";
        break;
}

document.querySelector("#sorting").innerHTML = `${studentName}, you have been sorted into ${house}!`;