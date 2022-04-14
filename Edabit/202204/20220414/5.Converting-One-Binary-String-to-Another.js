// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

const minSwaps = (s1, s2) => {
    let count = 0
    for (let i = 0; i < s1.length; i++) {
        console.log(s1[i])
        console.log(s2[i])
        if (s1[i] != s2[i]) {
            count++
        }
    }
    count
    return count / 2
}

// minSwaps('1100', '1001') // 1

// minSwaps('110011', '010111') // 1

minSwaps('10011001', '01100110') // 4
