import { get } from "http";

// Concatenation of Array
function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
}

console.log(getConcatenation([1, 2, 3]));
