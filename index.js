// Date & Time objects.

// let now = new Date();
// console.log(now);

// let year = now.getFullYear();
// let month = now.getMonth() + 1;
// let date = now.getDate();

// console.log(date + "/" + month + "/" + year);

// -- END LEARNING --

// -- START JAVASCRIPT --
const curDate = document.getElementById('date');
let weathercon = document.getElementById('weathercon');

function Name() {
    var input = document.getElementById("userInput");
    const Fun = (input) => {
        return input.value;
    };
    module.exports = Fun;
}

const temStatus = "Clouds";
const getCurrentDate = () => {
    var months = [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";


    var now = new Date();
    var year = now.getFullYear();
    var month = months[now.getMonth()];
    var day = weekday[now.getDay()];
    var date = now.getDate();
    var hours = now.getHours();
    var min = now.getMinutes();

    var periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (min < 10) {
        min = "0" + min;
    }
    return `${day} | ${date} ${month} ${year} | ${hours}:${min} ${periods}`;

};
curDate.innerHTML = getCurrentDate();

// -- End JAVASCRIPT --