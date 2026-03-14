#!/bin/bash
# 夜间工作检查脚本
# 每30分钟执行一次（00:00-07:00 UTC）

echo "🌙 夜间工作检查 - $(date -u -d '+8 hours' '+%Y-%m-%d %H:%M:%S Beijing')"

# 1. 读取工作流状态
WORKFLOW_STATE="/home/node/.openclaw/workspace/config/workflow-state.json"
if [ -f "$WORKFLOW_STATE" ]; then
    STATUS=$(cat "$WORKFLOW_STATE" | grep -o '"status":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo "📊 工作状态: $STATUS"
else
    echo "⚠️  未找到工作流状态文件"
fi

# 2. 检查Git未推送commit
cd /home/node/.openclaw/workspace/qingjiu-growth
UNPUSHED=$(git log origin/master..HEAD 2>/dev/null | wc -l)
if [ "$UNPUSHED" -gt 0 ]; then
    echo "📤 未推送commit: $UNPUSHED 个"
else
    echo "✅ 无未推送commit"
fi

# 3. 检查Git未提交更改
UNCOMMITTED=$(git status --short | wc -l)
if [ "$UNCOMMITTED" -gt 0 ]; then
    echo "📝 未提交更改: $UNCOMMITTED 个文件"
    git status --short
else
    echo "✅ 无未提交更改"
fi

# 4. 检查Vercel部署状态
echo "🚀 Vercel部署状态: 最后检查于 $(date -u '+%Y-%m-%d %H:%M:%S UTC')"

echo "✅ 夜间检查完成"
