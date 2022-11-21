// page load
var video = document.getElementById("videoplayer");
video.removeAttribute("autoplay");
video.removeAttribute("loop");

// play button
var playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
    video.play();
    playButton.innerHTML = "Play Video";
});

// pause button
var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
    video.pause();
    pauseButton.innerHTML = "Pause Video";
});

// slow down
const speedlst = [0.5,1,2];
let spd = 1;
var slowButton = document.getElementById("slower");
slowButton.addEventListener("click", function() {
  if(spd > 0){
    spd--;
    video.playbackRate = speedlst[spd];
  }else{
    alert("Video is at slowest speed!");
  }
});

// speed up
var fastButton = document.getElementById("faster");
fastButton.addEventListener("click", function() {
  if(spd < speedlst.length - 1){
    spd++;
    video.playbackRate = speedlst[spd];
  }else{
    alert("Video is at fastest speed!");
  }
});

// skip ahead
var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function() {
  video.currentTime += 15;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
    video.pause();
  }
});

// mute
var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    document.getElementById("mute").innerHTML = "Mute";
    video.value = 1;
    slider.value = 100;
    document.getElementById("volume").innerHTML = "100%";

  } else {
    video.muted = true;
    document.getElementById("mute").innerHTML = "Unmute";
    video.value = 0;
    slider.value = 0;
    document.getElementById("volume").innerHTML = "0%";
  }
});

// volume slider
var volSlider = document.getElementById("slider");
volSlider.addEventListener("click", function() {
  video.volume = this.value / 100;
  console.log(video.volume);
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});