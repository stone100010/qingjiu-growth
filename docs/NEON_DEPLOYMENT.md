# Neon数据库 - Vercel部署配置

## 环境变量配置

### Vercel环境变量（已自动添加）
Neon已经自动添加了以下环境变量到Vercel：
- `NEON_DATABASE_URL`
- `NEON_POSTGRES_PRISMA_URL`
- `NEON_POSTGRES_URL_NON_POOLING`

### 本地开发环境变量
本地开发继续使用内网数据库：
```bash
DATABASE_URL="postgresql://openaigc:odysseywarsaw@192.168.1.16:5432/qingjiu_growth"
```

## Vercel部署配置方案

### 方案：在Vercel添加DATABASE_URL别名

1. 进入Vercel Dashboard → qingjiu-growth项目
2. Settings → Environment Variables
3. 添加新变量：
   - Key: `DATABASE_URL`
   - Value: `{{NEON_DATABASE_URL}}` 或直接粘贴Neon连接字符串
   - Environments: Production, Preview, Development

这样Prisma在Vercel上会使用Neon，本地使用内网数据库！

## Git提交代码后
1. Vercel自动触发部署
2. 部署时Prisma会连接到Neon
3. 自动运行 `prisma db push`（如果配置了）
4. 创建表结构
5. 填充测试数据
