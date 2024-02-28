var colours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

// On button click

$(".btn").on("click", function() { 
    var pressedColour = $(this).attr("id");
    userClickedPattern.push(pressedColour);
    console.log(userClickedPattern);

    playSound(pressedColour);
    animatePress(pressedColour);
    checkSequence(userClickedPattern.length -1);

});

// On Keypress

$(document).on("keypress", function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkSequence(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");
        
        playSound("wrong")
        
        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 300);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}


function playSound(currentColour) {
    var audio = new Audio('./sounds/' + currentColour + '.mp3');
    audio.play();
}

function nextSequence() {

    userClickedPattern = [];

    level ++;
    $("#level-title").text("Level " + level);

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

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}