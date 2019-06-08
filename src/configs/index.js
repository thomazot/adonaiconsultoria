define(['jquery'], ($) => {
    const hash = window.location.hash;

    if(hash) {
        document.addEventListener("DOMContentLoaded", function(){
            const el = $(hash);
            scrollElement(el);
        });
    }

    $('.menu a').click((evt) => {
        const href = $(evt.currentTarget).attr('href');
        if(href.indexOf("#") !== -1) {
            const hash = href.substr(href.indexOf("#"));
            const el = $(hash);
            if(el.length) {
                evt.preventDefault();
                scrollElement(el);
            }
        }
    });

    function scrollElement(el) {
        if(el.length) {
            const offset = el.offset();
            const top = offset.top - $('#header').outerHeight();
            $('html,body').animate({
                scrollTop: top
            }, 1000);
        }
    }

});