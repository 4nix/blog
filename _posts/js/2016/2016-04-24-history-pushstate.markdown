---
layout: post
title:  "js 不跳转页面更改地址"
date:   2016-04-24 20:19:39 +0800
categories: js
uid: 1461500383
---
前两天被以前的同事这个蛋疼需求整蒙了, 只听说过不改变地址更改页面的, 第一次听说要不改变页面只更改地址的

最近的产品脑洞是不是有点大了...

<br>

仔细询问了产品后, 原来真有这种能.

来看下产品的需求.

用户通过滚屏, 可以在下方显示 *列表的下一页*, 但是此时数据是从ajax中请求过来的, 所以点击*后退*按钮后会跳到*首页*等列表页的入口页.

而产品希望点*后退*后返回到列表的上一页...

听起来还挺合理...

<br>

通过分析产品给的示例网站, 发现对方使用了**history.pushState**, 网上一搜, 发现是html5的新特性, 牛逼啊, 这都行!

> HTML5引进了history.pushState()方法和history.replaceState()方法，它们允许你逐条地添加和修改历史记录条目。这些方法可以协同window.onpopstate事件一起工作。
>
>
> 使用 history.pushState() 会改变 referrer 的值，而在你调用方法后创建的 XMLHttpRequest 对象会在 HTTP 请求头中使用这个值。referrer的值则是创建 XMLHttpRequest 对象时所处的窗口的URL。

<br>

嗯, 这下就好解决了, 每次ajax请求后把地址更改就行了.

看下pushState使用方法

{% highlight js %}
//history.pushState(state object, title, URL)
//state object: 状态对象, 此值会跟设置的历史记录相关联, 并在popstate事件中调用, 平常设定为{}或null就行
//title: 标题, firefox预留了此值, 并未完全实现
//url: 更改当前地址, 并加入到历史记录中

window.onpopstate = function(event) {
  console.log("state: ", event.state);
};
history.pushState({page: 1}, "page 1", "?page=1");
history.pushState({page: 2}, "page 2", "?page=2");
history.back(); //  state: Object { page=1}, 这里从 page 2 跳到page1, 所以获取的值为 {page: 1}
history.back(); //  state: null, 从page 1 再次调回原地址, 因此没有state值

{% endhighlight %}

目前还有**pjax**一种插件, 实现的正式不跳转页面, 但是更改地址和页面....(真特么能折腾!)

<br>

参考资料:

[MDN - 操纵浏览器的历史记录](https://developer.mozilla.org/zh-CN/docs/DOM/Manipulating_the_browser_history)

[MDN - popstate](https://developer.mozilla.org/zh-CN/docs/Web/Events/popstate)

*************************

网上有段恶意代码跟这个有关

<br>

{% highlight js %}
var total = "";
for (var i = 0; i < 1000000; i++)
{
	total = total + i.toString();
	history.pushState(0, 0, total);
}
{% endhighlight %}

<br>

没时间解释了, 快试试!! 

<br>

**来戳这里 ====>** <a href="/blog/crash.html" rel="nofollow">是男人就戳100下!!</a>

**戳啊！！ ====>**<a href="/blog/crash.html" rel="nofollow">你有本事戳这里!!</a>

<br>

![死机了吗?](http://ww4.sinaimg.cn/mw690/6ff2374djw1f384ug7m4pj207b0ardgx.jpg)