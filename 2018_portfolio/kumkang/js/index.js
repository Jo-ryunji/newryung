$(function(){
  // MAIN VISUAL SLIDE
  var swiper1 = new Swiper('.main-visual > .swiper-container', {
      navigation: {
        nextEl: '.main-visual .swiper-button-next',
        prevEl: '.main-visual .swiper-button-prev',
      },
      speed:2000,
      autoplay:{
        delay:3000
      },
      loop:true,
      pagination:true,
    });

    // TAB MENU
    var flag=true;
    $('.best .list a').click(function(e){
      e.preventDefault();

      id=$(this).attr('href');

      $('.best .list a').removeClass('active');
      $(this).addClass('active');

      $('.best .item-wrap > div').removeClass('active');
      $(id).addClass('active');
    });

    $(window).resize(function(){
      bestH=$('.item-wrap > .active').height();

      $('div.item-wrap').css('height',bestH);
      $('.best .item-wrap .wrap .item-img').css('height',bestH);

    }).resize();

    // popup close
    $('.popup .close').on('click',function(){
      $(this).parents('.popup').css('display','none').css('top','-100%');
    });
    // LOGIN POPUP
    $('.login').on('click',function(){
      // click 시 popup open.
      $('.login-popup').css('display','block').css('top',0);

      // content color change
      $('#id, #password').focus(function(){
        $(this).prev().addClass('change');
      });
      $('#id, #password').focusout(function(){
        $(this).prev().removeClass('change');
      });
    });

    // SEARCH popup
    $('.search').on('click',function(){
      $('.search-popup').css('display','block').css('top',0);
    })
});
