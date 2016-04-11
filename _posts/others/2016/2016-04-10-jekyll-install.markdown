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


{% highlight bash  hl_lines="3 4" %}
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

<del>坑爹呢！！经过我不断测试, 传不过去数组, 只能传单一数字, 谁有解决方法能够一次高亮多行, 感激不尽!</del>

<br>

最后看了源码找到方法了, 高亮多行传参得 **hl_lines="2 3 5"**, 中间用空格, 这样就能加亮**2**, **3**, **5**行了

<br>

没事来看看pygments是怎么实现的吧, 先来看看 *html.py* 这个文件(ps, py2.7 和 py3+的pygments文件列表不同, 不过代码都一样)

{% highlight python linenostart=419 hl_lines=4 linenos %}
# 看到没, pygments能接受的参数更多了, 不过这里有个小bug, 我高亮了第二行居然没把行号给高亮进去
# 无所谓了, 直接看关键函数get_list_opt
self.hl_lines = set()
        for lineno in get_list_opt(options, 'hl_lines', []):
            try:
                self.hl_lines.add(int(lineno))
            except ValueError:
                pass
{% endhighlight %}

<br>

{% highlight python hl_lines=5 %}
# 在util.py里找到get_list_opt
def get_list_opt(options, optname, default=None):
    val = options.get(optname, default)
    if isinstance(val, string_types):
        return val.split()
    elif isinstance(val, (list, tuple)):
        return list(val)
    else:
        raise OptionError('Invalid type %r for option %s; you '
                          'must give a list value' % (
                              val, optname))
{% endhighlight %}

python的**split()**, 中间没有带参数, 意味着用空格分割字符串, 好了, 赶紧复习python去

才半年没看就全忘光了![不好意思啊](http://ww1.sinaimg.cn/small/6ff2374djw1f2t9snmgfdg202i01yq37.gif)