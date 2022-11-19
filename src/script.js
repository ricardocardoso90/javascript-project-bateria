const body = document.body;

//EVENTO DE CLIQUE PARA EXECULTAR OS SONS DA BATERIA. 
body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

//FUNÇAO PARA PEGAR AS TECLAS DOS SONS NO INPUT.
function composerButton() {
    const song = document.querySelector('#input').value;
    if (song !== '') {
        const songArray = song.split('');
        playComposition(songArray);
    };
};

//FUNÇÃO PARA EXECUTAR O SOM AO CLIQUE.
function playSound(sound) {
    const audioElement = document.querySelector(`#s_${sound}`);
    const keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //PARTE DO CSS QUE TOCA O SOM AO CLIQUE.
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    //PARTE DO CSS QUE MARCA AS TECLAS AO CLIQUE.
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
};

//FUNÇÃO PARA TOCAR O SOM NO CAMPO DE INPUT.
function playComposition(songArray) {
    let wait = 0;
    for (let songItem of songArray) {

        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    };
};