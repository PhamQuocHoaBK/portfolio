$(document).ready(() => {
  let lastScrollTop = 0,
    delta = 15;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && lastScrollTop > 0) {
      $(".bgNav").css("top", "-80px");
    } else {
      $(".bgNav").css("top", "0px");
    }
    lastScrollTop = st;
  });
});
