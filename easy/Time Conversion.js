// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
// passed

function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    let period = s.slice(8, 10);
    if (period == "PM") {
        if (hour != 12)
            hour += 12;
    }
    if (period == "AM") {
        if (hour === 12)
            hour = 0;
    }
    if (hour < 10)
        hour = "0" + hour;
    let substring2 = s.slice(3,8);
    let output = `${hour}:${substring2}`;
    return output;
}

console.log(timeConversion("07:05:45PM")); // "19:05:45"
console.log(timeConversion("12:40:22AM")); // "00:40:22"
