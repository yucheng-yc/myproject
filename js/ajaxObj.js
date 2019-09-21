// 将所有ajax请求封装到一个对象里统一管理
var ajaxObj={};
$(function(){
    ajaxObj={
        // 请求头部信息
        getNavBar(callback){
            $.ajax({
                url:'../pages/navBar.html',
                type:'get',
                success(result){
                    callback(result);
                }
            })
        }
    }
});