$(function(){

var models={
  // summit
    summit:{
      name:'GRAND CHEROKEE - SUMMIT',
      colors:['black','blue','brown','brownmetal','ivory','metallic','velvet','white'],
      cars:[
        'img/model-popup/summit/summit_grandcherokee_black.png',
        'img/model-popup/summit/summit_grandcherokee_blue.png',
        'img/model-popup/summit/summit_grandcherokee_brown.png',
        'img/model-popup/summit/summit_grandcherokee_brownmetal.png',
        'img/model-popup/summit/summit_grandcherokee_ivory.png',
        'img/model-popup/summit/summit_grandcherokee_metallic.png',
        'img/model-popup/summit/summit_grandcherokee_velvet.png',
        'img/model-popup/summit/summit_grandcherokee_white.png'
      ],
      info:'Grand Cherokee Summit은 동급 SUV 중 가장 럭셔리한 차의 표준을 제시합니다.'+
          '평행 및 직각 주차 보조 시스템을 비롯한 각종 첨단사양을 제공함으로써'+
          '최상의 안락함과 편리함을 선사합니다.',
      rpm:['@3,600RPM',250],
      kgm:['(KG.M)@1,800RPM',56.0],
      intro:[
        {
          src:'img/model-popup/summit/intro/model_gc_intro1.jpg',
          name:'Exclusive Exterior',
          description:'Grand Cherokee Summit은 한층 스타일리쉬하게 변화된 프론트 페시아와 20인치 광택 알루미늄 휠을 특징으로 합니다.'
        },
        {
          src:'img/model-popup/summit/intro/model_gc_intro2.jpg',
          name:'19-Speaker Harman<br>Kardon® Audio System',
          description:'19-스피커를 탑재한 Harman Kardon의 프리미엄 오디오 시스템은 Grand Cherokee Summit의 실내 음향을 극대화 하기 위해 정밀하게 조율되었습니다.',
        },
        {
          src:'img/model-popup/summit/intro/model_gc_intro3.jpg',
          name:'All-New Signature Leather-Wrapped Interior Package',
          description:'시트와 도어콘솔, 센터콘솔과 글로브박스가 프리미엄 라구나 가죽으로 완성되었습니다.'
        },
        {
          src:'img/model-popup/summit/intro/model_gc_intro4.jpg',
          name:'LaneSense® Lane Departure Warning ',
          description:'차선유지장치가 포함된 LaneSense® 차선이탈 방지 경고 시스템은 차선의 위치를 모니터링 하면서 의도치 않게 차선을 이탈할 시에는 경고와 함께 차량을 다시 차선으로 이동시키게 됩니다.'
        }
      ]
    },
    // overland
    overland:{
      name:'GRAND CHEROKEE - OVERLAND',
      colors:['black','blue','brown','brownmetal','ivory','metallic','silver','velvet','white'],
      cars:[
        'img/model-popup/overland/overland_grandcherokee_black.png',
        'img/model-popup/overland/overland_grandcherokee_blue.png',
        'img/model-popup/overland/overland_grandcherokee_brown.png',
        'img/model-popup/overland/overland_grandcherokee_brownmetal.png',
        'img/model-popup/overland/overland_grandcherokee_ivory.png',
        'img/model-popup/overland/overland_grandcherokee_metallic.png',
        'img/model-popup/overland/overland_grandcherokee_silver.png',
        'img/model-popup/overland/overland_grandcherokee_velvet.png',
        'img/model-popup/overland/overland_grandcherokee_white.png'
      ],
      info:'수많은 첨단기술이 적용된 Jeep® Grand Cherokee Overland는 8.4인치 터치스크린,'+
          '9-스피커와 506W 앰프를 포함한 Alpine® 프리미엄 사운드 시스템, GPS 내비게이션,'+
          '디지털 클러스터 디스플레이와 레인센서 오토 와이퍼가 탑재되어 있습니다.',
      rpm:['@6,350RPM',286],
      kgm:['(KG.M)@4,300RPM',35.4],
      intro:[
        {
          src:'img/model-popup/overland/intro/model_gcover_intro1.jpg',
          name:'CommandView® Sunroof',
          description:'듀얼 패널 슬라이딩 글라스로 구성된 CommandView® 선루프는 탁 트인 시야를 선사합니다. 파워 컨트롤과 파워 선쉐이드는 항상 쾌적한 실내를 유지해 줍니다.'
        },
        {
          src:'img/model-popup/overland/intro/model_gcover_intro2.jpg',
          name:'Quadra-Lift® Air Suspension System',
          description:'Quadra-Lift® 에어 서스펜션 시스템은 코일스프링이 아닌 에어스프링을 통해 작동하며 Park, Aero, Normal, Off-Road I and Off-Road II 등의 5가지 서로 다른 드라이브 모드를 선택 할 수있습니다.',
        },
        {
          src:'img/model-popup/overland/intro/model_gcover_intro3.jpg',
          name:'Leather-Trim Interior',
          description:'Grand Cherokee Overland의 앞좌석 통풍시트와 가죽 트리밍된 대시보드, 도어패널, 암레스트는 당신의 작은 부분까지도 만족시켜 드릴 것입니다.'
        },
        {
          src:'img/model-popup/overland/intro/model_gcover_intro4.jpg',
          name:'Uconnect® 8.4-inch Touchscreen with Navigation',
          description:'8.4인치 터치스크린과 내비게이션을 제공하는 Uconnect® 인포테인먼트 시스템은 차량과 엔터테인먼트 모두 완벽하게 컨트롤 할 수 있게 해줍니다.'
        }
      ]
    },
    // limited
    limited:{
      name:'GRAND CHEROKEE - LIMITED',
      colors:['black','metallic','silver','white'],
      cars:[
        'img/model-popup/limited/limited_grandcherokee_black.png',
        'img/model-popup/limited/limited_grandcherokee_metallic.png',
        'img/model-popup/limited/limited_grandcherokee_silver.png',
        'img/model-popup/limited/limited_grandcherokee_white.png'
      ],
      info:'럭셔리한 스타일링과 편의사양이 추가되는 Limited 모델은'+
          '브라이트 크롬 그릴 및 도어 핸들, 운전석, 라디오, 사이드미러 메모리 시스템,'+
          '파워 리프트게이트, 리모트 스타트 시스템 등이 제공됩니다.',
      rpm:['@6,350RPM',286],
      kgm:['(KG.M)@4,300RPM',35.4],
      intro:[
        {
          src:'img/model-popup/limited/intro/model_gclimit_intro1.jpg',
          name:'Leather-Trimmed Heated Seats',
          description:'열선 스티어링 휠과 럭셔리한 가죽으로 트리밍된 전좌석 열선 시트로 운전자와 탑승자는 추운 날씨에도 상쾌함과 편안함을 느낄 수 있습니다.'
        },
        {
          src:'img/model-popup/limited/intro/model_gclimit_intro2.jpg',
          name:'20-Inch Tech Gray Aluminum Wheels',
          description:'20인치 테크 그레이 알루미늄 휠은 항상 최고의 광택과 함께 어떠한 모험에서도 프리미엄 외관을 자랑합니다. (*3.6 Limited 모델 적용)',
        },
        {
          src:'img/model-popup/limited/intro/model_gclimit_intro3.jpg',
          name:'Available Quadra-Trac II®',
          description:'Quadra-Trac II® 4x4시스템은 Selec -Terrain® 지형설정 시스템을 제공하여 상황에 따른 5가지 최적의 주행모드를 선택 할 수 있습니다.'
        },
        {
          src:'img/model-popup/limited/intro/model_gclimit_intro4.jpg',
          name:'ParkView® Rear Back Up Camera',
          description:'ParkView® 후방카메라는 Uconnect® 터치스크린을 통해 후진 시 영상과 그리드라인을 표시하여 자신감 있는 후진을 도와줍니다.'
        }
      ]
    },
}
//model object

  //탭메뉴 눌렀을 때
  // summit
  var key;
  key='summit';
  $('.popup-nav a').click(function(e){
    key=$(this).text().toLowerCase();

    $('.popup-nav a').removeClass('active');
    $(this).addClass('active');


    $('.model-popup .color').empty();

    //내용변경하기
    $('.model-popup .big-gallery img').attr({
      src:models[key].cars[0],
      alt:models[key].name
    });

    for (var i in models[key].colors){
      $('.model-popup .color').append(
        '<li><button class="'+models[key].colors[i]+'">'+
        '<span class="blind">'+models[key].colors[i]+'</span></button></li>'
      );
    }

    // 최대 출력
    $('.max-rpm div:nth-child(1) p small').text(models[key].rpm[0]);
    $('.max-rpm div:nth-child(1) strong').text(models[key].rpm[1]);
    // 최대 토크
    $('.max-rpm div:nth-child(2) p small').text(models[key].kgm[0]);
    $('.max-rpm div:nth-child(2) strong').text(models[key].kgm[1]);

    // intro img & text
    for(var i in models[key].intro){
      $('.car-intro li').eq(i).find('img').attr({src:models[key].intro[i].src});
    }
    for(var i in models[key].intro){
      $('.car-intro li').eq(i).find('.over dt').text(models[key].intro[i].name);
    }
    for(var i in models[key].intro){
      $('.car-intro li').eq(i).find('.over dd').text(models[key].intro[i].description);
    }
  });

  // summit color 변경
  $('.model-popup .popup-body .color').on('click','li',function(){
    var colorI=$(this).index();
    console.log(colorI);
    $('.model-popup .popup-body .big-gallery img').attr({src:models[key].cars[colorI]});

  });


});
