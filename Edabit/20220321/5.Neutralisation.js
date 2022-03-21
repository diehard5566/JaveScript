// Given two strings comprised of + and -, return a new string which shows how the two strings interact 
// in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.




const neutralise = (s1, s2) => {

    let ss1 = s1.split('')
    let ss2 = s2.split('')
    let result = []
    for (let i = 0; i < ss1.length; i++) {
        if (ss1[i] === ss2[i]) {
            result.push(ss1[i])
        }
        else {
            result.push('0')
        }
    }
    return result.join('')
}


neutralise("+-+", "+--") // "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.

neutralise("--++--", "++--++") // "000000"

neutralise("-+-+-+", "-+-+-+") // "-+-+-+"

neutralise("-++-", "-+-+") // "-+00"