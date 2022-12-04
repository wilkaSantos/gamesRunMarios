import { Controls } from './controls.js';
import { Sounds } from './sound.js';

const minutesDisplay = document.querySelector('.minutesDisplay');
const secondsDisplay = document.querySelector('.secondsDisplay');
const buttonRestart = document.querySelector('.restartGame');

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const block = document.querySelector('.stoneBlock');
const textGameOver = document.querySelector('.textGameOver');


const sound = Sounds();
const controls = Controls({minutesDisplay, secondsDisplay, mario, pipe, block, textGameOver, sound});

function jump(){
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
         
buttonRestart.addEventListener('click', ()=>{
    location.reload();
});

window.onload = ()=>{
    sound.gameSoundPlay();
    controls.stopwatch();
    document.addEventListener("keydown", jump);
}

