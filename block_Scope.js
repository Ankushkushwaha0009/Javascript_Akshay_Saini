// ///block scope

// {
//     //it is in global sope
//     var a = 10 ;
//     // it is in block scope
//     let b = 20 ;
//     const c = 40 ;
// }
// console.log(a) ;
// // console.log(b) ; // b  is not defined

//----------------------------------------------
//Shadowing ....
// var a  = 100 ;
//  {
//     var a  = 20 ;  //both are pointing to the same location .... so it will override the 100 with 20
//     let b  = 100 ;
//     const c = 99 ;
//     console.log(a) ;
//  }

//  console.log(a)  ;

//------------------------------------
//now using let variable ..

// let b = 20 ; // it is in script scope
//  {
//      let b = 100 ;  //it is in block scope
//      console.log(b) ;
//  }
//  console.log(b) ;

//---------------------------------- Using functions ..........
// const a = 100 ;
// function c() {
//     const a = 99 ;
//     console.log(a) ;
// }
// c() ;
// console.log(a) ;

//Scope..

// const a = 20 ;
// {
//     const a = 100 ;
//      {
//         const a = 200 ;
//         console.log(a)  ;
//      }
// }

// const a = 20 ;
// {
//     const a = 100 ;
//      {
//         console.log(a)  ;
//      }
// }

const a = 20;
{
  const a = 100;
  {
    console.log(a);
  }
}

console.log(a);
