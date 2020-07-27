
$(document).ready(function() {
    var list = $(".posts-list__item");
    var positionPost = $(".posts__title");
    var positionPostRelative= $(".posts-relative").offset().top;
    $(window).scroll(function() {

        var position = $('body,html').scrollTop();
        var positionReading= $(".reading-much-block").offset().top;
        console.log(position, positionReading);
        if(positionPost==undefined && position > positionPost.offset().top){
            list.addClass("animate__animated animate__bounceInLeft")
        }
        if( position > positionPostRelative){
            $("li.posts-relative-block-item").addClass("animate__animated animate__bounceInRight")
        }
        if( position > positionReading){
            $(".list-reading-much").addClass("animate__animated animate__bounceInRight")
        }
        if(position>=200){
            $(".main-nav").addClass("fixed");
            $(".nav-mobile").addClass("fixed");
        }else{
            $(".main-nav").removeClass("fixed");
            $(".nav-mobile").removeClass("fixed");
        }
// animate
    });
  

});