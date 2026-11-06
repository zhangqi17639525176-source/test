# 🫧 Cozy Little Room — 奶油粉手帐风个人网站

这是一个灵感源自小红书热门「Vibe Coding 可爱个人网站」的奶油粉互动个人主页，包含以下完整页面与交互彩蛋：

- 🏠 **Room 房间桌面主页**：点击房间里的拍立得、手帐本、留言板、小本子进入对应页面；还可以点击窗外切换天气、点击小台灯开启晚安暖灯模式、点击冰美式续杯、摸摸打盹小猫。
- 🌸 **About Me 关于我**：点击 `ABOUT ME (点点看)` 胶囊标签，会弹出好友视角的可爱吐槽卡片（`Cola说：...`），下方展示性格与爱好卡片。
- 📖 **Journal 手帐与作品墙**：双列展示原创手帐本、透明贴纸、便签纸与明信片，点击任意卡片可弹出详情介绍。
- 🗓️ **活动报价 & 可交互档期日历**：包含 `1.5k / 6h` 报价贴纸、适合场景、点击可翻开的 3D 粉色小本子（`* * * open me`），以及可切换月份、点击空白日期弹出预约面板的档期日历。
- ✦ **Guestbook 漂浮气泡留言板**：留言以柔和漂浮的气泡形式散布在页面上，支持实时发射新留言（自动保存在浏览器本地）与点击气泡点赞；点击右下角粉色文件夹 `my secret` 还会弹出隐藏彩蛋卡片。

---

## 🛠️ 如何替换为你自己的内容？

所有文案、标签、作品、档期和初始留言都集中在 [`app.js`](./app.js) 顶部的 `SITE_DATA` 对象中，无需改动 HTML 结构即可轻松定制：

1. **修改个人介绍与标签**：编辑 `SITE_DATA.profile` 中的 `name`、`handle`、`introLines`、`tags`、`personality` 和 `hobbies`。
2. **修改作品集 / 手帐展示**：编辑 `SITE_DATA.journal.items` 数组。如果需要使用你自己的实拍图片，只需把卡片里的 SVG 替换为 `<img src="你的图片路径" />`。
3. **修改报价与档期日历**：编辑 `SITE_DATA.booking.price` 以及 `SITE_DATA.booking.bookedDates`（例如 `"2026-07": [19, 20]` 表示 2026 年 7 月 19、20 日已约）。
4. **修改留言板与右下角秘密彩蛋**：编辑 `SITE_DATA.guestbook.secretMessage` 和 `SITE_DATA.guestbook.initialMessages`。

---

## 🌐 如何开启 GitHub Pages 免费上线？

1. 打开本仓库的 GitHub 页面，点击顶部菜单的 **Settings**（设置）。
2. 在左侧边栏找到 **Pages**。
3. 在 **Build and deployment** -> **Branch** 下拉框中选择 `main` 分支（目录保持 `/(root)`），点击 **Save**。
4. 等待约 1 分钟后，即可通过 `https://zhangqi17639525176-source.github.io/test/` 访问你的专属网站！
