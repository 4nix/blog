$.fn.imageblur = function(options) {
	var defaults = {};
	var opts = $.extend(defaults, options);

	var $this = $(this);

	//更改postion
	$this.css("position", "relative");

	//绘制canvas
	var canvas = $("<canvas width="+$this.width()+" height="+$this.height()+" />", {
		// width: $this.width(),
		// height: $this.height(),
	});
	$this.after(canvas);

	var cloneImage = $this.clone();
	var docCanvas = canvas[0];
	cloneImage.css({
		"filter": "blur(5px)",
		"-webkit-filter": "blur(5px)"
	});

	ctx = docCanvas.getContext("2d");

	cloneImage[0].onload = function() {
		ctx.drawImage(cloneImage[0], 0, 0, $this.width(), $this.height());
	};
	


	// preImage: function(url, callback) {  
 //    	var img = new Image(); //创建一个Image对象，实现图片的预下载  
 //    	img.src = url;  
     
	//     if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
	//         callback.call(img);  
	//         return; // 直接返回，不用再处理onload事件  
	// 	}  
  
 //    	img.onload = function () { //图片下载完毕时异步调用callback函数。  
 //        	callback.call(img);//将回调函数的this替换为Image对象  
 //    	};  
	// }
};