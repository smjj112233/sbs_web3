$(function () {
  // 슬라이드 박스
  let slide = $(".slide-container");

  // 슬라이드 전체 개수
  let slideCount = $(".slide").length / 2;
  $("#slideCount").text(slideCount);

  // 슬릭 슬라이드 시작!
  slide.slick({
    dots: true,
    arrows: true,

    autoplay: true, // 자동재생 여부
    autoplaySpeed: 3000, // 자동재생 슬라이드 시간
    infinite: true, // 무한 반복
    speed: 500, // 슬라이드가 전환되는 시간

    variableWidth: true,

    // centerMode: true, // 센터 모드
    // centerPadding: '60px',       // 센터 모드 시, 내부여백
    slidesToShow: 2, // 보여질 슬라이드 개수
    slidesToScroll: 2, // 스크롤될 슬라이드 개수

    pauseOnDotsHover: true, // 페이지네이션 호버 시 자동재생 멈춤
    pauseOnFocus: true, // 포커스 시, 자동재생 멈춤
    pauseOnHover: true, // 호버 시, 자동재생 멈춤

    /* 효과 */
    // fade: true,
    // cssEase: 'linear',

    // 네비게이션 화살표 커스텀
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></btton>',

    /* 반응형 */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // 네비게이션 닷츠 - 번호로 지정하는 함수
    customPaging: function (slider, i) {
      // 슬라이드 인덱스
      let no = $(slider.$slides[i]).index() - 1;
      let span = '<span class ="nav-btn">' + no + "</span>";
      return span;
    },
  });

  // afterChange : 슬라이드 변경 후 이벤트
  slide.on("afterChange", function (event, slick, currentSlide) {
    console.log(currentSlide);
    // currentSlide : 0 2 4 6 8
    // (0,1) (2,3) (4,5) (6,7) (8,9)
    //   1     2     3     4     5
    // 0 2 4 6 8
    // 1 3 5 7 9
    // 0.5    1.5     2.5     3.5    4.5
    // 1 2 3 4 5
    let no = currentSlide + 1;
    no = Math.round(no / 2);
    $("#currentSlide").text(no);
  });
});
