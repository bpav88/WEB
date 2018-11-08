var $div = document.querySelector('div');
var $img = document.querySelector('img');

var pr;
var toggle = true;
var sound = new Audio('./sound.mp3');
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
        if (toggle) {
            var x = 0;
            pr = setInterval(function () {
                x -= 5;
                $div.style.backgroundPosition = x + 'px';
            }, 100);
            $img.setAttribute('src', './images/mario_running.gif');
            sound.play();
            toggle = false;
        }

    }
})

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 39) {
        clearInterval(pr);
        $img.setAttribute('src', './images/mario.png');
        sound.pause();
        toggle = true;

    }
})