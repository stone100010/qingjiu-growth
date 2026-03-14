const { Client } = require('pg');
require('dotenv').config();

async function createDatabase() {
  // 从环境变量读取数据库配置
  const client = new Client({
    host: process.env.DB_HOST || 'YOUR_HOST_IP',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'openaigc',
    password: process.env.DB_PASSWORD || 'YOUR_PASSWORD',
    database: 'postgres' // 连接到默认的postgres数据库
  });

  try {
    await client.connect();
    console.log('✅ 已连接到PostgreSQL服务器');

    // 检查数据库是否已存在
    const checkResult = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'qingjiu_growth'"
    );

    if (checkResult.rows.length > 0) {
      console.log('⚠️  数据库 qingjiu_growth 已存在');
    } else {
      // 创建数据库
      await client.query('CREATE DATABASE qingjiu_growth');
      console.log('✅ 数据库 qingjiu_growth 创建成功');
    }

  } catch (err) {
    console.error('❌ 错误:', err.message);
    process.exit(1);
  } finally {
    await client.end();
    console.log('✅ 数据库连接已关闭');
  }
}

createDatabase();
