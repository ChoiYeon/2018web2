
$(document).ready(function () {
    var img = $("#slide img");
    var max = img.length-1;
    var cnt = 0;
    var img1 = $("#banner img");
    var max1 = img1.length-1;
    var a=0;
    var cnt1=0;
    var si=0;
    $("#LA").click(function () {
        $(img).not(img[cnt]).css({"left":"100%"})
        clearInterval(si);
        $(img[cnt]).animate({"left":"-100%"},200, function () {
            $(this).css({"left": "100%"});
        })
        cnt--;
        if (cnt < 0) cnt = 2;
        $(img[cnt]).animate({"left":"0"},200)
        console.log(cnt);
        si=setInterval(slide_show,2000);
    })
    $("#RA").click(function () {
        clearInterval(si);
        $(img).not(img[cnt]).css({"left":"-100%"})
        $(img[cnt]).animate({"left":"100%"},200, function () {
            $(this).css({"left": "-100%"});
        });
        cnt++;
        if (cnt > max) cnt = 0;
        $(img[cnt]).animate({"left": "0"},200);
        console.log(cnt);
        si=setInterval(slide_show,2000);
    })

     $("#login>ul>li").eq(1).click(function () {
         if (a == 0) {
             $("#popup_register").fadeIn();
             $("#mask").fadeIn()
             a=1
         }
          })
     $("#login>ul>li").eq(0).click(function () {
         if (a==0) {
            $("#popup_login").fadeIn();
             $("#mask").fadeIn()
         }
         a=1;
     })
     $("#cancel").click(function () {
         $("#popup_register").fadeOut();
         $("#mask").fadeOut()
         a=0;
     })
     $("#lg_cancel").click(function () {
         $("#popup_login").fadeOut();
         $("#mask").fadeOut()
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
   si=setInterval(slide_show,2000);
    function banner_show() {
        $(img1[cnt1]).animate({"left":"100%"},200, function () {
            $(this).css({"left": "-100%"});
        });
        cnt1++;
        if (cnt1 > max1) cnt1 = 0;
        $(img1[cnt1]).animate({"left": "0"},200);
        //배너슬라이드
    }
    setInterval(banner_show,4000);




});
