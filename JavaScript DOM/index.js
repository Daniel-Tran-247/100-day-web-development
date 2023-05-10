var randNum1 = Math.floor(Math.random() * 6 + 1);
var randNum2 = Math.floor(Math.random() * 6 + 1);

var source1 = "images/dice" + randNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", source1);

var source2 = "images/dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", source2);

if (randNum1 > randNum2) {
    document.getElementById("title").textContent = "🚩Player 1 Wins!";
}
else if (randNum1 < randNum2) {
    document.getElementById("title").textContent = "Player 2 Wins!🚩";
}
else {
    document.getElementById("title").textContent = "Draw!";
}