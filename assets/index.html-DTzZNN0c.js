import{_ as e,c as a,a as t,o as n}from"./app-D8EHJmbf.js";const l="/assets/Gnome%E9%9B%86%E6%88%90%E6%89%A9%E5%B1%95%E6%8F%92%E4%BB%B6-BZ1U5KAS.png",h="/assets/%E6%89%93%E5%BC%80UserThemes-D7DuttQp.png",i="/assets/Gnome-Tools-CnY1W6_j.png",p="/assets/%E6%9B%B4%E6%94%B9%E7%BB%88%E7%AB%AF%E4%B8%BB%E9%A2%98-BxAvu_lJ.png",r={};function o(d,s){return n(),a("div",null,s[0]||(s[0]=[t('<h2 id="美化-gnome桌面" tabindex="-1"><a class="header-anchor" href="#美化-gnome桌面"><span>美化（Gnome桌面）</span></a></h2><blockquote><p>参考：</p><ol><li><a href="https://zhuanlan.zhihu.com/p/63584709" target="_blank" rel="noopener noreferrer">Ubuntu美化优化指导</a></li><li><a href="https://zhuanlan.zhihu.com/p/409493039" target="_blank" rel="noopener noreferrer">Ubuntu下Gnome界面美化、超好用插件</a></li><li><a href="https://zhuanlan.zhihu.com/p/71588449" target="_blank" rel="noopener noreferrer">Ubuntu18.04(Gnome)环境，十分钟配置Mac OS主题 </a></li></ol></blockquote><p>美化虽然不是必须的，但是美化可以让系统的使用效率变得更高，比如终端美化，有些Linux终端并没有代码补全这个功能，但是美化之后就可以让终端添加代码补全这个功能，这样在终端中输入命令的效率则更会更高。</p><hr><p>在这里推荐一款主题（包含图标包）：Gnome主题包 https://www.aliyundrive.com/s/XCv3ZVwexym 提取码: sz81</p><hr><h3 id="更改主题" tabindex="-1"><a class="header-anchor" href="#更改主题"><span>更改主题</span></a></h3><p>首先打开系统自带的火狐浏览器下载浏览器插件，插件名称叫 <code>GNOME Shell integration</code>，别的浏览器也可以，只不过火狐下载插件方便一点 <img src="'+l+`" alt="GNOME Shell integration"></p><p>然后在打开终端输入以下三个命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">									  //更新软件源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gnome-tweak-tool</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">				//安装Gnome主题设置软件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> chrome-gnome-shell</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">				//安装Gnome-shell插件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的Linux安装 <code>Gnome-shell</code> 请查看 <a href="https://wiki.gnome.org/action/show/Projects/GnomeShellIntegration/Installation?action=show&amp;redirect=Projects%2FGnomeShellIntegrationForChrome%2FInstallation" target="_blank" rel="noopener noreferrer">Gnome-shell插件安装指南</a></p><p>然后在点击火狐浏览器上刚刚下载的扩展（GNOME Shell integration），开启 User Themes</p><p><img src="`+h+'" alt="User Themes"></p><p>这样你就可以更换主题了，然后进入Gnome主题网站下载自己喜欢的主题就可以了，Gnome主题网站地址：<a href="https://www.gnome-look.org/s/Gnome/browse/" target="_blank" rel="noopener noreferrer">GNOME-LOOK.ORG</a> ，在主题的下载目录里面打开终端，<strong>输入命令 <code>mkdir ~/.themes</code></strong> ,该命令的意思是在家目录里面创建一个名为 <code>.themes</code> 的文件夹。</p><p>然后在把你的主题包文件夹移动到 <code>.themes</code> 文件夹里面就可以了。</p><p>比如我的主题包放在 <code>文档</code> 这个文件夹下，那么我就在这个文件夹下打开终端，输入命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的主题包文件夹的名字/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.themes/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个命令的意思是把你的主题文件夹下的所有文件移动到家目录下的<code>.themes</code> 文件夹下</p><p>然后打开优化（Tweaks）</p><p><img src="'+i+'" alt=""></p><p>然后点击外观，应用程序那里是你软件打开时的外观样式，Shell是系统主题外观样式</p><hr><h3 id="更改图标" tabindex="-1"><a class="header-anchor" href="#更改图标"><span>更改图标</span></a></h3><p>比如我的图标包放在 <code>文档</code> 这个文件夹下，那么我就在这个文件夹下打开终端，又因为系统的图标包都是存放在 <code>/usr/share/icons</code> 这个文件夹下的，所以要把自己下载的图标包移动到 <code>icons</code> 这个文件夹下，输入命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的图标包文件夹的名字/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/share/icons</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该命令的意思是把你的图标文件夹下的所有文件都移动到根目录下的usr目录下的share目录下的icons目录下。</p><p>然后打开优化（Tweaks）</p><p><img src="'+i+`" alt=""></p><p>然后点击外观，图标那行是你的图标外观样式</p><hr><h3 id="更改终端主题" tabindex="-1"><a class="header-anchor" href="#更改终端主题"><span>更改终端主题</span></a></h3><blockquote><p>参考：<a href="https://juejin.cn/post/7089257391740420109" target="_blank" rel="noopener noreferrer">Oh-my-zsh的安装、配置与卸载</a></p></blockquote><hr><h4 id="安装终端主题" tabindex="-1"><a class="header-anchor" href="#安装终端主题"><span>安装终端主题</span></a></h4><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//安装git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//安装vim</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vim</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//安装zsh</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">						</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//安装Oh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">			</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改自己的主题，如果不知道喜欢那个主题，则可以在 <a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes" target="_blank" rel="noopener noreferrer">Oh my zsh Wiki</a> 上查找，这个网站上有许多终端主题样式的图片以及对应的名字，只需要把主题的名字写入双引号内即可，在输入 <code>wq!</code> 即可保存退出，注意上面的所有符号都是英文版的</p><p><img src="`+p+'" alt=""></p><p>然后重启终端，则会发现终端主题已经变成你输入的那个终端主题了</p><hr><h4 id="终端命令补全" tabindex="-1"><a class="header-anchor" href="#终端命令补全"><span>终端命令补全</span></a></h4><p><strong>zsh-autosuggestions</strong></p><p>第一步：切换到oh-my-zsh的plugins目录下，然后下载自动提示插件</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.oh-my-zsh/plugins/</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://gitee.com/zsh-users/zsh-autosuggestions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编辑隐藏文件~/.zshrc，找到<code>plugins=(git)</code>这一行，然后在git后面添加 <code>zsh-autosuggestions</code></p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh-autosuggestions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第三步：让~/.zshrc配置生效，执行如下命令（或者重启item2也行）</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h4 id="终端语法高亮" tabindex="-1"><a class="header-anchor" href="#终端语法高亮"><span>终端语法高亮</span></a></h4><p><strong>zsh-syntax-highlighting</strong></p><ol><li><p>克隆代码到$ZSH_CUSTOM/plugins（默认位于~/.oh-my-zsh/custom/plugins）</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://gitee.com/imirror/zsh-syntax-highlighting.git</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ZSH_CUSTOM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">oh-my-zsh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">custom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/plugins/zsh-syntax-highlighting</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>在Oh My Zsh配置启用插件</p><p>打开 <code>~/.zshrc</code> ，找到 <code>plugins</code> ，添加 <code>zsh-autosuggestions</code>。 编辑 <code>~/.zshrc</code>：<code>vim ~/.zshrc</code><code>plugins=(git zsh-autosuggestions zsh-syntax-highlighting)</code> 使配置生效：source ~/.zshrc</p></li></ol><hr><h4 id="卸载oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#卸载oh-my-zsh"><span>卸载Oh my zsh</span></a></h4><p>进入到.oh-my-zsh/tools目录</p><ul><li><code>cd .oh-my-zsh/tools</code></li><li><code>chmod +x uninstall.sh</code></li><li>./uninstall.sh</li><li><code>rm -rif .zshrc</code></li></ul><hr><h3 id="gnome扩展推荐" tabindex="-1"><a class="header-anchor" href="#gnome扩展推荐"><span>Gnome扩展推荐</span></a></h3><p>Gnome扩展下载网址：<a href="https://extensions.gnome.org/" target="_blank" rel="noopener noreferrer">GNOME Shell扩展网站</a></p><ol><li>Removable Drive Menu：U盘快速操作。插入U盘或移动硬盘，可以执行打开、弹出等操作</li><li>Workspace Indicator：多窗口管理器</li><li>TopIcons Plus：解决QQ（Wine），微信（Wine）状态栏显示不正常的问题，参考 <a href="https://blog.csdn.net/Steven_Start/article/details/117379049" target="_blank" rel="noopener noreferrer">Ubuntu20.04安装微信详细步骤，解决显示异常，无法显示输入内容问题和状态栏问题</a></li><li>system-monitor：系统资源显示</li><li>Screenshot Tool：截图工具</li><li>Clipboard Indicator：剪贴板</li></ol>',59)]))}const c=e(r,[["render",o],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/article/bjfd0ee6/","title":"美化Gnome桌面","lang":"zh-CN","frontmatter":{"title":"美化Gnome桌面","createTime":"2022-4-6","categories":["Linux"],"tags":["Gnome美化"],"permalink":"/article/bjfd0ee6/","description":"美化（Gnome桌面） 参考： Ubuntu美化优化指导 Ubuntu下Gnome界面美化、超好用插件 Ubuntu18.04(Gnome)环境，十分钟配置Mac OS主题 美化虽然不是必须的，但是美化可以让系统的使用效率变得更高，比如终端美化，有些Linux终端并没有代码补全这个功能，但是美化之后就可以让终端添加代码补全这个功能，这样在终端中输入命令...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/bjfd0ee6/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"美化Gnome桌面"}],["meta",{"property":"og:description","content":"美化（Gnome桌面） 参考： Ubuntu美化优化指导 Ubuntu下Gnome界面美化、超好用插件 Ubuntu18.04(Gnome)环境，十分钟配置Mac OS主题 美化虽然不是必须的，但是美化可以让系统的使用效率变得更高，比如终端美化，有些Linux终端并没有代码补全这个功能，但是美化之后就可以让终端添加代码补全这个功能，这样在终端中输入命令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:tag","content":"Gnome美化"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"美化Gnome桌面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.45,"words":1334},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"Ubuntu/Gnome美化.md","categoryList":[{"id":"3d9454","sort":10005,"name":"Ubuntu"}],"bulletin":false}');export{c as comp,g as data};