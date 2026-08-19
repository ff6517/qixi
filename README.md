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

## 在线改称呼（不用改代码）

打开 https://ff6517.github.io/qixi/edit.html ，输入名字即可生成专属链接：

- 专属链接：https://ff6517.github.io/qixi/?name=名字
- 路径式链接：https://ff6517.github.io/qixi/名字 （访问任意路径都会自动转发到页面内容）

谁打开链接，页面开头就会显示对应的称呼。名字写在链接里，不需要服务器存储。
首页右下角也有「✎ 换个称呼」的小入口。

「设为本机默认」会把名字保存到当前手机/电脑的浏览器里，之后打开根地址
https://ff6517.github.io/qixi/ 就默认显示这个名字（只对当前设备生效）。
