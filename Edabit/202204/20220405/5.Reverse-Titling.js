// Your stereotypical titleCase() function in JavaScript might capitalises the
// first letter of every word in a given sentence, leaving all the other letters as lowercase.

// The goal of this challenge, however, is to create a reverseTitle() function,
// which achieves the complete opposite! Make the first letter of every word lowercase,
//  and the rest uppercase!

const reverseTitle = s => {
    let x = s
        .split(' ')
        .map(x => x.slice(0, 1).toLowerCase() + x.slice(1).toUpperCase())
        .join(' ')
    return x
}

reverseTitle('this is a title') // "tHIS iS a tITLE"

reverseTitle('BOLD AND BRASH!') // "bOLD aND bRASH!"

reverseTitle('Elephants dance about bravely in Thailand') // "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"
