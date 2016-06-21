$(function () {
    var a = $(".content");
    //获取容器的尺寸
    var width = a.width();
    var height = a.height();
    var b = a.find(":first"); //获取第一个子节点
    var c = b.find("li"); //获取li
    b.css({
        width: 300 + "%",
        height: 100 + "%"
    });
    //设置每个li的宽度
    $.each(c, function (index) {
        var d = c.eq(index);
        d.css({
            width: 33.33 + "%",
            height: 100 + "%"
        });
    });
    var br = $(".bird");
    var p = $(".person");
    var ld = $(".door_l");
    var rd = $(".door_r");
    var cld1 = $(".cloud1");
    var cld2 = $(".cloud2");
    var sun = $(".sun");
    var shop = $(".shop");
    var shop_w = shop.width();
    var shop_h = shop.height();
    var shop_t = shop.offset().top;
    var shop_l = shop.offset().left;
    var p_w = p.width();
    var p_h = p.height();
    var p_t = p.offset().top;
    var p_l = p.offset().left;
    var p_s = shop_l + shop_w / 4 - p_w / 2; //人物第一段走的路程
    var pc = $(".pageC");
    var pc_w = pc.width();
    var pc_h = pc.height();
    var r = $(".ring");
    var p2 = $(".person2");
    var p2_w = p2.width();
    var p2_h = p2.height();
    var p2_t = p2.offset().top;
    var p2_l = p2.offset().left;
    var ado_1 = $(".ado_1")[0]; //获取音频对象
    var ado_2 = $(".ado_2")[0] || $(".ado_2")[1]; //获取音频对象2
    //设置ul的宽度

    function transform(element, t1, num, t2, x, y) {
        element.css({
            "transition-duration": t1 + "ms",
            "transition-timing-function": num,
            "transition-delay": t2 + "ms",
            "transform": "translate(" + x + "px," + y + "px)"
        });
    }
    var cw = c.width();
    var ch = c.height();
    var lc = (p_s + shop_w / 2) - (p_w / 1.5) - cw; //x
    var p_s2 = p_h + p_t - (shop_h + shop_t); //y
    var y = p_t + p_h - (p2_h + p2_t);
    var x = (46.5 * pc_w) / 100;
    var y2 = p2_h + p2_t;
    p2.css("backgroundPosition", "19% 3px");
    transform(sun, 15000, 'linear', 0, -cw, ch / 3);
    transform(cld1, 60000, 'linear', 0, cw, 0);
    transform(cld2, 60000, 'linear', 0, -cw, 0);
    transform(p, 4000, 'linear', 0, cw / 1.5, 0); //人物走动
    transform(b, 5000, 'linear', 4000, -cw, 0); //整个背景滚动
    setTimeout(function () {
        transform(p, 4000, 'linear', 0, p_s - cw, 0); //人物走动,2走到商店
    }, 4100);
    setTimeout(function () {
        p.addClass("person_state"); //人物暂停走动
        transform(ld, 1000, 'linear', 0, -shop_w / 2, 0); //开门，左
        transform(rd, 1000, 'linear', 0, shop_w / 2, 0); //开门，右
    }, 9600);
    setTimeout(function () {
        p.removeClass("person_state"); //人物继续走动
        transform(p, 2000, 'linear', 0, lc, -p_s2); //人物走动,3走进商店
        transform(br, 12000, 'linear', 0, -2 * width, 0);
        p.css({
            "width": "3%",
            "height": "10%",
            "opacity": "0"
        });
    }, 10600);
    setTimeout(function () {
        transform(ld, 1000, 'linear', 0, 0, 0); //关门，左
        transform(rd, 1000, 'linear', 0, 0, 0); //关门，右
    }, 12000);
    setTimeout(function () {
        r.css("display", "block"); //灯亮
    }, 13000);
    setTimeout(function () {
        transform(ld, 1000, 'linear', 0, -shop_w / 2, 0); //开门，左
        transform(rd, 1000, 'linear', 0, shop_w / 2, 0); //开门，右
    }, 14000);
    setTimeout(function () {
        transform(p, 2000, 'linear', 0, lc, 0); //人物走动，4走出商店
        p.css({
            "background-image": "url(images/person/boy-flower.png)",
            "width": "4%",
            "height": "18%",
            "opacity": "1"
        });
    }, 15000);
    setTimeout(function () {
        transform(ld, 1000, 'linear', 0, 0, 0); //关门，左
        transform(rd, 1000, 'linear', 0, 0, 0); //关门，右
        transform(p, 4000, 'linear', 0, width / 1.2, 0); //人物走动,5
    }, 17000);
    setTimeout(function () {
        r.css("display", "none"); //灯关闭
        transform(p, 4000, 'linear', 0, pc_w / 4.2, 0); //人物走动,6,走到桥下
        transform(b, 4000, 'linear', 0, -2 * width, 0); //整个背景滚动
    }, 18000);
    setTimeout(function () {
        transform(p, 2000, "linear", 0, pc_w / 2.9, -y); //上桥
    }, 22000)
    setTimeout(function () {
        transform(p, 2000, "linear", 0, x, -y); //走到女生附近
    }, 24000)
    setTimeout(function () {//更改背景图片,动画播放次数 
        p.removeClass("person");
        p.addClass("person_state");
        p.addClass("person_count");
        p.css({
            "background": "url(images/person/boy-rotate.png) no-repeat",
            "backgroundSize": "110% 600%",
            "backgroundPosition": "30% -0.6%"
        });
        p.css({
            "transition-duration": "0ms"
        });
    }, 26000)
    setTimeout(function () {
        p.removeClass("person_state");
        p.css({
            "webkitAnimation": "person1_slow 950ms steps(1,start)  1",
            "Animation": "person1_slow 950ms steps(1,start)  1",
            "backgroundPosition": "75% 99.7%"
        });
        p2.addClass("girl");
        p2.css("backgroundPosition", "65% 3px");
    }, 28000);
    //飘花效果
    var str = "";
    var str2 = "";
    var mw = $(".flower").width();
    var mh = $(".flower").height();
    for (var i = 0; i < 120; i++) {
        var fx = parseInt(Math.random() * mw);
        var fy = parseInt(Math.random() * mh);
        var num = parseInt(Math.random() * 6);
        str += "<div class='flower" + (num + 1) + "' style='top:" + fy + "px;left:" + fx + "px'></div>";
    }
    $(".fly").append(str);
    for (var i = 0; i < 120; i++) {
        var fx = parseInt(Math.random() * mw);
        var fy = parseInt(Math.random() * mh);
        var num = parseInt(Math.random() * 6);
        str2 += "<div class='flower" + (num + 1) + "' style='top:" + fy + "px;left:" + fx + "px'></div>";
    }
    $(".fly2").append(str2);
    setTimeout(function () {
        $(".fly").css({
            "webkitAnimation": "flow_1 16s linear infinite",
            "Animation": "flow_1 16s linear infinite"
        });
        $(".fly2").css({
            "webkitAnimation": "flow_2 16s linear 7.8s infinite",
            "Animation": "flow_2 16s linear 7.8s infinite"
        });
        ado_2.play();
    }, 32000);

    //            随机星星闪烁
    var str_li = $(".stars li");
    for (var i = 0; i < 1000; i++) {
        var t1 = setInterval(function () {
            var num = parseInt(Math.random() * 6);
            str_li.eq(num).css({
                "webkitAnimationName": "str",
                "AnimationName": "str"
            });
        }, 2000);
        clearInterval(t1());
    }
});