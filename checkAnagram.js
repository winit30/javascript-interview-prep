const getCharCount = (str) => {
  const charMap = {}

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function isAnagram(strArr) {

  for (const word of strArr) {
    if(word.length !== strArr[0].length) {
      return false;
    }
  }

  const fisrtCharMap = getCharCount(strArr[0])

  for (const word of strArr) {
    const wordCharMap = getCharCount(word) 

    for(let key in wordCharMap) {
      if(wordCharMap[key] !== fisrtCharMap[key]) {
        return false;
      }
    }
  }

  return true

}

console.log(isAnagram(["below", "elbow", "obwel"]));

