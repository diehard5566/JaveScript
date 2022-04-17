// Write a function that counts how many concentric layers a rug has.

const countLayers = rug => {
    // let m = rug.length / 2 - 0.5
    // let middle = rug[m]
    // middle
    // let result = new Set([...middle]).size
    // return result

    return new Set(rug).size
}
console.log(countLayers(['AAAA', 'ABBA', 'AAAA']), 2) // 2

console.log(countLayers(['AAAAAAAAA', 'ABBBBBBBA', 'ABBAAABBA', 'ABBBBBBBA', 'AAAAAAAAA']), 3) // 3

console.log(
    countLayers([
        'AAAAAAAAAAA',
        'AABBBBBBBAA',
        'AABCCCCCBAA',
        'AABCAAACBAA',
        'AABCADACBAA',
        'AABCAAACBAA',
        'AABCCCCCBAA',
        'AABBBBBBBAA',
        'AAAAAAAAAAA',
    ]),
    5
) // 5

console.log(
    countLayers([
        'FFFFFFFFFFFFFFFFFFFFFFFFF',
        'FFFFFFFFFFFFFFFFFFFFFFFFF',
        'FFFFGGGGGGGGGGGGGGGGGFFFF',
        'FFFFGGGAAAAAAAAAAAGGGFFFF',
        'FFFFGGGAABBBBBBBAAGGGFFFF',
        'FFFFGGGAABCCCCCBAAGGGFFFF',
        'FFFFGGGAABCDDDCBAAGGGFFFF',
        'FFFFGGGAABCDDDCBAAGGGFFFF',
        'FFFFGGGAABCDDDCBAAGGGFFFF',
        'FFFFGGGAABCCCCCBAAGGGFFFF',
        'FFFFGGGAABBBBBBBAAGGGFFFF',
        'FFFFGGGAAAAAAAAAAAGGGFFFF',
        'FFFFGGGGGGGGGGGGGGGGGFFFF',
        'FFFFFFFFFFFFFFFFFFFFFFFFF',
        'FFFFFFFFFFFFFFFFFFFFFFFFF',
    ]),
    6
) // 6
