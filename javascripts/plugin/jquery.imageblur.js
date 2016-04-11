$.fn.imageblur = function(options) {
	var defaults = {};
	var opts = $.extend(defaults, options);

	var $this = $(this);
	$this.ready(function() {

		// 更改父元素定位
		$this.parent().css("position", "relative");

		// 绘制canvas
		var canvas = $("<canvas width="+$this.width()+" height="+$this.height()+" />");
		canvas.css({
			"filter": "blur(5px)",
			"-webkit-filter": "blur(5px)",
			"position": "absolute",
			"z-index": 100,
			"left": $this.position().left,
			"top": $this.position().top,
			"cursor": "none"
		});
		$this.after(canvas);

		// 绘制图片
		var docCanvas = canvas[0];
		var img = new Image();

		ctx = docCanvas.getContext("2d");
		img.src = $this.attr("src");
		img.onload = function() {
			ctx.drawImage(img, 0, 0, $this.width(), $this.height());
			ctx.globalCompositeOperation = 'destination-out';
		};
		
		// 绑定事件
		var state = false;
	    docCanvas.addEventListener("mousedown", function(e) {
	        state = true;
	        wipe(e);
	    });

	    document.addEventListener("mouseup", function(e) {
	        state = false;
	    });

		docCanvas.addEventListener("mousemove", function(e) {
			//如果是按下的状态
	        if (state) {
	            wipe(e);
	        } else {
	        	over(e);
	        }
	    });

		// 擦除
	    function wipe(mouse) {
	    	var x = mouse.pageX;
            var y = mouse.pageY;
            var c = docCanvas.getBoundingClientRect();

            ctx.beginPath();
            ctx.arc(x - c.left, y - c.top, 10, 0, 2*Math.PI);
            ctx.fill();
	    }

	    // 鼠标滑过效果
	    var currentArc;
	    function over(mouse) {
	    	var x = mouse.pageX;
            var y = mouse.pageY;
            var c = docCanvas.getBoundingClientRect();

            if (currentArc) {
            	ctx.putImageData(currentArc.obj, currentArc.x, currentArc.y);
            }
            currentObj = ctx.getImageData(x - c.left - 10, y - c.top - 10, 20, 20);
            currentArc = {obj: currentObj, x: x - c.left - 10, y: y - c.top - 10};

            ctx.beginPath();
            ctx.arc(x - c.left, y - c.top, 10, 0, 2*Math.PI);
            ctx.fill();
	    }


 	});

};