// Модальное окно
$(".modal .modal__container").on("click", function (e) {
    e.stopPropagation();
});
$(".modal .close, .modal__close ").on("click", function (e) {
    e.preventDefault();
    $(".modal__wrapper").fadeOut(function () {
        $("body").css("overflow", "auto");
        $('header').css('visibility', 'unset')
    });
});
$(".modal__btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var modal = $this.attr('data-modal');
    $("body").css("overflow", "hidden");
    $(`${modal}`).fadeIn();
});
$('.projects-swiper__item-inner').on('click', function (e) {
    e.preventDefault();
    // var $this = $(this);
    // var modal = $this.attr('data-modal');
    // $("body").css("overflow", "hidden");
    // $(`${modal}`).fadeIn();
})