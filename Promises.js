const promise = new Promise((resolve , reject) => {
     let success= true ;
     if(success) {
         resolve("sucess....") ;
     }else {
        reject("failed...")
     }
})
promise.then((data) => console.log(data))
.catch(err => console.log(err)) ;