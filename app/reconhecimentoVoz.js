const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaValorValido(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box"> ${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());