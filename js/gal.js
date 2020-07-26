var order = 0;
// function go2NextS(old_order){//传进number类型，然后只要保证一个img配一个div，就可以实现简单索引。
// order++;
// $(".img_yuhi_1").removeClass("appear_gradually_class").addClass("hidden")//.addClass("vanish_gradually_class");
// $(".img_yuhi_1").eq(order).removeClass("hidden")//.addClass("appear_gradually_class");
// $(".div_yuhi2").removeClass("appear_opacity_class")//.addClass("vanish_gradually_class")
// 				.addClass("hidden");
// $(".div_yuhi2").eq(order).removeClass("hidden").addClass("appear_opacity_class")
// 				.css("display","block");
// }

function go2NextS(old_older){
order++;
change_frame();
}

function change_frame(){
oframe = document.getElementById("frame");

if  (order == 1 ){//新想法，没空实现，div 里放两个组合，一个组合慢慢消失，一个组合慢慢出现，但是这样的话，又会出现一开始的觉得模糊的不爽
oframe.innerHTML=`
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_2.png">
			<img class = "cry_gif" src = "img/cry_gif.gif">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				这三天夕阳总是被朋友借走带回家，但夕阳家的咖啡店很忙，
				我走不开，才发现我这么想见夕阳。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>
			`;}
			else if (order == 2 ){
				oframe.innerHTML = `
			
			<img class = "yuhi_img img_yuhi_1" id = "wrong_img" src = "img/yuhi_room.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				现在我打算睡觉了。
				</p><!-- 由于现在晚了，嫌麻烦，不想重新把img和div封进一个整体div，有空写成整体更方便一帧切换 -->
				<!-- 然后这里加个按钮实现跳转到下一页，will not be single -->
				<p onclick="go2NextS(1)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;}
			else if (order == 3 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_goback.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				突然夕阳从我的窗户翻了进来，我甚至来不及反应。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;}
			else if (order == 4 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_goback.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				然后就开始了和夕阳随意的闲扯...
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 5 ) {
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_goback.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：我不知道夕阳你还记不记得了...我啊，和阿姨有过一个约定。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 6 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_1.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				夕阳：约定？你和妈妈？（夕阳妈妈在夕阳还小时就去世了。）
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 7 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_1.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：我们约定，我会永远和夕阳在一起。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 8){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_2.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				夕阳：欸？
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 9){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_2.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：在夕阳的身边，永远注视着你。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 10 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_3.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				夕阳： 你？（夕阳表情有些不知所措）
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 11 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_4.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：在那时我并没有往深处想...但现在不同了。我必须要连阿姨的份一起，保护夕阳才行（这天朋友说夕阳不舒服）。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 12 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_4.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：明明如此...我却让你一直工作到连身体都吃不消，还老是受你照顾
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 13 ){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_4.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：我完全没有遵守和阿姨的约定啊....（朋友说不舒服时因为每天主管咖啡店，而我做东西不行，没法帮忙
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 14){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_5.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				夕阳：没有这种事啦，你一直...都在我的身边，帮了我很多。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 15){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_6.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：不...夕阳不在咖啡店时...忙的不行，同时我也很不安，连我这个男的都觉得吃力，你却是一个人挺过来。
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 16){
				oframe.innerHTML = `
			<img class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_6.png">
			<div class = "div_content_yuhi div_yuhi2">
				<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
				我：还说什么守护....
				</p>
				<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
			</div>`;
			}
			else if (order == 17){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_7.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：你...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 18){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_7.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：想起我和阿姨的约定...我才察觉自己真正的心情
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 19){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_8.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：我已经 无法想象夕阳不在我身边的生活了。（直视夕阳的眼睛，包含决心得说道
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 20){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_9.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：你，你说什么呢...太突，突然了，你，你真是...(夕阳变得脸蛋通红，移开了自己的视线)
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 21){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_9.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我突然说出了这么一番类似于告白的话，夕阳显得不知所措，完全冷静不下来。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 22){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_9.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：是，是因为和妈妈约定过... 你才一直在我身边的吗？
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 23){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_10.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：是，是因为义务、责任什么的... 才...才一直帮助我的？
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 24){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_10.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：不是，说起来很没面子，我只是到现在才想起来这个约定...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 25){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_10.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：这...这样啊...那...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 26){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_11.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：这...这样啊...那...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 27){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_11.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：从昨天开始夕阳一直不在我身边，于是我才认识到我的心情。我不想让你离开我。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 28){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_12.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：从今往后，我想一直注视夕阳
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 29){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_12.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：我....喜欢夕阳。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 30){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_13.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：........！
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 31){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_14.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：你.......
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 32){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_14.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳仿佛在仔细咀嚼我的话，眼睛一眨不眨地盯着我。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 33){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_15.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：我.........
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 34){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_15.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							这次轮到我紧张了。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 35){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_kioku.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我们两个一直保持着发小这样单纯的关系。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 36){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_kioku.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							对夕阳来说，我已经是如同家人一般自然的存在。可能她对我根本就没抱有什么恋爱感情。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 37){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_kioku.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							所以就算我告白了，也可能只是给她添麻烦了
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 38){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_16.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：......................
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 39){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_17.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我紧张得像在等待法官宣判自己的死罪
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 40){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_17.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我凝视着夕阳。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 41){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_18.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：我一直都想知道.... 你是怎么看我的
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 42){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_19.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：因为....从很小的时候，你就一直在我的身边...你在想什么，我马上就能明白。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 43){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_20.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：所以呢，那实在是太过理所当然...我有时就觉得....是不是你从来都没有把我当成异性看待呢...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 44){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_21.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：虽然好象很了解你，但一到这种关键的事情上...真的一点都不明白。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 45){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_21.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：夕阳....
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 46){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_22.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							她一直以来，可能也是在不安中度过的吧。在一年前,我又搬回来的时候，自我们最后一次见面以来，我们都成长了很多
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 47){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_23.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：但是，但是.......
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 48){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_24.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：太好了......你说出了.....我最想听到的 话.............
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 49){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_24.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳放松了下来，喜笑颜开
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 50){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_25.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：你是不是怕我受伤害，才故意绕开这个问题的呢，我有时候也会这样想...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 51){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_26.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：你是不是知道了我的心意，但是无法接受
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 52){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_27.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：原来不是的...你是认真为我着想
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 53){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_27.png">
						 <audio  autoplay="autoplay"  src="img/好高兴.mp3"></audio>
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：好高兴....我真的好高兴啊
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 54){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_27.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳那大大的眼瞳渐渐湿润，在荧光灯的照耀下，绽放点点光辉，令人心碎。她就这么直勾勾得盯着我
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 55){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_28.png">
						 <audio  autoplay="autoplay"  src="img/daisuki.mp3"></audio>
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：喜欢........最喜欢你了........
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 56){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_28.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我：夕阳 ....我也是...
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 57){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_29.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我们缓缓地握住彼此的手，然后拥在一起。我仔细地感受着怀抱中夕阳的感触。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 58){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_30.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							仿佛温暖和温柔透过肌肤，流入了我的身体一般，感觉非常充实。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 59){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_30.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							这种直达内心，逐渐膨胀的感情让胸前感到一股燥热
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 60){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_31.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							我忽然察觉到，夕阳在小声得哭泣
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 61){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_31.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							看着夕阳害羞地将头埋进我的怀里，高兴得热泪盈眶......
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 62){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_31.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							感觉心中燃起了一股决意——执子之手。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 63){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_32.png">
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：唔......欸嘿嘿.....还真是难为情呢........这么郑重其事的。
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 64){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_kiss.png">
						 <audio  autoplay="autoplay"  src="img/kiss.mp3"></audio>
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							...........................
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						
						`;}
			else if (order == 65){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_33.png">
						 <audio  autoplay="autoplay"  src="img/kiss_finish.mp3"></audio>
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：我们....接吻了呢？
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 66){
			 			 oframe.innerHTML = `<img  class = "yuhi_img img_yuhi_1" src = "img/yuhi_love_39.png">
						 <audio  autoplay="autoplay"  src="img/teretere.mp3"></audio>
						<div class = "div_content_yuhi div_yuhi2">
							<p class = "text_yuhi_normal " ><!-- 晚些再考虑对它做淡入淡出 -->
							夕阳：哈哈......你，你在害羞呢.....好可爱
							</p>
							<p onclick="go2NextS(2)" class = "continue_btn"> >>点击此处继续</p>
						</div>
						`;}
			else if (order == 67){
				oframe.innerHTML = `
				<img src = "img/bg.gif" class="yuhi_img img_yuhi_1" style = "background:url(img/yuhi_marry.png) no-repeat ;background-size:cover;">
				<!--img src = "img/bg.gif" class = "img_bg" style = "width:100%;height:100%;overflow:hidden"id = 'flower_gif'-->
				<h3 id = "h3_marry">最后夕阳穿着朋友香穗自己做的婚纱，在夕阳的生日那天和朋友一起制造了这场惊喜。</h3>
				<div id = "div_love">
				<p id = "love">我永远喜欢深菜川夕阳</p>
				</div>`
				};
	}