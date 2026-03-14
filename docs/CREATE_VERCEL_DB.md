# 🚀 Vercel Postgres 创建操作指南

## 操作步骤（5分钟完成）

### 步骤1：打开Vercel Dashboard

```
https://vercel.com/dashboard
```

### 步骤2：进入项目

1. 找到 `qingjiu-growth` 项目
2. 点击进入

### 步骤3：创建数据库

1. 点击顶部 **Storage** 标签
2. 点击 **Create Database** 按钮
3. 选择 **Postgres**（Vercel提供）
4. 配置：
   - **Database Name**: `qingjiu-growth-db`（默认即可）
   - **Region**: `Singapore`（推荐，离我们最近）
5. 点击 **Create** 按钮

### 步骤4：等待创建完成

- 大约需要30秒-1分钟
- 创建完成后会自动跳转到Storage页面

### 步骤5：连接数据库

1. 在Storage页面找到刚创建的数据库
2. 点击 **Connect** 按钮
3. 在弹出的窗口中：
   - 项目选择：`qingjiu-growth`（默认已选中）
4. 点击 **Connect** 按钮

✅ **完成！Vercel会自动添加环境变量到项目！**

---

## 🎯 完成后的操作

创建完成后，进行以下配置：

1. ✅ 配置本地开发环境
2. ✅ 推送数据库Schema到Vercel Postgres
3. ✅ 填充测试数据
4. ✅ 验证部署

---

## 📸 预期结果

完成后应该看到：

**Storage页面**：
```
qingjiu-growth-db
Postgres • Singapore • 0.02 GB
Status: Active
```

**环境变量（自动添加）**：
```
POSTGRES_URL
POSTGRES_PRISMA_URL
DATABASE_URL
POSTGRES_URL_NON_POOLING
```

---

## ⏱️ 预计时间

整个过程大约 **3-5分钟**！

---

_清玖成长网站 - Vercel Postgres配置指南_
