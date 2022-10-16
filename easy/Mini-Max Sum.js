// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
// passed

function miniMaxSum(arr) {
    arr.sort(function (a, b) { return a - b });
    let minArr = arr.slice(0, arr.length - 1);
    let maxArr = arr.slice(1, arr.length);
    let min = minArr.reduce(getSum, 0);
    let max = maxArr.reduce(getSum, 0);

    function getSum(total, num) {
        return total + num;
    }
    console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // 10 14
miniMaxSum([1, 3, 5, 7, 9]); // 16 24