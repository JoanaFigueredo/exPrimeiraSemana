let promise = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 3000;
    setTimeout(()=>{
      if(resultado){
        resolve("oi")
      }else{
        reject("tchau")
      }
    },tempo);
  
  });
  
  promise.then((data) => console.log(`${data}`));
  promise.catch((data) => console.log(`${data}`));