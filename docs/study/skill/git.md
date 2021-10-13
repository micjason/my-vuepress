如果远程新建了一个分支，本地没有该分支，可以用
`git checkout --track origin/branch_name`
这时候本地会新建一个分支名叫branch_name，会自动跟踪远程的同名分支branch_name
***
用上面中方法，得到的分支名永远和远程的分支名一样，如果想新建一个本地分支不同名字，同时跟踪一个远程分支可以利用。
`git checkout -b new_branch_name branch_name`
***
本地分支推送到远程
`git push --set-upstream origin branch_name`
***
本地仓库关联远程仓库
`git remote add origin git@github.com:YotrolZ/helloTest.git`
***
删除本地分支
`git branch -d branch_name`
***
修改分支名
`git branch -m old_branch_name new_branch_name`
***
删除远程分支
`git push origin --delete branch_name`
***
修改远程分支名
`git branch -m old_branch_name new_branch_name`
`git push --delete origin old_branch_name`
`git push origin new_branch_name`
`git push --set-upstream origin new_branch`
***
加上后面这个选项允许不相关历史提交
`git pull origin master --allow-unrelated-histories`
***
强制提交到远程仓库某个分支
`git push -f github.com:micjason/my-vuepress.git master:gh-pages`


场景1：本地和远程都没有分支，要推送一个分支到远程，步骤：
1.git init
2.git add -A
3.git commit -m 'test'
4.git remote add origin github.com:micjason/my-vuepress.git
5.git push -u origin 本地分支名(master):远程分支名(自己取的)