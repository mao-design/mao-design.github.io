import{_ as n,c as e,a,o as i}from"./app-D8EHJmbf.js";const l={};function p(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<blockquote><p><strong>更新</strong></p><p>因为Gitee Pages停止服务，所以本文删掉了Gitee Pages的部署步骤</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://akilar.top/posts/f752c86d/" target="_blank" rel="noopener noreferrer">*使用Github Action实现全自动部署 | Akilarの糖果屋</a></li><li><a href="https://blog.anheyu.com/posts/asdx.html#Github-Action-%E7%AE%80%E4%BB%8B" target="_blank" rel="noopener noreferrer">*使用 Github Action 自动部署 | 安知鱼 (anheyu.com)</a></li><li><a href="https://github.com/yanglbme/gitee-pages-action" target="_blank" rel="noopener noreferrer">yanglbme/gitee-pages-action: 🤖 无须人为干预，由 GitHub Action 自动部署 Gitee Pages</a></li><li><a href="https://github.com/Yikun/hub-mirror-action?tab=readme-ov-file#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">Yikun/hub-mirror-action: 一个Github Action，用于在Github和Gitee之间同步代码</a></li><li><a href="https://blog.csdn.net/ibigboy/article/details/126402267" target="_blank" rel="noopener noreferrer">GitHub部署vuepress报错The deploy step encountered an..The process /usr/bin/git failed with exit code 128</a></li><li><a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noopener noreferrer">JamesIves/github-pages-deploy-action: 🚀</a></li><li><a href="https://mrseawave.github.io/blogs/articles/2021/12/17/github-actions-cache/" target="_blank" rel="noopener noreferrer">GitHub Actions 如何使用缓存 - Sea&#39;s Blog</a></li><li><a href="https://github.com/actions/cache" target="_blank" rel="noopener noreferrer">actions/cache: Cache dependencies and build outputs in GitHub Actions</a></li></ul><p><strong>在此之前，默认你可以正常上传和下载仓库的文件</strong></p><h2 id="部署前准备" tabindex="-1"><a class="header-anchor" href="#部署前准备"><span>部署前准备</span></a></h2><ol><li><p><code>TOKEN_GITHUB</code> ：GitHub的 <code>token</code> （私人令牌的密钥只会显示一次，如果忘了，那只能重新创建了）</p><blockquote><p>打开GitHub Token的方法：点击<code>自己的Github头像 --&gt; Settings --&gt; Developer settings --&gt; Personal access tokens --&gt; Tokens(classic) --&gt; Generate new token --&gt; Generate new token(classic)</code></p><p><code>Note</code> 那里是自己Token的名字，名字可以随便取</p><p><code>Expiration</code> 是自己令牌的有效期，选择 <code>No expiration</code> 永不过期</p><p>下面的 <code>Select scopes</code> 那里选择 <code>repo</code>以及其子项，然后在选择 <code>workflow</code></p><p><strong>一切完成之后点击最下面的 <code>Generate token</code> 即可生成自己的 GitHub Token，记住GitHub Token只会显示一次，请务必要记住，否则自能重新生成</strong></p></blockquote></li><li><p><code>GIT_NAME</code> ：自己Git名称 ，在设置SSH密钥时使用的Git名称</p></li><li><p><code>GIT_EMAIL</code> ：自己的Git邮箱，在设置SSH密钥时使用的Git邮箱</p></li></ol><blockquote><p>❗❗❗</p><p><strong>以上的这些信息要部署到自己的GitHub Action仓库中，所以建议将这些信息存放在<code>txt文本</code>中，方便整理添加</strong></p><p>❗❗❗</p></blockquote><ol><li><p>创建两个GitHub仓库</p><p><strong>Action仓库</strong>：用来执行 <code>GitHub Action</code> （推荐私有，这样安全一点）</p><p><strong>Pages仓库</strong>：用来存放部署好的静态文件（设置公开，否则无法使用GitHub Pages）</p></li><li><p><strong>GitHub Action权限设置</strong>：打开刚刚创建的仓库，打开 <code>Settings --&gt; Actions --&gt; General</code> ，找到 <code>Workflow permissions</code> 选项，选择 <code>Read and write permissions</code> ，以及 <code>Allow GitHub Actions to create and approve pull requests</code> ，然后在点击下面的<code>Save</code>按钮</p></li><li><p><strong>设置秘密文件</strong>：将上面准备的 <code>TOKEN_GITHUB</code> ，<code>TOKEN_GITEE</code> ，<code>GIT_NAME</code> ，<code>GIT_EMAIL</code> ，<code>GITEE_PASSWORD</code> 添加到GitHub Action仓库中</p><blockquote><p>添加方法在<code>Settings --&gt; Secrets and variables --&gt; Actions</code> 中，找到 <code>Repository secrets</code> 选项，点击 <code>New repository secret</code> 添加</p><p>名字就为上面对应的五个名字 <code>TOKEN_GITHUB</code> ，<code>TOKEN_GITEE</code> ，<code>GIT_NAME</code> ，<code>GIT_EMAIL</code> ，<code>GITEE_PASSWORD</code></p></blockquote></li></ol><hr><h2 id="编写github-action脚本" tabindex="-1"><a class="header-anchor" href="#编写github-action脚本"><span>编写GitHub Action脚本</span></a></h2><blockquote><p>创建文件夹 <code>.github</code>，然后在 <code>.github</code> 里面创建文件夹 <code>workflows</code> ，在 <code>workflows</code> 中创建文件 <code>xxx.yml</code> ，<code>yml</code> 文件的名字可以随便取，然后编写 <code>yml</code> 文件</p><p>注意<code>yml</code>语句要对齐</p></blockquote><div class="language-yaml line-numbers-mode has-collapsed collapsed" data-ext="yaml" data-title="yaml" style="--vp-collapsed-lines:15;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>name: Deploy GitHub Pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 触发条件：在 push 到 master 分支后</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [main, master]</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任务</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  build:</span></span>
<span class="line"><span>    # 服务器环境：最新版 Ubuntu</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      # 生成hexo文件</span></span>
<span class="line"><span>      - name: 检查分支</span></span>
<span class="line"><span>        uses: actions/checkout@v2</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          ref: main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 安装 Node</span></span>
<span class="line"><span>        uses: actions/setup-node@v1</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: &quot;16.x&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 安装 Hexo</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          export TZ=&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span>          npm install hexo-cli -g</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 因为部署hexo博客需要下载hexo框架</span></span>
<span class="line"><span>        # 这一步骤就是缓存下载好的hexo框架，下次在部署博客就不需要在重新下载hexo框架了</span></span>
<span class="line"><span>      - name: 缓存 Hexo</span></span>
<span class="line"><span>        id: cache-npm</span></span>
<span class="line"><span>        uses: actions/cache@v3</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>          cache-name: cache-node-modules</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          path: node_modules</span></span>
<span class="line"><span>          key: \${{ runner.os }}-build-\${{ env.cache-name }}-\${{ hashFiles(&#39;**/package-lock.json&#39;) }}</span></span>
<span class="line"><span>          restore-keys: |</span></span>
<span class="line"><span>            \${{ runner.os }}-build-\${{ env.cache-name }}-</span></span>
<span class="line"><span>            \${{ runner.os }}-build-</span></span>
<span class="line"><span>            \${{ runner.os }}-</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 安装依赖</span></span>
<span class="line"><span>        if: \${{ steps.cache-npm.outputs.cache-hit != &#39;true&#39; }}</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          #如果你设置的有glup，则启用下面这行代码</span></span>
<span class="line"><span>          #npm install gulp-cli -g </span></span>
<span class="line"><span>          npm install --save</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 生成静态文件</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          hexo clean</span></span>
<span class="line"><span>          hexo generate</span></span>
<span class="line"><span>          #如果你设置的有glup，则启用下面这行代码</span></span>
<span class="line"><span>          #gulp</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      # 也可以使用别人写好的更新插件，比如JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span>      # 但是该插件有时候会出现上传不成功的问题</span></span>
<span class="line"><span>      # 所以通过git更新要稳定一点</span></span>
<span class="line"><span>      - name: 部署到GitHub</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          cd public</span></span>
<span class="line"><span>          git init</span></span>
<span class="line"><span>          git config --global user.name &#39;\${{ secrets.GIT_NAME }}&#39;</span></span>
<span class="line"><span>          git config --global user.email &#39;\${{ secrets.GIT_EMAIL }}&#39;</span></span>
<span class="line"><span>          git add .</span></span>
<span class="line"><span>          git commit -m &quot;\${{ github.event.head_commit.message }} Updated By Github Actions&quot;</span></span>
<span class="line"><span>          git remote add origin https://github用户名:\${{ secrets.TOKEN_GITHUB }}@github.com/github用户名/Pages仓库名.git</span></span>
<span class="line"><span>          git branch -m main</span></span>
<span class="line"><span>          git push -f origin main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><blockquote><p>❗❗❗</p><p>如果你不知道<code>gulp</code>插件的用法，建议去看看这篇博客<a href="https://akilar.top/posts/49b73b87/" target="_blank" rel="noopener noreferrer">使用gulp压缩博客静态资源 | Akilarの糖果屋</a></p><p>如果你觉得麻烦，可以不下载<code>gulp</code>插件，删掉关于 <code>gulp</code> 的语句即可</p><p>如果你的根目录中没有<code>gulp</code>的执行文件（也就是 <code>gulpfile.js</code> ），那么GitHub Action运行<code>gulp</code>时则会报错，这点须知（<strong>我已经把关于gulp的代码注释掉了，自己按需启用</strong>）</p><p>❗❗❗</p></blockquote><hr><h2 id="注意-❗❗❗" tabindex="-1"><a class="header-anchor" href="#注意-❗❗❗"><span>注意 ❗❗❗</span></a></h2><p><code>GitHub Pages</code>如果之前没有部署过，则需要自己手动部署一次，记得要在设置里面启动<code>GitHub Pages</code></p><hr><h2 id="部署github-action" tabindex="-1"><a class="header-anchor" href="#部署github-action"><span>部署GitHub Action</span></a></h2><p>❗❗❗将博客根目录下的 <code>.git</code>文件夹和 <code>themes/自己的主题文件夹</code> 下的 <code>.git</code> 文件夹删掉❗❗❗</p><p>将自己的 <code>.github</code> 文件夹放在自己博客的根目录下，在使用<code>git</code>将所有文件及文件夹上传到<strong>仓库1</strong>中，GitHub检测到 <code>.github</code> 会自动执行里面的脚本</p><p><code>Git</code>上传代码：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> commit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">github action</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># GitHub地址改为上面创建的仓库1地址</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remote</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git@github.com:xxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> branch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> push</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开<strong>仓库1</strong>，点击 <code>Actions</code> 查看 <code>GitHub Action</code> 的运行情况</p><p><code>GitHub Action</code>运行完成之后会显示一个绿色的 ✅ ，则表示运行成功</p><p>如果是红色的❌，则表示部署失败，则点击进去查看报错情况，然后根据报错情况自己百度，我上面推荐的那些博客说的也比较细致，推荐去看看，主要是第一篇和第二篇，或许能解决你的问题</p>`,25)]))}const o=n(l,[["render",p],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/53zfggsg/","title":"GitHub Action自动部署Hexo博客","lang":"zh-CN","frontmatter":{"title":"GitHub Action自动部署Hexo博客","createTime":"2024-3-2","categories":["Code"],"tags":["Hexo","GitHub Action"],"permalink":"/article/53zfggsg/","description":"更新 因为Gitee Pages停止服务，所以本文删掉了Gitee Pages的部署步骤 参考 *使用Github Action实现全自动部署 | Akilarの糖果屋 *使用 Github Action 自动部署 | 安知鱼 (anheyu.com) yanglbme/gitee-pages-action: 🤖 无须人为干预，由 GitHub Ac...","head":[["meta",{"property":"og:url","content":"https://mao-design.pages.dev/article/53zfggsg/"}],["meta",{"property":"og:site_name","content":"Mao-Design的博客"}],["meta",{"property":"og:title","content":"GitHub Action自动部署Hexo博客"}],["meta",{"property":"og:description","content":"更新 因为Gitee Pages停止服务，所以本文删掉了Gitee Pages的部署步骤 参考 *使用Github Action实现全自动部署 | Akilarの糖果屋 *使用 Github Action 自动部署 | 安知鱼 (anheyu.com) yanglbme/gitee-pages-action: 🤖 无须人为干预，由 GitHub Ac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T11:20:01.000Z"}],["meta",{"property":"article:tag","content":"Hexo"}],["meta",{"property":"article:tag","content":"GitHub Action"}],["meta",{"property":"article:modified_time","content":"2024-12-08T11:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub Action自动部署Hexo博客\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T11:20:01.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.8,"words":1441},"git":{"updatedTime":1733656801000,"contributors":[{"name":"mao-design","email":"2781406006@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/mao-design?v=4","url":"https://github.com/mao-design"}]},"autoDesc":true,"filePathRelative":"搭建个人博客/GitHub Action自动部署.md","categoryList":[{"id":"1a4517","sort":10001,"name":"搭建个人博客"}],"bulletin":false}');export{o as comp,d as data};