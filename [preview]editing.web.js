(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[9897],{34842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>n,cssStates:()=>a,keyframes:()=>s,namespace:()=>o,st:()=>l,stVars:()=>i,style:()=>c,vars:()=>u});const o="o474",n={root:"s1859",icon:"s1860"},s={},i={},u={},a=r.stc.bind(null,o),c=r.sts.bind(null,o),l=c},79944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(5163),n=r(4511),s=r(84084),i=r(24886),u=o.__importStar(r(30177)),a=r(46437),c=o.__importStar(r(26561)),l=r(72447),d=o.__importDefault(r(89706)),p=r(60814),m=o.__importDefault(r(78435));d.default.setup(n.previewEnv,(({onDispose:e,run:t,domPositions:r,domStructure:o},{simulationPreview:{injectedPreviewLibraries:n,consoleResourceManagerPreview:f,simulationElementRects:v,previewController:h},COM:{communication:g}})=>{n.register("@wixc3/framework-spies-runtime",u),n.register("@wixc3/framework-spies-runtime/jsx-runtime",u),n.register("@wixc3/framework-spies-runtime/jsx-dev-runtime",u),n.register("@wixc3/editing-feature/dist/preview/error-renderer",c);const y=g.getEnvironmentId(),w=new a.DomStructureInspector(new i.ReactFrameWorkSpy),b=v.get({},d.default);let C=!1;const S=()=>{const e=T.get({}),t=e.getLatest(),r=w.getDomPositions();(0,m.default)(r,t)||e.applyChange((0,p.fullChange)(r))},N=()=>{window.requestIdleCallback(S,{timeout:2e3})},T=r.provide({handler:{provide:()=>(C||w.subscribe(N),C=!0,{value:w.getDomPositions()}),dispose:()=>{w.unsubscribe(N)}}});let _=!1;const k=o.provide({handler:{provide:()=>(_||w.subscribe(I),_=!0,{value:w.getDomTree()}),dispose:()=>{_=!1,w.unsubscribe(I)}}}),I=()=>{const e=k.get({}),t=w.getDomTree(),r=e.getLatest();(0,m.default)(t,r)||e.applyChange((0,p.fullChange)(t))};function x(){const e=f.get(y),t=w.getTreeErrors().flatMap(l.safeModeErrorToStrings);for(const r of t)e.sendMessage(s.CodeExecutionMessageType.consoleError,r)}b.subscribe(S),t((()=>{w.subscribe(x)}));const E=e=>{"afterRender"===e.type&&w.onTreeUpdate()};return h.subscribe(E),e((()=>{h.unsubscribe(E),w.unsubscribe(x)})),{domStructureInspector:w,domPositions:T,domStructure:k}}))},21568:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DomStructureInspector=t.getValueType=void 0;const o=r(91570),n="unknown";t.getValueType=e=>{const t=typeof e;if("object"===t){if(null===e)return"null";if(Array.isArray(e))return"array"}return t};const s=(()=>{let e=0;return()=>(e++).toString()})(),i=new WeakMap,u=e=>{const t=e.components.map((e=>{var t,r,s,i;return{...e,location:{...e.location,fileName:(0,o.formatToOSpaths)(null!==(r=null===(t=e.location)||void 0===t?void 0:t.fileName)&&void 0!==r?r:n),astNodeId:null!==(i=null===(s=e.location)||void 0===s?void 0:s.astNodeId)&&void 0!==i?i:n}}})),r=e.children.map((e=>u(e)));return{...e,components:t,children:r}};t.DomStructureInspector=class{constructor(e){this.frameworkSpy=e,this.idToFrameworkStructure={},this.listeners=new Set,this.getCompNodeTree=(e,t,r,u)=>{var a,l;const d=null!==(l=e.node?null===(a=i.get(e.node))||void 0===a?void 0:a.id:void 0)&&void 0!==l?l:s(),p=e.children.map(((e,o)=>this.getCompNodeTree(e,[...t,o],r,u))),m=e.error?(f=e.error,JSON.parse(JSON.stringify(f,((e,t)=>t instanceof Error?(0,o.errorToPlainObject)(t):t),4))):void 0;var f;const v={id:d,path:t,error:m,hasErrorInDescendants:p.some((e=>e.error||e.hasErrorInDescendants)),children:p,components:e.components.map((t=>{var r,s,i,u,a,l,d;const p={fileName:(null===(r=t.location)||void 0===r?void 0:r.fileName)?(0,o.formatToOSpaths)(t.location.fileName):n,astNodeId:null!==(i=null===(s=t.location)||void 0===s?void 0:s.astNodeId)&&void 0!==i?i:n};switch(t.kind){case"fragment":return{location:p,type:"fragment",numberOfChildren:t.numberOfChildren};case"text":return{location:p,type:"text",value:(null===(u=e.node)||void 0===u?void 0:u.textContent)||""};case"property-expression":return{location:p,type:"prop-expression",propertyName:t.propertyName,...c(t.value)};case"children":return{location:p,type:"child-expression",...c(t.value)};case"spread":{const e=t.value;return"object"!=typeof e?{location:p,type:"spread-expression",properties:{}}:{location:p,type:"spread-expression",properties:Object.entries(e).reduce(((e,[t,r])=>(e[t]=c(r),e)),{})}}case"component":{if("string"!=typeof t.component){const e={location:p,type:"component"};return(null===(a=t.component)||void 0===a?void 0:a.displayName)&&"string"==typeof(null===(l=t.component)||void 0===l?void 0:l.displayName)&&(e.displayName=t.component.displayName),e}const r=function(e){const t=e&&e instanceof Element?e.attributes:void 0;if(!t)return{};const r={};for(let e=0;e<t.length;e++){const o=t.item(e);o&&(r[o.name]=o.value)}return r}(e.node);return{type:"native",location:p,tagName:(null===(d=e.node)||void 0===d?void 0:d.nodeName.toLowerCase())||"unknown",attributes:r}}}})).reverse()};return r.set(e,v),u[v.id]=e,e.node&&i.set(e.node,v),v},this.onTreeUpdate=()=>{var e;const t=null===(e=this.frameworkSpy.getCurrentStructure())||void 0===e?void 0:e.map((e=>u(e)));t&&(!function(e){for(const[t,r]of e)i.has(t)&&(i.set(r,i.get(t)),i.delete(t))}(d(t,this.structure)),this.structure=t,this.structureInfo=this.calculateDomTree(),this.listeners.forEach((e=>e())))},e.subscribe((()=>{this.onTreeUpdate()}))}getStructure(){return this.structure}getDomTree(){return this.structureInfo}getFrameworkStructureById(e){return this.idToFrameworkStructure[e]}getStructureInfoByElement(e){return i.get(e)}getStructureIdByElement(e){var t;return null===(t=this.getStructureInfoByElement(e))||void 0===t?void 0:t.id}getComps(e){if(!this.structure)return[];const t=this.structure[0];return this.getCompsInternal(t,e)}getCompsInternal(e,t){return e.components.filter((e=>{var r;return(null===(r=e.location)||void 0===r?void 0:r.fileName)===t})).map((t=>({comp:t,structure:e}))).concat(...e.children.map((e=>this.getCompsInternal(e,t))))}getDomPositions(){return Object.entries(this.idToFrameworkStructure).reduce(((e,[t,r])=>(r.node&&(e[t]=this.getNodePos(r.node)),e)),{})}getNodePos(e){if(e instanceof Text){const t=document.createRange();t.selectNode(e);const r=t.getBoundingClientRect();return t.detach(),r}return e.getBoundingClientRect()}subscribe(e){this.listeners.add(e)}unsubscribe(e){this.listeners.delete(e)}initTreeIfNeeded(){this.structure||(this.structure=(this.frameworkSpy.getCurrentStructure()||[]).map((e=>u(e))),this.structureInfo=this.calculateDomTree())}getTreeErrors(){return Object.values(this.idToFrameworkStructure).filter((e=>Boolean(e.error))).map((e=>e.error))}calculateDomTree(){return this.frameworkNodeToInfoNodeMap=new Map,this.idToFrameworkStructure={},this.structure?this.structure.map(((e,t)=>this.getCompNodeTree(e,[t],this.frameworkNodeToInfoNodeMap,this.idToFrameworkStructure))):void 0}};const a=e=>e.components.map((({location:e})=>{var t,r;return`${null!==(t=null==e?void 0:e.fileName)&&void 0!==t?t:n}*${null!==(r=null==e?void 0:e.astNodeId)&&void 0!==r?r:n}`})).join("**"),c=e=>{const r=(0,t.getValueType)(e);return"string"===r||"number"===r||"boolean"===r||"null"===r||"undefined"===r?{valueType:r,expressionValue:e}:{valueType:r}},l=()=>{const e=new Set;return t=>{let r=0;for(;e.has(t+"_"+r);)r+=1;return e.add(t+"_"+r),t+"_"+r}};function d(e,t=[],r=new Map){const o=l(),n=l(),s=t.reduce(((e,t)=>(e[o(a(t))]=t,e)),{});for(const t of e){const e=s[n(a(t))];e&&(e.node&&t.node&&e.node!==t.node&&r.set(e.node,t.node),d(t.children,e.children,r))}return r}},26561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createErrorRenderer=void 0;const o=r(34842);t.createErrorRenderer=e=>{const t=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M8.08659624,16.8128987 C9.02445082,17.5561586 10.2103931,18 11.5,18 C14.5375661,18 17,15.5375661 17,12.5 C17,11.2103931 16.5561586,10.0244508 15.8128987,9.08659624 L8.08659624,16.8128987 Z M7.36202553,16.1232558 L15.1232558,8.36202553 C14.1555486,7.51400473 12.8878004,7 11.5,7 C8.46243388,7 6,9.46243388 6,12.5 C6,13.8878004 6.51400473,15.1555486 7.36202553,16.1232558 Z M11.5,19 C7.91014913,19 5,16.0898509 5,12.5 C5,8.91014913 7.91014913,6 11.5,6 C15.0898509,6 18,8.91014913 18,12.5 C18,16.0898509 15.0898509,19 11.5,19 Z"}));return function(){return e.createElement("div",{className:o.classes.root},e.createElement(t,{className:o.classes.icon}),"Error")}}},46437:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(5163);o.__exportStar(r(21568),t),o.__exportStar(r(26561),t)},9029:(e,t,r)=>{e.exports=r(10067)}}]);