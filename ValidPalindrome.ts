function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length-1
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    while(i<j){
        if(s[i]!==s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

isPalindrome("ABB^&*A");


// Optmized Approach------------------------->

// ASCII Character Approach
// Iterate Through the String with Two Pointers:

// Use two pointers, one starting at the beginning (i) and the other at the end (j) of the string.
// Move the pointers inward until they meet or cross.
// Check Alphanumeric Characters Using ASCII:

// Use ASCII codes to determine if a character is alphanumeric:
// For digits: ASCII range is 48-57 (0-9).
// For uppercase letters: ASCII range is 65-90 (A-Z).
// For lowercase letters: ASCII range is 97-122 (a-z).
// Skip non-alphanumeric characters.
// Ignore Case Differences:

// Convert uppercase letters to lowercase by adding 32 to their ASCII value (or use .toLowerCase() for simplicity).
// Compare Characters:

// If the characters at the two pointers are not the same, return false.
// If all characters match, return true.

// ---------------------------------------------------------------------------
// const isPalindrome = s => {
//     let i = 0, j = s.length - 1;

//     while (i < j) {
//         // Skip non-alphanumeric characters
//         while (i < j && !isAlphanumeric(s[i])) i++;
//         while (i < j && !isAlphanumeric(s[j])) j--;

//         // Compare characters (case-insensitive)
//         if (toLowerCase(s[i]) !== toLowerCase(s[j])) {
//             return false;
//         }

//         i++;
//         j--;
//     }

//     return true;
// };

// // Helper function to check if a character is alphanumeric
// const isAlphanumeric = c => {
//     const code = c.charCodeAt(0);
//     return (
//         (code >= 48 && code <= 57) || // 0-9
//         (code >= 65 && code <= 90) || // A-Z
//         (code >= 97 && code <= 122)   // a-z
//     );
// };

// // Helper function to convert a character to lowercase
// const toLowerCase = c => {
//     const code = c.charCodeAt(0);
//     return (code >= 65 && code <= 90) ? String.fromCharCode(code + 32) : c;
// };

// // Test cases
// console.log(isPalindrome("ABB^&*A")); // true
// console.log(isPalindrome("Race a car")); // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
