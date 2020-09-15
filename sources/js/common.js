$(document).ready(function() {





    $( ".util-menu a").on("click", function(){

        if ($( "#main-menu>ul").hasClass("menu")) {

            $( "#main-menu>ul").removeClass("menu");
            $( "#main-menu>ul").addClass("all-menu");
            $( ".menuClose").addClass("show");
            $( "#main-menu>ul>li:first-child>h2>a" ).focus();
            $(this).addClass("hide");
        } else {
            $( "#main-menu>ul").addClass("menu");
            $( "#main-menu>ul").removeClass("all-menu");
            $( ".menuClose").removeClass("show");
            $( ".util-menu a").removeClass("hide");
    
            
            $( ".util-menu a" ).focus();
        }


    });





      $( "#main-menu h2 a").focusin(function() {
        $( "#main-menu h2 a").removeClass("on")
        $( this ).addClass("on");
        $( "#main-menu").addClass("on")
        $( "#main-menu>ul>li>div" ).removeClass("on");
        $(this).parent().parent().find("div").addClass("on");
      });
      
        $( "#main-menu h2 a" ).focusout(function() {
        $(this).parent().parent().find("div").addClass("on");
      });

      $( "#main-menu h2 a").on("mouseenter", function() {
        $( "#main-menu h2 a").removeClass("on")
        $( this ).addClass("on");
        $( "#main-menu").addClass("on")
        $( "#main-menu>ul>li>div" ).removeClass("on");
        $(this).parent().parent().find("div").addClass("on");
      });


    $( "#header" ).on("mouseleave", function() {
        $( "#main-menu").removeClass("on");     
        $( "#main-menu h2 a").removeClass("on")
        $(this).find("div").removeClass("on");
      });
            

    $( ".util-menu" ).focusin(function() {
        $( "#main-menu").removeClass("on");     
        $( "#main-menu h2 a").removeClass("on")
        $(this).parent().find("div").removeClass("on");    
      });





    $("p.image").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });










    $(".contents .tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".contents .tabs a").removeClass("active");
        $(this).addClass("active");
        $(".contents div.tab_contents").removeClass("active");
        $(".contents #" + tabs).addClass("active");

        return false;
    });


    $(".center_contents .tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".center_contents .tabs a").removeClass("active");
        $(this).addClass("active");
        $(".center_contents div.tab_contents").removeClass("active");
        $(".center_contents #" + tabs).addClass("active");

        return false;
    });









    $(".agency-open").click(function() {
        $(this).toggleClass("on"); 
    });
    $(".agency-open").focusin(function(){
        $(this).toggleClass("on"); 
    });
    $(".agency-link a:last-of-type()").focusout(function(){
        $(".agency-open").toggleClass("on"); 
    });





    $('div.notice01 div.outline').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: $('div.notice01 .right'),
        prevArrow: $('div.notice01 .left')
    });

    $('div.notice02 div.outline').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: $('div.notice02 .right'),
        prevArrow: $('div.notice02 .left')
    });

    $('div.out_news div.outline').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        nextArrow: $('div.out_news .right'),
        prevArrow: $('div.out_news .left')
    });
    // bxslider(mainSlide)



    $(".photo_zone div.tabs a").click(function() {
        $(".photo_zone div.photo_list").removeClass("on");
        $(".photo_zone div.tabs a").removeClass("on");

        $(this).addClass("on");
        $(".photo_zone div.photo_list."+ $(this).attr("data")).addClass("on");

        return false;
    });



        $('.photo_zone .photo_list.tab01 div.outline').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: $('.photo_zone .photo_list.tab01 .right'),
            prevArrow: $('.photo_zone .photo_list.tab01 .left')
        });

        $('.photo_zone .photo_list.tab02 div.outline').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: $('.photo_zone .photo_list.tab02 .right'),
            prevArrow: $('.photo_zone .photo_list.tab02 .left')
        });

        $('.photo_zone .photo_list.tab03 div.outline').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: $('.photo_zone .photo_list.tab03 .right'),
            prevArrow: $('.photo_zone .photo_list.tab03 .left')
        });



try {

    var mainSlider = $('.slider').bxSlider({
        auto: true, 
        speed: 500, 
        pause: 4000, 
        pager: true,
        accessibility: false,
        controls: true,
        
        onSliderLoad: function(){

            $(".bx-clone").find("a").prop("tabIndex","-1");
            $(".bx-pager-item").find("a").prop("tabIndex","-1");
    
        },
    
        onSlideAfter: function(){
    
            $(".slider").children("li").each(function(){
                if($(this).attr("aria-hidden") == "false"){
                    $(this).find("a").attr("tabIndex","0");
                }else{
                    $(this).find("a").attr("tabIndex","-1");
                }
    
            });
    
        }
    
    });
    
    
    // 웹 접근성
    
    $('.slider a').focusin(function () {
    
        mainSlider.stopAuto();
    
    });
            
    
    
} catch(e) {}



});
