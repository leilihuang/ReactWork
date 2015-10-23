$(function () {
	$.ajax({
		url:"",
		type:'get',
		dataType:"json",
		data:{},
		success: function (data) {
			load(data);
		}
	})
	function load(data){
		$.ajax({
			url:"",
			type:'get',
			dataType:"json",
			data:{name:data.name},
			success: function (data) {

			}
		})
	}
})