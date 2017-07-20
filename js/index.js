/**
 * Created by HSAEE on 2017/7/6.
 */
$(function () {
    $('.QR_left').hover(function () {
        $('.hide_left').toggleClass('toggleClass')
    })
    $('.QR_right').hover(function () {
        $('.hide_right').toggleClass('toggleClass')
    })

    $('.weixin').mouseenter(function () {
        $(this).attr({
            src:'images/youxiang.png'
        })
        $('.erweima').css({display:'block'})
    })
    $('.weixin').mouseout(function () {
        $('.erweima').css({display:'none'})
        $(this).attr({
            src:'images/weixinDefault.png'
        })
    })
    $('.weibo').mouseenter(function () {
        $(this).attr({
            src:'images/youxiang.png'
        })
    })
    $('.weibo').mouseout(function () {
        $(this).attr({
            src:'images/weiboDefault.png'
        })
    })


    /*wow*/
    var wow = new WOW({
        boxClass: 'animated',
        animateClass: 'animated',
        mobile:true
    });
    wow.init();

})