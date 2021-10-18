// var obj = {
//   name: "Alex",
//   address1: {
//     line1: "123 Street",
//     line2: "XYZ Avenue",
//     city: "New Delhi",
//     country: "India",
//   },
// };

// console.log(obj?.address?.country);

// // if (obj) {
// //   if (obj.address) {
// //     if (obj.address.country) {
// //       console.log(obj.address.country);
// //     } else {
// //       throw Error();
// //     }
// //   } else {
// //     throw Error();
// //   }
// // } else {
// //   throw Error();
// // }

// function testFunc(bool) {
//   bool && console.log("true");
// }

// testFunc(false)

var name = "Alex";

let studentName = name ?? "John Doe";

console.log(studentName);
