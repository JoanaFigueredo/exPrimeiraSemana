let promise = new Promise ((resolve, reject) => {
    let itShouldResolve = false;
    if(itShouldResolve){
      resolve("verdadeiro");
    }else{
      reject("falso");
    }
    });
    
    promise.then((data) => console.log(`${data}`));
    promise.catch((data) => console.log(`${data}`));
    