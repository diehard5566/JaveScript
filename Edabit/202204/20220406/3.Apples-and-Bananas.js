// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

/* fill in */
String.prototype.vreplace = function (vowel) {
    return this.replace(/[aeiou]/g, vowel)
}

'apples and bananas'.vreplace('u') // "upplus und bununus"

'cheese casserole'.vreplace('o') // "chooso cossorolo"

'stuffed jalapeno poppers'.vreplace('e') // "steffed jelepene peppers"
