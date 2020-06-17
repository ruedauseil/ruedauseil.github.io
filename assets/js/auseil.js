$(document).ready(function ($) {

    'use strict';

    // =========================
    // To top button visibility
    // =========================
    $(document).on("scroll", function() {
        if (window.scrollY > 200) {
            $("#to-top").fadeIn();
        } else {
            $("#to-top").fadeOut(100);
        }
    });
});
