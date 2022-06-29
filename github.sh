# 自动化打包同时将打包后的代码发布到gh-pages分支

# 1.打包
npm run src:build

# 2.进入打包目录
cd web-javascript

# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/web-javascript.git
git push -f origin gh-pages

# 4.返回初始目录
cd -