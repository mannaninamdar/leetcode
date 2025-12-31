// Find Missing Number

const arr = [1, 2, 4, 5];
const n = arr.length + 1;

console.log(`Array: [${arr}]`);
const expectedSum = n * (n + 1) / 2;
console.log(`Expected Sum: ${expectedSum}`);
const actualSum = arr.reduce((a, b) => a + b, 0);
console.log(`Actual Sum: ${actualSum}`);
const missingNumber = expectedSum - actualSum
console.log(`The missing number is: ${missingNumber}`);


// let totalSum = arr.reduce((a, b) => a + b, 0)
// let totalSub = arr.reduce((a, b) => a - b)
// console.log(`Total Sum using reduce: ${totalSum}`);
// console.log(`Total Subtraction using reduce: ${totalSub}`);
