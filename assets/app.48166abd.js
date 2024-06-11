import{w as se,i as Te,d as T,S as de,b as F,o as v,c as _,A as E,_ as R,s as Oe,e as N,a as ce,y as J,B as xe,x as I,F as K,p as Ne,n as ne,t as X,M as Ie,C as Me,u as le,a3 as x,K as G,a4 as Pe,a5 as $e,a6 as je,a7 as Be,a8 as De,a9 as Ve,aa as Fe,ab as Re,ac as Ze,ad as We,H as qe,h as Ue,l as Ye,ae as Ke,af as Xe,ag as Ge}from"./chunks/framework.8fc5d78a.js";import{_ as Je,t as ae}from"./chunks/theme.60af7f07.js";/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var C=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},D=function(e){return e.tagName==="IMG"},Qe=function(e){return NodeList.prototype.isPrototypeOf(e)},V=function(e){return e&&e.nodeType===1},re=function(e){var n=e.currentSrc||e.src;return n.substr(-4).toLowerCase()===".svg"},ie=function(e){try{return Array.isArray(e)?e.filter(D):Qe(e)?[].slice.call(e).filter(D):V(e)?[e].filter(D):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(D):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},et=function(e){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=e,n},tt=function(e){var n=e.getBoundingClientRect(),r=n.top,l=n.left,u=n.width,M=n.height,y=e.cloneNode(),Z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,P=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return y.removeAttribute("id"),y.style.position="absolute",y.style.top=r+Z+"px",y.style.left=l+P+"px",y.style.width=u+"px",y.style.height=M+"px",y.style.transform="",y},S=function(e,n){var r=C({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(e,r);var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),l},ot=function o(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(a){function i(){}a(i,i)},l=function(a){var i=a.target;if(i===j){b();return}h.indexOf(i)!==-1&&ee({target:i})},u=function(){if(!(H||!t.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(te-a)>d.scrollOffset&&setTimeout(b,150)}},M=function(a){var i=a.key||a.keyCode;(i==="Escape"||i==="Esc"||i===27)&&b()},y=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a;if(a.background&&(j.style.background=a.background),a.container&&a.container instanceof Object&&(i.container=C({},d.container,a.container)),a.template){var c=V(a.template)?a.template:document.querySelector(a.template);i.template=c}return d=C({},d,i),h.forEach(function(m){m.dispatchEvent(S("medium-zoom:update",{detail:{zoom:p}}))}),p},Z=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(C({},d,a))},P=function(){for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];var m=i.reduce(function(s,g){return[].concat(s,ie(g))},[]);return m.filter(function(s){return h.indexOf(s)===-1}).forEach(function(s){h.push(s),s.classList.add("medium-zoom-image")}),$.forEach(function(s){var g=s.type,z=s.listener,k=s.options;m.forEach(function(w){w.addEventListener(g,z,k)})}),p},pe=function(){for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];t.zoomed&&b();var m=i.length>0?i.reduce(function(s,g){return[].concat(s,ie(g))},[]):h;return m.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(S("medium-zoom:detach",{detail:{zoom:p}}))}),h=h.filter(function(s){return m.indexOf(s)===-1}),p},fe=function(a,i){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h.forEach(function(m){m.addEventListener("medium-zoom:"+a,i,c)}),$.push({type:"medium-zoom:"+a,listener:i,options:c}),p},ge=function(a,i){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h.forEach(function(m){m.removeEventListener("medium-zoom:"+a,i,c)}),$=$.filter(function(m){return!(m.type==="medium-zoom:"+a&&m.listener.toString()===i.toString())}),p},Q=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target,c=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},g=void 0,z=void 0;if(d.container)if(d.container instanceof Object)s=C({},s,d.container),g=s.width-s.left-s.right-d.margin*2,z=s.height-s.top-s.bottom-d.margin*2;else{var k=V(d.container)?d.container:document.querySelector(d.container),w=k.getBoundingClientRect(),W=w.width,_e=w.height,ze=w.left,be=w.top;s=C({},s,{width:W,height:_e,left:ze,top:be})}g=g||s.width-d.margin*2,z=z||s.height-d.margin*2;var O=t.zoomedHd||t.original,Ee=re(O)?g:O.naturalWidth||g,we=re(O)?z:O.naturalHeight||z,B=O.getBoundingClientRect(),Le=B.top,Ce=B.left,q=B.width,U=B.height,He=Math.min(Math.max(q,Ee),g)/q,ke=Math.min(Math.max(U,we),z)/U,Y=Math.min(He,ke),Se=(-Ce+(g-q)/2+d.margin+s.left)/Y,Ae=(-Le+(z-U)/2+d.margin+s.top)/Y,oe="scale("+Y+") translate3d("+Se+"px, "+Ae+"px, 0)";t.zoomed.style.transform=oe,t.zoomedHd&&(t.zoomedHd.style.transform=oe)};return new r(function(m){if(i&&h.indexOf(i)===-1){m(p);return}var s=function W(){H=!1,t.zoomed.removeEventListener("transitionend",W),t.original.dispatchEvent(S("medium-zoom:opened",{detail:{zoom:p}})),m(p)};if(t.zoomed){m(p);return}if(i)t.original=i;else if(h.length>0){var g=h;t.original=g[0]}else{m(p);return}if(t.original.dispatchEvent(S("medium-zoom:open",{detail:{zoom:p}})),te=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,t.zoomed=tt(t.original),document.body.appendChild(j),d.template){var z=V(d.template)?d.template:document.querySelector(d.template);t.template=document.createElement("div"),t.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(t.template)}if(t.original.parentElement&&t.original.parentElement.tagName==="PICTURE"&&t.original.currentSrc&&(t.zoomed.src=t.original.currentSrc),document.body.appendChild(t.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),t.original.classList.add("medium-zoom-image--hidden"),t.zoomed.classList.add("medium-zoom-image--opened"),t.zoomed.addEventListener("click",b),t.zoomed.addEventListener("transitionend",s),t.original.getAttribute("data-zoom-src")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("srcset"),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading"),t.zoomedHd.src=t.zoomed.getAttribute("data-zoom-src"),t.zoomedHd.onerror=function(){clearInterval(k),console.warn("Unable to reach the zoom image target "+t.zoomedHd.src),t.zoomedHd=null,c()};var k=setInterval(function(){t.zoomedHd.complete&&(clearInterval(k),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",b),document.body.appendChild(t.zoomedHd),c())},10)}else if(t.original.hasAttribute("srcset")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading");var w=t.zoomedHd.addEventListener("load",function(){t.zoomedHd.removeEventListener("load",w),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",b),document.body.appendChild(t.zoomedHd),c()})}else c()})},b=function(){return new r(function(a){if(H||!t.original){a(p);return}var i=function c(){t.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(t.zoomed),t.zoomedHd&&document.body.removeChild(t.zoomedHd),document.body.removeChild(j),t.zoomed.classList.remove("medium-zoom-image--opened"),t.template&&document.body.removeChild(t.template),H=!1,t.zoomed.removeEventListener("transitionend",c),t.original.dispatchEvent(S("medium-zoom:closed",{detail:{zoom:p}})),t.original=null,t.zoomed=null,t.zoomedHd=null,t.template=null,a(p)};H=!0,document.body.classList.remove("medium-zoom--opened"),t.zoomed.style.transform="",t.zoomedHd&&(t.zoomedHd.style.transform=""),t.template&&(t.template.style.transition="opacity 150ms",t.template.style.opacity=0),t.original.dispatchEvent(S("medium-zoom:close",{detail:{zoom:p}})),t.zoomed.addEventListener("transitionend",i)})},ee=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target;return t.original?b():Q({target:i})},ve=function(){return d},he=function(){return h},ye=function(){return t.original},h=[],$=[],H=!1,te=0,d=n,t={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?d=e:(e||typeof e=="string")&&P(e),d=C({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var j=et(d.background);document.addEventListener("click",l),document.addEventListener("keyup",M),document.addEventListener("scroll",u),window.addEventListener("resize",b);var p={open:Q,close:b,toggle:ee,update:y,clone:Z,attach:P,detach:pe,on:fe,off:ge,getOptions:ve,getImages:he,getZoomedImage:ye};return p};function nt(o,e){e===void 0&&(e={});var n=e.insertAt;if(!(!o||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o))}}var at=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";nt(at);const rt=ot,it=":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)",st=Symbol("medium-zoom"),dt=(o,e)=>{const n=rt();n.refresh=(r=it)=>{n.detach(),n.attach(r)},o.provide(st,n),se(()=>e.route.path,()=>Te(()=>n.refresh()))},ct={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=码君1996.notes",onerror:"this.style.display='none'"},lt=T({__name:"MNavVisitor",setup(o){const e=de("DEV");return(n,r)=>F(e)?E("",!0):(v(),_("img",ct))}});const mt=R(lt,[["__scopeId","data-v-7c9dde51"]]),ut={class:"copyright"},pt=["src"],ft=T({__name:"MDocFooter",setup(o){const e=de("DEV"),n=Oe(),r=N(()=>n.path.replace("/mm-notes",""));return(l,u)=>(v(),_("div",ut,[F(e)?E("",!0):(v(),_("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=码君1996.notes.${r.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,pt)),ce(" Copyright © 2019-present 码君 ")]))}});const gt=R(ft,[["__scopeId","data-v-c23f6b26"]]),vt=T({__name:"MAsideSponsors",setup(o){const e=[{items:[{img:"https://cdn.jsdelivr.net/gh/码君1996/picture/sponsor/wechat-color.jpg"}]},{items:[{img:"https://cdn.jsdelivr.net/gh/码君1996/picture/sponsor/alipay-color.jpg"}]}];return(n,r)=>(v(),J(F(Je),{data:e}))}});const ht=/[\u0000-\u001f]/g,yt=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,_t=/[\u0300-\u036F]/g,me=o=>o.normalize("NFKD").replace(_t,"").replace(ht,"").replace(yt,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),zt=["href"],bt={class:"box-header"},Et=["innerHTML"],wt={key:1,class:"icon"},Lt=["src","alt"],Ct=["id"],Ht={key:1,class:"desc"},kt=T({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(o){const e=o,n=N(()=>e.title?me(e.title):""),r=N(()=>typeof e.icon=="object"?e.icon.svg:""),l=N(()=>typeof e.badge=="string"?{text:e.badge,type:"info"}:e.badge);return(u,M)=>{const y=xe("Badge");return u.link?(v(),_("a",{key:0,class:"m-nav-link",href:u.link,target:"_blank",rel:"noreferrer"},[I("article",{class:ne(["box",{"has-badge":l.value}])},[I("div",bt,[u.noIcon?E("",!0):(v(),_(K,{key:0},[r.value?(v(),_("div",{key:0,class:"icon",innerHTML:r.value},null,8,Et)):u.icon&&typeof u.icon=="string"?(v(),_("div",wt,[I("img",{src:F(Ne)(u.icon),alt:u.title,onerror:"this.parentElement.style.display='none'"},null,8,Lt)])):E("",!0)],64)),u.title?(v(),_("h5",{key:1,id:n.value,class:ne(["title",{"no-icon":u.noIcon}])},X(u.title),11,Ct)):E("",!0)]),l.value?(v(),J(y,{key:0,class:"badge",type:l.value.type,text:l.value.text},null,8,["type","text"])):E("",!0),u.desc?(v(),_("p",Ht,X(u.desc),1)):E("",!0)],2)],8,zt)):E("",!0)}}});const St=R(kt,[["__scopeId","data-v-f6a1464b"]]),At=["id"],Tt=["href"],Ot={class:"m-nav-links"},xt=T({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(o){const e=o,n=N(()=>me(e.title));return(r,l)=>(v(),_(K,null,[r.title?(v(),_("h2",{key:0,id:n.value,tabindex:"-1"},[ce(X(r.title)+" ",1),I("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,Tt)],8,At)):E("",!0),I("div",Ot,[(v(!0),_(K,null,Ie(r.items,u=>(v(),J(St,Me({noIcon:r.noIcon,ref_for:!0},u),null,16,["noIcon"]))),256))])],64))}});const Nt=R(xt,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(o){for(let e of o)e.unregister()}),"caches"in window&&caches.keys().then(function(o){return Promise.all(o.map(function(e){return caches.delete(e)}))}));let L;const It={extends:ae,Layout:()=>{var n;const o={},{frontmatter:e}=le();return(n=e.value)!=null&&n.layoutClass&&(o.class=e.value.layoutClass),x(ae.Layout,o,{"nav-bar-title-after":()=>x(mt),"doc-after":()=>x(gt),"aside-bottom":()=>x(vt)})},enhanceApp({app:o,router:e}){dt(o,e),o.component("MNavLinks",Nt),o.provide("DEV",!1),typeof window<"u"&&se(()=>e.route.data.relativePath,()=>Mt(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const o=navigator.userAgent.toLowerCase();o.includes("chrome")?document.documentElement.classList.add("browser-chrome"):o.includes("firefox")?document.documentElement.classList.add("browser-firefox"):o.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Mt(o){if(o){if(L)return;L=document.createElement("style"),L.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(L)}else{if(!L)return;L.remove(),L=void 0}}function ue(o){if(o.extends){const e=ue(o.extends);return{...e,...o,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),o.enhanceApp&&await o.enhanceApp(n)}}}return o}const A=ue(It),Pt=T({name:"VitePressApp",setup(){const{site:o}=le();return Ue(()=>{Ye(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),Ke(),Xe(),Ge(),A.setup&&A.setup(),()=>x(A.Layout)}});async function $t(){const o=Bt(),e=jt();e.provide($e,o);const n=je(o.route);return e.provide(Be,n),e.component("Content",De),e.component("ClientOnly",Ve),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),A.enhanceApp&&await A.enhanceApp({app:e,router:o,siteData:Fe}),{app:e,router:o,data:n}}function jt(){return Re(Pt)}function Bt(){let o=G,e;return Ze(n=>{let r=We(n);return o&&(e=r),(o||e===r)&&(r=r.replace(/\.js$/,".lean.js")),G&&(o=!1),qe(()=>import(r),[])},A.NotFound)}G&&$t().then(({app:o,router:e,data:n})=>{e.go().then(()=>{Pe(e.route,n.site),o.mount("#app")})});export{$t as createApp};
