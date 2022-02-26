const toRoman = num =>{
    const map = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1 
    };
    let result = "";
  
    for (key in map){
      const repeatCount =  Math.floor(num / map[key]);

      if (repeatCount !== 0){
        result += key.repeat(repeatCount);
      }

      num %= map[key];

      if(num === 0) return result;
    }
  
    return result;
  
  };
  
  console.log(toRoman(12))