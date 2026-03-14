# 环境变量配置指南

## 📋 环境变量说明

### 必需配置

#### `DATABASE_URL` - 数据库连接

**格式**:
```
postgresql://用户名:密码@主机:端口/数据库名?schema=public
```

**不同环境的配置**:

#### 本地开发（内网数据库）
```bash
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth?schema=public"
```

#### Vercel生产（Vercel Postgres）
```bash
# Vercel自动配置，无需手动设置
DATABASE_URL="postgres://xxx"
POSTGRES_PRISMA_URL="postgres://xxx?schema=public"
```

---

## 🔧 配置方式

### 方式1：Vercel CLI（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 拉取环境变量到本地
vercel env pull .env

# 现在.env包含Vercel Postgres的连接信息
```

### 方式2：手动配置

1. Vercel Dashboard → 项目 → Settings → Environment Variables
2. 添加 `DATABASE_URL`
3. 复制Vercel Postgres的连接字符串

---

## 🌍 多环境配置

### 开发环境（.env.local）
```bash
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth?schema=public"
```

### 生产环境（Vercel自动）
```bash
# Vercel自动配置，无需手动设置
DATABASE_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
```

---

## ✅ 验证配置

```bash
# 测试数据库连接
npx prisma db push

# 查看数据库内容
npx prisma studio
```

---

## 🔒 安全注意事项

1. ✅ `.env` 文件在 `.gitignore` 中
2. ✅ 永远不要提交环境变量到Git
3. ✅ 生产环境使用Vercel环境变量
4. ✅ 定期更换数据库密码
5. ✅ 使用强密码
