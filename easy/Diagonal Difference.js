// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
// passed

function diagonalDifference(arr) {
    let diagonalSum1 = 0, diagonalSum2 = 0;
    let row = arr.length;
    let column = arr[0].length;
    let min = Math.min(row, column);
    for (let i = 0; i < min; i++) {
        diagonalSum1 += arr[i][i];      
    }
    for(let i = 0; i < min; i++) {
        diagonalSum2 += arr[i][column - 1 - i];
    }
    let result = Math.abs(diagonalSum1 - diagonalSum2);
    return result;
}

let arr = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]

console.log(diagonalDifference(arr));
