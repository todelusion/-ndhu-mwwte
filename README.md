# 一個基於 Netlify cms 的靜態部落格網站
1. 透過 Netlify 管理能存取文章的帳號
2. 使用 Netlify cms 搭配 git 版控實現靜態網站之新增修改刪除文章

# 新增collection（category）之步驟：
1. 在`public/admin/config.yml`的collection項新增標籤
2. 在`public/main.js`的`dirPathArr`物件新增對應的md資料夾路徑
