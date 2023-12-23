var splashscreen,backgroundImg
var gameState="wait"
var playButton,aboutButton
var player,playerImage
var volcanoimage,volcano;
var lavaobstacle1,lavaobstacle3,lavaobstacle2,lavaobstacleImage1,lavaobstacleImage2,lavaobstacleImage3
var seaObstacle1,seaObstacle2,seaObstacle2,seaObstacleImage1,seaObstacleImage2,seaObstacleImage3
var treasureObstacle1,treasureObstacle2,treasureObstacle3,treasureObstacleImage1,treasureObstacleImage2,treasureObstacleImage3
var coin,coinImage,seacollect,seacollectImage,lavaCollect,lavaCollectImage

function  preload() {
splashscreen= loadImage("assets/splash.gif")    
backgroundImg = loadImage("assets/background.png")
stoneMonster = loadImage("assets/Stone-Monster.png")
axeMonster = loadImage("assets/Axe-Monster.png")
oldRockBoss = loadImage("assets/Old-Rock-Boss.png")
volcanoImage=loadImage("assets/volcano.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

// playButton = createImg("assets/Play.png")
// playButton.position(width/2.25,height-height/2.1)
// playButton.size(300,125)

aboutButton = createImg("assets/About.png")
aboutButton.position(width/2.25,height-height/2.8)
aboutButton.size(300,125)

volcano = createImg("assets/volcano.png")
volcano.position(width-width/6,height/2)
volcano.size(400,400)

}

function draw(){
if(gameState=="wait"){
    background(splashscreen)
    //playButton.show()
    aboutButton.show()
}

// playButton.mousePressed(()=>{
//     background(backgroundImg)
//     gameState="play"
//     playButton.hide()
//     aboutButton.hide()
// })
aboutButton.mousePressed(()=>{
    about()
    // playButton.hide()
    aboutButton.hide()
})

volcano.mousePressed(()=>{
  
    //playButton.hide()
    aboutButton.hide()
    volcano.hide()
    gameState="volcano_state"
    console.log("volcano clicked")
})


drawSprites()

if(gameState=="volcano_state"){

    background("yellow")

}

}




function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Go to a landmark by clicking on it. \n Each landmark has a different quest.",
        textAlign:"center",
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