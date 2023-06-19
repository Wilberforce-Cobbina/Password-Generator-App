// Slider manipulation and count
const slider = document.getElementById('mySlider')
const output = document.getElementById('slider-count')
output.innerHTML = slider.value
slider.oninput = function () {
    output.innerHTML = this.value
}

slider.addEventListener('mousemove', function () {
    const x = slider.value;
    var color = 'linear-gradient(90deg, rgb(164, 255, 175)' + x + '%, rgb(24, 23, 31)' + x + '%)';
    slider.style.background = color;
})

const finalPassword = document.getElementById('final_password');
const uppercase = document.getElementById('uppercase_check');
const lowercase = document.getElementById('lowercase_check');
const numbers = document.getElementById('numbers_check');
const symbols = document.getElementById('symbols_check');
const generatebtn = document.getElementById('generate');
const copy = document.getElementById('copybtn');
const copiedDisplay = document.getElementById('copied');
const passwordStrength = document.getElementById('passstrength');

const randomGenerate = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = finalPassword.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    // Copied display
    finalPassword.style.color = 'white';
    const copiedtext = document.createTextNode('COPIED');
    copiedDisplay.appendChild(copiedtext);
});

const strenColor1 = document.getElementById('colordisplay1');
const strenColor2 = document.getElementById('colordisplay2');
const strenColor3 = document.getElementById('colordisplay3');
const strenColor4 = document.getElementById('colordisplay4');

// const tooWeakColorRef = tooWeakColor();
// const weakColorRef = weakColor();
// const mediumColorRef = mediumColor();
// const strongColorRef = strongColor();


generate.addEventListener('click', () => {
    const length = + slider.value;
    const includeLower = lowercase.checked;
    const includeUpper = uppercase.checked;
    const includeNumber = numbers.checked;
    const includeSymbol = symbols.checked;

    finalPassword.innerText = generatePassword(includeLower, includeUpper, includeNumber, includeSymbol, length);

    //Validating the strength of the password


    const strenArr = [lowercase.checked, uppercase.checked, numbers.checked, symbols.checked];
    let trueCount = 0;

    for (let i = 0; i < strenArr.length; i++) {
        if (strenArr[i] === true) {
            trueCount++;
        }
    }


    switch (trueCount) {
        case 1:
            if (passwordStrength.firstChild) {
                passwordStrength.removeChild(passwordStrength.firstChild)
            }
            const tooweaktext = document.createTextNode('too weak!');
            passwordStrength.appendChild(tooweaktext);
            
            tooWeakColor();

            break;

        case 2:
            if (passwordStrength.firstChild) {
                passwordStrength.removeChild(passwordStrength.firstChild)
            }
            const weaktext = document.createTextNode('weak');
            passwordStrength.appendChild(weaktext);

            weakColor();
                 
            break;

        case 3:
            if (passwordStrength.firstChild) {
                passwordStrength.removeChild(passwordStrength.firstChild)
            }
            const mediumtext = document.createTextNode('medium');
            passwordStrength.appendChild(mediumtext);

            mediumColor();

            break;

        case 4:
            if (passwordStrength.firstChild) {
                passwordStrength.removeChild(passwordStrength.firstChild)
            }
            const strongtext = document.createTextNode('strong');
            passwordStrength.appendChild(strongtext);

            strongColor();

            break;
        default:
            alert('Please choose at least one option');
    }
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // Doesn't have a selected type
    if (typesCount === 0) {
        return '';
    }

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomGenerate[funcName]();
        });

    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function tooWeakColor() {
    strenColor1.style.backgroundColor = 'rgb(246, 74, 74)';
    strenColor1.style.borderColor = 'rgb(246, 74, 74)';
    strenColor1.style.borderWidth = '2px';
    strenColor1.style.borderStyle = 'solid';
}

function weakColor() {
    strenColor1.style.backgroundColor = 'rgb(251, 124, 88)';
    strenColor1.style.borderColor = 'rgb(251, 124, 88)';
    strenColor1.style.borderWidth = '2px';
    strenColor1.style.borderStyle = 'solid';

    strenColor2.style.backgroundColor = 'rgb(251, 124, 88)';
    strenColor2.style.borderColor = 'rgb(251, 124, 88)';
    strenColor2.style.borderWidth = '2px';
    strenColor2.style.borderStyle = 'solid';
}

function mediumColor() {
    strenColor1.style.backgroundColor = 'rgb(248, 205, 101)';
    strenColor1.style.borderColor = 'rgb(248, 205, 101)';
    strenColor1.style.borderWidth = '2px';
    strenColor1.style.borderStyle = 'solid';

    strenColor2.style.backgroundColor = 'rgb(248, 205, 101)';
    strenColor2.style.borderColor = 'rgb(248, 205, 101)';
    strenColor2.style.borderWidth = '2px';
    strenColor2.style.borderStyle = 'solid';

    strenColor3.style.backgroundColor = 'rgb(248, 205, 101)';
    strenColor3.style.borderColor = 'rgb(248, 205, 101)';
    strenColor3.style.borderWidth = '2px';
    strenColor3.style.borderStyle = 'solid';
}

function strongColor(){
    strenColor1.style.backgroundColor = 'rgb(164, 255, 175)';
    strenColor1.style.borderColor = 'rgb(164, 255, 175)';
    strenColor1.style.borderWidth = '2px';
    strenColor1.style.borderStyle = 'solid';

    strenColor2.style.backgroundColor = 'rgb(164, 255, 175)';
    strenColor2.style.borderColor = 'rgb(164, 255, 175)';
    strenColor2.style.borderWidth = '2px';
    strenColor2.style.borderStyle = 'solid';

    strenColor3.style.backgroundColor = 'rgb(164, 255, 175)';
    strenColor3.style.borderColor = 'rgb(164, 255, 175)';
    strenColor3.style.borderWidth = '2px';
    strenColor3.style.borderStyle = 'solid';

    strenColor4.style.backgroundColor = 'rgb(164, 255, 175)';
    strenColor4.style.borderColor = 'rgb(164, 255, 175)';
    strenColor4.style.borderWidth = '2px';
    strenColor4.style.borderStyle = 'solid';
}
