# NightClose Landing Pages

4个A/B测试变体的Landing Page实现。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **部署**: Vercel
- **分析**: Vercel Analytics

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 变体路径

- `/a` - Variant A: Pain-First（痛点直击版）✅
- `/b` - Variant B: Science-First（科学理性版）⏳
- `/c` - Variant C: Empathy-First（温柔共情版）⏳
- `/d` - Variant D: Competitive（对标挑衅版）⏳

## 当前状态

✅ **Variant A (Pain-First)** 已完成
- Hero Section: "Stop starting from Day 1"
- Problem Section: 3个痛点卡片
- Cycle Visual: 循环视觉化
- Solution Section: 3个核心机制
- Social Proof: 研究数据 + Testimonials
- Pricing: $4.99/月
- FAQ: 4个问题（可折叠）
- Final CTA: Email表单

## 部署

```bash
# 推送到GitHub后，Vercel会自动部署
git push origin main
```

## 下一步

1. 实现 Variant B/C/D
2. 集成 Vercel Analytics
3. 集成 Tally.so 或 ConvertKit（Waitlist表单）
4. SEO优化（meta tags）
5. 响应式测试
