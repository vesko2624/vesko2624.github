const show_class = 'show';
const hide_delay = 2000;
const timeOut = [0, 0];
const lifepoints = [];
const show = function([photo, lp], index){
    clearTimeout(timeOut[index]);
    lp.classList.add(show_class);
}
const hide = function([photo, lp], index){
    if(lp.classList.contains(show_class)){
        timeOut[index] = setTimeout(() => {
            lp.classList.remove(show_class);
        }, hide_delay);
    }
}
for(let player of document.querySelectorAll('.player')){
    let timeOut = 0;
    lifepoints.push([player.querySelector('.photo'), player.querySelector('.lifepoints'), timeOut]);
}
for(let i = 0; i < lifepoints.length; ++i){
    lifepoints[i][0].onmouseenter = () => show(lifepoints[i], i);
    lifepoints[i][0].onmouseleave = () => hide(lifepoints[i], i);
}