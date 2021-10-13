<template><p>如果远程新建了一个分支，本地没有该分支，可以用
<code>git checkout --track origin/branch_name</code>
这时候本地会新建一个分支名叫branch_name，会自动跟踪远程的同名分支branch_name</p>
<hr>
<p>用上面中方法，得到的分支名永远和远程的分支名一样，如果想新建一个本地分支不同名字，同时跟踪一个远程分支可以利用。
<code>git checkout -b new_branch_name branch_name</code></p>
<hr>
<p>本地分支推送到远程
<code>git push --set-upstream origin branch_name</code></p>
<hr>
<p>本地仓库关联远程仓库
<code>git remote add origin git@github.com:YotrolZ/helloTest.git</code></p>
<hr>
<p>删除本地分支
<code>git branch -d branch_name</code></p>
<hr>
<p>修改分支名
<code>git branch -m old_branch_name new_branch_name</code></p>
<hr>
<p>删除远程分支
<code>git push origin --delete branch_name</code></p>
<hr>
<p>修改远程分支名
<code>git branch -m old_branch_name new_branch_name</code>
<code>git push --delete origin old_branch_name</code>
<code>git push origin new_branch_name</code>
<code>git push --set-upstream origin new_branch</code></p>
<hr>
<p>加上后面这个选项允许不相关历史提交
<code>git pull origin master --allow-unrelated-histories</code></p>
<hr>
<p>强制提交到远程仓库某个分支
<code>git push -f github.com:micjason/my-vuepress.git master:gh-pages</code></p>
<p>场景1：本地和远程都没有分支，要推送一个分支到远程，步骤：
1.git init
2.git add -A
3.git commit -m 'test'
4.git remote add origin github.com:micjason/my-vuepress.git
5.git push -u origin 本地分支名(master):远程分支名(自己取的)</p>
</template>
