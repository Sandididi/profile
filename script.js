///cursor
let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

$('.cursun').mouseover(function(){
    $('.cursor').addClass('click-grow');
});

$('.cursun').mouseout(function(){
    $('.cursor').removeClass('click-grow');
});

$('.a_link').mouseover(function(){
    $('.cursor').addClass('click-alink');
});
$('.a_link').mouseout(function(){
    $('.cursor').removeClass('click-alink');
});

// menu start
var $el = $('.menu-icon');
var $ee = $('.nav_tags');
$('#navtab, .nav_tags a').click(function (e) {
    e.stopPropagation();
    $('.menu-icon').toggleClass("menu_open");
    $('.nav_tags').toggleClass("nav_close");
});
$(document).on('click', function(e){
    if($(e.target) != $el && $el.hasClass('menu_open')){
        $el.removeClass('menu_open');
        $ee.addClass('nav_close');
    }
});
