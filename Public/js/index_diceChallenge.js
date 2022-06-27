randomNum1 = Math.random();
randomNum1 = Math.floor(randomNum1*6)+1;
var source1 = "images_diceChallenge/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src",source1);

randomNum2 = Math.random();
randomNum2 = Math.floor(randomNum2*6)+1;
var source2 = "images_diceChallenge/dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src",source2);

if(randomNum1>randomNum2)
{
  document.querySelector("h1").innerHTML="🔺 Player 1 Wins";
}

else if(randomNum1<randomNum2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins 🔻";
}

else{
  document.querySelector("h1").innerHTML="🔺 Draw!! 🔻";
}
