function navMobile() {
    
    var
        $nav_mobile     = document.getElementById('nav-mobile'),
        $btn_toggle_nav = document.getElementsByClassName('btn-toggle-nav')[0];

    function toggleNav() {
        
        if ($nav_mobile.style.maxHeight) {
            $nav_mobile.style.maxHeight = null;
        } else {
            $nav_mobile.style.maxHeight = $nav_mobile.scrollHeight + "px";
        }
        
        $btn_toggle_nav.classList.toggle('bar-close');
    }

    $btn_toggle_nav.addEventListener('click', toggleNav);
}

navMobile();


function backTopButton() {
    
    var
        $back_top = document.getElementsByClassName('back-top')[0];
    
    window.onscroll = function scrollFunction() {
        
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            $back_top.classList.remove('hide-me');
        } else {
            $back_top.classList.add('hide-me');
        }
    }
}

backTopButton();