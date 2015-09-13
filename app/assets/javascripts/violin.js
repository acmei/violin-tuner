$(document).ready(function() {
  console.log('ready!');
  $('.btn-info').mousedown(function(event) {
    event.preventDefault();
    metronome(this.text);
  });

  $('.btn-default').mousedown(function(event) {
    event.preventDefault();
    play(this.text);
  });

  $('.btn-danger').mousedown(function(event) {
    event.preventDefault();
    stopMetronome();
  });

  $('.selector').draggable( {
    containment: '.scale',
    snap: '.scale'
  });
});


Audio.prototype.stop = function() {
  this.pause();
  this.currentTime = 0.0;
}

var tock;
var heartBeat;
var tuner;

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
  play = audio_tag.play();
}

function endPlay(note) {
  audio_tag.pause();
  audio_tag.currentTime = 0;
}

// returns rate of beats
function beats(bpm) {
  return (60 / bpm) * 1000
}

// plays metronome beats at set interval
function metronome(bpm) {
  tock = setInterval(tick, beats(bpm));
  tuner = setInterval(play, 100)
  heartBeat = setInterval(pop, beats(bpm));
}

// stops metronome
function stopMetronome() {
  clearInterval(tock);
  clearInterval(heartBeat);
  clearInterval(tuner);
}

function pop() {
  $('.fa')
  .addClass('popper')
  .on('animationend',
    function() { $(this).removeClass('popper'); }
  );
}
