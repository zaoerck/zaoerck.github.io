---
title: 初学Python（七）字典
date: 2018-03-17 10:10:10
tags: 
- Python
- 编程
categories:
- 编程学习
- Python
---
字典是另一种可变容器模型，且可存储任意类型对象。

字典的每个键值(key=>value)对用冒号(:)分割，每个对之间用逗号(,)分割，整个字典包括在花括号({})中 ,格式如下所示：
```py
d = {key1 : value1, key2 : value2 }
```
键必须是唯一的，但值则不必。

值可以取任何数据类型，但键必须是不可变的，如字符串，数字或元组。
# 字典的创建
字典的创建方式：
```py
# 普通创建方式
dict0 = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'}
print(dict0)

# 从键值对序列中创建
dict1 = ([('hello', 1), ('google', 2), ('baidu', 3)])
print(dict1)

dict2 = {x: x**2 for x in (2, 3, 4)}
print(dict2)

# 使用dict函数的键值对序列 
dict3 = dict(hello=1, Google=2, baidu=3)
print(dict3)

输出如下：
{'Cecil': '3258', 'Beth': '9102', 'Alice': '2341'}
[('hello', 1), ('google', 2), ('baidu', 3)]
{2: 4, 3: 9, 4: 16}
{'hello': 1, 'Google': 2, 'baidu': 3}
```
# 字典的访问
```py
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20}
print("输出特定键值--- dict1['name']: ", dict1['name'])
print("输出整个字典--- dic1: ", dict1)
print("输出所有的键--- dic1.keys(): ", dict1.keys())
print("输出所有的值--- dic1.values(): ", dict1.values())

输出如下：
输出特定键值--- dict1['name']:  Alice
输出整个字典--- dic1:  {'age': 20, 'name': 'Alice', 'gender': 'female'}
输出所有的键--- dic1.keys():  dict_keys(['age', 'name', 'gender'])
输出所有的值--- dic1.values():  dict_values([20, 'Alice', 'female'])
```
# 更新字典
```py
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20}
print(dict1)

# 修改某个键值对
dict1['age'] = 30
print(dict1)

# 添加键值对
dict1['weight'] = '45kg'
print(dict1)

输出如下：
{'age': 20, 'name': 'Alice', 'gender': 'female'}
{'age': 30, 'name': 'Alice', 'gender': 'female'}
{'age': 30, 'name': 'Alice', 'gender': 'female', 'weight': '45kg'}
```

# 字典删除
```py
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20}
print(dict1)

# 删除某个键
del dict1['age']
print(dict1)

# 清空字典
dict1.clear()
print(dict1)

# 删除字典
del dict1

输出如下：
{'age': 20, 'gender': 'female', 'name': 'Alice'}
{'gender': 'female', 'name': 'Alice'}
{}
```

# 字典键的特性
字典值可以是任何的 python 对象，既可以是标准的对象，也可以是用户定义的，但键不行。

两个重要的点需要记住：
## 键值不能重复
不允许同一个键出现两次。创建时如果同一个键被赋值两次，后一个值会被记住，如下实例：
```py
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20, 'name': 'Mary'}
print(dict1)

输出入下：
{'age': 20, 'name': 'Mary', 'gender': 'female'}
```

## 键值必须不可变
键必须不可变，所以可以用数字，字符串或元组充当，而用列表就不行

# 字典方法
```py
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20}

# copy()方法
dict1 = {'name': 'Alice', 'gender': 'female', 'age': 20}

# copy()方法
print(dict1.copy())

# fromkeys(seq, val)方法
# seq中的元素做键， val做所有键的初始值
print(dict1.fromkeys((1, 2, 3), "value"))

# get(k, d)方法
# 返回指定键的值，若不存在则返回默认值d
# d可以自己指定，也可以不写，系统默认None
print(dict1.get('name', "None"))
print(dict1.get("weight"))

# items()
# 返回可遍历的(键, 值) 元组数组。
print(dict1.items())

# setdefault(key, default)
# 与get()类似，有则返回，不过无则添加新的键值对
print(dict1.setdefault('age', 44))

# dict.update(dict2)，添加指定字典dict2到dict
dict2 = {"weight": "45kg"}
dict1.update(dict2)
print(dict1)

# pop(key[,default])
# 删除字典给定键 key 所对应的值，返回值为被删除的值。
# key值必须给出。 否则，返回default值。
pop_obj = dict1.pop('weight')
print(pop_obj)

# popitem()
# 返回并删除字典中的一对键和值(一般删除末尾对)。
pop_obj = dict1.popitem()
print(pop_obj)
print(dict1)


输出如下：
{'gender': 'female', 'name': 'Alice', 'age': 20}
{1: 'value', 2: 'value', 3: 'value'}
Alice
None
dict_items([('name', 'Alice'), ('age', 20), ('gender', 'female')])
20
{'weight': '45kg', 'name': 'Alice', 'age': 20, 'gender': 'female'}
45kg
('name', 'Alice')
{'age': 20, 'gender': 'female'}
```