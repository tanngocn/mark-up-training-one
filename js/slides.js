document.addEventListener(
  "DOMContentLoaded",
  function () {
    var slides = document.querySelectorAll(".slides-item");
    var nextBtn = document.querySelector("span.slides--next");
    var prevBtn = document.querySelector("span.slides--previous");
    var numberSlides = slides.length;
    var status = "stay";
    var current = 0;
    var timeOut = setInterval(function () {
      clickEvent("nextBtn");
    }, 8000);

    var clickEvent = function (nameButton) {
      if (status == "running") {
        return false;
      }
      status = "running";
      var statusAmongSlide = 0;
      var slideCurrent = slides[current];
      current =
        nameButton == "nextBtn"
          ? current < numberSlides - 1
            ? current + 1
            : 0
          : current > 0
          ? current - 1
          : numberSlides - 1;
      var slideNext = slides[current];

      slideCurrent.classList.add(
        nameButton == "nextBtn" ? "go-out" : "go-out-prev"
      );
      slideNext.classList.add(nameButton == "nextBtn" ? "go-in" : "go-in-prev");

      var controlSlideCurrent = function () {
        this.classList.remove("active");
        this.classList.remove(
          nameButton == "nextBtn" ? "go-out" : "go-out-prev"
        );
        statusAmongSlide++;
        status = statusAmongSlide == 2 ? "stay" : status;
      };

      var controlSlideNext = function () {
        this.classList.remove(nameButton == "nextBtn" ? "go-in" : "go-in-prev");
        this.classList.add("active");
        statusAmongSlide++;
        status = statusAmongSlide == 2 ? "stay" : status;
      };

      slideCurrent.addEventListener("webkitAnimationEnd", controlSlideCurrent);
      slideNext.addEventListener("webkitAnimationEnd", controlSlideNext);
    };

    var nextSlide = function () {
      clearInterval(timeOut);
      clickEvent("nextBtn");
    };
    var prevSlide = function () {
      clearInterval(timeOut);
      clickEvent("prevBtn");
    };
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  },
  false
);
