document.addEventListener(
    "DOMContentLoaded",
    function () {
      var slides = document.querySelectorAll(".list-link__item");
      var nextBtn = document.querySelector(".list-angle .next");
      var prevBtn = document.querySelector(".previous");
      var numberSlides = slides.length;
      var status = "stay";
      var current = 0;
  
      var timeOut = setInterval(function () {
          clickEvent("nextBtn");
        }, 6000);
  
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
          nameButton == "nextBtn" ? "go-up" : "go-up-prev"
        );
        slideNext.classList.add(nameButton == "nextBtn" ? "go-down" : "go-down-prev");
  //   current slides
        var controlSlideCurrent = function () {
          this.classList.remove("active");
          this.classList.remove(
            nameButton == "nextBtn" ? "go-up" : "go-up-prev"
          );
          statusAmongSlide++;
          status = statusAmongSlide == 2 ? "stay" : status;
        };
  
        var controlSlideNext = function () {
          this.classList.remove(nameButton == "nextBtn" ? "go-down" : "go-down-prev");
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
        clickEvent("prevBtn");
        clearInterval(timeOut);
      };
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
    },
    false
  );
  