
var se = new Audio();
se.src = "sounds/ButtonClick.wav";
adr="sounds/BG/";
playlist = ["bakura","banditkeith","critiasJ","exodia","joey","kaiba","millenniumbattle","obelisk","orichalcos","passionateduelistextended","ra","slifer","timaeus","yugi","zorc"];
ras=".mp3";
played = new Audio();

function BGA(){
	played.src = adr + playlist[Math.floor(Math.random() * 15)] + ras;
	played.volume = 0.3;
	played.play();
	played.onended = BGA;
}

/*window.onerror = function() {
  var message = " error";
  alert(message);
  return true;
};*/

function btt(url) {
	se.play();
	url += ".html";
    setTimeout(function(){ window.location.href = url; }, 500);
}