/**
 * Created by Administrator on 2016/10/31.
 */
window.onload=function () {
    $.idcode.setCode();
    var admin=document.getElementById('admin');
    var login_submit=document.getElementById('login_submit');
    butn.onclick=function () {
        var IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
        var admin=document.getElementById('admin').value;
        var password=document.getElementById('password').value;
        if(admin='lzf'&& password=='123456' && IsBy){
            login_submit.href='../managementObject/app/admin/topicTypeinfo.html';
        }else{
            window.alert('输入有误，请填写完整!!');
            admin='';
            password='';
        }
    };
}
function keyLogin(){
    if (event.keyCode==13)
        document.getElementById("butn").click();
}