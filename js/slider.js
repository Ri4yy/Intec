const swiperCareer = new Swiper('.swiper-career', {

    breakpoints: {
        320: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 1,
        },
        480: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 1.2,
        },
        600: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 1.5,
        },
        768: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 2,
        },
        1024: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 2.5,
        },
        1280: {
            allowTouchMove: true,
            spaceBetween: 20,
            slidesPerView: 3.2,
        },
        1480: {
            allowTouchMove: true,
            slidesPerView: 3.7,
            spaceBetween: 20,
        },
        1921: {
            allowTouchMove: true,
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});