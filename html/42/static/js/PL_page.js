var page_DATA_AK = [];
var page_ID_AK = "";
var index = 0;
var page_number = 10
function Pl_paging_data(count) {
  var _data = $(page_DATA_AK).clone(true);
  $(page_ID_AK).empty();
  if (count == 1) {
    count = 0;
  } else {
    count = (count - 1) * page_number;
  }
  var data = _data.slice(count, count + page_number);
  $(page_ID_AK).append(data);
}

jQuery.Pl_paging = function (DATA, ID ,i) {
   i = i || 10 ;
  index = 0;
  page_number = i
  page_ID_AK = ID;
  $("#PHONE_data").empty();
  $(page_ID_AK).empty();
  page_DATA_AK = DATA;
  var _data = page_DATA_AK;
  var _count = _data.length / page_number;
  var count = 0;
  var integerNumber = parseInt(_count);
  if (_count > integerNumber) {
    integerNumber += 1;
    count = integerNumber;
  } else {
    count = _count;
  }
  $(".pl_paging .pl_pages").text(count);
  $(".pl_paging .pl_counts").text(_data.length);
  $(".pl_paging span.pl_item").text(1);
  if(page_DATA_AK.length==0){
    return ($(page_ID_AK).append('<div style="text-align: center;">暂无数据</div>'))
  }
  var data = _data.slice(0, page_number);
  $(page_ID_AK).append(data);
  ph_more();
  whid();
};

function upper(v) {
  var page = $(".pl_paging span.pl_item").text();
  if (v) {
    page--;
  } else {
    var i = $(".pl_paging .pl_pages").text();
    page++;
    if (page > i) {
      page = i;
    }
  }
  if (page == 0) {
    page = 1;
  }
  $(".pl_paging span.pl_item").text(page);
  Pl_paging_data(page);
}

function pl_page_data(v) {
  if (!v) {
    v = $(".pl_paging .pl_pages").text();
  }
  $(".pl_paging span.pl_item").text(v);
  Pl_paging_data(v);
}
function ph_more() {
  var da = $(page_DATA_AK)
    .clone(true)
    .slice(index, index + page_number);
  $("#PHONE_data").append(da);
  index += page_number;
  whid();
}

function whid() {
  if ($(window).width() < 750) {
    $(page_ID_AK).addClass("dis");
    if (page_DATA_AK.length > index) {
      $(".PHONE.ph_more").removeClass("dis");
    } else {
      $(".PHONE.ph_more").addClass("dis");
    }
    $("#PHONE_data").removeClass("dis");
  } else {
    $("#PHONE_data").addClass("dis");
    $(page_ID_AK).removeClass("dis");
  }
  if($('.lazyload').length) $('.lazyload').lazyload();
}
$(window).resize(function () {
  whid();
});
//
function dateFormat(date) {
  var time = new Date(date);
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var data_time = time.getFullYear()+'-'+(m > 9 ? m :( "0" + m))+"-"+(d > 9 ? d :( "0" + d));
  return data_time
}
function Pl_paging_data_ak(count) {
  $(page_ID_AK).empty();
  if (count == 1) {
    count = 0;
  } else {
    count = (count - 1) * 10;
  }
  var data = page_DATA_AK.slice(count, count + 10);
  cpxx_data(data,count)
}
function upper(v) {
  var page = $(".pl_paging span.pl_item").text();
  if (v) {
    page--;
  } else {
    var i = $(".pl_paging .pl_pages").text();
    page++;
    if (page > i) {
      page = i;
    }
  }
  if (page == 0) {
    page = 1;
  }
  $(".pl_paging span.pl_item").text(page);
  Pl_paging_data(page);
}

function pl_page_data_ak(v) {
  if (!v) {
    v = $(".pl_paging .pl_pages").text();
  }
  $(".pl_paging span.pl_item").text(v);
  Pl_paging_data_ak(v);
}function upper_ak(v) {
  var page = $(".pl_paging span.pl_item").text();
  if (v) {
    page--;
  } else {
    var i = $(".pl_paging .pl_pages").text();
    page++;
    if (page > i) {
      page = i;
    }
  }
  if (page == 0) {
    page = 1;
  }
  $(".pl_paging span.pl_item").text(page);
  Pl_paging_data_ak(page);
}

function pl_page_data_ak(v) {
  if (!v) {
    v = $(".pl_paging .pl_pages").text();
  }
  $(".pl_paging span.pl_item").text(v);
  Pl_paging_data_ak(v);
}
function cpxx_data(data,i){
  data.each(function () {
    var pl_this = $(this)[0];
    i++;
    if (pl_this.bak01) {
      $("#data").append(
                 '<p><span>'+i+'</span><span><span>'+pl_this.title+
                 '</span><span class="w_450"><span><a href="'+
                          pl_this.url+
                        '" target="_blank">产品条款</a></span><span><a href="'+
                          pl_this.bak01+
                        '" target="_blank">产品说明书</a></span></span></span><span>'+dateFormat(pl_this.showTime)+
                        '</span></p>');
    } else {
      $("#data").append(
        '<p><span>'+i+'</span><span><span>'+pl_this.title+
                 '</span><span class="w_450"><span><a href="'+pl_this.url+'" target="_blank">产品条款</a></span>'+
                  '<span></span></span></span><span>'+dateFormat(pl_this.showTime)+
                        '</span></p>');
    }
  });
  $("#PHONE_data").empty();
  $('#PHONE_data').append($('#data>P').clone(true))
}
function ph_more_ak() {
  var da = page_DATA_AK.slice(index, index + 10);
  cpxx_data(da,index)
  index += 10;
  whid();
}
jQuery.Pl_paging_ak = function (DATA, ID) {
  index = 0;
  page_ID_AK = ID;
  $(page_ID_AK).empty();
  $("#PHONE_data").empty();
  page_DATA_AK = DATA;
  var _data = page_DATA_AK;
  var _count = _data.length / 10;
  var count = 0;
  var integerNumber = parseInt(_count);
  if (_count > integerNumber) {
    integerNumber += 1;
    count = integerNumber;
  } else {
    count = _count;
  }
  $(".pl_paging .pl_pages").text(count);
  $(".pl_paging .pl_counts").text(_data.length);
  $(".pl_paging span.pl_item").text(1);
  if(page_DATA_AK.length==0){
            $(page_ID_AK).append('<div style="text-align: center; margin-top: 1rem;">暂无数据</div>')
            $("#PHONE_data").append('<div style="text-align: center; margin-top: 1rem;">暂无数据</div>')
            return 
  }
  ph_more_ak();
};

