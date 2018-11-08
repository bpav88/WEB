var $area = document.querySelector('#textarea');
var $button = document.querySelector('#button');
var $text = document.querySelector('#text');

$button.onclick = function () {


    if ($text.value == '') {
        return;
    }

    var $p = document.createElement('p');
    $p.textContent = $text.value;

    $area.appendChild($p);

    $text.value = '';


}