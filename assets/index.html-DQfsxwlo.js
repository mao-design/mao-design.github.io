import{_ as s,c as e,a,o as l}from"./app-D8EHJmbf.js";const i={};function p(d,n){return l(),e("div",null,n[0]||(n[0]=[a(`<blockquote><p><code>ethtool 网卡名称</code> 查看网卡是千兆还是百兆（在<code>Supported link modes</code>那里显示的有 <code>1000baseT/Full </code> 则表示该网卡是千兆）</p><p>查看网卡型号 <code>lspci -vnn | grep Network</code></p></blockquote><h3 id="启动无线网络" tabindex="-1"><a class="header-anchor" href="#启动无线网络"><span>启动无线网络</span></a></h3><blockquote><p>参考<a href="https://ubuntuqa.com/article/1570.html" target="_blank" rel="noopener noreferrer">“SIOCSIFFLAGS：由于RF-kill而无法进行操作”？</a></p><p>参考<a href="https://blog.csdn.net/gongdiwudu/article/details/125593072" target="_blank" rel="noopener noreferrer">Ubuntu系统如何连接WiFi</a></p></blockquote><ul><li><p>查看网络设备列表 <code>sudo nmcli dev</code></p><p>注意，如果列出的设备状态全部是 <code>unmanaged</code> 的，说明这些网络设备不受<code>NetworkManager</code>管理，你需要清空 <code>/etc/network/interfaces</code>下的网络设置,然后重启.</p></li><li><p>开启WIFI命令 <code>sudo nmcli r wifi on</code></p><p>如果提示 <code>SIOCSIFFLAGS: 由于 RF-kill 而无法操作</code></p><p>输入 <code>sudo rfkill list</code> 查看自己网卡的 <code>Soft blocked</code>和<code>Hard blocked</code></p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>0: ideapad_wlan: Wireless LAN</span></span>
<span class="line"><span>        Soft blocked: yes</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>1: ideapad_bluetooth: Bluetooth</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>2: hci0: Bluetooth</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>3: phy0: Wireless LAN</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有 <code>yes</code> 则并表示自己的网卡被阻止了</p><p>输入命令 <code>sudo rfkill unblock wifi; sudo rfkill unblock all</code> 解除网卡阻止</p><p>在继续输入 <code>sudo rfkill list</code> ，全为 <code>no</code> 则表示该网卡没有被阻止</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>0: ideapad_wlan: Wireless LAN</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>1: ideapad_bluetooth: Bluetooth</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>2: hci0: Bluetooth</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span>
<span class="line"><span>3: phy0: Wireless LAN</span></span>
<span class="line"><span>        Soft blocked: no</span></span>
<span class="line"><span>        Hard blocked: no</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在打开WiFi <code>sudo nmcli r wifi on</code>，此时因该不会报什么错误了，如果还遇到错误请自行百度</p></li><li><p>扫描附近的 WiFi 热点 <code>sudo nmcli dev wifi</code></p></li><li><p>连接指定的WiFi热点 <code>sudo nmcli dev wifi connect &quot;WiFi名称&quot; password &quot;WiFi密码&quot; ifname wlan0</code> （<code>wlan0</code>是无线网卡的名称）</p></li></ul><h3 id="设置无线网络" tabindex="-1"><a class="header-anchor" href="#设置无线网络"><span>设置无线网络</span></a></h3><p><strong>静态</strong>（STATIC，静态IP）</p><blockquote><p>参考 <a href="https://www.cnblogs.com/floud/p/10545924.html" target="_blank" rel="noopener noreferrer">Ubuntu-Server18.04开启无线网卡并配置静态ip</a></p></blockquote><p>查看网关 <code>route -n</code></p><p>查看网卡 <code>ip add</code> （一般有线的是<code>e</code>开头，无线的是<code>w</code>开头）</p><p>修改网络配置文件 <code>vim /etc/netplan/01-network-manager-all.yaml</code></p><div class="language-yaml line-numbers-mode has-collapsed collapsed" data-ext="yaml" data-title="yaml" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>version: 2</span></span>
<span class="line"><span>renderer: NetworkManager</span></span>
<span class="line"><span># 添加以下代码（全部添加，添加的时候注意要删除注释）</span></span>
<span class="line"><span>wifis:</span></span>
<span class="line"><span>	   # 无线网卡的名称</span></span>
<span class="line"><span>       wlp3s0:</span></span>
<span class="line"><span>       		  # IP</span></span>
<span class="line"><span>              addresses: [192.168.0.130/23]</span></span>
<span class="line"><span>              # 自动分配IP</span></span>
<span class="line"><span>              dhcp4: false</span></span>
<span class="line"><span>              # 网关</span></span>
<span class="line"><span>              gateway4: 192.168.0.1</span></span>
<span class="line"><span>              nameservers:</span></span>
<span class="line"><span>              		   # DNS_IP</span></span>
<span class="line"><span>                       addresses: [114.114.114.114,8.8.8.8]</span></span>
<span class="line"><span>              access-points:</span></span>
<span class="line"><span>                       &quot;WIFI名称&quot;:</span></span>
<span class="line"><span>                       password: &quot;WIFI密码&quot;</span></span>
<span class="line"><span>       version: 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><hr><p><strong>动态</strong>（DHCP，动态IP）</p><p>终端中输入命令 <code>nmtui</code></p><p>选择<code>Edit a connection</code></p><p>选择自己的网卡，我这里是<code>ens33</code>，所以我就选择<code>ens33</code>，然后在选择旁边的<code>Edit</code></p><p>进入到<code>Edit Connection</code>的设置里面，将选项移到<code>Automatically connect</code>，按空格</p><p>在选择最下面一行的<code>OK</code>即可</p><p>然后要确定网卡输入激活的状态，将选项移到右下角下面的<code>Back</code>即可回到最初的那个界面</p><p>然后选择<code>Activate a connection</code>回车</p><p>看到<code>ens33</code>旁边有个<code>*</code>号说明已激活，如果没有，则按回车键即可，在将选项移到<code>Back</code>回车既可回到初始界面</p><p>选择<code>Quit</code>即可退出</p><h3 id="设置有线网络" tabindex="-1"><a class="header-anchor" href="#设置有线网络"><span>设置有线网络</span></a></h3><blockquote><p>参考 [ubuntu18.04修改IP为静态IP并能够上网](https://blog.csdn.net/IT_SoftEngineer/article/details/112794427#:~:text=【Linux】ubuntu18.04修改IP为静态IP并能够上网（傻瓜式教学） 1 1. 终端下输入 2 2. 在终端下输入 3,4. 修改yaml文件，添加如下内容 5 5. 保存配置，在终端下输入 6 6. 验证是否修改为静态IP，及是否可以上网)</p></blockquote><p>设置有线静态<code>IP</code></p><p>查看网关 <code>route -n</code></p><p>查看网卡 <code>ip add</code> （一般有线的是<code>e</code>开头，无线的是<code>w</code>开头）</p><p>修改网络配置文件 <code>vim /etc/netplan/01-network-manager-all.yaml</code></p><div class="language-yaml line-numbers-mode has-collapsed collapsed" data-ext="yaml" data-title="yaml" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>version: 2</span></span>
<span class="line"><span>renderer: NetworkManager</span></span>
<span class="line"><span># 添加以下代码（全部添加，添加的时候注意要删除注释）</span></span>
<span class="line"><span>ethernets:</span></span>
<span class="line"><span>		  # 有线网卡名称</span></span>
<span class="line"><span>          enp2s0:</span></span>
<span class="line"><span>          		  # 网关</span></span>
<span class="line"><span>                  gateway4: 192.168.0.1</span></span>
<span class="line"><span>                  # IP地址</span></span>
<span class="line"><span>                  addresses: [192.168.0.130/24]</span></span>
<span class="line"><span>                  # 禁止自动获取IP</span></span>
<span class="line"><span>                  dhcp4: no</span></span>
<span class="line"><span>                  optional: true</span></span>
<span class="line"><span>                  nameservers:</span></span>
<span class="line"><span>                  		  # DNS_IP（DNS_IP可以是自己的网关IP）</span></span>
<span class="line"><span>                  		  # 这里添加了两个DNS_IP：192.168.0.1 和 114.114.114.114</span></span>
<span class="line"><span>                          addresses: [192.168.0.1,114.114.114.114]</span></span>
<span class="line"><span>                          search: []</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>保存 <code>sudo netplan apply</code></p>`,30)]))}const o=s(i,[["render",p],["__file","index.html.vue"]]),t=JSON.parse('{"path":"/linux/3qs0r06c/","title":"Ubuntu网络配置","lang":"zh-CN","frontmatter":{"title":"Ubuntu网络配置","createTime":"2024/12/02 00:33:32","permalink":"/linux/3qs0r06c/","description":"ethtool 网卡名称 查看网卡是千兆还是百兆（在Supported link modes那里显示的有 1000baseT/Full 则表示该网卡是千兆） 查看网卡型号 lspci -vnn | grep Network 启动无线网络 参考“SIOCSIFFLAGS：由于RF-kill而无法进行操作”？ 参考Ubuntu系统如何连接WiFi 查看网络...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/linux/3qs0r06c/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"Ubuntu网络配置"}],["meta",{"property":"og:description","content":"ethtool 网卡名称 查看网卡是千兆还是百兆（在Supported link modes那里显示的有 1000baseT/Full 则表示该网卡是千兆） 查看网卡型号 lspci -vnn | grep Network 启动无线网络 参考“SIOCSIFFLAGS：由于RF-kill而无法进行操作”？ 参考Ubuntu系统如何连接WiFi 查看网络..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu网络配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.17,"words":951},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"notes/Linux/Ubuntu网络配置.md","bulletin":false}');export{o as comp,t as data};