---
layout: post
title:  Google HTML/CSS Style Guide  Google 代码风格指南
date:   2016-03-29 23:10:07 +0800
categories: html
uid: 1459677109
---
自己翻的, 凑合看吧

原文地址[戳我](https://google.github.io/styleguide/htmlcssguide.xml)

<br>

## 省略嵌入资源的协议(Omit the protocol from embedded resources.)

省略图片, 媒体文件, 样式列表或script脚本的协议头(https, https:), 除非这个文件不使用 *http/https* 协议

Omitting the protocol—which makes the URL relative—prevents mixed content issues and results in minor file size savings.
(省略协议可以试URL变成相对地址, .... - -|)

{% highlight html %}
<!-- Not recommended -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>

<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

/* Not recommended */
.example {
  background: url(http://www.google.com/images/example);
}

/* Recommended */
.example {
  background: url(//www.google.com/images/example);
}
{% endhighlight %}


## 缩进(Indentation)

缩进请一次使用两个空格

不要使用制表符tabs或 制表符与空格混用 来做缩进
{% highlight html %}
<ul>
  <li>Fantastic
  <li>Great
</ul>

.example {
  color: blue;
}
{% endhighlight %}


## 大写(Capitalization)

只使用小写

所有的代码必须小写. 包括 HTML元素名称, 属性, 属性值(除非是 text/CDATA), css选择器, css属性, css属性值
{% highlight html %}
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">

/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
{% endhighlight %}


## 结尾空白(Trailing Whitespace)
移除结尾空白

结尾空白没有任何必要 并且会使差异变复杂

{% highlight html %}
<!-- Not recommended -->
<p>What?_

<!-- Recommended -->
<p>Yes please.
{% endhighlight %}


## 编码(Encoding)
使用utf-8

确保你的编辑器使用的是utf-8格式的, 并且没有字节顺序标记(The byte-order mark(BOM))

使用`<meta charset="utf-8">`为你的html模板和文档指定编码. 不要为你的样式列表指定编码格式

(More on encodings and when and how to specify them can be found in [Handling character encodings in HTML and CSS](https://www.w3.org/International/tutorials/tutorial-char-enc/).)


## 注释(Comments)

在需要的地方解释你的代码

用注释来解释代码: 这有什么功能, 这是干什么的, 为什么要单独或优先解决?

(注释是可选的, 整个文档也没有必要添加完整的注释. 因实际项目而异, 他会增加HTML 和CSS代码的大小)


## 代办事项(Action Items)

用 *TODO* 标记你的代办事项

只使用关键字*TODO*高亮代办事项, 不要使用诸如 *@@*的格式

用 *TODO(contact)* 这种格式添加联系人

在行为后面添加一个冒号, 比如 **TODO: action item**

{% highlight html %}
{# TODO(john.doe): revisit centering #}
<center>Test</center>

<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
{% endhighlight %}


## 文档类型(Document Type)
使用html5

HTML5 是首选的 **`<!DOCTYPE html>`**

(推荐使用**HTML**, 不要使用**XHTML**, 比如 **application/xhtml+xml**, 因为它缺乏浏览器和基础设备支持, 并且提供比**HTML**更少的空间做优化)

尽管HTML很友好, 仍然不用闭合空元素. 比如 写成 **`<br>`**而不是 **`<br />`**

<br>

## HTML 有效性(HTML Validity)

在合适的地方使用有效的HTML元素

使用有效的HTML代码, 除非它不会对性能造成影响, 否则它会增加页面大小

使用诸如 [W3C HTML validator](http://validator.w3.org/nu/) 之类的工具测试你的页面

使用有效的HTML是一个可衡量的基准质量属性,有助于了解技术要求和限制,并确适当的HTML用途。

{% highlight html %}
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.

<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
{% endhighlight %}

## 语义(Semantics)

根据目的使用HTML

按照被创造的目的使用HTML标签. 比如, 使用头部元素作为头部, **p** 元素作为段落, **a** 元素作为锚点等等.

根据目的使用标签对可访问性, 重用性以及代码意义等很重要.

{% highlight html %}
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
{% endhighlight %}


## 可回退的多媒体(Multimedia Fallback)

为多媒体提供可变的内容.

多媒体元素, 比如图片, 视频, canvas动画等, 请确保提供了可替代的选择. 对于图像, 这意味着使用有意义的**alt**文本属性, 对于视频, 音频等同样如此

提供可选择的内容对可访问性很重要. 比如用户如果是盲人, 而图像没有**alt**的话, 只有更少的线索让他知道这个图片是什么. 同样, 其它用户无法理解视频或音频的人也有这样的问题

(假如某些图片**alt**属性是冗余的, 或者那些无法直接用**css**的图片而它仅仅是用来装饰页面的, 就不需要**alt**)

{% highlight html %}
<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
{% endhighlight %}


## 关系的分离(Separation of Concerns)

将结构与描述和行为分离

严格保持结构(标记), 描述(样式), 和行为(脚本)分开, 并且尝试保持三者直接的最小相互作用.

这是说, 确保文档和模板只包含HTML, 并且HTML只单独作为结构体. 移动所有的描述到样式里, 以及所有的行为到脚本中

另外, 页面上请保持尽量少的样式文件数量和脚本数量

在页面上将结构, 描述, 行为分离的原因是, 修改HTML页面上的样式和脚本的代价往往很高.

{% highlight html %}
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>

<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
{% endhighlight %}


## 实体引用(Entity References)

不要使用实体引用

现在已经没有必要再使用实体引用了, 例如 **`&mdash;`**, **`&rdquo; `**或者**`&#x263a;`** , 只要保证你的编辑器编码是**utf-8**格式的就行了.

只有一个例外是对于HTML有特殊意义的字符(比如 **`<`** 和 **&**), 还有一些**"不可见"**的字符(比如没有宽度的空格)
{% highlight html %}
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.

<!-- Recommended -->
The currency symbol for the Euro is “€”.
{% endhighlight %}


## 可选标签(Optional Tags)

省略可选标签(可选)

考虑到文件大小优化, 可扫描等目的, 推荐使用可选标签. HTML5 specification 定义了哪些标签可以被省略

(这个方法可能需要很一段时间去建立一个广泛的指导方针, 因为他与一般前端工程师所学的内容不同. 为了一致性和简便性, 这里最好省略所有的可选标签, 而不是只当一个选择)

{% highlight html %}
<!-- Not recommended -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>

<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.
{% endhighlight %}


## type 属性(type Attributes)

省略style 和 scripts 所有的 type 属性

不要为style(除非用的不是css)和scripts(除非用的不是javascript)使用**type**属性

为这些属性指定 type是没有必要的, 因为 HTML默认隐含了 **text/css** 和 **text/javascript**. 这个甚至可以正常的用在较早的浏览器中.

{% highlight html %}
<!-- Not recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">

<!-- Recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">

<!-- Not recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>

<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
{% endhighlight %}


## 通用格式(General Formatting)

对每个**block**, **list**, **table**等启用新的一行, 并且对于子元素都进行缩进.

每个独立的元素的样式(例如css允许元素为每个**display**属性承担不同的角色), 将每个**block**, **list**, 或**table**等元素放到一个新行上.

同样, 对于**block**, **list**, **table**元素的子元素进行缩进.

(如果你的list因为空白而运行出现问题, 那就把所有的**li**都放在一行上. 语法分析器会抛出一个警告而不是一个错误)

{% highlight html %}
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>

<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
{% endhighlight %}


## HTML引号标记(HTML Quotation Marks)

当需要为属性的值加引号的时候, 使用双引号

使用双引号**""**而不要使用单引号**''**包裹属性值

{% highlight html %}
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
{% endhighlight %}


## CSS有效性(CSS Validity)

使用有效的CSS.

除非是在处理css验证的bug或者专有语法, 否则请使用有效的css代码

使用 [W3C CSS validator](http://jigsaw.w3.org/css-validator/) 等工具测试

使用有效的CSS是一个可衡量的基准质量属性, 可以发现CSS中没有影响的代码并且可以删除, 并确保CSS适当的使用


## ID 和 类名(ID and Class Naming)

使用有意义的或者通用的ID和类名.

舍弃那些靠直觉的或神秘的ID名和类名, 使用更能反映元素用途或者其他通用的名称.

名称要能指出或反映出这个元素的目的, 这样它才容易被理解或者改动最小.

通用的名称是指元素只是简单的回调, 与其它同类成员没有特别的性质和意义区别. 他们通常被当做*"助手"*.

使用功能化的或者通用化的名称能减少页面不必要的改变.

{% highlight html %}
/* Not recommended: meaningless */
#yee-1901 {}

/* Not recommended: presentational */
.button-green {}
.clear {}

/* Recommended: specific */
#gallery {}
#login {}
.video {}

/* Recommended: generic */
.aux {}
.alt {}
{% endhighlight %}


## ID和类名形式(ID and Class Name Style)

ID名和类型应该尽量短, 但是必要时要必要的长.

尝试更改ID或类名尽量的简洁

用这种方式命名ID和类名会增加代码的可理解性和影响性

{% highlight html %}
/* Not recommended */
#navigation {}
.atr {}

/* Recommended */
#nav {}
.author {}
{% endhighlight %}

<br>

## 类型选择器(Type Selectors)

避免ID与类名产生冲突

除非有必要(比如 助手 类), 不要将元素名后面跟上 id或者类.

避免不必要的祖先选择器对显示理由 是有帮助的.

{% highlight html %}
/* Not recommended */
ul#example {}
div.error {}

/* Recommended */
#example {}
.error {}
{% endhighlight %}


## 简写属性(Shorthand Properties)

尽可能的使用简写属性.

CSS提供了多种简写属性(比如 font)应该尽可能多的使用, 甚至有时只有一个值需要显示设置.

使用简写属性对代码的效率和可读性都很有帮助.

{% highlight html %}
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
{% endhighlight %}


## 0和单位(0 and Units)

省略**"0"**后的单位

不要在**0**后面加单位, 除非这个单位是必须的
*`margin: 0;
padding: 0;`*

<br>


## 主导位0(Leading 0s)

省略主导位的**0**.

不要在值为**-1和1**之间的数字放上**0*.

*font-size: .8em;*

<br>

## 十六进制表示法(Hexadecimal Notation)

尽量使用3位的十六进制

对于颜色值这是允许的, 3位颜色值比6位的更短更简洁

{% highlight html %}
/* Not recommended */
color: #eebbcc;

/* Recommended */
color: #ebc;
{% endhighlight %}


## 前缀(Prefixes)

使用应用程序作为选择器的前缀(可选的)

对于项目中包含其他项目或外部的网站上的大型项目, 为ID和类名使用前缀(像命名空间那样). 前缀使用尽量短并且唯一的标识符, 后面再跟一个波折号.

使用命名空间能帮助避免命名冲突, 并且让代码更容易维护, 比如在查找和替换操作中

{% highlight html %}
.adw-help {} /* AdWords */
#maia-note {} /* Maia */
{% endhighlight %}


## ID和类名的分隔符(ID and Class Name Delimiters)

用连字号分割ID和类名

不要把单词和缩写用除了连字号以外的任何字符(包含空字符)连接作为选择器, 目的是为了增强理解性和扫描性.

{% highlight html %}
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}

/* Recommended */
#video-id {}
.ads-sample {}
{% endhighlight %}


## Hacks(Hacks)

避免客户端检测CSS hacks, 优先使用不同的方式

对不同的客户端使用特殊的CSS过滤器, 工作区和hacks是冒险的. 两种方式都应该考虑最终为了达到维护一个有效的可管理的代码库. 用另一种方法, 为检测和hacks通行会损害长期运行的项目并带来阻力. 这意味着, 允许并且让检测和hacks的行为越来越频繁, 以至于太频繁.

<br>

## 声明顺序(Declaration Order)

按字母顺序声明

按字母顺序声明会使结构看起来更简单和容易维护

省略那些用于特定前缀的声明. 尽管如此, 混合特定的前缀的属性组们也应该排序(比如, **-moz**前缀要在 **-webkit**前缀 前面)

{% highlight html %}
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
{% endhighlight %}


## 代码块的内容应该缩进(Block Content Indentation)

缩进所有的代码块.

缩进所有的代码块, 这与声明的规则是一样的, 所以目的是提高代码层次并且增加理解性.

{% highlight html %}
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
{% endhighlight %}


## 声明结尾(Declaration Stops)

在每个声明结尾加上分号

每个声明结尾加上分号保持一致性和可扩展性.

{% highlight html %}
/* Not recommended */
.test {
  display: block;
  height: 100px
}

/* Recommended */
.test {
  display: block;
  height: 100px;
}
{% endhighlight %}


## 属性名结尾(Property Name Stops)

每个属性名后面的冒号跟上一个空格符.

总是在冒号和值之间加上一个空格(但是不要在属性名和冒号中加空格)保持一致性

{% highlight html %}
/* Not recommended */
h3 {
  font-weight:bold;
}

/* Recommended */
h3 {
  font-weight: bold;
}
{% endhighlight %}


## 声明块的分割(Declaration Block Separation)

在最后一个选择器和声明块之间添加一个空格

总是在最后一个选择器和左大括号之间添加一个空格

做大括号应该和最后一个选择器保持一个同一行上

{% highlight html %}
/* Not recommended: missing space */
#video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video
{
  margin-top: 1em;
}

/* Recommended */
#video {
  margin-top: 1em;
}
{% endhighlight %}


## 选择器和声明分隔(Selector and Declaration Separation)

选择器跟声明应该用新的一行分开

每一个选择器和声明都应该新起一行

{% highlight html %}
/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}

/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
{% endhighlight %}


## 规则分隔(Rule Separation)

用新行分隔规则

两个规则中应该相隔一个空行(即空两行)

{% highlight html %}
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
{% endhighlight %}



## CSS引号标记(CSS Quotation Marks)

选择器的值使用单引号

使用单引号**''**而不要使用双引号**""**作为标记. 对于URI值**url()**则不要使用引号

例外: 假如你要使用 **@charset** 条件, 使用双引号标记

{% highlight html %}
/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
{% endhighlight %}


## 区域注释(Section Comments)

一组区域使用一个注释(可选的)

如果可能, 使用注释来将样式表区域分组在一起. 使用新的行来分割区域

{% highlight html %}
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
{% endhighlight %}
