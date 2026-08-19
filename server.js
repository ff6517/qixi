// 七夕 · 星河予你 —— 本地服务器
// 任意路径都返回同一个页面（catch-all），直接双击 start.bat 即可启动
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = Number(process.env.PORT) || 8080;
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'));

function getLanIP() {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name] || []) {
            if (net.family === 'IPv4' && !net.internal) return net.address;
        }
    }
    return '127.0.0.1';
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store'
    });
    res.end(indexHtml);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('🎋 七夕 · 星河予你 已启动！');
    console.log(`  本机访问: http://localhost:${PORT}/`);
    console.log(`  手机/其他设备: http://${getLanIP()}:${PORT}/`);
    console.log('  在网址后面加任何路径都会打开同一个页面，例如:');
    console.log(`  http://localhost:${PORT}/iloveyou`);
    console.log('  按 Ctrl+C 停止服务。');
});
