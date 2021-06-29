;(function($){
		$.menu=(function(){
			return{
				values:{
						oldClass:"",
						max:7
				},
				init:function(){
					$(".link_main>.link_m").bind("mouseover",function(){
						var menuDiv=$(this);
						var menuIndex=menuDiv.attr("menu");
						var menuFirA=menuDiv.children(".link_blo").children("a");
						var positionA = menuFirA.position();
						var menuSenDiv=menuDiv.children(".link_float");
						if($.menu.values.max-menuIndex<2){
							menuSenDiv.css({"left":positionA.left-menuSenDiv.width()+menuFirA.width()-19,"top":positionA.top+menuFirA.height()});
						}else{
							menuSenDiv.css({"left":positionA.left,"top":positionA.top+menuFirA.height()});
						}
						menuSenDiv.show();
						$.menu.values.oldClass=menuFirA.attr("class");
						if(!$.menu.values.oldClass){
							$.menu.values.oldClass="";
						}
						menuFirA.addClass("link_cur");
					}).bind("mouseout",function(){
						var menuDiv=$(this);
						menuDiv.children(".link_float").hide();
						var menuFirA=menuDiv.children(".link_blo").children("a");
						menuFirA.attr("class",$.menu.values.oldClass);
					});
				}
			};
		})();
	})(jQuery);
	$(function(){
		$.menu.init();
	});