!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=h.p+""+e+"."+z+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=h.p+""+z+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var i=JSON.parse(n.responseText)}catch(e){return void t(e)}e(i)}}})}function i(e){var t=S[e];if(!t)return h;var n=function(n){return t.hot.active?(S[n]?S[n].parents.indexOf(e)<0&&S[n].parents.push(e):M=[e],t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),M=[]),_=!1,h(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return h[e]},set:function(t){h[e]=t}}};for(var i in h)Object.prototype.hasOwnProperty.call(h,i)&&Object.defineProperty(n,i,r(i));return Object.defineProperty(n,"e",{enumerable:!0,value:function(e){function t(){k--,"prepare"===E&&(L[e]||u(e),0===k&&0===P&&d())}return"ready"===E&&s("prepare"),k++,h.e(e).then(t,function(e){throw t(),e})}}),n}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:_,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:l,apply:p,status:function(e){if(!e)return E;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:D[e]};return _=!0,t}function s(e){E=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function o(e){return+e+""===e?+e:e}function l(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return y=e,s("check"),r().then(function(e){if(!e)return s("idle"),null;w={},L={},H=e.c,g=e.h,s("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});return m={},u(1),"prepare"===E&&0===k&&0===P&&d(),t})}function c(e,t){if(H[e]&&w[e]){w[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--P&&0===k&&d()}}function u(e){H[e]?(w[e]=!0,P++,n(e)):L[e]=!0}function d(){s("ready");var e=v;if(v=null,e)if(y)p(y).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(o(n));e.resolve(t)}}function p(n){function r(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),s=a.id,o=a.chain;if((u=S[s])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:s};if(u.hot._main)return{type:"unaccepted",chain:o,moduleId:s};for(var l=0;l<u.parents.length;l++){var c=u.parents[l],d=S[c];if(d){if(d.hot._declinedDependencies[s])return{type:"declined",chain:o.concat([c]),moduleId:s,parentId:c};t.indexOf(c)>=0||(d.hot._acceptedDependencies[s]?(n[c]||(n[c]=[]),i(n[c],[s])):(delete n[c],t.push(c),r.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");n=n||{};var a,l,c,u,d,p={},f=[],v={},y=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){d=o(_);var b;b=m[_]?r(d):{type:"disposed",moduleId:_};var O=!1,P=!1,k=!1,L="";switch(b.chain&&(L="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+b.moduleId+L));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+L));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+L));break;case"accepted":n.onAccepted&&n.onAccepted(b),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),k=!0;break;default:throw new Error("Unexception type "+b.type)}if(O)return s("abort"),Promise.reject(O);if(P){v[d]=m[d],i(f,b.outdatedModules);for(d in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,d)&&(p[d]||(p[d]=[]),i(p[d],b.outdatedDependencies[d]))}k&&(i(f,[b.moduleId]),v[d]=y)}var w=[];for(l=0;l<f.length;l++)d=f[l],S[d]&&S[d].hot._selfAccepted&&w.push({module:d,errorHandler:S[d].hot._selfAccepted});s("dispose"),Object.keys(H).forEach(function(e){H[e]===!1&&t(e)});for(var C,I=f.slice();I.length>0;)if(d=I.pop(),u=S[d]){var j={},T=u.hot._disposeHandlers;for(c=0;c<T.length;c++)(a=T[c])(j);for(D[d]=j,u.hot.active=!1,delete S[d],c=0;c<u.children.length;c++){var A=S[u.children[c]];A&&((C=A.parents.indexOf(d))>=0&&A.parents.splice(C,1))}}var B,q;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(u=S[d]))for(q=p[d],c=0;c<q.length;c++)B=q[c],(C=u.children.indexOf(B))>=0&&u.children.splice(C,1);s("apply"),z=g;for(d in v)Object.prototype.hasOwnProperty.call(v,d)&&(e[d]=v[d]);var x=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)){u=S[d],q=p[d];var N=[];for(l=0;l<q.length;l++)B=q[l],a=u.hot._acceptedDependencies[B],N.indexOf(a)>=0||N.push(a);for(l=0;l<N.length;l++){a=N[l];try{a(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[l],error:e}),n.ignoreErrored||x||(x=e)}}}for(l=0;l<w.length;l++){var Z=w[l];d=Z.module,M=[d];try{h(d)}catch(e){if("function"==typeof Z.errorHandler)try{Z.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,orginalError:e}),n.ignoreErrored||x||(x=t),x||(x=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||x||(x=e)}}return x?(s("fail"),Promise.reject(x)):(s("idle"),Promise.resolve(f))}function h(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:a(t),parents:(b=M,M=[],b),children:[]};return e[t].call(n.exports,n,n.exports,i(t)),n.l=!0,n.exports}var f=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),f&&f(e,t)};var v,m,g,y=!0,z="ad2e6be8418c2e5d1eee",D={},_=!0,M=[],b=[],O=[],E="idle",P=0,k=0,L={},w={},H={},S={};h.m=e,h.c=S,h.i=function(e){return e},h.d=function(e,t,n){h.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,"a",t),t},h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h.p="/",h.h=function(){return z},i("./src/js/puzzle/main.js")(h.s="./src/js/puzzle/main.js")}({"./src/js/puzzle/countdown.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./src/js/puzzle/messages.js"),o=r(s),l=function(){function e(t,n){i(this,e),this.seconds=parseInt(60*n,10),this.duration=parseInt(60*n,10),this.container=document.querySelector(t),this.timerBar=document.querySelector(".puzzle-info__timer-bar"),this.width=0,this.updateClock(n,0)}return a(e,[{key:"updateClock",value:function(e,t){var n=e<10?"0"+e:e,r=t<10?"0"+t:t,i="<span>"+n+"</span>:<span>"+r+"</span>";this.container.innerHTML=i}},{key:"startTimer",value:function(){this.createTimer(this.duration)}},{key:"updateTimer",value:function(e){var t=e-1;return this.duration=t,this.duration<=0?(clearInterval(this.interval),o.default.createMessage("Time Expired!!!"),{minutes:0,seconds:0}):{minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}}},{key:"createTimer",value:function(){var e=this;this.interval=setInterval(function(){var t=e.updateTimer(e.duration),n=100/e.seconds;e.updateClock(t.minutes,t.seconds),e.width=e.width+n,e.timerBar.style.width=e.width+"%"},1e3)}},{key:"deleteTimer",value:function(){clearInterval(this.interval)}}]),e}();t.default=l},"./src/js/puzzle/main.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./src/js/puzzle/countdown.js"),o=r(s),l=n("./src/js/puzzle/messages.js"),c=r(l),u=function(){function e(){i(this,e),this.init()}return a(e,[{key:"init",value:function(){this.initializeState(),this.createPuzzlePiece(),this.solvePuzzle(),this.cacheDOM(),this.bindFunctions(),this.updateHintsButton(),this.bindEvents(),c.default.createMessage("Select Level")}},{key:"bindFunctions",value:function(){this.handleDragOver=this.handleDragOver.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleDragEnter=this.handleDragEnter.bind(this),this.handleDragLeave=this.handleDragLeave.bind(this),this.handleDragEnd=this.handleDragEnd.bind(this),this.onAnimationEnd=this.onAnimationEnd.bind(this),this.onTransitionEnd=this.onTransitionEnd.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.start=this.start.bind(this),this.selectLevel=this.selectLevel.bind(this),this.handleInputChange=this.handleInputChange.bind(this),this.showHint=this.showHint.bind(this),this.hideHint=this.hideHint.bind(this),this.updateHintsButton=this.updateHintsButton.bind(this)}},{key:"initializeState",value:function(){this.DOM={puzzleImagePieces:[]},this.store={currentDropZone:null,started:!1,level:!1,hints:3,puzzlePieces:e.createPuzzlePiecesArray(5,45)}}},{key:"cacheDOM",value:function(){this.DOM.draggables=Array.from(document.querySelectorAll(".puzzle__piece")),this.DOM.dropZones=Array.from(document.querySelectorAll(".puzzle__spot")),this.DOM.puzzleContainer=document.querySelector(".puzzle__pieces"),this.DOM.docFrag=document.createDocumentFragment(),this.DOM.infoForm=document.querySelector(".puzzle-info__form"),this.DOM.infoContainer=document.querySelector(".puzzle-info__container"),this.DOM.infoPanelLevel=this.DOM.infoContainer.querySelector(".puzzle-info__panel--level"),this.DOM.infoPanelStats=this.DOM.infoContainer.querySelector(".puzzle-info__panel--stats"),this.DOM.puzzleStartBtn=document.getElementById("puzzle-start"),this.DOM.levelInputs=Array.from(document.querySelectorAll(".puzzle-info__input")),this.DOM.messageContainer=document.querySelector(".puzzle__message-container"),this.DOM.puzzleHint=document.querySelector(".puzzle__hint"),this.DOM.puzzleHintBtn=document.querySelector(".puzzle-info__hint"),this.DOM.timerBar=document.querySelector(".puzzle-info__timer-bar")}},{key:"bindEvents",value:function(){var t=this;this.DOM.draggables.forEach(function(n){n.addEventListener("dragstart",e.handleDragStart,!1),n.addEventListener("animationend",t.onAnimationEnd)}),this.DOM.levelInputs.forEach(function(e){e.addEventListener("change",t.handleInputChange)}),this.DOM.infoContainer.addEventListener("transitionend",this.onTransitionEnd),this.DOM.infoForm.addEventListener("submit",this.handleFormSubmit),this.DOM.puzzleStartBtn.addEventListener("click",this.start),this.DOM.puzzleHintBtn.addEventListener("mousedown",this.showHint),this.DOM.puzzleHintBtn.addEventListener("mouseup",this.hideHint)}},{key:"onAnimationEnd",value:function(e){"falling"===e.animationName&&e.target.classList.contains("puzzle__piece--falling")&&(e.target.classList.remove("puzzle__piece--falling"),e.target.style.animationDelay="0s",e.target.classList.add("fadeInAndUp"),this.DOM.puzzleContainer.appendChild(e.target)),"fadeInAndUp"===e.animationName&&e.target.classList.contains("fadeInAndUp")&&e.target.classList.remove("fadeInAndUp")}},{key:"onTransitionEnd",value:function(e){if("transform"===e.propertyName&&e.currentTarget.classList.contains("puzzle-info__container")){if("transform"===e.propertyName&&this.DOM.infoContainer.classList.contains("puzzle-info__container--slide-in"))return void this.DOM.infoContainer.classList.remove("puzzle-info__container--slide-in");this.DOM.infoContainer.classList.remove("transitioning"),this.showHideInfoPanels()}}},{key:"updateHintsButton",value:function(){this.DOM.puzzleHintBtn.innerHTML=1!==this.store.hints?this.store.hints+" Hints":this.store.hints+" Hint"}},{key:"resetForm",value:function(){this.DOM.levelInputs.forEach(function(e){e.checked=!1})}},{key:"resetPuzzle",value:function(){this.DOM.timerBar.style.width=0,this.DOM.dropZones.forEach(function(e){e.innerHTML=""}),this.initializeState(),this.createPuzzlePiece(),this.solvePuzzle(),this.cacheDOM(),this.bindEvents(),this.updateHintsButton(),c.default.createMessage("Select Level"),this.DOM.puzzleContainer.innerHTML="",this.showHideInfoPanels(),this.timer.deleteTimer(),this.timer=null,this.resetForm(),this.updateStartButtonText()}},{key:"showHideInfoPanels",value:function(){this.store.level&&(this.DOM.infoPanelLevel.classList.add("hide"),this.DOM.infoPanelStats.classList.remove("hide")),this.store.level||(this.DOM.infoPanelLevel.classList.remove("hide"),this.DOM.infoPanelStats.classList.add("hide"))}},{key:"start",value:function(){var e=this;this.store.started?this.resetPuzzle():(this.store.started=!0,c.default.clearMessage(),this.updateStartButtonText(),this.DOM.dropZones.forEach(function(t){t.addEventListener("drop",e.handleDrop,!1),t.addEventListener("dragenter",e.handleDragEnter,!1),t.addEventListener("dragleave",e.handleDragLeave,!1),t.addEventListener("dragover",e.handleDragOver,!1),t.addEventListener("dragend",e.handleDragEnd,!1)}),this.timer.startTimer())}},{key:"updateStartButtonText",value:function(){this.store.started?this.DOM.puzzleStartBtn.innerHTML="Reset":this.DOM.puzzleStartBtn.innerHTML="Start"}},{key:"selectLevel",value:function(e){this.store.level=e,this.timer=new o.default(".puzzle-info__timer",this.store.level),this.DOM.draggables.forEach(function(e){e.classList.add("puzzle__piece--falling")}),this.DOM.infoContainer.classList.add("puzzle-info__container--slide-in","transitioning"),c.default.createMessage("Click Start to Begin!")}},{key:"handleInputChange",value:function(e){var t=this;this.DOM.levelInputs.forEach(function(n){if(t.DOM.messageContainer.classList.remove("visible"),c.default.clearMessage(),e.target!==n)return void(n.checked=!1);n.checked=!0})}},{key:"showHint",value:function(){return this.store.started?!this.store.hints>0?void c.default.createMessage("No Hints Left!"):void this.DOM.puzzleHint.classList.add("visible"):void c.default.createMessage("Nice Try!")}},{key:"hideHint",value:function(){this.DOM.puzzleHint.classList.remove("visible"),c.default.clearMessage(),this.store.started||c.default.createMessage("Click Start to Begin!"),this.store.hints>0&&this.store.started&&(this.store.hints=this.store.hints-1),this.updateHintsButton()}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=this.DOM.infoForm,n=Array.from(t.elements).filter(function(e){return e.checked});if(0===n.length)return void c.default.createMessage("Select Level");var r=parseInt(n[0].value,10);this.selectLevel(r)}},{key:"createPuzzlePiece",value:function(){this.DOM.puzzleImagePieces=this.store.puzzlePieces.map(function(t){var n=e.createPieceImageContainer(t.id),r=e.createPieceImageNumber(t.id),i=e.createPieceImage(t.id);return n.appendChild(i),n.appendChild(r),n})}},{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),console.log("Drop:",e.target);var t=this.findParentByClassName(e.target,"current-target");if(this.store.currentDropZone=t,this.store.currentDropZone&&this.store.currentDropZone.childElementCount>0){var n=this.store.currentDropZone.firstElementChild,r=this.store.currentDropZone.removeChild(n);this.DOM.puzzleContainer.appendChild(r);var i=e.dataTransfer.getData("text/plain");t.appendChild(document.querySelector('.puzzle__piece[data-id="'+i+'"]'))}else{var a=e.dataTransfer.getData("text/plain");e.target.appendChild(document.querySelector('.puzzle__piece[data-id="'+a+'"]'))}this.isPuzzleComplete()}},{key:"handleDragEnter",value:function(e){e.stopPropagation(),e.preventDefault(),console.log("DragEnter:",e.target);var t=this.findParentByClassName(e.target,"puzzle__spot");return this.store.currentDropZone&&t!==this.store.currentDropZone&&this.store.currentDropZone.classList.remove("current-target","target-overlay"),!0}},{key:"handleDragLeave",value:function(e){return e.stopPropagation(),e.preventDefault(),console.log("DragLeave:",e.target),this.findParentByClassName(e.target,"puzzle__spot").classList.remove("current-target","target-overlay"),!1}},{key:"handleDragEnd",value:function(e){return e.preventDefault(),e.stopPropagation(),console.log("DragEnd:",e.target),console.log("currentDropZone:",this.store.currentDropZone),this.store.currentDropZone.classList.remove("target-overlay"),!1}},{key:"handleDragOver",value:function(e){return e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="move",this.findParentByClassName(e.target,"puzzle__spot").classList.add("current-target","target-overlay"),console.log("DragOver",e.target),!1}},{key:"isPuzzleComplete",value:function(){var t=this;this.DOM.dropZones.some(e.isMatch)||(c.default.createMessage("Nice Job!!!"),setTimeout(function(){c.default.clearMessage(),t.resetPuzzle()},5e3))}},{key:"solvePuzzle",value:function(){var e=this,t=document.querySelector(".puzzle__viewport");Array.from(t.querySelectorAll(".puzzle__spot")).forEach(function(t){var n=parseInt(t.getAttribute("data-id"),10),r=e.DOM.puzzleImagePieces.filter(function(e){return parseInt(e.getAttribute("data-id"),10)===n});t.appendChild(r[0])})}},{key:"findParentByClassName",value:function(e,t){return null===e.parentNode?null:e.classList.contains(t)?e:this.findParentByClassName(e.parentNode,t)}}],[{key:"createPieceImage",value:function(e){var t=document.createElement("img");return t.setAttribute("src","../drag-n-drop/images/puzzle/piece-"+e+".png"),t.setAttribute("data-id",e),t}},{key:"createPieceImageNumber",value:function(e){var t=document.createElement("span");return t.classList.add("puzzle__piece__number"),t.innerHTML=e,t}},{key:"createPieceImageContainer",value:function(e){var t=document.createElement("div");return t.classList.add("puzzle__piece"),t.setAttribute("data-id",e),t.setAttribute("draggable",!0),t}},{key:"createPuzzlePiecesArray",value:function(e,t){for(var n=e,r=[];n<=t;){var i={id:n,solved:!1};r.push(i),n+=1}return r}},{key:"handleDragStart",value:function(e){return console.log("DragStart:",e.target),e.dataTransfer.setData("text/plain",e.target.dataset.id),e.dataTransfer.dropEffect="copy",!0}},{key:"isMatch",value:function(e){return!e.querySelector(".puzzle__piece")||parseInt(e.getAttribute("data-id"),10)!==parseInt(e.querySelector(".puzzle__piece").getAttribute("data-id"),10)}}]),e}();window.JigSaw=new u},"./src/js/puzzle/messages.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return i(e,null,[{key:"getMessageContainer",value:function(){return document.querySelector(".puzzle__message-container")}},{key:"createMessageMarkup",value:function(e){return'<h1 class="puzzle__message">'+e+"</h1>"}},{key:"createMessage",value:function(t){var n=e.getMessageContainer();n.classList.add("visible"),n.innerHTML=e.createMessageMarkup(t)}},{key:"clearMessage",value:function(){var t=e.getMessageContainer();t.classList.remove("visible"),t.innerHTML=""}}]),e}();t.default=a}});