(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{914:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return D}));var t=s(846),p=s.n(t),e=s(840),c=s.n(e),o=s(841),u=s.n(o),l=s(521),r=s.n(l),i=s(842),k=s.n(i),m=s(843),d=s.n(m),g=s(844),h=s.n(g),v=s(845),b=s.n(v),f=s(0),y=s.n(f),E=s(210),N=s(145);function w(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=h()(n);if(a){var p=h()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return d()(this,s)}}var I=function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{value:2,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:2,placeholder:"请输入数字",addonBefore:"$"}),y.a.createElement(N.NumberInput,{value:2,showStepper:!0,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:2,showCounter:!0,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:2,showCounter:!0,placeholder:"请输入数字"}))},j=function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{value:2,decimal:2,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:2,showStepper:!0,decimal:2,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:2,showCounter:!0,decimal:2,placeholder:"请输入数字"}))},C=function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{value:3,min:-2,max:6,decimal:2,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:3,showStepper:!0,min:2,max:6,decimal:2,placeholder:"请输入数字"}),y.a.createElement(N.NumberInput,{value:3,showCounter:!0,min:2,max:6,decimal:2,placeholder:"请输入数字"}))},S=function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{value:3,disabled:!0}),y.a.createElement(N.NumberInput,{value:3,disabled:!0,showStepper:!0}),y.a.createElement(N.NumberInput,{value:3,disabled:!0,showCounter:!0}))},_=function(){var n=function(n){k()(s,n);var a=w(s);function s(){var n;c()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),b()(r()(n),"state",{value:""}),b()(r()(n),"onChange",(function(a){console.log("onChange"),n.setState({value:a})})),b()(r()(n),"setToThree",(function(){n.forceUpdate()})),b()(r()(n),"onPressEnter",(function(){console.log("pressed enter")})),n}return u()(s,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{showStepper:!0,onChange:this.onChange,onPressEnter:this.onPressEnter}),y.a.createElement(N.Button,{onClick:this.setToThree},"设置值为 3"))}}]),s}(y.a.Component);return y.a.createElement(n,null)},z=function(){return y.a.createElement("div",null,y.a.createElement(N.NumberInput,{value:3,min:-2,max:6,integer:!0,placeholder:"请输入整数"}),y.a.createElement(N.NumberInput,{value:Number.MAX_SAFE_INTEGER,showStepper:!0,integer:!0,placeholder:"请输入整数"}),y.a.createElement(N.NumberInput,{value:3,integer:!0,showCounter:!0,min:2,max:6,placeholder:"请输入整数"}))};function T(n){return y.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function q(n){return y.a.createElement(T,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return y.a.createElement(T,{tag:"style",html:n.style})}var R=function(n){k()(s,n);var a=w(s);function s(){var n;c()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),b()(r()(n),"state",{showCode:!1}),b()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},p),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(T,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(f.Component),D=function(n){k()(s,n);var a=w(s);function s(){return c()(this,s),a.apply(this,arguments)}return u()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(x,{style:".zent-number-input {\n  width: 200px;\n  margin-bottom: 20px;\n}"}),y.a.createElement(q,{html:'<h2 class="anchor-heading"><a href="#numberinput-shu-zhi-shu-ru-kuang">¶</a><a href="javascript:void(0)" id="numberinput-shu-zhi-shu-ru-kuang" class="anchor-point"></a>NumberInput 数值输入框</h2>\n<p>数字输入组件，通过鼠标或键盘输入内容。\n默认值类型是 string，在整数模式下是 number，且有默认上限<code>Number.MAX_SAFE_INTEGER</code>，默认下限<code>Number.MIN_SAFE_INTEGER</code>。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>输入内容仅为数字时，使用数字输入框比普通文本输入框更方便。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(R,{title:"基础用法",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(I)),y.a.createElement(R,{title:"指定小数点精度",id:"Demo2",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(j)),y.a.createElement(R,{title:"控制可输入的数字范围",id:"Demo3",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入数字<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(C)),y.a.createElement(R,{title:"disable状态",id:"Demo4",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showCounter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(S)),y.a.createElement(R,{title:"事件处理",id:"Demo5",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EventTest</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token operator">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">setToThree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.setState({ value: 3 });</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onPressEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'pressed enter\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span><span class="token maybe-class-name">NumberInput</span>\n          showStepper\n          <span class="token comment">// value={this.state.value}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span>\n          onPressEnter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onPressEnter</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">setToThree</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>设置值为 <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EventTest</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(_)),y.a.createElement(R,{title:"整数模式",id:"Demo6",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token known-class-name class-name">Number</span><span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(q,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>是否必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入值</td>\n<td>integer === true ? number: string</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>change 事件</td>\n<td>func(value: typeof value)</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>showStepper</td>\n<td>是否开启记步器</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>showCounter</td>\n<td>是否开启加减号</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>decimal</td>\n<td>数值精度</td>\n<td>number</td>\n<td><code>0</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>min</td>\n<td>数值范围最小值</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>max</td>\n<td>数值范围最大值</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>原生 placeholder 文案</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>否</td>\n</tr>\n<tr>\n<td>integer</td>\n<td>整数模式</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(f.Component)}}]);