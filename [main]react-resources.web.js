(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[6857],{88425:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});const u=s(5163),t=s(5689),c=s(40386);u.__importDefault(s(36041)).default.setup(t.mainEnv,(({onDispose:e})=>({createStateResource(r){const s=(0,c.createJSONResource)(r);s.use(this),e((()=>{s.release(this)}));const u=e=>(0,c.useResourceState)({resource:s,enabled:e,defaultValue:r});return u.resource=s,u}})))},78432:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.useResources=r.useResource=r.useResourceApplyChange=r.useResourceValidity=r.useResourceValue=r.useResourceState=r.useApplyChange=r.useValidity=r.useValue=r.useResourceSubscriber=r.useHoldResource=r.useResourceInstance=void 0;const u=s(87363),t=s(93849),c=s(60814),n=s(69202);function a({resource:e,defaultValue:r,enabled:s=!0}){const c=(0,n.useForceUpdate)(),a=(0,u.useRef)(!1),o=(0,n.useLatest)(s),l=(0,u.useCallback)((()=>{o.current&&!a.current&&c()}),[o,c]);return(0,u.useEffect)((()=>(e&&e.subscribe(l),(null==e?void 0:e.ready)&&e.ready.then(l).catch(t.reportError),()=>{null==e||e.unsubscribe(l)})),[l,e]),(0,u.useEffect)((()=>()=>{a.current=!0}),[]),function(e,r){return e&&e.isReady()&&e.isValid()?e.getLatest():r}(e,r)}function o({resource:e,enabled:r=!0}){const[s,t]=(0,u.useState)(),c=(0,u.useCallback)((()=>{if(r){const r=e&&e.isReady()?e.isValid():void 0;t(r)}}),[e,r]);return(0,u.useEffect)((()=>{var s;if(!e)return void(r&&t(void 0));let u=!1;const n=()=>{u||c()};return e.subscribe(n),n(),null===(s=e.ready)||void 0===s||s.then(n).catch(n),()=>{u=!0,e.unsubscribe(n)}}),[e,c,r]),s}function l(e){return(0,u.useCallback)((r=>{null==e||e.applyChange(r)}),[e])}function d(e){return!!e.ids}r.useResourceInstance=({resourceManager:e,resourceId:r,enabled:s=!0})=>{const t=(0,u.useMemo)((()=>({})),[]),c=(0,u.useRef)({resourceManager:e,resourceId:r}),n=(0,u.useMemo)((()=>{if(void 0===r)return;const{current:u}=c;return function(e,r,s){return e||r.resourceId!==s.resourceId||r.resourceManager!==s.resourceManager}(s,u,{resourceManager:e,resourceId:r})?e.get(r,t):u.resourceInstance}),[r,s,e,t]);return c.current={resourceManager:e,resourceId:r,resourceInstance:n},(0,u.useEffect)((()=>()=>null==n?void 0:n.release(t)),[n,t]),n},r.useHoldResource=e=>{(0,u.useEffect)((()=>{const r={};return e.use(r),()=>{e.release(r)}}),[e])},r.useResourceSubscriber=(e,r)=>{(0,u.useEffect)((()=>{const s=()=>r(e.getLatest());return e.subscribe(s),()=>e.unsubscribe(s)}),[r,e])},r.useValue=a,r.useValidity=o,r.useApplyChange=l,r.useResourceState=function({resource:e,enabled:r,defaultValue:s}){const t=a({resource:e,enabled:r,defaultValue:(null==e?void 0:e.getLatest())||s}),n=l(e),o=(0,u.useCallback)((e=>n((0,c.fullChange)(e))),[n]);return[t,o,e]},r.useResourceValue=function({resourceManager:e,resourceId:s,defaultValue:u,enabled:t=!0}){return a({resource:(0,r.useResourceInstance)({resourceManager:e,resourceId:s,enabled:t}),defaultValue:u,enabled:t})},r.useResourceValidity=function({resourceManager:e,resourceId:s,enabled:u=!0}){return o({resource:(0,r.useResourceInstance)({resourceManager:e,resourceId:s,enabled:u}),enabled:u})},r.useResourceApplyChange=function({resourceManager:e,resourceId:s}){return l((0,r.useResourceInstance)({resourceManager:e,resourceId:s}))},r.useResource=function(e,r){const[s,t]=(0,u.useState)(r);return(0,u.useEffect)((()=>{var s;let u=!1;if(!e)return;const c=()=>{u||(e.isReady()&&e.isValid()?t(e.getLatest()):t(r))};return e.subscribe(c),c(),null===(s=e.ready)||void 0===s||s.then(c).catch(c),()=>{u=!0,e.unsubscribe(c)}}),[e,r]),e&&e.isReady()?e.getLatest():s};const i=new WeakMap,f=e=>{const r=i.get(e);if(r)for(const s of Object.keys(r))for(const u of Object.keys(r[s]))r[s][u].resource.isReady()&&r[s][u].resource.release(e)},b=(e,r,s,u,t)=>{const c=r.getType();r.isReady()||t.push(r.ready),e[c]||(e[c]={}),e[c][r.getSerializedId()]={resource:r,field:s,isInnerRecord:u}},g={valid:!1,message:"Loading"},R=(e,r)=>{for(const s of Object.keys(e))if(r[s])for(const u of r[s])if(e[s][u])return!0;return!1};r.useResources=function(e,r=!0){const s=(e=>JSON.stringify(e,((e,r)=>r instanceof c.ResourceManager?r.getTypeName():r)))(e),[n]=(0,u.useState)({cleanupRequested:!1,enabled:r,hasChanges:!1,used:new Set});n.enabled=r;const[a,o]=(0,u.useState)(0),l=Object.keys(e),p=l.length?e[l[0]].resourceManager.getBatcher():void 0,y=i.get(n)||{},h=(0,u.useCallback)((e=>{if(!n.enabled)return;const r=R(y,e.changed),s=R(y,e.changedStatus);(r||s)&&o(Math.random())}),[y,n]);return i.has(n)||(i.set(n,y),p.subscribe(h)),(0,u.useMemo)((()=>{const r=[];n.enabled&&(p.batchAll((()=>{const s=new Set;for(const[u,t]of Object.entries(e))if(d(t))for(const e of t.ids){const c=t.resourceManager.get(e,n);s.add(c),b(y,c,u,!0,r)}else if(t.id){const e=t.resourceManager.get(t.id,n);s.add(e),b(y,e,u,!0,r)}for(const e of Object.values(y))for(const[r,u]of Object.entries(e))s.has(u.resource)||(u.resource.isReady()?(u.resource.release(n),delete e[r]):u.resource.ready.then((()=>{n.used.has(u.resource)||(u.resource.release(n),delete e[r])})).catch(t.reportError));n.used=s})),r.length&&n.enabled&&Promise.all(r).then((e=>{n.cleanupRequested?f(n):o(Math.random())})).catch((e=>{throw e})))}),[s,n,p,y]),(0,u.useEffect)((()=>()=>{f(n),p.unsubscribe(h),n.cleanupRequested=!0}),[n]),(0,u.useMemo)((()=>{return Object.keys(e).reduce(((s,u)=>{const t=e[u];if(d(t))s[u]={getResource:e=>r(u,e),getValue(e){const s=r(u,e);return s&&s.isValid()?s.getLatest():t.defaultValue},getStatus(e){const s=r(u,e);return s&&s.isReady()?s.getStatus():g}};else{const e=r(u,t.id);s[u]={value:e&&e.isValid()?e.getLatest():t.defaultValue,status:e?e.getStatus():g,resource:e}}return s}),{});function r(r,s){const u=e[r],t=d(u)?s:u.id;if(!t||!y[u.resourceManager.getTypeName()])return;const n=y[u.resourceManager.getTypeName()][(0,c.serializeId)(t)];return n&&n.resource&&n.resource.isReady()?n.resource:void 0}}),[a,r,s])}},40386:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});const u=s(5163);u.__exportStar(s(78432),r),u.__exportStar(s(23496),r)},23496:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createJSONResource=void 0;const u=s(60814);r.createJSONResource=function(e){return new u.JSONResource("data",{provider:{provide:()=>({value:e})},resourceType:"state-resource",batcher:new u.Batcher})}},60814:(e,r,s)=>{e.exports=s(73858)}}]);