import{_ as e,c as a,a as p,o}from"./app-D8EHJmbf.js";const n="/assets/%E5%BC%95%E5%AF%BC-CGAtAOHr.png",s="/assets/%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE-dZ-aO6yP.png",i={};function r(c,t){return o(),a("div",null,t[0]||(t[0]=[p('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>VHD是一种虚拟磁盘文件格式，我们可以将系统安装在VHD中，直接从VHD文件启动操作系统</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2><p>制作步骤：</p><p>右击此电脑 --&gt; 管理 --&gt; 磁盘管理</p><p>点击顶部的操作 --&gt; 创建VHD</p><blockquote><p>位置随便</p><p>虚拟硬盘大小要小于存放位置的总空间（比如我将虚拟磁盘放在D盘，D盘空间为200G，那么这里所分配的空间则要小于200G，推荐留一二十个G）</p><p>虚拟磁盘格式选择VHDX</p><p>虚拟磁盘类型选择动态扩展</p><p>最后确定</p></blockquote><p>双击打开虚拟硬盘，使用分区工具（DiskGenius）进行分区，分区格式按照平时安装系统的喜好分区即可</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>使用WinNTSetup安装Windows</p><blockquote><p>第一项（选择安装映像文件位置）选择自己的镜像文件</p><p>第二项（选择可引导驱动器的位置）选择自己系统的引导分区（注意：不是选择虚拟磁盘中的引导分区）</p><p>第三项（选择安装驱动器的位置）选择系统安装位置（选择自己的虚拟磁盘）</p><p>其它默认</p><p>最后安装</p></blockquote><p><img src="'+n+'" alt="引导"></p><p><img src="'+s+'" alt="系统"></p><p>安装完成之后，重启选择自己的VHD系统</p><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节"><span>细节</span></a></h2><p>如果要使用第三方引导工具引导VHD磁盘，则需要先使用Windows自己的引导工具来引导，顺利进入VHD系统之后才可以使用第三方引导工具引导，否则会提示 Windows无法完成安装。若要在此计算机上安装 Windows，请重新启动安装</p><p>VHD磁盘总容量要小于存储磁盘的总容量，否则会蓝屏提示磁盘空间不足</p>',17)]))}const m=e(i,[["render",r],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/article/xwos6cn2/","title":"VHD基本使用指南","lang":"zh-CN","frontmatter":{"title":"VHD基本使用指南","createTime":"2024-11-6","categories":["Windows"],"tags":["Windows","VHD"],"permalink":"/article/xwos6cn2/","description":"前言 VHD是一种虚拟磁盘文件格式，我们可以将系统安装在VHD中，直接从VHD文件启动操作系统 准备 制作步骤： 右击此电脑 --> 管理 --> 磁盘管理 点击顶部的操作 --> 创建VHD 位置随便 虚拟硬盘大小要小于存放位置的总空间（比如我将虚拟磁盘放在D盘，D盘空间为200G，那么这里所分配的空间则要小于200G，推荐留一二十个G） 虚拟磁盘格...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/xwos6cn2/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"VHD基本使用指南"}],["meta",{"property":"og:description","content":"前言 VHD是一种虚拟磁盘文件格式，我们可以将系统安装在VHD中，直接从VHD文件启动操作系统 准备 制作步骤： 右击此电脑 --> 管理 --> 磁盘管理 点击顶部的操作 --> 创建VHD 位置随便 虚拟硬盘大小要小于存放位置的总空间（比如我将虚拟磁盘放在D盘，D盘空间为200G，那么这里所分配的空间则要小于200G，推荐留一二十个G） 虚拟磁盘格..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"VHD"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VHD基本使用指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.61,"words":483},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"Windows/VHD系统使用指南.md","categoryList":[{"id":"aea234","sort":10003,"name":"Windows"}],"bulletin":false}');export{m as comp,l as data};