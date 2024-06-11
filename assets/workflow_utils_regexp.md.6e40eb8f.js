import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8fc5d78a.js";const u=JSON.parse('{"title":"常用正则","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/utils/regexp.md","lastUpdated":null}'),p={name:"workflow/utils/regexp.md"},o=l(`<h1 id="常用正则" tabindex="-1">常用正则 <a class="header-anchor" href="#常用正则" aria-label="Permalink to &quot;常用正则&quot;">​</a></h1><blockquote><p>收集开发中的一些常用正则</p></blockquote><p><a href="https://juejin.cn/post/6844903501034684430" target="_blank" rel="noreferrer">JS 正则表达式完整教程</a></p><h2 id="验证相关" tabindex="-1">验证相关 <a class="header-anchor" href="#验证相关" aria-label="Permalink to &quot;验证相关&quot;">​</a></h2><h3 id="是否是金额-精确到分" tabindex="-1">是否是金额（精确到分） <a class="header-anchor" href="#是否是金额-精确到分" aria-label="Permalink to &quot;是否是金额（精确到分）&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">|([</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">*))(</span><span style="color:#BABED8;">\\.</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{1,2})?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]([</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]+)?(?:</span><span style="color:#BABED8;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{1,2})?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)|(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">){1}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)|(?:</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">])?</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="是否是手机号" tabindex="-1">是否是手机号 <a class="header-anchor" href="#是否是手机号" aria-label="Permalink to &quot;是否是手机号&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">1\\d</span><span style="color:#89DDFF;">{10}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">3-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="是否是邮箱号" tabindex="-1">是否是邮箱号 <a class="header-anchor" href="#是否是邮箱号" aria-label="Permalink to &quot;是否是邮箱号&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-+.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#C3E88D;">@\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#BABED8;">\\.</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+([</span><span style="color:#C3E88D;">-.</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">+)*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 参考 MDN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email#basic_validation</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_\`{|}~-</span><span style="color:#89DDFF;">]+</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">a-zA-Z0-9-</span><span style="color:#89DDFF;">]{0,61}[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">])?(?:</span><span style="color:#BABED8;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">](?:[</span><span style="color:#C3E88D;">a-zA-Z0-9-</span><span style="color:#89DDFF;">]{0,61}[</span><span style="color:#C3E88D;">a-zA-Z0-9</span><span style="color:#89DDFF;">])?)*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="是否是-qq-号" tabindex="-1">是否是 QQ 号 <a class="header-anchor" href="#是否是-qq-号" aria-label="Permalink to &quot;是否是 QQ 号&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]{1}</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4,11}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="是否是链接地址" tabindex="-1">是否是链接地址 <a class="header-anchor" href="#是否是链接地址" aria-label="Permalink to &quot;是否是链接地址&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;">\\/\\/</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9-_</span><span style="color:#89DDFF;">]+</span><span style="color:#BABED8;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9</span><span style="color:#89DDFF;">]+[</span><span style="color:#BABED8;">\\/</span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;">\\?</span><span style="color:#C3E88D;">%\\-&amp;_~\`@[</span><span style="color:#BABED8;">\\]\\&#39;</span><span style="color:#C3E88D;">:+!</span><span style="color:#89DDFF;">]*([^</span><span style="color:#C3E88D;">&lt;&gt;</span><span style="color:#BABED8;">\\&quot;\\&quot;</span><span style="color:#89DDFF;">])*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="是否是身份证号码" tabindex="-1">是否是身份证号码 <a class="header-anchor" href="#是否是身份证号码" aria-label="Permalink to &quot;是否是身份证号码&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{5}(?:</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{2}(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">)(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|[</span><span style="color:#C3E88D;">1-2</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">31</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}[</span><span style="color:#C3E88D;">\\dXx</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="是否是-16-进制颜色" tabindex="-1">是否是 16 进制颜色 <a class="header-anchor" href="#是否是-16-进制颜色" aria-label="Permalink to &quot;是否是 16 进制颜色&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">?([</span><span style="color:#C3E88D;">a-fA-F0-9</span><span style="color:#89DDFF;">]{6}|[</span><span style="color:#C3E88D;">a-fA-F0-9</span><span style="color:#89DDFF;">]{3})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="格式相关" tabindex="-1">格式相关 <a class="header-anchor" href="#格式相关" aria-label="Permalink to &quot;格式相关&quot;">​</a></h2><h3 id="_344-格式手机号" tabindex="-1">344 格式手机号 <a class="header-anchor" href="#_344-格式手机号" aria-label="Permalink to &quot;344 格式手机号&quot;">​</a></h3><ul><li>从左到右</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/(</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}|</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}|</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>从右到左</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})+</span><span style="color:#89DDFF;font-style:italic;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">\\B</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})+</span><span style="color:#89DDFF;font-style:italic;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="隐藏手机号中间-4-位" tabindex="-1">隐藏手机号中间 4 位 <a class="header-anchor" href="#隐藏手机号中间-4-位" aria-label="Permalink to &quot;隐藏手机号中间 4 位&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 例：</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15512341234</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4})/</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1****$2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,26),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
