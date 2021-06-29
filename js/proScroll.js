;(function($){
	$.hotProScroll=(function(){
		function autoScroll(){
			var width=$.hotProScroll.config.scrollDivWidth;
			if($.hotProScroll.config.scrollDiv.offset().left>width+$.hotProScroll.config.scrollDivInitLeft||$.hotProScroll.config.scrollDiv.offset().left<$.hotProScroll.config.scrollDivInitLeft-width){
				$.hotProScroll.config.parent.scrollLeft(width);
			}else{
				$.hotProScroll.config.parent.scrollLeft($.hotProScroll.config.parent.scrollLeft()+1);
			}
		}
		//左按钮向左偏移一个产品
		function right(){
			var width=$.hotProScroll.config.scrollDivWidth;
			var left=$.hotProScroll.config.scrollDiv.offset().left-$.hotProScroll.config.scrollDivInitLeft;
			var iLeft=left%$.hotProScroll.config.widthF;
			var stepWidth=1;
			//ie下有0.5的偏移量
			if(iLeft==0){
				stepWidth=$.hotProScroll.config.widthF;
			}else{
				stepWidth=$.hotProScroll.config.widthF+iLeft;
			}
			if($.hotProScroll.config.scrollDiv.offset().left<$.hotProScroll.config.scrollDivInitLeft-width+$.hotProScroll.config.widthF*2){
				$.hotProScroll.config.parent.scrollLeft(width);
			}else{
				$.hotProScroll.config.parent.scrollLeft($.hotProScroll.config.parent.scrollLeft()+stepWidth);
			}
		}
		function left(){
			var width=$.hotProScroll.config.scrollDivWidth;
			var left=$.hotProScroll.config.scrollDiv.offset().left-$.hotProScroll.config.scrollDivInitLeft;
			var iLeft=left%$.hotProScroll.config.widthF;
			var stepWidth=$.hotProScroll.config.widthF;
			if(iLeft==0){
				stepWidth=$.hotProScroll.config.widthF;
			}else if(iLeft<0){
				stepWidth=0-iLeft;
			}else{
				stepWidth=$.hotProScroll.config.widthF-iLeft;
			}
			if($.hotProScroll.config.scrollDiv.offset().left>width+$.hotProScroll.config.scrollDivInitLeft-$.hotProScroll.config.widthF-0.5){
				$.hotProScroll.config.parent.scrollLeft(width);
			}else{
				$.hotProScroll.config.parent.scrollLeft($.hotProScroll.config.parent.scrollLeft()-stepWidth);
			}
		}
		return {
			config:{
				stepWidth:1,
				waitTime:60,
				inner:"#hotSalPro",
				left:"",
				right:""
			},
			startScroll:function(settings){
				$.extend($.hotProScroll.config, settings);
				var scrollDiv=$($.hotProScroll.config.inner);
				var ul=scrollDiv.children("ul"); //清空
				var liF=ul.children("li:first-child");
				var widthF=liF.width()+10;
				$.hotProScroll.config.widthF=widthF;
				var width=widthF*ul.children("li").length;
				$.hotProScroll.config.scrollDivWidth=width;
				$.hotProScroll.config.scrollDiv=scrollDiv;
				scrollDiv.after("<div style='width:"+width+"px;float:left;'>"+scrollDiv.html()+"</div>");
				scrollDiv.before("<div style='width:"+width+"px;float:left;'>"+scrollDiv.html()+"</div>");
				if ( $.browser.msie )
					width=(widthF+2)*ul.children("li").length;
				scrollDiv.css({"width":width+"px","float":"left"});
				$.hotProScroll.config.scrollDivInitLeft=scrollDiv.offset().left;
				var parentDiv=scrollDiv.parent();
				parentDiv.css({"width":(width*3)+"px"});
				$.hotProScroll.config.parent=parentDiv.parent();
				$.hotProScroll.config.parent.scrollLeft(width);
				//初始化参数
				var intervalIndex = setInterval(autoScroll, parseInt($.hotProScroll.config.waitTime));
				//左滚
				$($.hotProScroll.config.left).click(function() { left(); });
				//右滚
				$($.hotProScroll.config.right).click(function() { right(); });
				//悬停
				$($.hotProScroll.config.left + "," + $.hotProScroll.config.right + ",.pro").hover(function() { clearInterval(intervalIndex); }, function() {
					intervalIndex = setInterval(autoScroll, parseInt($.hotProScroll.config.waitTime));
				});
			}
		};
	})();
	
	$.rateScroll=(function(){
		function autoScroll(){
			var height=$.rateScroll.config.scrollDivHeight;
			if($.rateScroll.config.scrollDiv.offset().top<$.rateScroll.config.scrollDivInitTop-height){
				$.rateScroll.config.parent.scrollTop(0);
			}else{
				$.rateScroll.config.parent.scrollTop($.rateScroll.config.parent.scrollTop()+1);
			}
		}
		return {
			config:{
				stepWidth:1,
				waitTime:80,
				inner:"#rateScorll",
				left:"",
				right:""
			},
			startScroll:function(settings){
				$.extend($.hotProScroll.config, settings);
				var scrollDiv=$($.hotProScroll.config.inner);
				var ul=scrollDiv.children("ul"); //清空
				var height=ul.height()+10;
				$.rateScroll.config.scrollDivHeight=height;
				$.rateScroll.config.scrollDiv=scrollDiv;
				scrollDiv.after("<div>"+scrollDiv.html()+"</div>");
				var parentDiv=scrollDiv.parent();
				$.rateScroll.config.scrollDivInitTop=scrollDiv.offset().top;
				$.rateScroll.config.parent=parentDiv.parent();
				//初始化参数
				var intervalIndex = setInterval(autoScroll, parseInt($.rateScroll.config.waitTime));
				//悬停
				$(".textmarqueen").hover(function() { clearInterval(intervalIndex); }, function() {
					intervalIndex = setInterval(autoScroll, parseInt($.rateScroll.config.waitTime));
				});
			}
		};
	})();
	
})(jQuery);

$(function() {
	$.hotProScroll.startScroll({inner:"#hotSalPro",left:".arrowl",right:".arrowr"});
	$.rateScroll.startScroll({inner:"#rateScorll"}); 
});