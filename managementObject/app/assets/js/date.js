/**
 * Created by Administrator on 2016/10/25 0025.
 */
function showDate(now) {
    var year=now.getFullYear();//获得年

    var month=now.getMonth()+1;//获得月，因为获得的数值从0开始，所以加1
    month=month<10 ? '0'+month:month;

    var day=now.getDate();//获得日
    day=day<10 ? '0' + day : day;

    var hours=now.getHours();//获得小时
    hours=hours<10? '0' + hours:hours;

    var minutes=now.getMinutes();//获得分钟
    minutes=minutes<10 ? '0' + minutes:minutes;

    var seconds=now.getSeconds();//获得秒数
    seconds=seconds<10 ? '0' + seconds:seconds;

    //获得星期数
    var week=now.getDay();
    switch (week){
        case 0:
            week='星期天';
            break;
        case 1:
            week='星期一';
            break;
        case 2:
            week='星期二';
            break;
        case 3:
            week='星期三';
            break;
        case 4:
            week='星期四';
            break;
        case 5:
            week='星期五';
            break;
        case 6:
            week='星期六';
            break;
    };

    return year+'年'+month+'月'+day+'日'+' '+hours+':'+minutes+':'+seconds+' '+week;
    
}