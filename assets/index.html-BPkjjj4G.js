import{_ as i,c as a,a as e,o as t}from"./app-CtRrOoyQ.js";const n="/assets/Ubuntu%E5%88%9B%E5%BB%BA%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F-5Jy36dXh.png",l="/assets/xfce%E5%88%9B%E5%BB%BA%E6%A1%8C%E9%9D%A2%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95-XDoJKQUS.png",p={};function h(r,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="创建桌面快捷方式" tabindex="-1"><a class="header-anchor" href="#创建桌面快捷方式"><span>创建桌面快捷方式</span></a></h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3><p>给IntelliJ Idea、Pytharm创建桌面快捷方式，打开终端，输入一下命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gnome-panel</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    //下载gnome-panel</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 桌面</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">		//进入桌面，快捷方式要创建在什么地方则进入到那个文件里面</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gnome-desktop-item-edit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --create-new</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">		//创建快捷方式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为创建的桌面快捷方式一旦启动就会连同启动终端，但用上面的方法创建的桌面快捷方式打开就不会弹出终端了</p><p><img src="`+n+`" alt=""></p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h3><p>以pycharm为例，下载解压后的Pycharm是一个命令行脚本。每次都要用命令行去打开，很烦人。我们可以将其做成桌面快捷方式（桌面图标）。</p><p><strong>1.先复制一个做参考</strong></p><p>在/usr/share/applications文件夹中，复制一个后缀名desktop的文件（如Python3.desktop）到桌面上。这是一个文本文件。</p><p><strong>2.修改文件</strong></p><p>修改文件名称，后缀名desktop不能变。</p><p>修改改文件内容。下面的Terminal我改成了false。修改后，尽管这个命令本身是一个Terminal脚本，但运行的时候不会显示出来。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Desktop Entry</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pycharm</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pycharm</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> (v2020.3</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Exec</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/ml/pycharm-community-2020.3.2/bin/pycharm.sh</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/ml/pycharm-community-2020.3.2/bin/pycharm.png</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Terminal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">false</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Application</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Categories</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Development</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">StartupNotify</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">NoDisplay</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 允许执行</strong></p><p>在文件图标上右键，选择Allow Lauching。</p><p>双击执行即可。</p><hr><h2 id="xfce创建快捷方式" tabindex="-1"><a class="header-anchor" href="#xfce创建快捷方式"><span>xfce创建快捷方式</span></a></h2><p>如果是别的桌面环境比如xfce可以参考这篇文章，虽然是已gnome桌面环境为参考，但是操作方式差不多，<a href="https://blog.csdn.net/qq_40354935/article/details/116775090" target="_blank" rel="noopener noreferrer">Ubuntu安装IntelliJ Idea及图标创建</a></p><p>然后打开创建的桌面快捷方式还是会显示终端，右键该快捷方式，选择属性，然后在点击启动器，下面有个 <code>在终端中启动</code> ，取消勾选，这样就不会弹出终端了</p><p>kde没有试过自行测试吧，估计创建的方式和 <a href="https://blog.csdn.net/qq_40354935/article/details/116775090" target="_blank" rel="noopener noreferrer">Ubuntu安装IntelliJ Idea及图标创建</a> 差不多</p><p><img src="`+l+'" alt=""></p><hr>',24)]))}const k=i(p,[["render",h],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/bzkxv91z/","title":"Ubuntu创建桌面快捷方式","lang":"zh-CN","frontmatter":{"title":"Ubuntu创建桌面快捷方式","createTime":"2022-4-10","categories":["Linux"],"tags":["Linux命令"],"permalink":"/article/bzkxv91z/","description":"创建桌面快捷方式 方法一 给IntelliJ Idea、Pytharm创建桌面快捷方式，打开终端，输入一下命令 因为创建的桌面快捷方式一旦启动就会连同启动终端，但用上面的方法创建的桌面快捷方式打开就不会弹出终端了 方法二 以pycharm为例，下载解压后的Pycharm是一个命令行脚本。每次都要用命令行去打开，很烦人。我们可以将其做成桌面快捷方式（桌面...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/bzkxv91z/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"Ubuntu创建桌面快捷方式"}],["meta",{"property":"og:description","content":"创建桌面快捷方式 方法一 给IntelliJ Idea、Pytharm创建桌面快捷方式，打开终端，输入一下命令 因为创建的桌面快捷方式一旦启动就会连同启动终端，但用上面的方法创建的桌面快捷方式打开就不会弹出终端了 方法二 以pycharm为例，下载解压后的Pycharm是一个命令行脚本。每次都要用命令行去打开，很烦人。我们可以将其做成桌面快捷方式（桌面..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:tag","content":"Linux命令"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu创建桌面快捷方式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.89,"words":567},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"Ubuntu/Ubuntu创建桌面快捷方式.md","categoryList":[{"id":"3d9454","sort":10005,"name":"Ubuntu"}],"bulletin":false}');export{k as comp,c as data};
