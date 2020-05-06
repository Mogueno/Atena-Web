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
document.addEventListener('mousemove', (e) => {	
	const sqrs = document.querySelectorAll('.item');
		
	const mouseX = e.pageX;
	const mouseY = e.pageY;
	
	sqrs.forEach(sqr => {
		const sqrX = sqr.offsetLeft + 20;
		const sqrY = sqr.offsetTop + 20;

		const diffX = mouseX - sqrX;
		const diffY = mouseY - sqrY;
		
		const radians = Math.atan2(diffY, diffX);
				
		const angle = radians * 180 / Math.PI;
		
		sqr.style.transform = `rotate(${angle}deg)`;
	})
	
})
