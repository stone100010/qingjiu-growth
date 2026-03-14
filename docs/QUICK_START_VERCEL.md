# Vercel快速开始指南

## 🚀 5分钟快速部署

### 前提条件

- ✅ GitHub账户
- ✅ Vercel账户
- ✅ 项目代码已推送到GitHub

---

## 📋 部署步骤

### 1. 连接GitHub仓库

1. 登录 Vercel Dashboard
2. 点击 "Add New Project"
3. 导入GitHub仓库 `stone100010/qingjiu-growth`
4. 点击 "Deploy"

### 2. 配置环境变量

在Vercel项目设置中添加：

```
DATABASE_URL="你的PostgreSQL连接字符串"
```

### 3. 推送数据库Schema

```bash
# 在项目根目录执行
npx prisma db push
```

### 4. 填充数据

```bash
npm run db:seed
```

---

## 💻 本地开发

### 安装依赖

```bash
npm install
```

### 配置环境变量

```bash
# 复制模板
cp .env.example .env.local

# 编辑数据库URL
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth"
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

---

## 🗄️ 数据库备份

### 导出数据

```bash
pg_dump -h YOUR_HOST_IP -U openaigc -d qingjiu_growth > backup.sql
```

### 导入数据

```bash
psql $DATABASE_URL < backup.sql
```

---

## 📝 开发流程

1. 本地开发 → 2. 测试 → 3. Git提交 → 4. Vercel自动部署

---

## 🔒 安全注意事项

- ✅ 不要提交 `.env` 文件
- ✅ 使用强密码
- ✅ 定期更换密钥
- ✅ 限制数据库访问

---

## 🎯 项目结构

```
qingjiu-growth/
├── src/           # 源代码
├── prisma/        # 数据库Schema
├── public/        # 静态资源
├── docs/          # 文档
└── README.md      # 项目说明
```

---

## 📞 获取帮助

- 查看 `docs/` 文件夹获取详细文档
- 查看 `TODO.md` 了解开发进度
- 查看 `README.md` 了解项目信息

---

_清玖成长网站 - 快速开始指南_
_最后更新: 2026-03-14_
