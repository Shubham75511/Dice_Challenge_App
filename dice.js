var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
 
var a = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".dice .img1").setAttribute("src", a[randomNumber1]);
document.querySelector(".dice .img2").setAttribute("src", a[randomNumber2]);

function headline(){
    if(randomNumber1 > randomNumber2){
        return "Player1 Win";
    } else if(randomNumber1 < randomNumber2){
        return "Player2 Win";
    } else{
        return "Draw!";
    }
}

document.querySelector("h1").innerHTML = headline();








//Alternate Soln  (By Concatenation Method)
// var images1 = "images/dice"+ randomNumber1 +".png";
// var images2 = "images/dice"+ randomNumber2 +".png";











