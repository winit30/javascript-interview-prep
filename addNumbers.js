const numStr1 = "975639857693846793854739485934584293";
const numStr2 = "4659384765354793845793845793353389456893";

function addNumbers(num1, num2) {
  let string1;
  let string2;
  let resultStr = "";
  let carry = 0;

  if (num1.length > num2.length) {
    string1 = num1;
    string2 = num2;
  } else {
    string1 = num2;
    string2 = num1;
  }

  for (let i = 0; i < string1.length; i++) {
  
    const firstVal = string1[string1.length - 1 - i];
    let secVal = 0;

    if (string2[string2.length - 1 - i]) {
      secVal = string2[string2.length - 1 - i];
    }

    let sum = parseInt(firstVal, 10) + parseInt(secVal, 10) + carry;

    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    resultStr = sum + resultStr;
  }

  return resultStr;
}

addNumbers(numStr1, numStr2); // OUTPUT: 4660360405212487692587700532839324041186 
