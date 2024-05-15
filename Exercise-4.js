// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
let xValue = 5; // You can set xValue to any positive number

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

// - Print all the odd numbers between 1 - 100.
let num = 1;

while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function printNumbersInBrackets(n) {
    let i = 1;
    let result = '';
    while (i <= n) {
      result += `[${i}] `;
      i++;
    }
    console.log(result.trim());
  }
  printNumbersInBrackets(6); // Example call
  
//   - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
function sumOfFirstNPositiveIntegers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  console.log(sumOfFirstNPositiveIntegers(5)); // Output: 15
  console.log(sumOfFirstNPositiveIntegers(19)); // Output: 190
  