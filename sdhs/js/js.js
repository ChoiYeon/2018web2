
$(document).ready(function () {
    var img = $("#slide img");
    var max = img.length-1;
    var cnt = 0;
    var a=0;
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
         a=0;
     })

    function slide_show() {
        $(img[cnt]).animate({"left":"100%"}, function () {
            $(this).css({"left": "-100%"});
        });
        cnt++;
        if (cnt > max) cnt = 0;
        $(img[cnt]).animate({"left": "0"});
        console.log(cnt);
    }

    setInterval(slide_show,2000);


});
