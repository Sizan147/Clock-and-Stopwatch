// Clock

let time = document.querySelector(".real-time--clock");
let realTime = new Date().toLocaleTimeString();
time.innerText = realTime;
setInterval(()=>{
    realTime = new Date().toLocaleTimeString();
    time.innerText = realTime;
},1000)

// stopwatch

var clock = document.getElementById("clock");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let getTime = document.querySelector(".get-time");
let milisec = document.getElementById("milisec");
var timeStart;
var counter=0;
var milisecCounter;
var secondCounter=00;

const startCounting = ()=>{
    timeStart = setInterval(() => {
        clock.innerText = `${++counter}.`;
    }, 1000);
    milisecCounter = setInterval(()=>{
        if(secondCounter===253){
            secondCounter=0;
        }
        milisec.innerText = `${secondCounter++} s`;
    },1);
}

const stopCounter = ()=>{
    clearInterval(timeStart);
    clearInterval(milisecCounter);
}
const resetTimer = ()=>{
    stopCounter();
    counter = 0;
    clock.innerText = `${counter}.`;
    secondCounter = 0;
    milisec.innerText = `${secondCounter} s`;
}
const gettingTime = ()=>{
    document.querySelector(".show-time").innerText = `The stop time is ${counter}.${secondCounter} s`;
}
start.addEventListener("click", startCounting)
stop.addEventListener("click", stopCounter)
reset.addEventListener("click", resetTimer)
getTime.addEventListener("click", gettingTime)
document.querySelector(".clear-time").addEventListener("click", ()=>{
    document.querySelector(".show-time").innerText = ``;
})
