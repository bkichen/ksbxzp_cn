$(function(){
	$(".per_sev_a").hide();
	$(".per_sev_a:first").show();
	$(".per_sev_qa").click(function(){
		$(".per_sev_a").hide();
		$(this).find(".per_sev_a").show();
	});
	
	$(".divHide").not(".divHide:first").hide();
	$(".turn_main").find("span").click(function(){
		$(".turn_main").find("span").attr("class","turn_normal");
		$(this).attr("class","turn_cur");
		$(".divHide").hide();
		$("#divShow"+$(this).attr("id").charAt(0)).show();
	});
	
	$.ajax({
		type:"get",
		url: "../frame/top.html",
		cache: false,
		dataType:"html",
		success: function(html){
			$("body").prepend(html);
			$("#linkFloat").attr("src","../../res/jquery/link-float.js");
		},
		error:function(err){
			
		}
	});
});

