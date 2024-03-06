const arr = [1, 2, 3, [4, 5, 6]];

function deepCopy(val) {
  if (["string", "number", "boolean"].includes(typeof val)) {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((el) => deepCopy(el));
  } else {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = deepCopy(val[key]);
      return acc;
    }, {});
  }
}

const brr = deepCopy(arr);
brr[3].push(5);
console.log(brr);
console.log(arr);
