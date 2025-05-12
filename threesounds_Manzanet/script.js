const audioPlayer = document.getElementById('audioPlayer');

function playAudio(src) {
  if (audioPlayer.src.includes(src)) {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  } else {
    audioPlayer.src = src;
    audioPlayer.play();
  }
}
