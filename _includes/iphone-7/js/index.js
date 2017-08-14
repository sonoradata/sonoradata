var clickAudioPress = document.getElementById('clickSoundPress');
var clickAudioRelease = document.getElementById('clickSoundRelease');

var homeButton = document.getElementsByClassName('home-button')[0];

homeButton.onmousedown = function() {
  clickAudioPress.play();
}
homeButton.onmouseup = function() {
  clickAudioRelease.play();
}