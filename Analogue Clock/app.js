const currenTime = () =>{
    const clockTime = document.querySelector('.clock-time');
    const markingseconds = document.querySelector(".marking-seconds");

let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();


hh = hh < 10 ? `0${hh}` : hh;
mm = mm < 10 ? `0${mm}` : mm;
ss = ss < 10 ? `0${ss}` : ss;


const ssDegrees = (ss / 60) * 360;
markingseconds.style.transform = `rotate(${ssDegrees}deg)`;

let time = `${hh}:${mm}`;
clockTime.innerText = time;
};

currenTime();
setInterval(currenTime, 1000);