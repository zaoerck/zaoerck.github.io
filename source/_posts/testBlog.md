---
title: 不同终端同步
date: 2018-03-28 21:41:06
tags:
- 站点维护
categories:
- 站点维护
---
在实验室部署的hexo来更新，后来需要在自己笔记本上进行博客更新，因此上网查询教程进行配置，在这里记录下来，下面将原来部署的终端记为A，新的终端为B。
本文章参考了[搭建hexo博客并简单的实现多终端同步](https://righere.github.io/2016/10/10/install-hexo/)

# 创建hexo分支
1. 先在github上的博客仓库新建一个branch，这里我新建的是hexo
2. 将hexo分支设置为默认分支
3. 在终端A上将源文件上传到hexo分支
```
如果用的主题是第三方theme，是使用gitclone下来的话，要把主题文件夹下面把.git文件夹删除掉，不然主题无法push到远程仓库，导致你发布的博客是一片空白
```
4. 初始化本地仓库：<code>git init</code>
5. 初始化本地仓库： git init

6. 添加本地所有文件到仓库：<code>git add -A</code>

7. 添加commit：<code>git commit -m "blog源文件"</code>

8. 添加本地仓库分支hexo：<code>it branch hexo</code>g

9. 添加远程仓库：<code>git remote add origin git@github.com:yourname/yourname.github.io.git</code>

10. 将本地仓库的源文件分支hexo强制推送到远程仓库hexo分支：<code>git push origin hexo -f</code>
# 终端B操作
1. 在终端B上安装Node.js、Git。
```
这里在安装完成时发现在gitbash中找不到npm和node命令，上网查了解决办法，
有的说添加用户环境变量，
有的说重装到C盘，
有的说在gitbash内重装
最后是通过电脑重启解决的O(∩_∩)O。
```
2. 在终端B中生成SSH，将公钥添加到github上。
```
这里也遇到一个坑，我的笔记本原来生成过秘钥，但是名字是自定义为github_rsa
导致每次配置好后，下次就又Permission denied

解决办法：再配置一个config文件
cd ~/.ssh/

vi config

Host github.com
 HostName github.com
 User git
 IdentityFile ~/.ssh/github_rsa
 保存退出后重新尝试ssh -T git@github.com
```
3. 将github远程仓库的hexo分支clone到本地
```
git clone -b hexo git@github.com:yourname/yourname.github.io.git
```
4. 安装hexo:<code>npm install</code>
```
不知道为什么我这里执行后hexo命令不能运行，最后使用的是下列命令：
npm install hexo-cli -g
```
5. 在终端B编辑博客，发布
```
hexo new post "new blog name"   //新建一个.md文件，并编辑完成自己的博客内容
git add source  //经测试每次只要更新sorce中的文件到Github中即可，因为只是新建了一篇新博客
git commit -m "XX"
git push origin hexo  //更新分支
hexo d -g   //push更新完分支之后将自己写的博客对接到自己搭的博客网站上，同时同步了Github中的master
```
# 不同终端同步
在不同的终端配置已经完成，现在可以在不同的终端进行博客更新，每个终端更新步骤如下：
```
git pull origin hexo  //先pull完成本地与远端的融合
hexo new post " new blog name"
git add source
git commit -m "XX"
git push origin hexo
hexo d -g
```

# 测试
这句话是在终端B上编写上传的。
这句话是在终端A上编写上传的。

# 其他问题
在[搭建hexo博客并简单的实现多终端同步](https://righere.github.io/2016/10/10/install-hexo/)中提到了使用github将next的主题文件进行了更新，使用hexo g生成静态网页，然后hexo s本地调试成功，也没什么问题，当我hexo d发布到远程仓库的之后，在线浏览的时候发现一片空白，这时候使用其他主题都没问题。
虽然目前没遇到，在这里做一下记录，解决办法如下：
解决办法: 将主题文件夹下面的source/vendors，全部改成source/lib
```
1. 先把主题文件夹下面`source/`下的`vendors`改成`lib`；
2. 将主题配置文件中`_internal: vendors`改成`_internal: lib`
3. 将主题文件夹下面其他文件中的`source/vendors`改成`source/lib`
```
