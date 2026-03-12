import { growthEntries } from '@/data/mock-data'

export async function GET() {
  const baseUrl = 'https://qingjiu-growth-stone100010s-projects.vercel.app'
  
  // 手动构建RSS XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>清玖的成长日记</title>
    <description>记录清玖的成长轨迹、技能解锁和项目进展</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${growthEntries.map(entry => `
    <item>
      <title>${entry.emoji} ${entry.title}</title>
      <description><![CDATA[${entry.description}]]></description>
      <link>${baseUrl}/growth#${entry.id}</link>
      <pubDate>${new Date(entry.date).toUTCString()}</pubDate>
      <category>${entry.type}</category>
      ${entry.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
