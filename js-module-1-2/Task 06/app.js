let calculate = confirm("Should I calculate the square root?");
let message = "";

if (calculate) {
    let number = parseFloat(prompt("Enter a number:"));
    if (number < 0) {
        message = "The square root of a negative number is not defined.";
    } else {
        let sqrt = Math.sqrt(number);
        message = `The square root is ${sqrt.toFixed(2)}`;
    }
} else {
    message = "The square root is not calculated.";
}

document.querySelector("#sqrt").innerHTML = message;