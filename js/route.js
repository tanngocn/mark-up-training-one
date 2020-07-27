document.addEventListener(
  "DOMContentLoaded",
  function () {
    var navList = document.querySelectorAll(".nav-list__item");
    var currentRoute = document.querySelector(".currentPage");
    var title = document.querySelector(".main__title");
    navList.forEach(function (item) {
      item.addEventListener("click", function () {
        for (var i = 0; i < navList.length; i++) {
          navList[i].classList.remove("active");
        }
        this.classList.add("active");
        currentRoute.innerHTML=this.innerHTML;
        title.innerHTML=this.innerHTML;
      });
    });

  },
  false
);
