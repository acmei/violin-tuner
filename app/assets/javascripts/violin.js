$(document).ready(function() {
  console.log('ready!');
  $('.btn-info').mousedown(function(event){
    event.preventDefault();
    metronome();
  });

  $('.btn-danger').mousedown(function(event){
    event.preventDefault();
    stopMetronome();
  });

  $('.metronome').draggable();

});

var nIntervId;

function play() {
  var audio_tag = document.getElementById('tickAudio');
  audio_tag.currentTime = 0;
  audio_tag.play();
}

function metronome() {
  nIntervId = setInterval(play, 500);
}

function stopMetronome() {
  clearInterval(nIntervId);
}
