const mediaQuery0 = window.matchMedia("(min-width: 300px)");
const mediaQuery = window.matchMedia("(max-width: 768px)");
const mediaQuery1 = window.matchMedia("(min-width: 768px)");
const mediaQuery2 = window.matchMedia("(max-width: 1600px)");
const mediaQuery3 = window.matchMedia("(min-width: 1600px)");
function handleTabletChange0(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
mediaQuery0.addListener(handleTabletChange0);
handleTabletChange0(mediaQuery0);
function handleTabletChange(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,

      freeMode: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
function handleTabletChange1(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
mediaQuery1.addListener(handleTabletChange1);
handleTabletChange1(mediaQuery1);

function handleTabletChange2(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);

function handleTabletChange3(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,

      freeMode: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
mediaQuery3.addListener(handleTabletChange3);
handleTabletChange3(mediaQuery3);