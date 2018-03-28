---
title: 初学Python（一）
date: 2018-03-10 21:18:27
tags: 
- Python
- 编程
categories:
- 编程学习
- Python
---
这次学习Python的基本语法。

# 标识符
+ 第一个字符必须是字母表中字母或下划线 _ 。
+ 标识符的其他的部分由字母、数字和下划线组成。
+ 标识符对大小写敏感。

在 Python 3 中，非 ASCII 标识符也是允许的了。

# python保留字
保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：
```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

# 注释
Python中单行注释以<code>#</code>开头，实例如下：
```python
#!/usr/bin/python3

# 第一个注释

print ("Hello, Python!") # 第二个注释
```
执行以上代码，输出结果为：

Hello, Python!
多行注释可以用多个<code>#</code>号，还有 <code>'''</code>和 <code>"""</code>：
```python
# 第一个注释
# 第二个注释

'''
第三注释
第四注释
'''

"""
第五注释
第六注释
"""
print ("Hello, Python!") 
```
执行以上代码，输出结果为：

Hello, Python!

# 行与缩进
python最具特色的就是使用缩进来表示代码块，不需要使用大括号 {} 。
缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。

#多行语句
Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠(\)来实现多行语句，例如：
```python
total = item_one + \
        item_two + \
        item_three
```
在 [], {}, 或 () 中的多行语句，不需要使用反斜杠(\)，例如：
```python
total = ['item_one', 'item_two', 'item_three',
        'item_four', 'item_five']
```

# 字符串(String)
+ python中单引号和双引号使用完全相同。
+ 使用三引号(<code>'''</code>或<code>"""</code>)可以指定一个多行字符串。
+ 转义符 '\'
+ 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。。 如 r"this is a line with \n" 则\n会显示，并不是换行。
+ 按字面意义级联字符串，如"this " "is " "string"会被自动转换为this is string。
+ 字符串可以用 + 运算符连接在一起，用 * 运算符重复。
+ Python 中的字符串有两种索引方式，从左往右以 0 开始，从右往左以 -1 开始。
+ Python中的字符串不能改变。
+ Python 没有单独的字符类型，一个字符就是长度为 1 的字符串。
+ 字符串的截取的语法格式如下：变量[头下标:尾下标]

