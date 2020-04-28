
var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
});

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  var colorElement = $("#" + randomChosenColour);
  //--------------------------------------------
  gamePattern.push(randomChosenColour);
  colorElement.fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
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
