class ArrayWrapper {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums
    }

    valueOf(): number {
        return this.nums.reduce((acc, n) => acc + n, 0);
    }

    toString(): string {
        return `[${this.nums.join(',')}]`
    }
};


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1.valueOf() + obj2.valueOf()); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
