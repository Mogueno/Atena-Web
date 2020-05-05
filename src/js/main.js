document.addEventListener('DOMContentLoaded', () => {	
    openMenu();
    menuColorChange();	
});

function openMenu(){
    $('.atena__header-container--menu-button, .atena__close-menu, .atena__overlay').on('click', () =>{
        $('.atena__mobile-menu, .atena__close-menu, .atena__overlay').toggleClass('is--active');
    });
}

function menuColorChange(){
    $(window).on('scroll', () =>{
        if ($('.atena__header').offset().top > 0) {
            $(".atena__header").addClass('has--scrolled');
        } else {
            $(".atena__header").removeClass("has--scrolled");
        }
    });
}
