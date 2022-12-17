kaboom({
    width:900,
    height:600,
    Font:"sinko",
    canvas: document.querySelector('#mycanvas')
})

loadSprite("flappy","sprites/flappy.png")
loadSprite("background","sprites/background.png")
loadSprite("pipe","sprites/pipe.png")

loadSound("wooosh","sounds/wooosh.mp3")
loadSound("score","sounds/score.mp3")
loadSound("hit","sounds/hit.mp3")

scene("game",() =>{
    add([
        sprite("background",{
            width:width(),
            height:height()
        })
    ])
    score=0
    scoreText= add([
        pos(10,10),
        text(score,{size:70})
    ])
    flappy=add([
        sprite("flappy"),
        scale(2),
        pos(80,40),
        area(),
        body()
    ])

    function producePipes(){
        PIPE_GAP=150
        offset=rand(-50, 50)
        add([
            sprite("pipe"),
            pos(width(), height()/2+offset+PIPE_GAP/2),
            "pipe",
            area(),
            {passed:false}
        ])
        add([
            sprite("pipe",{flipY:true}),
            pos(width(), height()/2+offset-PIPE_GAP/2),
            origin("botleft"),
            "pipe",
            area()
        ])

    }
    loop(1.5, ()=>{
        producePipes()
    })
})
scene("GameOver",() =>{

})
go("game")