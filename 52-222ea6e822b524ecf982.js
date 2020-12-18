(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{980:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var s=a(840),e=a.n(s),o=a(841),c=a.n(o),p=a(521),l=a.n(p),r=a(842),u=a.n(r),i=a(843),d=a.n(i),m=a(844),k=a.n(m),h=a(845),f=a.n(h),y=a(846),g=a.n(y),v=a(0),b=a.n(v),C=a(210),w=a(145);function E(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=k()(n);if(t){var e=k()(this).constructor;a=Reflect.construct(s,arguments,e)}else a=s.apply(this,arguments);return d()(this,a)}}var z=function(){return b.a.createElement(w.CopyButton,{text:"basic usage"})},_=function(){return b.a.createElement(w.CopyButton,{text:"customize usage",onCopySuccess:"Copied！"},b.a.createElement(w.Button,{type:"primary"},"Click！"))};function N(n){return b.a.createElement(n.tag,g()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function B(n){return b.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return b.a.createElement(N,{tag:"style",html:n.style})}var D=function(n){u()(a,n);var t=E(a);function a(){var n;e()(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return n=t.call.apply(t,[this].concat(o)),f()(l()(n),"state",{showCode:!1}),f()(l()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return c()(a,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return b.a.createElement("div",{className:"zandoc-react-demo"},b.a.createElement("div",{className:"zandoc-react-demo__preview"},e),b.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.a.createElement("div",{className:"zandoc-react-demo__title"},b.a.createElement("p",null,a||"")),b.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.a.createElement("pre",{className:"zandoc-react-demo__code"},b.a.createElement(N,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),S=function(n){u()(a,n);var t=E(a);function a(){return e()(this,a),t.apply(this,arguments)}return c()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(C.a)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(x,{style:""}),b.a.createElement(B,{html:'<h2 class="anchor-heading"><a href="#copybutton">¶</a><a href="javascript:void(0)" id="copybutton" class="anchor-point"></a>CopyButton</h2>\n<p>Copy button will copy the specified text to the system clipboard when clicked.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you need to copy some text, you can use this component.</li>\n<li>This component may fail in some older version browsers since it doesn\'t rely on Flash.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.a.createElement(D,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">CopyButton</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CopyButton</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(z)),b.a.createElement(D,{title:"Customize usage",id:"Democustomize",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">CopyButton</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CopyButton</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Copied！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click！</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CopyButton</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(_)),b.a.createElement(B,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>The next need to be copied</td>\n<td><code>string</code>\n \n|\n \n<code>() => string</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>The callback function that is triggered when copy successful. If this property is string, it will show in \n<code>Notify.info</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copied\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>The callback function that is triggered when copy failed. If this property is string, it will show in \n<code>Notify.error</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copy failed\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(v.Component)}}]);