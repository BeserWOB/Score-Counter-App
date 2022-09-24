let countHome = 0;
let countAway = 0;
let homeScore = document.getElementById("home-points");
let awayScore = document.getElementById("away-points");

function addOnePointHome(){
    countHome += 1;
    homeScore.innerText = countHome;
}
function addTwoPointsHome(){
    countHome += 2;
    homeScore.innerText = countHome;
}
function addThreePointsHome(){
    countHome += 3;
    homeScore.innerText = countHome;
}

function addOnePointAway(){
    countAway += 1;
    awayScore.innerText = countAway;
}
function addTwoPointsAway(){
    countAway += 2;
    awayScore.innerText = countAway;
}
function addThreePointsAway(){
    countAway += 3;
    awayScore.innerText = countAway;
}
