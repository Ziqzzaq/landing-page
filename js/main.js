setTimeout(showPage, 6000);

function showPage() {
    document.getElementById("loader_img").style.display = "none";
    document.getElementById("loaded_content").style.display = "block";
}

setTimeout(secondAnim, 4000);

function secondAnim() {
    document.getElementById("loader_img").className = "o-loader-img js-sliding_out";
}


$(window).scroll(function () {
    $(".js-items-to-slide").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 900) {
            $(this).addClass("js-slideing");
        }
    });
});
$('.c-navbar_right_button--search').click(function () {
    $('#search').toggleClass('js-slide_right');
    $('#search').toggleClass('js-visible');
});
$('.o-navbar_menu_button').click(function () {
    $('#menu').slideToggle(150);
});
