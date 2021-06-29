$(function () {
  $("#ask_content >li .ask_head").on("click", function () {
    if ($(this).parent().attr("class") == "h_open") {
      $(this).parent().removeClass("h_open");
    } else {
      $(this).parent().addClass("h_open");
      $(this).parent().siblings().removeClass("h_open");
    }
  });
});
