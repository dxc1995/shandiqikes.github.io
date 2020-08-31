$("input").hide();
// mark as done
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});

// click X to delete a task
$("ul").on("click","span",function(event){
	if (confirm('Are you sure to delete data')) {
		$(this).parent().fadeOut(500,function(){
			//1、先获取本地存储
			var locals=getData();
			//2、删除对应数据
			var index= $(this);
			locals.splice(index, 1);
			//3、将剩下的数据保存到本地存储
			saveData(locals);
			//4、重新读取本地存储数据并渲染页面
			loadData();
		});
	}
	
	event.stopPropagation();
});
loadData();
//text input
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var locals=getData();
		locals.push({title:$(this).val(), done: false});
		saveData(locals);
		$(this).val("");
		loadData();
	}
});

$(".showtext").text(getData());

//fadeOut test box
$(".fa-pencil-alt").click(function(){
	$("input").fadeToggle();
});


// 本地存储
if (!window.localStorage) {
	// display error for lack of support
	alert('Your browser does not support localStorage');
} 

// 保存到本地存储
function saveData(data) {
	localStorage.setItem("todolist",JSON.stringify(data));
}

// 读取本地数据
function getData() {
	var data=localStorage.getItem("todolist");
	if(data!==null){
		return JSON.parse(data);
	}else{
		return [];
	}
}

// 渲染数据
function loadData() {
	//先读取本地存储数据
	var locals=getData();
	//先清空ul里的元素内容，避免重复加载
	//$("ul").empty();

	$.each(locals, function(index, item) {
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+item.title+"</li>");
	})
}