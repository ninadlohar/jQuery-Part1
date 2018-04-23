$(document).ready(() => {
    $(" ul.navigation-bar li a").on("mouseenter", function () {
        $(this).css({
            "background-color": "black",
            "font-weight": "bolder"
        });
    }).on("mouseleave", function () {
        var styles = {
            backgroundColor: "#505050",
            fontWeight: ""
        };
        $(this).css(styles);
    });
})