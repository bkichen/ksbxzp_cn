$(document).ready(function(){
    var swiper2 = new Swiper('.tenPhone', {
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: false,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    var swiper = new Swiper('.news_active', {
        pagination: {
            el: '.news_pap',
            clickable :true
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      on: {
        slideChange: function () {
            var videolist = $(".box .swiper-slide .video-wrap").find("video");//video对象数组
            for (var k = 0; k < videolist.length; k++) {
            videolist[k].pause();
            }
        }
      }
    });
    var dataLength = $('.course_list').length
    console.log('dataLength--',dataLength)
    var count = dataLength-2
    var j = 0
    if(dataLength>3){
        $('.course_right').addClass("course_right_active");
        // $('.course_right').css({background:'('+urllist+'/image/course_right_active.png) no-repeat'})
    }
    for(var i = 0; i<dataLength;i++){
        $('.course_list').eq(i).css({left:i*260+'px'})
        if((i+1)%2==0){
            $('.course_list').eq(i).css({top:'380px'})
        }else{
            $('.course_list').eq(i).css({top:'0px'})
        }
    }
    $('.course_right').click(function(){
        if(count!=0&&j<=dataLength-2){
            j++
            $('.course_div').animate({left:'-'+j*260+'px'},500)
            $('.course_left').addClass("course_left_active");
        }
        if(j==dataLength-1){
            // $('.course_right').css({background:'('+urllist+'/image/course_right.png) no-repeat'})
            $('.course_right').removeClass("course_right_active");
        }
    })

    $('.course_left').click(function(){
       if(j!=0){
           if(j==1){
                j--
                $('.course_div').animate({left:j*260+'px'},500)
                // $('.course_left').css({background:'('+urllist+'/image/course_left.png) no-repeat'})
                $('.course_left').removeClass("course_left_active");

           }else{
                $('.course_div').animate({left:Number(-j*260)+260+'px'},500)
                j--
           }
       }
       if(j!=dataLength-3){
             $('.course_right').addClass("course_right_active");
            // $('.course_right').css({background:'('+urllist+'/image/course_right_active.png) no-repeat'})
        }
    })
})
