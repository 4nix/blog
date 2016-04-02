---
layout: post
title:  html标签不闭合部分列表
date:   2016-03-28 23:13:28 +0800
categories: html
uid: 1459592801
---
[原文链接](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission)
自己翻的, 凑合着看吧

<br>

12.1.2.4 Optional tags 
================
可以被省略的标签

在某些情况下省略标签, 并不意味着这个标签不存在了, 他只是隐含了, 仍然在页面上. 
比如, 即使**<html>**标签没写在页面上, 每个html页面都会包含根元素**html**

<br>

如果html页面的第一个元素不是个**注释**的话, **html**的*起始标签*可以被省略
{% highlight html %}
下面这种情况可以移除<html>:
<!DOCTYPE HTML>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

这样做会使文档看起来像这样:
<!DOCTYPE HTML>

  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>


上面这个有完全相同的DOM结构. 要特别注意根元素周围的空格被解析器省略了.
下面这个例子也同样会解析成完全相同的结构:
<!DOCTYPE HTML><head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>


但是, 下面这个例子, 移除起始标签会导致注释跑到html元素之前:
<!DOCTYPE HTML>
<html>
  <!-- where is this comment in the DOM? 这段注释会在哪呢 -->
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

移除标签后, 整个文档会被解析成如下:
<!DOCTYPE HTML>
<!-- where is this comment in the DOM? 这段注释会在哪呢 -->
<!-- <html> 这个可以被省略 -->
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>


这就是为什么这个标签只能在后面跟的不是注释才能省略的原因: 在注释的内容后移除标签会改变原本的语法树结构. 
当然, 如果认为这个注释在哪里都无所谓的话, 这个标签还是可以被省略的,  就像这个注释被移动到起始标签之前的位置

{% endhighlight %}

**html**的*结束标签*可以被省略, 假如**html**紧跟后面的不是*注释*.

<br>

**head**元素的*起始标签*可以被省略, 假如**head**是*空的*, 或者**head**元素里面第一个内容是一个*元素*.

**head**的*结束标签*可以被省略, 假如**head**元素紧跟后面的不是*空格*或*注释*.

<br>

**body**的*起始标签*可以被省略, 假如**body**是空的, 或者**body**的第一个内容不是*空白字符*或*注释*, 
也不能是 **meta**, **link**, **script**, **style**以及**template**元素

**body**的*结束标签*可以被省略, 假如**body**元素紧跟后面的不是*注释*

{% highlight html %}
注意下面的例子, head元素的起始和结束标签, 还有body元素的起始标签, 都不能被省略, 因为他们两边有空格:
<!DOCTYPE HTML>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

(body和html元素的结束标签可以省略不会引起任何问题; 他们后面的所有的空格都会被解析到body元素里.)
通常情况下, 空格不是什么问题; 假如我们先移除那些我们不关心的空格:
<!DOCTYPE HTML><html><head><title>Hello</title></head><body><p>Welcome to this example.</p></body></html>

然后我们就可以省略一部分标签而不影响整个DOM结构了:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.</p>

通过这点, 我们同样能加回些空格:
<!DOCTYPE HTML>
<title>Hello</title>
<p>Welcome to this example.</p>


上面这个跟下面是相等同的, 但是省略了有隐含位置的标签; 
这里唯一有空格的是在新起一行的head标签最后的位置:
<!DOCTYPE HTML>
<!-- <html><head> --><title>Hello</title>
<!-- </head><body> --><p>Welcome to this example.</p><!-- </body></html> 注释内的可被省略 -->

{% endhighlight %}


**li**元素的*结束标签*可以被省略, 假如**li**紧跟后面的是另一个**li**或者父元素中没有其他的内容

<br>

**dt**元素的*结束标签*可以被省略, 假如**dt**元素紧跟后面的是一个**dt**或**dd**元素

<br>

**dd**元素的*结束标签*可以被省略, 假如**dd**元素紧跟后面的是一个**dd**后面或者**dt**元素, 亦或者没有其他的内容在父元素内

<br>

**p**元素的*结束标签*可以被省略, 
假如**p**元素紧跟后面的是 **address**, **article**, **aside**, **blockquote**, **details**, **div**, **dl**, **fieldset**, 
**figcaption**, **figure**, **form**, **h1**, **h2**, **h3**, **h4**, **h5**, **h6**, **header**, **hgroup**, **hr**, **main**, 
**menu**, **nav**, **ol**, **p**, **section**, **table**, **ul**等元素, 
或者没有更多的内容在父元素并且父元素不是**a**, **audio**, **del**, **ins**, **map**, **noscript**, **video** 等元素

{% highlight html %}
我们可以进一步简化前面的例子:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.<!-- </p> 这个可以被省略 -->
{% endhighlight %}


**rt**元素的*结束标签*可以被省略, 假如**rt**元素紧跟后面的是一个**rt**或者**rp**元素, 或者没有更多的内容在父元素.

<br>

**rp**元素的*结束标签*可以被省略, 假如**rp**元素紧跟后面的是**rt**或者**rp**元素, 或者没有更多的内容在父元素.

<br>

**optgroup**元素的*结束标签*可以被省略, 假如**optgourp**元素紧跟后面的是另一个**optgroup**元素, 或者没有更多的内容在父元素.

<br>

