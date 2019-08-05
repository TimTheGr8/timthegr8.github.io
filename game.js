//  Vars
var gameRunning = false;
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClcikedPattern = [];

// Game Loop
$(document).on("keypress", function(){
  if(!gameRunning){
    gameRunning = true;
    $("body").removeClass("game-over");
    nextSequence();
    // console.log("The game has started.");
  }
});



//  When a player clicks a button play the corresponding sound and add that color to the player array
$(".btn").on("click",  function() {
  if(gameRunning) {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClcikedPattern.push(userChosenColor);
    checkAnswer(userClcikedPattern, gamePattern);
  }
});

//  Functions

//  Used to add a new color to the current sequence and increase the level and update the title text
function nextSequence () {
  level++;
  $("#level-title").text("Level " + level);
  userClcikedPattern.length = 0;
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  setTimeout(function() {
    displayPatter(0, gamePattern);
  }, 500);

}

//  Used to display the full pattern to the player
function displayPatter(index, array) {

  if(index >= array.length)
    return;

  $("#" + gamePattern[index]).fadeOut(150).fadeIn(150);
  playSound(gamePattern[index]);
  index ++;
  setTimeout(displayPatter.bind({}, index, array), 500);
}

//  Play the correct sound
function playSound (name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//  Add an animation when the player clicks a button
function animatePress (currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Check the user sequence against the game sequence
function checkAnswer (){
  for(var i = 0; i < userClcikedPattern.length; i++){
    if(userClcikedPattern[i] === gamePattern[i]){
      // console.log("Correct");
      continue;
    }
    else{
      // console.log("Wrong");
      gameOver();
      break;
    }

  }
  if(userClcikedPattern.length === gamePattern.length && gameRunning)
    setTimeout(function() {
      nextSequence();
    }, 800);

}

// Set the game over screen and wait for player to restart
function gameOver() {
  gameRunning = false;
  $("body").addClass("game-over");
  $("h1").text("Game Over Press Any Key To Play Again");
  gamePattern = [];
  userClcikedPattern = [];
  level = 0;
}
