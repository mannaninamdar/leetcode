import { get } from "http";

// Concatenation of Array
function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  // Added sorting in ascending order of array
  let num: number[] = ans.sort((a, b) => a - b);
  return num;
}

console.log(getConcatenation([2, 50, 3, 10]));
