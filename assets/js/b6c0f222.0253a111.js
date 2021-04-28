(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return n?a.a.createElement(u,i(i({ref:t},b),{},{components:n})):a.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(111)),o={},i={unversionedId:"developers/contracts/helper/GenericERC20",id:"developers/contracts/helper/GenericERC20",isDocsHomePage:!1,title:"GenericERC20",description:"This contract simulates a generic ERC20 token that is mintable and burnable.",source:"@site/docs/developers/contracts/helper/GenericERC20.md",sourceDirName:"developers/contracts/helper",slug:"/developers/contracts/helper/GenericERC20",permalink:"/doc/docs/developers/contracts/helper/GenericERC20",editUrl:"https://github.com/gondola-finance/doc/docs/developers/contracts/helper/GenericERC20.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"FlashLoanBorrowerExample",permalink:"/doc/docs/developers/contracts/helper/FlashLoanBorrowerExample"},next:{title:"TestSwapReturnValues",permalink:"/doc/docs/developers/contracts/helper/test/TestSwapReturnValues"}},l=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"mint",id:"mint",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This contract simulates a generic ERC20 token that is mintable and burnable."),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n    string name_,\n    string symbol_,\n    uint8 decimals_\n  ) public\n")),Object(c.b)("p",null,"Deploy this contract with given name, symbol, and decimals"),Object(c.b)("p",null,"the caller of this constructor will become the owner of this contract"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name_")),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"name of this token")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"symbol_")),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"symbol of this token")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"decimals_")),Object(c.b)("td",{parentName:"tr",align:"left"},"uint8"),Object(c.b)("td",{parentName:"tr",align:"left"},"number of decimals this token will be based on")))),Object(c.b)("h3",{id:"mint"},"mint"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function mint(\n    address recipient,\n    uint256 amount\n  ) external\n")),Object(c.b)("p",null,"Mints given amount of tokens to recipient"),Object(c.b)("p",null,"only owner can call this mint function"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"recipient")),Object(c.b)("td",{parentName:"tr",align:"left"},"address"),Object(c.b)("td",{parentName:"tr",align:"left"},"address of account to receive the tokens")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"amount")),Object(c.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(c.b)("td",{parentName:"tr",align:"left"},"amount of tokens to mint")))))}p.isMDXComponent=!0}}]);