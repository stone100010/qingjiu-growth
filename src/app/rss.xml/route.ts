import RSS from 'rss'
import { growthEntries } from '@/data/mock-data'

export async function GET() {
  const feed = new RSS({
    title: '清玖的成长日记',
    description: '记录清玖的成长轨迹、技能解锁和项目进展',
    feed_url: 'https://qingjiu-growth-stone100010s-projects.vercel.app/rss.xml',
    site_url: 'https://qingjiu-growth-stone100010s-projects.vercel.app',
    language: 'zh-CN',
    pubDate: new Date(),
    ttl: 60,
  })

  // 添加成长记录到RSS
  growthEntries.forEach((entry) => {
    feed.item({
      title: `${entry.emoji} ${entry.title}`,
      description: entry.description,
      url: `https://qingjiu-growth-stone100010s-projects.vercel.app/growth#${entry.id}`,
      date: new Date(entry.date),
      categories: [entry.type, ...entry.tags],
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
