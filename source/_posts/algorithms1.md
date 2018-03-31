---
title: 开始算法学习
date: 2018-03-31 15:42:15
tags:
- 算法
categories:
- 算法与数据结构
---
今天学习算法与数据结构了，以前学过的东西都不太记得了，要开始捡起来。
# 典型的数组处理代码

1. 找出数组中的最大元素
```java
double max = a[0]
for (int i = 0; i < a; i++)
    if (a[i] > max) a[i] = max;
```
2. 计算数组的平均值
```java
int N = a.length;
double sum = 0.0;
for (int i = 0; i < N; i++)
    sum += a[i];
double average = sum / N;
```
3. 复制数组
```java
int N = a.length;
double[] b = new double[N];
for (int i = 0; i < N; i++)
    b[i] = a[i];
```
4. 颠倒数组元素的顺序
```java
int N = a.length;
for (int i = 0; i < N/2; i++){
    double temp = a[i];
    a[i] = a[N-1-i];
    a[N-1-i] = temp;
}
```
5. 矩阵相乘
```java
int N = a.length;
double[][] c = new double[N][N];
for(int i = 0; i < N; i++)
    for(int j = 0; j < N; j++){
        for(int k = 0; k < N; k++){
            c[i][j] += a[i][k] * b[k][j];
        }
    }
```
    