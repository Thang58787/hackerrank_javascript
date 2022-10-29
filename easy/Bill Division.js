// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
// passed

function bonAppetit(bill, k, b) {
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i === k)
            continue;
        total += bill[i];
    }
    let billActual = total / 2;
    let difference = Math.abs(b - billActual);
    if (difference === 0)
        console.log('Bon Appetit');
    else
        console.log(difference);
} 