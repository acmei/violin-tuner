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

  $('.selector').draggable( {
    containment: '.scale',
    snap: '.scale'
  });
});

var nIntervId;

// play audio selected
function play() {
  var audio_tag = document.getElementById('tickAudio');
  audio_tag.currentTime = 0;
  audio_tag.play();
}

// returns rate of beats
function beats(bpm) {
  return (60 / bpm) * 1000
}

// plays metronome beats at set interval
function metronome() {
  nIntervId = setInterval(play, beats(90));
}

// stops metronome
function stopMetronome() {
  clearInterval(nIntervId);
}
