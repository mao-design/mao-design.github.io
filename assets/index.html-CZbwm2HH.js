import{_ as i,c as a,a as n,o as t}from"./app-D8EHJmbf.js";const e="/assets/Spring_Boot%E7%8E%AF%E5%A2%83-B-dcWDX9.png",l="/assets/Tomcat%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE-pVb-5tjl.png",p={};function h(d,s){return t(),a("div",null,s[0]||(s[0]=[n('<blockquote><p>参考：<a href="https://zzzmh.cn/post/cfe3ef62720b11eda7050242ac110003" target="_blank" rel="noopener noreferrer">IDEA Community 社区版入门教程 可永久免费 (zzzmh.cn)</a></p></blockquote><h2 id="运行spring-boot项目" tabindex="-1"><a class="header-anchor" href="#运行spring-boot项目"><span>运行Spring Boot项目</span></a></h2><h3 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装"><span>插件安装</span></a></h3><p>Spring Boot插件：</p><blockquote><p>功能上大差不差，二选一即可</p><p>Spring Boot Assistant 不能创建项目，解决方法：去<a href="https://start.spring.io/" target="_blank" rel="noopener noreferrer">Spring Boot</a>官网去下载项目包，然后在导入到自己的IDEA中</p><p>Spring Assistant 可以创建项目，但是支持的 IDEA 范围有限</p></blockquote><ul><li><code>Spring Boot Assistant</code> （IDEA 2019.3 ~ 最新版）</li><li><code>Spring Assistant</code> （IDEA 2020.3 ~ 2021.2.4版本）</li></ul><p>补全插件：</p><ul><li><code>MybatisX</code> ：用于支持<code>MybatisPlus</code>开发补全跳转和自动生成<code>service</code> <code>mapper</code> <code>xml</code>等</li></ul><hr><p>我这里就以<a href="https://start.spring.io/" target="_blank" rel="noopener noreferrer">Spring Boot</a> 官网创建的为例</p><p><img src="'+e+`" alt="图片来自zzzmh"></p><p>下载项目之后解压</p><p>导入项目：打开<code>IDEA</code>，点击 <code>File</code> --&gt; <code>Open</code> --&gt; 选择刚刚解压好的项目</p><p>到项目中的 <code>src --&gt; main --&gt; java --&gt; com.example.demo</code> 下，运行 <code>DemoApplication</code> 代码</p><h3 id="坑点" tabindex="-1"><a class="header-anchor" href="#坑点"><span>坑点</span></a></h3><p>最后发现运行没成功，只运行三行就没了</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  .</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   ____</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">          _</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            __</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> _</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> _</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> /\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ___</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">_ __ _ _(_)_ __  __ _ \\ \\ \\ \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">( ( )\\___ | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">_</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> &#39;_| | &#39;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">_</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> _</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> \\</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\ \\ \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/  ___)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">_</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">_</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">  )</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ) ) )</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  &#39;  |____| .__|_| |_|_| |_\\__, | / / / /</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> =========|_|==============|___/=/_/_/_/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> :: Spring Boot ::                (v3.2.4)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">2024-04-01T22:17:40.486+08:00  INFO 17124 --- [demo] [           main] com.example.demo.DemoApplication         : Starting DemoApplication using Java 17.0.10 with PID 17124 (C:\\Users\\Windows\\Downloads\\demo\\demo\\target\\classes started by Windows in C:\\Users\\Windows\\Downloads\\demo\\demo)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">2024-04-01T22:17:40.490+08:00  INFO 17124 --- [demo] [           main] com.example.demo.DemoApplication         : No active profile set, falling back to 1 default profile: &quot;default&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">2024-04-01T22:17:41.305+08:00  INFO 17124 --- [demo] [           main] com.example.demo.DemoApplication         : Started DemoApplication in 1.278 seconds (process running for 2.086)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>pom.xml</code> 文件，注释下面这几行代码</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">		&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">org.springframework.boot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">spring-boot-starter-tomcat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">provided</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">		&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">		&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">org.springframework.boot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">groupId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">spring-boot-starter-test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">artifactId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">			&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">scope</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">		&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dependency</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在代码界面中右键选择 <code>Maven --&gt; Reload project</code> 刷新一下</p><p>在进入到 <code>text --&gt; java --&gt; com.example.demo</code> 下，删除 <code>DemoApplicationTests</code> 文件</p><p>最后在进入到 <code>src --&gt; main --&gt; java --&gt; com.example.demo</code> 下，运行 <code>DemoApplication</code>代码就正常了</p><h2 id="运行tomcat项目" tabindex="-1"><a class="header-anchor" href="#运行tomcat项目"><span>运行Tomcat项目</span></a></h2><h3 id="插件安装-1" tabindex="-1"><a class="header-anchor" href="#插件安装-1"><span>插件安装</span></a></h3><p>Tomcat：</p><ul><li><code>Smart Tomcat</code> （IDEA 2018.3.6 ~ 最新版）</li></ul><hr><p>创建一个普通的 <code>Java</code> 项目，然后在项目中在创建一个 <code>web</code> 文件夹，结构如下</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>web-demo</span></span>
<span class="line"><span>│─── .idea</span></span>
<span class="line"><span>│─── src</span></span>
<span class="line"><span>│─── web</span></span>
<span class="line"><span>│   │─── WEB-INF</span></span>
<span class="line"><span>│   │   │─── lib</span></span>
<span class="line"><span>│   │   │   └─── jstl-1.2.jar</span></span>
<span class="line"><span>│   │   └─── web.xml</span></span>
<span class="line"><span>│   └─── index.jsp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>jstl-1.2.jar</code>下载：将下载的<a href="https://repo1.maven.org/maven2/javax/servlet/jsp/jstl/jstl/1.2/" target="_blank" rel="noopener noreferrer">jstl-1.2.jar</a>复制到<code>lib</code>文件夹中</p><p><code>web.xml</code> 内容</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;?</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">xml</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> encoding</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">UTF-8</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">web-app</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> xmlns</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://xmlns.jcp.org/xml/ns/javaee</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">         xmlns</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xsi</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://www.w3.org/2001/XMLSchema-instance</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">         xsi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">schemaLocation</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">         version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">4.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">display-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">web-demo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">display-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file-list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.jsp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.html</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">index.htm</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">welcome-file-list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">web-app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.jsp</code> 内容</p><div class="language-jsp line-numbers-mode has-collapsed collapsed" data-ext="jsp" data-title="jsp" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot; pageEncoding=&quot;UTF-8&quot; %&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;zh-CN&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;web-demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;%</span></span>
<span class="line"><span>out.print(&quot;&lt;h1&gt;web demo!&lt;/h1&gt;&quot;);</span></span>
<span class="line"><span>%&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>添加依赖，点击 <code>File --&gt; Project Structure --&gt; Libraries</code> ，点击那个 <code>+</code> ，点击<code>Java</code></p><ul><li>添加<code>web</code>下的<code>lib</code></li><li>添加<code>tomcat</code>下的<code>lib</code></li><li>点击 <code>OK</code> 即可</li></ul><p>最后点击 <code>Run --&gt; Edit Configurations</code> ，点击那个 <code>+</code> ，选择 <code>Smart Tomcat</code></p><p><img src="`+l+'" alt=""></p><p>在代码界面右键，选择<code>Run &#39;Unnamed&#39;</code> 运行</p><p>最后在点击<code>IDEA</code>终端中的网址 <code>http://localhost:8080/Tom</code> 即可访问自己的项目</p><h2 id="小问题" tabindex="-1"><a class="header-anchor" href="#小问题"><span>小问题</span></a></h2><p>社区版没有HTML/CSS/JSP的高亮和自动补全，目前似乎没有插件能够实现这个功能</p>',42)]))}const r=i(p,[["render",h],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/article/4soi92q1/","title":"IDEA_社区版_运行Spring_Boot和Tomcat","lang":"zh-CN","frontmatter":{"title":"IDEA_社区版_运行Spring_Boot和Tomcat","createTime":"2024-4-1","categories":["Code"],"tags":["IDEA","Spring Boot","Tomcat"],"permalink":"/article/4soi92q1/","description":"参考：IDEA Community 社区版入门教程 可永久免费 (zzzmh.cn) 运行Spring Boot项目 插件安装 Spring Boot插件： 功能上大差不差，二选一即可 Spring Boot Assistant 不能创建项目，解决方法：去Spring Boot官网去下载项目包，然后在导入到自己的IDEA中 Spring Assista...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/4soi92q1/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"IDEA_社区版_运行Spring_Boot和Tomcat"}],["meta",{"property":"og:description","content":"参考：IDEA Community 社区版入门教程 可永久免费 (zzzmh.cn) 运行Spring Boot项目 插件安装 Spring Boot插件： 功能上大差不差，二选一即可 Spring Boot Assistant 不能创建项目，解决方法：去Spring Boot官网去下载项目包，然后在导入到自己的IDEA中 Spring Assista..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T06:01:53.000Z"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Tomcat"}],["meta",{"property":"article:modified_time","content":"2024-12-08T06:01:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IDEA_社区版_运行Spring_Boot和Tomcat\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T06:01:53.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.69,"words":807},"git":{"updatedTime":1733637713000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"Code/IntelliJ_IDEA_社区版扩展.md","categoryList":[{"id":"ca0dba","sort":10006,"name":"Code"}],"bulletin":false}');export{r as comp,o as data};