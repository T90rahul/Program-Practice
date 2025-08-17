// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.


var wordPattern = function (pattern, s) {
    const words = s.trim().split(/\s+/);
    if (pattern.length !== words.length) return false;

    const p2w = new Map(); // letter -> word
    const w2p = new Map(); // word   -> letter

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (p2w.has(p) && p2w.get(p) !== w) return false;
        if (w2p.has(w) && w2p.get(w) !== p) return false;

        p2w.set(p, w);
        w2p.set(w, p);
    }
    return true;
};