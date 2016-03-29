---
layout: post
title:  Google HTML/CSS Style Guide  Google 代码风格指南
date:   2016-03-29 23:10:07 +0800
categories: html
---
自己翻的, 凑合看吧

原文地址[戳我](https://google.github.io/styleguide/htmlcssguide.xml)

Omit the protocol from embedded resources.
忽略嵌入资源的协议

Omit the protocol portion (http:, https:) from URLs pointing to images and other media files, style sheets, and scripts unless the respective files are not available over both protocols.
忽略图片, 媒体文件, 样式列表或script脚本的协议头(https, https:), 除非这个文件不使用 http/https 协议


Omitting the protocol—which makes the URL relative—prevents mixed content issues and results in minor file size savings.
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


Indentation
缩进
link▽
Indent by 2 spaces at a time.
缩进请一次使用两个空格

Don’t use tabs or mix tabs and spaces for indentation.
不要使用制表符tabs或 制表符与空格混用 来做缩进
<ul>
  <li>Fantastic
  <li>Great
</ul>

.example {
  color: blue;
}


Capitalization
大写
link▽
Use only lowercase.
只使用小写


All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).
所有的代码必须小写. 包括 HTML元素名称, 属性, 属性值(除非是 text/CDATA), css选择器, css属性, css属性值
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">

/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;


Trailing Whitespace
结尾空白
link▽
Remove trailing white spaces.
移除结尾空白

Trailing white spaces are unnecessary and can complicate diffs.
结尾空白没有任何必要 并且会使差异变复杂
<!-- Not recommended -->
<p>What?_

<!-- Recommended -->
<p>Yes please.


Encoding
编码
link▽
Use UTF-8 (no BOM).
使用utf-8

Make sure your editor uses UTF-8 as character encoding, without a byte order mark.
确保你的编辑器使用的是utf-8格式的, 并且没有字节顺序标记(The byte-order mark(BOM))

Specify the encoding in HTML templates and documents via <meta charset="utf-8">. Do not specify the encoding of style sheets as these assume UTF-8.
使用<meta charset="utf-8">为你的html模板和文档指定编码. 不要为你的样式列表指定编码格式


(More on encodings and when and how to specify them can be found in Handling character encodings in HTML and CSS.)



Comments
注释
link▽
Explain code as needed, where possible.
在需要的地方解释你的代码
Use comments to explain code: What does it cover, what purpose does it serve, why is respective solution used or preferred?

(This item is optional as it is not deemed a realistic expectation to always demand fully documented code. Mileage may vary heavily for HTML and CSS code and depends on the project’s complexity.)



Action Items
代办事项
link▽
Mark todos and action items with TODO.
用 TODO 标记你的代办事项

Highlight todos by using the keyword TODO only, not other common formats like @@.
只使用关键字TODO高亮代办事项, 不要使用诸如 @@的格式

Append a contact (username or mailing list) in parentheses as with the format TODO(contact).
用 TODO(contact) 这种格式添加联系人

