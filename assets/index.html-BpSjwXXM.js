import{_ as i,c as e,a as t,o as a}from"./app-D8EHJmbf.js";const n={};function l(h,s){return a(),e("div",null,s[0]||(s[0]=[t(`<blockquote><p>问题一：</p><p>提示：ssh: connect to host github.com port 22: Connection timed out fatal: Could not read from remote repository.</p><p>Please make sure you have the correct access rights</p></blockquote><p>转载：https://blog.csdn.net/qq_36157085/article/details/135763782</p><p>检查是否能连接成功</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -T</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git@github.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>提示错误</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> connect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> host</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> github.com</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 22:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Connection</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> timed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> out</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在<code>C盘/用户/用户名/.ssh</code>中创建 <code>config</code>文件（没有任何后缀）</p><p>编辑该文件，输入</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># github</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Host</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> github.com</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># github邮箱</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">User</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xxxxxx@qq.com</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HostName</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ssh.github.com</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">PreferredAuthentications</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> publickey</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 指定ssh私钥文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">IdentityFile</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/github</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 修改连接端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Port</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 443</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次检查是否能正常连接</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -T</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git@github.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>会出现以下提示，输入 <strong>yes</strong> 回车即可</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">The</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> authenticity</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> of</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> host</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[ssh.github.com]:443 ([192.30.255.123]:443)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> can</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">t be established.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">RSA key fingerprint is SHA256:xxx.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Warning: Permanently added </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[ssh.github.com]:443,[192.30.255.123]:443</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> (RSA) to the list of known hosts.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即可正常上传</p>`,14)]))}const r=i(n,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/git/8j29s718/","title":"Git日常错误","lang":"zh-CN","frontmatter":{"title":"Git日常错误","createTime":"2024/12/02 00:33:32","permalink":"/git/8j29s718/","description":"问题一： 提示：ssh: connect to host github.com port 22: Connection timed out fatal: Could not read from remote repository. Please make sure you have the correct access rights 转载：https:...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/git/8j29s718/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"Git日常错误"}],["meta",{"property":"og:description","content":"问题一： 提示：ssh: connect to host github.com port 22: Connection timed out fatal: Could not read from remote repository. Please make sure you have the correct access rights 转载：https:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git日常错误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.71,"words":214},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"notes/Git/Git日常错误.md","bulletin":false}');export{r as comp,d as data};