/*
 a function along with lexical scope bundle together forms a closure
*/

// function outer() {
//   let count = 0; // outer variable
//   function inner() {
//     count++; // inner function "closes over" count
//     console.log(count);
//   }
//   return inner;
// }

// const counter = outer(); // outer() has already finished executing
// counter(); // 1
// counter(); // 2
// counter(); // 3

//---------------------------

// function x() {
//   var a = 9;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// returning the whole fucntions  ...
function x() {
  var a = 9;
  function y() {
    console.log(a);
  }
  return y ; 
}
var z = x() ; 
console.log(z) ; 
z() ; // here it will print the 9 becuase it is remeber it lexical scope we will not get error
