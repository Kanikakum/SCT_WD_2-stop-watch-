let seconds = 0;
let tens = 0;
let minutes = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.minutes');
let btnStart = document.querySelector('.start-btn');
let btnStop = document.querySelector('.stop-btn');
let btnReset = document.querySelector('.restart-btn');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = minutes;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMins.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(minutes > 9){
        getSeconds.innerHTML = minutes;
    }
}
