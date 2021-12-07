$(function(){
  // scrollbar 바꾸기
  $('.scrollbar-inner').scrollbar();
  // swiper main visual slide
  var swiper1 = new Swiper('.sec-1 .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
   navigation: {
     nextEl: '.sec-1 .swiper-button-next',
     prevEl: '.sec-1 .swiper-button-prev',
   },
    loop:true,
    autoplay:{
     delay:3000
    },
  });
  // section1 fixed 이미지 유동적 높이 조절, 높이에 따른 section2의 top값 조절
  $(window).resize(function(){
    windowW=$(window).width();
    windowH=$(window).height();
    if(windowW<1200){
      sh=$('.sec-1 .swiper-container').height();
      $('.sec-1').height(sh);
      $('.sec-2').css('top',sh);
      $('footer').css('top',sh);
    }else{
      $('.sec-1').removeAttr('style');
      $('.sec-2').css('top',windowH);
      $('footer').css('top',windowH);
    }
  }).resize();

  // menu click;


  $('header > button').click(function(){
    $(this).find('i').toggleClass('fa-bars fa-times');
    if($('nav').hasClass('menuopen')){
      $('nav').removeClass('menuopen');
      $('nav').removeClass('submenuopen')
    }else{
      $('nav').addClass('menuopen');
    }
  });

  $('.gnb > li > a').click(function(){
    $('.gnb > li > a').removeClass('active');
    $(this).addClass('active');
    $('.gnb > li > ul').hide();
    $(this).next('ul').show();
    $('nav').addClass('submenuopen');


  });


  var swiper2 = new Swiper('.model .swiper-container', {
    slidesPerView:3,
    loop:true,
    centeredSlides:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.model .swiper-button-next',
      prevEl: '.model .swiper-button-prev',
    },
    spaceBetween: 30,
      breakpoints : {// 반응형
	      991 : { // 테블릿
		         slidesPerView : 2,
	      },
	      767 : {  // 모바일
		          slidesPerView : 1
	      },
    }
  });



  // model popup창 열기

  $('.model > div button').click(function(){
    $('.model-popup').css('display','block')
  });
  $('.model-popup .close').click(function(){
    $('.model-popup').css('display','none')
  });

  // promotion tabmenu
  var flag=true;
  $('.pro-nav a').click(function(e){
    e.preventDefault();

    id=$(this).attr('href');

    $('.pro-nav a').removeClass('active');
    $(this).addClass('active');

    $('.pro-content > div').removeClass('active');
    $(id).addClass('active');

  });

  $('.mobile-pro-nav a').click(function(e){
    e.preventDefault();

    id=$(this).attr('href');

    $('.mobile-pro-nav a').removeClass('active');
    $(this).addClass('active');

    $('.pro-content > div').removeClass('active');
    $(id).addClass('active');

  });

  // test-drive-popup창 열기
  $('.test-drive button').click(function(){
    $('.test-drive-popup').css('display','block');

    var imgtitle=$(this).prev('.btn-wrap>span').text();
    var imgget=$(this).parents('.wrap').find('img').attr('src');

    $('.test-drive-img b').text(imgtitle);
    $('.test-drive-img img').attr('src',imgget);
  });

  $('.test-drive-popup .close').click(function(){
    $('.test-drive-popup').css('display','none')
  });

  // mobile footer
  $('footer .mobile').click(function(e){
    e.preventDefault();
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    $(this).next('ul').toggleClass('infoopen infoclose');
  });

});
  // google maps

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // 위도, 경도값 넣기
    center: {lat: 37.482247, lng: 127.014289},
    zoom: 18,
  });

  var contentString = '<div id="content">'+
           '<div id="siteNotice" >'+
           '</div>'+
           '<h1 id="firstHeading" class="firstHeading">지프 전시장 서초지점</h1>'+
           '<p><b>위치</b> : 서울특별시 서초구 서초동 1450-4</p>'+
           '<p><b>전화번호</b> : 02-525-0040</p>'+
           '<p><b>영업시간</b> : 오전 10:00 ~ 오후 08:00</p>'+
           '</div>'
 ;
  var infowindow = new google.maps.InfoWindow({
           content: contentString
  });

  var marker = new google.maps.Marker({
    position: {lat: 37.482247, lng: 127.014289},
    map: map,
    title: '지프 전시장 서초지점'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

};
