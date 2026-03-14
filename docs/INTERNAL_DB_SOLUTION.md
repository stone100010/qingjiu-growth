# 内网数据库方案 - 永久解决方案

## 方案：使用内网PostgreSQL作为主数据库

### 架构

```
本地开发:
  localhost → 内网PostgreSQL → qingjiu_growth

Vercel部署:
  Vercel → 内网穿透/frp → 内网PostgreSQL → qingjiu_growth
```

### 方案A：使用Cloudflare Tunnel（推荐）

**优点**：
- 免费
- 稳定
- 无需公网IP
- 自动HTTPS

**配置**：
1. 在内网设备上安装cloudflared
2. 创建tunnel映射PostgreSQL端口
3. Vercel连接tunnel URL

### 方案B：使用frp

**优点**：
- 需要公网服务器
- 配置简单
- 性能好

### 方案C：直接使用公网IP

如果有公网IP，直接开放PostgreSQL端口（加强安全）

---

## 项目隔离

所有项目共用一个PostgreSQL实例，通过database区分：

- qingjiu_growth (已创建)
- ai_studio
- project_3
- project_4
...

---

## 自动化脚本

可以写脚本自动：
1. 创建新database
2. 推送Schema
3. 填充数据
4. 配置环境变量

**完全自动化，不需要手动操作！**

---

## 🔒 安全配置

### 本地开发

在 `.env.local` 中配置：
```
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth"
```

### 生产部署

使用环境变量管理平台（如Vercel）
```
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth"
```

### 注意事项

- 不要在代码中硬编码密码
- 定期更换数据库密码
- 限制数据库访问IP
- 使用强密码
