// foreach
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => console.log(item));

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((item) => console.log(item));

// map
const arr1 = [1, 2, 3, 4, 5];

const response = arr1.map((ele) => ele * 2);

Array.prototype.myMap = function (cb) {
  const response = [];
  for (let i = 0; i < this.length; i++) {
    response.push(cb(this[i], i, this));
  }
  return response;
};
const response1 = arr1.myMap((ele) => ele * 2);
console.log(response1);

// filter
const res = arr.filter((el) => el > 2);
console.log(res);

Array.prototype.myFilter = function (cb) {
  const response = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      response.push(this[i]);
    }
  }
  return response;
};
const res1 = arr.myFilter((el) => el > 2);
console.log(res1);

// reduce
const reduceResult = arr.reduce((acc, el) => {
  return (acc += el);
}, 0);
console.log(reduceResult);

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reduceResult1 = arr.myReduce((acc, el) => {
  return (acc += el);
}, 0);
console.log(reduceResult1);
