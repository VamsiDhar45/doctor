$(function($) {

    "use strict";

    //===== 01. Main Menu
    function mainMenu() {
        var var_window = $(window),
            navContainer = $('.nav-container'),
            pushedWrap = $('.nav-pushed-item'),
            pushItem = $('.nav-push-item'),
            pushedHtml = pushItem.html(),
            pushBlank = '',
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this)
                    .parent('li')
                    .append(
                        '<span class="dd-trigger"><i class="fa fa-chevron-down"></i></span>'
                    );
            }
        });
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this)
                .parent('li')
                .children('ul')
                .stop(true, true)
                .slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });

        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');

                pushedWrap.html(pushedHtml);
                pushItem.hide();
            } else {
                navContainer.removeClass('breakpoint-on');

                pushedWrap.html(pushBlank);
                pushItem.show();
            }
        }

        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    $(document).ready(function() {
        mainMenu();
    });

    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    // page_scroll JS
    $("a.page_scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            scrollToPosition(hash);
        }
    });

    function scrollToPosition(hash) {
        //Initialize Active Class
        $('body,html').animate({
            start: function() {},
            scrollTop: $(hash).offset().top,
        }, 1000, function() {
            window.location.hash = hash;
        });
    }

    $('.bannerslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // $('.counter-value').each(function() {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 3500,
    //         easing: 'swing',
    //         step: function(now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });

    $(window).scroll(startCounter);

    function startCounter() {
        let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
        let divPos = document.querySelector('#counter-container').offsetTop;

        if (scrollY > divPos) {
            $(window).off("scroll", startCounter);

            $('.counter-value').each(function() {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text().replace(/,/g, '')
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(commaSeparateNumber(Math.floor(this.Counter)));
                    },
                    complete: function() {
                        $this.text(commaSeparateNumber(this.Counter));
                        //alert('finished');
                    }
                });
            });

            function commaSeparateNumber(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }


    $('.services_slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })

    $('.testimonial_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.casereports_slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    $('.team_slider').owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    $(".arrow-down").click(function() {
        $('html, body').animate({
            scrollTop: $(".about_Section").offset().top
        }, 2000);
    });

});


! function() {
    var t = {
            611: function() {
                ! function(t) {
                    const e = t("#tabs-section .tab-link"),
                        r = t("#tabs-section .tab-body");
                    let n;
                    const o = () => { e.off("click").on("click", (function(o) { o.preventDefault(), o.stopPropagation(), window.clearTimeout(n), e.removeClass("active "), r.removeClass("active "), r.removeClass("active-content"), t(this).addClass("active"), t(t(this).attr("href")).addClass("active"), n = setTimeout((() => { t(t(this).attr("href")).addClass("active-content") }), 50) })) };
                    t((function() { o() }))
                }(jQuery)
            },
            221: function(t, e, r) {
                "use strict";
                t.exports = r.p + "css/style.css"
            }
        },
        e = {};

    function r(n) { var o = e[n]; if (void 0 !== o) return o.exports; var i = e[n] = { exports: {} }; return t[n](i, i.exports, r), i.exports }
    r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, { a: e }), e }, r.d = function(t, e) { for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] }) }, r.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" == typeof window) return window } }(), r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) },
        function() {
            var t;
            r.g.importScripts && (t = r.g.location + "");
            var e = r.g.document;
            if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
                var n = e.getElementsByTagName("script");
                n.length && (t = n[n.length - 1].src)
            }
            if (!t) throw new Error("Automatic publicPath is not supported in this browser");
            t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t + "../"
        }(),
        function() {
            "use strict";
            r(221), r(611)
        }()
}();