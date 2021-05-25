var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function l(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r["throw"](e))}catch(e){o(e)}}function s(e){e.done?n(e.value):a(e.value).then(l,i)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,l;return l={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function i(e){return function(t){return s([e,t])}}function s(l){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=l[0]&2?a["return"]:l[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;if(a=0,o)l=[l[0]&2,o.value];switch(l[0]){case 0:case 1:o=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;a=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){n.label=l[1];break}if(l[0]===6&&n.label<o[1]){n.label=o[1];o=l;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(l);break}if(o[2])n.ops.pop();n.trys.pop();continue}l=t.call(e,n)}catch(e){l=[6,e];a=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};var NAMESPACE="lib";var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var l=rootAppliedStyles.get(e);var i=void 0;if(!l){rootAppliedStyles.set(e,l=new Set)}if(!l.has(a)){{{i=doc.createElement("style");i.innerHTML=o}e.insertBefore(i,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[o])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=createTime("attachStyles",t.$tagName$);addStyle(n.getRootNode(),t);r()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var o=null;var l=false;var i=false;var s=[];var c=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){c(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(l&&i){s[s.length-1].$text$+=a}else{s.push(l?newVNode(null,a):a)}i=l}}};c(n);if(t){if(t.name){o=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var f=newVNode(e,null);f.$attrs$=t;if(s.length>0){f.$children$=s}{f.$name$=o}return f};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$name$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var l=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var s=e.classList;var c=parseClassList(n);var u=parseClassList(r);s.remove.apply(s,c.filter((function(e){return e&&!u.includes(e)})));s.add.apply(s,u.filter((function(e){return e&&!c.includes(e)})))}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else;}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var l=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in l)){setAccessor(a,r,o[r],undefined)}}}for(r in l){setAccessor(a,r,o[r],l[r])}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var l;var i;var s;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){l=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){l=a.$elm$=doc.createTextNode("")}else{l=a.$elm$=doc.createElement(a.$flags$&2?"slot-fb":a.$tag$);{updateElement(null,a)}if(a.$children$){for(o=0;o<a.$children$.length;++o){i=createElm(e,a,o);if(i){l.appendChild(i)}}}}{l["s-hn"]=hostTagName;if(a.$flags$&(2|1)){l["s-sr"]=true;l["s-cr"]=contentRef;l["s-sn"]=a.$name$||"";s=e&&e.$children$&&e.$children$[n];if(s&&s.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return l};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,n,r,a,o){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var i;for(;a<=o;++a){if(r[a]){i=createElm(null,n,a);if(i){r[a].$elm$=i;l.insertBefore(i,referenceNode(t))}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var l=t.length-1;var i=t[0];var s=t[l];var c=r.length-1;var u=r[0];var f=r[c];var $;while(a<=l&&o<=c){if(i==null){i=t[++a]}else if(s==null){s=t[--l]}else if(u==null){u=r[++o]}else if(f==null){f=r[--c]}else if(isSameVnode(i,u)){patch(i,u);i=t[++a];u=r[++o]}else if(isSameVnode(s,f)){patch(s,f);s=t[--l];f=r[--c]}else if(isSameVnode(i,f)){if(i.$tag$==="slot"||f.$tag$==="slot"){putBackInOriginalLocation(i.$elm$.parentNode,false)}patch(i,f);e.insertBefore(i.$elm$,s.$elm$.nextSibling);i=t[++a];f=r[--c]}else if(isSameVnode(s,u)){if(i.$tag$==="slot"||f.$tag$==="slot"){putBackInOriginalLocation(s.$elm$.parentNode,false)}patch(s,u);e.insertBefore(s.$elm$,i.$elm$);s=t[--l];u=r[++o]}else{{$=createElm(t&&t[o],n,o);u=r[++o]}if($){{parentReferenceNode(i.$elm$).insertBefore($,referenceNode(i.$elm$))}}}}if(a>l){addVnodes(e,r[c+1]==null?null:r[c+1].$elm$,n,r,o,c)}else if(o>c){removeVnodes(t,a,l)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var l=t.$text$;var i;if(l===null){{if(o==="slot");else{updateElement(e,t)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}}else if(i=n["s-cr"]){i.parentNode.textContent=l}else if(e.$text$!==l){n.data=l}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var l;var i;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){l=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){i=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||l!==""){if(i===1&&l===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}updateFallbackSlotVisibility(n)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var l;var i=0;var s=e.childNodes;var c=s.length;for(;i<c;i++){t=s[i];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(l=r.length-1;l>=0;l--){n=r[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n;{contentRef=n["s-cr"];useNativeShadowDom=(r.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var l=void 0;var i=void 0;var s=void 0;var c=void 0;var u=void 0;var f=void 0;var $=0;for(;$<relocateNodes.length;$++){l=relocateNodes[$];i=l.$nodeToRelocate$;if(!i["s-ol"]){s=doc.createTextNode("");s["s-nr"]=i;i.parentNode.insertBefore(i["s-ol"]=s,i)}}for($=0;$<relocateNodes.length;$++){l=relocateNodes[$];i=l.$nodeToRelocate$;if(l.$slotRefNode$){c=l.$slotRefNode$.parentNode;u=l.$slotRefNode$.nextSibling;s=i["s-ol"];while(s=s.previousSibling){f=s["s-nr"];if(f&&f["s-sn"]===i["s-sn"]&&c===f.parentNode){f=f.nextSibling;if(!f||!f["s-nr"]){u=f;break}}}if(!u&&c!==i.parentNode||i.nextSibling!==u){if(i!==u){if(!i["s-hn"]&&i["s-ol"]){i["s-hn"]=i["s-ol"].parentNode.nodeName}c.insertBefore(i,u)}}}else{if(i.nodeType===1){i.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,n){var r=getElement(e);return{emit:function(e){return emitEvent(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,l,i,s;return __generator(this,(function(c){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=r["s-rc"];if(n){attachStyles(e)}l=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(o){o.map((function(e){return e()}));r["s-rc"]=undefined}l();a();{i=r["s-p"];s=function(){return postUpdateComponent(e)};if(i.length===0){s()}else{Promise.all(i).then(s);e.$flags$|=4;i.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(t){consoleError(t,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}r();{e.$onReadyResolve$(n);if(!a){appDidLoad()}}}else{r()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$instanceValues$.get(t);var l=a.$flags$;var i=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(l&8)||o===undefined)&&n!==o){a.$instanceValues$.set(t,n);if(i){if((l&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var t=e[0],n=e[1];var r=n[1]||t;o.set(r,t);return r}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var e,r,o,l,i,s,c;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=u.sent();e();u.label=2;case 2:if(!a.isProxied){proxyComponent(a,n,2);a.isProxied=true}r=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}r();if(a.style){o=a.style;l=getScopeId(n);if(!styles.has(l)){i=createTime("registerStyles",n.$tagName$);registerStyle(l,o,!!(n.$flags$&1));i()}}u.label=3;case 3:s=t.$ancestorComponent$;c=function(){return scheduleUpdate(t,true)};if(s&&s["s-rc"]){s["s-rc"].push(c)}else{c()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){setContentReference(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}r()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){getHostRef(e)}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var o=win.customElements;var l=doc.head;var i=l.querySelector("meta[charset]");var s=doc.createElement("style");var c=[];var u;var f=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}var l=n.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);return r}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(f){c.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(l)&&!o.get(l)){r.push(l);o.define(l,proxyComponent(i,n,1))}}))}));{s.innerHTML=r+HYDRATED_CSS;s.setAttribute("data-styles","");l.insertBefore(s,i?i.nextSibling:l.firstChild)}f=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return u=setTimeout(appDidLoad,30)}))}}n()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);export{Host as H,bootstrapLazy as b,createEvent as c,getElement as g,h,promiseResolve as p,registerInstance as r};