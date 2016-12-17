$(function(){
	var files =
	[
		{
		"visitName": "文件夹一",
		"visitManager": "",
		"sumName": "10",
		"sumup": "10",
		"batchId": "UEC201407301102261",
		"interpreter": "323232",
		"outTime": "2016-06-25 15:11:54",
		"jpjclist": []
		},
		{
		"visitName": "文件夹二",
		"visitManager": "爾特",
		"sumName": "10",
		"sumup": "10",
		"batchId": "UEC201612141335152",
		"interpreter": "吻額頭",
		"outTime": "2016-12-29 00:00:00",
		"jpjclist": []
		},
		{
		"visitName": "文件夹三",
		"visitManager": "rete",
		"sumName": "10",
		"sumup": "10",
		"batchId": "UEC201612141347103",
		"interpreter": "大多數",
		"outTime": "2016-12-14 00:00:00",
		"jpjclist": []
		},
		{
		"visitName": "文件夹四",
		"visitManager": "但是如果",
		"sumName": "10",
		"sumup": "10",
		"batchId": "UEC201612141847194",
		"interpreter": "大刘",
		"outTime": "2016-12-29 00:00:00",
		"jpjclist": []
		}
	]


	var showStr ="";

		for(var i=0;i<files.length;i++){
				showStr +=`<div class="col-xs-4 col-md-3 col-lg-3  album">
									<a href="#" class="thumbnail" data-id=${files[i].batchId}>
										<img src="../images/404.jpg" alt="图片加载失败">
										<div class="showFileExplain photo_common">
																		<p>说明文字...</p>
																	</div>
									</a>
									<h4>相册:${files[i].visitName}</h4>
								</div>`;
								}
	$(".row").html(showStr)	
		$(".thumbnail").hover(
			function(){
						$(this).children(".showFileExplain").show();	
			},function () {
			$(".showFileExplain").hide();	
			})

		$(".album").click(function(){
			var id = $(this).attr("data-id");
			$.ajax({
				url:"",
				data:"",
				datatype:"json",
				type:"post",
				Cache:false,
				Async:true,
				success:function(data){
							console.log("请求成功....");
				},
				error:function(data){
					console.log("请求失败....");
				}
			})

		})

})