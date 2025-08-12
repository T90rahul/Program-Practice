function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const map1 = new Map(); // s -> t
  const map2 = new Map(); // t -> s

  for (let i = 0; i < s.length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    // Check mapping from s to t
    if (map1.has(char1)) {
      if (map1.get(char1) !== char2) return false;
    } else {
      map1.set(char1, char2);
    }

    // Check mapping from t to s
    if (map2.has(char2)) {
      if (map2.get(char2) !== char1) return false;
    } else {
      map2.set(char2, char1);
    }
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
