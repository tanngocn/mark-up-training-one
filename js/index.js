document.addEventListener(
  "DOMContentLoaded",
  function () {
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


    let toggleBlock= document.querySelector('.toggle-block');
    let bgOverlay = document.querySelector('.bg-overlay');
    let slideBar = document.querySelector('.main-nav');
    let closeToggle = document.querySelector('.close-toggle');
    let zoomImg = document.querySelector('.post-img');
    let selectImg = document.querySelector('.image');
    let checkBox = document.querySelector(".save span");
    toggleBlock.addEventListener("click", function(){
        bgOverlay.classList.add("active");
        slideBar.classList.add("active");
        closeToggle.classList.add("active");
    })

    closeToggle.addEventListener("click",function(){
      bgOverlay.classList.remove("active");
        slideBar.classList.remove("active");
        closeToggle.classList.remove("active");
    })
    if(zoomImg){
      zoomImg.addEventListener("click",function(){
        selectImg.classList.toggle("active")
      })
    }
    if(checkBox){
      checkBox.addEventListener("click", function(){
          checkBox.classList.toggle("active");
      })
    }


  },
  false
);
