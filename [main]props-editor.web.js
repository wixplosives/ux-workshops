(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[1160],{24939:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o242",o={root:"s1302",emptyState:"s1301"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},53293:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o486",o={root:"s1887",paragraph:"s1888",icon:"s1889",name:"s1890",type:"s1891",description:"s1892"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},21498:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o23",o={root:"s277"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},98970:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o347",o={root:"s1531"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},7770:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o425",o={root:"s1528",title:"s1529",content:"s1530",linkIcon:"s1780",anchor:"s1781",childrenWrapper:"s1782"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},68118:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>l,keyframes:()=>i,namespace:()=>a,st:()=>c,stVars:()=>n,style:()=>d,vars:()=>r});const a="o352",o={root:"s1542"},i={},n={},r={},l=s.stc.bind(null,a),d=s.sts.bind(null,a),c=d},20183:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=s(5163);var o=s(89706);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(o).default}}),a.__exportStar(s(89706),t)},48785:(e,t,s)=>{e.exports=s(20183)},59949:(e,t,s)=>{e.exports=s(46342)},63015:(e,t,s)=>{e.exports=s(17109)},51482:function(e,t,s){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PROPS_EDITOR_FEATURE_ID=t.default=void 0;var o=s(12246);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}}),Object.defineProperty(t,"PROPS_EDITOR_FEATURE_ID",{enumerable:!0,get:function(){return o.PROPS_EDITOR_FEATURE_ID}})},12246:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PROPS_EDITOR_FEATURE_ID=void 0;const a=s(5163),o=a.__importDefault(s(56071)),i=s(93849),n=a.__importDefault(s(65502)),r=a.__importDefault(s(4024)),l=a.__importDefault(s(94400)),d=a.__importDefault(s(93208)),c=a.__importDefault(s(45463)),u=a.__importDefault(s(48785)),p=a.__importDefault(s(2206)),m=a.__importDefault(s(96996)),f=a.__importDefault(s(40954));t.PROPS_EDITOR_FEATURE_ID="props-editor",t.default=new i.Feature({id:t.PROPS_EDITOR_FEATURE_ID,dependencies:[o.default.asEntity,n.default.asEntity,r.default.asEntity,d.default.asEntity,l.default.asEntity,c.default.asEntity,u.default.asEntity,p.default.asEntity,m.default.asEntity,f.default.asEntity],api:{}})},26351:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163),o=a.__importDefault(s(87363)),i=s(5689),n=a.__importDefault(s(12246)),r=s(87172),l=s(9240),d=s(81862),c=s(16042),u=s(78505),p=s(59949),m=s(69202),f=s(25865),S=s(2623),g=s(92613),v=s(78406),_=s(63015),E=s(23766),P=s(91973);n.default.setup(i.mainEnv,(({},{simpleAST:{simpleASTMain:e,simpleASTPluginRepo:t,idGenerator:s,codeService:a,simpleASTDiagnosticsMain:i,sourceIdResourceMain:n},editing:{treeItemRenderer:y},simulation:{rightBarSlot:h},simulationEnvEditor:{envPanelComponentsService:b,canvasSchema:R,windowSchema:I},codeViews:{componentsRepoService:N,codeViewsConfig:A},symbolSchemaExtract:{refSchemaManagerMain:M,simpleAstNodeSchemaManagerMain:O},simulationSuggestions:{createSimulationSuggestionsApi:D}})=>{const C=new r.ComponentsRepo(N.defaultVisualizer,[{name:"jsx-element",component:r.JsxElementVisualizer,predicate:e=>"jsx-element"===(null==e?void 0:e.kind),astPlugin:l.jsxPlugin},...N.visualizers.filter((e=>"string"!==e.name&&"boolean"!==e.name)),{name:"string",component:r.StringVisualizer,predicate:(e,t)=>e&&(0,l.isNodeOfKind)("jsx-prop",e)&&"string"==typeof e.value||"string"===(null==e?void 0:e.kind)||!e&&"string"===(null==t?void 0:t.type),astPlugin:l.stringPlugin},{name:"boolean",component:r.BooleanVisualizer,predicate:(e,t)=>e&&(0,l.isNodeOfKind)("jsx-prop",e)&&!0===e.value||"boolean"===(null==e?void 0:e.kind)||!e&&"boolean"===(null==t?void 0:t.type),astPlugin:l.booleanPlugin}]);h.register({sectionId:"component-properties",headerComponent:e=>o.default.createElement(p.ContextualPanelWrapper,{overlayId:_.CLASS_MANAGEMENT,visualizers:y,...e}),title:v.content.panel.title,tooltip:v.content.panel.tooltip,Component:r=>{var l,m,v;const[_,y]=r.componentRef.split("#"),h=(0,c.useVisibility)(),{lastSelectionScope:N}=(0,d.useElementsSelection)({enabled:h}),{astNodeIdToItemMapping:V,domNodeIdToItemMapping:T}=(0,E.useElementsTree)({enabled:h}),j=(0,p.useSelectionSchema)(),k=(0,P.getTreeItemByDomIdOrAstNodeId)(null==N?void 0:N.selection,V,T);return!(null==N?void 0:N.selection)||k&&(0,p.shouldHideTreeNode)(k,!1)?o.default.createElement(S.Placeholder,null):(null===(l=null==N?void 0:N.selection)||void 0===l?void 0:l.domNodeId)===g.EditorComponents.canvas||(null===(m=null==N?void 0:N.selection)||void 0===m?void 0:m.domNodeId)===g.EditorComponents.window?o.default.createElement(u.SimulationEnvEditor,{componentsRepo:b,idGenerator:s,simManager:r.simManager,simpleASTMain:e,envSchema:(null===(v=null==N?void 0:N.selection)||void 0===v?void 0:v.domNodeId)===g.EditorComponents.canvas?R:I}):o.default.createElement(f.PropsEditorContainer,{key:N.scope.astFilePath+N.selection.astId,codeViewsConfig:A,simpleASTPluginRepo:t,sourceIdResourceMain:n,simpleASTMain:e,idGenerator:s,componentsRepo:C,scopeFilePath:N.scope.astFilePath,componentExportName:y,componentFilePath:_,boardFilePath:r.boardFilePath,refSchemaManagerMain:M,editPropsNodeId:N.selection.astId,simpleASTDiagnosticsMain:i,codeService:a,propsSchema:j,simpleAstNodeSchemaManager:O,simulationSuggestionsApi:D({filePath:N.scope.astFilePath,componentTypeRef:""})})},icon:m.AdjustIcon})}))},2623:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Placeholder=void 0;const a=s(5163).__importDefault(s(87363)),o=s(80478),i=s(24939),n=s(78406);t.Placeholder=()=>a.default.createElement("div",{className:i.classes.root},a.default.createElement(o.EmptyState,{className:i.classes.emptyState,title:n.content.emptyState.title,content:n.content.emptyState.content})),t.Placeholder.displayName="Placeholder"},95713:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsShimmer=void 0;const a=s(5163),o=s(70268),i=a.__importDefault(s(87363)),n=s(53293),r=i.default.createElement("div",{className:n.classes.paragraph},i.default.createElement(o.Shimmer.Rect,{className:n.classes.icon}),i.default.createElement(o.Shimmer.Rect,{className:n.classes.name}),i.default.createElement(o.Shimmer.Rect,{className:n.classes.type}),i.default.createElement(o.Shimmer.Rect,{className:n.classes.description}));t.PropsShimmer=function(){return i.default.createElement("div",{className:(0,n.st)(n.classes.root)},i.default.createElement(o.Shimmer.Rect,{marginLeft:"3%",marginBottom:25,height:28}),r,r)}},78406:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.content=t.panel=void 0,t.panel={title:"Properties",tooltip:"Properties"},t.content={emptyState:{title:"Select an Element",content:"Select an element from the stage or Elements panel to view its properties."},panel:t.panel}},92806:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markers=void 0,t.markers={selectedComponentPropsEditorRender:"selected-component-props-editor-render"}},25865:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsEditorContainer=void 0;const a=s(5163).__importStar(s(87363)),o=s(27941),i=s(16042),n=s(87172),r=s(75994),l=s(9240),d=s(18413),c=s(51482),u=s(69344),p=s(87571);function m(e,t,s){return`${e}#${JSON.stringify(t)}#${s}`}t.PropsEditorContainer=function({componentExportName:e,componentFilePath:t,boardFilePath:s,scopeFilePath:f,componentsRepo:S,idGenerator:g,refSchemaManagerMain:v,simpleASTMain:_,sourceIdResourceMain:E,simpleASTPluginRepo:P,simpleASTDiagnosticsMain:y,editPropsNodeId:h,codeService:b,simpleAstNodeSchemaManager:R,propsSchema:I,codeViewsConfig:N,simulationSuggestionsApi:A}){const{localStorageService:M,sessionStorageService:O}=(0,a.useContext)(r.StorageContext),D=(0,i.useVisibility)(),C=(0,a.useMemo)((()=>new n.TypescriptSchemaApi(v,R)),[v,R]),{simulation:{simulationData:{eventEmitter:V}}}=(0,d.useSimulationTabContext)(),T=(0,o.useResourceValue)({resourceManager:_,resourceId:(0,a.useMemo)((()=>({filePath:f,parsers:p.jsxParsers})),[f]),defaultValue:void 0,enabled:D}),j=(0,o.useResourceValidity)({resourceManager:_,resourceId:(0,a.useMemo)((()=>({filePath:f,parsers:p.jsxParsers})),[f]),enabled:D}),k=(0,o.useResourceValue)({resourceManager:E,resourceId:f,defaultValue:void 0,enabled:D}),x=(0,o.useResourceValue)({resourceManager:y,resourceId:{filePath:f,parsers:p.jsxParsers},defaultValue:void 0,enabled:D}),F=(0,a.useMemo)((()=>{const e=T?P.findNode(T,h):void 0;return null==e?void 0:e.node}),[P,h,T]),w=function({componentExportName:e,componentFilePath:t,scopeFilePath:s,editPropsNodeId:a}){return`${s}_${t}_${e}_${a}`}({scopeFilePath:f,componentFilePath:t,componentExportName:e,editPropsNodeId:h}),{getStoredVisualizer:K,storeVisualizer:z}=function(e,t){return{getStoredVisualizer:(0,a.useCallback)(((s,a)=>e.getStoredValue(c.PROPS_EDITOR_FEATURE_ID,m(t,s,a))),[e,t]),storeVisualizer:(0,a.useCallback)(((s,a,o)=>{e.storeValue(c.PROPS_EDITOR_FEATURE_ID,m(t,s,a),o)}),[e,t])}}(M,w),U=(0,a.useCallback)((e=>null==k?void 0:k[e]),[k]),$=(0,a.useCallback)((e=>{if(e){const t=U(e);t&&V.emit("editCode",{drawerId:s,filePath:f,position:{from:t.start,length:t.end-t.start}})}}),[U,f,s,V]),G=(0,a.useCallback)((()=>g.generateId(f)),[g,f]),L=(0,a.useCallback)(((e,t,s)=>{const a=_.get({filePath:f,parsers:p.jsxParsers});a.applyModification(s||a.getLatest(),e,t)}),[_,f]),W=(0,a.useCallback)((e=>{var t;return T&&(null===(t=P.findNode(T,e))||void 0===t?void 0:t.node)||null}),[T,P]),B=function(e,t,s){return a=>{var o;if(!e)return{diagnostics:[],hasChildDiagnostics:!1};const i=null===(o=t.findNode(e,a))||void 0===o?void 0:o.parents[0];let n=!1;return i&&t.walkNodes(i,(e=>{const t=(0,l.isPropertyNode)(e)?e.name:e;return!((null==s?void 0:s[t.astNodeId])||[]).length||(n=!0,!1)})),{diagnostics:(null==s?void 0:s[a])||[],hasChildDiagnostics:n}}}(T,P,x),J=void 0===T,H=!(J||F&&k&&x),q=(0,a.useCallback)((async(e,t,s)=>{const a=await b.getCode(f,t.astNodeId);O.storeValue(c.PROPS_EDITOR_FEATURE_ID,m(w,s,e),a)}),[b,O,w,f]),Q=(0,a.useCallback)((async(e,t,s)=>{const a=(await Promise.all(t.map((e=>b.getCode(f,e.astNodeId))))).join(",");O.storeValue(c.PROPS_EDITOR_FEATURE_ID,m(f,s,e),a)}),[b,O,f]),X=(0,a.useCallback)((async(e,t,s)=>{if(s){const a=O.getStoredValue(c.PROPS_EDITOR_FEATURE_ID,m(w,s,e));a&&await b.setCode(f,t,a)}}),[b,O,f,w]),Y={getStoredVisualizer:K,storeVisualizer:z,clearStoredVisualizer:(0,a.useCallback)(((e,t)=>{M.clearStoredValue(c.PROPS_EDITOR_FEATURE_ID,m(w,e,t))}),[M,w])},Z={onAddNode:X,onRemoveNode:q,onRemoveArgNodes:Q};return a.default.createElement(n.ContainerDimensionsContextProvider,{observe:!0},a.default.createElement(u.PropsEditor,{codeViewsConfig:N,componentsRepo:S,scopeFilePath:f,propsSchema:I,schemaApi:C,disabled:H,loading:J,propsNode:F,isFileAstValid:null!=j&&j,generateId:G,getAstDiagnostics:B,markAst:$,applyModification:L,valuesStorageApi:Z,visualizerStorageApi:Y,getAstNode:W,simulationSuggestionsApi:A}))}},69344:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsEditor=void 0;const a=s(5163).__importStar(s(87363)),o=s(87172),i=s(69202),n=s(21498),r=s(92806),l=s(95713);t.PropsEditor=(0,a.memo)((({codeViewsConfig:e,componentsRepo:t,scopeFilePath:s,propsSchema:d,generateId:c,disabled:u,schemaApi:p,applyModification:m,getAstDiagnostics:f,markAst:S,valuesStorageApi:g,isFileAstValid:v,propsNode:_,visualizerStorageApi:E,getAstNode:P,loading:y,simulationSuggestionsApi:h})=>((0,i.useMark)(r.markers.selectedComponentPropsEditorRender),y?a.default.createElement(l.PropsShimmer,null):u?a.default.createElement("div",{className:(0,n.style)(n.classes.root,{disabled:!0}),"aria-disabled":!0},a.default.createElement(o.CodeViewsPanel,{componentsRepo:t,schema:d,astFilePath:s,codeViewsConfig:e})):a.default.createElement("div",{className:(0,n.style)(n.classes.root,{disabled:!v})},a.default.createElement(o.CodeViewsPanel,{codeViewsConfig:e,componentsRepo:t,generateId:c,applyModification:m,markAst:S,ast:_,schema:d,getAstDiagnostics:f,astFilePath:s,valuesStorageApi:g,schemaApi:p,visualizerStorageApi:E,getAstNode:P,suggestionsApi:h}))))),t.PropsEditor.displayName="PropsEditor"},87571:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsxParsers=void 0;const a=s(9240),o=s(98066);t.jsxParsers=[...a.commonSimpleAstParsers.map((e=>e.nodeKind)),o.jsxFilePlugin.nodeKind,o.jsxFunctionPlugin.nodeKind,a.jsxPropPlugin.nodeKind,a.jsxPlugin.nodeKind,a.referencePlugin.nodeKind,a.trinaryPlugin.nodeKind,a.unparsedWithRootsPlugin.nodeKind]},85265:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=s(5163);var o=s(94790);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(o).default}}),a.__exportStar(s(94790),t)},79244:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationEnvEditor=void 0;var a=s(22653);Object.defineProperty(t,"SimulationEnvEditor",{enumerable:!0,get:function(){return a.SimulationEnvEditor}})},4024:(e,t,s)=>{e.exports=s(85265)},78505:(e,t,s)=>{e.exports=s(79244)},86031:function(e,t,s){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(16500);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}})},16500:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163),o=s(93849),i=a.__importStar(s(2206)),n=a.__importDefault(s(91821)),r=a.__importDefault(s(94400)),l=a.__importDefault(s(89111)),d=a.__importDefault(s(65502)),c=s(5689);t.default=new o.Feature({id:"simulationSuggestions",dependencies:[i.default.asEntity,n.default.asEntity,r.default.asEntity,l.default.asEntity,d.default.asEntity],api:{simulationSuggestionsService:o.Service.withType().defineEntity(i.processingEnv).allowRemoteAccess(),createSimulationSuggestionsApi:o.Service.withType().defineEntity(c.mainEnv)}})},40954:(e,t,s)=>{e.exports=s(86031)},66597:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163);a.__exportStar(s(70538),t),a.__exportStar(s(20206),t)},34196:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NativeStorage=t.createStorageKey=void 0;const a=s(93849);t.createStorageKey=(e,t)=>`WCS_STORAGE_${e}#${t}`,t.NativeStorage=class{constructor(e){this.nativeStorage=e,this.eventEmitter=new a.EventEmitter,this.on=(e,s,a)=>{this.eventEmitter.on((0,t.createStorageKey)(e,s),a)},this.off=(e,s,a)=>{this.eventEmitter.off((0,t.createStorageKey)(e,s),a)}}storeValue(e,s,a){this.nativeStorage.setItem((0,t.createStorageKey)(e,s),a),this.eventEmitter.emit((0,t.createStorageKey)(e,s),void 0)}getStoredValue(e,s){return this.nativeStorage.getItem((0,t.createStorageKey)(e,s))}clearStoredValue(e,s){this.nativeStorage.removeItem((0,t.createStorageKey)(e,s)),this.eventEmitter.emit((0,t.createStorageKey)(e,s),void 0)}}},70538:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StorageContext=void 0;const a=s(5163).__importDefault(s(87363)),o=s(34196);t.StorageContext=a.default.createContext({localStorageService:new o.NativeStorage(localStorage),sessionStorageService:new o.NativeStorage(sessionStorage)})},20206:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStorageValue=t.useStorage=void 0;const a=s(87363);function o({storageService:e,featureName:t,key:s}){return{readValue:(0,a.useCallback)((()=>{const a=e.getStoredValue(t,s);return a?JSON.parse(a):null}),[t,s,e]),storeValue:(0,a.useCallback)((a=>e.storeValue(t,s,JSON.stringify(a))),[t,s,e])}}t.useStorage=function({storageService:e,featureName:t,key:s,defaultValue:i,enabled:n=!0}){const[r,l]=(0,a.useState)(i),{readValue:d,storeValue:c}=o({storageService:e,featureName:t,key:s}),u=(0,a.useCallback)((()=>{var e;n&&l(null!==(e=d())&&void 0!==e?e:i)}),[i,n,d]);return(0,a.useEffect)(u,[u]),(0,a.useEffect)((()=>(e.on(t,s,u),()=>e.off(t,s,u))),[t,u,s,e]),[r,c]},t.useStorageValue=o},75994:(e,t,s)=>{e.exports=s(66597)},80478:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyState=void 0;const a=s(5163).__importStar(s(87363)),o=s(69202),i=s(73929),n=s(7770);s(98970),t.EmptyState=(0,a.memo)((({content:e,title:t,className:s,linkTitle:r,linkURL:l,onOpenUrl:d,children:c})=>a.default.createElement("div",{className:(0,n.style)(n.classes.root,s)},a.default.createElement("div",{className:n.classes.title},t),a.default.createElement("div",{className:n.classes.content},e),l&&d&&a.default.createElement(i.Link,{className:n.classes.anchor,openUrl:d,href:l},a.default.createElement(o.ExternalLinkSmallIcon,{className:n.classes.linkIcon}),a.default.createElement("span",null,r)),a.default.createElement("div",{className:n.classes.childrenWrapper},c)))),t.EmptyState.displayName="EmptyState"},39906:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemedComponentIcon=void 0,s(68118);var a=s(69202);Object.defineProperty(t,"ThemedComponentIcon",{enumerable:!0,get:function(){return a.ComponentIcon}})}}]);