function isAnagram(s, t) {
    // Step 1: Length check
    if (s.length !== t.length) {
        return false;
    }

    // Step 2: Character frequency map banate hain
    const count = {};

    // Step 3: String s ke characters ka count +1 karte hain
    for (let char of s) {
        if (count[char] === undefined) {
            count[char] = 1; // pehli baar aa raha hai
        } else {
            count[char] = count[char] + 1; // pehle se hai, +1
        }
    }

    // Step 4: String t ke characters ka count -1 karte hain
    for (let char of t) {
        // Agar char ka count hi nahi mila, ya 0 ho gaya → Not anagram
        if (count[char] === undefined || count[char] === 0) {
            return false;
        }
        count[char] = count[char] - 1;
    }

    // Step 5: Agar sab match ho gaye to true return karo
    return true;
}