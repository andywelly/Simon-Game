var colours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

function nextSequence() {
    var randNum = Math.floor(Math.random() * 4);
    gamePattern.push(colours[randNum]);
};
