// Create a function that counts the integer's number of digits.


const count = num => {
    if (num === 0) return 1;
    let c = [];
    num = Math.abs(num)
    while (num > 0){
        c.push(num % 10)
        num = parseInt(num / 10)
    }
    console.log(c)
    return c.length

    // return Math.ceil(Math.log10(Math.abs(num)))
};


count(318) // 3
 
count(-92563) // 5
 
count(4666) // 4

count(-314890) // 6

count(654321) // 6

count(638476) // 6

