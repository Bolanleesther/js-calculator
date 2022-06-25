const num1 = parseFloat(prompt("enter num 1: "));
const num2 = parseFloat(prompt("enter num 2: "));

const operator = prompt("enter operator (+ , - , / , *) ");
let result = 0;

if (isNaN(num1) || isNaN(num2)) {
  alert("wrong input! refresh page again and provide data");
} else {
  if ((operator == "+")) {
    result = num1 + num2;
  } else if ((operator == "-")) {
    result = num1 - num2;
  } else if ((operator == "/")) {
    result = num1 / num2;
  } else if ((operator == "*")) {
    result = num1 * num2;
  }

  document.write(num1 + operator + num2 + "=" + result);
}
