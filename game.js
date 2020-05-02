
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
    level++
    userClickPattern.push(userChosenColor);
    compareArrays();
    displayCurrentLevel();
    playSound(userChosenColor);
    animatePress(userChosenColor);
  }
});

function startGame(){
  keyPressCount ++;
  if(keyPressCount >= 2){
    null;
  } else{
    console.log("start game");
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
  console.log("gamePattern: " + gamePattern);
}

function resetArray(){
  for(i = userClickPattern.length; i > 0; i--){
    userClickPattern.pop();
  }
  console.log('userClickPattern array reset: ' + userClickPattern)
}

function compareArrays(){
  var indexedItem = userClickPattern.length - 1;
  console.log('gamePattern: ' + gamePattern);
  console.log("userClickPattern: " + userClickPattern);
  if(userClickPattern[indexedItem] === gamePattern[indexedItem]){
    console.log("arrays match");
  }else{
    console.log('arrays do not match')
    animateGameOver();
  }
}

function animateGameOver(){
  var wrongSound = new Audio('sounds/wrong.mp3');
  console.log('game over');
  wrongSound.play();
  $('body').addClass("game-over");
  setTimeout(function(){$('body').removeClass("game-over")});
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
