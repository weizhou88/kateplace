(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(1003),i=n(7795),s=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),_=n(3468);let p=new Set;function h(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(p.has(l))return;p.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let y=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:p,children:y,prefetch:b,passHref:g,replace:j,shallow:v,scroll:x,locale:k,onClick:w,onMouseEnter:N,onTouchStart:M,legacyBehavior:C=!0!==Boolean(!0)}=e,E=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,C&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==b,P=l.default.useContext(c.RouterContext),L=l.default.useContext(u.AppRouterContext),I=null!=P?P:L,T=!P,{href:S,as:R}=l.default.useMemo(()=>{if(!P){let e=m(i);return{href:e,as:p?m(p):e}}let[t,n]=a.resolveHref(P,i,!0);return{href:t,as:p?a.resolveHref(P,p):n||t}},[P,i,p]),K=l.default.useRef(S),U=l.default.useRef(R);C&&(r=l.default.Children.only(n));let D=C?r&&"object"==typeof r&&r.ref:t,[z,B,F]=d.useIntersection({rootMargin:"200px"}),H=l.default.useCallback(e=>{(U.current!==R||K.current!==S)&&(F(),U.current=R,K.current=S),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,S,F,z]);l.default.useEffect(()=>{I&&B&&O&&h(I,S,R,{locale:k})},[R,S,B,k,O,null==P?void 0:P.locale,I]);let A={ref:H,onClick(e){C||"function"!=typeof w||w(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,c,u,d){let{nodeName:f}=e.currentTarget,_="A"===f.toUpperCase();if(_&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?l.default.startTransition(p):p()}(e,I,S,R,j,v,x,k,T,O)},onMouseEnter(e){C||"function"!=typeof N||N(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(O||!T)&&h(I,S,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){C||"function"!=typeof M||M(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(O||!T)&&h(I,S,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!C||g||"a"===r.type&&!("href"in r.props)){let G=void 0!==k?k:null==P?void 0:P.locale,Y=(null==P?void 0:P.isLocaleDomain)&&f.getDomainLocale(R,G,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);A.href=Y||_.addBasePath(s.addLocale(R,G,null==P?void 0:P.defaultLocale))}return C?l.default.cloneElement(r,A):l.default.createElement("a",Object.assign({},E,A),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,d]=r.useState(!1),[f,_]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(r)}},[f,c,n,t,u]);let p=r.useCallback(()=>{d(!1)},[]);return[_,u,p]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(9008),l=n.n(o),a=n(1664),i=n.n(a),s=n(7840),c=n.n(s);function u(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Kateplace"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"favicon.ico"}),(0,r.jsx)("script",{src:"https://kit.fontawesome.com/a076d05399.js"})]}),(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("nav",{className:"nav",children:[(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)("a",{href:"./",children:(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png"})})}),(0,r.jsx)("div",{id:"mainListDiv",className:"main_list",children:(0,r.jsxs)("ul",{className:"navlinks",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"",className:"link",children:"My drawings"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"",className:"link",children:"My paintings"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"",className:"link",children:"My graphics"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"",className:"link",children:"My animations"})})]})})]}),(0,r.jsxs)("div",{className:c().jumbotron,children:[(0,r.jsxs)("div",{className:c().jumbotron_background,children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings53-512.png",className:c().blur}),(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings60-512.png",className:"".concat(c().blur," ").concat(c().top)})]}),(0,r.jsxs)("div",{className:c().intro_container,children:[(0,r.jsx)("h3",{className:c().intro_head,id:c().intro_head_big,children:"You are in Kate place!"}),(0,r.jsx)("p",{className:c().intro_detail,id:c().intro_detail_big,children:"Click the button to check out my art works!"}),(0,r.jsx)("h3",{className:c().intro_head,id:c().intro_head_small,children:"You are in Kate place!"}),(0,r.jsx)("p",{className:c().intro_detail,id:c().intro_detail_small,children:"Click the button to check out my art works."}),(0,r.jsx)("a",{href:"./drawing",className:"btn btn-primary",children:"MY DRAWINGS"})]})]})]})]})}},7840:function(e){e.exports={jumbotron:"styles_jumbotron__MUEO5",jumbotron_background:"styles_jumbotron_background__t6w70",top:"styles_top__dPe25",backgroundFadeInOut:"styles_backgroundFadeInOut__FUece",container:"styles_container__Nwnoi",blur:"styles_blur__jdn2O",intro_container:"styles_intro_container__x7Ttd",intro_head:"styles_intro_head__yQcUL",intro_detail:"styles_intro_detail___d9H3",intro_head_small:"styles_intro_head_small__nhGeV",intro_detail_small:"styles_intro_detail_small__Bc689",intro_head_big:"styles_intro_head_big__qGlFg",intro_detail_big:"styles_intro_detail_big__VnJa_"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);