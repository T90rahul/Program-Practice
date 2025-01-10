function captureSubstring(haystack: string, needle: string): number {
  let flagValue = -1;
  for (let index = 0; index < haystack.length; index++) {
    if (haystack.includes(needle)) {
      flagValue = haystack.indexOf(needle);
    } else {
      flagValue - 1;
    }
  }
  return flagValue;
}
captureSubstring("hello", "ll");

// Description of the Solution
// The provided function captureSubstring takes two parameters: haystack, which is the string to be searched, and needle, the substring to find within haystack. The function aims to return the starting index of the first occurrence of needle in haystack. If the substring is not found, it intends to return -1.

// However, there are inefficiencies and errors in the current implementation:

// The loop runs through every character in haystack, but the checking for needle does not depend on the loop variable index. This results in redundant checks because haystack.includes(needle) and haystack.indexOf(needle) are called repeatedly for each iteration, even though their results do not change unless the haystack or needle changes.
// The else block attempts to decrement flagValue (flagValue - 1;) but does not assign the result to any variable, so it has no effect.

// Here is the optimized code:

` function captureSubstring(haystack: string, needle: string): number {
 return haystack.indexOf(needle);
 }`

//  This version of the function does exactly what the original function intended but in a more efficient and concise manner. It leverages the built-in indexOf method of the string, which already returns -1 if the substring is not found, matching the desired functionality without extra loops or conditions.