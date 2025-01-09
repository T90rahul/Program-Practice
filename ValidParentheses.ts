function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
      '(': ')', 
      '[': ']', 
      '{': '}' 
    };
  
    for (const char of s) {
      if (map[char]) { 
        // If it's an opening bracket, push it onto the stack
        stack.push(char); 
      } else if (!map[char]) { 
        // If it's a closing bracket
        if (stack.length === 0 || map[stack.pop()!] !== char) {
          return false; 
        }
      }
    }
  
    return stack.length === 0; 
  }
  isValid('(]');




// ### Code Logic Description:

// This function, `isValid`, checks whether a given string `s` containing only brackets (`()`, `{}`, `[]`) is valid. A string is considered valid if:

// 1. Every opening bracket has a corresponding and correctly ordered closing bracket.
// 2. Brackets are closed in the correct order.

// Here is how the function works:

// 1. **Initialization**:
//    - A `stack` is created to keep track of opening brackets.
//    - A `map` is defined to associate each opening bracket with its corresponding closing bracket.

// 2. **Iterate Through Characters**:
//    - For each character in the string `s`:
//      - **If it's an opening bracket** (e.g., `'('`, `'{'`, `'['`), it is pushed onto the `stack`.
//      - **If it's a closing bracket**:
//        - The function checks if the `stack` is empty or if the top of the `stack` does not match the current closing bracket using the `map`.
//        - If either condition is true, the string is invalid, and the function returns `false`.
//        - Otherwise, it pops the top of the `stack`.

// 3. **Final Check**:
//    - After processing all characters, if the `stack` is empty, the string is valid, and the function returns `true`.
//    - If the `stack` is not empty, it means there are unmatched opening brackets, so the function returns `false`.

// ### Example Scenarios:

// 1. **Input**: `s = "()"`  
//    - Push `(` onto the `stack`.
//    - Encounter `)` and match it with `(` from the `stack`.
//    - `stack` is empty at the end, so the function returns `true`.

// 2. **Input**: `s = "(]"`  
//    - Push `(` onto the `stack`.
//    - Encounter `]` and find that it does not match `(` from the `stack`.
//    - Function returns `false`.

// 3. **Input**: `s = "{[]}"`  
//    - Push `{` onto the `stack`.
//    - Push `[` onto the `stack`.
//    - Encounter `]` and match it with `[` from the `stack`.
//    - Encounter `}` and match it with `{` from the `stack`.
//    - `stack` is empty at the end, so the function returns `true`.

// This function effectively validates bracket sequences using the stack data structure.