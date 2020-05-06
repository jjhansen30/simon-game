
var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var wrongSound = new Audio('sounds/wrong.mp3');

$("body").on("keydown",startGame);

$(".btn").click(function(event){
  var userChosenColor = event.target.id;
  //checks if user clicks button before the game starts
  if(!started){
    alert("Please press a key to start the game");
  }else{
    userClickPattern.push(userChosenColor);
    compareArrays(userChosenColor);
  }
});

$("#how-to").on("mouseover",function(){
  $("#how-to").addClass("mouse-hover");
});
$("#how-to").on("mouseleave",function(){
  $("#how-to").removeClass("mouse-hover");
});

function startGame(){
  if(!started){
    displayCurrentLevel();
    nextSequence();
    started = true;
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

function compareArrays(color){
  var indexedItem = userClickPattern.length - 1;
  if(userClickPattern[indexedItem] === gamePattern[indexedItem]){
    displayCurrentLevel();
    playSound(color);
    animatePress(color);
    if(userClickPattern.length === gamePattern.length){
      userClickPattern = [];
      setTimeout(function(){nextSequence()},1000);
    }
  }else{
    animateGameOver();
    startOver();
  }
}

function startOver(){
  level = 0;
  started = false;
  gamePattern = [];
  userClickPattern = [];
  }

function animateGameOver(){
  wrongSound.play();
  $("h1").html("Game Over, Press Any Key To Restart");
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over")},200);
}

function displayCurrentLevel(){
  $("h1").html("LEVEL " + level);
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
