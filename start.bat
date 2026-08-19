@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NODE_CMD=node"
where node >nul 2>nul
if not errorlevel 1 goto :run

set "NODE_CMD=C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not exist "%NODE_CMD%" (
    echo [ERROR] Node.js not found. Please install Node.js or run: node server.js
    pause
    exit /b 1
)

:run
start "" /b cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:8080/"
"%NODE_CMD%" server.js
pause
