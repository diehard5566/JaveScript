// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s.
//  Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

const uncensor = (str, vowels) => {
    let x = str.split('')
    let v = vowels.split('')
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '*') {
            console.log(x[i])
            let r = v.shift()
            r
            x[i] = r
        }
    }
    console.log(x.join(''))
    x
    v

    // const arr = vowels.split('');
    // return str.replace(/\*/g, () => arr.shift());
}

uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo') // "Where did my vowels go?"

uncensor('abcd', '') // "abcd"

uncensor('*PP*RC*S*', 'UEAE') // "UPPERCASE"
