import { log } from "console";

// Find the Maximum Achievable Number
function theMaximumAchievableX(num: number, t: number): number {
  // The maximum achievable x is found by adding twice the number of allowed operations (t)
  // to the initial value of num. This is because each operation that helps x reach num
  // (specifically, decreasing x while increasing num) effectively changes the relative
  // positions of x and num by 2 units per operation.
  // To maximize x, we want x to start as far above num as possible, such that 't'
  // operations can bring them to equality.
  console.log(num + 2 * t);
  return num + 2 * t;
}

theMaximumAchievableX(3, 2);

/**
 * Example Usage:
 */

// Example 1: num = 4, t = 1
// Expected Output: 6 (4 + 2 * 1)
console.log(
  `Maximum achievable X for num=4, t=1: ${theMaximumAchievableX(4, 1)}`
);

// Example 2: num = 3, t = 2
// Expected Output: 7 (3 + 2 * 2)
console.log(
  `Maximum achievable X for num=3, t=2: ${theMaximumAchievableX(3, 2)}`
);

// Additional Test Cases:
// num = 1, t = 0
// Expected Output: 1 (1 + 2 * 0)
console.log(
  `Maximum achievable X for num=1, t=0: ${theMaximumAchievableX(1, 0)}`
);

// num = 50, t = 50 (max constraints)
// Expected Output: 150 (50 + 2 * 50)
console.log(
  `Maximum achievable X for num=50, t=50: ${theMaximumAchievableX(50, 50)}`
);
