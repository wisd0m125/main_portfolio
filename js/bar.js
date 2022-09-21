$(function () {
  const totalLength = 380;
  const percents = $(".percents");
  const progressBox = $(".percents .chart");
  const progressOst = $(".percents").offset().top - 600;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst) {
      if (!percents.hasClass("isAni")) {
        progressAni();
        percents.addClass("isAni");
      }
    }
  });

  function progressAni() {
    progressBox.each(function () {
      let $this = $(this);
      let title = $this.find("h2");
      let targetNum = title.attr("data-num");
      let circle = $this.find("circle");

      $({ rate: 0 }).animate(
        { rate: targetNum },
        {
          duration: 2000,
          progress: function () {
            let now = this.rate;
            let amount = totalLength - (totalLength * now) / 100;
            title.text(Math.floor(now));
            circle.css({ strokeDashoffset: amount });
          },
        }
      );
    });
  }
});