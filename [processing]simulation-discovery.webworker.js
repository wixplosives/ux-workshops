(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[7914],{56830:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(93849),s=n.__importStar(i(2206)),r=n.__importDefault(i(58729));t.default=new o.Feature({id:"discovery",dependencies:[s.default.asEntity,r.default.asEntity],api:{extensionsConfig:o.Slot.withType().defineEntity(s.processingEnv)}})},8221:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=i(5163);var o=i(56830);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}}),n.__exportStar(i(56830),t)},34302:(e,t,i)=>{e.exports=i(8221)},59178:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(93849),s=n.__importStar(i(2206)),r=n.__importStar(i(32510));t.default=new o.Feature({id:"fileAssets",dependencies:[s.default.asEntity,r.default.asEntity],api:{fileTaggerSlots:o.Slot.withType().defineEntity(s.processingEnv),assets:(0,r.defineComputedResource)().defineEntity(s.processingEnv)}})},18380:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=i(5163);var o=i(59178);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}}),n.__exportStar(i(59178),t)},58729:(e,t,i)=>{e.exports=i(18380)},43934:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=i(5163);n.__exportStar(i(31434),t);var o=i(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},2206:(e,t,i)=>{e.exports=i(43934)},9240:(e,t,i)=>{e.exports=i(46726)},63824:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SIM_EXTENSIONS=void 0;const n=i(5163),o=i(93849),s=n.__importDefault(i(34302)),r=n.__importDefault(i(2206)),a=n.__importDefault(i(58729));t.DEFAULT_SIM_EXTENSIONS=[".sim.ts",".sim.tsx"];const u=r.default.api.pluggableProjectConfig.entry(t.DEFAULT_SIM_EXTENSIONS,"simulationExtensions");t.default=new o.Feature({id:"simulationDiscovery",dependencies:[s.default.asEntity,r.default.asEntity,a.default.asEntity],api:{simulationExtensionsConfig:u}})},10387:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163),o=i(2206),s=i(14495),r=n.__importStar(i(63824));r.default.setup(o.processingEnv,(({simulationExtensionsConfig:e},{discovery:{extensionsConfig:t},project:{pluggableProjectConfig:i}})=>{const n=i.get(o.PROJECT_CONFIG_NAME),a=n.isValid()?n.get(e):r.DEFAULT_SIM_EXTENSIONS;t.register({tag:s.SIMULATION_FILE_TAG,extensions:a})}))},14495:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(5163);n.__exportStar(i(37050),t),n.__exportStar(i(92704),t)},37050:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simulationPlugin=t.isSimulationNode=void 0;const n=i(9240);t.isSimulationNode=e=>!!e&&(0,n.isNodeOfKind)("simulation",e),t.simulationPlugin=(0,n.packPlugin)()({kind:"simulation",modifiers:{},createBlank:e=>({kind:"simulation",astNodeId:e(),data:n.objectPlugin.createBlank(e)}),getNodeChildren:e=>[e.data],replaceChild:(e,t,i)=>{if(e.data.astNodeId===t)return{...e,data:i};throw new Error("child not found")}})},92704:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SIMULATION_FILE_TAG=void 0,t.SIMULATION_FILE_TAG="sim-file-tag"}}]);