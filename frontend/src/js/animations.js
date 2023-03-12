function animationInit() {
  AOS.init({
    duration: 800, // установить длительность анимации
  });
}
animationInit();

let show = false;
$(window).scroll(function () {
  // выбираем нужный элемент
  var section = $(".statistic");
  // проверяем, видим ли элемент на странице
  if ($(".statistic").hasClass("aos-animate") && !show) {
    show = true;
    // выполняем нужные действия, когда элемент становится видимым
    $(".statistic-number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).data("count"),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              if ($(this).text() != $(this).data("count"))
                $(this).text(Math.ceil(now));
            },
          }
        );
    });
  } else {
    if (!$(".statistic").hasClass("aos-animate")) {
      show = false;
      $(".statistic-number").each(function () {
        if ($(this).text() != 0) {
          $(this).Counter = 0;
          $(this).text(0);
        }
      });
    }
  }
});

new Parallax(document.querySelector(".infos-effects"));
//new Parallax(document.querySelector('.infos-inner__images'));
// new Parallax(document.querySelector('.infos-effects__right'));
// new Parallax(document.querySelector('.infos-inner__images'));

let count = 3;

function seeMore(count) {
  const el = $(".projects .projects-swiper__item");
  el.show();
  el.each(function () {
    if ($(this).index() >= count) {
      $(this).hide();
    }
  });

  if (el.length <= count) {
    $(".btn-projects").hide();
  }
  animationInit();
}

$(".btn-projects").click(function () {
  count += 3;
  seeMore(count);
});

function mobileAnimation() {
  const width = window.innerWidth;
  if (width <= 580) {
    $(".projects").attr("data-aos", "");
    $(".projects .projects-header")
      .attr("data-aos", "fade-up")
      .attr("data-aos-anchor-placement", "center-bottom");
    $(".projects .projects-swiper__item")
      .attr("data-aos", "fade-up")
      .attr("data-aos-anchor-placement", "center-bottom");
    animationInit();

    seeMore(count);
  }
}
mobileAnimation();

$(window).on("resize", function () {
  mobileAnimation();
});

// $(".str3").liMarquee({
//   direction: "left",
//   loop: -1,
//   scrolldelay: 0,
//   scrollamount: 120,
//   circular: true,
//   drag: true,
// });

$(".clients-inner").imageslider({
  slideItems: ".swiper-slide",
  slideContainer: ".clients-list",
  slideDistance: 1,
  slideDuratin: 20,
  resizable: true,
  pause: true,
});
