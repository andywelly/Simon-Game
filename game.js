var colours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];


$(".btn").on("click", function() { 
    var pressedColour = $(this).attr("id");
    userClickedPattern.push(pressedColour);
    console.log(userClickedPattern);

    playSound(pressedColour);
    animatePress(pressedColour);

});

function playSound(currentColour) {
    var audio = new Audio('./sounds/' + currentColour + '.mp3');
    audio.play();
}

function nextSequence() {
    var randNum = Math.floor(Math.random() * 4);

    var randColour = colours[randNum];

    gamePattern.push(randColour);

    $("#" + randColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randColour);

};

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}