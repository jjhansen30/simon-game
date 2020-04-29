
var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log(userClickPattern);
  animatePress(userChosenColor);
});

function animatePress(currentColor){
  var colorElement = $("#" + currentColor);
  colorElement.addClass("pressed");
  setTimeout(function(){colorElement.removeClass("pressed");}, 100);
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  var colorElement = $("#" + randomChosenColour);
  //--------------------------------------------
  gamePattern.push(randomChosenColour);
  colorElement.fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

function playSound(color){
  var soundLocation = {
    'red': "sounds/red.mp3",
    'blue': "sounds/blue.mp3",
    'green': "sounds/green.mp3",
    'yellow': "sounds/yellow.mp3"
  }
  var sound = new Audio(soundLocation[color]);
return sound.play();
}
