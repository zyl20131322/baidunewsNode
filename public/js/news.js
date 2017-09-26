$(function(){
	refreshNews("推荐");
	$("nav li").on("click",function(e){

		e.preventDefault();
		$("nav .selected").removeClass("selected");
		$(this).addClass("selected");
		var type=$(this).text();
		refreshNews(type);

	});
	
})
function refreshNews(type){
	var $list=$("article ul");
	$list.empty();
	$.ajax({
		url:"/news",
		type:"get",
		datatype:"json",
		data:{newstype:type},
		success:function(data){
			data.forEach(function(item,index,array){
				var $listItem=$('<li></li>').addClass("news-item").prependTo($list);
				var $newsimg=$("<div></div>").addClass("news-img").appendTo($listItem);
				var $img=$("<img>").attr({"src":item.newsimg,"width":"100%"}).appendTo($newsimg);
				var $newsContent=$("<div></div>").addClass("news-content").appendTo($listItem);
				var $h1=$("<h1></h1>").html(item.newstitle).appendTo($newsContent);
				var $p=$("<p></p>").appendTo($newsContent);
				var $newsTime=$("<span></span>").addClass("newstime").html(item.newstime).appendTo($p);
				var $newsSrc=$("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);				
			});

		}
	});
	
}