Append action items after a colon as in TODO: action item.
在行为后面添加一个冒号, 比如 TODO: action item
{# TODO(john.doe): revisit centering #}
<center>Test</center>

<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>


Document Type
文档类型
link▽
Use HTML5.
使用html5

HTML5 (HTML syntax) is preferred for all HTML documents: <!DOCTYPE html>.
HTML5 是首选的 <!DOCTYPE html>

(It’s recommended to use HTML, as text/html. Do not use XHTML. XHTML, as application/xhtml+xml, lacks both browser and infrastructure support and offers less room for optimization than HTML.)
(推荐使用HTML, 不要使用XHTML, 比如 application/xhtml+xml, 因为它缺乏浏览器和基础设备支持, 并且提供比HTML更少的空间做优化)


Although fine with HTML, do not close void elements, i.e. write <br>, not <br />.
尽管使用HTML, 不用闭合空元素. 比如 写成 <br>而不是 <br />




HTML Validity
HTML 有效性
link▽
Use valid HTML where possible.
在合适的地方使用有效的HTML元素

Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size.
使用有效的HTML代码, 除非它不会对性能造成影响, 否则它会增加页面大小

Use tools such as the W3C HTML validator to test.
使用诸如 W3C HTML validator 之类的工具测试你的页面

Using valid HTML is a measurable baseline quality attribute that contributes to learning about technical requirements and constraints, and that ensures proper HTML usage.
使用有效的HTML是一个可衡量的基准质量属性,有助于了解技术要求和限制,并确适当的HTML用途。
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.

<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>


Semantics
语义
link▽
Use HTML according to its purpose.
根据目的使用HTML

Use elements (sometimes incorrectly called “tags”) for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.
按照被创造的目的使用HTML标签. 比如, 使用头部元素作为头部, p 元素作为段落, a 元素作为锚点等等.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.
根据目的使用标签对可接受性, 重用性以及代码意义等很重要

<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/">All recommendations</a>


Multimedia Fallback
创造可以回退的多媒体
link▽
Provide alternative contents for multimedia.
为多媒体提供可变的内容

For multimedia, such as images, videos, animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.
多媒体元素, 比如图片, 视频, canvas动画等, 请确保提供了可替代的选择. 对于图像, 这意味着使用有意义的 alt 文本属性, 对于视频, 音频等同样如此

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without @alt, and other users may have no way of understanding what video or audio contents are about either.
提供可选择的内容对可接受性很重要. 比如用户如果是盲人, 而图像没有alt的话, 只有更少的线索让他知道这个图片是什么. 同样, 其它用户无法理解视频或音频的人也有这样的问题


(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".)
(假如某些图片alt属性是冗余的, 或者那些无法直接用css的图片而它仅仅是用来装饰页面的, 就不需要 alt)
<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">


Separation of Concerns
关系的分离

link▽
Separate structure from presentation from behavior.
将结构与描述和行为分离

Strictly keep structure (markup), presentation (styling), and behavior (scripting) apart, and try to keep the interaction between the three to an absolute minimum.
严格保持结构(标记), 描述(样式), 和行为(脚本)分开, 并且尝试保持三者直接的最小相互作用.

That is, make sure documents and templates contain only HTML and HTML that is solely serving structural purposes. Move everything presentational into style sheets, and everything behavioral into scripts.
这是说, 确保文档和模板只包含HTML, 并且HTML只单独作为结构体. 移动所有的描述到样式里, 以及所有的行为到脚本中

In addition, keep the contact area as small as possible by linking as few style sheets and scripts as possible from documents and templates.
另外, 页面上请保持尽量少的样式文件数量和脚本数量


Separating structure from presentation from behavior is important for maintenance reasons. It is always more expensive to change HTML documents and templates than it is to update style sheets and scripts.
在页面上将结构, 描述, 行为分离的原因是, 修改HTML页面上的样式和脚本的代价往往很高.
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


Entity References
实体引用
link▽
Do not use entity references.
不要使用实体引用

There is no need to use entity references like &mdash;, &rdquo;, or &#x263a;, assuming the same encoding (UTF-8) is used for files and editors as well as among teams.
现在已经没有必要再使用实体引用了, 例如 &mdash; &rdquo; 或者&#x263a; , 只要保证你的编辑器编码是utf-8格式的就行了.

The only exceptions apply to characters with special meaning in HTML (like < and &) as well as control or “invisible” characters (like no-break spaces).
只有一个例外是对于HTML有特殊意义的字符(比如 < 和 &), 还有一些"不可见"的字符(比如没有宽度的空格)
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.

<!-- Recommended -->
The currency symbol for the Euro is “€”.


Optional Tags
可选标签
link▽
Omit optional tags (optional).
忽略可选标签(可选)

For file size optimization and scannability purposes, consider omitting optional tags. The HTML5 specification defines what tags can be omitted.
考虑到文件大小优化, 可扫描等目的, 推荐使用可选标签. HTML5 specification 定义了哪些标签可以被忽略

(This approach may require a grace period to be established as a wider guideline as it’s significantly different from what web developers are typically taught. For consistency and simplicity reasons it’s best served omitting all optional tags, not just a selection.)
(这个方法可能需要很一段时间去建立一个广泛的指导方针, 因为他与一般前端工程师所学的内容不同. 为了一致性和简便性, 这里最好忽略所有的可选标签, 而不是只当一个选择)
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


type Attributes
type 属性
link▽
Omit type attributes for style sheets and scripts.
忽略style 和 scripts 所有的 type 属性

Do not use type attributes for style sheets (unless not using CSS) and scripts (unless not using JavaScript).
不要为style(除非用的不是css)和scripts(除非用的不是javascript)使用type属性

Specifying type attributes in these contexts is not necessary as HTML5 implies text/css and text/javascript as defaults. This can be safely done even for older browsers.
为这些属性指定 type是没有必要的, 因为 HTML默认隐含了 text/css 和 text/javascript. 这个甚至可以正常的用在较早的浏览器中.
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


General Formatting
普通格式
link▽
Use a new line for every block, list, or table element, and indent every such child element.
对每个block, list, table等启用新的一行, 并且对于子元素都进行缩进.

Independent of the styling of an element (as CSS allows elements to assume a different role per display property), put every block, list, or table element on a new line.
每个独立的元素的样式(例如css允许元素为每个 display 属性承担不同的角色), 将每个block, list, 或table等元素放到一个新行上.

Also, indent them if they are child elements of a block, list, or table element.
同样, 对于block, list, table元素的子元素进行缩进.

(If you run into issues around whitespace between list items it’s acceptable to put all li elements in one line. A linter is encouraged to throw a warning instead of an error.)
(如果你的list因为空白而运行出现问题, 那就把所有的li都放在一行上. 解析器会抛出一个警告而不是一个错误)
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


HTML Quotation Marks
HTML引号标记
link▽
When quoting attributes values, use double quotation marks.
当需要为属性的值加引号的时候, 使用双引号

Use double ("") rather than single quotation marks ('') around attribute values.
使用双引号("")而不要使用单引号('')包裹属性值
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>


CSS Validity
CSS有效性
link▽
Use valid CSS where possible.
使用有效的CSS.

Unless dealing with CSS validator bugs or requiring proprietary syntax, use valid CSS code.
除非是在处理css验证的bug或者专有语法, 否则请使用有效的css代码

Use tools such as the W3C CSS validator to test.
使用 W3C CSS validator 等工具测试

Using valid CSS is a measurable baseline quality attribute that allows to spot CSS code that may not have any effect and can be removed, and that ensures proper CSS usage.
使用有效的CSS是一个可衡量的基准质量属性, 可以发现CSS中没有影响的代码并且可以删除, 并确保CSS适当的使用


ID and Class Naming
ID 和 类名
link▽
Use meaningful or generic ID and class names.
使用有意义的或者通用的ID和类名.

Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.
舍弃那些靠直觉的或神秘的ID名和类名, 使用更能反映元素用途或者其他通用的名称.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.
名称要能指出或反映出这个元素的目的, 这样它才容易被理解或者改动最小.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”
通用的名称是指元素只是简单的回调, 与其它同类成员没有特别的性质和意义区别. 他们通常被当做"助手".

Using functional or generic names reduces the probability of unnecessary document or template changes.
使用功能化的或者通用化的名称能减少页面不必要的改变.
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


ID and Class Name Style
ID和类名形式
link▽
Use ID and class names that are as short as possible but as long as necessary.
ID名和类型应该尽量短, 但是必要时要必要的长.

Try to convey what an ID or class is about while being as brief as possible.
尝试更改ID或类名尽量的简洁

Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.
用这种方式命名ID和类名会增加代码的可理解性和影响性
/* Not recommended */
#navigation {}
.atr {}

/* Recommended */
#nav {}
.author {}


Type Selectors
类型选择器
link▽
Avoid qualifying ID and class names with type selectors.
避免ID与类名产生冲突

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.
除非有必要(比如 助手 类), 不要将元素名后面跟上 id或者类.

Avoiding unnecessary ancestor selectors is useful for performance reasons.
避免不必要的祖先选择器对显示理由 是有帮助的.
/* Not recommended */
ul#example {}
div.error {}

/* Recommended */
#example {}
.error {}


Shorthand Properties
简写属性
link▽
Use shorthand properties where possible.
尽可能的使用简写属性.

CSS offers a variety of shorthand properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.
CSS提供了多种简写属性(比如 font)应该尽可能多的使用, 甚至有时只有一个值需要显示设置.
Using shorthand properties is useful for code efficiency and understandability.
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


0 and Units
0和单位
link▽
Omit unit specification after “0” values.
忽略"0"后的单位

Do not use units after 0 values unless they are required.
不要在0后面加单位除非这个单位是必须的
margin: 0;
padding: 0;


Leading 0s
主导位0
link▽
Omit leading “0”s in values.
忽略主导位的0.

Do not use put 0s in front of values or lengths between -1 and 1.
不要在值为-1和1之间的数字放上0.
font-size: .8em;


Hexadecimal Notation
十六进制表示法
link▽
Use 3 character hexadecimal notation where possible.
尽量使用3位的十六进制

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.
对于颜色值这是允许的, 3位颜色值比6位的更短更简洁

/* Not recommended */
color: #eebbcc;

/* Recommended */
color: #ebc;


Prefixes
前缀
link▽
Prefix selectors with an application-specific prefix (optional).
使用应用程序作为选择器的前缀(可选的)

In large projects as well as for code that gets embedded in other projects or on external sites use prefixes (as namespaces) for ID and class names. Use short, unique identifiers followed by a dash.
对于项目中包含其他项目或外部的网站上的大型项目, 为ID和类名使用前缀(像命名空间那样). 前缀使用尽量短并且唯一的标识符, 后面再跟一个波折号.

Using namespaces helps preventing naming conflicts and can make maintenance easier, for example in search and replace operations.
使用命名空间能帮助避免命名冲突, 并且让代码更容易维护, 比如在查找和替换操作中
.adw-help {} /* AdWords */
#maia-note {} /* Maia */



ID and Class Name Delimiters
ID和类名的分隔符
link▽
Separate words in ID and class names by a hyphen.
用连字号分割ID和类名

Do not concatenate words and abbreviations in selectors by any characters (including none at all) other than hyphens, in order to improve understanding and scannability.
不要把单词和缩写用除了连字号以外的任何字符(包含空字符)连接作为选择器, 目的是为了增强理解性和扫描性.
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}

/* Recommended */
#video-id {}
.ads-sample {}


Hacks
Hacks
link▽
Avoid user agent detection as well as CSS “hacks”—try a different approach first.
避免客户端检测CSS hacks, 优先使用不同的方式

It’s tempting to address styling differences over user agent detection or special CSS filters, workarounds, and hacks. Both approaches should be considered last resort in order to achieve and maintain an efficient and manageable code base. Put another way, giving detection and hacks a free pass will hurt projects in the long run as projects tend to take the way of least resistance. That is, allowing and making it easy to use detection and hacks means using detection and hacks more frequently—and more frequently is too frequently.
对不同的客户端使用特殊的CSS过滤器, 工作区和hacks是冒险的. 两种方式都应该考虑最终为了达到维护一个有效的可管理的代码库. 用另一种方法, 为检测和hacks通行会损害长期运行的项目并带来阻力. 这意味着, 允许并且让检测和hacks的行为越来越频繁, 以至于太频繁.


Declaration Order
声明顺序
link▽
Alphabetize declarations.
按字母顺序声明

Put declarations in alphabetical order in order to achieve consistent code in a way that is easy to remember and maintain.
按字母顺序声明会使结构看起来更简单和容易维护

Ignore vendor-specific prefixes for sorting purposes. However, multiple vendor-specific prefixes for a certain CSS property should be kept sorted (e.g. -moz prefix comes before -webkit).
忽略那些用于特定前缀的声明. 尽管如此, 混合特定的前缀的属性组们也应该排序(比如, -moz前缀要在 -webkit前缀 前面)
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;


Block Content Indentation
代码块的内容应该缩进
link▽
Indent all block content.
缩进所有的代码块.

Indent all block content, that is rules within rules as well as declarations, so to reflect hierarchy and improve understanding.
缩进所有的代码块, 这与声明的规则是一样的, 所以目的是提高代码层次并且增加理解性.
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}


