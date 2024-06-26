/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.replace(" ", "");
  str2 = str2.replace(" ", "");
  let count = 0;
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1.charAt(i) == str2.charAt(j)) {
          count++;
        }
      }
    }
    if (count >= str1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = isAnagram;
