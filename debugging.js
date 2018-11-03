// Remove block comments when ready to debug a program.

// Program #1: "Careless"

let x = 3;
if(x => 3) {
  x++;
} else {
  x > 2;
}

console.log(x)


// Program #2: "Bad logic and math"

let money = 28;
if(money > 20 && money <= 50) {
  money /=2;
} else {
  money >= 0;
}
 console.log(money);

// Program #3: "And what else?"
const READLINE = require("readline-sync");

let num1 = READLINE.question("Enter num1: ");
let num2 = READLINE.question("Enter num2: ");
let num3 = READLINE.question("Enter num3: ");
if(num1 < num2 && num2 > num3  ) {
  console.log("Number2 is the greatest is the largest value.");
}
else if(num1> num2 && num1 > num3) {
  console.log("Number 1 is the largest value.");
}else {
  console.log("Number 3 is the largest value.");
}

