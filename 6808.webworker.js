"use strict";(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[6808],{34892:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBaseCjsModuleSystem=void 0;const global_this_js_1=__webpack_require__(74124);function createBaseCjsModuleSystem(options){const{resolveFrom,dirname,readFileSync,globals={}}=options,loadedModules=new Map;return{requireModule,requireFrom,resolveFrom,loadedModules,globals};function resolveThrow(e,t,o){const r=resolveFrom(e,t,o);if(void 0===r)throw new Error(`Cannot resolve "${t}" in ${o||e}`);return r}function requireFrom(e,t,o){const r=loadedModules.get(t);return r?r.exports:requireModule(resolveThrow(e,t,o))}function requireModule(filePath){if(!1===filePath)return{};const existingModule=loadedModules.get(filePath);if(existingModule)return existingModule.exports;const newModule={exports:{},filename:filePath,id:filePath},contextPath=dirname(filePath),fileContents=readFileSync(filePath);if(filePath.endsWith(".json"))return newModule.exports=JSON.parse(fileContents),loadedModules.set(filePath,newModule),newModule.exports;const requireFromContext=e=>requireFrom(contextPath,e,filePath);requireFromContext.resolve=e=>resolveThrow(contextPath,e,filePath);const moduleBuiltins={module:newModule,exports:newModule.exports,__filename:filePath,__dirname:contextPath,require:requireFromContext},injectedGlobals={global:global_this_js_1.envGlobal,...globals},fnArgs=Object.keys(moduleBuiltins).join(", "),globalsArgs=Object.keys(injectedGlobals).join(", "),moduleSource=`${fileContents}\n//# sourceURL=${filePath}\n`,globalFn=eval(`(function (${globalsArgs}){ return (function (${fnArgs}){${moduleSource}}); })`);loadedModules.set(filePath,newModule);try{const e=globalFn(...Object.values(injectedGlobals));e(...Object.values(moduleBuiltins))}catch(e){throw loadedModules.delete(filePath),e}return newModule.exports}}exports.createBaseCjsModuleSystem=createBaseCjsModuleSystem},51682:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createCjsModuleSystem=void 0;const r=o(26315),n=o(34892);t.createCjsModuleSystem=function(e){const{fs:t,globals:o}=e,{dirname:i,readFileSync:s}=t,{resolver:l=(0,r.createRequestResolver)({fs:t})}=e;return(0,n.createBaseCjsModuleSystem)({resolveFrom:(e,t,o)=>l(e,t,o).resolvedFile,readFileSync:e=>s(e,"utf8"),dirname:i,globals:o})}},74124:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.envGlobal=void 0,t.envGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==o.g?o.g:void 0},96435:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(34892),t),n(o(51682),t),n(o(8246),t)},8246:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},51607:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createDependencyResolver=void 0;const{hasOwnProperty:o}=Object.prototype;t.createDependencyResolver=function({extractRequests:e,resolveRequest:t}){return(r,n)=>{const i=Object.create(null),s=Array.isArray(r)?[...r]:[r];for(;s.length>0;){const r=s.shift();if(i[r])continue;const l=Object.create(null);i[r]=l;const c=e(r);for(const e of c){if(o.call(l,e))continue;const i=t(r,e);l[e]=i,n&&void 0!==i&&!1!==i&&s.push(i)}}return i}}},26315:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(51607),t),n(o(48522),t),n(o(20096),t)},48522:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRequestResolver=void 0;const o="browser",r=["node_modules"],n=[".js",".json"],i=e=>"."===e||".."===e||e.startsWith("./")||e.startsWith("../"),s={throwIfNoEntry:!1};function l(e){const t=new Map;let o=!1;for(const[r,n]of Object.entries(e)){let e=r,i=n;r.endsWith("/*")&&(o=!0,e={prefix:r.slice(0,-1)},"string"==typeof n&&n.endsWith("/*")&&(i={prefix:n.slice(0,-1)})),t.set(e,i)}return[t,o]}t.createRequestResolver=function(e){const{fs:{statSync:t,readFileSync:c,realpathSync:a,dirname:u,join:d,resolve:f,isAbsolute:v},packageRoots:p=r,extensions:h=n,target:y=o,resolvedPacakgesCache:b=new Map,alias:g={},fallback:m={}}=e,_=function(e,t=new Map){return o=>{if(t.has(o))return t.get(o);{const r=e(o);return t.set(o,r),r}}}((function(e){const t=d(e,"package.json"),o=function(e){const{stackTraceLimit:t}=Error;try{return Error.stackTraceLimit=0,JSON.parse(c(e,"utf8"))}catch{return}finally{Error.stackTraceLimit=t}}(t);if("object"!=typeof o||null===o)return;const r=function({main:e,browser:t}){return"browser"===y&&"string"==typeof t?t:"string"==typeof e?e:void 0}(o),{browser:n}=o;let s;if("browser"===y&&"object"==typeof n&&null!==n){s=Object.create(null);for(const[t,o]of Object.entries(n)){const r=i(t)?E(d(e,t)):t;if(r){const t=q(e,o);void 0!==t&&(s[r]=t)}}}return{filePath:t,directoryPath:e,mainPath:r,browserMappings:s}}),b),[M,j]=l(g),[w,P]=l(m);return function(e,t){var o,r;const n=new Set;for(const i of function*(e,t,o){var r;const n=j?k(M,t):M.get(t);let i=!1;if(void 0!==n&&(i=!0,yield n),!i&&"browser"===y){const n=C(e);if(n){o.add(n.filePath);const e=null===(r=n.browserMappings)||void 0===r?void 0:r[t];void 0!==e&&(i=!0,yield e)}}i||(yield t);const s=P?k(w,t):w.get(t);void 0!==s&&(yield s)}(e,t,n)){if(!1===i)return{resolvedFile:i,visitedPaths:n};for(const t of x(e,i)){if(n.add(t),!(null===(o=T(t))||void 0===o?void 0:o.isFile()))continue;if("browser"===y){const e=C(u(t));if(e){n.add(e.filePath);const o=null===(r=e.browserMappings)||void 0===r?void 0:r[t];if(void 0!==o)return!1!==o&&n.add(o),{resolvedFile:o,originalFilePath:t,visitedPaths:n}}}const e=R(t);return n.add(e),{resolvedFile:e,visitedPaths:n}}}return{resolvedFile:void 0,visitedPaths:n}};function*x(e,t){if(i(t)||v(t)){const o=f(e,t);yield*O(o),yield*F(o)}else yield*function*(e,t){var o;for(const r of function*(e){for(const t of p)for(const o of B(e))yield d(o,t)}(e)){if(!(null===(o=T(r))||void 0===o?void 0:o.isDirectory()))continue;const e=d(r,t);yield*O(e),yield*F(e)}}(e,t)}function*O(e){yield e;for(const t of h)yield e+t}function*S(e){yield*O(e),yield*O(d(e,"index"))}function*F(e){var t;if(!(null===(t=T(e))||void 0===t?void 0:t.isDirectory()))return;const o=_(e),r=null==o?void 0:o.mainPath;void 0!==r?yield*S(d(e,r)):yield*O(d(e,"index"))}function k(e,t){for(const[o,r]of e){const e=typeof o;if("string"===e){if(t===o)return r}else if("object"===e){const{prefix:e}=o;if(t.startsWith(e)&&t.length>e.length)return"object"==typeof r?r.prefix+t.slice(e.length):r}}}function C(e){for(const t of B(e)){const e=_(t);if(e)return e}}function q(e,t){return!1===t?t:"string"==typeof t?i(t)?E(d(e,t)):t:void 0}function E(e){var t;for(const o of S(e))if(null===(t=T(o))||void 0===t?void 0:t.isFile())return R(o)}function T(e){const{stackTraceLimit:o}=Error;try{return Error.stackTraceLimit=0,t(e,s)}catch{return}finally{Error.stackTraceLimit=o}}function R(e){const{stackTraceLimit:t}=Error;try{return Error.stackTraceLimit=0,a(e)}catch{return e}finally{Error.stackTraceLimit=t}}function*B(e){let t;for(;t!==e;)yield e,t=e,e=u(e)}}},20096:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},51609:(e,t)=>{function o(e,t){if(t.isStylableModule(e)){const o=[],r=t.getModulePathNoExt(e);for(const n of t.getImporters(e))t.isStylableModule(n)||t.getModulePathNoExt(n)!==r||o.push(n);if(o.length>1)throw new Error(`Stylable Component Conflict:\n${e} has multiple components entries [${o}] `);return o[0]}}Object.defineProperty(t,"__esModule",{value:!0}),t.getCSSViewModule=t.calcDepth=void 0,t.calcDepth=function e(t,r,n=[],i=new Map){let s=0;if(i.has(t))return i.get(t);if(n.includes(t))return 0;n=n.concat(t);const l=r.getDependencies(t);for(const t of l)s=Math.max(s,e(t,r,n,i));if(r.isStylableModule(t)){const l=o(t,r);l&&(s=Math.max(s,e(l,r,n,i)),i.delete(l)),s++}return i.set(t,s),s},t.getCSSViewModule=o}}]);