**option**元素的*结束标签*可以被省略, 假如**option**元素紧跟后面的是另一个**option** 或者 **optgroup**元素, 或者没有更多的内容在父元素.

<br>

**colgroup**元素的*起始标签*可以被省略, 假如**colgroup**的第一个内容是**col**元素, 并且这个元素不是直接跟在前一个已经省略结束标签的**colgroup**.(如果元素是空的也不能省略)

**colgroup**元素的*结束标签*可以被省略, 假如**colgroup**元素紧跟在后面的不是空白字符或者注释.

<br>

**caption**元素的*结束标签*可以被省略, 假如**caption**元素紧跟在后面的不是空白字符或注释.

<br>

**thead**元素的*结束标签*可以被省略, 假如**thead**元素紧跟后面的是**tbody**或**tfoot**元素.

<br>

**tbody**元素的*起始标签*可以被省略, 假如**tbody**元素的第一个内容是**tr**元素, 
并且这个元素不是直接跟在已经被省略结束标签的**tbody**, **thead**或**tfoot**后面.(如果元素是空的也不能省略)

**tbody**元素的*结束标签*可以被省略, 假如**tbody**元素紧跟在后面的是**tbody**或者**tfoot**元素, 或者没有更多内容在父元素.

<br>

**tfoot**元素的*结束标签*可以被省略, 假如没有更多的内容在父元素.

<br>

**tr**元素的*结束标签*可以被省略, 假如**tr**元素紧跟在后面的是另一个**tr**元素, 或者没有更多的内容在父元素.

<br>

**td**元素的*结束标签*可以被省略, 假如**td**元素紧跟在后面的是**td**或**th**, 或者没有更多内容在父元素.

<br>

**th**元素的*结束标签*可以被省略, 假如**th**元素紧跟在后面的是**td**或**th**, 或者没有跟多的内容在父元素.

{% highlight html %}
忽略所有可忽略的标签能让表格简洁的多.
看下面的例子:
<table>
 <caption>37547 TEE Electric Powered Rail Car Train Functions (Abbreviated)</caption>
 <colgroup><col><col><col></colgroup>
 <thead>
  <tr>
   <th>Function</th>
   <th>Control Unit</th>
   <th>Central Station</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Headlights</td>
   <td>✔</td>
   <td>✔</td>
  </tr>
  <tr>
   <td>Interior Lights</td>
   <td>✔</td>
   <td>✔</td>
  </tr>
  <tr>
   <td>Electric locomotive operating sounds</td>
   <td>✔</td>
   <td>✔</td>
  </tr>
  <tr>
   <td>Engineer's cab lighting</td>
   <td></td>
   <td>✔</td>
  </tr>
  <tr>
   <td>Station Announcements - Swiss</td>
   <td></td>
   <td>✔</td>
  </tr>
 </tbody>
</table>

同样的表格, 除去空格差异, 可以写成如下这样:
<table>
 <caption>37547 TEE Electric Powered Rail Car Train Functions (Abbreviated)
 <colgroup><col><col><col>
 <thead>
  <tr>
   <th>Function
   <th>Control Unit
   <th>Central Station
 <tbody>
  <tr>
   <td>Headlights
   <td>✔
   <td>✔
  <tr>
   <td>Interior Lights
   <td>✔
   <td>✔
  <tr>
   <td>Electric locomotive operating sounds
   <td>✔
   <td>✔
  <tr>
   <td>Engineer's cab lighting
   <td>
   <td>✔
  <tr>
   <td>Station Announcements - Swiss
   <td>
   <td>✔
</table>

由于表格单元占了更少的空间, 因此可以把他们写成一行来变得更简洁:
<table>
 <caption>37547 TEE Electric Powered Rail Car Train Functions (Abbreviated)
 <colgroup><col><col><col>
 <thead>
  <tr> <th>Function                                  <th>Control Unit     <th>Central Station
 <tbody>
  <tr> <td>Headlights                                <td>✔                <td>✔
  <tr> <td>Interior Lights                           <td>✔                <td>✔
  <tr> <td>Electric locomotive                       <td>✔                <td>✔
  <tr> <td>Engineer's cab lighting                   <td>                 <td>✔
  <tr> <td>Station Announcements                     <td>                 <td>✔
</table>

The only differences between these tables, at the DOM level, is with the precise position of the (in any case semantically-neutral) white space.
这些表格在DOM上的区别, 只有空格的位置(在任何semantically-neutral下)

{% endhighlight %}

<br>

尽管如此, 永远不要省略有属性的*起始标签*.

{% highlight html %}
回到前面所有空格被移除然后科员标签被移除的例子:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.

假如这个例子中的body元素有class属性并且html元素有lang属性, 那么上面的例子必须写成:
<!DOCTYPE HTML><html lang="en"><title>Hello</title><body class="demo"><p>Welcome to this example.
{% endhighlight %}


*This section assumes that the document is conforming, in particular, that there are no content model violations. Omitting tags in the fashion described in this section in a document that does not conform to the content models described in this specification is likely to result in unexpected DOM differences (this is, in part, what the content models are designed to avoid).
这篇文章假定文档是遵守规范的, 特别是没有违反规则的模型. 这篇文章中描述的省略标签与内容模型并不一致, 可能会导致意外的差异(这就是, 在某些方面, 设计内容模型时所要避免的)* (-_-|| 这段话我读不懂)