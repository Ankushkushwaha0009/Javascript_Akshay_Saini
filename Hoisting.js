/*
During the creation phase of an execution context,
JavaScript creates bindings for declarations before 
executing the code.
*/

// var x = 7 ; 

// function getName() {
//     console.log("namste Javacsript")  ; 
// }

// getName() ; 
// console.log(x) ; 

//-------------------------------------

// var x = 10 ; 

// function getName() {
//     console.log("namste Javacsript")  ; 
// }

//-------------------------------------

// console.log(getName) ; //it will print the whole functions  ....
// console.log(x) ;  // x is not defined 
// var x = 10 ; 

// function getName() {
//     console.log("namste Javacsript")  ; 
// }

//----------------------------------

// getName() ; 

// console.log(x) ;
// console.log(getName) ; 

// var x = 10 ; 

// function getName() {
//     console.log("Namste Javacsript")  ; 
// }

//-----------------------------------

getName()  ; // getName is not a function ....
console.log(x) ; //undefined 
console.log(getName) ; //undefined 
var x = 10 ; 
var getName = () =>  {
    console.log("Namste Javascript")  ; 
}

//---------------------------------