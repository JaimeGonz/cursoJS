const salida = document.querySelector('#salida');
const microfono =  document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI () {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = () => {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = () => {
        salida.textContent = 'Se dejo de grabar';
        recognition.stop();
    }

    recognition.onresult = (e) => {
        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Texto: ${transcript}`
        salida.appendChild(speech)

        // const trust = document.createElement('p');
        // trust.innerHTML = `Precision del ${ parseInt(confidence * 100)}`;
        
        // salida.appendChild(trust)
    }


}