// Add Two Promises Function

/**
 * Type alias for a Promise that resolves with a number.
 * This makes the function signature cleaner and more readable.
 */
type P = Promise<number>;

/**
 * Given two promises, promise1 and promise2, both of which resolve with a number,
 * this asynchronous function returns a new promise that resolves with the sum of
 * the numbers resolved by the input promises.
 *
 * @param {P} promise1 - The first promise, expected to resolve with a number.
 * @param {P} promise2 - The second promise, expected to resolve with a number.
 * @returns {P} A new promise that resolves with the sum of the resolved numbers
 * from promise1 and promise2.
 */
async function addTwoPromises(promise1: P, promise2: P): P {
  // Use Promise.all to concurrently wait for both promise1 and promise2 to resolve.
  // Promise.all takes an array of promises and returns a single promise.
  // This single promise resolves when ALL promises in the input array have resolved.
  // The resolved value will be an array containing the resolved values of the input promises,
  // in the same order as they were passed.
  //
  // If any of the input promises reject, Promise.all will immediately reject
  // with the reason of the first promise that rejected.
  try {
    const [num1, num2] = await Promise.all([promise1, promise2]);

    // Once both promises have resolved, their values (num1 and num2) are available.
    // Calculate their sum.
    const sum: number = num1 + num2;

    // Since this is an `async` function, returning a value like `sum`
    // automatically wraps it in a Promise that resolves with that value.
    // So, `return sum;` is equivalent to `return Promise.resolve(sum);`
    return sum;
  } catch (error) {
    // If either promise1 or promise2 rejects, the Promise.all will reject,
    // and the error will be caught here.
    // We re-throw the error so that the returned promise also rejects.
    console.error("One of the promises rejected:", error);
    throw error;
  }
}

/**
 * Example Usage:
 */

// Example 1: Basic resolution
// promise1 resolves with 2 after 20ms
// promise2 resolves with 5 after 60ms
const p1_ex1 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(2), 20)
);
const p2_ex1 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(5), 60)
);

addTwoPromises(p1_ex1, p2_ex1)
  .then((result) => console.log("Example 1 Output:", result)) // Should log 7
  .catch((error) => console.error("Example 1 Error:", error));

// Example 2: Negative numbers
// promise1 resolves with 10 after 50ms
// promise2 resolves with -12 after 30ms
// Expected Output: -2
const p1_ex2 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(10), 50)
);
const p2_ex2 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(-12), 30)
);

addTwoPromises(p1_ex2, p2_ex2)
  .then((result) => console.log("Example 2 Output:", result)) // Should log -2
  .catch((error) => console.error("Example 2 Error:", error));

// Example 3: Promises that resolve immediately
// Expected Output: 4
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then((result) => console.log("Example 3 Output:", result)) // Should log 4
  .catch((error) => console.error("Example 3 Error:", error));

// Example 4: One promise rejects (demonstrates error handling)
// This will cause the returned promise to reject.
const p1_ex4 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(100), 10)
);
const p2_ex4 = new Promise<number>((_, reject) =>
  setTimeout(() => reject("Promise 2 failed!"), 5)
);

addTwoPromises(p1_ex4, p2_ex4)
  .then((result) =>
    console.log("Example 4 Output (should not appear):", result)
  )
  .catch((error) => console.error("Example 4 Error (expected):", error)); // Should log "Promise 2 failed!"
