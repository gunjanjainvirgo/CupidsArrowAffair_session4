var gameState="wait"
var splash;
var playbutton
var aboutbutton
var bg1;

function preload(){
splash=loadImage("assets/splash3.gif")
bg1=loadImage("assets/bg2.jpg")
}

function setup(){
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/playButton.png")
    playbutton.position(840, 523)
    playbutton.size(200, 90)
    playbutton.hide()

    aboutbutton = createImg("assets/aboutButton.png")
    aboutbutton.position(580, 520)
    aboutbutton.size(200, 95)
    aboutbutton.hide()
}

function draw(){
    if (gameState === "wait") {


        background(splash)
        playbutton.show()
        aboutbutton.show()
        //background_music.play();
    }

    aboutbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "about";
    })

    if (gameState == "about") {
        aboutgame();
    }

    playbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "play";
    })

    if (gameState == "play") {
        //background_music.stop();
        background(bg1)
        //player.visible = true
    }
}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Shoot the hearts and escape from the black hearts!\nUse Arrow Keys to move up and down and Space Bar to release the Arrows",
        textAlign: "center",
        imageUrl: "assets/logo.gif",
        imageSize: "200x200",
        confirmButtonText: "Let's fly!",
        confirmButtonColor: "purple",
    },

        function () {
            gameState = "wait"
        }
    )

}