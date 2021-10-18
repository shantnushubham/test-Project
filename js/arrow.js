// function addTwoNumbers(a, b) {
//   return a + b;
// }

// var sum = addTwoNumbers(5, 6);
// console.log(sum);

// let addTwoNumbers = (a, b) => a + b;

// console.log(addTwoNumbers(5, 6));

var myObject = {
  name: "Alex",
  display1: function () {
    console.log(this.name);
  },
  display2: () => {
    console.log(this.name);
  },
};

myObject.display1();
myObject.display2();