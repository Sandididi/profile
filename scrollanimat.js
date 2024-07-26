//scrollanimat.js

const objs = document.querySelectorAll(".obj");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("scroll", entry.isIntersecting)
    })
}, {
    rootMargin: "-50px",
})

objs.forEach(obj =>{
    observer.observe(obj);
});

 //scroll_slide effect start
 $(window).scroll(function () {
    var scrollBottom = $(window).height() + $(window).scrollTop();

    if (scrollBottom >= $("#showf").offset().top) {
        $('.fix_land_btm').addClass('scrollEX');
    }else{
        $('.fix_land_btm').removeClass('scrollEX');
    }
});
//scroll_slide effect end