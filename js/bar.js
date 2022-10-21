$(function () {
  const progressBox = $(".progress-bar");
  const progress0st = $(".animation").offset().top - 600;
  let isAni = false;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= progress0st && !isAni) {
      progressAni();
    }
  });
  function progressAni() {
    progressBox.each(function () {
      let $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      progressBar.animate({ width: progressRate + "%" }, 2500);

      let text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
              progressBox.addClass();
            },
          }
        );
      };
      text();
    });
  }
});
