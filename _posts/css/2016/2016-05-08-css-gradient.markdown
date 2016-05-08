---
layout: post
title:  css渐变radial-gradient 和 linear-gradient
date: 2016-05-08 19:00:49 +0800
uid: 1462705259
categories: css
---

### radial-gradient 径向渐变

该属性可以指定一个圆中心一个颜色, 并向指定的周围的颜色进行渐变, 语法为

*radial-gradient(shape at position, #color stop, #color stop, ...)* (自定的, 感觉比较好理解)

<br>

**shape at position** 可以省略, 默认是**ellipse at 50% 50%**, 即在中心位置进行椭圆渐变

+ **shape** 可取值**cricle**, **ellispe**(默认), **(xx)px**, **(xx)px (xx)px**, 
当值为1个**(xx)px**时, 即将此值作为圆形半径做变换, 例**10px at center center**.
当值为**(xx)px (xx)px**, 即将此值作为椭圆的x和y做变换, 例**10px 20px at center center**.
+ **position** 为圆心的位置, 可使用百分比**at 50% 50%**, 像素**at 50px 5px**, 也可使用position支持的关键字**at 50px top**

<br>

**#color stop**, 渐变色及结束位置, 注意要设置初始渐变色, 否则会直接调用第一个设置的渐变色作为初始渐变色,
**stop**可以是象素也可以是百分比

例如**radial-gradient(yellow 30%, green 35%);**, 中心是黄色, 知道30%后才开始渐变成绿色, 效果:

<div style="height: 150px;width: 200px;background: radial-gradient(yellow 30%, green 35%);"></div>

<br>

可以在一张背景中设置多个渐变, 多个渐变使用逗号**,**隔开, 
但是最前面的会覆盖后面设置的, 如果想要后面设置的颜色起作用, 请在适当的位置设置成透明色**transparent**即可

<br>

附上一段多渐变

{% highlight css %}
.style {
    height: 150px;
    width: 200px;

    background: radial-gradient(120px at 40px 50%, red 10%, green 25%, transparent 30%), 
		 radial-gradient(at 80% 50%, blue 10%, green 15%, transparent 20%); 
}
{% endhighlight %}

效果
<div style="height: 150px;width: 200px;background: radial-gradient(120px at 40px 50%, red 10%, green 25%, transparent 30%), radial-gradient(at 80% 50%, blue 10%, green 15%, transparent 20%); "></div>

<br>

### linear-gradient 线性渐变

该属性指定一个线性的渐变, 语法为

*radial-gradient(angle, #color stop, #color stop, ...)* (自定的, 感觉比较好理解)

<br>

**angle**为角度, 默认是**to bottom**, 可以取值**to top**, **to right**, **to left**, **to bottom**
也可以直接写弧度, **0deg**, **180deg**(=**to bottom**)..

<br>

**#color stop**与椭圆的一样, 不再累述了, 与**radial-gradient**一样, 支持同时多种渐变

例子:

<br>

{% highlight css %}
.style {
    height: 200px;
	width: 400px;
    background: linear-gradient(90deg, transparent 10%,  red , blue, transparent 90%),
		        linear-gradient(0deg,  yellow , green);
}
{% endhighlight %}

效果
<div style="height: 150px;width: 200px;background: linear-gradient(90deg, transparent 10%,  red , blue, transparent 90%), linear-gradient(0deg,  yellow , green);"></div>

<br>

延伸, 此外还有**repeating-radial-gradient** 和 **repeating-linear-gradient**, 
区别是渐变会到最后设置的那个颜色停止, 并从第一个设置的渐变色开始循环继续渐变

例如代码

<br>

{% highlight css %}
.style {
	height: 200px;
	width: 400px;
	background: repeating-linear-gradient(90deg, red, blue 20%);
}
{% endhighlight %}

效果

<br>

<div style="height: 150px;width: 200px;background: repeating-linear-gradient(90deg, red, blue 20%)"></div>