---
layout: post
title:  html标签不闭合部分列表
date:   2016-03-28 23:13:28 +0800
categories: html
---
12.1.2.4 Optional tags

Certain tags can be omitted.
可以被忽略的标签

Omitting an element's start tag in the situations described below does not mean the element is not present; it is implied, but it is still there. For example, an HTML document always has a root html element, even if the string <html> doesn't appear anywhere in the markup.
在以下情况下被忽略的标签并不意味着这个标签不存在了, 他只是被隐含了, 仍然在页面上. 比如, 每个html页面都会包含根元素html, 即使<html>标记没写在页面上

An html element's start tag may be omitted if the first thing inside the html element is not a comment.
如果html页面的第一个元素不是个注释的话, html的起始标签可以被忽略
For example, in the following case it's ok to remove the "<html>" tag:
<!DOCTYPE HTML>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

Doing so would make the document look like this:
<!DOCTYPE HTML>

  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

This has the exact same DOM. In particular, note that white space around the root element is ignored by the parser. The following example would also have the exact same DOM:
<!DOCTYPE HTML><head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

However, in the following example, removing the start tag moves the comment to before the html element:
<!DOCTYPE HTML>
<html>
  <!-- where is this comment in the DOM? -->
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

With the tag removed, the document actually turns into the same as this:
<!DOCTYPE HTML>
<!-- where is this comment in the DOM? -->
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>


This is why the tag can only be removed if it is not followed by a comment: removing the tag when there is a comment there changes the document's resulting parse tree. Of course, if the position of the comment does not matter, then the tag can be omitted, as if the comment had been moved to before the start tag in the first place.
这就是为什么这个标签只能在后面跟的不是注释才能忽略的原因: 在注释的内容后移除标签会改变原本的语法树结构. 当然, 如果认为这个注释在哪里都无所谓的话, 这个标签还是可以被忽略的,  就像这个注释被移动到起始标签之前的位置

An html element's end tag may be omitted if the html element is not immediately followed by a comment.
html的结束标签可以被忽略, 如果html元素没有跟在一个注释后面

A head element's start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
head元素的起始标签可以被忽略, 假如head是空的, 或者head的后仅跟的是一个元素

A head element's end tag may be omitted if the head element is not immediately followed by a space character or a comment.
head的结束标签可以被忽略, 假如head元素不是直接跟在一个空格或注释后面

A body element's start tag may be omitted if the element is empty, or if the first thing inside the body element is not a space character or a comment, except if the first thing inside the body element is a meta, link, script, style, or template element.
body的起始标签可以被忽略, 假如body是空的, 或者body的第一个字符不是空格或注释, 还有不能是 meta, link, script, style或者template元素

A body element's end tag may be omitted if the body element is not immediately followed by a comment.
body的结束标签可以被忽略, 假如body元素没有直接跟在一个注释后面
Note that in the example above, the head element start and end tags, and the body element start tag, can't be omitted, because they are surrounded by white space:
<!DOCTYPE HTML>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>Welcome to this example.</p>
  </body>
</html>

(The body and html element end tags could be omitted without trouble; any spaces after those get parsed into the body element anyway.)
Usually, however, white space isn't an issue. If we first remove the white space we don't care about:
<!DOCTYPE HTML><html><head><title>Hello</title></head><body><p>Welcome to this example.</p></body></html>

Then we can omit a number of tags without affecting the DOM:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.</p>

At that point, we can also add some white space back:
<!DOCTYPE HTML>
<title>Hello</title>
<p>Welcome to this example.</p>

This would be equivalent to this document, with the omitted tags shown in their parser-implied positions; the only white space text node that results from this is the newline at the end of the head element:
<!DOCTYPE HTML>
<html><head><title>Hello</title>
</head><body><p>Welcome to this example.</p></body></html>

An li element's end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
li元素的结束标签可以被忽略, 假如li直接跟在另一个li后面或者父元素中没有其他的内容

A dt element's end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
dt元素的结束标签可以被忽略, 假如dt直接跟在另一个dt后面或dd后面

A dd element's end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
dd元素的结束标签可以被忽略, 假如dd元素直接跟在另一个dd后面或者dt后面, 亦或者没有跟多的内容在父元素内

A p element's end tag may be omitted if the p element is immediately followed by an address, article, aside, blockquote, details, div, dl, fieldset, figcaption,figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, main, menu, nav, ol, p, pre, section, table, or ul element, or if there is no more content in the parent element and the parent element is an HTML element that is not an a, audio, del, ins, map, noscript, or video element.
p元素的结束标签可以被忽略, 假如p元素直接跟在 address, article, aside, blockquote, details, div, dl, fieldset, figcaption, figure, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, main, menu, nav, ol, p, section, table, ul元素, 或者没有更多的内容在父元素并且父元素不是a, audio, del, ins, map, noscript, video元素
We can thus simplify the earlier example further:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.</p>

An rt element's end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.

An rp element's end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
An optgroup element's end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
An option element's end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by anoptgroup element, or if there is no more content in the parent element.
A colgroup element's start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can't be omitted if the element is empty.)
A colgroup element's end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
A caption element's end tag may be omitted if the caption element is not immediately followed by a space character or a comment.
A thead element's end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
A tbody element's start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by atbody, thead, or tfoot element whose end tag has been omitted. (It can't be omitted if the element is empty.)
A tbody element's end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
A tfoot element's end tag may be omitted if there is no more content in the parent element.
A tr element's end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
A td element's end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
A th element's end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
The ability to omit all these table-related tags makes table markup much terser.
Take this example:
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

The exact same table, modulo some white space differences, could be marked up as follows:
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

Since the cells take up much less room this way, this can be made even terser by having each row on one line:
<table>
 <caption>37547 TEE Electric Powered Rail Car Train Functions (Abbreviated)
 <colgroup><col><col><col>
 <thead>
  <tr> <th>Function                              <th>Control Unit     <th>Central Station
 <tbody>
  <tr> <td>Headlights                            <td>✔                <td>✔
  <tr> <td>Interior Lights                       <td>✔                <td>✔
  <tr> <td>Electric locomotive operating sounds  <td>✔                <td>✔
  <tr> <td>Engineer's cab lighting               <td>                 <td>✔
  <tr> <td>Station Announcements - Swiss         <td>                 <td>✔
</table>

The only differences between these tables, at the DOM level, is with the precise position of the (in any case semantically-neutral) white space.
However, a start tag must never be omitted if it has any attributes.
Returning to the earlier example with all the white space removed and then all the optional tags removed:
<!DOCTYPE HTML><title>Hello</title><p>Welcome to this example.

If the body element in this example had to have a class attribute and the html element had to have a lang attribute, the markup would have to become:
<!DOCTYPE HTML><html lang="en"><title>Hello</title><body class="demo"><p>Welcome to this example.


This section assumes that the document is conforming, in particular, that there are no content model violations. Omitting tags in the fashion described in this section in a document that does not conform to the content models described in this specification is likely to result in unexpected DOM differences (this is, in part, what the content models are designed to avoid).
