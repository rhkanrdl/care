$(document).ready(function() {

    $("div.tab-contents p.news-img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".gnb_main ul.menu>li>h2").on("mouseenter", function() {

        $("ul.menu>li>div>ul").removeClass("on");
        $(this).parent().find("ul").addClass("on");

        $(".gnb_main ul.menu").addClass("active");

        $(".gnb_main ul.menu>li>h2").removeClass("on");
        $(this).addClass("on");

        $(".home_btn").addClass("active");
    });

    $(".gnb_main #header").on("mouseleave", function() {

        $("ul.menu>li>div>ul").addClass("on");
        $(this).parent().find("ul").removeClass("on");

        $(".gnb_main ul.menu").removeClass("active");

        $(".gnb_main ul.menu>li>h2").removeClass("on");

        $(".home_btn").removeClass("active");
    });

    $(".gnb_main .util-menu a").click(function() {
        $(".util-menu a").toggleClass("on");

        return false;
    });

    $(".gnb_main .util-menu a").click(function() {
        $(".util-menu a").toggleClass("on");
        $("nav#main-menu button").toggleClass("bg");
        $("body").scrollTop(0);
        $("nav#main-menu button.bg").css("height", $(document).height()-100);
        $("nav#main-menu").toggleClass("show");
        $("nav#main-menu>ul").toggleClass("allmenu");

        $("nav#main-menu>ul>li:first-child>h2>a").focus();

        if ($("nav#main-menu>ul").hasClass("allmenu")) {
            $('nav#main-menu>ul').removeClass("menu");
        } else {
            $('nav#main-menu>ul').addClass("menu");
        }

        return false;
    });

    $(document).on("click",".bg",function(){
        $(".util-menu a").click();
    })


    // gnb_sub
    $(".gnb_sub ul.menu>li>h2").on("mouseenter", function() {

        $(".gnb_sub ul.menu>li").removeClass("on");
        $(this).parent().addClass("on");

    });
    

    $(".gnb_sub header").on("mouseleave", function() {

        $(".gnb_sub ul.menu>li").removeClass("on");
    });

    $(".gnb_sub .util-menu a").click(function() {
        $(".util-menu a").toggleClass("on");

        return false;
    });

    $(".gnb_sub .util-menu a").click(function() {
        $(".util-menu a").toggleClass("on");
        $("nav#main-menu button").toggleClass("bg");
        $("body").scrollTop(0);
        $("nav#main-menu button.bg").css("height", $(document).height()-100);
        $("nav#main-menu").toggleClass("show");
        $("nav#main-menu>ul").toggleClass("allmenu");

        $("nav#main-menu>ul>li:first-child>h2>a").focus();

        if ($("nav#main-menu>ul").hasClass("allmenu")) {
            $('nav#main-menu>ul').removeClass("menu");
        } else {
            $('nav#main-menu>ul').addClass("menu");
        }

        return false;
    });

    $(".material_wrap .tabs a.tablink").click(function() {
        var tabs = $(this).attr("data");
        $(".material_wrap .tabs a.tablink").removeClass("active");
        $(this).addClass("active");
        $(".material_wrap div.tab-contents ul").removeClass("active");
        $(".material_wrap div.tab-contents ul#" + tabs).addClass("active");

        return false;
    });

    $(".contents .tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".contents .tabs a").removeClass("active");
        $(this).addClass("active");
        $(".contents div.tab_contents").removeClass("active");
        $(".contents #" + tabs).addClass("active");

        return false;
    });




    for(var i=1;i<4;i++) {

        $('li.notice0'+ i +' div.border').slick({
            autoplay:false,
            speed: 1000,
            slidesToShow: 2,
            dots:false,
            infinite: true,
            vertical:true,
            draggable:false,
            nextArrow:$('li.notice0'+ i +' .right'),
            prevArrow:$('li.notice0'+ i +' .left')
        });
    }




});