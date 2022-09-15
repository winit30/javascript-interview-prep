function flatten(arr) {
  const freshArr = [];

  for(let i = 0; i < arr.length; i++) {

    const newItem = arr[i];

    console.log(newItem)

    if(Array.isArray(newItem)) {

        const flatAgain = flatten(newItem);

        for(let j = 0; j < flatAgain.length; j++) {
          freshArr.push(flatAgain[j])
        }

    } else {
      freshArr.push(newItem)
    }
  }
  
  return freshArr;
}

flatten([[[[1], 2], 3], [4], [], [[5]]]);
// -> [1, 2, 3, 4, 5]

flatten(["abc", ["def", ["ghi", ["jkl"]]]]);
// -> ['abc', 'def', 'ghi', 'jkl']
