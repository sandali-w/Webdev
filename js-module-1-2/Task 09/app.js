let num = parseInt(prompt("Enter an integer to check if it's prime:"));
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

let resultText = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
document.querySelector("#prime").innerHTML = resultText;