
export function Controls ({ minutesDisplay, secondsDisplay, mario, pipe, block, textGameOver, sound }){
    let counter;


    const checkJump = setInterval(() => {
        const positionPipe = pipe.offsetLeft;
        const positionBlock = block.offsetLeft;
        const positionMario = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
        
        
        if(positionPipe <= 80 && positionMario < 70 && positionPipe > 0){
            pipe.style.animation = 'none';
            pipe.style.left = `${positionPipe}px`;

            block.style.animation = 'none';
            block.style.left = `${positionBlock}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${positionMario}px`;
    
            mario.src = '../images/mario-game-over.png';
            mario.style.width = '3rem';
            mario.style.marginLeft = '50px';

            sound.gameSoundPause();
            sound.soundGameOver();
            clearInterval(checkJump);
            clearInterval(counter);
            textGameOver.classList.remove('disable');

        }else if(positionBlock <= 70 && positionMario < 50 && positionBlock > 0){
            pipe.style.animation = 'none';
            pipe.style.left = `${positionPipe}px`;

            block.style.animation = 'none';
            block.style.left = `${positionBlock}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${positionMario}px`;
    
            mario.src = '../images/mario-game-over.png';
            mario.style.width = '3rem';
            mario.style.marginLeft = '30px';

            sound.gameSoundPause();
            sound.soundGameOver();
            clearInterval(checkJump);
            clearInterval(counter);
            textGameOver.classList.remove('disable');
        }


    }, 10);
    
    function stopwatch(){
        let minute = 0;
        let second = 0;
    
        counter = setInterval(() => {
            minutesDisplay.innerText = minute <= 9 ? `0${minute}` : minute;
            secondsDisplay.innerText = second <= 9 ? `0${second}` : second;
    
            if (second < 59) {
                second++;
                
            } else if(minute < 59){
                second = 0;
                minute++;
            }
    
        }, 1000);
    }

    return { checkJump, stopwatch };
}






