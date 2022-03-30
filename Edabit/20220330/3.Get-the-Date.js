// Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string.
// Each day name must be one of the following
// strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

// To illustrate, the day of the week for "12/07/2016" is "Wednesday".

const getDay = day => {
    const d = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' }
    // let x = day.split('/').map(Number)
    let date = new Date(day).getDay()
    return d[date]

    //new Date(day).toLocaleString('en-us', {weekday:'long'});
}

console.log(getDay('12/07/2016'))
// "Wednesday"

console.log(getDay('09/04/2016')) // "Sunday"

console.log(getDay('12/08/2011')) // "Thursday"
