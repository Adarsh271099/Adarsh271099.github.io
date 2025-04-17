(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });

    // Carousels
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 2 }
        }
    });

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 2 }
        }
    });

    // Counter Up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initialize all components when DOM is ready
    $(document).ready(function () {
        // Show More Services
        const showMoreBtn = $("#showMoreBtn");
        const moreServices = $("#more-services");
        if (showMoreBtn.length && moreServices.length) {
            showMoreBtn.on("click", function (e) {
                e.preventDefault();
                moreServices.css("display", "flex");
                $(this).hide();
            });
        }

        // FAQ Accordions
        $('.faq-question').on('click', function () {
            const answer = $(this).next('.faq-answer');
            const icon = $(this).find('.faq-icon');

            $('.faq-answer').not(answer).hide();
            $('.faq-icon').not(icon).text('+');

            answer.toggle();
            icon.text(answer.is(':visible') ? '−' : '+');
        });

        // Accordion Basics
        $(".accordion").on("click", function () {
            $(this).toggleClass("active")
                   .next(".panel").toggleClass("show");
        });

        // Stock Market FAQ
        $(".faq-stock-market-basics-item h3").on("click", function () {
            $(this).parent().toggleClass("active")
                   .siblings().removeClass("active");
        });

        // Pricing Toggle
        const planPrices = {
            monthly: {
                basic: '🔥 ₹2,499/- month',
                advanced: '🔥 ₹2,999/- month',
                premium: '🔥 ₹3,199/- month'
            },
            quarterly: {
                basic: '🔥 ₹6,499/- / 3 months',
                advanced: '🔥 ₹7,999/- / 3 months',
                premium: '🔥 ₹8,499/- / 3 months'
            },
            yearly: {
                basic: '🔥 ₹22,999/- / year',
                advanced: '🔥 ₹27,499/- / year',
                premium: '🔥 ₹29,499/- / year'
            }
        };

        $('.toggle-btn').on('click', function () {
            $('.toggle-btn').removeClass('active');
            $(this).addClass('active');

            const selectedPlan = $(this).data('plan');
            $('.basic .new-price').text(planPrices[selectedPlan].basic);
            $('.advanced .new-price').text(planPrices[selectedPlan].advanced);
            $('.premium-plan .new-price').text(planPrices[selectedPlan].premium);
        });

        // Contact Form Submission
        $('#contactForm').on('submit', async function (e) {
            e.preventDefault();

            const formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: $('#mobile').val()
            };

            const scriptURL = 'https://script.google.com/macros/s/AKfycbyS3FN9JRX5R0-z-6SXAwKbKYpjemvXdckQhCz0CDfEra8NJV8Dk0hBspz9QAfabNv4Sg/exec';

            try {
                await $.ajax({
                    url: scriptURL,
                    type: 'POST',
                    data: JSON.stringify(formData),
                    contentType: 'application/json',
                    processData: false
                });
                alert('Form submitted successfully!');
                this.reset();
            } catch (error) {
                console.error('Error!', error);
                alert('Error submitting form');
            }
        });
    });

})(jQuery);