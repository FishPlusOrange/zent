(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{963:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return D}));var t=s(846),e=s.n(t),o=s(840),p=s.n(o),c=s(841),l=s.n(c),r=s(521),i=s.n(r),u=s(842),d=s.n(u),k=s(843),h=s.n(k),m=s(844),g=s.n(m),y=s(845),f=s.n(y),b=s(0),v=s.n(b),P=s(210),w=s(145);function N(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var e=g()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return h()(this,s)}}var E=function(){var n=function(n){d()(s,n);var a=N(s);function s(){var n;p()(this,s);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n=a.call.apply(a,[this].concat(e)),f()(i()(n),"state",{bodyPortalVisible:!1,purePortalVisible:!1}),f()(i()(n),"togglePurePortal",(function(){return n.setState({purePortalVisible:!n.state.purePortalVisible})})),f()(i()(n),"showBodyPortal",(function(){return n.setState({bodyPortalVisible:!0})})),f()(i()(n),"hideBodyPortal",(function(){return n.setState({bodyPortalVisible:!1})})),n}return l()(s,[{key:"render",value:function(){return v.a.createElement("div",{className:"zent-doc-portal-container"},v.a.createElement("div",{className:"zent-doc-portal-mount-node"},"Original content"),v.a.createElement(w.Portal,{selector:".zent-doc-portal-mount-node"},v.a.createElement("div",{className:"zent-doc-portal-content"},"Content that Portal inserts dynamically")),v.a.createElement("div",{className:"zent-doc-pure-portal-mount-node"},"content to be overwritten"),this.state.purePortalVisible?v.a.createElement(w.PurePortal,{selector:".zent-doc-pure-portal-mount-node"},v.a.createElement("div",{className:"zent-doc-portal-content"},"Content that PurePortal inserts dynamically, overwrites the original content inside the container")):null,v.a.createElement(w.Button,{onClick:this.togglePurePortal},"Toggle PurePortal"),v.a.createElement(w.Button,{onClick:this.showBodyPortal},"Append a Portal with curtain to body"),v.a.createElement(w.Portal,{visible:this.state.bodyPortalVisible,onClose:this.hideBodyPortal,className:"layer",style:{background:"rgba(0, 0, 0, 0.2)"},useLayerForClickAway:!0,closeOnClickOutside:!0,closeOnESC:!0,blockPageScroll:!0},v.a.createElement("div",{className:"zent-doc-portal-content",style:{position:"absolute",left:"50%",top:"50%",transform:"translate3d(-50%, -50%, 0)",border:"1px solid #d3d3d3",borderRadius:"3px",padding:"50px",background:"white"}},"The content is appended to body by default, and a curtain is set for closing")))}}]),s}(b.Component);return v.a.createElement(n,null)};function C(n){return v.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function z(n){return v.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function O(n){return v.a.createElement(C,{tag:"style",html:n.style})}var S=function(n){d()(s,n);var a=N(s);function s(){var n;p()(this,s);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n=a.call.apply(a,[this].concat(e)),f()(i()(n),"state",{showCode:!1}),f()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},e),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,s||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(C,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(b.Component),D=function(n){d()(s,n);var a=N(s);function s(){return p()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(P.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(O,{style:""}),v.a.createElement(z,{html:'<h2 class="anchor-heading"><a href="#portal">¶</a><a href="javascript:void(0)" id="portal" class="anchor-point"></a>Portal</h2>\n<p>Portal widget</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<p>Portal provides a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.a.createElement(S,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Portal</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">PurePortal</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// const WrappedPortal = Portal.withNonScrollable(Portal.withESCToClose(Portal));</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PortalBasic</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    purePortalVisible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">togglePurePortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> purePortalVisible<span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">purePortalVisible</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">showBodyPortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">hideBodyPortal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bodyPortalVisible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Original</span> content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Portal</span></span> <span class="token attr-name">selector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.zent-doc-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Content</span> that <span class="token maybe-class-name">Portal</span> inserts dynamically<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Portal</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-pure-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          content to be overwritten\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">purePortalVisible</span> <span class="token operator">?</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PurePortal</span></span> <span class="token attr-name">selector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.zent-doc-pure-portal-mount-node<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token maybe-class-name">Content</span> that <span class="token maybe-class-name">PurePortal</span> inserts dynamically<span class="token punctuation">,</span> overwrites the original content inside the container\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PurePortal</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword null nil">null</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">togglePurePortal</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Toggle</span> <span class="token maybe-class-name">PurePortal</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showBodyPortal</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Append</span> a <span class="token maybe-class-name">Portal</span> <span class="token keyword">with</span> curtain to body<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Portal</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">bodyPortalVisible</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">hideBodyPortal</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'rgba(0, 0, 0, 0.2)\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">useLayerForClickAway</span>\n          <span class="token attr-name">closeOnClickOutside</span>\n          <span class="token attr-name">closeOnESC</span>\n          <span class="token attr-name">blockPageScroll</span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-portal-content<span class="token punctuation">"</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              position<span class="token operator">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span>\n              left<span class="token operator">:</span> <span class="token string">\'50%\'</span><span class="token punctuation">,</span>\n              top<span class="token operator">:</span> <span class="token string">\'50%\'</span><span class="token punctuation">,</span>\n              transform<span class="token operator">:</span> <span class="token string">\'translate3d(-50%, -50%, 0)\'</span><span class="token punctuation">,</span>\n              border<span class="token operator">:</span> <span class="token string">\'1px solid #d3d3d3\'</span><span class="token punctuation">,</span>\n              borderRadius<span class="token operator">:</span> <span class="token string">\'3px\'</span><span class="token punctuation">,</span>\n              padding<span class="token operator">:</span> <span class="token string">\'50px\'</span><span class="token punctuation">,</span>\n              background<span class="token operator">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token maybe-class-name">The</span> content is appended to body by <span class="token keyword module">default</span><span class="token punctuation">,</span> and a curtain is <span class="token keyword">set</span> <span class="token keyword">for</span> closing\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Portal</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PortalBasic</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(E)),v.a.createElement(z,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>Only supports one child</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>selector</td>\n<td>DOM node to render child</td>\n<td>string or DOM Element</td>\n<td>No</td>\n<td><code>\'body\'</code></td>\n<td>legal CSS selector or certain DOM node</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Whether to render child</td>\n<td>bool</td>\n<td>No</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>layer</td>\n<td>The layer curtain tag name</td>\n<td>string</td>\n<td>No</td>\n<td><code>div</code></td>\n<td></td>\n</tr>\n<tr>\n<td>useLayerForClickAway</td>\n<td>Whether to use a layer for click away from \n<code>Portal</code></td>\n<td>boolean</td>\n<td>No</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td>closeOnClickOutside</td>\n<td>Close portal when click outside of portal</td>\n<td>bool</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeOnESC</td>\n<td>Close portal when pressing ESC</td>\n<td>bool</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>blockPageScroll</td>\n<td>Block page scroll when portal is open</td>\n<td>bool</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>Callback when portal closes</td>\n<td>(e: event) => void</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onLayerReady</td>\n<td>The hook when layer is ready</td>\n<td>(node: HTMLElement) => void</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The layer class name</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>The layer style</td>\n<td>object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>css</td>\n<td>(Deprecated, use style instead) Extra css style. such as, \n<code>{ \'margin-left\': \'10px\' }</code></td>\n<td>object</td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>There\'s a <code>contains</code> method on <code>Portal</code> instance which can be used to check if a DOM node is a decedent of the portal. This method works with nested portals.</p>\n<h3 class="anchor-heading"><a href="#principle">¶</a><a href="javascript:void(0)" id="principle" class="anchor-point"></a>Principle</h3>\n<ul>\n<li>The widget is mainly used to insert it\'s <code>child</code> to given DOM node, and it is removed from DOM when component is unmounted.</li>\n<li>A certain degree of repaint occurs when any props are modified, and <code>children</code>, <code>selector</code>\'s change will trigger component <code>unmount</code> to <code>mount</code>; when other props is modified, only existing DOM node attributes update.</li>\n</ul>\n<h2 class="anchor-heading"><a href="#pureportal">¶</a><a href="javascript:void(0)" id="pureportal" class="anchor-point"></a>PurePortal</h2>\n<p>Pure portal widget。</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<p>Portal behaves like React 16 Portal，which will overwrite all content inside its container.</p>\n<h3 class="anchor-heading"><a href="#pureportal-api">¶</a><a href="javascript:void(0)" id="pureportal-api" class="anchor-point"></a>PurePortal-API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>Only supports one child</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>selector</td>\n<td>DOM node to render child</td>\n<td>string or DOM Element</td>\n<td>No</td>\n<td><code>\'body\'</code></td>\n<td>legal CSS selector or certain DOM node</td>\n</tr>\n<tr>\n<td>append</td>\n<td>Should append content to the container, if false, the container will be cleaned</td>\n<td>bool</td>\n<td>No</td>\n<td>false</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(b.Component)}}]);