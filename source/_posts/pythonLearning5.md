---
title: 初学Python（五）列表
date: 2018-03-14 21:13:10
tags: 
- Python
- 编程
categories:
- 编程学习
- Python
---
序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。

Python有6个序列的内置类型，但最常见的是列表和元组。

序列都可以进行的操作包括索引，切片，加，乘，检查成员。

此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。

列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。

列表的数据项不需要具有相同的类型，支持列表的嵌套，即列表的元素可以是列表。

创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。
```python
list = [item1, item2, item3, ...]#
list1 = ["google", "baidu", 12, 23.4]#数据项可以有不同的类型
```
# 列表元素的增删改查

## 查看列表中的值
与字符串相同，可以通过索引下标访问某项，也可以使用方括号的形式截取组合。
```py
list1 = ["google", "baidu", 12, 23.4]
list2 = [1, 2, 3, 4, 5, 6]

print("list1[0]: ", list1[0])
print("list2[0:4]: ", list2[0:4])
```
输出如下：
```py
list1[0]:  google
list2[0:4]:  [1, 2, 3, 4]
```
## 增加元素
使用append(x)来增加元素
使用insert(i, x)在第i元素前插入一个元素
```py
list1 = ["google", "baidu", 12, 23.4]
list2 = [1, 2, 3, 4, 5, 6]

print(list1)
list1.append("hello")
print(list1)
list1.insert(1, "zaoerck")
print(list1)

输出结果：
['google', 'baidu', 12, 23.4]
['google', 'baidu', 12, 23.4, 'hello']
['google', 'zaoerck', 'baidu', 12, 23.4, 'hello']
```
## 删除元素
使用<code>del list[x]</code>删除某个下标的元素。
使用<code>remove(value)</code>删除列表中第一个指定值的元素

```py
list1 = ["google", "google", "baidu", 12, 23.4]

print(list1)
list1.remove("google")
print(list1)
del list1[1]
print(list1)

输出结果：
['google', 'google', 'baidu', 12, 23.4]
['google', 'baidu', 12, 23.4]
['google', 12, 23.4]
```
## 修改列表值
列表值可以通过列表下标重新赋值修改

# 列表脚本操作符
列表对+和\*的操作符与字符串相似，+用于组合列表，\*用于重复
```py
list1 = ["google", "google", "baidu", 12, 23.4]

print(list1)
print(len(list1))
list1 = list1 + [1, 2, 3]
print(list1)
list1 = list1 + ['*']*3
print(list1)
if '*' in list1:
    print("\'*\' in the list1 is: %s" % ('*' in list1))

输出结果：
['google', 'google', 'baidu', 12, 23.4]
5
['google', 'google', 'baidu', 12, 23.4, 1, 2, 3]
['google', 'google', 'baidu', 12, 23.4, 1, 2, 3, '*', '*', '*']
'*' in the list1 is: True
```
# 列表的截取与拼接
Python列表的截取与拼接跟字符串一致。

# Python常见函数和方法
## Python函数
函数|功能
-|:-
len(list)|列表元素个数
max(list)|返回列表最大值
min(list)|返回列表最小值
list(seq)|将元组转换为列表

## Python方法
方法|功能
-|:-
list.append(x)|把一个元素添加到列表的结尾，相当于 a[len(a):] = [x]。
list.extend(L)|通过添加指定列表的所有元素来扩充列表，相当于 a[len(a):] = L。
list.insert(i, x)|在指定位置插入一个元素。第一个参数是准备插入到其前面的那个元素的索引，例如 a.insert(0, x)会插入到整个列表之前，而 a.insert(len(a), x) 相当于 a.append(x) 。
list.remove(x)|删除列表中值为 x 的第一个元素。如果没有这样的元素，就会返回一个错误。
list.pop([i])|从列表的指定位置删除元素，并将其返回。如果没有指定索引，a.pop()返回最后一个元素。元素随即从列表中被删除。（方法中 i 两边的方括号表示这个参数是可选的，而不是要求你输入一对方括号，你会经常在 Python 库参考手册中遇到这样的标记。）
list.clear()|移除列表中的所有项，等于del a[:]。
list.index(x)|返回列表中第一个值为 x 的元素的索引。如果没有匹配的元素就会返回一个错误。
list.count(x)|返回 x 在列表中出现的次数。
list.sort()|对列表中的元素进行排序。
list.reverse()|倒排列表中的元素。
list.copy()|返回列表的浅复制，等于a[:]。