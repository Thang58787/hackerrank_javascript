// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
// passed

function birthdayCakeCandles(candles) {
    var maxHeight = Math.max.apply(Math, candles);
    let maxHeightNum = candles.filter(x => x === maxHeight).length;
    return maxHeightNum;
}

console.log(birthdayCakeCandles([3,2,1,3])); // 2
console.log(birthdayCakeCandles([4,4,1,3])); // 2
