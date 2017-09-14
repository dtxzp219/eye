var mySwiper2 = ""
$(function(){
	// 整屏切换效果
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    loop: false,
	    onSlideChangeEnd: function(swiper){
	      if(swiper.activeIndex == 2 ){
//	      	enterTwos(mySwiper);
	      } //切换结束时，告诉我现在是第几个slide
	    }   	    
  	})
	
	if(mySwiper.activeIndex != 2)
	{
			showIt(mySwiper);
	use(mySwiper);
	changes(mySwiper);

  	mySwiper2 = mySwiper
	}

	
})
	 function changes(mySwiper){
	 	$('#use_camera').on('change',function(){
	  		var fil = this.files;
			for (var i = 0; i < fil.length; i++) {
			reads(fil[i],mySwiper);
			}
			mySwiper.slideTo(2, 500, true);
	  	})
	 };
	
	function reads(fil,mySwiper){
		var reader = new FileReader();
		reader.readAsDataURL(fil);
		reader.onload = function(mySwiper){
			$('#user_jpg').attr('src',reader.result);
			$('.loading').show();
			setTimeout(function(){
		  		$('.loading').hide('slow');	
		  	},3000);
		};
	}
function enterTwos(mySwiper){
	$('.loading').show();
	$('.swiperFourth').hide();
	mySwiper.updateSlidesSize();
  	setTimeout(function(){
  		$('.loading').hide('slow');	
  		$('.swiperFourth').show();
		// mySwiper.init();
		
		mySwiper.updateSlidesSize();
		mySwiper.slideTo(3, 500, false);
		var num = Math.ceil(Math.random()*3);
		// console.log(num);
		$('.ghost_num').attr('src','../images/ghost'+num+'.png');//鬼的数量
		$('.ghost_nums').html(num);
		var src = $('#user_jpg').attr('src');
  	},3000);
};
function showIt(mySwiper){
	$('.show_it').on('click',function(){
		$('.show_shade').show();	
	})
	$('.show_shade').on('click',function(){
		$('.show_shade').hide();	
	})
	$('.try_more_btn').on('click',function(){
		mySwiper.slideTo(1, 500, false);
	})
};
// 点击使用按钮
function use(mySwiper){
	// 
	$('.use_btn').on('click',function(){
		enterTwos(mySwiper);
//		$('.swiperFourth').show();
//		// mySwiper.init();
//		
//		mySwiper.updateSlidesSize();
//		mySwiper.slideTo(3, 500, false);
//		var num = Math.ceil(Math.random()*3);
//		// console.log(num);
//		$('.ghost_num').attr('src','../images/ghost'+num+'.png');//鬼的数量
//		$('.ghost_nums').html(num);
//		var src = $('#user_jpg').attr('src');
		// console.log(src);
		// $('.scene').attr('src',src);
	})
	// 点击开眼调用相机才会出现后面内容
	$('#use_camera').on('click',function(){
		$('.swiperT').show();
		mySwiper.updateSlidesSize();

		// mySwiper.slideTo(2, 500, true);
	})
	// 点击取消按钮，返回上一瓶
	$('.cancel').on('click',function(){
		mySwiper.slideTo(1, 500, false);
	})
};
//获取url中的参数
function GetQueryString(name) 
{ 
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
     var r = window.location.search.substr(1).match(reg); 
     if(r!=null)return  unescape(r[2]); return null; 
} 

// function enterTwo(mySwiper){
// 	$('.loading').show();
// 	$('.swiperFourth').hide();
// 	mySwiper.updateSlidesSize();
//   	setTimeout(function(){
//   		$('.loading').hide('slow');	
//   	},3000)
//   	// 
//   	console.log($('#use_camera').val());
//   	var source = $('#use_camera').val();
//   	// var Asrc = source.split("\\");
//   	console.log(source);
//   	// $('#user_jpg').attr('src','images/'+Asrc[Asrc.length - 1]+'');
//   	$('#user_jpg').attr('src',source);
// };




