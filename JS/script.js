$(document).ready(function () {
    $(".accordéon-header, .accordéon-header-Pref").click(function () {
        $(this).next(".accordéon-content").slideToggle();
        $(this).parent().siblings().find(".accordéon-content").slideUp();
    });
});