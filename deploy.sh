#!/usr/bin/env sh

# 文档的仓库地址分支是master，打包之后再提交到gh-pages，放在github提供的网页服务上面，这里的shell命令省去重复操作git的步骤
# 如果是mac电脑，执行./deploy.sh提示没有权限，先cd..到上一级目录执行sudo chmod -R 777 my-vuepress
# 然后再执行./deploy.sh

# 确保脚本抛出遇到的错误,不会一直滚雪球下去
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f github.com:micjason/my-vuepress.git master:gh-pages

cd -