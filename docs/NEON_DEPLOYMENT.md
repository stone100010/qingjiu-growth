# Neon部署流程

## 部署步骤

1. 创建Neon项目
2. 获取连接字符串
3. 配置环境变量
4. 推送Schema
5. 运行种子数据

## 环境变量

在Vercel中配置：
```
DATABASE_URL="postgresql://user:password@host.example.com:5432/dbname"
```

## 本地开发

在 `.env.local` 中配置：
```
DATABASE_URL="postgresql://openaigc:YOUR_PASSWORD@YOUR_HOST_IP:5432/qingjiu_growth"
```

## 注意事项

- 不要在代码中硬编码密码
- 使用环境变量管理敏感信息
- 生产环境使用强密码
