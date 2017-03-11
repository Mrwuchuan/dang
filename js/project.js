$(function(){
	$(".address").hover(function(){
		$(".address_ul").show();
		$(this).css("cursor","pointer");
		$(".address_ul li").each(function(){
			$(this).click(function(){
				var shi = $(this).html();
				$(".address span:eq(1)").html(shi);
			})
		})
	},function(){
		$(".address_ul").hide();
	})
	$(".menu_ul>li:gt(2)").each(function(){
		var chu = ($(this).children().next());
		$(this).hover(function(){				
		chu.show();
		},function(){
		var chu = ($(this).children().next());
		chu.hide();
		})
	})
//以上是头部导航栏部分的js
// 搜索框部分
$("input:text").focus(function(){
	$(this).val("");
})
$("input:text").blur(function(){
	var vv = $(this).html();
	if($(this).val("")){
		$(this).val("男装跨店满199减100");
	}else{
		$(this).val(vv);
	}
})




//以下是轮播图的js部分
var index = 0;
var init = null;
//console.log($(".lun_cen span"));
autoRun();
function autoRun(){
//	if(init !=null){
//		return;
//		}
	clearT();
		init = setInterval(function(){
			index++;
			if(index>=8){
				index = 0;
			}
			show(index);
		},2000);
	}
	function show(i){
		$(".lun_top>li").hide();
		$(".lun_top>li").eq(i).fadeIn();
		$(".lun_cen span").removeClass("lun_cen_sp");
		$(".lun_cen span").eq(i).addClass("lun_cen_sp");
		$(".lun_bot ul").hide();
		$(".lun_bot ul").eq(i).fadeIn();
	}
	function clearT(){
		clearInterval(init);
		init = null;
	}
	$(".lun_cen span").each(function(){
		$(this).mouseover(function(){
			clearT();
			index = $(this).index();
			show(index);
		}).mouseout(function(){
			autoRun();
		});
	})
	$("#lun").mouseover(function(){
		$(".lun_left,.lun_right").show();
		$(this).css("cursor","pointer");
		clearT();
	}).mouseout(function(){
		$(".lun_left,.lun_right").hide();
		autoRun();
	})
	$(".lun_left").click(function(){
		index--;
		if(index<0){
			index=7;
		}
		show(index);
	})
	$(".lun_right").click(function(){
		index++;
		if(index>=8){
			index=0;
		}
		show(index);
	})
//主屏轮播完毕
//轮播图右边的列表
	$(".lie_ul_o>ul").eq(0).css("display","block");
	$(".lie_ul>li").each(function(){
		var i = $(this).index();
		$(this).mouseover(function(){
			$(".lie_ul>li").css("background","#f0f0f0");
			$(this).css("background","white");
			$(".lie_ul_o>ul").hide();
			$(".lie_ul_o>ul").eq(i).show();
		});
	})

$(".lie_l div img").eq(0).show();
$(".lie_down>li").each(function(){
	var i = $(this).index();
	$(this).mouseover(function(){
		$(".lie_down>li").css("background","#f0f0f0");
		$(this).css("background","white");
		$(".lie_l div img").hide();
		$(".lie_l div img").eq(i).show();
	})
})
//	轮播图右边的列表
//瀑布流
//	console.log($("img[src-data]"));
	$(window).scroll(function(){
		
			var bHeight = $(window).height();			
			var dScroll = $(document).scrollTop();
			$("img[src-data]").each(function(){
				var dHeight = $(this).offset().top;	
				if((dHeight-bHeight-dScroll)<-50){	
				var srcs = $(this).attr("src-data");
				$(this).attr("src",srcs);
			}
		})
	})
//瀑布流结束
//楼层跳转

$(".list_lou li").each(function(){
	var m = $(this).index();
	$(this).click(function(){
		var juli = $("div.louceng").eq(m).offset().top;
		$("html body").animate({
			scrollTop:juli
		},1000)
	})
})

$(window).scroll(function(){
	var scrollT = $(window).scrollTop();
	var lun = $(".list_lou").height();
	var off = $(".list_lou").offset().top;
	var bHeight = $(window).height();
	if(scrollT>(200)){
		$(".list_lou").css({
			position:"fixed",
			left:"3px",
			top:"430px"	
		}).show(1000);
	}
	if(scrollT<200){
		$(".list_lou").hide(1000);
	}
})
//console.log($(".list_lou").height());









})
//container 部分结束

