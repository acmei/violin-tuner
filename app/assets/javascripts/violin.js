$(document).ready(function() {
  console.log('ready!');
  $('.btn-info').mousedown(function(event){
    event.preventDefault();
    metronome(this.text);
  });

  $('.btn-default').mousedown(function(event){
    event.preventDefault();
    play(this.text);
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
// var heartBeat;

// play audio selected
function tick() {
  var audio_tag = document.getElementById('tickAudio');
  audio_tag.currentTime = 0;
  audio_tag.play();
}

// play notes for tuning
function play(note) {
  var audio_tag = document.getElementById(note + 'Audio');
  audio_tag.currentTime = 0;
  audio_tag.play();
}

// returns rate of beats
function beats(bpm) {
  return (60 / bpm) * 1000
}

// plays metronome beats at set interval
function metronome(bpm) {
  nIntervId = setInterval(tick, beats(bpm));
  // heartBeat = setInterval(pop('.fa'), beats(90));
}

// stops metronome
function stopMetronome() {
  clearInterval(nIntervId);
  // clearInterval(heartBeat);
}

function pop(font) {
  $(font)
  .addClass('popper')
  .on('animationend',
    function() { $(this).removeClass('popper'); }
  );
}
