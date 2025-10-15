const displayDate = document.getElementById("displayDate");
const displayDay = document.getElementById("myH1");
const displayClock = document.getElementById("displayClock");
// function update(){

//     display.textContent = `${hours}:${minutes}:${seconds}:${milisecond}`;
// }
console.log( new Date());
function updateTime(){
    const day = new Date().getDay();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    if(day === 0){
        displayDay.textContent = "Sunday";
    }
    else if(day === 1){
        displayDay.textContent = "Monday";
    }
    else if(day === 2){
        displayDay.textContent = "Tuesday";
    }
    else if(day === 3){
        displayDay.textContent = "Wednesday";
    }
    else if(day === 4){
        displayDay.textContent = "Thursday";
    }
    else if(day === 5){
        displayDay.textContent = "Friday";
    }
    else if(day === 6){
        displayDay.textContent = "Saturday";
    }

    displayClock.textContent = `${hours}.${minutes}`;
    displayDate.textContent = `${date}/${month+1}/${year}`;
}
updateTime();
setInterval(updateTime, 1000);