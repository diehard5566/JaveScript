// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)

const findBrokenKeys = (str1, str2) => {
    let origin = str1.split('')
    let broken = str2.split('')
    let wrong = []
    let x
    for (let i = 0; i < origin.length; i++) {
        console.log(origin[i], broken[i])
        if (origin[i] != broken[i]) {
            console.log(origin[i])
            wrong.push(origin[i])
            wrong
            x = [...new Set(wrong)]
        }
    }
    return x

    return [...new Set(str1.split('').filter((a, index) => a !== str2[index]))]
}

console.log(findBrokenKeys('happy birthday', 'hawwy birthday')) // ["p"]

console.log(findBrokenKeys('starry night', 'starrq light')) // ["y", "n"]

console.log(findBrokenKeys('beethoven', 'affthoif5')) // ["b", "e", "v", "n"]
