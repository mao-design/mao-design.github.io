import{_ as t,c as s,a,o as i}from"./app-D8EHJmbf.js";const n={};function o(d,e){return i(),s("div",null,e[0]||(e[0]=[a('<h2 id="移动命令" tabindex="-1"><a class="header-anchor" href="#移动命令"><span>移动命令</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mv 文件名或文件夹名 目标文件夹名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="复制命令" tabindex="-1"><a class="header-anchor" href="#复制命令"><span>复制命令</span></a></h2><p>复制普通文件</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>copy 文件 目标文件夹</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>复制文件夹</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>xcopy 文件夹名 目标文件夹名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果文件夹中有文件则在命令后面加上参数 <code>/E/H/C/I</code></p><blockquote><p><strong>/E</strong>–复制子文件夹，包括空文件夹</p><p><strong>/H</strong>-复制具有隐藏文件和系统文件属性的文件</p><p><strong>/C</strong>-即使发生错误也继续复制</p><p><strong>/I</strong>-如有疑问，假定目标位置是文件夹。比如，当目标位置不存在时</p></blockquote><p>每次用命令复制文件的时候系统都会提示是否覆盖之类的问题（ <code>yes/no</code> ），如果要默认选择 <code>yes</code> ，那么就在命令后面加上参数 <code>/y</code> ，反之同理；参数不区分大小写</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>例: xcopy 文件夹名 目标文件夹名 /E/H/C/I/Y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>cmd /k</code> ：当终端命令运行完成时不会退出终端</p><p><code>pause</code> 表示运行完程序之后不会退出终端，需要按回车退出</p>',13)]))}const r=t(n,[["render",o],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/win/4igshepl/","title":"cmd命令","lang":"zh-CN","frontmatter":{"title":"cmd命令","createTime":"2024/12/02 00:33:32","permalink":"/win/4igshepl/","description":"移动命令 复制命令 复制普通文件 复制文件夹 如果文件夹中有文件则在命令后面加上参数 /E/H/C/I /E–复制子文件夹，包括空文件夹 /H-复制具有隐藏文件和系统文件属性的文件 /C-即使发生错误也继续复制 /I-如有疑问，假定目标位置是文件夹。比如，当目标位置不存在时 每次用命令复制文件的时候系统都会提示是否覆盖之类的问题（ yes/no ），如...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/win/4igshepl/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"cmd命令"}],["meta",{"property":"og:description","content":"移动命令 复制命令 复制普通文件 复制文件夹 如果文件夹中有文件则在命令后面加上参数 /E/H/C/I /E–复制子文件夹，包括空文件夹 /H-复制具有隐藏文件和系统文件属性的文件 /C-即使发生错误也继续复制 /I-如有疑问，假定目标位置是文件夹。比如，当目标位置不存在时 每次用命令复制文件的时候系统都会提示是否覆盖之类的问题（ yes/no ），如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cmd命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.9,"words":269},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"notes/Windows命令/cmd命令.md","bulletin":false}');export{r as comp,p as data};