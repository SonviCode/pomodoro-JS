const commencerBtn = document.querySelector('.b1');
const pauseBtn = document.querySelector('.b2');
const resetBtn = document.querySelector('.b3');
const timerTravail = document.querySelector('.time-travail');
const timerPause = document.querySelector('.time-pause');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsDeTravail = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;

timerTravail.innerText = ` ${Math.trunc(tempsDeTravail/60)} : ${(tempsDeTravail % 60 < 10) ? `0${tempsDeTravail % 60}` : tempsDeTravail % 60}`;
timerPause.innerText = ` ${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

commencerBtn.addEventListener('click', () => {

    if (checkInterval === false) {

        checkInterval = true;

        tempsDeTravail--;
        timerTravail.innerText = ` ${Math.trunc(tempsDeTravail/60)} : ${(tempsDeTravail % 60 < 10) ? `0${tempsDeTravail % 60}` : tempsDeTravail % 60}`;

        let timer = setInterval(() => {
            if (pause === false && tempsDeTravail > 0) {
                tempsDeTravail--;
                timerTravail.innerText = ` ${Math.trunc(tempsDeTravail/60)} : ${(tempsDeTravail % 60 < 10) ? `0${tempsDeTravail % 60}` : tempsDeTravail % 60}`;
            } else if (pause === false && tempsDeRepos === 0 && tempsDeTravail === 0) {
                tempsDeTravail = 1800;
                tempsDeRepos = 300;
                nbDeCycles++;
                cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;
            } else if (pause === false && tempsDeTravail === 0) {
                tempsDeRepos--;
                timerPause.innerText = ` ${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }
        }, 1000)

        resetBtn.addEventListener('click', () => {
            clearInterval(timer);
            checkInterval = false;
            tempsDeTravail = 1800;
            tempsDeRepos = 300;
            timerTravail.innerText = ` ${Math.trunc(tempsDeTravail/60)} : ${(tempsDeTravail % 60 < 10) ? `0${tempsDeTravail % 60}` : tempsDeTravail % 60}`;
            timerPause.innerText = ` ${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        })

    } else {
        return;
    }
})

pauseBtn.addEventListener('click', () => {

    if (pause === false) {
        pauseBtn.innerText = "Play";
    } else if (pause === true) {
        pauseBtn.innerText = "Pause";
    }
    pause = !pause;
})