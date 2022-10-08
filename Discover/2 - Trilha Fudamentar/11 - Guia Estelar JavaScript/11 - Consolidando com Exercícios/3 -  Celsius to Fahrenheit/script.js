
const startButton = document.querySelector('.start');
startButton.addEventListener('click', delayloaderPage)

const divMain = document.querySelector('.hidden');

const cssLoadContainer = document.querySelector('.loadContainerHidden');


function delayloaderPage(){
    startButton.classList.remove('start');
    startButton.classList.add('hidden');

    cssLoadContainer.classList.remove('loadContainerHidden')
    cssLoadContainer.classList.add('cssLoadContainer')

    setTimeout(loaderPage, 2000);
}

function loaderPage(){
    cssLoadContainer.classList.add('loadContainerHidden');
    divMain.classList.remove('hidden');
    divMain.classList.add('showMain');
};



// Dom

// Selecionando o botão de Celsius
const celsiusButton = document.getElementById('celsiusButton');
celsiusButton.addEventListener('click', celsuiusToFahrenheit);

// Selecionando o Botão Fahrenheit
const fahrenheitButton = document.getElementById('fahrenheitButton');
fahrenheitButton.addEventListener('click', fahrenheitToCelsius);

// Selecionando o Visor
const inputText = document.body.querySelector('input');


// Functions

function celsuiusToFahrenheit(){
    //Pegando o valor que o usuário Digitar e colocando em seguinte no Visor.
    const inputPromt = Number(prompt('Conversor de Temperatura:'));
    const celsuiusToFahrenheitForm =  (((inputPromt * 9) / 5) + 32).toFixed([1]);
    inputText.value = `${celsuiusToFahrenheitForm} Fº`;
};

function fahrenheitToCelsius(){
    const inputPromt = Number(prompt('Conversor de Temperatura:'));
    const fahrenheitToCelsiusForm = (((inputPromt - 32) * 5) / 9).toFixed([1]);
    inputText.value = `${fahrenheitToCelsiusForm} Cº`;
};  