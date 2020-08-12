class Wall{
constructor(x,y,width,height,rotater){
this.wall=createSprite(x,y,width,height);
this.wall.shapeColor=("rgb(46,255,0)");
this.rotater=rotater;

}
rotateeffect(){
    this.wall.rotationSpeed=this.rotater;
}
 touch(){
    if(this.wall.isTouching(lifeboat)){
        gamestate="end";
    }}
    visibility(){
        this.wall.visible=false;
    }
wallidentify(){
    this.wall.shapeColor=("rgb(255,0,242)")
}
}