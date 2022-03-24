/*! For license information please see [main]storage.web.js.LICENSE.txt */
(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[2906],{21086:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);n.__exportStar(r(35855),t);var o=r(35855);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},35855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainEnv=t.MainContext=void 0;const n=r(93849),o=r(10067),i=r(86420);t.default=new n.Feature({id:"reactRenderer",api:{rendererService:n.Service.withType().defineEntity(i.mainEnv),reactMainContext:o.reactMainContext}}),t.MainContext=i.mainEnv.useContext("window"),t.mainEnv=i.mainEnv},65174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContextEntryDefinition=t.ContextField=t.ContextSlot=t.defineReactContext=void 0;const n=r(93849);function o(){return function(e){const t=e instanceof u?e.providedFrom:e,r=new u(t,e instanceof u?e:void 0);return{use:()=>r.getReact().useContext(r.initAndGetContext())(),contextSlot:r}}}let i;t.defineReactContext=o;const a=(e,t,r)=>{const n=n=>{var o;const a=e.getReact();i=i||a.createContext(null);const u=e.initAndGetContext(),s=a.useContext((null===(o=e.parentSlot)||void 0===o?void 0:o.initAndGetContext())||i),{value:l,disposers:f}=a.useMemo((()=>{const e=s?s():t();return[...r].reduce(((t,r)=>{t.value[r.featureName]||(t.value[r.featureName]={});const{value:o,dispose:i}=r.provide(n.params,e);return t.value[r.featureName][r.entryName]=o,i&&t.disposers.add(i),t}),{value:c(e),disposers:new Set})}),[s,n.params]);a.useEffect((()=>()=>{for(const e of f)e()}),[f]);const d=a.useCallback((()=>l),[l]);return a.createElement(u.Provider,{value:d},n.children)};return n.displayName="ReactSlotProvider",n},c=e=>Object.entries(e).reduce(((e,[t,r])=>(e[t]=Object.entries(r).reduce(((e,[t,r])=>(e[t]=r,e)),{}),e)),{});class u extends n.FeatureInput{constructor(e,t){super(e,e),this.parentSlot=t,this.__thisOrParents={},this.defineChildContext=()=>o()(this)}init(e){this.React=e}defineContext(){return new l(this.providedFrom,this)}defineGuiSlot(){return{slot:n.Slot.withType().defineEntity(this.providedFrom),use:()=>this.getReact().useContext(this.initAndGetContext())()}}[n.CREATE_RUNTIME](e){const t=new n.Registry;return{registry:t,definitionSlot:this,Provider:a(this,(()=>{const t={};for(const[r,n]of e.features)t[r.id]=n.api;return t}),t)}}[n.REGISTER_VALUE](e,t,r,o,i){if(!this.parentSlot&&!this.React){const{communication:t}=e.get(n.COM).api;if(t.getEnvironmentName()==this.providedFrom.env)throw new Error("React not inited for "+o+" "+i)}return r}getReact(){var e;return this.React||(null===(e=this.parentSlot)||void 0===e?void 0:e.getReact())}initAndGetContext(){return this.context=this.context||this.getReact().createContext((()=>({}))),this.context}}t.ContextSlot=u;class s{constructor(e,t){this.featureName=e,this.entryName=t}init(e){this.provider={provide:e,entryName:this.entryName,featureName:this.featureName}}}t.ContextField=s;class l extends n.FeatureInput{constructor(e,t){super(e,e),this.slot=t}[n.CREATE_RUNTIME](e,t,r){return new s(t,r)}[n.REGISTER_VALUE](e,t,r){if(!r.provider){const{api:{communication:t}}=e.get(n.COM);if(t.getEnvironmentName()==this.providedFrom.env)throw new Error("context field not inited "+r.featureName+" : "+r.entryName)}let o=!1;for(const[t,n]of e.features.entries()){for(const[e,i]of Object.entries(t.api))if(i===this.slot&&(o=!0,n.api[e].registry.register(r.provider)),o)break;if(o)break}if(!o)throw new Error("target slot not found");return r}}t.ContextEntryDefinition=l},10067:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(65174),t),n.__exportStar(r(18818),t),n.__exportStar(r(67968),t)},86420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainEnv=void 0;const n=r(93849);t.mainEnv=new n.SingleEndpointContextualEnvironment("main",[new n.Environment("window","window","single"),new n.Environment("electron-renderer","electron-renderer","single")])},67968:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.useMainContext=t.reactMainContext=void 0;const o=r(86420);n=(0,r(65174).defineReactContext)()(o.mainEnv),t.reactMainContext=n.contextSlot,t.useMainContext=n.use},18818:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5689:(e,t,r)=>{e.exports=r(21086)},44069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(93849),o=r(5689);t.default=new n.Feature({id:"storage",dependencies:[],api:{localStorageService:n.Service.withType().defineEntity(o.mainEnv),sessionStorageService:n.Service.withType().defineEntity(o.mainEnv)}})},28943:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),o=r(5689),i=n.__importDefault(r(44069)),a=r(34196);i.default.setup(o.mainEnv,(({},{})=>({sessionStorageService:new a.NativeStorage(sessionStorage),localStorageService:new a.NativeStorage(localStorage)})))},34196:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NativeStorage=t.createStorageKey=void 0;const n=r(93849);t.createStorageKey=(e,t)=>`WCS_STORAGE_${e}#${t}`,t.NativeStorage=class{constructor(e){this.nativeStorage=e,this.eventEmitter=new n.EventEmitter,this.on=(e,r,n)=>{this.eventEmitter.on((0,t.createStorageKey)(e,r),n)},this.off=(e,r,n)=>{this.eventEmitter.off((0,t.createStorageKey)(e,r),n)}}storeValue(e,r,n){this.nativeStorage.setItem((0,t.createStorageKey)(e,r),n),this.eventEmitter.emit((0,t.createStorageKey)(e,r),void 0)}getStoredValue(e,r){return this.nativeStorage.getItem((0,t.createStorageKey)(e,r))}clearStoredValue(e,r){this.nativeStorage.removeItem((0,t.createStorageKey)(e,r)),this.eventEmitter.emit((0,t.createStorageKey)(e,r),void 0)}}},5163:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__assign:()=>i,__asyncDelegator:()=>S,__asyncGenerator:()=>b,__asyncValues:()=>g,__await:()=>w,__awaiter:()=>l,__classPrivateFieldGet:()=>j,__classPrivateFieldSet:()=>P,__createBinding:()=>d,__decorate:()=>c,__exportStar:()=>p,__extends:()=>o,__generator:()=>f,__importDefault:()=>C,__importStar:()=>O,__makeTemplateObject:()=>x,__metadata:()=>s,__param:()=>u,__read:()=>y,__rest:()=>a,__spread:()=>h,__spreadArray:()=>m,__spreadArrays:()=>_,__values:()=>v});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}function m(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof w?Promise.resolve(r.value.v).then(u,s):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function S(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:w(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function g(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return E(t,e),t}function C(e){return e&&e.__esModule?e:{default:e}}function j(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function P(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}}}]);