
$(document).ready(function () {
    var img = $("#slide img");
    var max = img.length-1;
    var cnt = 0;
    var img1 = $("#banner img");
    var max1 = img1.length-1;
    var a=0;
    var cnt1=0;


     $("#login>ul>li").eq(1).click(function () {
         if (a == 0) {
             $("#popup_register").fadeIn();
             a=1
         }
          })
     $("#login>ul>li").eq(0).click(function () {
         if (a==0) {
            $("#popup_login").fadeIn();
         }
         a=1;
     })
     $("#cancel").click(function () {
         $("#popup_register").fadeOut();
         a=0;
     })
     $("#lg_cancel").click(function () {
         $("#popup_login").fadeOut();
         a = 0;
         //로그인팝업
     })
    $("#cal tr td").click(function () {
        $("#cal tr td").removeClass("click")
        $(this).addClass("click")
    })


    function slide_show() {
        $(img[cnt]).animate({"left":"100%"}, function () {
            $(this).css({"left": "-100%"});
        });
        cnt++;
        if (cnt > max) cnt = 0;
        $(img[cnt]).animate({"left": "0"});
        //슬라이드
    }
    setInterval(slide_show,2000);
    function banner_show() {
        $(img1[cnt1]).animate({"left":"100%"}, function () {
            $(this).css({"left": "-100%"});
        });
        cnt1++;
        if (cnt1 > max1) cnt1 = 0;
        $(img1[cnt1]).animate({"left": "0"});
        //배너슬라이드
    }
    setInterval(banner_show,4000);




});
