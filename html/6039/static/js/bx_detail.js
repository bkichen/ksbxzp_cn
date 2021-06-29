window.onload = function () {
    $('.bx_detail_tabs li').eq(0).addClass('bx_detail_tabs_active')
    $('.bx_detail_btobox_word').eq(0).addClass('bx_detail_btobox_word_active')
    $('.bx_detail_tabs li').click(function () {
      $(this).addClass('bx_detail_tabs_active')
      $(this).siblings().removeClass('bx_detail_tabs_active')
      console.log($(this).index())
      if ($(this).index() == 0) {
        $('.bx_detail_btobox_word').eq(0).addClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(1).removeClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(2).removeClass('bx_detail_btobox_word_active')
      } else if ($(this).index() == 1) {
        $('.bx_detail_btobox_word').eq(0).removeClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(1).addClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(2).removeClass('bx_detail_btobox_word_active')
      } else if ($(this).index() == 2) {
        $('.bx_detail_btobox_word').eq(0).removeClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(1).removeClass('bx_detail_btobox_word_active')
        $('.bx_detail_btobox_word').eq(2).addClass('bx_detail_btobox_word_active')
      }
    })
  }
  $(window).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if ($(window).width() < 750) {
      if (scrollTop >= ($('.bx_detail_buttonbox').offset().top + 40)) {
        $('.bx_detail_bottom').css({ 'width': document.documentElement.clientWidth })
        $('.m_law').css('margin-bottom', '5rem')
        $('.bx_detail_bottom').css('display', 'block')
      } else {
        $('.bx_detail_bottom').css('display', 'none')
        $('.m_law').css('margin-bottom', '')
      }
    }
  
  })
  