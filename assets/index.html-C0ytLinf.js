import{_ as i,c as a,a as n,o as t}from"./app-CtRrOoyQ.js";const e={};function l(h,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="键盘输入-scanner" tabindex="-1"><a class="header-anchor" href="#键盘输入-scanner"><span>键盘输入（Scanner）</span></a></h2><p>在编程中，如果需要接收用户输入的数据，则可以使用键盘输入语句（Scanner）来获取，而接收键盘输入的数据就需要一个扫描器（对象）来接收键盘的输入数据，而那个扫描器就是 Scanner，Scanner就是一个类。</p><p>而创建这个扫描器的步骤为：</p><ol><li>首先导入该类所在包</li><li>然后创建该类的对象（也就是声明变量）</li><li>最后在调用里面的功能</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Scanner</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Demo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Scanner</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> my</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Scanner</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">in</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 接收整数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> my</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nextInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 接收字符串</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        char</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> my</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 接收字符</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        char</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> my</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">charAt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const k=i(e,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/java/ylszo9pv/","title":"5.键盘输入语句","lang":"zh-CN","frontmatter":{"title":"5.键盘输入语句","createTime":"2024/12/02 00:53:12","permalink":"/java/ylszo9pv/","description":"键盘输入（Scanner） 在编程中，如果需要接收用户输入的数据，则可以使用键盘输入语句（Scanner）来获取，而接收键盘输入的数据就需要一个扫描器（对象）来接收键盘的输入数据，而那个扫描器就是 Scanner，Scanner就是一个类。 而创建这个扫描器的步骤为： 首先导入该类所在包 然后创建该类的对象（也就是声明变量） 最后在调用里面的功能","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/java/ylszo9pv/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"5.键盘输入语句"}],["meta",{"property":"og:description","content":"键盘输入（Scanner） 在编程中，如果需要接收用户输入的数据，则可以使用键盘输入语句（Scanner）来获取，而接收键盘输入的数据就需要一个扫描器（对象）来接收键盘的输入数据，而那个扫描器就是 Scanner，Scanner就是一个类。 而创建这个扫描器的步骤为： 首先导入该类所在包 然后创建该类的对象（也就是声明变量） 最后在调用里面的功能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.键盘输入语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.64,"words":191},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"notes/Java/05.键盘输入语句（Scanner）.md","bulletin":false}');export{k as comp,r as data};
