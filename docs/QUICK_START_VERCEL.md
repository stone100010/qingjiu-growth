# Vercel Postgres 配置步骤

## 快速开始（3步配置）

### 1️⃣ 在Vercel创建数据库

1. Vercel Dashboard → **qingjiu-growth** 项目
2. 点击 **Storage** 标签
3. **Create Database** → 选择 **Postgres**
4. Region: **Singapore**
5. 点击 **Create**

### 2️⃣ 连接项目

1. Storage页面找到刚创建的数据库
2. 点击 **Connect**
3. 选择 `qingjiu-growth` 项目
4. 点击 **Connect**

✅ Vercel自动添加环境变量！

### 3️⃣ 本地开发配置

```bash
# 拉取Vercel环境变量到本地
vercel env pull .env

# 生成Prisma Client
npx prisma generate

# 推送Schema到Vercel Postgres
npx prisma db push

# 填充测试数据
npm run db:seed:full

# 提交代码触发部署
git push origin main
```

---

## 环境变量说明

Vercel会自动添加：
- `POSTGRES_URL` - 数据库连接
- `POSTGRES_PRISMA_URL` - Prisma专用（推荐使用）
- `DATABASE_URL` - 标准连接
- `POSTGRES_URL_NON_POOLING` - 无连接池

Prisma配置：
```prisma
datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_PRISMA_URL")
}
```

---

## 数据迁移

### 从内网数据库迁移

```bash
# 导出内网数据
pg_dump -h 192.168.1.16 -U openaigc -d qingjiu_growth > backup.sql

# 导入到Vercel Postgres
psql $DATABASE_URL < backup.sql
```

### 或重新填充（更简单）

```bash
npm run db:seed:full
```

---

## 完成！

- ✅ 本地开发：可继续使用内网数据库
- ✅ Vercel生产：自动连接云端数据库
- ✅ 自动部署：push代码 → 自动构建
- ✅ 全球加速：边缘网络访问

访问: https://qingjiu-growth.vercel.app 🚀
