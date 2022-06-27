//Audio using Mouse (Detecting Button Press)
for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}

function clicked()
{
   audio(this.innerHTML);
   animation(this.innerHTML);
}

//Audio Using Keyboard (Detecting Keyboard Press)
document.addEventListener("keydown", keyboard);

function keyboard(event)
{
    audio(event.key);
    animation(event.key);
}



function audio(check){
    switch(check){
      case "w":
      var audio = new Audio('Sounds/tom-1.mp3');
      audio.play();
      break;

      case "a":
      var audio = new Audio('Sounds/tom-2.mp3');
      audio.play();
      break;

      case "s":
      var audio = new Audio('Sounds/tom-3.mp3');
      audio.play();
      break;

      case "d":
      var audio = new Audio('Sounds/tom-4.mp3');
      audio.play();
      break;

      case "j":
      var audio = new Audio('Sounds/crash.mp3');
      audio.play();
      break;

      case "k":
      var audio = new Audio('Sounds/snare.mp3');
      audio.play();
      break;

      case "l":
      var audio = new Audio('Sounds/kick-bass.mp3');
      audio.play();
      break;
    }
}


function animation(onPressing){
      document.querySelector("." + onPressing).classList.add("pressed");
      setTimeout(function(){document.querySelector("." + onPressing).classList.remove("pressed")}, 100);
}
