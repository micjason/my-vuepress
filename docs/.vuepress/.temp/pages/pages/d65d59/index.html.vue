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
</template>
