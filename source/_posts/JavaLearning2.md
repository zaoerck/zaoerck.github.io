---
title: 重拾Java（二）异常处理
date: 2018-04-18 21:16:40
tags: 
- Java
- 编程
- 异常处理
categories:
- 编程学习
- Java
---
# Java标准异常
Throwable这个Java类被用来表示任何可以作为异常被抛出的类。Throwable对象可以分为两种类型：
1. Error：用来表示编译时和系统错误（除特殊情况外，一般不需要你关心）
2. Exception：可以被抛出的基本类型。

## 特例：RuntimeException
RuntimeException将被自动捕获，不需要自己手动捕获，但还是可以在代码中抛出RuntimeException。

先捕获小的异常再捕获大的异常
重写方法需要抛出与原方法所抛出的异常类型一致异常或者不抛。

## 捕获异常
### try块
如果在方法内部抛出异常（或者方法内部调用其他方法时抛出异常），方法会在抛出异常的过程中停止。如果不希望方法就此结束，可以在方法内部捕获异常。
```java
try{
    // Code that might generate exceptions
}
```
### 异常处理
抛出的异常需要被处理，异常处理程序紧跟在try块后，以关键字catch表示：
```java
try {
    // Code that might generate exceptions
} catch(Type1 id1) {
    // Handle exceptions of Type1
} catch(Type2 id2) {
    // Handle exceptions of Type2
} catch(Type3 id3) {
    // Handle exceptions of Type3
}
```

### 使用finally清理
对于一些代码，可能会希望无论try块中的异常是否抛出，它们都能得到执行。这通常适用于内存回收之外的情况（因为内存回收由垃圾回收器完成）。为了达到这个效果，需要时用finally语句。
```java
try {
	//That might throw A, B, or C
} catch(A a1) {
	//Handler for situation A
} catch(B b1) {
	//Handler for situation B
} catch(C c1) {
	//Handler for situation C
} finally {
	//Activities that happen every time
}
```
## 异常信息打印
```java
String getMessage()//获取详细信息
String getLocalizedMessage()//用本地语言表示的详细信息
String toString()//返回对Throwable的简单描述，要是有详细信息的话，也会包含在内
```
### 栈轨迹
+ void printStackTrace()
+ void printStackTrace(PrintStream)
+ void printStackTrace(java.io.printWriter)

第一个版本输出到标准错误中，后两个版本允许选择要输出的流。

+ Throwable fillInStackTrace()

用于在Throwable对象的内部记录栈帧的当前状态。

