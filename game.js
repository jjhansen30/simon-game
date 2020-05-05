
var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var keyPressCount = 0;
var level = 0;

$("body").on("keydown",startGame);

$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  //checks if user clicks button before the game starts
  if(keyPressCount === 0){
    alert("Please press a key to start the game");
  }else{
    userClickPattern.push(userChosenColor);
    compareArrays(userChosenColor);
  }
});

function startGame(){
  keyPressCount ++;
  if(keyPressCount >= 2){
    null;
  } else{
    displayCurrentLevel();
    nextSequence();
  }
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  var colorElement = $("#" + randomChosenColour);
  level++;
  gamePattern.push(randomChosenColour);
  colorElement.fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  displayCurrentLevel();
}

function resetArray(){
  for(i = userClickPattern.length; i > 0; i--){
    userClickPattern.pop();
  }
  console.log('userClickPattern array reset: ' + userClickPattern)
}

function compareArrays(color){
  var indexedItem = userClickPattern.length - 1;
  if(userClickPattern[indexedItem] === gamePattern[indexedItem]){
    displayCurrentLevel();
    playSound(color);
    animatePress(color);
    if(userClickPattern.length === gamePattern.length){
      resetArray();
      setTimeout(function(){nextSequence()},1000);
    }
  }else{
    animateGameOver();
    startOver();
  }
}

function startOver(){
  level = 0;
  keyPressCount = 0;
  for(a = gamePattern.length - 1; a > 0; a--){
    gamePattern.pop();
  }
}

function startOver(){
  level = 0;
  keyPressCount = 0;
  for(a = gamePattern.length - 1; a > 0; a--){
    gamePattern.pop();
  }
}

function animateGameOver(){
  var wrongSound = new Audio('sounds/wrong.mp3');
  wrongSound.play();
  $("h1").html("Game Over, Press Any Key To Restart");
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over")},200);
}

function displayCurrentLevel(){
  $("h1").html("LEVEL " + level);
}

function resetArray(){
  for(i = userClickPattern.length; i > 0; i--){
    userClickPattern.pop();
  }
  console.log('userClickPattern array reset')
  return userClickPattern;
}

function displayCurrentLevel(){
  $("h1").html("LEVEL " + level);
}

function animatePress(currentColor){
  var colorElement = $("#" + currentColor);
  colorElement.addClass("pressed");
  setTimeout(function(){colorElement.removeClass("pressed");}, 100);
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
