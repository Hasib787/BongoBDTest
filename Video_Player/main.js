var video = document.querySelector(".video");
var orangeBar = document.querySelector(".orange-bar-control");
var btn = document.getElementById("play-pause");
const rwd = document.querySelector('.fa-backward');
const fwd = document.querySelector('.fa-forward');

function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }
} 

btn.onclick = function () {
    togglePlayPause();
};

video.addEventListener('timeupdate', function () {
    var orangeBarPos = video.currentTime / video.duration;
    orangeBar.style.width = orangeBarPos * 100 + "%";
    if (video.ended) {
        btn.className = "play";
    }
})

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    video.play();
  } else {
    rwd.classList.add('active');
    video.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    video.play();
  } else {
    fwd.classList.add('active');
    video.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
    if(video.currentTime <= 3) {
      rwd.classList.remove('active');
      clearInterval(intervalRwd);
    } else {
      video.currentTime -= 3;
    }
  }
  
  function windForward() {
    if(video.currentTime >= video.duration - 3) {
      fwd.classList.remove('active');
      clearInterval(intervalFwd);
    } else {
      video.currentTime += 3;
    }
}
