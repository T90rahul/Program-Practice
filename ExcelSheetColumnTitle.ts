function convertToTitle(value) {
    let columnNumber = value;
    let str = ''; 
    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26; 
        str = getChar(remainder) + str; 
        columnNumber = Math.floor((columnNumber - 1) / 26); 
    }

    return str;
}

function getChar(val) {
    return String.fromCharCode(65 + val); 
}




// Steps in the Code
// Initialize Variables:

    // columnNumber is assigned the input value.
    // str is initialized as an empty string to store the resulting column title.
    // Loop Until columnNumber > 0:

    // Calculate the remainder: (columnNumber - 1) % 26. This aligns the column number to 0-based indexing (A = 0, B = 1, ..., Z = 25).
    // Prepend the character corresponding to the remainder (using getChar) to str.
    // Update columnNumber by dividing (columnNumber - 1) by 26 and flooring the result.
    // Helper Function getChar:

    // Converts a value (0-25) to its corresponding uppercase letter using String.fromCharCode.
    // Return the Result:

    // Once the loop ends, return the string str containing the column title.


// Optimized Version in TypeScript
// Here's the optimized version of the code in TypeScript with proper type annotations:


// function convertToTitle(value: number): string {
//     let columnNumber: number = value;
//     let result: string = '';

//     while (columnNumber > 0) {
//         const remainder: number = (columnNumber - 1) % 26;
//         result = String.fromCharCode(65 + remainder) + result;
//         columnNumber = Math.floor((columnNumber - 1) / 26);
//     }

//     return result;
// }