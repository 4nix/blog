---
layout: post
title:  安装jekyll的pygments遇到的问题
date: 2016-04-10 19:13:29 +0800
categories: others
uid: 1460286804
---
我估计很多人跟我一样装了jekyll, 想试试pygments结果死活调不出来.

一排血红大字说"你是不是没装pygments啊"显得自己还挺冤的.

<br>

实际上该装的都装了, 环境变量也都没有问题, 问题出在安装ruby的 dev kit那一步上.

网上的教程太简单了, 完整的安装步骤是


{% highlight bash  hl_lines=4 %}
> cd D:\Ruby22\DevKit
> ruby dk.rb init
> ruby dk.rb review
> ruby dk.rb install
{% endhighlight %}

网上的教程只有第一步init, 就没后续了, 之后再安装 pygments.rb

<br>

{% highlight bash %}
gem install pygments.rb
{% endhighlight %}

再修改 **_config.yml**, 添加一行**highlighter: pygments**

<br>

整个就结束了, 为什么要这么折腾呢? 就是为了 paygments 里新增的参数 **hl_lines**！！！

这个我真找了全网都没说明, 查看官方文档就一句 *Specify a list of lines to be highlighted.*

坑爹呢！！经过我不断测试, 传不过去数组, 只能传单一数字, 谁有解决方法能够一次高亮多行, 感激不尽!