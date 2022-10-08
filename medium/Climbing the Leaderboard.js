// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
// 2/12 test case passed

function climbingLeaderboard(ranked, player) {
    let score = 0;
    let ranking = new Set(ranked);
    let rankingHistory = [];
    for(let i = 0; i < player.length; i++) {
        score += player[i];
        ranking.add(score);
        let tempArr = Array.from(ranking).sort(function(a, b){return b - a});
        rankingHistory.push(tempArr.indexOf(score) + 1);
    }
    return rankingHistory;
}

ranked = [100, 100, 50, 40, 40, 20, 10];
player = [5, 25, 50, 120];

console.log(climbingLeaderboard(ranked, player));

