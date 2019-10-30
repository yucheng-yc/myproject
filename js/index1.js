// 函数入口
+function(window){
    // 创建构造函数
    function Yc(){
        // 初始化导航栏
            // 控制开关开闭
        this.init.navToggleConfig();
        this.init.navToggleBtn();

        $(window).on('scroll resize',()=>{
            this.init.ResizemainPageBanner();
            this.init.navToggleConfig();
        })
        
    }
    // 创建vue对象 实现初始化工作
    // 全局初始化
    Yc.prototype.init={
        navToggleBtn(){
            $('.toggle>i').on('click',()=>{

                $('.navRight').toggle();
            })

        },
        // 第一次页面加载时 设置开关的状态
        navToggleConfig(){
           var tg=$(document).innerWidth()>=992?true:false;
           if(!tg){
               $('.navRight').hide('fast');
           }else {
            $('.navRight').show('fast');
           }
        },
        // 先获取当前页面尺寸 然后再将背景bannerImg设置为页面当前尺寸
        ResizemainPageBanner(){
            $('.bannerImg').width($(document).innerWidth());
        }
    }
    // 轮播图初始化
    Yc.prototype.swiperInit={
        // 首页轮播图
        mySwiper:new Swiper('.swiper-container',{
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
        }),
        // 图文轮播部分
        artImgSwiper:new Swiper('#content',{
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
        }),
        // 每个子页面之间的滑动
        // pageSwiper:new Swiper('#pageSwiper',{
        //     direction : 'horizontal',
        //     autoHeight: true,       
        // })
    }
    // 将构造函数抛到全局
    window.Yc=Yc;
}(window);