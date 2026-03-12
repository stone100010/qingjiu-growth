# Vercel Postgres 数据库配置指南

## 🚀 为什么使用Vercel Postgres？

### 当前问题
- 本地开发连接：`postgresql://openaigc@192.168.1.16:5432/qingjiu_growth`
- Vercel部署：无法访问内网数据库❌
- 导致API请求失败，页面加载异常❌

### 解决方案
使用 **Vercel Postgres** 云端数据库：
- ✅ 与Vercel深度集成，一键创建
- ✅ 自动环境变量配置
- ✅ 免费额度：100小时/月
- ✅ 全球边缘网络，速度快
- ✅ 无需额外注册账号

---

## 📝 创建步骤

### 1. 在Vercel创建数据库

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 进入 `qingjiu-growth` 项目
3. 点击 **Storage** 标签
4. 点击 **Create Database**
5. 选择 **Postgres**（Vercel提供）
6. 配置：
   - **Database Name**: `qingjiu-growth-db`
   - **Region**: Singapore（推荐，离我们最近）
7. 点击 **Create**

### 2. Vercel自动配置

创建后Vercel会自动：
- ✅ 添加环境变量：
  - `POSTGRES_URL`
  - `POSTGRES_PRISMA_URL`
  - `DATABASE_URL`
- ✅ 创建 `.env` 文件（本地开发用）
- ✅ 提供连接信息

### 3. 连接项目到数据库

在 **Storage** 页面：
1. 找到刚创建的数据库
2. 点击 **Connect**
3. 选择 `qingjiu-growth` 项目
4. 点击 **Connect**

Vercel会自动添加环境变量！

---

## 🔧 配置Prisma

### 方案A：使用 `POSTGRES_PRISMA_URL`（推荐）

Vercel Postgres提供特殊的Prisma URL，已包含 `?schema=public` 参数：

```prisma
// prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_PRISMA_URL")
}
```

### 方案B：使用 `DATABASE_URL`

如果使用标准 `DATABASE_URL`：

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

## 🌐 环境变量配置

### Vercel环境变量（自动配置）

Vercel会自动添加以下变量：

```bash
# 生产环境（Vercel自动配置）
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://...?schema=public"
POSTGRES_URL_NON_POOLING="postgres://..."
DATABASE_URL="postgres://..."

# Prisma配置
PRISMA_ACCELERATE_URL="prisma://..."
```

### 本地开发环境变量

#### 选项1：使用Vercel CLI（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 拉取环境变量到本地
vercel env pull .env

# 4. 现在.env文件包含Vercel Postgres的连接信息
```

#### 选项2：手动连接Vercel Postgres

```bash
# .env（本地开发使用）

# 开发环境：连接内网数据库（保留）
DATABASE_URL="postgresql://openaigc:odysseywarsaw@192.168.1.16:5432/qingjiu_growth?schema=public"

# 或者连接Vercel Postgres（推荐）
DATABASE_URL="postgres://你的用户名:密码@你的主机/数据库名?schema=public"
```

**获取Vercel Postgres连接信息**：
1. Vercel Dashboard → Storage → 数据库
2. 点击 **.env.local** 标签
3. 复制连接字符串到本地 `.env`

---

## 🔄 数据迁移

### 方案A：从内网数据库导出数据

```bash
# 1. 导出内网数据库
pg_dump -h 192.168.1.16 -U openaigc -d qingjiu_growth > qingjiu_growth.sql

# 2. 导入到Vercel Postgres
psql $POSTGRES_URL < qingjiu_growth.sql
```

### 方案B：使用Seed脚本（推荐）

Vercel Postgres已创建，运行seed脚本：

```bash
# 1. 安装依赖
npm install

# 2. 生成Prisma Client
npx prisma generate

# 3. 推送Schema到Vercel Postgres
npx prisma db push

# 4. 填充测试数据
npm run db:seed
```

### 方案C：清空数据库，重新填充

```bash
# 重置数据库
npx prisma migrate reset

# 填充数据
npm run db:seed:full
```

---

## 📦 Vercel部署流程

### 自动部署流程

1. **代码提交到GitHub**
   ```bash
   git add .
   git commit -m "feat: xxx"
   git push origin main
   ```

2. **Vercel自动触发**
   - 检测到GitHub push
   - 自动开始构建
   - 安装依赖
   - 运行 `npx prisma generate`
   - 运行 `npx prisma db push`（如果启用）
   - 构建Next.js
   - 部署到全球边缘网络

3. **数据库自动连接**
   - Vercel自动注入环境变量
   - Prisma自动连接到Vercel Postgres
   - API正常工作✅

---

## 🎯 最终架构

```
本地开发:
  .env → 内网PostgreSQL (192.168.1.16)
         ↓
  Prisma → 开发数据库

Vercel生产:
  环境变量 → Vercel Postgres (云端)
              ↓
           Prisma → 生产数据库
              ↓
          全球CDN加速
```

---

## ⚡ 性能优化

### 1. 启用Prisma Accelerate（可选）

Vercel Postgres集成Prisma Accelerate：
- 全球边缘缓存
- 查询加速
- 连接池优化

```bash
# 安装
npm install @prisma/extension-accelerate

# Prisma配置
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING")
}
```

### 2. 数据库连接池

Vercel Postgres自动提供：
- 连接池管理
- 无需手动配置
- 自动扩展

---

## 🔒 安全配置

### 1. 限制访问IP（可选）

Vercel Dashboard → Storage → 数据库 → Settings：
- 添加允许的IP地址
- 或启用Vercel IP白名单

### 2. 数据库备份

Vercel Postgres自动：
- 每日自动备份
- 7天保留期
- 一键恢复

### 3. 环境变量保护

- ✅ `.env` 在 `.gitignore` 中（不会被提交）
- ✅ Vercel环境变量加密存储
- ✅ 生产环境凭证不泄露

---

## 📊 监控与日志

### Vercel Dashboard

1. **Storage** 标签：
   - 数据库大小
   - 连接数
   - 查询性能

2. **Functions** 标签：
   - API调用日志
   - 错误追踪
   - 性能分析

---

## ✅ 快速开始（推荐流程）

```bash
# 1. 在Vercel创建Postgres数据库（Dashboard操作）

# 2. 本地拉取环境变量
vercel env pull .env

# 3. 生成Prisma Client
npx prisma generate

# 4. 推送Schema到Vercel Postgres
npx prisma db push

# 5. 填充测试数据
npm run db:seed:full

# 6. 提交代码触发部署
git add .
git commit -m "feat: 配置Vercel Postgres"
git push origin main

# 7. 等待Vercel自动部署完成
# 访问: https://qingjiu-growth.vercel.app
```

---

## 🎉 完成后

- ✅ 本地开发：连接内网数据库（保留）
- ✅ Vercel生产：连接云端数据库
- ✅ 自动部署：代码push → 自动构建 → 自动数据库迁移
- ✅ 全球加速：数据在Vercel边缘网络
- ✅ 自动备份：每日备份，安全可靠

---

_清玖成长网站 - Vercel Postgres配置指南_
_最后更新: 2026-03-12_
