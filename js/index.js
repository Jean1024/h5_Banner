
$(function () {
  var cacheQuery = null;
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',  
    onTouchMove:function (mySwiper) {
      var index = mySwiper.activeIndex
      $(mySwiper.slides).each(function (i,v) {
        if (i!==index) {
          $(v).find('.once').hide()
        }
      })
    }, 
    onSlideChangeStart: function (mySwiper) {
          var index = mySwiper.activeIndex
          cacheQuery = $(mySwiper.slides[index]).find('.once')
          cacheQuery.hide()
      },
      onSlideChangeEnd: function (mySwiper) {
          // var scrollTop = $("#child").scrollTop()
          // if (scrollTop !== 80) {
          //     document.body.scrollTop = 80
          //     $("#child").animate({
          //         scrollTop: 80
          //     }, 500);
          // }
          cacheQuery.show()
      }
  })    
  // 音乐
  $('.music img').click(function () {
    if ($(this).hasClass('animateRotating')) {
      $(this).removeClass('animateRotating')
      $('#mp3').get(0).pause()
    }else{
      $(this).addClass('animateRotating')
      $('#mp3').get(0).play()
    }
  })
  // 地图
  var map = L.map('map').setView([39.9477136758528, 116.3252470853695], 16);
  L.tileLayer('https://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}', {
      attribution: '华风创新',
      maxZoom: 18
  }).addTo(map);
  var marker = L.marker([39.9477136758528, 116.3252470853695]).addTo(map);
  function onLocationFound(e) {
    var radius = e.accuracy / 200;
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
// map.on('click',function (e) {
//   console.log(e)//{lat: 39.9477136758528, lng: 116.3252470853695}
// })
// $('.swiper-slide').on('touchmove',function () {
//   var i = $(this).index()
//   $('.swiper-slide').each(function (index,value) {
//     if (index !== i) {
//       $(value).hide()
//     }
//   })
// })
})
