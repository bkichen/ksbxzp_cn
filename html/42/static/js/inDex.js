
$(document).ready(function () {
    areaSearchFunc('上海')
    if ($('.xqpg').length <= 4) {
      $('#khfwicon1').hide()
      $('#khfwicon2').hide()
    }
  
    function areaSearchFunc(city) {
      $('.xj_yx_dq').html(city + '地区')
      $.getJSON( window.go_all, function (data) {
        var dataArr = data
        if ($(window).width() > 750) {
          $(".jx_yx_ul").empty()
          $.each(
            dataArr,
            function (index, item) {
              if (index <= 3) {
                var str = '';
                str += '<li class="jx_yx_li" >'
                  + '<div class="yx_photo">'
                  + '<a href='
                  + item.url + '>'
                  + '<img class="yx_ph lazyload" src="'+window.img_load+'" data-original=\"' + item.photo + '\"></div>'
                  + '<a href='
                  + item.url + '>'
                  + ' <div class="yx_name">'
                  + item.title
                  + '</div>'
                  + '<div class="yx_xyjy">'
                  + item.bak01 + '</div>'
                  + '<div class="yx_xy">'
                  + item.summary + '</div>'
                  + '<a style="color:#fff;text-decoration:none;" href='
                  + item.url + '>'
                  + '<div class="yx_yyBtn" >'
                  + '查看详情'
                  + '</div>'
                  + '</a>'
                  + '<div class="yxy_border">'
                  + '<span></span><span></span><span></span><span></span>'
                  + '</div>'
                  + '</div>'
                  + '</li>'
                $('.jx_yx_ul').append(str);
              }
            })
        } else {
          $(".gold-yingxiao").empty()
          $.each(
            dataArr,
            function (index, item) {
              if (index <= 3) {
                var str = '';
                str += '<div class="swiper-slide yx_slide" >'
                  + '<div class="yingxiaocontent">'
                  + '<div class="headImg">'
                  + '<img class="headImgSrc lazyload" src="'+window.img_load+'" data-original=\"' + item.photo + '\"></div>'
                  + '<a href='
                  + item.url + '>'
                  + ' <p  class="yingxiaoname">'
                  + item.title
                  + '</p >'
                  + '<p  class="yingxiaojy">'
                  + item.bak01 + '</p>'
                  + '<p  class="yingxiaodesc">'
                  + item.summary + '</p>'
                  + '<a style="color:#fff;text-decoration:none;" href='
                  + item.url + '>'
                  + '<div class="yingxiaoBtn" >'
                  + '查看详情'
                  + '</div>'
                  + '</a>'
                  + '</div>'
                  + '</div>'
                $('.gold-yingxiao').append(str);
              }
            })
          var newswiper = new Swiper('.yingxiao', {
            pagination: {
              el: '.yingxiaoyuanPa',
              clickable: true,
            },
            on: {
              slideChangeTransitionEnd: function () {
                $('.yingxiaoyuanPa')
                  .find('span')
                  .eq(this.activeIndex)
                  .addClass('swiper-pagination-bullet-active')
                  .siblings()
                  .removeClass('swiper-pagination-bullet-active');
              },
            },
            autoplay: false
          });
        }
        $('.lazyload').lazyload();
      });
    }
    var swiper = new Swiper('.kehufuwu', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.kehufuwuPa',
        clickable: true,
      },
      autoplay: true
    });
  
    var xc_swiper = new Swiper('.jx_xc', {
      pagination: {
        el: '.page-xc',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      }
    })
    // 
    var swiper = new Swiper('.jx_b_wrap_phone', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionEnd: function () {
          $('.jx_banner_phone .bn_slide').css('width', '100%')
        }
      },
    });
    swiper.el.onmouseover = function () {
      swiper.autoplay.stop();
    }
    swiper.el.onmouseover = function () {
      swiper.autoplay.stop();
    }
    // 鼠标移出开始自动滚动
    swiper.el.onmouseout = function () {
      swiper.autoplay.start();
    }
    var myswiper = new Swiper('.jx_i_khfw', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $(function () {
      $('.sj_num_bold').counterUp({
        delay: 10,
        time: 1000
      });
    })
    // 微信
    document.addEventListener("WeixinJSBridgeReady", function () {
      $(".jx_banner_phone video")[0].play();
    }, false);
  })
  