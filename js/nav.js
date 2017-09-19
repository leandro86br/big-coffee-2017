'use strict';

var

    $nav            = document.getElementsByTagName('nav')[0],
    $bar_a          = document.getElementsByClassName('bar')[0],
    $bar_b          = document.getElementsByClassName('bar')[1],
    $bar_c          = document.getElementsByClassName('bar')[2],
    $btn_toggle_nav = document.getElementsByClassName('btn-toggle-nav')[0];

function toggleNav() {

    $nav.classList.toggle('show');
    $bar_a.classList.toggle('bar-close-1');
    $bar_b.classList.toggle('hide');
    $bar_c.classList.toggle('bar-close-2');

}

$btn_toggle_nav.addEventListener('click', toggleNav);