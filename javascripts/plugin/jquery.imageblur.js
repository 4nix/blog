$.fn.imageblur = function(options) {
	var defaults = {};
	var opts = $.extend(defaults, options);

	var $this = $(this);

	$this.ready(function() {


		//更改postion
		$this.parent().css("position", "relative");

		//绘制canvas
		var canvas = $("<canvas width="+$this.width()+" height="+$this.height()+" />", {
			// width: $this.width(),
			// height: $this.height(),
		});
		canvas.css({
			"filter": "blur(5px)",
			"-webkit-filter": "blur(5px)",
			"position": "absolute",
			"z-index": 100,
			"left": $this.position().left,
			"top": $this.position().top,
			"cursor": "pointer"
		});
		$this.after(canvas);

		var cloneImage = $this.clone();
		var docCanvas = canvas[0];


		ctx = docCanvas.getContext("2d");
		var img = new Image();


		img.onload = function() {
			ctx.drawImage(img, 0, 0, $this.width(), $this.height());
			ctx.globalCompositeOperation = 'destination-out';
		};
		
		img.src = $this.attr("src");


		var state = false;

	    docCanvas.addEventListener("mousedown", function(e) {
	        state = true;
	            var x = e.pageX;
	            var y = e.pageY;

	            var c = this.getBoundingClientRect();
	            // console.log(c.left, e.pageX, c.top, e.pageY);
	            // ctx.fillStyle = "transparent";
	            ctx.beginPath();

	            ctx.arc(x - c.left, y - c.top, 10, 0, 2*Math.PI);

	            // ctx.arc(0, 0, 10, 0, 2*Math.PI);
	            ctx.fill();
	    });

	    document.addEventListener("mouseup", function(e) {
	        state = false;
	    });

		docCanvas.addEventListener("mousemove", function(e) {
	        if (state) {
	            var x = e.pageX;
	            var y = e.pageY;

	            var c = this.getBoundingClientRect();
	            // console.log(c.left, e.pageX, c.top, e.pageY);
	            // ctx.fillStyle = "transparent";
	            ctx.beginPath();

	            ctx.arc(x - c.left, y - c.top, 10, 0, 2*Math.PI);

	            // ctx.arc(0, 0, 10, 0, 2*Math.PI);
	            ctx.fill();
	        }
	    });

 	});

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