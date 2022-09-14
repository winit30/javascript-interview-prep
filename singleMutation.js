function singleMutation(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let mutation = 0;

  for(let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
    if(str1[i] !== str2[j]) {
      mutation++;

      if(mutation > 1) {
        return false
      }

      if(str1.length > str2.length) {
        j--
      } else if(str1.length < str2.length) {
        i--
      }
    }
  }

  return true;
}

console.log(singleMutation("abcd", "abc"));
console.log(singleMutation("abcd", "abcde"));
console.log(singleMutation("abcd", "abcx"));

console.log(singleMutation("abcd", "axcd"));

console.log(singleMutation("abcd", "aebcd"));
console.log(singleMutation("abcd", "abd"));

console.log(singleMutation("abcd", "ab"));
console.log(singleMutation("abcd", "abcdef"));
console.log(singleMutation("abcd", "abzx"));

