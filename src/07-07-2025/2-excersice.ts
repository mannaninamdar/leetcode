function buildArray(nums: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  console.log(ans);

  return ans;
}
buildArray([0, 2, 1, 5, 3, 4, 5]);
