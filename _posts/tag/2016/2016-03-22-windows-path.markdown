---
layout: post
title:  windows下不重启立即生效环境变量
date:   2016-03-23 21:16:27 +0800
tags: tips
uid: 1459685997
---
直接在cmd里 **set path = 1** 触发刷新环境变量机制, 然后关闭cmd新开一个cmd.

原理是利用了每次关闭重新开启cmd时, windows都会重新加载一遍path, 这个时候新增的环境变量就起作用了
