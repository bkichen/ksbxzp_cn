String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
};
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 获取参数的键值对对象。
 * @returns {Object}
 */
var getParam = function () {
    var obj = {};
    try {
        var url = window.location.href;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        var result = url.substr(url.indexOf('?') + 1, url.length - url.indexOf('?'));
        if (result) {
            result = decodeURIComponent(result);
            var keyValue = result.split("&");
            if (keyValue.length) {
                for (var i = 0; i < keyValue.length; i++) {
                    var item = keyValue[i].substr(0, keyValue[i].indexOf('='));
                    obj[item] = keyValue[i].substr(keyValue[i].indexOf('=') + 1, keyValue[i].length - keyValue[i].indexOf('='));
                    //url参数特殊处理
                    if (item == 'SignCallBackUrl') {
                        var index = obj[item].indexOf('?');
                        if (index > -1) {
                            obj[item] = obj[item].substring(0, index) + obj[item].substring(index).replaceAll('#', '&');
                        } else {
                            obj[item] = obj[item].replaceAll('#', '&');
                        }
                    }
                }
            }
        }
    } catch (e) {
    }
    if (obj['w']) {
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: '../SIGN/signService?RequestType=DES&data=' + obj['w'],
            data: {},
            dataType: 'json',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                if (data && data.data) {
                    $.each(data.data, function (key, value) {
                        obj[key] = value;
                    });
                }
            }
        });
    }
    if(obj['BackSeq']){
        obj['s'] = obj['BackSeq'];
    }
    //如果是有参数s，则说明是短链接过来的请求
    if (obj['s']) {
        $.ajax({
            type: "GET",
            contentType: "application/json;charset=utf-8",
            url: '../SIGN/signService?RequestType=short&s=' + obj['s'],
            data: {},
            dataType: 'json',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                if (data && data.data) {
                    $.each(data.data, function (id, v) {
                        obj[id] = v;
                    });
                }
            }
        });
    }

    //如果带了流水号
    if (obj['RdSeq'] && obj['isSelect']) {
        $.ajax({
            type: "GET",
            contentType: "application/json;charset=utf-8",
            url: '../SIGN/signService?RequestType=rdSeqEncrypt&data=' + obj['RdSeq'],
            data: {},
            dataType: 'json',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                if (data && data.data) {
                    $.each(data.data, function (id, v) {
                        obj[id] = v;
                    });
                }
            }
        });
    }

    return obj;
};

function checkPhone(phone) {
    return /^1([3456789])\d{9}$/.test(phone);
}

function checkIDCard(phone) {
    return /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(phone);
}

$(function () {
    $.extend({
        /**
         * 显示消息框
         * @param message 消息内容
         * @param title 标题
         */
        alert: function (message, title) {
            $('<div></div>').dialog({
                width: 300,
                buttons: {
                    "确定": function () {
                        $(this).dialog("close");
                    }
                },
                close: function (event, ui) {
                    $(this).remove();
                },
                resizable: false,
                title: title,
                modal: true
            }).text(message);
        },
        /**
         * 显示确认对话框
         * @param message 消息内容
         * @param title 标题
         * @param callback 回调函数
         */
        confirm: function (message, title, callback) {
            $("<div></div>").dialog({
                //移除右上角的'X'
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                },
                buttons: {
                    "确定": function () {
                        $(this).dialog("close");
                        if(callback != ""){
                            window.location.href = callback;
                            return;
                        }
                    },
                    "取消": function () {
                        $(this).dialog("close");
                    }
                },
                close: function (event, ui) {
                    $(this).remove();
                },
                resizable: false,
                title: title,
                modal: true
            }).text(message);
        }
    });

    function onBridgeReady() {
        WeixinJSBridge.call('hideOptionMenu');
    }

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
});

/**
 * 显示消息
 * @param msg 消息内容
 * @param title 标题
 * @constructor
 */
function alertMsg(msg, title) {
    $.alert(msg, title);
}

/**
 * 显示确认框
 * @param msg 消息内容
 * @param title 标题
 * @param callback 回调函数
 * @constructor
 */
function confirmMsg(msg, title, callback) {
    $.confirm(msg, title, callback);
}
