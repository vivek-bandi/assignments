/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.replace(/ /g, "").toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (vowels[i] == str.charAt(j)) {
        count++;
      }
    }
  }
  return count;
}

module.exports = countVowels;
