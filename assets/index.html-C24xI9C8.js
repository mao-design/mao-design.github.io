import{_ as i,c as a,a as n,o as e}from"./app-D8EHJmbf.js";const t={};function l(p,s){return e(),a("div",null,s[0]||(s[0]=[n(`<blockquote><p><strong>本教程基于Ubuntu</strong></p><p><strong>因为Ubuntu是Debian系的，所以使用上和别的Debian系的使用方法差不多</strong></p></blockquote><h2 id="安装open-vm-tools" tabindex="-1"><a class="header-anchor" href="#安装open-vm-tools"><span>安装open-vm-tools</span></a></h2><p>虚拟机里面安装VMware-tools推荐使用开源的open-vm-tools，官方的VMware-tools有时候会出现问题，比如系统分辨率可以根据虚拟机的窗口大小自动调节，但是不能和宿主机互相传文件，为了防止这一系列的问题，所以推荐使用open-vm-tools。</p><p>安装的命令：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//更新软件源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//进入root模式</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> su</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">			</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 下载所有open-vm-tools组件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> open-vm-</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//重启电脑</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，虚拟机就可以和宿主机互传文件了</p><hr><h2 id="安装virtualbox-tools工具" tabindex="-1"><a class="header-anchor" href="#安装virtualbox-tools工具"><span>安装VirtualBox-Tools工具</span></a></h2><p>打开终端输入命令 <code>sudo apt update</code> 这行代码是更新软件源, 然后在输入 <code>sudo apt-get install build-essential gcc make perl dkms</code> 这行代码是安装依赖，安装完成之后重启系统 。</p><p>在VirtualBox增强工具安装盘里面打开终端，输入 <code>ls</code> 命令查看当前目录下的文件，找到一个名为 <code>VBoxLinuxAdditions.run</code> 的文件，然后在终端里输入 <code>sudo ./VBoxLinuxAdditions.run</code> 这行命令，这行命令的意思是执行一个名为 <code>VBoxLinuxAdditions.run</code> 的文件，执行这个文件之后系统会自动下载所需的文件，这时候慢慢等待安装即可，安装完成之后记得重启一下。</p><hr><h2 id="ubuntu引导修复" tabindex="-1"><a class="header-anchor" href="#ubuntu引导修复"><span>Ubuntu引导修复</span></a></h2><p>准备一个Ubuntu的安装盘，然后打开自己电脑的BIOS设置，设置U盘为第一启动项，然后进入Ubuntu的安装界面，打开终端安装boot-repair，输入命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add-apt-repository</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ppa:yannubuntu/boot-repair</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> boot-repair</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">boot-repair</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后点击 <code>Recommanded repair</code> ，等几分钟后，就会出现成功修复的界面，然会退出软件，关机，拔掉U盘，再开机即可恢复到以前的双系统启动界面</p><hr><h2 id="一些基本的apt命令" tabindex="-1"><a class="header-anchor" href="#一些基本的apt命令"><span>一些基本的apt命令</span></a></h2><div class="language-bash line-numbers-mode has-collapsed collapsed" data-ext="bash" data-title="bash" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  更新源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 安装包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 删除包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> search</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 搜索软件包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> show</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  获取包的相关信息，如说明、大小、版本等</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --reinstall</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  重新安装包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  修复安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --purge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 删除包，包括配置文件等</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> build-dep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 安装相关的编译环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> upgrade</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 更新已安装的包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dist-upgrade</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 升级系统</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> depends</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 了解使用该包依赖那些包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rdepends</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 查看该包被哪些包依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  下载该包的源代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> autoclean</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 清理无用的包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 检查是否有损坏的依赖</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><hr><h2 id="更换源" tabindex="-1"><a class="header-anchor" href="#更换源"><span>更换源</span></a></h2><p>编辑 <code>vim /etc/apt/sources.list</code> （<code>sources.list</code>是源文件）</p><p>将里面的所有源注释掉（在语句前面加上 <code>#</code> 即可）</p><p>在<a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">阿里巴巴开源镜像站</a>中找到你所对应的系统，然后点进去，里面会有对应的修改教程</p><p>比如我的Ubuntu，往下滑找到对应版本所对应的源，复制粘贴到 <code>sources.list</code> 中</p><p><code>:wq!</code> 保存退出</p><p>更新源 <code>sudo apt update</code></p><p>而CentOS 7则是输入 <code>wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</code> 输入这条下载命令即可将阿里的源文件下载下来并将本机的源文件给替换掉</p><p>然后更新源 <code>sudo yum update</code></p><hr><h2 id="显示-e-sub-process-usr-bin-dpkg-returned-an-error-code-1-的解决方法" tabindex="-1"><a class="header-anchor" href="#显示-e-sub-process-usr-bin-dpkg-returned-an-error-code-1-的解决方法"><span>显示 <code>E: Sub-process /usr/bin/dpkg returned an error code (1)</code> 的解决方法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//现将info文件夹更名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info_old</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//再新建一个新的info文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">         				 </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//更新源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//修复安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//执行完上一步操作后会在新的info文件夹下生成一些文件，现将这些文件全部移到info_old文件夹下</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info_old</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">       </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//把自己新建的info文件夹删掉</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">     </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//把以前的info文件夹重新改回名字</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info_old</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/dpkg/info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果运行上面的六条命令之后还是不能安装软件</strong>，那么就要进入 <code> /var/lib/dpkg/</code> 里面查看info文件夹的名字是否修改成功，我就遇到一个文件名为info（不是文件夹，是文件），而这个文件里面什么都没有，就导致修改名字失败，然而我原来的info文件夹的名字却变成了info.bk，这时候只需要把这个info这个文件删除掉，然后在把info.bk这个文件夹的名字修改为info即可，修改文件夹的命令为 <code>sudo mv info.bk info</code> （要在 <code> /var/lib/dpkg/</code> 里面打开终端），这样不出意外的话，就可以正常安装软件了</p><hr>`,33)]))}const k=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/pbnlwgwt/","title":"安装Ubuntu的一些小问题","lang":"zh-CN","frontmatter":{"title":"安装Ubuntu的一些小问题","createTime":"2022-4-3","categories":["Linux"],"tags":["Linux命令"],"permalink":"/article/pbnlwgwt/","description":"本教程基于Ubuntu 因为Ubuntu是Debian系的，所以使用上和别的Debian系的使用方法差不多 安装open-vm-tools 虚拟机里面安装VMware-tools推荐使用开源的open-vm-tools，官方的VMware-tools有时候会出现问题，比如系统分辨率可以根据虚拟机的窗口大小自动调节，但是不能和宿主机互相传文件，为了防止这...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/pbnlwgwt/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"安装Ubuntu的一些小问题"}],["meta",{"property":"og:description","content":"本教程基于Ubuntu 因为Ubuntu是Debian系的，所以使用上和别的Debian系的使用方法差不多 安装open-vm-tools 虚拟机里面安装VMware-tools推荐使用开源的open-vm-tools，官方的VMware-tools有时候会出现问题，比如系统分辨率可以根据虚拟机的窗口大小自动调节，但是不能和宿主机互相传文件，为了防止这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:tag","content":"Linux命令"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装Ubuntu的一些小问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.01,"words":1202},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"Ubuntu/安装Ubuntu的一些小问题.md","categoryList":[{"id":"3d9454","sort":10005,"name":"Ubuntu"}],"bulletin":false}');export{k as comp,d as data};