(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[6415],{65247:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(5163),a=r(93849),o=s.__importDefault(r(51009)),d=s.__importDefault(r(2206)),l=s.__importDefault(r(7762)),p=s.__importDefault(r(94400)),c=new a.Feature({id:"css-modules-editing",dependencies:[o.default.asEntity,d.default.asEntity,l.default.asEntity,p.default.asEntity],api:{}});t.default=c},77225:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(5163),a=r(2206),o=r(51447),d=s.__importDefault(r(65247)),l=r(26034);d.default.setup(a.processingEnv,(({},{project:{fileManager:e},StylePanel:{styleEditingSlot:t},simpleAST:{idService:r,sourceIdResource:s},CSSModules:{afterCompilationSlot:a}})=>{t.register({libraryName:"cssModules",isApplicable:e=>e.endsWith(".module.css"),service:new o.CSSModulesEditing(e,"css modules",r)}),a.register({editing:!0,transform:(e,t)=>{const a=r.getLanguage(".css");if(!a)throw new Error("Language plugin for CSS not found");return(0,l.getAdderOfCustomPropertyIds)(s,a)(e,t)}})}))},51447:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSSModulesEditing=void 0;const s=r(26034),a=r(86577),o=r(9240),d=r(73971);class l extends s.CSSEditing{constructor(e,t,r){super(e,t,r)}shouldImportNewClasses(e){return!0}getDefinedClasses(e){return super.getDefinedClasses(e).map((t=>(0,a.importedClassUsage)({className:t.className,importedFrom:e,targetClassName:(0,d.generateScopedName)(t.className,e)})))}parseJSClassImport(e,t){if(!(0,o.isNodeOfKind)("property-access",e))return null;const r=e.accessPath[0].accessKey.toString(),s=t(e.reference.targetFile);return(0,a.importedClassUsage)({className:r,importedFrom:s,targetClassName:(0,d.generateScopedName)(r,s)})}writeJSClassImport(e,t){return(0,o.createPropertyAccessNode)({astNodeId:t.generateId(),reference:(0,o.createFileReferenceNode)({astNodeId:t.generateId(),targetExport:"default",targetFile:t.toLocalPath(e.importedFrom)}),accessPath:[(0,o.createPropertyAccessIndexNode)({astNodeId:t.generateId(),accessKey:e.className})]})}}t.CSSModulesEditing=l},53509:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(5163).__exportStar(r(98143),t)},98143:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateScopedName=void 0,t.generateScopedName=(e,t)=>`${(e=>e.replace(/\\/g,"_").replace(/\//g,"_").replace(/\./g,"_").replace(/:/g,"_").replace(/@/g,"_"))(t)}__${e}`},73971:(e,t,r)=>{e.exports=r(53509)},54621:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s=r(5163);var a=r(13111);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.__importDefault(a).default}}),s.__exportStar(r(13111),t)},1180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(5163);s.__exportStar(r(58270),t),s.__exportStar(r(40787),t),s.__exportStar(r(67623),t),s.__exportStar(r(79133),t),s.__exportStar(r(73974),t),s.__exportStar(r(35423),t),s.__exportStar(r(72251),t),s.__exportStar(r(34997),t),s.__exportStar(r(57759),t),s.__exportStar(r(7401),t),s.__exportStar(r(79169),t),s.__exportStar(r(20251),t),s.__exportStar(r(92160),t),s.__exportStar(r(94845),t),s.__exportStar(r(639),t),s.__exportStar(r(58851),t),s.__exportStar(r(63489),t),s.__exportStar(r(384),t)},51009:(e,t,r)=>{e.exports=r(54621)},26034:(e,t,r)=>{e.exports=r(1180)},86577:(e,t,r)=>{e.exports=r(68855)}}]);