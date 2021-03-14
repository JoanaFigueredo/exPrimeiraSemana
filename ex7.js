function quadrado(){
    const n = 2;
    return new Promise((resolve,reject) =>{
      resolve(n*n);
    })
  }
  
  
  quadrado().then((data)=> console.log(`valor ao quadrado: ${data}`))