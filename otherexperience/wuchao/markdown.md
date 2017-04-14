Markdown: 基础
==============

了解Markdown格式语法要义
------------------------

本页简单介绍Markdown的语法要义, 每个语法点分成两部分, 一部分是Markdown语法格式例子(`Markdown`), 一部分是该语法格式产生的效果(`Output:`).

随时在 [Zybuluo](https://www.zybuluo.com/mdeditor) 中尝试这些语法, 可以让你更快速的掌握.

**提醒:**
markdown基于纯文本和格式标记, 优势在于训练编码思维和协作编写意识

## 段落, 标题, 引用块 ##

段落是一行行的文字, 不要带缩进, 段落使用空行分割, -- 也就是说段落后面必须要有一个或多个空行.
这里的空行是指没有除了空白字符以外的所有字符, 主要是指可见字符.

Markdown提供两种风格的标题: *Setext* 和 *atx*.
Setext风格用等号和下划线标记, 等号是大标题, 下划线是次标题.
atx风格是指用1-6个井号(`#`), 一个#是大标题, 两个#是次标题, 以此类推.

引用块用`>`来标记

Markdown:

```
一级标题
=======

二级标题
---------------------

中华人民共和国万岁, 这个是一个段落.
这个是段落哈.

这个是第二个稍短一些的段落.

*** 三级标题

> 这里是一个引用块
> 
> 这里还是一个引用块
>
> ## 引用块中的二级标题
```

Output:

一级标题
=======

二级标题
---------------------

中华人民共和国万岁, 这个是一个段落.
这个是段落哈.

这个是第二个稍短一些的段落.

*** 三级标题

> 这里是一个引用块
> 
> 这里还是一个引用块
>
> ## 引用块中的二级标题



### 短语强调 ###

Markdown使用`*`和`_`来标识强调

Markdown:

```
强调 *这些文字*.
强调 _这些文字_.

着重强调 **这些文字**.
着重强调 __这些文字__.
```

Output:

强调 *这些文字*.
强调 _这些文字_.

着重强调 **这些文字**.
着重强调 __这些文字__.


## 列表 ##

列表用`*`, `+`, `-`开头, 他们之间等效.

Markdown:

```
*   Candy.
*   Gum.
*   Booze.

+   Candy.
+   Gum.
+   Booze.

-   Candy.
-   Gum.
-   Booze.
```

Output:

*   Candy.
*   Gum.
*   Booze.

+   Candy.
+   Gum.
+   Booze.

-   Candy.
-   Gum.
-   Booze.



有序列表, 数字加上`.`

Markdown:

```
1.  Red
2.  Green
3.  Blue
```

Output:

1.  Red
2.  Green
3.  Blue

通过插入缩进空格, 可以得到多段落列表

Markdown:

```
*   A list item.

    With multiple paragraphs.

*   Another item in the list.
```

Output:

*   A list item.

    With multiple paragraphs.

*   Another item in the list.

### Links ###

创建连接需要先用`[``]`把连接包括进去, 然后在后面的`(``)`中填上链接地址

Markdown:
```
This is an [example link](http://example.com/).
```

Output:

This is an [example link](http://example.com/).


引用风格的链接先用`[``]`把连接包括进去, 然后在后面的`[``]`中填上链接引用, 最后在文本其他部分加上用`[``]``:`标识链接地址

Markdown:
```
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
```

Output:

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

链接引用可以是任意字符, 可以包含空格

Markdown:
```
I start my morning with a cup of coffee and
[The New York Times][NY Times].

[ny times]: http://www.nytimes.com/
```

Output:

I start my morning with a cup of coffee and
[The New York Times][NY Times].

[ny times]: http://www.nytimes.com/


### 图片 ###

和链接一样, 只是需要在最前面加上`!`

Markdown:

```
Inline (titles are optional):

    ![alt text](/path/to/img.jpg)

Reference-style:

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"
```

Output:

Inline (titles are optional):

    ![alt text](/path/to/img.jpg)

Reference-style:

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"


### 代码段 ###

用<span>`</span>
来标记内联的代码
用<span>```</span>来标记代码段
<code>
```
abc
```
</code>

也可以用 4 空格或者 1 tab. 标记代码段

[ref: http://daringfireball.net/projects/markdown/basics]
