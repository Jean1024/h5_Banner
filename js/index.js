
$(function () {
  var cacheQuery = null;
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',    
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
  var map = new BMap.Map("map");
  var point = new BMap.Point(116.331764,39.953399);
  map.centerAndZoom(point, 15);
  var marker = new BMap.Marker(point);  // 创建标注
  map.addOverlay(marker);               // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
})
