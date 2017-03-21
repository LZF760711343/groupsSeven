/**
 * Created by Administrator on 2016/10/26.
 */
  $(function () {
      $('.button_item:first').addClass('background-color1');
      $('.button_item').click(function () {
          $(this).addClass('background-color1').removeClass('background-color2').siblings().removeClass('background-color1');
      });
  });

