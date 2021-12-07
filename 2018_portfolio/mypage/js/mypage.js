$(function(){

  $(window).scroll(function(){
    // scroll nav
    var windowTop=$(window).scrollTop();
    if(windowTop>0){
      $('header').css('background','rgba(255,255,255,0.5)')
    }else{
      $('header').css('background','none')
    }

    //스크롤스파이
    var intro=$('#intro').offset().top;
    var about=$('#about').offset().top;
    var back=$('#back').offset().top;
    var skill=$('#skill').offset().top;
    var portfolio=$('#portfolio').offset().top;
    var index=0;
    if(windowTop >= 0 && windowTop < about){//intro
      index=0;
    }else if(windowTop >= about && windowTop < skill){//about
      index=1;
    }else if(windowTop >= skill && windowTop < portfolio){//skill
      index=2;
    }else if(windowTop >= portfolio){//portfolio
      index=3;
    }
    $('nav a').removeClass('active');
    $('nav li').eq(index).find('a').addClass('active');
  })
  $(window).trigger('scroll');

  $('nav a').on('click',function(e){
    var id=$(this).attr('href');
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top
    })
    $('nav a').removeClass('active');
    $(this).addClass('active');
  })

  // intro
  var swiper = new Swiper('#intro .swiper-container', {
     speed: 600,
     parallax: true,
     pagination: {
       el: '#intro .swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '#intro .swiper-button-next',
       prevEl: '#intro .swiper-button-prev',
     },
   });


   // profile hashtag

  $('.hashtag li a').click(function(e){
    e.preventDefault();

    id=$(this).attr('href');

    $('.hashtag li a').removeClass('active');
    $(this).addClass('active');

    $('.hash-content > div').removeClass('active');
    $(id).addClass('active');
  });

  // 그래프
  $('.circle.c1').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#ff842a',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });
  $('.circle.c2').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#c83e74',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });
  $('.circle.c3').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#daa03d',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });
  $('.circle.c4').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#686943',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });
  $('.circle.c5').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#2e5d9f',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });
  $('.circle.c6').easyPieChart({
    scaleColor: false,
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#fbc748',
    trackColor: '#ddd' ,
    size: 150,
    animate: 800
  });


  $('.circle').each(function(){
    var percent=$(this).data('percent');

    $(this).find('.num').animate({
        color:percent
        },{
          duration:800,
          step:function(now){
            $(this).text(parseInt(now)+'%');
         },
         complete:function(){
         }
    });
  });




  $(window).resize(function(){
    var imgH=$('#portfolio .img img').height();
    var boxH=$('#portfolio .img').height();

    var trans=imgH-boxH;

    $('#portfolio .img').on({
      mouseenter:function(){
        $(this).children('img').css('marginTop',-trans);
      },
      mouseleave:function(){
        $(this).children('img').css('marginTop',0);
      }
    });
  }).resize();





});
