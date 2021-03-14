function quadrado(){
    const n = 2; 
    return new Promise((resolve,reject) =>{
      resolve(n*n);
    })
  }
  //function string(){}
  
  function stringN(){
    let string = 'a';
    return new Promise((resolve,reject) =>{
      reject(`Não é possivel tranformar para numero: ${string}`);
    })
  }
  quadrado().then((data)=> console.log(`valor ao quadrado: ${data}`))
  stringN().catch((data) => console.log (`error: ${data}`));