var $div = document.querySelector('div');
var $img = document.querySelector('img');

var pr;
var x = 0;
var toggle = false;
var sound = new Audio('./sound/sound.mp3');

function move() {
    x -= 20;
    $div.style.backgroundPosition = x + 'px';
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39 && !toggle) {
        console.log('hello');
        pr = setInterval(move, 100);
        // $img.removeAttribute('src');
        $img.setAttribute('src', './images/mario_running.gif');
        sound.play();
        toggle = true;

    }
})

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 39) {
        console.log('blaaa');
        clearInterval(pr);
        // $img.removeAttribute('src');
        $img.src = './images/mario.png';
        sound.pause();
        toggle = false;
    }
})