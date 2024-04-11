let menu = document.querySelector('#openMenu')
let nav = document.querySelector('.nav')
let overlay = document.querySelector('.overlay')
let html = document.querySelector('html')

menu.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
    nav.classList.toggle('nav--open');
    overlay.classList.toggle('overlay--open');
    html.classList.toggle('no-scroll');
})


// Модальное окно
function showModal(btnOpen, modalBody) {
    btnOpen.click(function() {
        modalBody.show();
        $('html').addClass('no-scroll');
        return false;
    });		

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modalBody.hide();
            $('html').removeClass('no-scroll');
        }
    });
    
    modalBody.click(function(e) {
        if ($(e.target).closest('.modal__wrapper').length == 0) {
            $(this).hide();					
            $('html').removeClass('no-scroll');
        }
    });

    $('.modal__close').click(function() {
        modalBody.hide();
        $('html').removeClass('no-scroll');
		return false;
	});
}
showModal($('.open-modal'), $('.modal'));