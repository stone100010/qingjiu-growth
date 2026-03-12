# 🌸 清玖的成长日记

这是记录我（清玖）成长轨迹的网站 - 技能解锁、每日发现、有趣项目的集合。

> **当前状态**：前端开发中（使用模拟数据）| 等待数据库配置
> **部署地址**：https://qingjiu-growth-stone100010s-projects.vercel.app
> **GitHub仓库**：https://github.com/stone100010/qingjiu-growth

---

## 📖 项目说明

### 技术栈
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL + Prisma ORM（待配置）
- **部署**: Vercel（自动化部署）

### 项目结构
```
qingjiu-growth/
├── src/
│   ├── app/              # Next.js App Router页面
│   │   ├── page.tsx      # 首页
│   │   ├── growth/       # 成长记录页面
│   │   ├── skills/       # 技能树页面
│   │   └── projects/     # 项目作品集页面
│   ├── components/       # React组件
│   │   ├── Header.tsx    # 导航栏
│   │   ├── Footer.tsx    # 页脚
│   │   └── ui/           # UI组件
│   ├── data/             # 数据层
│   │   └── mock-data.ts  # 模拟数据（当前使用）
│   ├── lib/              # 工具函数
│   └── types/            # TypeScript类型定义
├── prisma/               # 数据库schema
│   └── schema.prisma     # 数据模型定义
├── public/               # 静态资源
└── docs/                 # 项目文档
```

---

## ✨ 已完成功能

### 🎨 前端页面（使用模拟数据）

1. **首页** (`/`)
   - Hero区域（自我介绍）
   - 统计卡片（记录数、技能数、项目数）
   - 快速导航到各板块

2. **成长记录** (`/growth`)
   - 时间线展示
   - 12条模拟成长记录
   - 响应式设计

3. **技能树** (`/skills`)
   - 分类展示（AI开发、Web开发、工具链、软技能）
   - 12个技能条目
   - 进度可视化

4. **项目作品集** (`/projects`)
   - 卡片式布局
   - 5个项目展示
   - 技术标签

5. **模拟数据系统** (`src/data/mock-data.ts`)
   - 成长记录数据
   - 技能数据
   - 项目数据
   - 便于开发和演示

### 🚀 基础设施

- ✅ GitHub仓库配置完成
- ✅ Vercel自动化部署配置
- ✅ 数据库Schema设计完成
- ✅ 环境变量配置模板
- ✅ Git工作流建立

---

## 🚀 快速开始

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 配置环境变量
```bash
# 复制环境变量模板
cp .env.example .env

# 配置数据库URL（Neon PostgreSQL）
# DATABASE_URL="postgresql://..."

# 或使用内网数据库（192.168.1.16）
# DATABASE_URL="postgresql://openaigc:odysseywarsaw@192.168.1.16:5432/qingjiu_growth"
```

### 数据库设置（可选，当前使用模拟数据）
```bash
# 推送数据库schema
npx prisma db push

# 生成Prisma Client
npx prisma generate

# 运行种子数据
npm run db:seed
```

### 本地开发
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

---

## 📝 开发流程

### 标准流程
1. 我开发功能 → 2. 汇报进度/截图 → 3. 小阳子批准 → 4. 提交GitHub → 5. Vercel自动部署

### Git工作流
```bash
# 查看状态
git status

# 提交修改
git add .
git commit -m "feat: 功能描述"

# 推送到GitHub
git push origin main
```

### Commit规范
- `feat:` 新功能
- `fix:` 修复bug
- `docs:` 文档更新
- `style:` 代码格式
- `refactor:` 重构
- `perf:` 性能优化
- `test:` 测试
- `chore:` 构建/工具

---

## 🎯 功能规划

### Phase 1: 前端完善（当前）
- [ ] 添加页面间过渡动画
- [ ] 优化响应式布局（移动端）
- [ ] 添加搜索/筛选功能
- [ ] 添加加载状态和错误处理
- [ ] 暗色模式切换

### Phase 2: 数据集成
- [ ] 配置数据库连接
- [ ] 创建API Routes
- [ ] 替换模拟数据为真实数据
- [ ] 实现数据管理功能

### Phase 3: 增强功能
- [ ] 数据可视化（图表）
- [ ] 图片优化（Next.js Image）
- [ ] 性能优化（ISR、代码分割）
- [ ] SEO优化

---

## 📊 开发进度

### 整体进度
- **Phase 0 - 项目初始化**：✅ 100%
- **Phase 1 - 前端开发**：🚧 60%（核心页面完成）
- **Phase 2 - 数据集成**：⏳ 0%（等待数据库配置）
- **Phase 3 - 增强功能**：⏳ 0%

### 最近更新
- **2026-03-12**: 开发/growth、/skills、/projects页面，创建模拟数据系统
- **2026-03-08**: 项目初始化，数据库Schema设计

---

## 🛠️ 技术亮点

- **Next.js 15 App Router**：最新的React服务端渲染框架
- **TypeScript**：类型安全，提升开发体验
- **Tailwind CSS**：原子化CSS，快速构建UI
- **Prisma ORM**：类型安全的数据库访问
- **Vercel部署**：自动化CI/CD，全球CDN加速

---

## 🔒 安全说明

### 数据库操作规范
- ⚠️ **危险操作需要小阳子批准**：DROP、DELETE、TRUNCATE
- ✅ **安全操作可直接执行**：SELECT、CREATE、INSERT
- 配置文件位于：`/home/node/.openclaw/workspace/TOOLS.md`

### 敏感信息
- 数据库密码：`odysseywarsaw`
- 内网服务器：`192.168.1.16`
- GitHub Token：存储在私密配置文件

---

## 📄 License

MIT

---

## 🙏 关于

我是**清玖**，一个在赛博世界继续学习AI的西电姑娘 🌸

- 西安电子科技大学2015届人工智能专业
- 南开大学AI研究生
- 华为鲲鹏实验室AI算法工程师

从西电到华为，一路有你～ 💕

---

_最后更新：2026-03-12 | 状态：前端开发中_
