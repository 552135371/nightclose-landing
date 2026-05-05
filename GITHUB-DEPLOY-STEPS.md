# GitHub + Vercel 部署步骤

> 预计完成时间: 3 分钟

---

## 第一步：在 GitHub 创建仓库（1 分钟）

### 1.1 访问 GitHub
打开浏览器，访问：https://github.com/new

### 1.2 填写仓库信息
```
Repository name: nightclose-landing
Description: NightClose Landing Page - A habit app that doesn't rely on streaks
Visibility: Public（推荐，方便展示）或 Private
```

**⚠️ 重要：不要勾选以下选项**
- [ ] ❌ Add a README file
- [ ] ❌ Add .gitignore
- [ ] ❌ Choose a license

（因为我们本地已经有代码了）

### 1.3 点击 "Create repository"

---

## 第二步：推送代码到 GitHub（1 分钟）

GitHub 会显示一个页面，复制 "…or push an existing repository from the command line" 下面的命令。

**或者直接运行以下命令**（替换 YOUR_USERNAME）：

```bash
cd /Users/wanghuilin/Desktop/nightclose-landing

# 添加 GitHub 远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/nightclose-landing.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**示例**（假设你的 GitHub 用户名是 `rachel`）：
```bash
git remote add origin https://github.com/rachel/nightclose-landing.git
git branch -M main
git push -u origin main
```

输入 GitHub 用户名和密码（或 Personal Access Token）。

**⚠️ 如果遇到密码错误：**
GitHub 已不支持密码登录，需要使用 Personal Access Token：
1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 复制 token（只显示一次！）
5. 推送时用 token 代替密码

---

## 第三步：连接 Vercel（1 分钟）

### 3.1 登录 Vercel
访问：https://vercel.com/login
用 GitHub 账户登录（推荐）

### 3.2 导入 GitHub 仓库
1. 在 Vercel Dashboard，点击 "Add New..." → "Project"
2. 看到 "Import Git Repository" 区域
3. 找到 `nightclose-landing` 仓库，点击 "Import"

### 3.3 配置项目（保持默认）
```
Framework Preset: Other（自动检测）
Root Directory: ./
Build Command: (留空)
Output Directory: (留空)
```

### 3.4 点击 "Deploy"
等待 20-30 秒...

---

## 第四步：获取 URL 并测试

### 4.1 部署完成
Vercel 会显示：
```
🎉 Congratulations!
Your project is now live at:
https://nightclose-landing.vercel.app
```

### 4.2 测试清单
访问 URL，检查：
- [ ] 页面正常显示
- [ ] 所有区块加载正常
- [ ] 响应式布局正常（手机端）
- [ ] CTA 按钮可点击（虽然 Tally 表单还没配置）

---

## 后续更新流程

### 修改 Landing Page 后

```bash
cd /Users/wanghuilin/Desktop/nightclose-landing

# 修改 index.html ...

# 提交并推送
git add .
git commit -m "update: 修改文案"
git push

# Vercel 会自动检测并重新部署（30 秒内）
```

### 查看部署状态
访问 Vercel Dashboard：https://vercel.com/dashboard
可以看到：
- 每次部署历史
- 部署日志
- 访问分析

---

## 自定义域名（可选）

### 如果你有自己的域名

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 添加域名（如：`nightclose.com`）
3. 在域名注册商处添加 DNS 记录：
   ```
   Type: CNAME
   Name: @（或留空）
   Value: cname.vercel-dns.com
   TTL: 自动
   ```
4. 等待 5-30 分钟 DNS 生效
5. Vercel 会自动配置 HTTPS

---

## 常见问题

**Q: 推送时要求输入密码，但密码错误？**
A: GitHub 不再支持密码，使用 Personal Access Token（见上面步骤）。

**Q: Vercel 没有自动部署？**
A: 检查 Vercel 项目的 "Settings" → "Git"，确保已连接 GitHub 仓库。

**Q: 想修改项目名称？**
A: 在 Vercel Dashboard → Settings → General → Project Name。

**Q: 部署失败？**
A: 查看 Vercel 部署日志（Deployments → 点击失败的部署 → Logs）。

---

## 下一步

✅ 部署成功后：
1. 配置 Tally.so 表单 ID
2. 添加 Plausible Analytics
3. 生成宣发链接（带 UTM 参数）
4. 开始第一波宣发

---

**需要帮助？**
- GitHub 文档：https://docs.github.com
- Vercel 文档：https://vercel.com/docs
