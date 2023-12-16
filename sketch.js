var splashscreen
var gameState="wait"
var playButton,aboutButton



function  preload() {
splashscreen= loadImage("assets/splash.gif")    
}

function setup(){
createCanvas(windowWidth,windowHeight)

playButton = createImg("assets/Play.png")
playButton.position(width/2.25,height-height/2.1)
playButton.size(300,125)

aboutButton = createImg("assets/About.png")
aboutButton.position(width/2.25,height-height/2.8)
aboutButton.size(300,125)

}

function draw(){
if(gameState=="wait"){
    background(splashscreen)
    playButton.show()
    aboutButton.show()
}

playButton.mousePressed(()=>{
    background("red")
    gameState="play"
    playButton.hide()
    aboutButton.hide()
})
aboutButton.mousePressed(()=>{
    background("blue")
  about()
    playButton.hide()
    aboutButton.hide()
})
}




function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Go to a landmark by clicking on it. Each landmark has a different quest.",
        imageUrl: "assets/splash.gif",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "wait"
        }
    )


}