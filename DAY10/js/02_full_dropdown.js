//  문서 준비 이벤트
$(function () {
  // 메인 메뉴 - mouseover 이벤트
  $(".mainmenu").on("mouseover", function () {
    //  선택한 메인메뉴의 번호
    let index = $(this).index();
    let no = index + 1;
    // $(".submenu:nth-of-type(" + no + ")").slideDown();  < 이건 css로 표현
    // eq(index)  : index 번호에 해당하는 요소를 선택
    $(".submenu").eq(index).stop().slideDown(); // <요건 제이쿼리로 표현한거, stop() 넣으면 계속 실행 안됨
  });

  // 메인 메뉴 - mouseleave이벤트
  $(".mainmenu").on("mouseleave", function () {
    let index = $(this).index();
    let no = index + 1;
    // $(".submenu:nth-of-type(" + no + ")").slideUp();
    $(".submenu").eq(index).stop().slideUp();
  });

  // 메인 메뉴 - mouseclick이벤트   위에 function부터 아래 코드 주석하면 실행됨
  $(".mainmenu").on("click", function () {
    let index = $(this).index();
    let no = index + 1;
    $(".submenu").stop().hide();
    $(".submenu").eq(index).stop().slideToggle();
  });
});
