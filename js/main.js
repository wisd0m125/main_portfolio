const topmenu = $("nav ul>li");
const sections = $(".section");
const speed = 500;

topmenu.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  let section = $(".section").eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop: offset }, 1000, "easeOutCirc");
});

//스크롤이벤트
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      console.log(sections.eq(i));
      $("nav ul.gnb li")
        .eq(i)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if (scrollTop >= sections.eq(2).offset().top - speed) {
      sections.eq(2).find(".right").addClass("in");
      sections.eq(2).find("span").addClass("show");
    }
  });
});

$(".hidden").hover(
  function () {
    let ah = $(this).innerHeight();
    let img = $(this).find("img");
    let imgh = img.innerHeight();

    img.stop().animate({ top: ah - imgh }, 3000);
  },
  function () {
    let img = $(this).find("img");
    img.stop().animate({ top: 0 }, 3000);
  }
);
$(".mobile_hidden").hover(
  function () {
    let aHM = $(this).innerHeight();
    let imgM = $(this).find("img");
    let imgHM = imgM.innerHeight();
    imgM.stop().animate({ top: aHM - imgHM }, 4000);
  },
  function () {
    let imgM = $(this).find("img");
    imgM.stop().animate({ top: 0 }, 4000);
  }
);
$(".ip_hidden").hover(
  function () {
    let ah = $(this).innerHeight();
    let img = $(this).find("img");
    let imgh = img.innerHeight();

    img.stop().animate({ top: ah - imgh }, 3000);
  },
  function () {
    let img = $(this).find("img");
    img.stop().animate({ top: 0 }, 3000);
  }
);
const btt = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btt.addClass("visible");
  } else {
    btt.removeClass("visible");
  }
});
btt.click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 500); //태그 선택
});
