// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false
// 2 test cases passed

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleNum = 0, orangeNum = 0;
    for (let i = 0; i < apples.length; i++) {
        apples[i] += a;
        if (apples[i] >= 7 && apples[i] <= 11) {
            appleNum++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        oranges[i] += b;
        if (oranges[i] >= 7 && oranges[i] <= 11) {
            orangeNum++;
        }
    }
    console.log(appleNum);
    console.log(orangeNum);
}

