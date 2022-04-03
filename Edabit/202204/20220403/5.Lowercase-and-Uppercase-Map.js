// Write a function that creates an object with each (key, value) pair being the
// (lower case, upper case) versions of a letter, respectively.

const mapping = letters => letters.reduce((a, v) => ({ ...a, [v]: v.toUpperCase() }), {})

mapping(['p', 's']) // { "p": "P", "s": "S" }

mapping(['a', 'b', 'c']) // { "a": "A", "b": "B", "c": "C" }

mapping(['a', 'v', 'y', 'z']) // { "a": "A", "v": "V", "y": "Y", "z": "Z" }
