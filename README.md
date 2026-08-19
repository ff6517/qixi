# 七夕 · 星河予你（浏览器网站）

由 `新建 文本文档.html` 改造而成的浏览器网站，任何路径打开都会跳到这个页面内容。

## 本地运行

方式一（最简单）：双击 `start.bat`，会自动启动服务并打开浏览器。

方式二（命令行）：

```bash
node server.js
```

然后访问：

- 本机：http://localhost:8080/
- 手机/其他设备（同一局域网）：http://本机IP:8080/

网址后面加**任何路径**都会打开同一个页面，例如：

- http://localhost:8080/
- http://localhost:8080/iloveyou
- http://localhost:8080/any/deep/path

按 `Ctrl+C` 停止服务。

## 部署到线上（可选）

把 `index.html` 和 `404.html` 上传到任意静态托管（GitHub Pages、Netlify、Vercel 等），
访问该域名下的任何路径都会自动跳到首页内容（`404.html` 负责重定向）。

## 修改内容

文案、按钮、动画都在 `index.html` 里，直接编辑保存即可。
