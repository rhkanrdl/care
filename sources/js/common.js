$(document).ready(function() {





    $( ".util-menu a").on("click", function(){
        $( "#main-menu>ul").removeClass("menu");
        $( "#main-menu>ul").addClass("all-menu");
        $( ".menuClose").addClass("show");
        $( "#main-menu>ul>li:first-child>h2>a" ).focus();
        $(this).addClass("hide");



    });



    $( ".menuClose").on("click", function(){
        $( "#main-menu>ul").addClass("menu");
        $( "#main-menu>ul").removeClass("all-menu");
        $( ".menuClose").removeClass("show");
        $( ".util-menu a").removeClass("hide");

        
        $( ".util-menu a" ).focus();
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
        $(this).parent().parent().find("div").removeClass("on");
      });
            

    $( ".util-menu" ).focusin(function() {
        $( "#main-menu").removeClass("on");     
        $( "#main-menu h2 a").removeClass("on")
        $(this).parent().parent().find("div").removeClass("on");    
      });





    $("div.tab-list p.news-img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });



    $(".material_wrap a.tablink").click(function() {
        $(".material_wrap div.tab-content ").removeClass("active");
        $(".material_wrap a.tablink").removeClass("active");
        $(this).addClass("active");
        $(this).parent().addClass("active");

        return false;
    });

    $(".material_wrap a.tablink").focusin(function(){
        $(".material_wrap div.tab-content ").removeClass("active");
        $(".material_wrap a.tablink").removeClass("active");
        $(this).addClass("active");
        $(this).parent().addClass("active");

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




    for (var i = 1; i < 4; i++) {

        $('li.notice0' + i + ' div.border').slick({
            autoplay: false,
            accessibility: false,
            speed: 1000,
            slidesToShow: 2,
            dots: false,
            infinite: false,
            vertical: true,
            draggable: false,
            nextArrow: $('li.notice0' + i + ' .right'),
            prevArrow: $('li.notice0' + i + ' .left')
        });
    }

    // bxslider(mainSlide)

try {

    var mainSlider = $('.slider').bxSlider({
        auto: true, 
        speed: 500, 
        pause: 4000, 
        mode:'fade', 
        pager: true,
        accessibility: false,
        controls: true,
        touchEnabled : false,
        
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
