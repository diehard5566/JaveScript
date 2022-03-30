// Your job is to make a "Twitter link" regular expression rx.
// This RegEx searches a tweet to find the @handle and the #handle.

// The function is already written in the Tests tab, so you only need to provide the RegEx variable in the Code tab.
// Only return the @ and # handles.

// The function is at the test tab, you only need to provide
// the Regex variable:

const rx = /[@#]\w+/gi

const tweet = str => str.match(rx).join('')

console.log(tweet('Visit us at @edabit'))
// "@edabit"
console.log(tweet('Follow @JavaScript'))
// "@JavaScript"
console.log(tweet('#Honesty is the best @policy!!'))
// "#Honesty @policy"
