let person = {
  name: "John",
};
let person2 = {
  name: "Smith",
};

function printAge(age) {
  console.log(`${this.name} is ${age} years old`);
}

// printAge.call(person, 35);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  context.func = this;
  context.func(...args);
};

printAge.myCall(person, 35);

// printAge.apply(person2, [35]);

Function.prototype.myApply = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  if (!Array.isArray(...args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  }
  context.func = this;
  context.func(...args);
};

printAge.myApply(person, [35]);

const newFunc = printAge.bind(person);
newFunc(35);

Function.prototype.mybind = function (context = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  context.func = this;
  return function (...args2) {
    context.func(...args1, ...args2);
  };
};

const newFunc1 = printAge.mybind(person);
newFunc1(35);
