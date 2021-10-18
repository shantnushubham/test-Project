// function addTwoNumbers(a, b) {
//   let sum = 0;
//   setTimeout(function () {
//     sum = a + b;
//   }, 2000);
//   return sum;
// }

function addTwoNumbers(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function showSum(a, b) {
  // addTwoNumbers(a, b).then((sum) => {
  //   console.log(sum);
  // });
  try {
    let sum = await addTwoNumbers(a, b);
    console.log(sum);
  } catch {
    console.log("Error");
  }
}

showSum(5, 8);

// console.log(addTwoNumbers(5, 6));

// let testPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ name: "Alex", age: 30 });
//   }, 2000);
// });

// testPromise
//   .then(function (outputObj) {
//     console.log(outputObj);
//   })
//   .catch();
