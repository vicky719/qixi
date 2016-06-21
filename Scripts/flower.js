$(function () {
//飘花效果
    var str = "";
    var str2="";
    var mw = $(".flower").width();
    var mh = $(".flower").height();
    for (var i = 0; i < 120; i++) {
        var fx = parseInt(Math.random() * mw);
        var fy=parseInt(Math.random() * mh);
        var num = parseInt(Math.random() * 6);
        str += "<div class='flower" + (num + 1) + "' style='top:"+fy+"px;left:" + fx + "px'></div>";
    }
    $(".fly").append(str);
    for (var i = 0; i < 120; i++) {
        var fx = parseInt(Math.random() * mw);
        var fy=parseInt(Math.random() * mh);
        var num = parseInt(Math.random() * 6);
        str2 += "<div class='flower" + (num + 1) + "' style='top:"+fy+"px;left:" + fx + "px'></div>";
    }
    $(".fly2").append(str2);
 
   });