/*
  a function along with lexical scope bundle together 
  forms a closure
*/

/*
  A closure is a function bundled with access to the
  variables from its surrounding lexical scope,
  allowing those variables to stay accessible even 
  after the outer function has finished executing
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

//---------------------------------------

// function x() {
//   var a = 9;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

//----------------------------------------

// returning the whole fucntions  ...
// function x() {
//   var a = 9;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
// z(); // here it will print the 9 becuase it is remeber it lexical scope we will not get error

//----------------------------------

// function x() {
//   var a = 9;
//   function y() {
//     console.log(a);
//   };
//   var a = 100 ;
//   return y  ;
// }
// var z = x();
// console.log(z);
// z(); // it will print 100 not 9

//----------------------------------

// function z() {
//   var b = 900  ; 
//   function x() {
//     var a = 9;
//     function y() {
//       console.log(a , b);
//     }
//     y() ; 
//   }
//   x() ; 
// }
// z() ; // 9 100

//------------------------------------

// function Outer() {
//   let count = 0 ; 
//   function inner() {
//       count++ ; 
//       console.log(count) ; 
//   }
//   return inner ; 
// }

// const callingTheFunctions = Outer() ; 
// callingTheFunctions() ; 
// callingTheFunctions() ; 
// callingTheFunctions() ; 

//-------------------------------------

/*
Every time you execute Outer(), a brand-new, isolated enclosure with its own count variable is created.
If you call Outer() a second time and save it to a new variable, it gets its own fresh counter
*/
function Outer() {
  let count = 0 ; 
  function inner() {
      count++ ; 
      console.log(count) ; 
  }
  return inner ; 
}

const counterA = Outer();
const counterB = Outer();

//counter A and counter B both are independent to each other 
counterA(); // 1
counterA(); // 2
console.log("---------------------"); 
counterB(); // 1
counterB(); // 2
counterB(); //3