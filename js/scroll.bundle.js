!function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=f.p+""+e+"."+b+".hot-update.js",n.appendChild(t)}function r(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,r=f.p+""+b+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=A[e];if(!n)return f;var t=function(t){return n.hot.active?(A[t]?A[t].parents.indexOf(e)<0&&A[t].parents.push(e):O=[e],n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),O=[]),j=!1,f(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&Object.defineProperty(t,o,r(o));return Object.defineProperty(t,"e",{enumerable:!0,value:function(e){function n(){T--,"prepare"===x&&(k[e]||l(e),0===T&&0===D&&u())}return"ready"===x&&i("prepare"),T++,f.e(e).then(n,function(e){throw n(),e})}}),t}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:j,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:a,apply:p,status:function(e){if(!e)return x;E.push(e)},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var n=E.indexOf(e);n>=0&&E.splice(n,1)},data:g[e]};return j=!0,n}function i(e){x=e;for(var n=0;n<E.length;n++)E[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return w=e,i("check"),r().then(function(e){if(!e)return i("idle"),null;H={},k={},P=e.c,m=e.h,i("prepare");var n=new Promise(function(e,n){y={resolve:e,reject:n}});return v={},l(0),"prepare"===x&&0===T&&0===D&&u(),n})}function s(e,n){if(P[e]&&H[e]){H[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--D&&0===T&&u()}}function l(e){P[e]?(H[e]=!0,D++,t(e)):k[e]=!0}function u(){i("ready");var e=y;if(y=null,e)if(w)p(w).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(d(t));e.resolve(n)}}function p(t){function r(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var c=r.pop(),i=c.id,d=c.chain;if((l=A[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<l.parents.length;a++){var s=l.parents[a],u=A[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};n.indexOf(s)>=0||(u.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),o(t[s],[i])):(delete t[s],n.push(s),r.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");t=t||{};var c,a,s,l,u,p={},h=[],y={},w=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in v)if(Object.prototype.hasOwnProperty.call(v,j)){u=d(j);var _;_=v[j]?r(u):{type:"disposed",moduleId:j};var E=!1,D=!1,T=!1,k="";switch(_.chain&&(k="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+_.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(_),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),T=!0;break;default:throw new Error("Unexception type "+_.type)}if(E)return i("abort"),Promise.reject(E);if(D){y[u]=v[u],o(h,_.outdatedModules);for(u in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(p[u]||(p[u]=[]),o(p[u],_.outdatedDependencies[u]))}T&&(o(h,[_.moduleId]),y[u]=w)}var H=[];for(a=0;a<h.length;a++)u=h[a],A[u]&&A[u].hot._selfAccepted&&H.push({module:u,errorHandler:A[u].hot._selfAccepted});i("dispose"),Object.keys(P).forEach(function(e){P[e]===!1&&n(e)});for(var I,M=h.slice();M.length>0;)if(u=M.pop(),l=A[u]){var q={},S=l.hot._disposeHandlers;for(s=0;s<S.length;s++)(c=S[s])(q);for(g[u]=q,l.hot.active=!1,delete A[u],s=0;s<l.children.length;s++){var L=A[l.children[s]];L&&((I=L.parents.indexOf(u))>=0&&L.parents.splice(I,1))}}var U,N;for(u in p)if(Object.prototype.hasOwnProperty.call(p,u)&&(l=A[u]))for(N=p[u],s=0;s<N.length;s++)U=N[s],(I=l.children.indexOf(U))>=0&&l.children.splice(I,1);i("apply"),b=m;for(u in y)Object.prototype.hasOwnProperty.call(y,u)&&(e[u]=y[u]);var R=null;for(u in p)if(Object.prototype.hasOwnProperty.call(p,u)){l=A[u],N=p[u];var C=[];for(a=0;a<N.length;a++)U=N[a],c=l.hot._acceptedDependencies[U],C.indexOf(c)>=0||C.push(c);for(a=0;a<C.length;a++){c=C[a];try{c(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[a],error:e}),t.ignoreErrored||R||(R=e)}}}for(a=0;a<H.length;a++){var Y=H[a];u=Y.module,O=[u];try{f(u)}catch(e){if("function"==typeof Y.errorHandler)try{Y.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,orginalError:e}),t.ignoreErrored||R||(R=n),R||(R=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||R||(R=e)}}return R?(i("fail"),Promise.reject(R)):(i("idle"),Promise.resolve(h))}function f(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:c(n),parents:(_=O,O=[],_),children:[]};return e[n].call(t.exports,t,t.exports,o(n)),t.l=!0,t.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,w=!0,b="ad2e6be8418c2e5d1eee",g={},j=!0,O=[],_=[],E=[],x="idle",D=0,T=0,k={},H={},P={},A={};f.m=e,f.c=A,f.i=function(e){return e},f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="/",f.h=function(){return b},o("./src/js/scrollTo/main.js")(f.s="./src/js/scrollTo/main.js")}({"./src/js/scrollTo/backToTop.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/js/scrollTo/scrollTo.js"),c=r(o),i=function(){function e(){var e=document.createElement("div");return e.classList.add("back-to-top"),e.innerHTML="&#8593;",e.setAttribute("style","background: goldenrod; height: 30px; width: 30px; position: fixed; right: 30px; cursor: pointer; text-align: center; line-height: 30px"),e.addEventListener("click",function(){(0,c.default)(0)}),e}function n(e){window.innerWidth<640||(document.body.appendChild(e),document.querySelector(".back-to-top").style.top=document.documentElement.clientHeight-60+"px",document.querySelector(".back-to-top").style.display="fixed")}function t(){if(!document.querySelector(".back-to-top")){n(e())}}return t},d=i();n.default=d},"./src/js/scrollTo/main.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e.preventDefault();var n=e.target;"menu-item"===n.parentNode.className&&(0,i.default)(n.hash)}var c=t("./src/js/scrollTo/scrollTo.js"),i=r(c),d=t("./src/js/scrollTo/backToTop.js"),a=r(d);document.querySelector(".menu").addEventListener("click",o),document.addEventListener("scroll",function(){(0,a.default)()})},"./src/js/scrollTo/scrollTo.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){return c=document.querySelector(e)}function n(e){return Math.round(e.getBoundingClientRect().top)+window.pageYOffset}function t(){var e=a.speed;if(i<o){if((o-=e)<=i)return window.scrollTo(0,i),o=window.pageYOffset,void window.cancelAnimationFrame(d)}else if(i-o<a.speed&&(e=i-o),(o+=e)>=i)return window.scrollTo(0,i),o=window.pageYOffset,void window.cancelAnimationFrame(d);window.scrollTo(0,o),d=window.requestAnimationFrame(t)}function r(r,d){arguments[1]?a.speed=d.speed||30:a.speed=30,o=window.pageYOffset,"number"==typeof r?i=r:(c=e(r),i=n(c)),t()}var o=0,c=!1,i=0,d=null,a={};return r},o=r();n.default=o}});