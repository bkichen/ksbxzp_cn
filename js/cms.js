function addfavor(url,title) {
	if (!url) {
	  var strFullPath = window.location.href;
	  var strPath = window.location.pathname;
	  if (strPath && strPath.replace(/(^\s*)|(\s*$)/g,"") != "" && strPath.replace(/(^\s*)|(\s*$)/g,"") != '/') {
		 var pos = strFullPath.indexOf(strPath);
		 url = strFullPath.substring(0, pos);
	  } else {
		 url = strFullPath
	  }
	}
	var ua = navigator.userAgent.toLowerCase();
	if(ua.indexOf("msie 8")>-1){
		external.AddToFavoritesBar(url,title,'');//IE8
	}else{
		try {
			window.external.addFavorite(url, title);
		} catch(e) {
			try {
				window.sidebar.addPanel(title, url, "");//firefox
			} catch(e) {
				alert("您的浏览器无法完成此操作。\n请使用Ctrl+D进行添加");
			}
		}
	}
    return false;
}
function cmsHighLightCurrent(innerCode) {
	var catalogElement=document.getElementById("c2-" + innerCode);
	 if(catalogElement){
		catalogElement.className+=" con_left_cur";
	}

	var catalogElement=document.getElementById("c3-" + innerCode);
	if(catalogElement){
		catalogElement.style.display = '';
	}

	var catalogElement=document.getElementById("c4-" + innerCode);
	if(catalogElement){
		catalogElement.className+=" left_lsit_cur";
	}
}

function cmsArticleSearch() {
	var query=document.getElementById("query").value;
	if (query && query.replace(/(^\s*)|(\s*$)/g,"") != "") {
		window.open('/cmsservice/Search/Result.jsp?site=1&query=' + encodeURIComponent(query),'','');
	} else {
		document.getElementById("query").focus();
	}
}

document.getElementById("query").onkeydown=function(event){
	if(event.keyCode==13){
		cmsArticleSearch();
	}
}


jqueryCookie = function(name, value, options) {  
    if (typeof value != 'undefined') { // name and value given, set cookie  
        options = options || {};  
        if (value === null) {  
            value = '';  
            options.expires = -1;  
        }  
        var expires = '';  
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {  
            var date;  
            if (typeof options.expires == 'number') {  
                date = new Date();  
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));  
            } else {  
                date = options.expires;  
            }  
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE  
        }  
        var path = options.path ? '; path=' + (options.path) : '';  
        var domain = options.domain ? '; domain=' + (options.domain) : '';  
        var secure = options.secure ? '; secure' : '';  
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');  
    } else { // only name given, get cookie  
        var cookieValue = null;  
        if (document.cookie && document.cookie != '') {  
            var cookies = document.cookie.split(';');  
            for (var i = 0; i < cookies.length; i++) {  
                var cookie = cookies[i].replace(/(^\s*)|(\s*$)/g,"");  
                // Does this cookie string begin with the name we want?  
                if (cookie.substring(0, name.length + 1) == (name + '=')) {  
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
                    break;  
                }  
            }  
        }  
        return cookieValue;  
    }  
};  

function loadLogin() {
	alert(document.cookie);
	var username = jqueryCookie("cookUserName");
	if (username){
		alert(username.substring(0, username.lastIndexOf("_")));
	}
}

function loadScript(url){//在页面载入后添加script
	var e = document.createElement('SCRIPT') ;
	e.type	= 'text/javascript' ;
	e.src	= url ;
	e.defer	= true ;
	document.getElementsByTagName("HEAD")[0].appendChild(e);
}

if (typeof(cid) != 'undefined' && cid) {
	var ids = cid.split("_");
	cid = ids[0];	
	for(var i=1,len=cid.length; i<len/6+1; i++){
		var innerCode=cid.substring(0,i*6);
		cmsHighLightCurrent(innerCode);
	}
	for (var i = 1; i < ids.length; i++) {
		cid = cid + "_" + ids[i];
		cmsHighLightCurrent(cid);
	}
}