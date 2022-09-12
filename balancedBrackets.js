function isBalanced(str) {
  const openStack = [];
  const open = "{[(";
  const close = ")]}";

  const matchedBrackets = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  for (const char of str) {
    if (open.includes(char)) {
      openStack.push(char);
    } else if (close.includes(char)) {
      const removedChar = openStack.pop();

      if (matchedBrackets[removedChar] !== char) {
        return false;
      }
    }
  }
  return !openStack.length;
}

const a = "{[()]}"; // Yes
const b = "{[(])}"; // No
const c = "{{[[(())]]}}"; // Yes

console.log(isBalanced(a), isBalanced(b), isBalanced(c));
