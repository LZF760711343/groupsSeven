/**
 * Created by Administrator on 2016/10/25.
 */


$(function () {
    $('.subInfo').mouseenter(function () {
        $(this).find($('.maskLayer')).show();
    });
    $('.subInfo').mouseleave(function () {
        $(this).find($('.maskLayer')).hide();
    });
    
    $('#teamInfo').click(function () {
        $.fn.fullpage.moveTo('page5',4);
    });
});