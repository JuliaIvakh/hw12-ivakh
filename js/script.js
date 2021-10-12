let UserNum = +prompt("Enter any number");
let numerator = 2;
while (UserNum % numerator === 1) {
  numerator = numerator + 1;
  console.log(numerator);
}
if (UserNum === numerator) {
  numerator = `${UserNum} is a prime number, which is equal to the smallest numerator. `;
  console.log(numerator);
} else if (UserNum < 1) {
  console.log(NaN);
}
