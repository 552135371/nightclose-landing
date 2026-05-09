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

- `/a` - Variant A: Pain-First（痛点直击版）✅ v2.3
- `/b` - Variant B: Science-First（科学理性版）⏳ v2.1
- `/c` - Variant C: Empathy-First（温柔共情版）⏳ v2.1
- `/d` - Variant D: Competitive（对标挑衅版）⏳ v2.1

## 当前状态

✅ **Variant A (Pain-First) v2.3** 已完成并部署
- Hero: "Your streak died. Your progress didn't."（对仗句式）
- Transition Moment: "But what if the app remembered..."（痛点→解决方案转折）
- Problem Section: 3个情感递进卡片（Day 0场景 → 心理螺旋 → 系统性归因）
- Solution Section: 按功能吸引力排序 + Before/After对比框
- FAQ: 4个新问题（区分"不push"和"不清零"）
- Social Proof: 3条真实用户证言
- Pricing: $4.99/月（明确iOS + Cloud sync）
- Final CTA: "Your progress deserves an app that keeps it."
- 部署: https://nightclose-habbit.vercel.app/a

## 部署

```bash
# 推送到GitHub后，Vercel会自动部署
git push origin main
```

## 下一步

1. **用户测试 Variant A v2.3**
   - 分享 URL 到目标社区（r/getdisciplined, r/productivity, Twitter）
   - 收集反馈和监测 Vercel Analytics
2. **重构 Variant B/C/D 至 v2.3**
   - 基于 Variant A 的成功经验
   - 统一信息架构（Hero → Problem → Transition → Solution → Social Proof → Pricing → FAQ → Final CTA）
3. ~~集成 Tally.so Waitlist~~（✅ 已完成，表单 ID: 0Q1EEA）
4. 集成 Vercel Analytics 事件追踪（已启用基础追踪，需配置自定义事件）
5. SEO优化（meta tags，Open Graph）

## 版本历史

- **v2.3** (2026-05-09): Variant A 重构（对仗句式 + Transition Moment + 情感递进 + Before/After 对比）
- **v2.1** (2026-05-06): 4个变体初始版本（围绕"Day 1"痛点）
