(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[3849],{43934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);n.__exportStar(r(31434),t);var i=r(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(i).default}})},2206:(e,t,r)=>{e.exports=r(43934)},89102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(93849),i=r(2206);t.default=new n.Feature({id:"userApplicationServer",dependencies:[],api:{userApplicationServerInterface:n.Service.withType().defineEntity(i.processingEnv).allowRemoteAccess(),serverRootSlot:n.Slot.withType().defineEntity(i.processingEnv),applicationHandlerSlot:n.Slot.withType().defineEntity(i.processingEnv)},context:{serverInitializer:i.processingEnv.withContext()}})},65741:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163).__importDefault(r(89102)),i=r(2206);n.default.setupContext(i.processingEnv,"serverInitializer",(()=>({fn:()=>({externalInterface:{exists:()=>!1,getBaseUrl:()=>Promise.resolve(void 0),isReady:()=>Promise.resolve(void 0)}})})))}}]);