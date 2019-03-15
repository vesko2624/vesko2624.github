const desc = document.querySelector("#card");
const desc_hide = document.querySelector("#hide_butt");
const desc_hide_class = "hide";
const desc_show_butt = document.querySelector("#show_butt");
const desc_show_butt_class = "show_butt";

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
desc_hide.onmousedown = function(){
    desc.classList.add(desc_hide_class);
    // setTimeout(()=>{
        desc_show_butt.classList.add(desc_show_butt_class);
    // }, 400);
}
desc_show_butt.onmousedown = function(){
    desc.classList.remove(desc_hide_class);
    desc_show_butt.classList.remove(desc_show_butt_class);
}