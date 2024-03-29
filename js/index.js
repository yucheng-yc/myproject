
//程序入口 设置DOMcontentLoaded
globalSeting={};
$(function(){
    // 将所有ajax请求封装到一个对象里统一管理
    var ajaxObj={
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
 

    // 首页轮播图
    var mySwiper=new Swiper('.swiper-container',{
        direction : 'horizontal',
        loop: true, 
        
        // 如果需要分页器
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
        el: '.swiper-scrollbar',
        },
        speed:300,
        autoplay: {
            delay:3000
        },
        effect : 'fade',
    })


    // 图文轮播部分
    var  artImgSwiper=new Swiper('#content',{
        direction : 'horizontal',
        loop: true,          
        pagination: {
            el: '.page',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">'+ '</span>';
            }
        },
        speed:300,
        autoplay: {
            delay:3000
        }
    })

     // 每个子页面之间的滑动
    var pageSwiper=new Swiper('#pageSwiper',{
        direction : 'horizontal',        
    })

    // 对页面统一进行配置
    var objConfig={
        // 第一次页面加载时 设置开关的状态
        navToggleConfig(){
            vm.navToggle=$(document).innerWidth()>=992?true:false;
        },
        // 先获取当前页面尺寸 然后再将背景bannerImg设置为页面当前尺寸
        ResizemainPageBanner(){
            $('.bannerImg').width($(document).innerWidth());
        },
        // 和页面第一次加载设置开关状态一样
        ResizeNavTg(){
            vm.navToggle=$(document).innerWidth()>=992?true:false;
        },
        //当scoll改变时 改变页面nav的样式
        scrollNavStyleChange(){
            $(document).innerWidth()>992&&(vm.aColor.color=$(document).scrollTop()!==0?'black':'white');
        },
        // 当下拉网页时 导航栏 颜色改变 位置改变
        scrollNavBarLCg(){
           vm.navbarLCg.navbarLC=$(window).scrollTop()>0?true:false;    
        },
        // 当页面改变  页面宽度跟着改变
        scrollCgSvrImgHgt(){
            var innerWidth=$(document).innerWidth();

            // 动态修改有bug 不想改了

            // 让ate1和ate2为长方形
            // 因为有响应式 当屏幕尺寸到725px以下时 会改布局 加判断
            if(innerWidth>=725){
                 // 让图片一直是宽高是等比例
                 $('.blockArticle>article').innerHeight(innerWidth/3);

                $('.ate1,.ate4').innerHeight((innerWidth/3)*2);
                $('.ate1,.ate4').innerWidth(innerWidth/3);
            }else{
                // $('.ate1,.ate4').innerWidth(innerWidth/2);
                $('.blockArticle>article').innerHeight(innerWidth/4);
                $('.blockArticle>article').innerWidth(innerWidth/2);
            }
            

            

        },
        // 当页面滚动改变 不同的滚动位置添加不同动画
        scrollAnimateCg(){
        // var pageHeight=$(document).innerHeight();
           var scrollTop=$(document).scrollTop();
        
        }

    }

    // 对轮播对象统一管理
    var SwiperManage={
        mySwiper,
        artImgSwiper,
        pageSwiper
    }
    
    // 对所有对象进行封装，传到全局
    globalSeting={
        objConfig,
        ajaxObj,
        SwiperManage,
        vm
    }

});


