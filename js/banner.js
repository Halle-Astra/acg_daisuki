oUl = document.getElementsByClassName("ul_banner")[0];
var li_write = '';
for (var i = 0 ; i < 10 ;i++){
	li_write += `<li class = "li_banner"><img class="anime_img chisaki_img" src="img/imgs_imiji/`+i+`.png"></li>\n`;
}
li_write += `<li class = "li_banner"><img class="anime_img chisaki_img" src="img/imgs_imiji/`+0+`.png"></li>`
oUl.innerHTML = li_write;
var speed = 0.003;
var timer_chisaki = start_move();

// $('.li_banner').on('mouseover',function(){
// 	clearInterval(timer_chisaki);
// 	this.addClass("hover_scale_class");
// });
// $('.li_banner').on("mouseout", function(){
// 	timer_chisaki = start_move();
// 	this.removeClass("hover_scale_class");
// });//不懂为什么加了这个就翻车，开始加速

oLi = document.getElementsByClassName("li_banner");
for (var i = 0  ; i  < oLi.length;i++){
	oLi[i].onmouseover = function(){
		clearInterval(timer_chisaki);
		this.classList.add("hover_scale_class");
	};
	oLi[i].onmouseout = function(){
		timer_chisaki = start_move();//没懂为什么不能有var，否则防加速失效。
		this.classList.remove("hover_scale_class");
	}
}


function start_move(){
	clearInterval(timer_chisaki);
	var timer_chisaki = setInterval(function(){
		
		oUl.style.top=oUl.offsetTop-oUl.clientHeight*speed +'px';
		console.log(oUl.clientHeight);
		if (oUl.offsetTop+10*Math.floor(oUl.clientHeight)<1)
		{
			oUl.style.top = 0;
		}
	},15);
	return timer_chisaki;
}