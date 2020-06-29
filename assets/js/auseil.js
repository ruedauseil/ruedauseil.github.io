$(document).ready(function ($) {

    'use strict';

    // =========================
    // To top button visibility
    // Header visibility
    // =========================
    if (!$(".navbar-toggler").is(":visible")) {
        $(document).on("scroll", function() {
            let header = $("header");
            let headerMenu = $(".header__menu");

            if (window.scrollY > 200) {
                $("#to-top").fadeIn();

                if (!header.hasClass("scrolled")) {
                    headerMenu.hide();
                    headerMenu.fadeIn();
                }
                header.addClass("scrolled");
            } else {
                $("#to-top").fadeOut(100);

                header.removeClass("scrolled");
            }
        });
    }
});
