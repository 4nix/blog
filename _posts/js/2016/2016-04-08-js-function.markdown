---
layout: post
title:  js传参问题
date:   2016-04-09 20:08:52 +0800
categories: js
uid: 1460203738
---
说说js传参问题, 被小伙伴问到为什么传个对象进去函数能直接操作更改呢?

想想是哦, 虽然一直知道是这样的, 但是从没注意到这个问题呢, 切段代码试一下

<br>

{% highlight js startinline="1"  hl_lines="3" %}
var setObj = function(obj) {
	console.log(obj.val, testObj.val);  //set-before set-before
	obj.val = "set-after";
	console.log(obj.val, testObj.val);  //set-after set-after, 注1:
	console.log(obj === testObj);       //true, 注2:

	obj = {};						    //注3:
    
	console.log(obj.val, testObj.val);  //undefined "set-after", 注4:
	obj.val = "set-again";
	console.log(obj.val, testObj.val);  //set-again set-after
	console.log(obj === testObj);       //false 注5:
}

var testObj = {val: "set-before"};
setObj(testObj);


{% endhighlight %}


通过上面可以看出, 如果参数传入的是对象的话, 其实传入的是一个地址, obj也就拷贝了testObj的地址, 

其操作结果正如*`var t = {}; var a = t; a.param = 'param a'; console.log(t.param);`*一样了, 会直接作用到*t*上了

同理, 对于数组也是一样.

<br>

**注1** 更改其中一个, 另一个也会更改, 因为两个变量里都是对应了同一个地址, 也就是对应了同一个值

**注2** 既然是同一个值, 结果当然是全等了

**注3** 这里obj里的值不再是传入的*testObj*那个地址了, 而是新给的*{}*的地址

**注4** 新的对象里面没有val值, 所以是*undefined*, 但是*testObj*还是原来的那个他, 没人动他

**注5** 别说全等了, **==**都不好使
