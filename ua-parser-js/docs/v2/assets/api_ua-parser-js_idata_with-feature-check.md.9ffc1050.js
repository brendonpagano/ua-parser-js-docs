import{_ as a,c as s,o as e,N as n}from"./chunks/framework.921b8ac6.js";const C=JSON.parse('{"title":"withFeatureCheck():IData`","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/idata/with-feature-check.md","lastUpdated":1681218274000}'),o={name:"api/ua-parser-js/idata/with-feature-check.md"},t=n(`<h1 id="withfeaturecheck-idata" tabindex="-1">withFeatureCheck():IData\` <a class="header-anchor" href="#withfeaturecheck-idata" aria-label="Permalink to &quot;withFeatureCheck():IData\`&quot;">​</a></h1><p>This method allows us to examine other features beyond <code>navigator.userAgent</code>. Currently this further improve the detection of the following:</p><ul><li>browser : <ul><li>Brave (check for <code>navigator.isBrave</code>)</li></ul></li><li>device : <ul><li>iPad (check for <code>navigator.standalone</code> &amp; <code>navigator.maxTouchPoints</code>)</li></ul></li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// suppose this code runs on iPad</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> withoutFeatureCheck </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> withFeatureCheck </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">withFeatureCheck</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(withoutFeatureCheck</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">device)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { vendor : &quot;Apple&quot;, model : &quot;Macintosh&quot;, type : undefined }</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(withFeatureCheck</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">device)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// { vendor : &quot;Apple&quot;, model : &quot;iPad&quot;, type : &quot;tablet&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5),l=[t];function p(r,c,i,d,u,h){return e(),s("div",null,l)}const y=a(o,[["render",p]]);export{C as __pageData,y as default};
