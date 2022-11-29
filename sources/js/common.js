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

  $("span.image").each(function() {
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
  // $(".agency-open").focusin(function(){
  //     $(this).toggleClass("on"); 
  // });
  $(".agency-link a:last-of-type()").focusout(function(){
      $(".agency-open").toggleClass("on"); 
  });






  // bxslider(mainSlide)



  $(".photo_zone div.tabs a").click(function() {
      $(".photo_zone div.photo_list").removeClass("on");
      $(".photo_zone div.tabs a").removeClass("on");

      $(this).addClass("on");
      $(".photo_zone div.photo_list."+ $(this).attr("data")).addClass("on");

      return false;
  });



      // $('.photo_zone .photo_list.tab01 div.outline').slick({
      //     infinite: true,
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     nextArrow: $('.photo_zone .photo_list.tab01 .right'),
      //     prevArrow: $('.photo_zone .photo_list.tab01 .left')
      // });

      // $('.photo_zone .photo_list.tab02 div.outline').slick({
      //     infinite: true,
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     nextArrow: $('.photo_zone .photo_list.tab02 .right'),
      //     prevArrow: $('.photo_zone .photo_list.tab02 .left')
      // });

      // $('.photo_zone .photo_list.tab03 div.outline').slick({
      //     infinite: true,
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     nextArrow: $('.photo_zone .photo_list.tab03 .right'),
      //     prevArrow: $('.photo_zone .photo_list.tab03 .left')
      // });



try {

  var mainSlider = $('.mainSlider').bxSlider({
      auto: false, 
      minSlides: 2,
      maxSlides: 3,
      moveSlides: 1,
      speed: 500, 
      pause: 4000, 
      pager: false,
      accessibility: false,
      controls: false,
      slideWidth:376,
      
      touchEnabled: false,
      autoControlsCombine: true,
      autoControlsSelector: '.main_issue .stop',
      
      
      onSliderLoad: function(){

          $(".bx-clone a").prop("tabIndex","-1");
          $(".bx-pager-item a").prop("tabIndex","-1");

          $('.mainslider>li').eq(1).addClass('active-slide');
  
      },
  
      onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
  
          $('.active-slide').removeClass('active-slide');
          $('.mainslider>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');

          $(".mainslider").children("li").each(function(){
              if($(this).attr("aria-hidden") == "false"){
                  $(this).find("a").attr("tabIndex","0");
              }
              
              // else{
              //     $(this).find("a").attr("tabIndex","-1");
              // }
  
          });
  
      }
  
  });


  var newsSlider = $('.main_news .notice .outline').bxSlider({
      // auto: true, 
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      speed: 500, 
      pause: 4000, 
      pager: false,
      accessibility: false,
      controls: false,
      slideWidth:254,
      touchEnabled: false,
      autoControlsCombine: true,
      
      
      onSliderLoad: function(){

          $(".main_news .notice .bx-clone a").prop("tabIndex","-1");
          $(".main_news .notice .bx-pager-item a").prop("tabIndex","-1");

          $('.main_news .notice .outline>li').eq(1).addClass('active-slide');
  
      },
  
      onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
  
          $('.main_news .notice .active-slide').removeClass('active-slide');
          $('.main_news .notice .outline>li').eq(currentSlideHtmlObject).addClass('active-slide');

          $(".main_news .notice .outline").children("li").each(function(){
              if($(this).attr("aria-hidden") == "false"){
                  $(this).find("a").attr("tabIndex","0");
              }
              
              // else{
              //     $(this).find("a").attr("tabIndex","-1");
              // }
  
          });
  
      }
  
  });



  var outSlider = $('.main_news .out_news .outline').bxSlider({
      // auto: true, 
      mode:"vertical",
      minSlides: 6,
      maxSlides: 6,
      moveSlides: 1,
      speed: 500, 
      pause: 4000, 
      pager: false,
      accessibility: false,
      controls: false,
      touchEnabled: false,
      autoControlsCombine: true,
      
      
      onSliderLoad: function(){

          $(".main_news .out_news .bx-clone a").prop("tabIndex","-1");
          $(".main_news .out_news .bx-pager-item a").prop("tabIndex","-1");

          $('.main_news .out_news .outline>li').eq(1).addClass('active-slide');
  
      },
  
      onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
  
          $('.main_news .out_news .active-slide').removeClass('active-slide');
          $('.main_news .out_news .outline>li').eq(currentSlideHtmlObject).addClass('active-slide');

          $(".main_news .out_news .outline").children("li").each(function(){
              if($(this).attr("aria-hidden") == "false"){
                  $(this).find("a").attr("tabIndex","0");
              }
              
              // else{
              //     $(this).find("a").attr("tabIndex","-1");
              // }
  
          });
  
      }
  
  });


  var tab01Slider = $('.photo_list.tab01 ul').bxSlider({
      // auto: true, 
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      speed: 500, 
      pause: 4000, 
      pager: false,
      accessibility: false,
      controls: false,
      slideWidth:278,
      touchEnabled: false,
      autoControlsCombine: true,
      
      
      onSliderLoad: function(){

          $(".photo_list.tab01 .bx-clone a").prop("tabIndex","-1");
          $(".photo_list.tab01 .bx-pager-item a").prop("tabIndex","-1");

          $('.photo_list.tab01 .outline>li').eq(1).addClass('active-slide');
  
      },
  
      onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
  
          $('.photo_list.tab01 .active-slide').removeClass('active-slide');
          $('.photo_list.tab01 .outline>li').eq(currentSlideHtmlObject).addClass('active-slide');

          $(".photo_list.tab01 .outline").children("li").each(function(){
              if($(this).attr("aria-hidden") == "false"){
                  $(this).find("a").attr("tabIndex","0");
              }
              
              // else{
              //     $(this).find("a").attr("tabIndex","-1");
              // }
  
          });
  
      }
  
  });

  var tab02Slider = $('.photo_list.tab02 ul').bxSlider({
      // auto: true, 
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      speed: 500, 
      pause: 4000, 
      pager: false,
      accessibility: false,
      controls: false,
      slideWidth:278,
      touchEnabled: false,
      autoControlsCombine: true,
      
      
      onSliderLoad: function(){

          $(".photo_list.tab02 .bx-clone a").prop("tabIndex","-1");
          $(".photo_list.tab02 .bx-pager-item a").prop("tabIndex","-1");

          $('.photo_list.tab02 .outline>li').eq(1).addClass('active-slide');
  
      },
  
      onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
  
          $('.photo_list.tab02 .active-slide').removeClass('active-slide');
          $('.photo_list.tab02 .outline>li').eq(currentSlideHtmlObject).addClass('active-slide');

          $(".photo_list.tab02 .outline").children("li").each(function(){
              if($(this).attr("aria-hidden") == "false"){
                  $(this).find("a").attr("tabIndex","0");
              }
              
              // else{
              //     $(this).find("a").attr("tabIndex","-1");
              // }
  
          });
  
      }
  
  });







  $(".main_issue .prev").click(function(){
      mainSlider.goToPrevSlide();
      mainSlider.startAuto();
    });
    $(".main_issue .next").click(function(){
      mainSlider.goToNextSlide();
      mainSlider.startAuto();
    });
  
    $(".main_issue .stop").click(function(){
      mainSlider.stopAuto();
    });

    $(".newsprev").click(function(){

      newsSlider.goToPrevSlide();
      newsSlider.startAuto();
    });
    $(".newsnext").click(function(){
      newsSlider.goToNextSlide();
      newsSlider.startAuto();
    });
  


    $(".outprev").click(function(){

      outSlider.goToPrevSlide();
      outSlider.startAuto();
    });
    $(".outnext").click(function(){
      outSlider.goToNextSlide();
      outSlider.startAuto();

    });
  


    $(".tab01prev").click(function(){

      tab01Slider.goToPrevSlide();
      tab01Slider.startAuto();
    });
    $(".tab01next").click(function(){
      tab01Slider.goToNextSlide();
      tab01Slider.startAuto();

    });
  


    $(".tab02prev").click(function(){

      tab02Slider.goToPrevSlide();
      tab02Slider.startAuto();
    });
    $(".tab02next").click(function(){
      tab02Slider.goToNextSlide();
      tab02Slider.startAuto();

    });





  // 웹 접근성
  
  $('.mainslider a').focusin(function () {
      mainSlider.stopAuto();
  });
          
  $('.mainslider a').focusin(function () {
      mainSlider.stopAuto();
  });
          

          
  $('.photo_list a').focusin(function () {

      $('.photo_list').removeClass('on');
      $(".photo_zone .tabs a").removeClass('on');


      if ($(this).parent().hasClass("letter")) {

          $(".photo_zone .tabs a:first-of-type").addClass("on");
          $(".photo_zone .tab01").addClass("on");
      } else {

          $(".photo_zone .tabs a:last-of-type").addClass("on");
          $(".photo_zone .tab02").addClass("on");

      }
  });
          




  // $('div.notice01 div.outline').slick({
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     nextArrow: $('div.notice01 .right'),
  //     prevArrow: $('div.notice01 .left'),
  //     focusOnSelect: true,
  // });

  // $('div.out_news div.outline').slick({
  //     infinite: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     vertical:true,
  //     nextArrow: $('div.out_news .right'),
  //     prevArrow: $('div.out_news .left'),
  //     focusOnSelect: true,
  // });




  
  
  
} catch(e) {}



});
