let userName = prompt('Please Enter Your Name: ');

if (userName == 'Chris') {
    document.getElementById('greeting').innerHTML = 'Hello Creator';
} else if (userName == null) {
    document.getElementById('greeting').innerHTML = 'Hello';
} else {
    document.getElementById('greeting').innerHTML = 'Hello ' + userName
}

let today = new Date();
let yearToday = today.getFullYear();
let monthToday = today.getMonth() + 1;
let dayToday = today.getDate();
let formattedDate = `(${monthToday}/${dayToday}/${yearToday})`

document.getElementById('header-title').innerHTML = "Watch This Movie Today !!! " + formattedDate

function shouldIWatchThis() {
    confirm("Yeah!!! You should!");
}