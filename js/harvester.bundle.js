!function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=p.p+""+e+"."+w+".hot-update.js",n.appendChild(t)}function r(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+r+" failed."));else{try{var i=JSON.parse(t.responseText)}catch(e){return void n(e)}e(i)}}})}function i(e){var n=H[e];if(!n)return p;var t=function(t){return n.hot.active?(H[t]?H[t].parents.indexOf(e)<0&&H[t].parents.push(e):E=[e],n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),E=[]),b=!1,p(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(n){p[e]=n}}};for(var i in p)Object.prototype.hasOwnProperty.call(p,i)&&Object.defineProperty(t,i,r(i));return Object.defineProperty(t,"e",{enumerable:!0,value:function(e){function n(){D--,"prepare"===O&&(I[e]||l(e),0===D&&0===_&&u())}return"ready"===O&&s("prepare"),D++,p.e(e).then(n,function(e){throw n(),e})}}),t}function o(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:b,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:c,apply:f,status:function(e){if(!e)return O;x.push(e)},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var n=x.indexOf(e);n>=0&&x.splice(n,1)},data:k[e]};return b=!0,n}function s(e){O=e;for(var n=0;n<x.length;n++)x[n].call(null,e)}function a(e){return+e+""===e?+e:e}function c(e){if("idle"!==O)throw new Error("check() is only allowed in idle status");return g=e,s("check"),r().then(function(e){if(!e)return s("idle"),null;L={},I={},A=e.c,y=e.h,s("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});return v={},l(0),"prepare"===O&&0===D&&0===_&&u(),n})}function d(e,n){if(A[e]&&L[e]){L[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--_&&0===D&&u()}}function l(e){A[e]?(L[e]=!0,_++,t(e)):I[e]=!0}function u(){s("ready");var e=m;if(m=null,e)if(g)f(g).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(a(t));e.resolve(n)}}function f(t){function r(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),s=o.id,a=o.chain;if((l=H[s])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:s};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:s};for(var c=0;c<l.parents.length;c++){var d=l.parents[c],u=H[d];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:a.concat([d]),moduleId:s,parentId:d};n.indexOf(d)>=0||(u.hot._acceptedDependencies[s]?(t[d]||(t[d]=[]),i(t[d],[s])):(delete t[d],n.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");t=t||{};var o,c,d,l,u,f={},h=[],m={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){u=a(b);var j;j=v[b]?r(u):{type:"disposed",moduleId:b};var x=!1,_=!1,D=!1,I="";switch(j.chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(j),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(x)return s("abort"),Promise.reject(x);if(_){m[u]=v[u],i(h,j.outdatedModules);for(u in j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,u)&&(f[u]||(f[u]=[]),i(f[u],j.outdatedDependencies[u]))}D&&(i(h,[j.moduleId]),m[u]=g)}var L=[];for(c=0;c<h.length;c++)u=h[c],H[u]&&H[u].hot._selfAccepted&&L.push({module:u,errorHandler:H[u].hot._selfAccepted});s("dispose"),Object.keys(A).forEach(function(e){A[e]===!1&&n(e)});for(var P,M=h.slice();M.length>0;)if(u=M.pop(),l=H[u]){var T={},U=l.hot._disposeHandlers;for(d=0;d<U.length;d++)(o=U[d])(T);for(k[u]=T,l.hot.active=!1,delete H[u],d=0;d<l.children.length;d++){var R=H[l.children[d]];R&&((P=R.parents.indexOf(u))>=0&&R.parents.splice(P,1))}}var B,C;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)&&(l=H[u]))for(C=f[u],d=0;d<C.length;d++)B=C[d],(P=l.children.indexOf(B))>=0&&l.children.splice(P,1);s("apply"),w=y;for(u in m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var q=null;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)){l=H[u],C=f[u];var S=[];for(c=0;c<C.length;c++)B=C[c],o=l.hot._acceptedDependencies[B],S.indexOf(o)>=0||S.push(o);for(c=0;c<S.length;c++){o=S[c];try{o(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:C[c],error:e}),t.ignoreErrored||q||(q=e)}}}for(c=0;c<L.length;c++){var N=L[c];u=N.module,E=[u];try{p(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,orginalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||q||(q=e)}}return q?(s("fail"),Promise.reject(q)):(s("idle"),Promise.resolve(h))}function p(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:o(n),parents:(j=E,E=[],j),children:[]};return e[n].call(t.exports,t,t.exports,i(n)),t.l=!0,t.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){d(e,n),h&&h(e,n)};var m,v,y,g=!0,w="036ce7c07a6a8f428624",k={},b=!0,E=[],j=[],x=[],O="idle",_=0,D=0,I={},L={},A={},H={};p.m=e,p.c=H,p.i=function(e){return e},p.d=function(e,n,t){p.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},p.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(n,"a",n),n},p.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},p.p="/",p.h=function(){return w},i("./src/js/link-harvester/main.js")(p.s="./src/js/link-harvester/main.js")}({"./src/js/link-harvester/link-harvester.js":function(e,n,t){"use strict";n.a=function(){function e(e){return e?e.map(function(e){return e.match(r.emailAddresses)}):[]}function n(e){return e?e.reduce(function(e,n){return e.push({linkText:n.match(r.linkText)[0].replace(/[><]/g,""),url:n.match(r.linkURL)[0]}),e},[]):[]}function t(t){return i.emailAddresses=e(t.match(r.emailLinks)),i.links=n(t.match(r.links)),i}const r={emailLinks:/<a\s*href=(?:"|')(?:mailto:)[\w\d@-]*.[\w]*">[\w\s\d]*<\/a>/gim,links:/<a\s*href=(?:"|')(?:http:\/\/|https:\/\/)[\w\s\d.-\/-]*(?:"|')*>[\w\s\d]*<\/a>/gim,emailAddresses:/[\w\d-]*@[\w\d-]*.\w{2,4}/g,linkText:/>[\w\s\d]*</g,linkURL:/https?:\/\/(www.)?[\w\d\s-]*.\w{2,4}/g},i={links:[],emailAddresses:[]};return{harvestLinks:t}}()},"./src/js/link-harvester/main.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./src/js/link-harvester/link-harvester.js");n.default=function(){function e(){f.textArea=document.getElementById("harvester-text"),f.submit=document.getElementById("submit-text"),f.fileUpload=document.getElementById("file-upload"),f.flashContainer=document.getElementById("flash-container"),f.flashMessage=document.getElementById("flash-message"),f.flashClose=document.getElementById("flash-close"),f.harvestLinks=document.getElementById("harvest-links"),f.harvestEmails=document.getElementById("harvest-emails"),f.urlResults=document.getElementById("url-results")}function n(){f.flashContainer.classList.add("flash--error"),f.flashContainer.classList.remove("flash--closed")}function t(e){return e.emailAddresses.length?e.emailAddresses.map(function(e){return"<li>"+e+"</li>"}).join(""):"<li>There were no email addresses found.</li>"}function i(e){return e.links.length?e.links.map(function(e){return"<li>"+e.linkText+" - "+e.url+"</li>"}).join(""):"<li>There were no links found.</li>"}function o(e){var r="",o="";if(!e.emailAddresses.length&&!e.links.length)return void n();f.urlResults.classList.remove("hide"),r=t(e),o=i(e),f.harvestEmails.innerHTML=r,f.harvestLinks.innerHTML=o}function s(e){f.urlResults.classList.add("hide"),f.harvestEmails.innerHTML="",f.harvestLinks.innerHTML="",f.flashContainer.classList.add("flash--closed"),e&&(f.textArea.value="")}function a(e){"clear-all"===e.target.id&&s(!0)}function c(){s();const e=f.textArea.value;o(r.a.harvestLinks(e))}function d(){s();const e=f.fileUpload.files[0];if("text/plain"!==e.type&&"text/html"!==e.type)return void alert("You must use a valid text or html file.");const n=new FileReader;n.onload=function(){f.textArea.value=n.result},n.readAsText(e)}function l(){f.submit.addEventListener("click",c),f.fileUpload.addEventListener("change",d),f.urlResults.addEventListener("click",a),f.flashClose.addEventListener("click",s)}function u(){e(),l()}const f={};u()}()}});