$(function () {
  // 스와이퍼 시작!
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal", // 슬라이드 방향 : 'vertical', 'horizontal'
    loop: true, // 반복여부
    autoplay: {
      // 자동재생
      delay: 1000, // 슬라이드 당 지연시간 (ms)
      pauseOnMouseEnter: true, //슬라이드에 마우스 올려두면 자동 재생 멈춤
      disableOnInteraction: true, // 인터렉션(화살표, 드래그,...) 중에 자동재생 비활성화 여부
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
