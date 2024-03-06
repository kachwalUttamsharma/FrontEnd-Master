const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    setTimeout(() => {
      resolve("promise 1 resolved");
    }, 1000);
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    setTimeout(() => {
      resolve("promise 2 resolved");
    }, 2000);
  });
});

Promise.all([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.myAll = function (promiseArr) {
  const result = [];
  let counter = 0;
  return new Promise(function (resolve, reject) {
    promiseArr.forEach((promise, index) => {
      promise
        .then((res) => {
          counter++;
          result[index] = res;
          if (counter === promiseArr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
Promise.myAll([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
