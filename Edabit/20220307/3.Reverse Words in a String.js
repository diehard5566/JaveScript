// Given an input string, reverse the string word by word, the first word will be the last, and so on.

const reverseWords = string => {
    // let t = string.trim();
    // let sp = t.split(' ');
    // let re = sp.reverse();
    // let j = re.join(' ')
    // return j
    return string.split(' ').reverse().join(' ');


}



reverseWords(" the sky is blue") // "blue is sky the"

reverseWords("hello   world!  ") // "world! hello"

reverseWords("a good example") // "example good a"