$(function(){

		$("input[type=checkbox]:eq(0)").click(function(){
			$("input[type=checkbox]").each(function(){
			if($(this).attr("checked")){
				$(this).removeAttr("checked");
				$("input[type=checkbox]:eq(0)").removeAttr("checked");
			}else{
				$(this).attr("checked","true");
				$("input[type=checkbox]:eq(0)").attr("checked","true");
			}		
		})
	})
	function count(){
//		var danjia = $(".danjia");
//               console.log(danjia);
		var total = 0;
		$(".danjia").each(function(p){

//			console.log(p);
			var price = parseInt($(this).html());
			
			var num = parseInt($.trim($(".shu").eq(p).html()));
//			console.log(num);
			var xiaoji = price*num;
			$(".qian").eq(p).html(xiaoji);
			total += xiaoji;
			
		})
		$(".zongji").html(total);
	}
	
	count();
	$("button").each(function(){
		$(this).click(function(){
			if($(this).html()=="+"){
				var vv = $(this).prev("span").html();
//				console.log(vv);
				vv++;
				$(this).prev("span").html(vv);
				count();
			}else if($(this).html()=="-"){
				var v = $(this).next("span").html();
				v--;
				if(v == 0){
					$(this).parents("div").remove();
				}
				$(this).next("span").html(v);
				count();
			}else{
				$(this).parents("div").remove();
				count();
			}
		})
	})


	
	

	
	
	
})
