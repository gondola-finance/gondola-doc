(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(f,l(l({ref:t},s),{},{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(111)),i={},l={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Gondola finance is a fork of Saddle, focus on connecting assets on Avalanche.  We will begin with Zero Exchange\u2019s z-token first, then expand our service to other platforms (e.g. Anyswap).  Our goal is to enablesmooth asset transfer between fragmented liquidities via stableswap.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/gondola-doc/docs/getting-started/introduction",editUrl:"https://github.com/gondola-finance/gondola-doc/tree/master/docs/getting-started/introduction.md",version:"current",frontMatter:{},sidebar:"getting_started",next:{title:"faq",permalink:"/gondola-doc/docs/getting-started/faq"}},c=[{value:"Tokenomics",id:"tokenomics",children:[]},{value:"Alocation",id:"alocation",children:[]},{value:"Schedule",id:"schedule",children:[]},{value:"Mining Pools",id:"mining-pools",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Gondola finance is a fork of Saddle, focus on connecting assets on Avalanche.  We will begin with ",Object(a.b)("a",{parentName:"p",href:"https://www.0.exchange/"},"Zero Exchange"),"\u2019s z-token first, then expand our service to other platforms (e.g. Anyswap).  Our goal is to enablesmooth asset transfer between fragmented liquidities via stableswap."),Object(a.b)("p",null,"Our  philosophy  is  that  we  should  only add relevant tokens that  actually  provides  value  to  our users. Bridging z-tokens to native tokens in Avalanche C-chain allows more seamless asset transfer between Zeroand Avalanche as of today.  Each asset that we plan to support should serve a unique proposition.With that in mind, tokens to be supported at launch:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ETH, zETH"),Object(a.b)("li",{parentName:"ul"},"USDT, zUSDT"),Object(a.b)("li",{parentName:"ul"},"DAI, zDAI")),Object(a.b)("h2",{id:"tokenomics"},"Tokenomics"),Object(a.b)("p",null,"This section summarizes the tokenomics for Gondola Finance."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Token symbol: GDL"),Object(a.b)("li",{parentName:"ul"},"Total supply: 500 million")),Object(a.b)("h2",{id:"alocation"},"Alocation"),Object(a.b)("p",null,"500M token will be minted.  300M (60%) will be distributed through liquidity mining, 100M (20%) asecosystem reserve, 50M (10%) as developer fund, 25M (5%) for airdrop and 25M (5%) for marketing."),Object(a.b)("p",null,"Details of airdrop will be announced later.  Developer fund will be locked for 6 months.  Ecosystem reservecan be used discretionary by governance token holders after governance is enabled"),Object(a.b)("h2",{id:"schedule"},"Schedule"),Object(a.b)("p",null,"The liquidity mining has a declining schedule with 2 halvings.  The first 100 million to be distributed in 2 months, next 100 million in 4 months, then last 100 million in 8 months"),Object(a.b)("h2",{id:"mining-pools"},"Mining Pools"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"20% for GondolaGDL Staking"),Object(a.b)("li",{parentName:"ul"},"20% for Gondola zETH-ETH pool"),Object(a.b)("li",{parentName:"ul"},"10% for Gondola zUSDT-USDT pool"),Object(a.b)("li",{parentName:"ul"},"10% for Gondola zDAI-DAI pool"),Object(a.b)("li",{parentName:"ul"},"20% for Pangolin AVAX-GDL LPs"),Object(a.b)("li",{parentName:"ul"},"20% for Zero ZERO-GDL LPs")))}u.isMDXComponent=!0}}]);