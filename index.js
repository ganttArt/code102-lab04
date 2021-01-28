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
    // no exception handling yet for non-numbers entered by user
    for (i = 1; i < (numberInput + 1); i++) {
        console.log(i);
        let count = document.createElement('p');
        count.innerHTML = 'Image ' + i;
        document.body.appendChild(count);
        let newImage = document.createElement("img");
        newImage.src = "https://lh3.googleusercontent.com/proxy/1hlbLMkT9yC-JVsZolmeF9LZwqDtzP0hBfq9st5qyXyxGMN1rIvgM7ANP_KAaVnHnQT-2c66EyLXYWO6krfiLYA80aAzq4e9NXakO0aYFJ8rCIk"
        document.body.appendChild(newImage);
    }
}

displayGreeting();
repeatImage();
document.getElementById('header-title').innerHTML = "Watch This Movie Today !!! " + getFormattedDate();
