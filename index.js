const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapseTime = 0;
isRunning = false;

function Start(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function Stop(){
    if(isRunning){
        clearInterval(timer);

        // edit elapse time dan mengurangi nya dengan startTime
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }
}

function Reset(){
    clearInterval(timer);
    elapseTime = 0;
    startTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / 1000 %  60);
    let milisecond = Math.floor(elapseTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milisecond}`;
}