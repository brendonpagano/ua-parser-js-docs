import{_ as s,c as n,o as a,N as l}from"./chunks/framework.921b8ac6.js";const i=JSON.parse('{"title":"Extending Regex","description":"","frontmatter":{},"headers":[],"relativePath":"intro/extending-regex.md","lastUpdated":1681218274000}'),p={name:"intro/extending-regex.md"},o=l(`<h1 id="extending-regex" tabindex="-1">Extending Regex <a class="header-anchor" href="#extending-regex" aria-label="Permalink to &quot;Extending Regex&quot;">​</a></h1><h2 id="write-your-own-extension" tabindex="-1">Write Your Own Extension <a class="header-anchor" href="#write-your-own-extension" aria-label="Permalink to &quot;Write Your Own Extension&quot;">​</a></h2><p>If you want to detect something that&#39;s not currently provided by UAParser.js (eg: bots, specific apps, etc), you can pass a list of regexes to extends internal UAParser.js regexes with your own.</p><ul><li><code>UAParser([uastring:string,] extensions:object [,headers:object])</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Example:</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myOwnListOfBrowsers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">mybrowser</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">\\w</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]+)/</span><span style="color:#F78C6C;">i</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BROWSER</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BROWSER</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VERSION</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myUA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 MyBrowser/1.3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myParser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">browser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> myOwnListOfBrowsers </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myParser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(myUA)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// {name: &quot;MyBrowser&quot;, version: &quot;1.3&quot;, major: &quot;1&quot;, type : &quot;bot&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myParser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Another example:</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myOwnListOfDevices </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">mytab</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">\\w </span><span style="color:#89DDFF;">]+)/</span><span style="color:#F78C6C;">i</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VENDOR</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MODEL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TYPE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TABLET]]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">myphone</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">i</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VENDOR</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TYPE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UAParser</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MOBILE]]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myUA2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 MyTab 14 Pro Max</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myParser2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">browser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> myOwnListOfBrowsers</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> myOwnListOfDevices</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myParser2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(myUA2)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDevice</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// {vendor: &quot;MyTab&quot;, model: &quot;14 Pro Max&quot;, type: &quot;tablet&quot;}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When custom regexes passed into <code>UAParser</code> constructor, they will be ordered <strong>before</strong> internal regexes, thus when the parser runs they will get checked first.</p></div><h2 id="use-predefined-extensions-submodule" tabindex="-1">Use Predefined Extensions Submodule <a class="header-anchor" href="#use-predefined-extensions-submodule" aria-label="Permalink to &quot;Use Predefined Extensions Submodule&quot;">​</a></h2><p>Some basic extensions (although not very complete at the moment) can also be found under <a href="/ua-parser-js/docs/api/submodules/extensions.html"><code>ua-parser-js/extensions</code>↗</a> submodule.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Usage example</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UAParser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua-parser-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Emails</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua-parser-js/extensions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ua </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Thunderbird/78.13.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> browser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(Emails)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(ua)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(browser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Thunderbird 78.13.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,10),e=[o];function r(t,c,D,y,A,F){return a(),n("div",null,e)}const u=s(p,[["render",r]]);export{i as __pageData,u as default};
