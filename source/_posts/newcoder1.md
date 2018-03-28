---
title: 【牛客】二维数组中的查找
date: 2018-03-12 22:25:36
tags:
- 刷题
- 编程
categories:
- 刷题练习
---
# 题目描述
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

时间限制：1秒 空间限制：32768K

# 答案
思路：从左下角开始查找，目标数比实际大，则向上移，比实际小，向右移
```py
# -*- coding:utf-8 -*-
class Solution:
    # array 二维列表
    def Find(self, target, array):
        # write code here
        rows = len(array) - 1
        cols = len(array[0]) - 1
        i = rows
        j = 0
        while j<=cols and i>=0:
            if target<array[i][j]:
                i -=1
            elif target>array[i][j]:
                j +=1
            else:
                return True
        return False
```
