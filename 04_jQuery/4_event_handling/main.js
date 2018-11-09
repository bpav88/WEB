const $body = $('body');
const $div = $('.container');
const $player = $('.player');
const $button = $('.button');
let toggle = false;

function movePlayer(event) {
    let positionX = event.pageX;
    let positionY = event.pageY;

    $player.css('left', positionX - 100 + 'px');
    $player.css('top', positionY - 100 + 'px');
}

$div.on('click', movePlayer);

$button.on('click', function () {
    if (toggle) {
        $div.on("click", movePlayer);
        $button.val("Stop moving");
        toggle = !toggle;
    } else {
        $div.off("click", movePlayer);
        $button.val("Start moving");
        toggle = !toggle;
    }
})
