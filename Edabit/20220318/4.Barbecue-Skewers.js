// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). 
// A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

// ["--xo--x--ox--",
// "--xx--x--xx--",
// "--oo--o--oo--",      <<< vegetarian skewer
// "--xx--x--ox--",
// "--xx--x--ox--"]
// Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. 
// For example above, the function should return [1, 4].

const bbqSkewers = grill => {
    let countmeat = 0;
    let countvege = 0
    // console.log('---');
    for (let i = 0; i < grill.length; i++) {
        // console.log('ele: ', i, grill[i]);
        // if (grill[i].includes('x')) {
        //     countmeat++
        // } else {
        //     countvege++
        // }
        grill[i].includes('x') ? countmeat++ : countvege++
    }
    return [countvege, countmeat]

    // 	let non = grill.filter(x => x.includes('x')).length
    // return [grill.length - non, non] sorter ans
}

console.log(bbqSkewers([
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
]));

// ➞ [2, 3]

bbqSkewers([
    "--oooo-ooo--",
    "--xxxxxxxx--",
    "--o---",
    "-o-----o---x--",
    "--o---o-----"
])
// ➞ [3, 2]