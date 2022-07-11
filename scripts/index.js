const myController = document.querySelector(".controller");
const playButton = document.querySelector(".play-btn");
const pauseButton = document.querySelector(".pause-btn");
const mainMusic = document.querySelector(".main-music");
const mainBottom = document.querySelector(".main__bottom");
const mainVisualizer = document.querySelector(".main__visualizer")
const mainBox = document.querySelector(".main__box");
const mainVolume = document.querySelector(".controller-volume");

window.addEventListener("load", function () {
    myController.value = 0;
    mainVolume.value = 80;
});

playButton.addEventListener("click", function() {
    mainMusic.play();
    pauseButton.style.display = "block";
    playButton.style.display = "none";
    mainBottom.classList.add("active");
    mainVisualizer.classList.add("active");
    mainBox.classList.add("active")
})

pauseButton.addEventListener("click", function () {
  mainMusic.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "block";
  mainBottom.classList.remove("active");
  mainVisualizer.classList.remove("active");
  mainBox.classList.remove("active");
});

mainMusic.addEventListener("play", function () {
    setInterval(function () {
        myController.value = mainMusic.currentTime * (100 / mainMusic.duration);
    }, 1000)
})

myController.addEventListener("change", function () {
    mainMusic.currentTime = (myController.value * mainMusic.duration) / 100;
});

mainVolume.addEventListener("change", function() {
    mainMusic.volume = mainVolume.value / 100;
})
