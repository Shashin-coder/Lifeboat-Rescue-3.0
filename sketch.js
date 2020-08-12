

var lifeboat,wall1;
var engine, world;
var rotatespeed;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14
var brickimg,lifeboatimg,backgroundimg;
var timer=30;
var gamestate="play";

//var bgmusic;

function preload(){
    lifeboatimg=loadImage("pngfuel.com.png")
    seaweed=loadImage("seaweed1.png")
    fish=loadImage("seaweed2.png")
    whirlpoolimg=loadImage("whirlpool.png")
    bgimg=loadImage("images.jpg")
    sharkimg=loadImage("shark1.png")
    octopusimg=loadImage("octopus.png")
    man=loadImage("boy.png")

}
function setup(){
    canvas = createCanvas(1200,550);

     lifeboat=createSprite(900,450,30,50);
    
  lifeboat.addImage(lifeboatimg)
lifeboat.rotation=360

  lifeboat.scale=0.1
 seaweed1=createSprite(500,262,50,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+50,262,50,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+100,262,50,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+150,262,70,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+200,262,60,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+250,262,50,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+300,262,70,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 seaweed1=createSprite(500+330,262,70,50);
 seaweed1.addImage(seaweed)
 seaweed1.scale=0.03
 

 seaweed2=createSprite(619,520,50,50);
 seaweed2.addImage(fish)
 seaweed2.scale=0.03
 seaweed2=createSprite(619+60,520,50,50);
 seaweed2.addImage(fish)
 seaweed2.scale=0.03
 seaweed2=createSprite(619+120,520,50,50);
 seaweed2.addImage(fish)
 seaweed2.scale=0.03
 seaweed2=createSprite(619+180,520,50,50);
 seaweed2.addImage(fish)
 seaweed2.scale=0.03
 seaweed2=createSprite(619+200,520,50,50);
 seaweed2.addImage(fish)
 seaweed2.scale=0.03





 seaweed3=createSprite(1150,400,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02




 seaweed3=createSprite(1150,400+30,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02



 seaweed3=createSprite(1150,400+60,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02

man1=createSprite(40,370,20)
man1.addImage(man)
man1.scale=0.13

 seaweed3=createSprite(1150,400+90,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed3=createSprite(1150,400-100,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed3=createSprite(1150,400-130,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed3=createSprite(1150,400-70,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed3=createSprite(1150,400-40,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed3=createSprite(1150,400+130,30,100);
 seaweed3.addImage(fish)
 seaweed3.scale=0.02
 seaweed4=createSprite(990,436,30,30)
 seaweed4.addImage(seaweed);
 seaweed4.scale=0.03
 seaweed4=createSprite(990,436-50,30,30)
 seaweed4.addImage(seaweed);
 seaweed4.scale=0.03
 seaweed4=createSprite(990,436+50,30,30)
 seaweed4.addImage(seaweed);
 seaweed4.scale=0.03
 octopus=createSprite(183,600,100,80)
 octopus.addImage(octopusimg)
 octopus.scale=0.07

 shark1=createSprite(671,262,300,50)
 shark1.addImage(sharkimg)
 shark1.scale=0.3
 shark2=createSprite(600,40,292,80)
 shark2.addImage(sharkimg)
 shark2.scale=0.3
 whirlpool1=createSprite(800,400,40,120);
 whirlpool1.addImage(whirlpoolimg)
 whirlpool1.scale=0.16
 whirlpool2=createSprite(1100,64,40,120);
 whirlpool2.addImage(whirlpoolimg)
 whirlpool2.scale=0.16
   wall1 =new Wall(671,262,300,50,1.2)
  
   wall2=new Wall(990,436,30,150)
   //wall3 =createSprite(671,262,375,40)
  


   wall4=new Wall(600,30,292,80)

   
  
  

  edges=createEdgeSprites()
   wall7=new Wall(720,550,250,100)


  
   //wall9=new Wall(200,400,90,70)
   wall11=new Wall(1150,400,30,300)
   wall12=new Wall(800,400,40,120,150)
   wall13=new Wall(1100,64,40,120,150)
  
}
function draw(){
    background(bgimg)
   lifeboat.bounceOff(edges)
  // wall3.visible=false;

   lifeboat.setCollider("rectangle",0,0,lifeboat.width,lifeboat.height)
   wall1.rotateeffect();
    if(keyDown(UP_ARROW) && gamestate==="play"){
        lifeboat.y=lifeboat.y-7
    }
    if(keyDown(DOWN_ARROW )&& gamestate==="play"){
        lifeboat.y=lifeboat.y+7
    }
    if(keyDown(LEFT_ARROW) && gamestate==="play"){
        lifeboat.x=lifeboat.x-7
    }
    if (frameCount % 60 == 0 && timer > 0 && gamestate==="play") { 
        timer --;
      }
 
    whirlpool1.rotationSpeed=150;
   wall1.visibility();
   wall4.visibility();
    wall1.touch();
    wall2.touch();
   if(man1.isTouching(lifeboat)){
       gamestate="win";
   }
    if (timer===0){
        gamestate= "end";
    }
    //wall3.touch();
    wall4.touch();
    shark1.rotationSpeed=1.2
    octopus.velocityY=-7.3563276
    if(octopus.isTouching(lifeboat)){
        gamestate="end"
    }
    if(octopus.y<0 && gamestate==="play" ){
        octopus.y=600
    }
    wall7.touch();
  
    
    wall13.touch();
    wall13.rotateeffect();
    wall11.touch();
    wall12.touch();
    console.log(gamestate)
   wall2.visibility();


    if(keyDown(RIGHT_ARROW )&& gamestate==="play"){
        lifeboat.x=lifeboat.x+7
    }
    wall12.rotateeffect();
    whirlpool2.rotationSpeed=150
    
    wall12.visibility();
    wall13.visibility();
  wall11.visibility();
    wall7.visibility();

    drawSprites();
    
    fill("#00ff00")
    textSize(50)
    text("TIME LEFT:"+timer,100,50)
    if(gamestate==="win"){
       
        fill("#ffff00")
        textSize(100)
        text ("You Won",400,300)}

        if(gamestate==="end"){
       
            fill("#ffff00")
            textSize(100)
            text ("You Lost",400,300)
        }    
    }