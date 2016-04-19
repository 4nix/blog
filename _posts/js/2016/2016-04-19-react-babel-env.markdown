---
layout: post
title:  win下React+webpack+babel环境搭建
date:   2016-04-19 21:41:06 +0800
categories: js
uid: 1461073271
---
开始学react, 环境配置很重要, 是入门的一道坎. 网上的教程一大堆, 各种匪夷所思, 也附上我的匪夷所思的搭建步骤.

### 一. 安装nodejs

这一步不为别的, 只为了 **npm** 工具, 后面的很多文件都需要此工具

***********************

### 二. 启动Node.js command prompt

这个在你安装完后会出现开始菜单里, 直接点就可以了.

如果找不到, 那就打开你的命令行工具 **cmd**, 然后一路切到你的nodejs安装目录, 在根目录下有个文件名叫**nodevars.bat**

然后在cmd里输入这个文件名运行这个文件*D:\Program\nodejs\nodevars*

当你看到*Your environment has been set up for using Node.js xxx and npm.* 并且目录被切回 *C:\xxxh*的时候, 就代表已经ok了

*********************

### 三. 安装react环境
这一步以及以后的步骤要在第二步的**cmd**里运行.

1) 创建好你的开发目录, 比如 **testreact**, 然后一路切进去

<br>

2) 运行**npm init**

这一步是为了自动生成**package.json**文件, 一路随便填, 觉得不过瘾就再来一遍 (＠￣ー￣＠), 此文件很重要, 千万不能忽略

<br>

3) 安装各种依赖

**npm install webpack --save-dev**

**npm install react --save-dev**

**npm install react-dom --save-dev**

**npm install babel-loader --save-dev**

**npm install babel-preset-es2015 --save-dev**

**npm install babel-preset-react --save-dev**

注意**--save-dev**前面是两个**-**, 如果还有其它项目也使用这种包的话, 建议再加上**-g**参数, 这样就能安装全局的了, 注意这里是一个**-**.

5) 配置webpack.config.js

来个最简单的配置

{% highlight js %}
module.exports = {
  entry: [
  "./src/app.js"  //入口文件, 务必保证此文件存在
  ],
  output: {
    filename: "./build/bundle.js"  //打包后的文件, 正式页面要引入的就是这个
  },
  module: {
    loaders: [
      //js文件使用 babel-loader 来编译处理
      { test: /\.js$/,  loader: "babel-loader"}
    ]
  },
  resolve: {
  	//配置后, 在页面上就能省去后缀了, webpack会按下面的配置自动补全文件名, 比如require("mode"), 会补成mode.js
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
{% endhighlight %}

<br>

6) 配置babel

为了让babel预编译js, 我们需要对它进行配置.

这一步有两种选择, 一是配置**package.json**, 二是配置**.babelrc**.

这里推荐用**package.json**, 毕竟win下生成 **.babelrc** 这种没名字的文件还得有点技巧(比如我就直接在sublime改名)

**package.json**里这么加

{% highlight json hl_lines="6 4 5" %}
{
  "name": "test",
  "version": "1.0.0",
  "babel": {
    "presets": ["es2015", "react"]
  }
  ....
  ....
}
{% endhighlight %}

<br>

或者在你这个项目文件的根目录下, 新建一个**.babelrc**文件, 内容为

{% highlight json %}
{
    "presets": ["es2015", "react"]
}
{% endhighlight %}

<br>

至此, 配置已经完了, 可以测试代码了, 关于[babel](https://babeljs.io/)更多

*****************

### 四. 测试我们的环境

按照上面的例子, 我们先创建一个**index.html**文件

{% highlight html %}
<!DOCTYPE html>
<head>
	<title>test</title>
	<meta charset="utf-8">
</head>
<body>
	<div id="test"></div>
	<script src="build/bundle.js"></script>
</body>
</html>
{% endhighlight %}

再根据我们的配置, 来一个**./src/app.js**文件,

{% highlight js %}
import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component { 
	render() { 
		return ( 
			<h1>{this.props.title}</h1> 
			); 
	} 
}

ReactDOM.render(<Test title="hello react" />, document.getElementById("test"));
{% endhighlight %}

all了, 在我们第二步的命令行工具中运行**webpack**命令打包, 你会发现我们生成了一个"./build/bundle.js"文件.

然后双击**index.html**文件, 看看*hello react*出来没?!#$%^&*啊