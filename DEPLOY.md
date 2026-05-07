# 部署指南

## Vercel 部署（推荐）

### 1. 推送到 GitHub

```bash
git push origin main
```

### 2. 导入到 Vercel

1. 访问 https://vercel.com
2. 点击 "Add New..." → "Project"
3. 导入 GitHub 仓库 `nightclose-landing`
4. 构建设置（自动检测，无需修改）：
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. 点击 "Deploy"

### 3. 配置自定义域名（可选）

部署后，Vercel会分配一个 `*.vercel.app` 域名。

如需自定义域名：
1. 进入项目 Settings → Domains
2. 添加域名（如 `nightclose.com`）
3. 按提示配置 DNS（CNAME 或 A 记录）

### 4. 访问变体

部署完成后，4个变体的访问路径：
- `https://your-domain.vercel.app/a` - Variant A: Pain-First
- `https://your-domain.vercel.app/b` - Variant B: Science-First
- `https://your-domain.vercel.app/c` - Variant C: Empathy-First
- `https://your-domain.vercel.app/d` - Variant D: Competitive

## Vercel Analytics 集成

### 1. 启用 Analytics

在 Vercel 项目设置中：
1. 进入 Analytics 标签
2. 点击 "Enable"
3. 免费版支持基本的页面访问统计

### 2. 安装包（可选，用于更详细的追踪）

```bash
npm install @vercel/analytics
```

然后在 `app/layout.tsx` 中添加：

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 环境变量（未来需要时）

在 Vercel 项目设置 → Environment Variables 中添加：

```
NEXT_PUBLIC_TALLY_FORM_ID=your_tally_form_id
NEXT_PUBLIC_CONVERTKIT_FORM_ID=your_convertkit_form_id
```

## 预览部署

Vercel 会为每个 PR 自动创建预览部署，方便测试。

## 生产检查清单

部署前确认：

- [ ] 所有变体内容已完成
- [ ] Waitlist 表单已集成（Tally.so 或 ConvertKit）
- [ ] Analytics 已启用
- [ ] SEO meta tags 已优化
- [ ] 移动端响应式已测试
- [ ] 加载性能优化（图片、字体）
- [ ] 404 页面已定制

## 性能优化建议

1. **图片优化**: 使用 Next.js `<Image>` 组件
2. **字体优化**: 已使用 `next/font/google`
3. **代码分割**: Next.js 自动处理
4. **缓存策略**: Vercel 自动配置

## 监控

- **Vercel Analytics**: 基本流量统计
- **Real User Monitoring**: 真实用户性能指标
- **按路径追踪**: 可查看每个变体（/a, /b, /c, /d）的独立数据

## 回滚

如需回滚到之前的部署：
1. 进入 Vercel 项目 → Deployments
2. 找到目标部署
3. 点击 "Promote to Production"

## 成本

Vercel 免费版包含：
- 无限次部署
- 100 GB 带宽/月
- 基础 Analytics
- 自定义域名

超出后需升级到 Pro 版（$20/月）。
