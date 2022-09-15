function isUnique(str) {
  const charMap = {};

  for (const char of str) {
    if(charMap[char]) {
      return false;
    } else {
      charMap[char] = 1;
    }
  }
  return true;
}

console.log(isUnique('abcdef'))
console.log(isUnique('89%df#$^a&x'))
console.log(isUnique('abcAdef'))
console.log(isUnique('abcaef'))
