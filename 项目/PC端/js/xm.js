$(function(){
	//ren wu qiehuan
	$(".hjmyt2").find("input").each(function(index){
		$(this).click(function(){
			if(index==0){
				$(".daili").show();
				$(".luosuzhen").hide();
				return;
			}
			$(".daili").hide();
			$(".luosuzhen").show();
		})
	})
	// 5dakuai
	$(".gfhjsti>div").each(function(index){
		$(this).mouseover(function(){
			$(this).addClass('on').siblings().removeClass("on");
			$(".toal>div").hide().eq(index).show();
		})
	})
	$("#sp").hide();
	$("#djck").css({"cursor":"pointer"}).click(function(){
		$("#sp").toggle();
	})
	//医院动态
	$(".titletop>span").each(function(index){
		$(this).click(function(){
			$(this).addClass('on1').siblings().removeClass('on1');
			$(".neirong").hide().eq(index).show();
		})
	})
})