let se = new Audio("sounds/ButtonClick.wav");
let adr = "sounds/BG/",
	playlist = ["bakura","banditkeith","critiasJ","exodia","joey","kaiba","millenniumbattle","obelisk","orichalcos","passionateduelistextended","ra","slifer","timaeus","yugi","zorc"],
	ras = ".mp3",
	played = new Audio(),
	current_song = -1;
played.volume = 0.3;
if(played.canPlayType('audio/mp3') !== "probably") ras = ".ogg";

async function rand_song(){
	let next_song = Math.floor(Math.random() * 15);
	if(current_song == -1 || current_song != next_song) current_song = next_song;
	else {
		function randomize(){
			return new Promise((resolve, reject) => {
				let interval = setInterval(() => {
					next_song = Math.floor(Math.random() * 15);
					if(next_song != current_song){
						clearInterval(interval);
						resolve(next_song);
					}
				}, 10);
			});
		}
		current_song = await randomize();
	}
	return playlist[current_song];

}
async function BGA(){
	played.src = adr + await rand_song() + ras;
	played.play();
}
played.onended = BGA;

function btt(url) {
	se.play();
    setTimeout(function(){ window.location.href = `${url}.html`; }, 500);
}