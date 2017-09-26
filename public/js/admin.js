//打开后台页面的时候，发送请求，刷新新闻列表
$(function(){
	var $newsTable=$("#newstable tbody");
	refreshNews();
	//添加新闻
	$("#btnsubmit").on("click",function(e){
		e.preventDefault();
		//输入判断
		if($("#newstitle").val()===""||$("#newsimg").val()===""||$("#newstime").val()===""||$("#newssrc").val()===""){
			if($("#newstitle").val()===""){
				$("#newstitle").parent().addClass("has-error");
			}else{
				$("#newstitle").parent().removeClass("has-error");
			}
			if($("#newsimg").val()===""){
				$("#newsimg").parent().addClass("has-error");
			}else{
				$("#newsimg").parent().removeClass("has-error");
			}
			if($("#newstime").val()===""){
				$("#newstime").parent().addClass("has-error");
			}else{
				$("#newstime").parent().removeClass("has-error");
			}
			if($("#newssrc").val()===""){
				$("#newssrc").parent().addClass("has-error");
			}else{
				$("#newssrc").parent().removeClass("has-error");
			}
		}else{
			
			var jsonNews={
				newstitle:$("#newstitle").val(),
				newstype:$("#newstype").val(),
				newssrc:$("#newssrc").val(),
				newsimg:$("#newsimg").val(),
				newstime:$("#newstime").val()
			}
			//提交添加
			$.ajax({
				url:"/admin/insert",
				type:"post",
				data:jsonNews,
				datatype:"json",
				success:function(data){
					refreshNews();
					$("#newstitle").val(" ");
					$("#newstype").val("精选");
					$("#newssrc").val(" ");
					$("#newsimg").val(" ");
					$("#newstime").val(" ");
				}
			})
			
		}
	});
	//删除新闻的功能
	var deleteId=null;
	$newsTable.on('click','.btn-danger',function(e){
		$('#deleteModal').modal("show");
		deleteId=$(this).parent().prevAll().eq(3).html();

	});
	$("#confirmDelete").on("click",function(e){
		if(deleteId){
			$.ajax({
				url:"/admin/delete",
				type:"post",
				data:{newsid:deleteId},
				success:function(data){
					$("#deleteModal").modal("hide");
					refreshNews();
				}
			});
		}
	});
	//修改新闻的功能
	var updateId=null
	$newsTable.on('click','.btn-primary',function(e){
		$('#updateModal').modal("show");
		updateId=$(this).parent().prevAll().eq(3).html();
		$.ajax({
			url:"/admin/curnews",
			type:"get",
			datatype:"json",
			data:{newsid:updateId},
			success:function(data){
				
				$("#unewstitle").val(data[0].newstitle);
				$("#unewstype").val(data[0].newstype);
				$("#unewssrc").val(data[0].newssrc);
				$("#unewsimg").val(data[0].newsimg);
				var utime=data[0].newstime.split('T')[0];
				$("#unewstime").val(utime);
			}
		});
	});
	$("#confirmUpdate").on("click",function(e){
		if(updateId){
			$.ajax({
				url:"/admin/update",
				type:"post",
				datatype:"json",
				data:{
					newsid:updateId,
					newstitle:$("#unewstitle").val(),
					newstype:$("#unewstype").val(),
					newssrc:$("#unewssrc").val(),
					newsimg:$("#unewsimg").val(),
					newstime:$("#unewstime").val()
				},
				success:function(data){
					$("#updateModal").modal("hide");
					refreshNews();
				}
			})

		}
	});
	function refreshNews(){
		$newsTable.empty();
		$.ajax({
			type:"get",
			url:"/admin/getnews",
			datatype:"json",
			success:function(data){
				data.forEach(function(item,index,array){

					var $tdid=$('<td>').html(item.id);
					var $tdtype=$('<td>').html(item.newstype);
					var $tdtitle=$('<td>').html(item.newstitle);
					var $tdsrc=$('<td>').html(item.newssrc);
					var $tdimg=$('<td>').html(item.newsimg);
					var newstime=item.newstime;
					var time=data[0].newstime.split('T')[0];
					var $tdtime=$('<td>').html(time);
					var $tdctrl=$('<td>');
					var $editbtn=$('<button>').addClass('btn btn-primary btn-xs').html("修改").appendTo($tdctrl);
					var $deletebtn=$('<button>').addClass('btn btn-danger btn-xs').html("删除").appendTo($tdctrl);
					var $tRow=$('<tr>');
					$tRow.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctrl);
					$newsTable.append($tRow);
				});

			}
		});
}
})
