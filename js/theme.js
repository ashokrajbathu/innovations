"use strict"; // Start of use strict

(function($) {
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    }
    var videoPopup = $('.video-popup');
    if (videoPopup.length) {
        videoPopup.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    };
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
    if ($('#main-nav-bar .navigation-box .sub-menu').length) {
        var subMenu = $('#main-nav-bar .sub-menu');
        subMenu.parent('li').children('a').append(function() {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var mainNavToggler = $('.header-navigation .menu-toggler');
        var subNavToggler = $('#main-nav-bar .sub-nav-toggler');
        mainNavToggler.on('click', function() {
            var Self = $(this);
            var menu = Self.data('target');
            console.log(menu);
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
        subNavToggler.on('click', function() {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });
    }
    var brandCarOne = $('.brand-carousel-one');
    if (brandCarOne.length) {
        brandCarOne.each(function() {
            var getID = $(this).attr('id');
            var brandCarOne = $("#" + getID);
            brandCarOne.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    568: {
                        items: 2
                    },
                    767: {
                        items: 3
                    },
                    991: {
                        items: 3
                    },
                    1199: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        });
    }
    var testiCarTwo = $('.testimonials-style-two-carousel');
    if (testiCarTwo.length) {
        testiCarTwo.each(function() {
            var getID = $(this).attr('id');
            var testiCarTwo = $("#" + getID);
            testiCarTwo.owlCarousel({
                loop: true,
                center: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1,
                        center: false
                    },
                    568: {
                        items: 2,
                        center: false
                    },
                    767: {
                        items: 2,
                        center: false
                    },
                    991: {
                        items: 2
                    },
                    1199: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        });
    }
    if ($('.side-navigation').length) {
        $('.side-nav-opener').on('click', function() {
            $('.side-navigation').addClass('open');
            return false;
        });
        $('.side-navigation-close-btn').on('click', function() {
            $('.side-navigation').removeClass('open');
            return false;
        });
    };

    if ($('.hidden-sidebar .navigation-box .subnav-toggler').length) {
        $('.hidden-sidebar .navigation-box .subnav-toggler').on('click', function () {
            var Self = $(this);
            Self.parent().parent().find('.sub-menu').slideToggle();
            return false;
        });
    }
    if ($('.hidden-sidebar .navigation-box .scroll-to-target').length) {
        $('.hidden-sidebar .navigation-box .scroll-to-target').on('click', function () {
            var Self = $(this);
            $('.hidden-sidebar .navigation-box .scroll-to-target').parent().removeClass('current');
            Self.parent().addClass('current');
            return false;
        });
    }

    if ($('.countdown-box').length) {

        $('.countdown-box').each(function() {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<li> <div class="box"> <h4>' + event.strftime('%D') + '</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%H') + '</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%M') + '</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%S') + '</h4> <span>Seconds</span> </div> </li> ');
            });
        });



    };
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
    $(window).on('load', function() {
        if($('.preloader').length){
            $('.preloader').fadeOut();
        }
        var testiCar = $('.testicarousel-style-one');
        if (testiCar.length) {
            testiCar.each(function() {
                var getID = $(this).attr('id');
                var testiCar = $("#" + getID);
                testiCar.owlCarousel({
                    loop: true,
                    margin: 40,
                    nav: false,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    dots: false,
                    autoWidth: false,
                    stagePadding: 265,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 0
                        },
                        480: {
                            items: 1,
                            stagePadding: 0
                        },
                        568: {
                            items: 2,
                            stagePadding: 0
                        },
                        767: {
                            items: 2,
                            stagePadding: 0
                        },
                        991: {
                            items: 3,
                            margin: 25,
                            stagePadding: 0
                        },
                        1199: {
                            items: 3,
                            stagePadding: 0
                        },
                        1200: {
                            items: 2
                        }
                    }
                });
            });
        }
        var screenShotCar = $('.screenshot-carousel');
        if (screenShotCar.length) {
            screenShotCar.each(function() {
                var getID = $(this).attr('id');
                var screenShotCar = $("#" + getID);
                screenShotCar.owlCarousel({
                    loop: true,
                    margin: -50,
                    nav: true,
                    center: true,
                    navText: [
                        '<i class="ion-ios-arrow-back"></i>',
                        '<i class="ion-ios-arrow-forward"></i>'
                    ],
                    dots: false,
                    autoWidth: false,
                    stagePadding: 145,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0,
                            stagePadding: 0
                        },
                        480: {
                            items: 1
                        },
                        568: {
                            items: 1
                        },
                        767: {
                            items: 1
                        },
                        991: {
                            items: 1
                        },
                        1199: {
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            });
        }
        if ($('.testimonials-area .slider').length) {
            $('.testimonials-area .slider').bxSlider({
                adaptiveHeight: true,
                auto:true,
                controls: true,
                nextText: '<i class="fas fa-long-arrow-alt-right"></i>',
                prevText: '<i class="fas fa-long-arrow-alt-left"></i>',
                pause: 5000,
                speed: 1500,
                pagerCustom: '#testi-pager'
            });
        }
    });
    $(window).on('scroll', function() {
        if ($('.stricky').length || $('.scroll-to-top').length) {
            // var headerScrollPos = $('.header').next().offset().top;
            var strickyScrollPos = 100;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > strickyScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
                $('.scroll-to-top').fadeOut(500);
            }
        };
    });
})(jQuery);