// rest-operator = ...
// spread-operator = ...

// 1. Rest operator

// function addTwo(x, y) {
//   return x + y;
// }

// function addThree(x, y, z) {
//   return x + y + z;
// }

// console.log(addThree(1, 2, 3))

// function add(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum = sum + number;
//   }
//   return sum;
// }
// console.log(add( 1, 2, 3, 4, 5));

// 2. Spread operator

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]
// for (let el of arr1) {
//   arr2.push(el);
// }
// arr1.push(4);
// console.log(arr2);

var obj1 = {
  name: "Alex",
  age: 30,
  gender: "M"
};

var obj2 = { ...obj1, gender: "Male" };

console.log(obj2)
