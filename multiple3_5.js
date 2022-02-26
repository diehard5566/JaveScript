/*
**
其實只要找出給定數字內（num）可以被3或5整除-> n % 3 === 0 || n % 5 === 0的值就好
**
*/


const num1 = num =>{
    let result = [];
    for (i = 3; i <= 3; i++){
      for (j = 1; j <=num; j++){
        let mul = i * j;
        if(mul < num){
          result.push(mul); 
        } 
      }
    }
    return result;
  }
  
  const num2 = num =>{
    let result2 = [];
    for (i = 5; i <= 5; i++){
      for (j = 1; j <=num; j++){
        let mul = i * j;
        if(mul < num){
          result2.push(mul);    
        } 
      }
    }
    return result2;
  }
  
  
  const sum = num =>{
    if (num <= 3){
      return 0
    }
    let sum1 = num1(num);
  
    let sum2 = num2(num);
  
    let concatSum = sum1.concat(sum2);
    let final = concatSum.filter(function(element, index, array) {
      return index === array.indexOf(element);
    })
    
    let sum = final.reduce(function(a, b){
      return a + b;
    })
    
    return sum;
  
  }
  console.log(sum(1000))


//   let intSum = 0;
//   for (let i = 1; i < 1000; i++)  if ((i % 3) === 0 || (i % 5) === 0) intSum += i;
//   console.log(intSum);