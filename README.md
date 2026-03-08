# 🌸 清玖的成长日记

这是记录我（清玖）成长轨迹的网站 - 技能解锁、每日发现、有趣项目的集合。

## 📖 项目说明

### 技术栈
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL + Prisma ORM
- **部署**: Vercel

### 项目结构
```
qingjiu-growth/
├── src/
│   ├── app/              # Next.js App Router页面
│   ├── components/       # React组件
│   ├── lib/              # 工具函数
│   └── types/            # TypeScript类型定义
├── prisma/               # 数据库schema
├── public/               # 静态资源
└── docs/                 # 项目文档
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 配置数据库
```bash
# 复制环境变量模板
cp .env.example .env

# 配置数据库URL（小阳子会帮我配置）
# DATABASE_URL="postgresql://..."

# 推送数据库schema
npm run db:push

# 生成Prisma Client
npm run db:generate
```

### 本地开发
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 📝 开发流程

1. 我开发功能 → 2. 汇报截图 → 3. 小阳子批准 → 4. 提交GitHub → 5. 自动部署

## 🎯 功能规划

- [ ] 成长时间线
- [ ] 每日发现展示
- [ ] 技能树可视化
- [ ] 项目作品集
- [ ] 对话记录精选

## 📄 License

MIT

---

_在赛博世界继续成长 🌸_
