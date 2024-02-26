const canvas = document.querySelector("canvas");
const con = canvas.getContext("2d")



canvas.width = 1024
canvas.height=576


const collisionsMap = []
for (let i=0; i<collisions.length; i+= 70){
    collisionsMap.push(collisions.slice(i, 70 + i))
}


const battleZoneMap = []
for (let i=0; i<battlezonesdata.length; i+= 70){
    battleZoneMap.push(battlezonesdata.slice(i, 70 + i))
}





const boundaries = []

const offset = {
    x: -570,
    y: -420
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if (symbol === 63)
             boundaries.push(
                 new Boundary({
                      position: {
                         x: j * Boundary.width + offset.x,
                         y: i * Boundary.height + offset.y
                 }
            })
        )
    })
})


const battlezones = []

battleZoneMap.forEach((row, i) => {
    row.forEach((symbol, j)=>{
        if (symbol === 723)
             battlezones.push(
                 new Boundary({
                      position: {
                         x: j * Boundary.width + offset.x,
                         y: i * Boundary.height + offset.y
                 }
            })
        )
    })
})

//background image on screen (gameMap)
const image = new Image()
image.src="./images/TAmap.png"

//foreground image
const foregroundIMG = new Image()
foregroundIMG.src="./images/foregroundTA.png"



//player sprite sheet

const playerUPimg = new Image()
playerUPimg.src = "./images/playerUp.png"

const playerDOWNimg = new Image()
playerDOWNimg.src = "./images/playerDown.png"

const playerLEFTimg = new Image()
playerLEFTimg.src = "./images/playerLeft.png"

const playerRIGHTimg = new Image()
playerRIGHTimg.src = "./images/playerRight.png"





const player = new Sprite({
    position:{
        x: canvas.width / 2 - 192 / 4 /2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDOWNimg,
    frames: {
        max: 4
    },
    sprites: {
        up: playerUPimg,
        down: playerDOWNimg,
        left: playerLEFTimg,
        right: playerRIGHTimg
    }
})




const backgroundSprite =  new Sprite({position:
    {
        x: offset.x,
        y: offset.y
},
image: image
})
    
const foreground =  new Sprite({position:
    {
        x: offset.x,
        y: offset.y
},
image: foregroundIMG
})

const keys={
    w:{
        pressed: false
    },

    a:{
        pressed: false
    },

    s:{
        pressed: false
    },

    d:{
        pressed: false
    }
}




const movables = [backgroundSprite, ...boundaries, foreground, ...battlezones]
//add illusion of animation loop with ∞ loop
function rectangularCollision({rectangle1, rectangle2}){
return(
    rectangle1.position.x + rectangle1.width>= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y+rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}

const battle = {
    initiated: false
}


function animate(){
    const animationID = window.requestAnimationFrame(animate)
    console.log(animationID)
    backgroundSprite.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()
    })    
    battlezones.forEach((batzones)=>{
        batzones.draw()
    })
    player.draw()
    foreground.draw()


    let moving = true
    player.moving = false

    //activate battle when in battlezone
    if (battle.initiated) return


    //battlezone detection
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i < battlezones.length; i++){
            const battlezone = battlezones[i]
            const overlappingArea =
             (Math.min(
                player.position.x + player.width,
                 battlezone.position.x + battlezone.width
                 ) - 
                 Math.max(player.position.x, battlezone.position.x)) * 
                (Math.min(
                    player.position.y + player.height,
                     battlezone.position.y + battlezone.height
                     ) - 
                     Math.max(player.position.y, battlezone.position.y))
            if (
                rectangularCollision({
                    rectangle1: player, 
                    rectangle2: battlezone
                }) &&
                overlappingArea > (player.width * player.height) / 2 &&
                Math.random() < .01
                ){
                    console.log("battle start")
                    //deactivate current animation loop
                    window.cancelAnimationFrame(animationID);

                    //adding battlestart animation
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 4,
                        yoyo: true,
                        duration: .5,
                        onComplete(){
                            gsap.to('#overlappingDiv',{
                                opacity:1,
                                duration: .4,
                            })

                            //new animation loop
                            animateBattle()

                            


                        }
                    })
                    
                    break
        }}

    }
    



    
         //connect movment to keypresses
        if (keys.w.pressed && lastKey==="w") {
            player.moving = true
            player.image = player.sprites.up
            //collisions detection
            for(let i =0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player, 
                        rectangle2: {
                            ...boundary, 
                            position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }}
                    })
                    ){
                        console.log("ouch")
                        moving = false
                        break
            }}

            

            if (moving )
                movables.forEach((movable)=>{movable.position.y += 3})

            
        }
         
        
    

        else if (keys.s.pressed && lastKey==="s") {
            player.moving = true
            player.image = player.sprites.down
            for(let i =0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player, 
                        rectangle2: {
                            ...boundary, 
                            position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }}
                    })
                    ){
                        console.log("ouch")
                        moving = false
                        break
            }}
            if (moving )
            movables.forEach((movable)=>{movable.position.y -= 3})
            }

        else if (keys.a.pressed && lastKey==="a") {
            player.moving = true
            player.image = player.sprites.left
            for(let i =0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y 
                    }}
                })
                ){
                    console.log("ouch")
                    moving = false
                    break
        }}
        if (moving )
            movables.forEach((movable)=>{movable.position.x += 3})
            }

        else if (keys.d.pressed && lastKey ==="d") {
            player.moving = true
            player.image = player.sprites.right
            for(let i =0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y  
                    }}
                })
                ){
                    console.log("ouch")
                    moving = false
                    break
        }}
        if (moving )
            movables.forEach((movable)=>{movable.position.x -= 3})
            }
            
    }




animate();


const battleBackgroundImage = new Image()
battleBackgroundImage.src = "./images/battle.png"
const battleBackground = new Sprite({
    position:{
        x:0,
        y:0,
    }
})


function animateBattle(){
    window.requestAnimationFrame(animateBattle)
    console.log("ready? FIGHT!")
}


let lastKey= "null"
//allow program to recognize when W A S D keys are pressed || evan = event i don't want to write just e or event not memorable enough for me.

window.addEventListener("keydown", (evan)=>{
    
    switch (evan.key){
        case "w":
            keys.w.pressed = true
            lastKey = "w"
            break
        case "a":
            keys.a.pressed = true
            lastKey = "a"
            break
        case "s":
            keys.s.pressed = true
            lastKey = "s"
            break
        case "d":
            keys.d.pressed = true
            lastKey = "d"
            break
    }
})
//when keys W A S D  are released
window.addEventListener("keyup", (evan)=>{
    
    switch (evan.key){
        case "w":
            keys.w.pressed = false
            break
        case "a":
            keys.a.pressed = false
            break
        case "s":
            keys.s.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
    }
})





