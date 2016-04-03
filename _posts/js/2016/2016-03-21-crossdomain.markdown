---
layout: post
title:  "我用的JS跨域"
date:   2016-03-21 22:42:56 +0800
categories: js
uid: 1459677148
---
关于跨域, 已经不是新鲜技术了, 网上一搜就是一大堆, 很多很全很诡异很繁琐, 实际项目中我们只用其中一种即可, 其他的了解就行了
本人比较懒, 代码越少越好, 最简单的:

### 第一种, 直接script
{% highlight js %}
<script src="http://remote.com/remote.js"></script>
{% endhighlight %}
         
<br>

### 第二种, 使用JSONP

附上 ajax 调用JSONP 代码

{% highlight js %}
<script type="text/javascript" src="lib/jquery.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function(){ 
jQuery.ajax({
     type: "get",
     async: false,
     url: "http://127.0.0.1/test/1.php?id=1234",
     dataType: "jsonp",
     jsonp: "callback", //重写请求参数中的回调函数的名字, 默认为callback, 这里可以省略           
     jsonpCallback:"info",//重写回调的函数名
     success: function(json){
         console.log(json);
     },
     error: function(){
         console.log('fail');
     }
 });
});
</script>
{% endhighlight %}
目的页面结果:

{% highlight html %}
info({
    "id": "1234",
    "name": "test name",
    "age": 20
});
{% endhighlight %}

上面例子中, 最终拼接成的url地址为*http://127.0.0.1/test/1.php?code=1234&callback=info&_=1459678289430*

如果修改代码中**jsonp:"callback"**为 **jsonp:"callother"**, 那么url会变成*http://127.0.0.1/test/1.php?code=1234&callother=info&_=1459678289430*

如果修改代码中**jsonpCallback:"info"**为 **jsonpCallback:"otherinfo"**, 那么url会变成*http://127.0.0.1/test/1.php?code=1234&callback=otherinfo&_=1459678289430*

<br>

关于jsonp, 实际上这个ajax已经不再返回XMLHttpRequest对象了, 而是变成了类似于第一种的**`<script>`**标签形式了.

参见文档[ajax](http://www.jquery123.com/jQuery.ajax/)

<br>

> 如果指定了script或者jsonp类型，那么当从服务器接收到数据时，实际上是用了`<script>`标签而不是XMLHttpRequest对象。这种情况下，$.ajax()不再返回一个XMLHttpRequest对象，并且也不会传递事件处理函数，比如beforeSend。 

<br>

### 第三种, 用后端curl去处理

这是我实际项目中用的最多的, 因为实际接口提供方都是固定的格式, 你要JSONP, 而其他人需要JSON, 然后人家并不会单为了你一个人单独写种格式, 遇到要验key的需求可能限制更大.

具体实现方式, 比如我使用php, 把php放在同域下, 然后用php的**curl**方法去请求跨域的地址, 然后把结果加工一下返回给自己.

这种方式无形的给服务器又增加一层负担, 所以要跟方法二互相权衡掂量下

