/*
 The let x binding exists, but you cannot access it before its declaration is initialized.
 The period between:
    Start of scope
       ↓
   let x exists
       ↓
   x = 10
   is called the tempral dead zone ....
*/

/*
It prevents us from accidentally using a variable before it has been initialized.
*/

//undefined it is confusing ....
// console.log(name);
// var name = "Ankush";

//----------------------------
// console.log(name); //cannot acess name befor intilization...
// let name = "Ankush";

//-----------------------------

// let x = 10;
// {
//     //the inner x is in tempral dead zone
//     console.log(x); //throw an error bcuase inner block has its own x
//     let x = 20;
// }

//---------------------------------
// let x = 10;
// {
//     //there is not inner x so javascript searches the outer scope...
//     console.log(x);
// }

/*

var is function scoped, so all three callbacks created 
inside the loop share the same i variable.
The loop finishes before the callbacks execute,
and after the loop i becomes 4. Therefore, all
callbacks read the same variable and print 4. With let,
each iteration of the for loop gets its own block-scoped 
binding, so each callback captures a different value: 1, 2, and 3
*/

//----------------------------------
// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i); //we will get 4 only
//   }, 1000);
// }

//-----------------------------------
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i); //1 2 3
//   }, 1000);
// }

//-----------------------------------
// for (var i = 1; i <= 3; i++) {
//     console.log("Loop:", i);
//     setTimeout(() => {
//         console.log("Timeout:", i);
//     }, 0);
// }

//------------------------
//Even with 0ms, B waits until the current synchronous code finishes.
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");