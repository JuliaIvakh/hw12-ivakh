const userNum = +prompt("Enter any number");
let result;

if (userNum > 1) {
  for (let i = 2; i <= userNum; i++) {
    if (userNum % i === 0) {
      result = i;
      break;
    }
  }
} else {
  result = NaN;
}
console.log(result);
