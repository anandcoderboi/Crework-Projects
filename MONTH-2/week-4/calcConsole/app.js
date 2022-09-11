function calculator() {
  this.addition = function () {
    let number1 = parseInt(prompt("Enter your first number"));
    let number2 = parseInt(prompt("Enter your second number"));
    console.log(number1 + number2);
  };
  this.substraction = function () {
    let number1 = parseInt(prompt("Enter your first number"));
    let number2 = parseInt(prompt("Enter your second number"));
    console.log(number1 - number2);
  };
  this.multiplication = function () {
    let number1 = parseInt(prompt("Enter your first number"));
    let number2 = parseInt(prompt("Enter your second number"));
    console.log(number1 * number2);
  };
  this.division = function () {
    let number1 = parseInt(prompt("Enter your first number"));
    let number2 = parseInt(prompt("Enter your second number"));
    console.log(number1 / number2);
  };
}
calculator();
const calc = new calculator();