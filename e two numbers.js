const firstNum = Number(prompt("Enter first number: "));
const secondNum = Number(prompt("Enter second number: "));

const total = firstNum + secondNum;
const minus = firstNum - secondNum;
const multiply = firstNum * secondNum;

console.log("Total:", total);
console.log("Minus:", minus);
console.log("Multiply:", multiply);

if (secondNum !== 0) {
    const divide = firstNum / secondNum;
    console.log("Divide:", divide);
} else {
    console.log("Cannot divide by zero.");
}