// You just returned home to find your mansion has been robbed! Given an object of the stolen items, 
// return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".



// const calculateLosses = obj => {
//     if (Object.keys(obj).length === 0 ) {
//         return 'Lucky you!'
//     }    
    
//     let sum = 0;
//     for ( key in obj){
//         sum += obj[key];
//     }
//     return sum 
    

// }


const calculateLosses = obj => 
	Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';

console.log(calculateLosses ({}));  // 100

console.log(calculateLosses({
  painting: 20000,
}))  // 20000
