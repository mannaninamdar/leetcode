/**
 * Calculates the score of a string based on the sum of absolute differences
 * between ASCII values of adjacent characters.
 *
 * @param {string} s - The input string.
 * @returns {number} The calculated score of the string.
 */
function scoreOfString(s: string): number {
  // Initialize a variable to store the total score.
  // We start at 0 because no differences have been added yet.
  let totalScore: number = 0;

  // Iterate through the string to compare adjacent characters.
  // The loop runs from the first character (index 0) up to the
  // second-to-last character (index s.length - 2).
  // This is because for each character at index `i`, we need to access
  // the character at `i + 1`. If `i` was `s.length - 1` (the last character),
  // then `i + 1` would be out of bounds.
  for (let i = 0; i < s.length - 1; i++) {
    // Get the ASCII (Unicode) value of the current character.
    const char1Ascii: number = s.charCodeAt(i);

    // Get the ASCII (Unicode) value of the next character.
    const char2Ascii: number = s.charCodeAt(i + 1);

    // Calculate the absolute difference between the ASCII values.
    // Math.abs() ensures the result is always non-negative.
    const difference: number = Math.abs(char1Ascii - char2Ascii);

    // Add this difference to the total score.
    totalScore += difference;
  }

  // After iterating through all adjacent pairs, return the accumulated total score.
  return totalScore;
}

/**
 * Example Usage:
 */

// Example 1: s = "hello"
// 'h'=104, 'e'=101, 'l'=108, 'l'=108, 'o'=111
// |104-101| + |101-108| + |108-108| + |108-111|
// 3 + 7 + 0 + 3 = 13
console.log(`Score of "hello": ${scoreOfString("hello")}`); // Expected Output: 13

// Example 2: s = "zaz"
// 'z'=122, 'a'=97, 'z'=122
// |122-97| + |97-122|
// 25 + 25 = 50
console.log(`Score of "zaz": ${scoreOfString("zaz")}`); // Expected Output: 50

// Example 3: s = "abc"
// 'a'=97, 'b'=98, 'c'=99
// |97-98| + |98-99|
// 1 + 1 = 2
console.log(`Score of "abc": ${scoreOfString("abc")}`); // Expected Output: 2

// Example 4: s = "a" (single character)
// Should return 0 as there are no adjacent pairs.
console.log(`Score of "a": ${scoreOfString("a")}`); // Expected Output: 0

// Example 5: s = "" (empty string)
// Should return 0 as there are no characters.
console.log(`Score of "": ${scoreOfString("")}`); // Expected Output: 0
