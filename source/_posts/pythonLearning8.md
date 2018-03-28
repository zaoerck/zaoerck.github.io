---
title: 初学Python（八）基本语句
date: 2018-03-18 16:12:18
tags: 
- Python
- 编程
categories:
- 编程学习
- Python
---
# if语句
Python中if语句的一般形式如下：
```py
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```
注意：
```
1、每个条件后面要使用冒号（:），表示接下来是满足条件后要执行的语句块。
2、使用缩进来划分语句块，相同缩进数的语句在一起组成一个语句块。
3、在Python中没有switch – case语句。
```
Python的if语句与Java或者C语言之有形式上的区别，同样支持if嵌套，很好上手。

# while语句
Python中while语句的一般形式为：
```py
while condition:
    statement_block
```
另外while语句后面可以加上else语句：
```py
count = 0
while count < 5:
   print (count, " 小于 5")
   count = count + 1
else:
   print (count, " 大于或等于 5")
```
# for语句
Python for循环可以遍历任何序列的项目，如一个列表或者一个字符串。

for循环的一般格式如下：
```py
for variable in sequence:
    statement_block1
# for循环后面也可以跟一个else语句
else:
    statement_block2
```
## range函数
如果你需要遍历数字序列，可以使用内置range()函数。它会生成数列，例如:
```py
for i in range(5):
    print(i)

输出为：
0
1
2
3
4
```
也可以用range指定区间
```py
for i in range(5,9)
    print(i)

输出为：
5
6
7
8
```
可以用range指定区间和步长：
```py
for i in range(0, 10, 3)
    print(i)

输出为:
0
3
6
9
```
# break和continue
break语句和continue语句同Java和C
# pass语句
Python pass是空语句，是为了保持程序结构的完整性。

pass 不做任何事情，一般用做占位语句
```py
for letter in "hello":
    if letter == "l":
        pass
        print("pass")
    print("the letter is: ", letter)
print("Good bye!")

输出为：
the letter is:  h
the letter is:  e
pass
the letter is:  l
pass
the letter is:  l
the letter is:  o
Good bye!
```
如果代码段或者函数定义的时候，没想好写什么内容，可以先pass