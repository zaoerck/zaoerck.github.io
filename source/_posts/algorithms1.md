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

# 典型静态方法实现
1. 判断是否为素数
```java
//这不就是遍历嘛。
public static boolean isPrime(int N) {
    if (N < 2) return false;
    for (int i = 2; i*i <= N; i++) {
        if(N % i == 0) return false;
    }
    return true;
}
```
2. 牛顿迭代法求平方根

    牛顿迭代法求函数f(x)=0近似解思想：
    + f(x)=0的解也就是f(x)与x轴交点
    + 任选$x_0$，f(x)横坐标为0的点为：($x_0$,f($x_0$)),这一点的切线斜率为：f$^{'}$($x_0$)
    + 切线与x轴交点$x_1$=$x_0$-$\frac{f(x_0)}{f^{'}(x_0)}$
    + 依次计算$x_2$,$x_3$...$x_n$就可以逼近f(x)=0的解
    
    求平方根时f(x) = x$^{2}$-a, f$^{'}$(x)=2x，则：
    $$x_{n+1} = x_{n} - \frac{x_{n}^{2}-a}{2x_n}=\frac{1}{2}(x_n+\frac{a}{x_n})$$

    若$x_n$为解，则$x_{n}=\frac{a}{x_n}$，但实际上只能无限逼近，因此可以用$\left|x_{n}-\frac{a}{x_n}\right|$来表示误差。
```java
public static double sqrt(double C){
    if (c < 0) return Double.NaN;
    double err = 1e-15;
    double t = c;
    while(Math.abs(t - c/t) > err * t){
        t = (c / t + t) / 2.0; 
    }
    return t;
}
```
    