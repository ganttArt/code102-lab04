function createGreeting(inputName) {
    let greeting
    if (inputName == 'Chris') {
        greeting = 'Hello Creator';
    } else if (inputName == null) {
        greeting = 'Hello';
    } else {
        greeting = 'Hello ' + inputName
    }
    return greeting
}

function getFormattedDate() {
    let today = new Date();
    let yearToday = today.getFullYear();
    let monthToday = today.getMonth() + 1;
    let dayToday = today.getDate();
    return `(${monthToday}/${dayToday}/${yearToday})`
}

function shouldIWatchThis() {
    confirm("Yeah!!! You should!");
}

let userName = prompt('Please Enter Your Name: ');
document.getElementById('greeting').innerHTML = createGreeting(userName);
document.getElementById('header-title').innerHTML = "Watch This Movie Today !!! " + getFormattedDate();
