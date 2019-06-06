
let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");
const x = document.body

x.addEventListener('keypress', function(event) {
    if (event.code == "KeyQ") {
      tom.play();
    } if (event.code == "KeyW") {
        tink.play();
    } if (event.code == "KeyE") {
        snare.play();
    } if (event.code == "KeyR") {
          ride.play();
    } if (event.code == "KeyT") {
        openhat.play();
    } if (event.code == "KeyY") {
          kick.play();
    } if (event.code == "KeyI") {
        hihat.play();
    } if (event.code == "KeyO") {
          clap.play();
    } if (event.code == "KeyP") {
        boom.play();
      }

  })
