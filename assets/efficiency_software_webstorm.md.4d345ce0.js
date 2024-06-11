import{_ as e,o as l,c as a,Q as i}from"./chunks/framework.8fc5d78a.js";const r="/mm-notes/assets/instasll.cdee8a16.jpg",f=JSON.parse('{"title":"WebStorm 配置","description":"码君的 WebStorm 配置，记录扩展插件、使用小技巧","frontmatter":{"description":"码君的 WebStorm 配置，记录扩展插件、使用小技巧"},"headers":[],"relativePath":"efficiency/software/webstorm.md","lastUpdated":null}'),o={name:"efficiency/software/webstorm.md"},t=i('<h1 id="webstorm-配置" tabindex="-1">WebStorm 配置 <a class="header-anchor" href="#webstorm-配置" aria-label="Permalink to &quot;WebStorm 配置&quot;">​</a></h1><h2 id="获取许可证" tabindex="-1">获取许可证 <a class="header-anchor" href="#获取许可证" aria-label="Permalink to &quot;获取许可证&quot;">​</a></h2><p><a href="https://www.jetbrains.com/shop/eform/opensource" target="_blank" rel="noreferrer">使用开源项目免费申请 JetBrains 全家桶开源许可证</a></p><h2 id="汉化" tabindex="-1">汉化 <a class="header-anchor" href="#汉化" aria-label="Permalink to &quot;汉化&quot;">​</a></h2><ul><li>方案一 <ul><li>进入 <code>文件 - 设置 - Plugins - Marketplace</code></li><li>搜索 <code>Chinese ​(Simplified)​ Language Pack EAP</code> 下载安装</li></ul></li><li>方案二 <ul><li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li><li>点击 <code>Install to IDE</code> 按钮再选择对应编辑器</li></ul></li><li>方案三 <ul><li>查看本地 <code>WebStorm</code> 版本 <ul><li>进入 <code>帮助 - 关于</code></li><li>找到 <code>Build #WS-</code> 后面的数字</li></ul></li><li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li><li>点击 <code>Versions</code> 选择对应编辑器再搜索对应版本下载（当找不到一样的版本时，可以看列表的第二栏版本范围，找包含你编辑器的版本下载就行）</li><li>通过磁盘安装刚下载的文件</li></ul></li></ul><p><img src="'+r+'" alt="磁盘安装"></p><h2 id="编辑器美化" tabindex="-1">编辑器美化 <a class="header-anchor" href="#编辑器美化" aria-label="Permalink to &quot;编辑器美化&quot;">​</a></h2><ul><li>主题（进入 <code>文件 - 设置 - Plugins - Marketplace</code> 安装如下插件） <ul><li><a href="https://plugins.jetbrains.com/plugin/10044-atom-material-icons/" target="_blank" rel="noreferrer">Atom Material Icons</a> 图标美化</li><li><a href="https://plugins.jetbrains.com/plugin/12178-atom-onedark-theme" target="_blank" rel="noreferrer">Atom OneDark Theme</a> Atom OneDark 主题</li><li><a href="https://plugins.jetbrains.com/plugin/8006-material-theme-ui" target="_blank" rel="noreferrer">Material Theme UI</a> Material Design 主题</li><li><a href="https://plugins.jetbrains.com/plugin/index?xmlId=com.markskelton.one-dark-theme" target="_blank" rel="noreferrer">One Dark theme</a> 黑色主题</li></ul></li><li>配色方案 <ul><li><a href="https://github.com/uloco/webstorm-bluloco-scheme" target="_blank" rel="noreferrer">bluloco 方案</a><ul><li><a href="https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Dark.icls" target="_blank" rel="noreferrer">Dark 下载</a></li><li><a href="https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Light.icls" target="_blank" rel="noreferrer">Light 下载</a></li></ul></li></ul></li><li>自定义背景图 <ul><li>进入 <code>文件 - 设置 - 外观和行为 - Appearance</code></li><li>点击 <code>BACKGROUND IMAGE</code></li></ul></li><li>其他 <ul><li><a href="https://plugins.jetbrains.com/plugin/9525--env-files-support" target="_blank" rel="noreferrer">.env files support</a> <code>.env</code> 文件键值字符串高亮</li></ul></li></ul><h2 id="插件市场" tabindex="-1">插件市场 <a class="header-anchor" href="#插件市场" aria-label="Permalink to &quot;插件市场&quot;">​</a></h2><ul><li><a href="https://plugins.jetbrains.com/" target="_blank" rel="noreferrer">官方</a></li></ul><h2 id="保存格式化" tabindex="-1">保存格式化 <a class="header-anchor" href="#保存格式化" aria-label="Permalink to &quot;保存格式化&quot;">​</a></h2><ol><li>进入 <code>文件 - 设置 - 工具 - File Watchers</code></li><li>点击 <code>+</code> 选择 <code>Prettier</code></li><li>将 <code>File type</code> 修改为你需要的文件类型，通用可选 <code>Any</code></li></ol><h2 id="webpack-项目识别-alias" tabindex="-1">webpack 项目识别 alias <a class="header-anchor" href="#webpack-项目识别-alias" aria-label="Permalink to &quot;webpack 项目识别 alias&quot;">​</a></h2><ol><li>进入 <code>文件 - 设置 - 框架和语言 - JavaScript - Webpack</code></li><li>将 webpack 配置文件地址修改为对应地址 <ol><li>vue-cli2: 项目地址 + <code>\\build\\webpack.base.conf.js</code></li><li>vue-cli3: 项目地址 + <code>\\node_modules\\@vue\\cli-service\\webpack.config.js</code></li></ol></li></ol>',14),c=[t];function n(s,d,u,h,p,m){return l(),a("div",null,c)}const g=e(o,[["render",n]]);export{f as __pageData,g as default};
