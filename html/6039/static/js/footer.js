function btnclick() {
    var _val = $('#select1').val()
    var options = $('#select1').children()
    options.each(function (k, e) {
      if ($(e).text().indexOf(_val) >= 0) {
        window.open($(e)[0].getAttribute('data-href'));
      }
    })
  }
  $(function () {
    setInterval(function () { $('#jiaxin-mcs-fixed-btn').hide() })
    $.getJSON(window.branch, function (data) {
      var str = '<option value="volvo" style="display: none;">友情链接</option><option value="中国建设银行" data-href="http://www.ccb.com/">中国建设银行</option><option value="代理人职业资质" data-href="http://iir.circ.gov.cn/">代理人职业资质</option>';
      $(data).each(function (index, item) {
        str += '<option value=' + item.title + ' data-href=' + item.url + '>' +
          (item.id === 42 ? item.title : item.title + '分公司')
          + '</option>'
      })
      $('#select1').append(str);
    })
    $(".l_menu_img")
      .mouseenter(function () {
        $(this).children(".l_icon").hide()
        $(this).children(".l_icon_hover").show()
        $(this).parent(".left_menu ul li").addClass("bg_all_ak")
  
      })
      .mouseleave(function () {
        $(".l_icon").show()
        $(".l_icon_hover").hide()
        $(this).parent(".left_menu ul li").removeClass("bg_all_ak")
      })
    window.isie = (!!window.ActiveXObject || "ActiveXObject" in window);
    window.MyScrollTo = function (h) {
      if (window.isie) {
        window.scrollTo(0, h)
      } else {
        window.scrollTo({ top: h, behavior: "smooth" });
      }
    }
    $("#p_top").click(function (e) {
      e.preventDefault();
      MyScrollTo(0);
    });
    $('.m_law>.m_font').empty()
    $('.m_law>.m_font').append($('.footer_contain .copyright').html())
    $('.m_law>.m_font a').css({ "font-size": "0.625rem", 'color': "#999999" })
    // 上划影藏,下划显示
    var body_top_float = $(document).scrollTop()
    $(window).scroll(function () {
      if (body_top_float > $(document).scrollTop()) {
        $('.left_menu').show()
      } else if(body_top_float<=5) {
        $('.left_menu').show()
      }else{
        $('.left_menu').hide()
      }
      body_top_float = $(document).scrollTop()
    })
  })
  function openWinKefu() {
   if( showPopupWindow) showPopupWindow()
  }
  $(function(){
  if(!$('#gsgg_list>div').length){
  $('#gsgg_div').hide()
  }
  })
  $('.jx_i_h .jx_nav .nav_bottom>a:first-child').css({"width":"20px","margin-top": "5px"})
  