printStackTrace()方法所提供的信息可以通过getStackTrace()方法来直接访问，这个方法将返回一个由栈轨迹中的元素所构成的数组，其中每一个元素都表示栈中的一帧。元素0是站定元素，并且是调用序列中的最后一个方法调用。
```java
package exceptions;

public class WhoCalled {
	static void f() {
		try {
			throw new Exception();
		} catch (Exception e) {
			for(StackTraceElement ste : e.getStackTrace()) {
				System.out.println(ste.getMethodName());
			}
		}
	}
	static void g() {
		f();
	}
	
	static void h() {
		g();
	}
	public static void main(String[] args) {
		f();
		System.out.println("-------------------------------");
		g();
		System.out.println("-------------------------------");
		h();
	}
}
/* output
f
main
-------------------------------
f
g
main
-------------------------------
f
g
h
main

*/
```
这里打印的是方法名，实际可以打印整个StackTraceElement。
```java
//整个StackTraceElement输出如下：
exceptions.WhoCalled.f(WhoCalled.java:6)
exceptions.WhoCalled.main(WhoCalled.java:21)
-------------------------------
exceptions.WhoCalled.f(WhoCalled.java:6)
exceptions.WhoCalled.g(WhoCalled.java:14)
exceptions.WhoCalled.main(WhoCalled.java:23)
-------------------------------
exceptions.WhoCalled.f(WhoCalled.java:6)
exceptions.WhoCalled.g(WhoCalled.java:14)
exceptions.WhoCalled.h(WhoCalled.java:18)
exceptions.WhoCalled.main(WhoCalled.java:25)

```
## 重新抛出异常
有可能单个catch不能完全处理一个异常，此时在进行了一些处理之后，需要将异常重新抛出，由上一级环境中的异常处理程序进行处理。
```java
package exceptions;

public class Rethrowing {
	public static void f() throws Exception {
		System.out.println("originathing the exception in f()");
		throw new Exception("thrown form f()");
	}
	
	public static void g() throws Exception {
		try {
			f();
		} catch(Exception e) {
			System.out.println("Inside g(), e.printStackTrace()");
			e.printStackTrace(System.out);
			throw e;
		}
	}
	
	public static void h()  throws Exception{
		try {
			f();
		} catch(Exception e) {
			System.out.println("Inside h(), e.printStackTrace()");
			e.printStackTrace(System.out);
			throw (Exception)e.fillInStackTrace();//调用fillinStackTrace()的这一行就成了新的异常发生点
		}
	}
	
	public static void main(String[] args) {
		try {
			g();
		} catch(Exception e) {
			System.out.println("main: printStraceTrace()");
			e.printStackTrace(System.out);
		}
		System.out.println("-------------------------------");
		try {
			h();
		} catch(Exception e) {
			System.out.println("main:printStackTrace()");
			e.printStackTrace(System.out);
		}
	}
}

输出如下：
originathing the exception in f()
Inside g(), e.printStackTrace()
java.lang.Exception: thrown form f()
	at exceptions.Rethrowing.f(Rethrowing.java:6)
	at exceptions.Rethrowing.g(Rethrowing.java:11)
	at exceptions.Rethrowing.main(Rethrowing.java:31)
main: printStraceTrace()
java.lang.Exception: thrown form f()
	at exceptions.Rethrowing.f(Rethrowing.java:6)
	at exceptions.Rethrowing.g(Rethrowing.java:11)
	at exceptions.Rethrowing.main(Rethrowing.java:31)
-------------------------------
originathing the exception in f()
Inside h(), e.printStackTrace()
java.lang.Exception: thrown form f()
	at exceptions.Rethrowing.f(Rethrowing.java:6)
	at exceptions.Rethrowing.h(Rethrowing.java:21)
	at exceptions.Rethrowing.main(Rethrowing.java:38)
main:printStackTrace()
//使用了fillInStackTrace()，把当前调用栈信息填入原来异常对象建立的，也就是成了异常的新发生地
java.lang.Exception: thrown form f()
	at exceptions.Rethrowing.h(Rethrowing.java:25)
	at exceptions.Rethrowing.main(Rethrowing.java:38)

```

## 异常链
在捕获一个异常后抛出另一个异常，并且希望把原始异常的信息保存下来，这就是异常链。

Throwable的子类在构造器中可以接受一个cause对象作为参数，这个cause就用来表示原始异常，这样就可以把原始异常传递给新的异常，使得即使在当前位置创建并抛出了新的异常，也能通过这个异常链追踪到异常最初发生的位置。
在Throwable子类中，只有三种基本的异常类提供了带cause参数的构造器：Error、Exception、RuntimeException。如果要把其他异常链链接起来，要使用initCause()方法而不是构造器。

1. Error(Throwable cause)
	
	Constructs a new error with the specified cause and a detail message of (cause==null ? null : cause.toString()) (which typically contains the class and detail message of cause).
1. Exception(Throwable cause)

	Constructs a new exception with the specified cause and a detail message of (cause==null ? null : cause.toString()) (which typically contains the class and detail message of cause).
1. RuntimeException(Throwable cause)
	Constructs a new runtime exception with the specified cause and a detail message of (cause==null ? null : cause.toString()) (which typically contains the class and detail message of cause).


```java
try {
    g();
} catch (MyException1 e) {
// TODO Auto-generated catch block
    e.printStackTrace();
    //这里做了修改
    throw new MyException2(e);
}
```