function createGreeting(inputName) {
    let greeting
    if (inputName == 'Chris') {
        greeting = 'Hello Creator';
    } else if ((inputName == '') || (inputName == null)) {
        greeting = 'Hello';
    } else {
        greeting = 'Hello ' + inputName
    }
    return greeting
}

function displayGreeting() {
    let userName = prompt('Please Enter Your Name: ');
    let greeting = createGreeting(userName);
    if (greeting == 'Hello') {
        while (greeting === 'Hello') {
            userName = prompt('You need to enter your name to see this site:');
            greeting = createGreeting(userName)
        }
    }
    document.getElementById('greeting').innerHTML = greeting;
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

function repeatImage() {
    let numberInput = parseInt(prompt('Please enter a number'));
    
    for (i = 1; i < (numberInput + 1); i++) {
        console.log(i);
        let count = document.createElement('p');
        count.innerHTML = 'Image ' + i;
        document.body.appendChild(count);
        let newImage = document.createElement("img");
        newImage.src = "https://images-na.ssl-images-amazon.com/images/I/714zt-AmxHL._RI_.jpg"
        document.body.appendChild(newImage);
    }
}

displayGreeting();
repeatImage();
document.getElementById('header-title').innerHTML = "Watch This Movie Today !!! " + getFormattedDate();
