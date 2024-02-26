class Sprite {
    constructor({position, velocity, image, frames = {max:1}, sprites =[]} ){
    this.position = position
    this.image = image
    this.frames = {...frames, val: 0, elapsed: 0 }
    this.sprites = sprites

    this.image.onload = () => {
        this.width = this.image.width/this.frames.max
        this.height = this.image.height
        
    }
    this.moving = false
}
draw(){
    con.drawImage(
        this.image,
        //cropping the png for the player sprite
        this.frames.val * this.width,
        0,
        this.image.width/this.frames.max,
        this.image.height,
        

        //cropping information ↑↑↑
        //actual position and presentation ↓↓

        this.position.x,
        this.position.y,

         
         //actual width and height player will render at ↓↓↓
         this.image.width/this.frames.max -1,
         this.image.height,
         

         )
        if (!this.moving) return

        if (this.frames.max > 1){
            this.frames.elapsed++
            }
        if (this.frames.elapsed % 10===0){
            if (this.frames.val < this.frames.max -1)
            this.frames.val++
            else this.frames.val = 0
         }
         

         
}
}



class Boundary {
    static width = 48
    static height = 48
    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        con.fillStyle = "rgba(255,0,0,0.5)"
        con.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}