let promise = new Promise((resolve,reject)=>{
    let resultado = false;
    let delayInMs = 2000;
    setTimeout(()=>{
      resolve('ok')
    }, delayInMs);
  });
  promise.then((data)=>console.log(`${data}`)).catch((data)=>console.log(`${data}`))
  
  console.log('fui executado antes');