$(document).ready(function () {


    let $btns = $('.galery-area .button-group button');


    $btns.click(function (e) {

        $('.galery-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.galery-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.galery-area .button-group #btn1').trigger('click');

    $('.galery-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    // Read more

    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const moreText = btn.previousElementSibling.querySelector('.more-text');
            
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                btn.textContent = 'Read Less ..';
            } else {
                moreText.style.display = 'none';
                btn.textContent = 'Read More ..';
            }
        });
    });
    

});