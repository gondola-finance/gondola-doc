(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(111)),c={},a={unversionedId:"developers/contracts/helper/test/TestSwapReturnValues",id:"developers/contracts/helper/test/TestSwapReturnValues",isDocsHomePage:!1,title:"TestSwapReturnValues",description:"Functions",source:"@site/docs/developers/contracts/helper/test/TestSwapReturnValues.md",sourceDirName:"developers/contracts/helper/test",slug:"/developers/contracts/helper/test/TestSwapReturnValues",permalink:"/doc/docs/developers/contracts/helper/test/TestSwapReturnValues",editUrl:"https://github.com/gondola-finance/doc/docs/developers/contracts/helper/test/TestSwapReturnValues.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"GenericERC20",permalink:"/doc/docs/developers/contracts/helper/GenericERC20"},next:{title:"IAllowlist",permalink:"/doc/docs/developers/contracts/interfaces/IAllowlist"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"test_swap",id:"test_swap",children:[]},{value:"test_addLiquidity",id:"test_addliquidity",children:[]},{value:"test_removeLiquidity",id:"test_removeliquidity",children:[]},{value:"test_removeLiquidityImbalance",id:"test_removeliquidityimbalance",children:[]},{value:"test_removeLiquidityOneToken",id:"test_removeliquidityonetoken",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(o.b)("h3",{id:"test_swap"},"test_swap"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function test_swap(\n  ) public\n")),Object(o.b)("h3",{id:"test_addliquidity"},"test_addLiquidity"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function test_addLiquidity(\n  ) public\n")),Object(o.b)("h3",{id:"test_removeliquidity"},"test_removeLiquidity"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function test_removeLiquidity(\n  ) public\n")),Object(o.b)("h3",{id:"test_removeliquidityimbalance"},"test_removeLiquidityImbalance"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function test_removeLiquidityImbalance(\n  ) public\n")),Object(o.b)("h3",{id:"test_removeliquidityonetoken"},"test_removeLiquidityOneToken"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function test_removeLiquidityOneToken(\n  ) public\n")))}u.isMDXComponent=!0}}]);