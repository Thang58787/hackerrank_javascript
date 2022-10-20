// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false
// passed

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleNum = 0, orangeNum = 0;
    for (let i = 0; i < apples.length; i++) {
        apples[i] += a;
        if (apples[i] >= s && apples[i] <= t) {
            appleNum++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        oranges[i] += b;
        if (oranges[i] >= s && oranges[i] <= t) {
            orangeNum++;
        }
    }
    console.log(appleNum);
    console.log(orangeNum);
}

console.log(1);
console.log(2);
