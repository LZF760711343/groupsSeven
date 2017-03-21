/**
 * Created by Administrator on 2016/10/24 0024.
 */

$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        menu: '#myMenu',
        'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigation': true,
        'navigationPosition': 'right',
        afterLoad: function(anchorLink,index){
            switch(index){
                case 1:
                    $('.firstContent').addClass('rubberBand');
                    break;
                case 2:
                    $('.secondImg').addClass('zoomInLeft');
                    $('.second-animated').addClass('zoomInRight');
                    break;
                case 3:
                     $('.thirdContent').addClass('rollIn');
                    break;
                case 4:
                    $('.fourthContent').addClass('wobble');
                    break;
                case 5:
                    $('.fifth-odd').addClass('zoomInDown');
                    $('.fifth-even').addClass('zoomInUp');
                    break;
            };

        },
        onLeave:function (anchorLink,index) {
            switch(index){
                case 1:
                    $('.firstContent').removeClass('rubberBand');
                    break;
                case 2:
                    $('.secondImg').removeClass('zoomInLeft');
                    $('.second-animated').removeClass('zoomInRight');
                    break;
                case 3:
                        $('.thirdContent').removeClass('rollIn');
                    break;
                case 4:
                    $('.fourthContent').removeClass('wobble');
                    break;
                case 5:
                    $('.fifth-odd').removeClass('zoomInDown');
                    $('.fifth-even').removeClass('zoomInUp');
                    break;
            }
        }
    });
    $('#page1').click(function () {
        $.fn.fullpage.moveTo('page1',0);
    });
    $('.goToTop').click(function () {
        $.fn.fullpage.moveTo('page1',0);
    });
    $('#page5').click(function () {
        $.fn.fullpage.moveTo('page5',4);
    });
    $('.moveSectionDown').click(function () {
        $.fn.fullpage.moveSectionDown();
    })
    $('.fifthImg').mouseenter(function () {
        $(this).effect( "shake" );
    })
});