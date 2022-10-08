// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
// passed

function plusMinus(arr) {
    let countPositive = 0, countNegative = 0, countZero = 0;
    for (let item of arr) {
        if (item > 0)
            countPositive++;
        if (item < 0)
            countNegative++;
        if (item === 0)
            countZero++;
    }
    let countPositiveRatio = countPositive / arr.length;
    let countNegativeRatio = countNegative / arr.length;
    let countZeroRatio = countZero / arr.length;

    console.log(countPositiveRatio.toFixed(6));
    console.log(countNegativeRatio.toFixed(6));
    console.log(countZeroRatio.toFixed(6));
}

let arr = [1,1,0,-1,-1];
plusMinus(arr);