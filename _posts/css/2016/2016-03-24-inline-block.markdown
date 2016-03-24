---
layout: post
title:  inline-block元素间的换行符空格间隙问题
date:   2016-03-24 22:11:53 +0800
categories: css
---
两个inline-block 之间会出现一个4px的空隙, 这是由于inline-block把换行符也当成了一个需要显示的元素, 所以解决方式有两个

一是用紧凑写法, 都写成一行, 但是实在太丑, 改用方法二

二是在父元素上设置 font-size: 0px; 把换行符变的不可见, 然后在子元素上还原字体大小