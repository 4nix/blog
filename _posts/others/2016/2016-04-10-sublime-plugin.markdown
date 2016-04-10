---
layout: post
title:  sublime自定义小插件
date: 2016-04-10 20:23:34 +0800
categories: others
uid: 1460291020
---
写jekyll的时候必须的写**date**, 分享一段能自动插入当前时间的代码

首先按步骤, *tools->New Plugin..*, 直接保存, 名字随便起, 内容如下:

<br>

{% highlight python %}
# 后面的+0800不要省略, 否则jekyll解析了不了日期
import datetime, sublime, sublime_plugin

class AddCurrentTimeCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.run_command("insert_snippet", 
            {
                "contents": "%s +0800" % datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") 
            }
        )
{% endhighlight %}

<br>

然后再去**Preferences->Key Bindings - User**中绑定快捷键

<br>

{% highlight python %}
[
    {
        "command": "add_current_time",
        "keys": [
            "ctrl+shift+d"
        ]
    }
]
{% endhighlight %}

<br>

是不是瞬间有借题发挥的想法了!

我们也可以照这个方式为jekyll生成一个基于时间戳的唯一id

<br>

{% highlight python hl_lines=7 %}
import time, sublime, sublime_plugin

class AddUidCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.run_command("insert_snippet", 
            {
                "contents": "%d" % time.time()
            }
        )
{% endhighlight %}

<br>

好了, 多学学python吧, 装逼的舞台就交给你们了~~

![装逼的舞台交给你们了](http://ww3.sinaimg.cn/small/6ff2374djw1f2ryxdaorpj20b40b4gmb.jpg)