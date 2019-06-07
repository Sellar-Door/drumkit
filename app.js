
let C1 = new Audio("sounds/pianoC1.wav");
let clap = new Audio("sounds/pianoC2.wav");
let hihat = new Audio("sounds/pianoC3.wav");
let kick = new Audio("sounds/pianoC7.wav");
let openhat = new Audio("sounds/pianoFsharp0.wav");
let ride = new Audio("sounds/pianoFsharp1.wav");
let snare = new Audio("sounds/pianoFsharp2.wav");
let tink = new Audio("sounds/pianoFsharp3.wav");
let tom = new Audio("sounds/pianoFsharp4.wav");
let item = new Audio("sounds/pianoFsharp6.wav");

const x = document.body

x.addEventListener('keydown', function(event) {
      if (event.code == "KeyQ") {
      tom.load(),tom.play();
    } if (event.code == "KeyW") {
      tink.load(),tink.play();
    } if (event.code == "KeyE") {
        snare.load(),snare.play();
    } if (event.code == "KeyR") {
        ride.load(), ride.play();
    } if (event.code == "KeyT") {
        openhat.load(),openhat.play();
    } if (event.code == "KeyY") {
        kick.load(),kick.play();
    } if (event.code == "KeyU") {
        item.load(),item.play();
    } if (event.code == "KeyI") {
        hihat.load(),hihat.play();
    } if (event.code == "KeyO") {
        clap.load(),clap.play();
    } if (event.code == "KeyP") {
        item.load(),item.play();
      }

  })

 
  