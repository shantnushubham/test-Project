// 1. forEach
// 2. map
// 3. filter
// 4. reduce
// 5. includes

// 1. forEach
// let arr = ["Box1", "Box2", "Box3"];
// for (let i = 0; i < arr.length; i++) {
//   if (i == arr.length - 1) {
//     break;
//   }
//   console.log(arr[i]);
// }

// arr.forEach((el, index) => {
//   console.log(el)
// })

// 2. map
// let arr1 = [5, 6, 7, 8, 9, 10];
// let arr2 = arr1.map((el) => {
//   return el * el;
// });

// console.log(arr2);

// 3. filter
// let wordArray = ["Mango", "Strawberry", "Kiwi", "Apple"];

// let filteredArray = wordArray.filter((el) => el.length >= 5);

// console.log(filteredArray);

// 4. reduce

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = array.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue * currentValue;
// }, 0);
// console.log(result)

// 5. includes

let array1 = ["Kiwi", "Apple", "Watermelon", "Mango"]
console.log(array1.includes("Mango1"))
