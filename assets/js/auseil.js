$(document).ready(function ($) {

    'use strict';

    // =========================
    // To top button visibility
    // Header visibility
    // =========================
    $(document).on("scroll", function() {
        let header = $("header");
        let headerMenu = $(".header__menu");

        if (window.scrollY > 200) {
            $("#to-top").fadeIn();

            header.addClass("scrolled");
        } else {
            $("#to-top").fadeOut(100);

            header.removeClass("scrolled");
        }
    });
});
