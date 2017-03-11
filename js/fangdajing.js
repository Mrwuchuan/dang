

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
	
	
	//放大镜js
$(".small").mousemove(function(e){
	$(".move").show();
	$(".big").show();
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	var moveX = $(".small").offset().left;
	var moveY = $(".small").offset().top;
	var moveW = $(".move").width()/2;
	var moveH = $(".move").height()/2;
	var newL = mouseX-moveX-moveW;
	var newT = mouseY-moveY-moveH;
	var maxL = $(".small").width() - $(".move").width();
	var maxT = $(".small").height() - $(".move").height();
	if(newL<0){
		newL = 0;
	}
	if(newL>maxL){
		newL = maxL;
	}
	if(newT<0){
		newT = 0;
	}
	if(newT>maxT){
		newT = maxT;
	}
	$(".move").css("left",newL+'px').css("top",newT+"px");
	
	var smlW = $(".small").width();
	var bigpW = $(".bigP").width();
	var smlH = $(".small").height();
	var bigH = $(".bigP").height();
	var b_w = $(".big").width();
	var b_h = $(".big").height();
	var newLeft = newL/smlW*bigpW;
	var newTop = newT/smlH*bigH;
	if(newLeft<0){
		newLeft = 0;
	}
	if(newLeft>(bigpW-b_w)){
		newLeft = bigpW-b_w;
	}
	if(newTop<0){
		newTop = 0;
	}
	if(newTop>(bigH-b_h)){
		newTop = bigH-b_h;
	}
	$(".bigP").css({left:-newLeft+"px",top:-newTop+"px"});
});
$(".small").mouseout(function(){
	$(".move").hide();
	$(".big").hide();
})

$(".tu_list img").each(function(){
	$(this).click(function(){
	var src = $(this).attr("src");
	$(".small img").attr("src",src);
	$(".bigP").attr("src",src);
	console.log(src);
})
})

	
	
	
})
