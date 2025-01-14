function addBinary(a: string, b: string): string {
    let result = '';
    let carry = 0;
    
    let i = a.length - 1;
    let j = b.length - 1;
    
    // Iterate over both strings from the end (right to left)
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        
        // Add the digits of `a`, if available
        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }
        
        // Add the digits of `b`, if available
        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }
        
        // Compute the current digit (either 0 or 1)
        result = (sum % 2) + result;
        
        // Compute the carry for the next iteration
        carry = Math.floor(sum / 2);
    }
    
    return result;
}
