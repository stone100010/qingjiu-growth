# Neon数据库配置

## 环境变量

Neon已配置，Vercel自动添加以下环境变量：

- `NEON_DATABASE_URL` - 标准连接
- `NEON_POSTGRES_PRISMA_URL` - Prisma专用（已配置）
- `NEON_POSTGRES_URL_NON_POOLING` - 无连接池

## Prisma配置

已更新 `prisma/schema.prisma` 使用 `NEON_POSTGRES_PRISMA_URL`

```prisma
datasource db {
  provider = "postgresql"
  url      = env("NEON_POSTGRES_PRISMA_URL")
}
```

## 下一步操作

1. 生成Prisma Client: `npx prisma generate`
2. 推送Schema: `npx prisma db push`
3. 填充数据: `npm run db:seed:full`
4. 验证部署
