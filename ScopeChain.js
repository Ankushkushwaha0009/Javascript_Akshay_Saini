/*
What Actually HappensCall Stack Execution:Global Execution Context (GEC) is created.a() is
called $\rightarrow$ pushing a to the Call Stack.Inside a(), variable x is declared and assigned 
10 inside a's local scope.b() is called and popped, then a() finishes and is popped from the Call Stack.
Control returns to the Global Execution Context.The Scope Chain vs. Lexical Scope:
When console.log(x) runs at the global level, JavaScript looks for x in the 
Global Scope.x was declared using var inside function a(). Variables declared with var, let,
or const inside a function are function-scoped.The Global Scope has no visibility into the internal 
scope of function a().Why it fails:It is not just because a() was popped off the call stack and garbage 
collected. Even while a() is running, code in the outer global scope cannot access inner variables of a().
Because x was never declared in the Global Scope, JS cannot resolve the reference in the Scope Chain, 
resulting in a ReferenceError.Summary of Scope Chain BehaviorInside looking out: Function b can see variables
in a and the Global Scope (Lexical Environment).Outside looking in: The Global Scope cannot reach inside 
function a to read its local variables.
*/

// function a() {
//     b()  ;
//     function b() {
//first it will search locally in b if not found then it will go to a if not found then it will to next parent and there it will se x as 10
//         console.log(x) ;
//     }
// }
// var x = 10 ;
// a()  ;

// function a() {
//     var x = 10 ;
//     b()  ;
//     function b() {
//         console.log(x) ;
//     }
// }
// a()  ;

// function a() {
//   var x = 10; //outside this function we will not able to access this x variable
//   b();
//   function b() {}
// }
// a();
// console.log(x); //reference error : Not defined

//---------------------------------
//Global Scope...

// let Name = "ankush kushwaha" ;
// function hello() {
//   Bye()  ;
//   function Bye() {
//     console.log(Name) ; 
//   }
// }
// hello() ;

//-------------------------------- 

//var is functional scoped

// function test() {
//   var x = 10  ;
//   console.log(x) ; 
// }
// test() ; 
// console.log(x) ; //reference error .....

//-------------------------------------------

//Block Scoped (let and const are blocked scoped...)

// if(true)  {
//   let x = 10 ; //we can acess this inside the block only
//   var y = 20 ; 
//   // console.log(x) ; 
//   console.log(y) ; //here we can acess 
//   //lets try to access this variable x here .....
//    {
//       console.log(x) ; //we can acess here ....
//    }
// }
// console.log(y) ; //here also we can acccess

//--------------------------------------------

// since if crate the block but not a function , var scapes the block ...
// if (true) {
//     var a = 10; // fucntion scope
//     let b = 20; // block scope
// }
// console.log(a); // 10
// console.log(b); // reference error

//----------------------------------------

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i); // it will print 3 becuase var isnt't blocked scope

//-----------------------------------

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i); // reference error we cannot acess outside the block...