// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
// passed

function migratoryBirds(arr) {
    let numType = [0, 0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 1:
                numType[0]++;
                break;
            case 2:
                numType[1]++;
                break;
            case 3:
                numType[2]++;
                break;
            case 4:
                numType[3]++;
                break;
            case 5:
                numType[4]++;
                break;
        }
    }
    return numType.indexOf(Math.max(...numType)) + 1;
}
