var randomNumber1=  (Math.floor(Math.random() * 6)) + 1; //0 to 5 + 1 = 1 to 6;
var newImageSrc = "images/dice" + randomNumber1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", newImageSrc);


var randomNumber2 = (Math.floor(Math.random() * 6)) + 1; //0 to 5 + 1 = 1 to 6;
var newImageSrc = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", newImageSrc);



if (randomNumber1 > randomNumber2 ){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins!🎉";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="✨Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML= "⚔ DRAW ⚔";
}
