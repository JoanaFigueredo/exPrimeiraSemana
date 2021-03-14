let promise = new Promise ((resolve,reject) =>{
    reject("Boo!");
  });
  
  promise.catch((data) => console.log (`${data}: erro`));