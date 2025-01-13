function lengthOfLastWord(s: string): number {
    const lastWord = s.trim().split(' ').pop();
    return lastWord ? lastWord.length : 0;
};

lengthOfLastWord('Hello World');


// description
// For input "Hello World", the steps are:

// s.trim() -> "Hello World"
// .split(' ') -> ["Hello", "World"]
// .pop() -> "World"
// Length of "World" is 5.


// Optimized Solution------>
// The current solution is functional but not optimal because:

// Extra Array Creation: Using .split(' ') creates an array of words, which is unnecessary for just finding the last word.
// Performance: For very large strings, splitting into an array and then popping the last element can consume additional memory and time.


// ----------------------------------->
// function lengthOfLastWord(s: string): number {
//     let length = 0;
//     let i = s.length - 1;
//     while (i >= 0 && s[i] === ' ') {
//         i--;
//     }
//     while (i >= 0 && s[i] !== ' ') {
//         length++;
//         i--;
//     }

//     return length;
// }
