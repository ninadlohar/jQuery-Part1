$(document).ready(function () {
    $("#button-popup").click(function () {
        $(".window-popup").slideToggle(300);
    });

    $("#buttonPopupClose").click(function () {
        $(".window-popup").hide(300);
    });
});