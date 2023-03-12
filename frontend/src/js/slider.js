const mySwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      const currentSlide = (this.realIndex + 1).toString().padStart(2, "0");
      const totalSlides = this.slides.length.toString().padStart(2, "0");
      return (
        '<span class="swiper-numbers">' +
        '<span class="swiper-numbers-start">' +
        currentSlide +
        "</span>" +
        '<span class="line"></span>' +
        '<span class="swiper-numbers-end">' +
        totalSlides +
        "</span>" +
        "</span>" +
        '<span class="swiper-pagination-bullet"></span>'.repeat(
          this.slides.length
        )
      );
    },
  },
});

document
  .querySelector(".home .swiper-pagination-bullet")
  .classList.add("swiper-pagination-bullet-active");

mySwiper.on("slideChange", function () {
  const currentSlideIndex = mySwiper.activeIndex,
    el = document.querySelectorAll(".home .swiper-pagination-bullet");
  document.querySelector(".home .swiper-numbers-start").innerHTML = (
    currentSlideIndex + 1
  )
    .toString()
    .padStart(2, "0");
  el.forEach((item, index) => {
    if (index === currentSlideIndex)
      item.classList.add("swiper-pagination-bullet-active");
    else item.classList.remove("swiper-pagination-bullet-active");
  });
});

const swiper = new Swiper(".projects-swiper", {
  spaceBetween: 48,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function swiperCard() {
  if (window.innerWidth > 560) {
    $(".projects .projects-swiper").addClass("swiper");
    $(".projects .projects-swiper .projects-swiper__wrapper").addClass(
      "swiper-wrapper"
    );
    $(".projects .projects-swiper .projects-swiper__item").addClass(
      "swiper-slide"
    );
  } else {
    $(".projects .projects-swiper").removeClass("swiper");
    $(".projects .projects-swiper .projects-swiper__wrapper").removeClass(
      "swiper-wrapper"
    );
    $(".projects .projects-swiper .projects-swiper__item").removeClass(
      "swiper-slide"
    );
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
const clientsLoop = document.querySelector("[data-loop]")?.dataset?.loop;

const galleryThumbsList = document.querySelectorAll(".gallery-thumbs");
for (let i = 0; i < galleryThumbsList.length; i++) {
  let index = i + 1;
  const galleryTop = new Swiper(`.gallery-top-${index}`, {
    spaceBetween: 10,
    // loop: true,
    loopedSlides: 4,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function () {
        const currentSlide = (this.realIndex + 1).toString().padStart(2, "0");
        const totalSlides = this.slides.length.toString().padStart(2, "0");
        return (
          '<span class="swiper-numbers">' +
          '<span class="swiper-numbers-start">' +
          currentSlide +
          "</span>" +
          '<span class="line"></span>' +
          '<span class="swiper-numbers-end">' +
          totalSlides +
          "</span>" +
          "</span>"
        );
      },
    },
  });
  const galleryThumbs = new Swiper(`.gallery-thumbs-${index}`, {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: false,
    slideTo: 3,
    breakpoints: {
      768: {
        spaceBetween: 10,
        slidesPerView: 7,
        slideToClickedSlide: true,
      },
    },
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
  galleryTop.on("slideChange", function () {
    const currentSlideIndex = galleryTop.activeIndex;
    document.querySelector(
      `.gallery-top-${index} .swiper-numbers-start`
    ).innerHTML = (currentSlideIndex + 1).toString().padStart(2, "0");
  });
}
