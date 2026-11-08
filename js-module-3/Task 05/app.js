const numbers = [];

while (true) {
    const num = Number(prompt("Enter a number:"));
    let exists = false;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            exists = true;
            break;
        }
    }

    if (exists) {
        console.log(`The number ${num} has already been given.`);
        break;
    }

    numbers.push(num);
}

numbers.sort(function(a, b) {
    return a - b;
});

console.log("All given numbers in ascending order:", numbers);