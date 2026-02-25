$(document).ready(function() {
  // 初始化全站画廊
  $('.popup-gallery').magnificPopup({
    delegate: 'a', 
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true, 
      navigateByImgClick: true,
      preload: [0,1] 
    },
    image: {
      tError: '图片加载失败。',
      titleSrc: function(item) {
        return item.el.attr('title') || '量子科技 - 游戏截图';
      }
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out'
    }
  });

  // 针对单独图片的放大
  $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    image: { verticalFit: true }
  });

  // 视频
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade'
  });
});