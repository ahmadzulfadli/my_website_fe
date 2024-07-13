$(document).ready(function () {

    // navigasi navbar
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveLink() {
        var scrollPosition = window.scrollY;

        navLinks.forEach(function(link) {
            var sectionId = link.getAttribute('href').substring(1);
            var section = document.getElementById(sectionId);
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                navLinks.forEach(function(link) {
                    link.parentNode.classList.remove('active');
                });
                link.parentNode.classList.add('active');
            }
        });
    }

    setActiveLink();

    window.addEventListener('scroll', setActiveLink)

    // button galery

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

    // smoth scroll

    var links = document.querySelectorAll('a.nav-link');
    var btnUp = document.getElementById("btn-up");

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    btnUp.addEventListener('click', function (e) {
        e.preventDefault();
        var targetElement = document.getElementById('site-banner');
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // hire me
    var hireMe = document.getElementById('hire-me');
    hireMe.addEventListener('click', function(){

        var email = "ahmadzulfadli342@gmail.com";
        var subject = "Hiring Inquiry";

        var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
        window.location.href = mailtoLink;
    });

    // get cv

    var getCv = document.getElementsByName('get-cv');

    getCv.forEach(function(element){
        element.addEventListener('click', function(){
            var link = '/file/CV_AHMAD_ZULFADLI.pdf';
            window.open(link, '_blank');
        });
    });

});