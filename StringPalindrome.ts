// Palindrome string 


// Basic solution
function PalindromeStr(data:string) {
    let reversedStr= data.split('').reverse().join('');
    if (data === reversedStr) {
        console.log('String is a Palindrome');
    } else {
        console.log('String is not a Palindrome');
    }
    
}

let normalStr = "Rahul";
PalindromeStr(normalStr);


// Optimum solution

// function isPalindrome(data: string): boolean {
//     const len = data.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (data[i] !== data[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// let normalStr = "Rahul";
// if (isPalindrome(normalStr)) {
//     console.log('String is a Palindrome');
// } else {
//     console.log('String is not a Palindrome');
// }

/*The optimized version I provided improves efficiency in the following ways:

### 1. **Avoidance of Additional Operations (Memory and Processing Overhead)**:
   - **Original Approach**:
     - You first use `split('')` to convert the string into an array of characters.
     - Then, you use `reverse()` to reverse the array.
     - Finally, you use `join('')` to concatenate the array back into a string.

     Each of these operations requires additional memory and processing time:
     - `split('')` creates an array, increasing memory usage.
     - `reverse()` rearranges the array in place, consuming CPU cycles.
     - `join('')` creates a new string, again increasing memory usage.

   - **Optimized Approach**:
     - The optimized code avoids creating a new string or array entirely. It simply compares the characters in the string directly, 
        using only a few integer variables for the loop.

### 2. **Early Exit (Short-Circuiting)**:
   - **Original Approach**:
     - Even if the string is not a palindrome, all operations (`split`, `reverse`, `join`) are executed, and the entire string is reversed 
       before making a comparison.
   
   - **Optimized Approach**:
     - The optimized code can stop early. As soon as it finds a mismatch between characters, it returns `false` and stops further checks. 
       This short-circuiting can significantly reduce the number of comparisons needed, especially for long strings that are not palindromes.

### 3. **Time Complexity**:
   - **Original Approach**:
     - `split('')`, `reverse()`, and `join('')` each take \(O(n)\) time, where \(n\) is the length of the string. Thus, combined, these 
        operations take \(O(n) + O(n) + O(n) = O(3n)\) time.
   
   - **Optimized Approach**:
     - The loop in the optimized code runs for at most \(O(n/2)\) steps, which simplifies to \(O(n)\). This is better in practice since 
        no extra operations are done.

### 4. **Space Complexity**:
   - **Original Approach**:
     - The original code uses additional space proportional to the size of the string, \(O(n)\), due to the creation of a new array and 
    string during the `split`, `reverse`, and `join` operations.
   
   - **Optimized Approach**:
     - The optimized code uses \(O(1)\) extra space, only a few variables for looping and indexing, with no additional data structures 
     being created.

### Summary:
While both approaches have a similar time complexity \(O(n)\), the optimized version is more efficient in terms of space usage and avoids 
 unnecessary operations. This can lead to faster execution, especially for longer strings, and is generally more memory-efficient.*/

