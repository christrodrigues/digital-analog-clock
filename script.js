function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hour + ":" + minute + ":" + seconds + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

// ------------------------------------------------------------------
// Analog Clock


var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock-circle')[0];

for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),

        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        hEl = document.querySelector('.hour-hand'),
        mEl = document.querySelector('.minute-hand'),
        sEl = document.querySelector('.second-hand'),
        dateEl = document.querySelector('.date'),
        dayEl = document.querySelector('.day');

    var day = weekday[d.getDay()];

    if (month < 9) {
        month = "0" + month;
    }

    hEl.style.transform = "rotate(" + hDeg + "deg)";
    mEl.style.transform = "rotate(" + mDeg + "deg)";
    sEl.style.transform = "rotate(" + sDeg + "deg)";
    dateEl.innerHTML = date + "/" + month + "/" + year;
    dayEl.innerHTML = day;
}

setInterval("clock()", 100);