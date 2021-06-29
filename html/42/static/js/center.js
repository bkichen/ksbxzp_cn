$(function () {
  $("#issue_s >p").on("click", function (e, i) {
    if ($(this).attr("class") !== "c_active") {
      $(this).addClass("c_active");
      $(this).siblings().removeClass();
    }
    $("#issue_s p").each(function (outer) {
      if ($(this).attr("class") === "c_active") {
        $("#issue_c >div").each(function (inner) {
          if (inner == outer) {
            $(this).addClass("is_active");
            $(this).siblings().removeClass();
          }
        });
      }
    });
  });
  $("#issue_zz p").on("click", function (e, i) {
    if ($(this).attr("class") !== "c_active") {
      $(this).addClass("c_active");
      $(this).siblings().removeClass();
    }
    $("#issue_zz p").each(function (outer) {
      if ($(this).attr("class") === "c_active") {
        $("#zz_item >div").each(function (inner) {
          if (inner == outer) {
            $(this).addClass("com_active");
            $(this).siblings().removeClass("com_active");
          }
        });
      }
    });
  });
  var swiper = new Swiper(".swiper-container_zzfw", {
    pagination: ".swiper-pagination",
    slidesPerView: 2,
    slidesPerGroup: 2,
    paginationClickable: true,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick: true,
    },
  });
  var newSwiper = new Swiper("#qybh", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      hideOnClick: true,
    },
  });
  var qyLeng = $(".qy_wrapper .swiper-slide").length
  if(qyLeng <= 4) {
    $('.qybh .swiper-button-disabled').hide()
  }
  
});
