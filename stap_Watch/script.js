// 'use strict'

let meliSecond = 00;
let second = 00;
let minute = 00;
let hour = 00;

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const meliSecondText = document.getElementById('meliSecond')
const secondText = document.getElementById('second');
const minuteText = document.getElementById('minute');
const hourText = document.getElementById('hour');

let timeInterval;

// /// reset time
btnReset.addEventListener('click', function (e) {
    clearInterval(timeInterval);
    meliSecond = "00";
    second = "00";
    minute = "00";
    hour = "00";
    meliSecondText.innerHTML = meliSecond;
    secondText.innerHTML = second;
    minuteText.innerHTML = minute;
    hourText.innerHTML = hour;

});
//// stop the clock

btnStop.addEventListener('click', function (e) {
    clearInterval(timeInterval);
})


//// start the clock
btnStart.addEventListener('click', function (e) {
    clearInterval(timeInterval);
    timeInterval = setInterval(startTimer, 10);

    function startTimer() {

        meliSecond++
        /// meli second
        if (meliSecond <= 9) { meliSecondText.innerHTML = "0" + meliSecond };
        if (meliSecond > 9) { meliSecondText.innerHTML = meliSecond }
        if (meliSecond > 99) {
            second++;
            //// second
            secondText.innerHTML = "0" + second;
            meliSecond = 0;
            // meliSecondText.innerHTML = "0" + 0;
            // // appendTens.innerHTML = "0" + 0;
        }
        if (second > 9) { secondText.innerHTML = second }
        if (second > 59) {
            minute++;
            // minute
            minuteText.innerHTML = "0" + minute;
            second = 0;
            // secondText.innerHTML = "0" + 0;
        }
        if (minute > 9) { minuteText.innerHTML = minute }
        if (minute > 59) {
            hour++;
            ///hour
            hourText.innerHTML = "0" + hour;
            minute = 0;
            // minuteText.innerHTML = "0" + 0;
        }

    }

})



