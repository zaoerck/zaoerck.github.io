---
title: learningMySQL
date: 2018-05-15 09:56:19
tags:
- MySQL
- 数据库
- 编程
categories:
- 编程学习
- 数据库
---
本来打算三天内看完《MySQL必知必会》的，但是因为各种各样的原因耽误了一些时间，这本书讲的比较浅，没有涉及过多的数据库理论上的东西，大多是数据库甚至只是MySQL本身的一些具体操作，但是对接触数据库，了解数据库的基本操作和基本概念很有帮助，在这里对自己学习的内容进行整理。
# 数据过滤
## 检索数据限制LIMIT
```sql
SELECT prod_name
FROM products
LIMIT 5;
```
这里<code>LIMIT 5</code>表示返回前5行结果。
```sql
SELECT prod_name
FROM products
LIMIT 5,5;
```
这里的<code>LIMIT 5,5</code>表示从第5行开始，返回5行结果。LIMIT 1,1表示返回第2行结果。

## 通配符过滤（LIKE）
使用<code>LIKE</code>和通配符结合，完成数据匹配。
### 百分号%
```sql
SELECT prod_name
FROM products
WHERE prod_name LIKE 'jet%';
```
### 下划线通配符（_）
```sql
SELECT prod_name
FROM products
WHERE prod_name LIKE '_ ton anvil';
```

# Mysql正则表达式
## 基本字符匹配
直接匹配特定的字符串
```sql
SELECT prod_name
FROM products
WHERE prod_name REGEXP '1000'
ORDER BY prod_name;
```
使用<code>.</code>来匹配任意字符
```sql
SELECT prod_name
FROM products
WHERE prod_name REGEXP '.000'
ORDER BY prod_name;
```
## OR匹配<code>|</code>
匹配多个选项中的一个，使用<code>|</code>
```sql
SELECT prod_name
FROM products
WHERE prod_name REGEXP '1000|2000'
ORDER BY prod_name;
```
## 匹配几个字符之一<code>[]</code>
[123]表示1或2或3
```sql
SELECT prod_name
FROM products
WHERE prod_name REGEXP '[123] Ton'
ORDER BY prod_name;
```
范围匹配[1-9]表示1到9的数字之一，[a-z]表示a到z的小写字母之一

## 特殊字符匹配（转义）
使用双斜杠\\\\来对特殊字符进行转义
元字符|说明
-|:-
\\\\f|换页
\\\\n|换行	
\\\\r|回车	
\\\\t|制表符
\\\\v|纵向制表符
\\\\\\|表示单个反斜杠\\

## 匹配字符类
类|说明
-|:-
[;alnum:]|任意字母或数字（同[a-zA-Z0-9]）
[:alpha:]|任意字母[a-zA-Z]
[:blank:]|空格和制表（同[\\\\t]）
[:cntrl:]|ASCII控制字符（ASCII码0-31和127）
[:digit:]|任意数字
[:graph:]|与[:print:]同，但不包含空格
[:lower:]|任意小写字母
[:print:]|任意可打印的字符
[:punct:]|既不在[:alnum:]又不在[:cntrl:]中的任意字符
[:space:]|包括空格在内的任意空白符（同[\\\f\\\n\\\r\\\v]）
[:upper:]|大写字母
[:xdigit:]|任意十六进制数字

## 重复元字符
元字符|说明
-|:-
*|0个或多个
+|1个或多个（等于{1,}）
?|0个或1个匹配
{n}|n个
{n,}|不少于n个
{n,m}|匹配数目的范围（m不超过255）

## 定位符
元字符|说明
-|:-
^|文本的开始
$|文本的结尾
[[:<:]]|词的开始
[[:>:]]|词的结束

# 常见函数
## 文本处理函数
函数|说明
-|:-
Left()|返回串左边的字符
Length()|返回串的长度
Locate()|找出串的一个子串
Lower()|将串转换为小写
LTrim()|去掉串左边的空格
Right()|返回串右边的字符
RTrim()|去掉串右边的空格
Soundex()|返回串的SOUNDEX值
SubString()|返回串的字符
Upper()|将串转换为大写

## 日期处理函数
函数|说明
-|:-
AddDate()|增加一个日期（天，周等）
AddTime()|增加一个时间（时，分等）
CurDate()|返回当前日期
CurTime()|返回当前时间
Date()|返回日期时间的日期部分
DateDiff()|计算两个日期之差
Date_Add()|高度灵活的日期运算函数
Date_Format()|返回一个格式化的日期或时间串
Day()|返回一个时间的日部分
DayOfWeek()|对于一个日期，返回对应的星期几
Hour()|返回一个时间的小时部分
Minute()|返回一个时间的分钟部分
Month()|返回一个日期的月部分
Now()|返回当前日期和时间
Second()|返回一个时间的秒部分
Time()|返回一个日期的时间部分
Year()|返回一个日期的年份部分

## 数值处理函数
函数|说明
-|:-
Abs()|返回一个数的绝对值
Cos()|返回一个角度的余弦
Exp()|返回一个数的指数
Mod()|返回除操作的余数
Pi()|返回圆周率
Rand()|返回一个随机数
Sin()|返回一个角度的正弦
Sqrt()|返回一个数的平方根
Tan()|返回一个角度的正切

## 聚集函数

**聚集函数**运行在行组上，计算和返回单个值得函数
函数|说明
-|:-
AVG()|平均值函数
COUNT()|计算行的数目或符合特定条件的行的数目
MAX()|返回列的最大值
MIN()|返回列的最小值
SUM()|返回指定列的和

# 补充
## HAVING子句
HAVING子句对分组添加过滤条件
```sql
SELECT cust_id,COUNT(*) AS orders
FROM orders
GROUP BY cust_id
HAVING COUNT(*) >= 2;
```

# 联结
## 内部联结
内联接使用比较运算符根据每个表共有的列的值匹配两个表中的行
```sql
SELECT * FROM a  INNER JOIN b
ON a.aid = b.bid
```

## 自然联结
自然联结排除相同的列多次出现
## 外部联结
### 左外部联结
返回左表中的所有行，包括与右表有关联以及没有关联的行。
### 右外部联结
返回右表中的所有行，包括与左表有关联以及没有关联的行。

# MySQL数据库引擎
+ InnoDB是一个可靠的事物处理引擎，它不支持全文本搜索
+ MEEMORY在功能上等同于MyISAM，但由于数据存储在内存（不是磁盘）中，速度很快（特别适合用于临时表）
+ MyISAM是一个性能极高的引擎，它支持全文本搜索，但不支持事物处理。