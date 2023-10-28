var splashscreen
var gameState="wait"


function  preload() {
splashscreen= loadImage("assets/splash.gif")    
}

function setup(){
createCanvas(windowWidth,windowHeight)

}

function draw(){
if(gameState=="wait"){
    background(splashscreen)
}


}