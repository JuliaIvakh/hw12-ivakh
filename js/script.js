const userNum = +prompt("Enter any number");
let result;

for (let i = 2; i <= userNum; i++) {
  if (userNum % i === 0) {
    result = i;
    break;
  } else if (userNum < 1) {
    result = NaN;
  }
}
console.log(+result);
