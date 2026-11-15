const button = document.querySelector("button");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  const inputVal = document.querySelector("input").value.trim();
  const resultP = document.getElementById("result");
  
  let operator = "";
  if (inputVal.includes("+")) operator = "+";
  else if (inputVal.includes("-")) operator = "-";
  else if (inputVal.includes("*")) operator = "*";
  else if (inputVal.includes("/")) operator = "/";
  
  if (operator) {
    const parts = inputVal.split(operator);
    const num1 = parseInt(parts[0]);
    const num2 = parseInt(parts[1]);
    let result = 0;
    
    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
    }
    
    resultP.textContent = `Result: ${result}`;
  }
});