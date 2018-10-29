
// now Time

function getTime () {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date  = d.getDate();
	var dayArray  = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var day   = d.getDay();
	var days  = dayArray[day];
	
	return "当前时间是:" + year + "年" + month + "月" + date + "日"  + days;
}

// 15page now time
document.getElementById("now_time").innerHTML = getTime();


