// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
// passed

function staircase(n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j < n - i - 1) {
                output += " ";
            } else {
                output += "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}

staircase(4);
staircase(6);