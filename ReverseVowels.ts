// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
//
// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let arr = s.split("");
  let i = 0, j = arr.length - 1;

  while (i < j) {
    if (!vowels.includes(arr[i])) { i++; continue; }
    if (!vowels.includes(arr[j])) { j--; continue; }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++; j--;
  }

  return arr.join("");
}

