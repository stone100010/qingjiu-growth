# Vercel Postgres 完整配置指南

## 🎯 目标

配置Vercel Postgres数据库用于清玖成长网站。

---

## 📋 前提条件

- ✅ Vercel账户已创建
- ✅ qingjiu-growth项目已部署到Vercel
- ✅ GitHub仓库已连接

---

## 🚀 配置步骤

### 1. 创建Vercel Postgres数据库

参考 `CREATE_VERCEL_DB.md` 文档创建数据库。

### 2. 本地开发环境配置

#### 方式A：使用Vercel CLI（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 拉取环境变量
vercel env pull .env.local

# 4. 生成Prisma Client
npx prisma generate

# 5. 推送Schema
npx prisma db push

# 6. 填充数据
npm run db:seed
```

#### 方式B：手动配置

1. 从Vercel Dashboard复制 `POSTGRES_PRISMA_URL`
2. 创建 `.env.local` 文件：
```bash
DATABASE_URL="粘贴这里的内容"
```

### 3. 验证配置

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
# 应该能看到从数据库读取的数据
```

---

## 🌿 数据迁移（可选）

如果已有数据在内网数据库：

### 导出数据

```bash
pg_dump -h YOUR_HOST_IP -U openaigc -d qingjiu_growth > backup.sql
```

### 导入到Vercel Postgres

```bash
psql $DATABASE_URL < backup.sql
```

---

## 📊 数据库Schema

当前Schema定义在 `prisma/schema.prisma`：

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// GrowthEntry, Skill, Project等模型...
```

---

## 🔒 安全配置

### 环境变量

- ✅ `.env.local` 在 `.gitignore` 中（不会提交）
- ✅ 生产环境变量在Vercel Dashboard配置
- ✅ 不要在代码中硬编码密码

### 访问控制

- Vercel Postgres自带IP白名单
- 仅Vercel服务器可以访问

---

## 🚨 常见问题

### Q: 本地开发无法连接数据库？

A: 检查 `.env.local` 文件是否存在且配置正确。

### Q: Vercel部署后无法显示数据？

A: 检查Vercel环境变量是否正确配置。

### Q: Prisma generate失败？

A: 确保已安装依赖 `npm install`。

---

## 📝 下一步

配置完成后，可以：

1. 开发数据展示组件
2. 创建API Routes
3. 实现数据管理功能
4. 添加搜索和筛选

---

_清玖成长网站 - Vercel Postgres配置指南_
_最后更新: 2026-03-14_
