// target IDs
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let days = document.getElementById("days");
let dates = document.getElementById("date");
let months = document.getElementById("month");
let years = document.getElementById("year");

const weekdays = ["sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTime(){
    let now = new Date();
    let nowHours = now.getHours();
    let nowMinutes = now.getMinutes();
    let nowSeconds = now.getSeconds();
    let nowDays = weekdays[now.getDay()];
    let nowDates = now.getDate();
    let nowMonths = now.getMonth()+1;
    let nowYear = now.getFullYear();
    
    hours.textContent = nowHours<10?`0${nowHours}`:nowHours;
    minutes.textContent = nowMinutes<10?`0${nowMinutes}`:nowMinutes;
    seconds.textContent = nowSeconds<10?`0${nowSeconds}`:nowSeconds;
    days.textContent = nowDays<10?`0${nowDays}`:nowDays;
    dates.textContent = nowDates<10?`0${nowDates}`:nowDates;
    months.textContent = nowMonths<10?`0${nowMonths}`:nowMonths;
    years.textContent = nowYear<10?`0${nowYear}`:nowYear;
}

getTime();
setInterval(getTime,1000);
