const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let start = false;

$("body").on("keydown", function() {
    if (!start) {
        $("h1").text("Level " + level);
        start = true;
        nextSequence();    
    }
});


$("button").click (function() {
    let userChosenColor = $(this).attr("class");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern.length);
    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);

  });
  
function nextSequence() {
    console.log(userClickedPattern)
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    let randNum = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    $("." + randomChosenColor).fadeOut(40).fadeIn(40).fadeOut(40).fadeIn(40);
}


function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout( () => {
                nextSequence();
            }, 1000);
        } 
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over! Press Any Key to Restart");

        setTimeout( () => {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout( () => {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}  

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }




