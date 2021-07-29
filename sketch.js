var pig, pigimg
var cactus, cactusimg
var cactusgroup
var bg, bgimg
var invisibleground
var gameState = "play"
function preload(){
pigimg = loadImage("pig.jpg")
cactusimg = loadImage("cactus.jpg")
bgimg = loadImage("grass background.jpg")
}

function setup() {
createCanvas(400,400)
bg = createSprite(200,200)
bg.addImage(bgimg)
bg.scale = 3
bg.velocityX = 1
pig = createSprite(50,350,100,100)
pig.addImage(pigimg)
pig.scale = 0.5
invisibleground = createSprite(200,400,400,50)
cactusgroup = new Group()
}

function draw() {
  background("black")
    if(gameState === "play"){
        if(keyDown("space")){
          pig.velocityY = -15
        }
        if(pig.isTouching(cactusgroup)){
          gameState = "end"
          pig.destroy
        }
    pig.velocityY = pig.velocityY+0.5
    pig.collide(invisibleground)
    invisibleground.visible = false
    if(bg.x > 350){
      bg.x = 200
    }
    spawncacti()
 drawSprites()
}
if(gameState==="end"){
  pig.destroy
  cactusgroup.destroyEach()
  bg.destroy
  textSize(40)
  text("GAME OVER",100,200)
}
}
function spawncacti(){
  if(frameCount%240===0){
  cactus = createSprite(400,350)
  cactus.addImage(cactusimg)
  cactus.scale = 0.2
  cactus.velocityX = -5
  cactus.lifetime = 800
  cactusgroup.add(cactus)

}
}