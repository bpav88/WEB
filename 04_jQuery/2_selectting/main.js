$(function () {
    $('li:first').css('border-bottom', '1px solid black');
    $('li').css('text-transform', 'uppercase');
    $('li.active').css('color', 'red');

    var $leng = ($('li').length - 1) / 2;
    $('li').eq($leng).css('background-color', 'blue');
})