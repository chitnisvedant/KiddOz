var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false
var i=1;



//Starting the game with key press.
$(document).keydown(function(){
    if(started == false){
    nextSequence();
  }
})



//Random Sequence Produced By Computer
function nextSequence() {

  userClickedPattern = [];
  var randomNumber = Math.random();
  randomNumber = Math.round(randomNumber * 3);

  var randomChosenColor = buttonColours[randomNumber];

  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);
  animate(randomChosenColor);

  started = true;

  $("h1").text("Level "+ i);
  i++;
}



//User Sequence
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  playSound(userChosenColor);
  animate(userChosenColor);

  userClickedPattern.push(userChosenColor);
  checkAns(userClickedPattern.length - 1);
  //This is very tough logic. Here we are one by one checking the user array with computer array. Think!!
})



//Checking whether User's each and every sequence matches with that of computer or not.
//This function will run everytime after the user selects the key.
//Very Important logic.
function checkAns(index){
  //Each and every index of both array is compared.
  if(userClickedPattern[index] === gamePattern[index])
  {
    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(nextSequence,1000);
      //The user sequence is set to [] nullarray again, as a new sequence begin.
    }
  }

  else
  {
    playSound('wrong');
    $("body").addClass("game-over");
    $("h1").text("Game Over\n, Press Any Key To Restart!!");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    started = false;
    i = 1;
    gamePattern = [];
    userClickedPattern = [];
  }
}



//Adding Sound
function playSound(name){
  var sound = new Audio('Sounds/' + name + '.mp3');
  sound.play();
}



//Adding Animation
function animate(name){
  $("#" + name).fadeOut(100).fadeIn(100);
}
