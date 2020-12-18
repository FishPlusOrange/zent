(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{936:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return D}));var t=s(846),e=s.n(t),p=s(840),o=s.n(p),c=s(841),l=s.n(c),u=s(521),i=s.n(u),r=s(842),k=s.n(r),d=s(843),m=s.n(d),h=s(844),g=s.n(h),b=s(845),f=s.n(b),v=s(0),y=s.n(v),T=s(210),E=s(145);function w(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var e=g()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return m()(this,s)}}var z=function(){return y.a.createElement("div",null,y.a.createElement("h3",null,"横向"),y.a.createElement(E.Timeline.Legend,null,"样例"),y.a.createElement(E.Timeline,{type:"horizontal"},y.a.createElement(E.Timeline.Item,{label:"Time 1"}),y.a.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),y.a.createElement(E.Timeline.Item,{label:"Time 3"}),y.a.createElement(E.Timeline.Item,{size:0,label:"自定义长度"})),y.a.createElement("h3",null,"纵向"),y.a.createElement(E.Timeline.Legend,null,"样例"),y.a.createElement(E.Timeline,{type:"vertical"},y.a.createElement(E.Timeline.Item,{label:"Time 1"}),y.a.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),y.a.createElement(E.Timeline.Item,{label:"Time 3"}),y.a.createElement(E.Timeline.Item,{label:"不显示圆点，自定义颜色",showDot:!1,lineColor:"red"}),y.a.createElement(E.Timeline.Item,{label:"不显示标签",showLabel:!1}),y.a.createElement(E.Timeline.Item,{label:"自定义圆点颜色",dotColor:"#5197FF"}),y.a.createElement(E.Timeline.Item,{size:0,label:"自定义长度"})))},C=function(){return y.a.createElement("div",null,y.a.createElement(E.Timeline,{type:"horizontal",timeline:["hello","world",{label:"blue",dotColor:"#5197FF"},{label:"red",lineColor:"#E70000"},{label:"color",color:"#E70000"}]}))},I=function(){var n=[{label:"online",color:"#00b90e",percent:.3},{label:"unknown",percent:.2,showDot:!1,showLabel:!1},{label:"offline",color:"#E70000",percent:.5}],a=function(a){k()(t,a);var s=w(t);function t(){var n;o()(this,t);for(var a=arguments.length,e=new Array(a),p=0;p<a;p++)e[p]=arguments[p];return n=s.call.apply(s,[this].concat(e)),f()(i()(n),"state",{size:500}),f()(i()(n),"onChange",(function(a){n.setState({size:a})})),n}return l()(t,[{key:"render",value:function(){var a=this.state.size;return y.a.createElement("div",null,y.a.createElement(E.NumberInput,{value:a,onChange:this.onChange,showStepper:!0}),y.a.createElement(E.Timeline,{size:a,timeline:n}))}}]),t}(y.a.Component);return y.a.createElement(a,null)};function j(n){return y.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function q(n){return y.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function N(n){return y.a.createElement(j,{tag:"style",html:n.style})}var _=function(n){k()(s,n);var a=w(s);function s(){var n;o()(this,s);for(var t=arguments.length,e=new Array(t),p=0;p<t;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),f()(i()(n),"state",{showCode:!1}),f()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(v.Component),D=function(n){k()(s,n);var a=w(s);function s(){return o()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(T.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(N,{style:""}),y.a.createElement(q,{html:'<h2 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h2>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>横向<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>样例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义长度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>纵向<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>样例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>不显示圆点，自定义颜色<span class="token punctuation">"</span></span> <span class="token attr-name">showDot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>不显示标签<span class="token punctuation">"</span></span> <span class="token attr-name">showLabel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义圆点颜色<span class="token punctuation">"</span></span> <span class="token attr-name">dotColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#5197FF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义长度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(_,{title:"数组",id:"Demoarray",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'hello\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n    dotColor<span class="token operator">:</span> <span class="token string">\'#5197FF\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n    lineColor<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'color\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(C)),y.a.createElement(_,{title:"动态大小",id:"Demodynamic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span><span class="token punctuation">,</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'online\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#00b90e\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.3</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'unknown\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>\n    showDot<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    showLabel<span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'offline\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.5</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    size<span class="token operator">:</span> <span class="token number">500</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      size<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(I)),y.a.createElement(q,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<h3 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>水平或垂直</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>timeline</td>\n<td>时间轴数组</td>\n<td>Array</td>\n<td></td>\n<td>是</td>\n<td>是</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-item">¶</a><a href="javascript:void(0)" id="timeline-item" class="anchor-point"></a>Timeline Item</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>标签</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>tip</td>\n<td>hover 时的弹层提示</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>color</td>\n<td>颜色，优先于\n<code>lineColor</code>\n和\n<code>dotColor</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>lineColor</td>\n<td>线颜色</td>\n<td>string</td>\n<td><code>#999</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>dotColor</td>\n<td>圆点颜色</td>\n<td>string</td>\n<td><code>#00B90E</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>type</td>\n<td>水平或垂直</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>showLabel</td>\n<td>是否显示标签</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>showDot</td>\n<td>是否显示圆点</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-shu-zu">¶</a><a href="javascript:void(0)" id="timeline-shu-zu" class="anchor-point"></a>Timeline 数组</h3>\n<p>支持<code>Timeline Item</code>的全部字段</p>\n<table class="table">\n<thead>\n<tr>\n<th>额外字段</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>默认的\n<code>key</code>\n，若没有会采用数组下标为\n<code>key</code></td>\n<td>string</td>\n<td>是</td>\n</tr>\n<tr>\n<td>percent</td>\n<td>动态大小时占用的比例(0 &#x3C;= percent &#x3C;= 1)</td>\n<td>number</td>\n<td>是</td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(v.Component)}}]);