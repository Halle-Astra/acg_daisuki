var order = 0 ;

var ms = new Array('三輪学 - June Song.mp3',
   '三輪学 - ちる はな さくら ~ピアノバージョン~.mp3',
	'三輪学 - ヨスガノソラ メインテーマ -願い-.mp3', 
	'三輪学 - 寂しい夜.mp3', 
	'三輪学 - 降り続く雨の街で.mp3',
	'三輪学 - 素直と不器用と意地っ張り.mp3',
	'三輪学 - 星の滴.mp3', 
	'三月のパンタシア - ブラックボードイレイザー.mp3',
	'三月のパンタシア - 群青世界.mp3',
	'森保しほ - 幸せのオトシモノ (一ノ瀬 ほとりVer.).mp3',
	 '山本美禰子 - 輪廻.mp3'
	 );

var mLi = document.getElementsByClassName("li_menu");
for (var i = 0 ;i<ms.length;i++){
	mLi[i].onclick = function(){
		playthis(this);
	}
}
//<audio id="music" autoplay="autoplay" src="music/三輪学 - June Song.mp3">
function update_order(){
var play_m = document.getElementById("music");
// console.log(play_m.outerHTML);
play_text = play_m.outerHTML.match(`(?<=(src="music/)).*(?=(">))`)[0];//终于得到了文件名
// console.log(play_text);
// now_order = 
order = ms.indexOf(play_text);
console.log(order);
}

function playthis(obj){
	mname = obj.getElementsByTagName("p")[0].innerText;
	// console.log(this);
	// console.log(mname);
	oA = document.getElementById("mask");
	oA.innerHTML = `<audio id="music" autoplay="autoplay" src="music/`+mname+`.mp3">`;
	update_order();
}

function play_byName(name){
	oA = document.getElementById("mask");
	oA.innerHTML = `<audio id="music" autoplay="autoplay" src="music/`+name+`">`;
}

function prev(){
	order = order - 1 ;
	if (order < 0 ){
		order = ms.length-1;
	}
	play_byName(ms[order])
}

function next(){
	order = order + 1 ;
	if(order >= ms.length ){
		order = 0 ;
	}
	play_byName(ms[order]);
}

var play_m = document.getElementById("music");
play_m.addEventListener('ended', function () {  
        next();
    }, false);
