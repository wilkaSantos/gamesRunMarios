
export function Sounds(){

    const game = new Audio('../sounds/super-mario-bros.mp3');
    const gameOver = new Audio('../sounds/mario-bros-morrendo.mp3');

    function gameSoundPlay(){
        game.play();
    }

    function gameSoundPause(){
        game.pause();
    }

    function soundGameOver(){
        gameOver.play();
    }

    return { gameSoundPlay, gameSoundPause, soundGameOver };
}

