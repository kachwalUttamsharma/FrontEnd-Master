const a = { a: 1, b: 2, c: { z: 5 } };
const b = { a: 1, b: 2, c: { z: 5 } };
console.log(JSON.stringify(a) === JSON.stringify(b));

const isObject = (object) => {
  return object !== null && typeof object === "object";
};
function compareObjects(obj1, obj2) {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) {
    return false;
  }
  for (let key of keysArr1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const isObjects = isObject(val1) && isObject(val2);
    if (!isObjects && val1 !== val2) {
      return false;
    } else if (isObjects && !compareObjects(val1, val2)) {
      return false;
    }
  }
  return true;
}
