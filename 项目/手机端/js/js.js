
// 监听浏览器,针对不同分辨率计算font-size
// 然后根据设计稿比如尺寸是640尺寸 rem = 设计稿的字体大小 / 100 ; 16px —> 0.16rem


(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth<=320){
                docEl.style.fontSize = '50px';
            }
            else if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }
            else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(){
    $("#cbk").click(function(){
        $("#as").toggle(500);
        $(".zhuye").animate({"left": "3.75rem"}, 500);
        $(".conall").show();
        $(".conall").bind('touchmove', function(e){
          e.preventDefault();
          e.stopPropagation();
        });
    });
    $(".conall").click(function(){
            $("#as").toggle(500);
            $(".zhuye").animate({"left": "0"}, 500);
            $(".conall").hide();
            $(".conall").bind('touchmove', function(e){
             e.preventDefault();
             e.stopPropagation();
             });
        })
     var swiper = new Swiper('#one', {
        pagination: '#oned',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false

        });
    var swiper = new Swiper('#two', {
        pagination: '#twod',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false
    });
   // TOP 返回
    $(window).scroll(function(){
        if($(window).scrollTop()>400){
            $("#top").fadeIn(500);
        }else{
            $("#top").fadeOut(500);
        }
    });
    $("#top").click(function(){
         $('body,html').animate({scrollTop:0},1000);
    })

    //  下拉列表 导航切换
    $(".syh2 ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('onmore').siblings().removeClass('onmore');
            if(index==3){
             $("#gdlb").slideToggle(500);
            }else{
                $("#gdlb").slideUp("slow");
            }
        })
    })
    // 新闻滚动
     function doGun(){
      var hig1= $("#xsgd").scrollTop();
      var hig2= $("#xsgd").height();
      if(hig1>=hig2){
        $("#xsgd").scrollTop(0);
      }
      else{
        $("#xsgd").scrollTop(hig1+1);
      }
    }
    setInterval(doGun,40);

    //  $("#xsgd li").hide(); 
    //  var lis=$("#xsgd li");
    //     a=lis.length-1;
    //     doToggle()
    //     function doToggle(){
    //         $(lis[a]).slideUp("fast",function(){
    //             $(this).hide();
    //         })
    //         a++;
    //         a%=lis.length;
    //         $(lis[a]).slideUp("fast",function(){
    //             $(this).show();
    //         })
    //     setTimeout(doToggle,1500);
    // }
    // 列表页切换
    $(".kfgs li").each(function(index){
        $(this).click(function(){
        $(this).addClass('onyy').siblings().removeClass('onyy');
        $("#qhyy>div").hide().eq(index).show()
        })
        
    })
    //表单验证
        $("#name").blur(function(){
            var na=$("#name").val();
            var rx=/^([\u4e00-\u9fa5]|\w){3,12}$/;
            if(!rx.test(na)){
               $("#name").val("姓名格式不正确");
               $("#name").css("color","red");
               $("#name").focus(function(){
                 $("#name").css("color","#666666");
                 $("#name").val("");
               })
               return a=false;
            }
            return a=true;
        });
        $("#phone").blur(function(){
            var ph=$("#phone").val();
            var rx=/^[0-9]{11}$/;
            if(!rx.test(ph)){
               $("#phone").val("手机号码不正确");
               $("#phone").css("color","red");
               $("#phone").focus(function(){
                 $("#phone").css("color","#666666");
                 $("#phone").val("");
               })
                return b=false;
            }
            return b=true;

        });
        $("#date").blur(function(){
            var da=$("#date").val();
            var rx=/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
            if(!rx.test(da)){
               $("#date").val("日期格式不正确");
               $("#date").css("color","red");
               $("#date").focus(function(){
                 $("#date").css("color","#666666");
                 $("#date").val("");
               })
               return c=false;
            }
            return c=true;
        });
    $("#tj").click(function(){
            if(a&&b&&c){
                alert('预约成功')
            }
            else {
                alert('预约bu成功')
            }
        })
    
})

