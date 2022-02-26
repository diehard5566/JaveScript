let random = Math.floor(Math.random()* 100);

const isPrime = num =>{
    for (let i = 2; num > i; i++){
      if(num % i === 0){
        return false;
      }  
    }
    return num > 1; //用來判斷 1, 2, 3 
  }
console.log(random)
console.log(isPrime(random))