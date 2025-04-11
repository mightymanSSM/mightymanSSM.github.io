// Get the video player and source elements
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const textBox = document.getElementById('textBox');

// Array of video file names
const videos = ['videos/truisms.mp4', 'videos/truisms2.mp4', 'videos/truisms3.mp4'];

// Object to store playback positions for each video
const playbackTimes = {
  'videos/truisms.mp4': 0,
  'videos/truisms2.mp4': 0,
  'videos/truisms3.mp4': 0
};

// Current video being played
let currentVideo = 'videos/truisms.mp4';

// Flag to track whether this is the first click
let firstClick = true;

// Function to pick a different random video
function getRandomVideo() {
  const otherVideos = videos.filter(video => video !== currentVideo);
  const randomIndex = Math.floor(Math.random() * otherVideos.length);
  return otherVideos[randomIndex];
}

// Event listener for switching video on text box click
textBox.addEventListener('click', () => {
  // Unmute on first click
  if (firstClick) {
    videoPlayer.muted = false;
    firstClick = false;
  }

  // Save current playback time
  playbackTimes[currentVideo] = videoPlayer.currentTime;

  // Pick a different video
  const newVideo = getRandomVideo();

  // Update current video
  currentVideo = newVideo;

  // Change the video source
  videoSource.src = currentVideo;

  // Load the new video and set its previous playback time
  videoPlayer.load();
  videoPlayer.currentTime = playbackTimes[currentVideo] || 0;
  videoPlayer.play();
});
