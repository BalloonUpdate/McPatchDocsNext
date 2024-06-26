---
home: false
---

## McPatch 2

McPatch是一个给Minecraft客户端做文件更新的独立应用程序。

客户端仅支持Windows，管理端支持全平台

官方企鹅群[【更新助手官方群】](https://jq.qq.com/?_wv=1027&k=PqAEtn39) 925057600

## 2.0版本更新日志

如果你正在使用1.0版本，那么2.0版本无法直接升级，需要删除1.0版本后重新安装。

### 新功能

1. 客户端支持按需下载，通过其它方式提前更新的文件，在下载时会被跳过，不会重复下载
2. 管理端现在自带一个内置的小服务端，使用tcp协议和客户端通信，无需再担心备案的问题
3. 管理端支持上传脚本模板，每次打包后都会按模板生成一个脚本，用来一键上传更新包文件

### 改进

1. 优化管理端文件结构，省去了history目录的设计，硬盘占用减少三分之一
2. 更新包每次都记录完整文件，避免客户端文件因玩家被修改导致无法更新
3. 客户端修复窗口无响应和下载限速的问题，现在可以跑到更快的下载速度

### 取舍

2.0版本相比1.0做出了一些功能上的取舍，以下是1.0支持，2.0不支持的功能列表：

1. 客户端仅支持Windows（不支持Android手机端和其他操作系统）
2. 客户端不再支持sftp（使用管理端内置的tcp协议替代了）
3. 管理端目前提供Windows x86和Linux x86打包，其它平台需要自己构建打包
4. 管理端现在使用纯命令行启动，而不是1.0版本的交互式命令行（方便其它脚本调用）

