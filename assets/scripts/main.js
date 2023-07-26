var numberAleatory= Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;
            
function checkGuess() {
    var guessUser = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Palpites anteriores: ';
    }
    guesses.textContent += guessUser + ' ';
    
    if (guessUser === numberAleatory) {
        lastResult.textContent = 'Parabéns! Você acertou!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        configGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!FIM DE JOGO!!!';
        lowOrHi.textContent = '';
        configGameOver();
    } else {
        lastResult.textContent = 'Errado!';
        lastResult.style.backgroundColor = 'red';
        if(guessUser < numberAleatory) {
            lowOrHi.textContent = 'Seu palpite está baixo!';
        } else if(guessUser > numberAleatory) {
            lowOrHi.textContent = 'Seu palpite está alto!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

function configGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar novo jogo';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
};

function resetGame() {
    guessCount = 1;
    var resultParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resultParas.length ; i++) {
        resultParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    numberAleatory = Math.floor(Math.random() * 100) + 1;
};
