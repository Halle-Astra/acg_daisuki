// navi_box = document.getElementById("all_navi");
navis = document.getElementsByClassName("navi");//因为要查找元素，所以要把引入js放到body后面
// var time_begin = 
// win_height = $(window).innerHeight();
// win_width = $(window).innerWidth();
// win_height = document.body.clientHeight;
// win_width = document.body.clientWidth;//取错了，我要的应该是最外面的div的，装着这5个小div的div的宽高  现在用于调整navi_box
// navi_box.style.top = (win_height-navi_box.clientHeight)*0.5+'px';
// console.log(win_height,(win_height-navi_box.clientHeight)*0.5)
// navi_box.style.left = (win_width-navi_box.clientWidth)*0.5+'px';
box_height = document.getElementById("all_navi").clientHeight;
box_width = document.getElementById("all_navi").clientWidth;
// console.log(win_height,win_width);
var centery = 0.5*box_height;
var centerx = 0.5*box_width;
var min_edge = Math.min(box_height,box_width);
var radius = 0.4*min_edge;//元素到中心的半径。待会采用极坐标换到直角坐标
// console.log(min_edge);
// console.log(Math.PI,Math.cos(Math.PI));
// 思路:
// 采用setInterval来避开while true,不然会网页加载卡在那没法继续. 
// console.log(navis);

// console.log(navis.length);
// for(i=0;i<navis.length;i++)
// {
// 	console.log('??');
// 	console.log(i);
// }
//计划特效：
// 点开网页后,navis从中间散开到四周,然后开始旋转
//现在下午2点，，看来旋转是没空了, 先放弃了...
for(var i = 0 ;i<navis.length;i++){
	//计算第i个div的初始位置
	navis[i].style.display = 'block';
	navis[i].style.left = centerx -50 + 'px';
	navis[i].style.top = centery - 50 + 'px';
}
// console.log(2**2);	//和python的计算是一样的
for (var i = 0 ;i <navis.length;i++){
	// console.log('=====',i)
	// console.log(navis[i])
	var theta = 2*Math.PI*i/5;
	var shift_sitex = radius*Math.cos(theta);//+centerx;
	var shift_sitey = radius*Math.sin(theta);//+centery;
	// navis[i].style.left = sitex-50+'px';
	// navis[i].style.top = sitey-50+'px';
	// navis[i].style.left = shift_sitex+navis[i].offsetLeft-50+'px';//最终版
	// navis[i].style.top = shift_sitey+navis[i].offsetTop-50+'px' ;
	var aim_left = shift_sitex+centerx-50;//margin影响了计算，忘了offsetTop是哪到哪了。
	var aim_top = shift_sitey+centery-50;
	// var aim_left = shift_sitex+navis[i].offsetLeft-50+'px';
	// var aim_top = shift_sitey+navis[i].offsetTop-50+'px' ;
	// navis[i].style.left = aim_left+'px';
	// navis[i].style.top = aim_top+'px';
	var dist_left = shift_sitex-50;
	var dist_top = shift_sitey-50;
	// navis[i].timer = setInterval(function(){
	// 	console.log(i);
	// 	console.log(navis[i].style.left);
	// 	navis[i].style.left = navis[i].offsetLeft+0.05*shift_sitex+'px';
	// 	navis[i].style.top = navis[i].offsetTop+0.05*shift_sitey+'px';
	// 	if (Math.abs(navis[i].style.left-aim_left)<2){
	// 		clearInterval();
	// 	}
	// },30);//错误版本，此时navis[i]查找不到,要用this，这个原因未知（？），并且style.left只能用于赋值，不能用于取出
	startMove(navis[i],dist_left,dist_top,aim_left,aim_top);
}

function startMove(obj,dist_left,dist_top,aim_left,aim_top){
	obj.timer = setInterval(function(){
		// console.log(obj);
		obj.style.left = obj.offsetLeft+0.05*(dist_left)+'px';
		obj.style.top = obj.offsetTop+0.05*(dist_top)+'px';
		if (Math.sqrt((obj.offsetLeft-aim_left)**2+(obj.offsetTop-aim_top)**2)<20){//估计是因为每次移动都整数的问题，导致最后偏差有点烦
			// clearInterval(obj.timer);
			for (var i =0;i<navis.length;i++){
				clearInterval(navis[i].timer);
			}
		}
	},50);
	}
// console.log(centerx,centery);

