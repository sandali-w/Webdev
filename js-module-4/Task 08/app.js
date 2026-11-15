const button = document.querySelector("button");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  const num1 = parseFloat(document.querySelectorAll("input")[0].value);
  const num2 = parseFloat(document.querySelectorAll("input")[1].value);
  const operation = document.querySelector("select").value;
  const resultP = document.getElementById("result");
  
  let result = 0;
  
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  }
  
  resultP.textContent = `Result: ${result}`;
});