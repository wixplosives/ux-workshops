(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[2373],{45227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),i=r(93849),s=n.__importDefault(r(65502)),o=n.__importDefault(r(81156)),u=n.__importDefault(r(48785)),a=n.__importDefault(r(93208)),c=r(5689),l=r(4511),d=n.__importDefault(r(5737)),f=n.__importStar(r(32510)),p=n.__importStar(r(59995));t.default=new i.Feature({id:"computedStyles",dependencies:[d.default.asEntity,s.default.asEntity,o.default.asEntity,u.default.asEntity,f.default.asEntity,a.default.asEntity,p.default.asEntity],api:{computedStyleValues:(0,f.defineOneWayResource)().defineEntity(l.previewEnv),overriddenStates:(0,f.defineOneWayResource)().defineEntity(c.mainEnv),declarationActionMenuSlot:i.Slot.withType().defineEntity(c.mainEnv),declarationActionSlot:i.Slot.withType().defineEntity(c.mainEnv),onStyleOrDomChangeSlot:i.Slot.withType().defineEntity(l.previewEnv),visualizerSlot:i.Slot.withType().defineEntity(c.mainEnv),useInspectView:(0,p.defineGlobalStateResource)(),useSelectedRule:(0,p.defineGlobalStateResource)()}})},73902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),i=r(4511),s=r(48823),o=r(359),u=r(28534),a=r(18923),c=r(59855),l=n.__importDefault(r(45227)),d=r(91570),f=r(60814),p=r(33382),y=r(83203),v=e=>{const t=e.style.getPropertyValue(a.RULE_ID_DECL_END);return(0,a.parseStringRuleId)(t)};l.default.setup(i.previewEnv,(({overriddenStates:e,onStyleOrDomChangeSlot:t,computedStyleValues:r,run:n},{editing:{domStructureInspector:i},Resources:{syncer:a}})=>{const l=new s.InlineStyleGetter(i.getStructure()),h=e.consume({}).get(a.id);n((async()=>{await h.ready,new p.NativeStateOverrider(h,i)}));const m=(0,o.defaultGetInlineStyle)(l.getDefinedStyleKeys);let S=[];const _=e=>{const t=i.getFrameworkStructureById(e);if(t){const e=t.node,r=new Map,n=e instanceof Element&&window.getComputedStyle(e)||void 0;if(e&&e instanceof Element){const t=(0,o.getComputedStyleHierarchy)({rules:S,node:e,getInlineStyle:m,resMap:r,domStructureInspector:i});return{value:{declarationOrder:Object.keys(t).reduce(((e,r)=>{const i=null==n?void 0:n[r];return e[r]=t[r].map((e=>({value:e.value,computedValue:i,varValue:e.varValue,important:e.important,inheritedFrom:e.inheritedFrom,inherited:e.inherited,selector:"selector"===e.selector.kind?v(e.selector.rule):c.inlineStyle}))),e}),{}),ruleOrder:S.map((e=>v(e.rule)))}}}}return{value:{ruleOrder:S.map((e=>v(e.rule)))}}},g=r.provide({handler:{provide:_}}),b=new d.Debouncer((()=>{l.setStructure(i.getStructure()),(()=>{const e=(0,u.getDocumentRules)();S=(0,o.getProcessedRules)(e)})(),function(){const e=g.getOpenResources();for(const t of e){const e=(0,f.deserializeId)(t),r=g.get(e),n=_(e),i=r.getLatest();JSON.stringify(n.value)!==JSON.stringify(i)&&r.applyChange((0,f.fullChange)(n.value))}}();for(const e of t)e()}),100,1e3),{emitter:E}=(0,y.initDOMHeadStyleChanges)();return E.subscribe("change",(()=>{b.trigger().catch((e=>{throw e}))})),i.subscribe((()=>{b.trigger().catch((e=>{throw e}))})),h.subscribe((()=>{b.trigger().catch((e=>{throw e}))})),{computedStyleValues:g}}))},48823:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InlineStyleGetter=void 0;const n=r(91570);t.InlineStyleGetter=class{constructor(e){this.structure=e,this.getDefinedStyleKeys=e=>{var t;const r=this.scannedStruct.get(e);if(!r)return{};const i=r.components.find((e=>"component"===e.kind&&"string"==typeof e.component)),s=null===(t=null==i?void 0:i.props)||void 0===t?void 0:t.style;return s?Object.entries(s).reduce(((e,[t,r])=>(e[(0,n.toKebabCase)(t)]=r,e)),{}):{}},this.scanStruct()}scanStruct(){if(this.scannedStruct=new Map,this.structure)for(const e of this.structure)this.scanStructRecurse(e)}scanStructRecurse(e){e.node&&this.scannedStruct.set(e.node,e);for(const t of e.children)this.scanStructRecurse(t)}setStructure(e){this.structure=e,this.scanStruct()}}},83203:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.detectDOMStyleChanges=t.initDOMHeadStyleChanges=void 0;const n=r(93849),i=r(91570);t.initDOMHeadStyleChanges=function(e){const t=new n.EventEmitter,r=e?new i.Debouncer((()=>t.emit("change",null)),e.waitTime,e.maxWaitTime):void 0,s=new MutationObserver((e=>{!function(e){let n=!1;for(const t of e)"childList"===t.type&&(n=!0);n&&(r?r.trigger().catch((e=>{throw e})):t.emit("change",null))}(e)}));return s.observe(document.head,{childList:!0}),{emitter:t,dispose(){t.clear(),s.disconnect()}}},t.detectDOMStyleChanges=function(e){const t=new n.EventEmitter,r=new MutationObserver((e=>{t.emit("change",null)}));return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),{emitter:t,dispose(){t.clear(),r.disconnect()}}}},33382:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NativeStateOverrider=void 0;const n=r(63015),i=r(59855);t.NativeStateOverrider=class{constructor(e,t){this.overrides=e,this.domStructure=t,this.updateOverrides=()=>{const e=this.overrides.getLatest(),t={};for(const r of Object.keys(e)){const s=(0,n.parseNodeAstKey)(r);t[s.filePath]||(t[s.filePath]=this.domStructure.getComps(s.filePath)),t[s.filePath].filter((e=>{var t;return(null===(t=e.comp.location)||void 0===t?void 0:t.astNodeId)===s.astNodeId})).forEach((t=>{const n=t.structure.node;if(n instanceof Element)for(const t of Object.keys(e[r])){const s=i.overrideStatePrefix+"-"+t,o=e[r][t];o&&!n.hasAttribute(s)&&n.setAttribute(s,"true"),!o&&n.hasAttribute(s)&&n.removeAttribute(s)}}))}},e.subscribe(this.updateOverrides),t.subscribe(this.updateOverrides)}}},11350:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),i=r(93849),s=n.__importStar(r(2206)),o=n.__importDefault(r(25447)),u=n.__importDefault(r(83341)),a=n.__importDefault(r(93104));t.default=new i.Feature({id:"css",dependencies:[s.default.asEntity,u.default.asEntity,o.default.asEntity,a.default.asEntity],api:{postCompilationSlot:i.Slot.withType().defineEntity(s.processingEnv)}})},54611:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(11350);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(i).default}})},5737:(e,t,r)=>{e.exports=r(54611)},20183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);var i=r(89706);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(i).default}}),n.__exportStar(r(89706),t)},48785:(e,t,r)=>{e.exports=r(20183)},63015:(e,t,r)=>{e.exports=r(17109)}}]);