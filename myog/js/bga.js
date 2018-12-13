adr="sounds/BG/";
playlist = ["bakura","banditkeith","critiasJ","exodia","joey","kaiba","millenniumbattle","obelisk","orichalcos","passionateduelistextended","ra","slifer","timaeus","yugi","zorc"];
ras=".mp3";
played = new Audio();
	
played.src = adr + playlist[Math.floor(Math.random() * 15)] + ras;
played.volume = 0.3;
played.play();
