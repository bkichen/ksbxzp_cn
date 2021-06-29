$(document).ready(function(){
    var params = getQueryVariable('xianzhong')
    var params2 = getQueryVariable('qudao')
    var dataArr = []
    var qudaodata = '个人保险'
    var xianzhongdata = '全部险种'
    var nums = 0
    //分页
    var pagesize = 9
    var currentpagenum = 1
    var count
    var qudaoObj = ['个人保险', '团体保险', '银行保险','网销保险']
    var xianzhong = [{ 0: '全部险种' }, { 1: '健康险' }, { 2: '年金险' }, { 3: '寿险' }, { 4: '意外伤害险' }]
    var xianzhong1 = [{ 0: '全部险种' }, { 1: '健康险' }, { 2: '年金险' }, { 3: '寿险' }, { 4: '意外伤害险' }]
    var xianzhong2 = [{ 0: '全部险种' }, { 1: '健康险' }, { 2: '年金险' }, { 3: '寿险' }, { 4: '意外伤害险' }]
    var xianzhong3 = [{ 0: '全部险种' }, { 1: '健康险' }, { 2: '年金险' }, { 3: '寿险' }, { 4: '意外伤害险' }]
    var xianzhong4 = [{ 0: '全部险种' }, { 1: '健康险' }]
    var clickCount = 1
    var serchDatas = []
    var windowWidth = $(window).width()
    $.getJSON(window.bxcp, function (data) {
        dataArr = data
        if(params2 == 3){
            $('.bx_xianzhong .box_all_listbutton').eq(2).hide()
            $('.bx_xianzhong .box_all_listbutton').eq(4).hide()
            $('.bx_xianzhong .box_all_listbutton').eq(3).hide()
        }else{
            $('.bx_xianzhong .box_all_listbutton').eq(2).show()
            $('.bx_xianzhong .box_all_listbutton').eq(4).show()
            $('.bx_xianzhong .box_all_listbutton').eq(3).show() 
        }
        if (params) {
            $('.bx_xianzhong .box_all_listbutton').eq(params).addClass('box_all_listbutton_active')
            $('.bx_xianzhong .box_all_listbutton').eq(params).siblings().removeClass('box_all_listbutton_active')
            $('.bx_qudao .box_all_listbutton').eq(params2).addClass('box_all_listbutton_active')
            $('.bx_qudao .box_all_listbutton').eq(params2).siblings().removeClass('box_all_listbutton_active')
            qudaodata = qudaoObj[params2]
            xianzhongdata = xianzhong[params][params]
            serchData(dataArr, qudaodata, xianzhongdata, 0)
        } else {
            $('.bx_xianzhong .box_all_listbutton').eq(0).addClass('box_all_listbutton_active')
            $('.bx_xianzhong .box_all_listbutton').eq(0).siblings().removeClass('box_all_listbutton_active')
            serchData(dataArr, '个人保险', '全部险种', 0)
        }
    });
    eachXianzhong(xianzhong)

    function eachXianzhong(data) {
        $(".box_all_typeBox").empty()
        $.each(
            data,
            function (index, item) {
                var str = '';
                str += '<div class="box_all_listbutton box_all_listbutton2">' + item[index] + '</div>'
                $('.box_all_typeBox').append(str);
            })
        $('.bx_xianzhong .box_all_listbutton').eq(0).addClass('box_all_listbutton_active')
        $('.bx_xianzhong .box_all_listbutton').eq(0).siblings().removeClass('box_all_listbutton_active')
    }

    function serchData(data, qudao, keyword, pagenum) {
        serchDatas = []
        for (var j = 0; j < data.length; j++) {
            if (keyword == '全部险种') {
                if (data[j].bak01 == qudao) {
                    serchDatas.push(data[j])
                }
            } else {
                if (data[j].bak01 == qudao && data[j].bak02 == keyword) {
                    serchDatas.push(data[j])
                }
            }
        }
        var datas = serchDatas.slice(9 * pagenum, (pagenum + 1) * 9)
        if(windowWidth<=750){
            if (serchDatas.length<=9){
                $('.more').css('display','none')
            }else{
                $('.more').css('display','block')
            }
        }else{
            $('.more').css('display','none')
        }
        if (datas.length == 0) {
            $('.pagingBox').hide()
        } else {
            $('.pagingBox').show()
        }
        $(".bx_alllistbox").empty()
        $.each(
            datas,
            function (index, item) {
                var str = '';
                str += '<div class="bx_alllist" >'
                    + '<a class="bx_alllista" href=\"' + item.url + '\">'
                    + '<img class="lazyload" data-original=\"' + item.photo + '\" src="'+window.img_load+'">'
                    +'</a><div class="bx_listwordbox" id=\"'
                    + ('bx_listwordbox' + item.ID)
                    + '\"><p class="bx_listtitle">'
                    + item.title
                    + '</p>'
                    + '<p class="bx_listword">'
                    + item.summary + '</p>'
                    + '</div></a>'
                    + '</div>'
                $('.bx_alllistbox').append(str);
                $('.bx_alllistbox').css('display', 'flex')
                $('.pagingBox').css('display', 'flex')
            })
            $('.lazyload').lazyload();
        pagingFunc(serchDatas)
    }


    $('.bx_qudao .box_all_listbutton').click(function (e) {
        if($(this).index()==2){
            qudaodata = '团体保险'
            xianzhong = xianzhong2
            eachXianzhong(xianzhong)
        }else if($(this).index()==3){
            qudaodata = '银行保险'
            xianzhong = xianzhong3
            eachXianzhong(xianzhong)
        }else if($(this).index()==4){
            qudaodata = '网销保险'
            xianzhong = xianzhong4
            eachXianzhong(xianzhong)
        }else{
            qudaodata = '个人保险'
            xianzhong = xianzhong1
            eachXianzhong(xianzhong)
        }
        $(this).addClass('box_all_listbutton_active')
        $(this).siblings().removeClass('box_all_listbutton_active')
        serchData(dataArr, qudaoObj[$(this).index() - 1], '全部险种', 0)
        currentpagenum = 1
    });

    $('.bx_xianzhong .box_all_typeBox').on("click",'.box_all_listbutton' ,function (e) {
        var activeIndex = $('.bx_qudao .box_all_listbutton_active').index()
        $(this).addClass('box_all_listbutton_active')
        $(this).siblings().removeClass('box_all_listbutton_active')
        xianzhongdata = xianzhong[$(this).index()][$(this).index()]
        serchData(dataArr, qudaoObj[activeIndex - 1], xianzhong[$(this).index()][$(this).index()], 0)
        currentpagenum = 1
    });

    function pagingFunc(data) {
        count = Math.ceil(data.length / pagesize)
        $('.total').text(data.length)
        $('.pagesize').text(count)
        $('.numBox').remove()
        for (var i = 0; i < count; i++) {
            var str = '';
            if (i == 0) {
                str += '<div class="numBox">'
                    + '当前第'
                    + '<span style="color: #104483;font-weight: bold;margin: 0 5px;">'
                    + Number(i + 1) + '</span>页'
                    + '</div>'
                $('.end').after(str)
            }
        }
    }

    //下一页
    $('.pagingBox').on('click', '.nextBox', function (e) {
        if (currentpagenum < count) {
            currentpagenum++
            serchData(serchDatas, qudaodata, xianzhongdata, currentpagenum - 1)
            $('.numBox span').text(currentpagenum)
        }
    })
    // //上一页
    $('.pagingBox').on('click', '.last', function (e) {
        if (currentpagenum > 1) {
            currentpagenum--
            serchData(serchDatas, qudaodata, xianzhongdata, currentpagenum - 1)
            $('.numBox span').text(currentpagenum)
        }
    })

    //首页
    $('.pagingBox').on('click', '.home', function (e) {
        serchData(serchDatas, qudaodata, xianzhongdata, 0)
        currentpagenum = 1
        $('.numBox span').text(1)
    })

    //尾页
    $('.pagingBox').on('click', '.end', function (e) {
        serchData(serchDatas, qudaodata, xianzhongdata, count - 1)
        currentpagenum = count
        $('.numBox span').text(count)
    })
    //查看更多
    $('.more').click(function () {
        if (serchDatas.length > $(".bx_alllist").length) {
            clickCount += 1
            var slicedata = serchDatas.slice(0, 9 * clickCount)
            if(9*clickCount>=serchDatas.length){
                $('.more').css('display','none')
            }
            $(".bx_alllistbox").empty()
            $.each(
                slicedata,
                function (index, item) {
                    var str = '';
                    str += '<div class="bx_alllist" >'
                        + '<a class="bx_alllista" href=\"' + item.url + '\">'
                        + '<img class="lazyload" data-original=\"' + item.photo + '\" src="'+window.img_load+'">'
                        +'</a><div class="bx_listwordbox" id=\"'
                        + ('bx_listwordbox' + item.ID)
                        + '\"><p class="bx_listtitle">'
                        + item.title
                        + '</p>'
                        + '<p class="bx_listword">'
                        + item.summary + '</p>'
                        + '</div></a>'
                        + '</div>'
                    $('.bx_alllistbox').append(str);
                    $('.bx_alllistbox').css('display', 'flex')
                })
                $('.lazyload').lazyload();
        }
    })

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
})
