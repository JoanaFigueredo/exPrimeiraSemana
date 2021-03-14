let promise = new Promise ((resolve,reject) =>{
  resolve(3);
});

promise.then((data) => console.log (`numero: ${data}`));
promise.catch((data) => console.log (`numero: ${data}`));