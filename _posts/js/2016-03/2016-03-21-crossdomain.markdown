---
layout: post
title:  "我用的JS跨域"
date:   2016-03-21 22:42:56 +0800
categories: js
---
关于跨域, 已经不是新鲜技术了, 网上一搜就是一大堆, 很多很全很诡异很繁琐, 实际项目中我们只用其中一种即可, 其他的了解就行了
本人比较懒, 代码越少越好, 最简单的:


{% highlight js %}
<script src="http://remote.com/remote.js"></script>
{% endhighlight %}
         
<br><br>

### 第二种, 使用JSONP
原理就不细讲了, 其实就是上面那种方式换了种写法而已
附上 ajax 调用JSONP 代码

{% highlight js %}
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function(){ 
$.ajax({
     type: "get",
     async: false,
     url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
     dataType: "jsonp",
     jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)            
     jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
     success: function(json){
         alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
     },
     error: function(){
         alert('fail');
     }
 });
});
</script>
{% endhighlight %}
目的页面结果:

{% highlight html %}
flightHandler({
    "code": "CA1998",
    "price": 1780,
    "tickets": 5
});
{% endhighlight %}


### 第三种, 我实际项目中用的最多的, 毕竟接口方都是固定格式, 你要JSONP 人家不一定单为了你一个人写, 而且重要的是, 第二种直接就给出了接口地址, 不喜欢
所以我 使用php的curl功能来完成跨域. 具体就是把php放在不用跨域的地址, 用php去请求跨域的地址, 然后把结果加工一下返回自己