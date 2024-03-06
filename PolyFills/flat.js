const arr = [1, 2, [3, 4], [[3, 4]]];
console.log(arr.flat(2));

Array.prototype.myFlat = function myFlat(depth) {
  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a function`);
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      result.push(...this[i].myFlat(depth - 1));
    } else {
      result.push(this[i]);
    }
  }
  return result;
};
console.log(arr.myFlat(2));