Declaration Stops
声明结尾
link▽
Use a semicolon after every declaration.
在每个声明结尾加上分号

End every declaration with a semicolon for consistency and extensibility reasons.
每个声明结尾加上分号保持一致性和可扩展性.
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


Property Name Stops
属性名结尾
link▽
Use a space after a property name’s colon.
每个属性名后面的冒号跟上一个空格符.

Always use a single space between property and value (but no space between property and colon) for consistency reasons.
总是在冒号和值之间加上一个空格(但是不要在属性名和冒号中加空格)保持一致性
/* Not recommended */
h3 {
  font-weight:bold;
}

/* Recommended */
h3 {
  font-weight: bold;
}


Declaration Block Separation
声明块的分割
link▽
Use a space between the last selector and the declaration block.
在最后一个选择器和声明块之间添加一个空格

Always use a single space between the last selector and the opening brace that begins the declaration block.
总是在最后一个选择器和左大括号之间添加一个空格

The opening brace should be on the same line as the last selector in a given rule.
做大括号应该和最后一个选择器保持一个同一行上
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


Selector and Declaration Separation
选择器和声明分隔
link▽
Separate selectors and declarations by new lines.
选择器跟声明应该用新的一行分开

Always start a new line for each selector and declaration.
每一个选择器和声明都应该新起一行
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


Rule Separation
规则分隔
link▽
Separate rules by new lines.
用新行分隔规则

Always put a blank line (two line breaks) between rules.
两个规则中应该相隔一个空行(即空两行)
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}



CSS Quotation Marks
CSS引号标记
link▽
Use single quotation marks for attribute selectors and property values.
选择器的值使用单引号

Use single ('') rather than double ("") quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (url()).
使用单引号('')而不要使用双引号("")作为标记. 对于URI值(url())则不要使用引号

Exception: If you do need to use the @charset rule, use double quotation marks—single quotation marks are not permitted.
例外: 假如你要使用 @charset 规则, 使用双引号标记
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


Section Comments
区域注释
link▽
Group sections by a section comment (optional).
一组区域使用一个注释(可选的)

If possible, group style sheet sections together by using comments. Separate sections with new lines.
如果可能, 
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}

