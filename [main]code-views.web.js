(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[3106],{73502:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o237",a={root:"s1286",menuItem:"s1285"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},60613:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o274",a={root:"s1283",label:"s1360",icon:"s1361",dropPanel:"s1284",menuItem:"s1285"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},91341:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o77",a={root:"s632"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},72124:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o78",a={root:"s633"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},34032:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o281",a={root:"s1379"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},48599:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o459",a={root:"s1377",icon:"s1837",name:"s1378"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},84894:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o282",a={root:"s1383"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},65547:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o398",a={root:"s1380",heading:"s1381",name:"s1695",type:"s1696",editCode:"s1697",icon:"s1382",scrollView:"s1698",scrollbar:"s1699"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},49814:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o283",a={root:"s1384"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},82997:(e,t,n)=>{"use strict";n.r(t),n.d(t,{classes:()=>a,cssStates:()=>l,keyframes:()=>i,namespace:()=>s,st:()=>u,stVars:()=>r,style:()=>c,vars:()=>o});const s="o79",a={root:"s638",mask:"s634",wrapper:"s635",heading:"s636",button:"s637"},i={},r={},o={},l=n.stc.bind(null,s),c=n.sts.bind(null,s),u=c},27442:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(5163),a=n(5689),i=n(54119),r=s.__importDefault(n(75904)),o=n(37996),l=n(52250),c=n(11745),u=n(55456),d=n(18340),m=n(45134),p=n(89804),f=n(9240),v=n(62792),g=n(78900),y=n(82874),E=n(50500),_=n(71624),S=n(26361);r.default.setup(a.mainEnv,(({codeVisualizerPlugin:e})=>{const t=new i.ComponentsRepo({name:"code",component:o.EditCodeVisualizer,predicate:()=>!0,astPlugin:f.undefinedPlugin});return e.register({name:"jsx-expression",component:S.JsxExpressionVisualizer,predicate:e=>!!(e&&(0,f.isJSXExpressionNode)(e)&&t.matchVisualizer(e.expression)),astPlugin:f.jsxExpressionPlugin,hidden:!0}),e.register({name:"jsx-text",component:c.StringVisualizer,predicate:e=>!!e&&(0,f.isNodeOfKind)("jsx-text-element",e),astPlugin:f.jsxTextPlugin,hidden:!0}),e.register({name:"undefined",component:o.EditCodeVisualizer,predicate:e=>"undefined"===(null==e?void 0:e.kind),astPlugin:f.undefinedPlugin,hidden:!0}),e.register({name:"string",component:c.StringVisualizer,predicate:(e,t)=>"string"===(null==e?void 0:e.kind)||!e&&"string"===(null==t?void 0:t.type),astPlugin:f.stringPlugin}),e.register({name:"number",component:u.NumberVisualizer,predicate:(e,t)=>"number"===(null==e?void 0:e.kind)||!e&&"number"===(null==t?void 0:t.type),astPlugin:f.numberPlugin}),e.register({name:"boolean",component:d.BooleanVisualizer,predicate:(e,t)=>"boolean"===(null==e?void 0:e.kind)||!e&&"boolean"===(null==t?void 0:t.type),astPlugin:f.booleanPlugin}),e.register({name:"object",component:l.ObjectVisualizer,predicate:(e,t)=>{const n=(0,g.optionalPropSchemaFix)(t);return"object"===(null==e?void 0:e.kind)||!e&&("object"===(null==n?void 0:n.type)||"common/interface"===(null==n?void 0:n.type)||"common/nonprimitive"===(null==n?void 0:n.type))},astPlugin:f.objectPlugin}),e.register({name:"array",component:v.ArrayVisualizer,predicate:(e,t)=>"array"===(null==e?void 0:e.kind)||!e&&"array"===(null==t?void 0:t.type),astPlugin:f.arrayPlugin}),e.register({name:"null",component:o.EditCodeVisualizer,predicate:(e,t)=>"null"===(null==e?void 0:e.kind)||!e&&"common/null"===(null==t?void 0:t.type),astPlugin:f.nullPlugin,hidden:!0}),e.register({name:"const",component:p.ConstVisualizer,predicate:(e,t)=>!!t&&!(0,_.isSimpleConstantSchema)(t)&&(!(!t.type||!t.enum)||!!t.oneOf&&(2!==t.oneOf.length||!t.oneOf.some((e=>"common/undefined"===e.type)))&&t.oneOf.reduce(((e,t)=>Boolean(e&&("common/null"===t.$ref||t.type&&t.enum||"boolean"===t.type))),!0)),astPlugin:f.undefinedPlugin,hidden:!0}),e.register({name:"enum",component:m.EnumVisualizer,predicate:(e,t)=>"common/enumvalue"===(null==t?void 0:t.type),astPlugin:f.propertyAccessPlugin}),e.register({name:"call",component:y.CallVisualizer,predicate:e=>"call"===(null==e?void 0:e.kind),astPlugin:f.callPlugin,hidden:!0}),e.register({name:"reference",component:E.ReferenceVisualizer,predicate:e=>!!e&&((0,f.isSimpleReferenceNode)(e)||(0,f.isSimplePropertyAccessNode)(e)&&(0,f.isSimpleReferenceNode)(e.reference)),astPlugin:f.undefinedPlugin,hidden:!0}),e.stream((e=>{t.register(e)})),{componentsRepoService:t}}))},7446:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropDropDown=void 0;const s=n(5163).__importDefault(n(87363)),a=n(60613),i=n(69202),r=n(59187);n(73502);const o={stretchHorizontally:!0};t.PropDropDown=({menuItems:e,onItemSelect:t,className:n,children:l})=>s.default.createElement("div",null,s.default.createElement(r.Dropdown,{className:(0,a.style)(a.classes.root,n),dropPanelClassName:(0,a.style)(a.classes.dropPanel),onItemSelect:t,menuItems:e,positioningOptions:o},s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:a.classes.label},l),s.default.createElement(i.ChevronDownWixUiIcon,{className:a.classes.icon})))),t.PropDropDown.displayName="PropDropDown"},89804:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConstVisualizer=void 0;const s=n(5163).__importStar(n(87363)),a=n(9240),i=n(7446),r=n(71624),o=n(91341),l=n(74647);t.ConstVisualizer=({ast:e,applyModification:t,schema:n})=>{const{generateId:c}=(0,s.useContext)(l.CodeViewsSimpleAstContext),u=(0,s.useCallback)((n=>{t(e?r.CodeViewsSetMod:r.CodeViewsCreateMod,{newAstNode:(0,r.createAstNodeFromValue)(c,n)},e)}),[e,t,c]),d=(0,s.useCallback)((({data:{value:e}})=>{u(e)}),[u]),m=(0,s.useMemo)((()=>{var e;if(!n)return[];let t=[];return n.oneOf?t=null!==(e=n.oneOf.reduce(((e,t)=>"common/null"===t.$ref?[...e,null]:t.type&&t.enum?[...e,...t.enum]:"boolean"===t.type?[...e,!0,!1]:e),[]))&&void 0!==e?e:[]:n.type&&n.enum&&(t=n.enum),t.map((e=>({data:{item:String(e),value:e}})))}),[n]);(0,s.useEffect)((()=>{e&&"undefined"===e.kind&&!m.some((e=>void 0===e.data.value))&&u(m[0].data.value)}),[e,m,u]);const p=(0,s.useMemo)((()=>{var t;return e?(0,a.isNodeOfKind)("null",e)?null:(0,a.isNodeOfKind)("undefined",e)?void 0:String(e.value):null===(t=m[0])||void 0===t?void 0:t.data.item}),[e,m]);return s.default.createElement(i.PropDropDown,{className:o.classes.root,onItemSelect:d,menuItems:m},s.default.createElement(s.default.Fragment,null,p))},t.ConstVisualizer.displayName="ConstVisualizer"},45134:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EnumVisualizer=t.displayEnum=void 0;const s=n(5163).__importStar(n(87363)),a=n(73286),i=n(9240),r=n(91570),o=n(7446),l=n(72124),c=n(94910),u=n(74647);t.displayEnum=e=>{if((null==e?void 0:e.reference)&&(0,i.isAnyReferenceNode)(e.reference)){const t=e.accessPath[0];return(0,i.isNodeOfKind)("property-access-index",t)?t.accessKey:(0,i.isAnyReferenceNode)(t)?(0,i.isSimpleReferenceNode)(t)?t.name:t.targetExport:t.code}return""},t.EnumVisualizer=({ast:e,applyModification:n,schema:d})=>{const{generateId:m,astFilePath:p}=(0,s.useContext)(u.CodeViewsSimpleAstContext),f=(0,s.useContext)(u.SchemaApiContext),v=(0,c.useResolvedUnionRefs)(f,d),g=(0,s.useCallback)((e=>{var t,s;const o=e.split("#")[0];let l;const[c,u]=null!==(s=null===(t=(0,a.getDefinitionFromRef)(e))||void 0===t?void 0:t.split("."))&&void 0!==s?s:[];if(o!==p){const e=(0,r.rebaseRelativeModulePath)(p,o),t=(0,r.getImportPath)(e);l=(0,i.createFileReferenceNode)({astNodeId:m(),refType:"between-file",targetFile:t,targetExport:c})}else l=(0,i.createReferenceNode)({name:c,astNodeId:m(),refType:"in-file"});c&&u&&n("setValue",{reference:l,accessPath:[(0,i.createPropertyAccessIndexNode)({astNodeId:m(),accessKey:u})]})}),[n,p,m]),y=(0,s.useCallback)((({data:{value:e}})=>{g(e.$ref)}),[g]),E=(0,s.useMemo)((()=>{var e;return null!==(e="common/enumvalue"===(null==d?void 0:d.type)?d.oneOf:Object.values(v).filter((e=>"common/enumvalue"===(null==e?void 0:e.type))).reduce(((e,t)=>(null==t?void 0:t.oneOf)?e.concat(t.oneOf):e),[]))&&void 0!==e?e:[]}),[v,d]),_=(0,s.useMemo)((()=>E.map((({$ref:e})=>{var t,n;return{data:{item:null!==(n=null===(t=(0,a.getDefinitionFromRef)(null!=e?e:""))||void 0===t?void 0:t.split(".")[1])&&void 0!==n?n:"",value:{$ref:e}}}}))),[E]);(0,s.useEffect)((()=>{var t,n;"undefined"===(null===(t=null==e?void 0:e.reference)||void 0===t?void 0:t.kind)&&g(null!==(n=_[0].data.value.$ref)&&void 0!==n?n:"")}),[_,g,e]);const S=(0,s.useMemo)((()=>e?(0,t.displayEnum)(e):""),[e]);return s.default.createElement(o.PropDropDown,{className:l.classes.root,onItemSelect:y,menuItems:_},s.default.createElement(s.default.Fragment,null,S))},t.EnumVisualizer.displayName="EnumVisualizer"},26361:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsxExpressionVisualizer=void 0;const s=n(5163).__importStar(n(87363)),a=n(9348);t.JsxExpressionVisualizer=({ast:e,markAst:t,nestingLevel:n,...i})=>{const r=(0,s.useCallback)((n=>{var s;const a=n==(null===(s=null==e?void 0:e.expression)||void 0===s?void 0:s.astNodeId)?null==e?void 0:e.astNodeId:n;null==t||t(a)}),[e,t]);return s.default.createElement(a.CodeView,{...i,nestingLevel:(null!=n?n:0)+1,ast:null==e?void 0:e.expression,markAst:r})}},82059:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceName=void 0;const s=n(5163).__importDefault(n(87363)),a=n(69202),i=n(48599);n(34032),t.ReferenceName=({name:e="reference",onClick:t})=>s.default.createElement("div",{className:i.classes.root,onClick:t},s.default.createElement(a.ReferenceIcon,{className:i.classes.icon}),s.default.createElement("div",{className:i.classes.name},e)),t.ReferenceName.displayName="ReferenceName"},2241:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceView=void 0;const s=n(5163),a=s.__importStar(n(87363)),i=n(9240),r=n(69202),o=n(74647),l=n(63820),c=n(9348),u=s.__importDefault(n(82658)),d=n(82059),m=n(65547),p=n(70268),f=n(36862);n(84894);const v=n(71624);t.ReferenceView=({applyModification:e,astNodeId:t,name:n,markAst:s,onGoBack:g})=>{const{getAstNode:y,astFilePath:E}=(0,a.useContext)(o.CodeViewsSimpleAstContext),_=(0,a.useContext)(o.SchemaApiContext),S=y?y(t):null,M=S&&(0,i.isVariableNode)(S)?S.initializer:S,C=(0,l.useAstNodeValueSchema)(_,E,t),b=C&&(0,v.isSimpleConstantSchema)(C)?{type:C.type}:C,h=(0,a.useCallback)((()=>{null==s||s(null==M?void 0:M.astNodeId)}),[s,M]);return a.default.createElement("div",{className:(0,m.style)(m.classes.root),"data-prop-name":n},a.default.createElement("div",{className:m.classes.heading},a.default.createElement(r.HistoryGoBackIcon,{className:m.classes.icon,onClick:g}),a.default.createElement("span",{className:m.classes.name},a.default.createElement(d.ReferenceName,{name:n})),a.default.createElement("div",{className:m.classes.type},a.default.createElement(u.default,{schema:null!=b?b:void 0})),a.default.createElement("div",{className:m.classes.editCode},a.default.createElement(f.CodeButton,{onClick:h}))),a.default.createElement(p.VerticalScrollView,{className:m.classes.scrollView,scrollBarClassName:m.classes.scrollbar},a.default.createElement(c.CodeView,{ast:null!=M?M:void 0,schema:null!=C?C:void 0,applyModification:e,markAst:s})))}},50500:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceVisualizer=void 0;const s=n(5163),a=s.__importDefault(n(61533)),i=s.__importStar(n(87363)),r=n(9240),o=n(72029),l=n(9348),c=n(82997),u=n(74647),d=n(82059),m=n(24784),p=n(6349),f=n(46243),v=n(70268),g=n(78900),y=n(37996);n(49814);const E=n(83534),_=n(2241),S=n(32767),M=e=>e?(0,r.isSimpleReferenceNode)(e)?e.name:(0,r.isSimplePropertyAccessNode)(e)?(0,g.getPropertyAccessPath)(e).flat().reduce(((e,t,n)=>0===n?t.toString():e+("string"==typeof t?`.${t}`:`[${t}]`)),""):"reference":"reference",C=["boolean","string","number","code","null","undefined","const","enum","object","array"];t.ReferenceVisualizer=({ast:e,nestingLevel:t=0,markAst:n,applyModification:s})=>{const{getAstNode:r,astFilePath:b}=(0,i.useContext)(u.CodeViewsSimpleAstContext),h=(0,i.useContext)(u.SchemaApiContext),[R,P]=(0,i.useState)(null),{nextLevelRef:N,addLevel:x,goBack:w}=(0,i.useContext)(E.CodeViewsNavigationContext),O=(0,i.useContext)(u.ComponentsRepoContext),V=r?(0,m.getReferencedAstNode)(r,e):null,A=(0,o.useAstNodeValueSchema)(h,b,null==V?void 0:V.astNodeId),D=()=>{P(N),x()};if(null===V||null===A)return i.default.createElement(y.EditCodeVisualizer,{markAst:n,ast:e,applyModification:s});const k=O.matchVisualizer(V,(0,g.optionalPropSchemaFix)(A)),I=C.includes(k.name)?i.default.createElement(l.CodeView,{ast:V,schema:A,nestingLevel:t+1,markAst:n,applyModification:s}):i.default.createElement("button",{className:c.classes.button},p.content.buttons.editReference),T=V&&R&&R.current&&i.default.createElement(u.ReferenceContext.Provider,{value:{isEditingReference:!0}},i.default.createElement(_.ReferenceView,{astNodeId:V.astNodeId,name:M(e),applyModification:s,markAst:n,onGoBack:()=>{w(),setTimeout((()=>{P(null)}),S.ANIMATION_DURATION)}}));return i.default.createElement("div",{className:(0,c.style)(c.classes.root)},i.default.createElement("div",{className:c.classes.heading},i.default.createElement(v.Tooltip,{content:p.content.tooltips.editReference},i.default.createElement(d.ReferenceName,{name:M(e),onClick:D})),i.default.createElement(f.InfoIcon,{tooltipContent:p.content.tooltips.referenceInfo})),i.default.createElement("div",{onClick:D,className:c.classes.wrapper},i.default.createElement("div",{className:c.classes.mask},I)),R&&R.current&&a.default.createPortal(T,R.current))},t.ReferenceVisualizer.displayName="ReferenceVisualizer"},44544:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(5163),a=n(93849),i=s.__importDefault(n(91821)),r=s.__importDefault(n(93208)),o=s.__importDefault(n(45463)),l=s.__importDefault(n(2206)),c=s.__importDefault(n(82026)),u=s.__importDefault(n(93673)),d=n(5689);t.default=new a.Feature({id:"componentTab",dependencies:[r.default.asEntity,i.default.asEntity,l.default.asEntity,o.default.asEntity,c.default.asEntity,u.default.asEntity],api:{sectionSlot:a.OrderedSlot.withType().defineEntity(d.mainEnv),sectionSlotOrder:new a.Config([["id",["simulations"]]])}})},55176:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s=n(5163);var a=n(44544);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.__importDefault(a).default}}),s.__exportStar(n(44544),t)},67809:(e,t,n)=>{e.exports=n(55176)},68941:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Context=void 0;const s=n(5163),a=n(93849),i=s.__importStar(n(2206));t.default=new a.Feature({id:"gitCommands",dependencies:[i.default.asEntity],api:{gitCommandsService:a.Service.withType().defineEntity(i.processingEnv).allowRemoteAccess((0,a.declareComEmitter)("subscribe","unsubscribe"))},context:{gitCommandsContext:i.processingEnv.withContext()}}),t.Context=i.processingEnv.useContext("live-server")},54718:function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(68941);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s(a).default}})},35784:(e,t,n)=>{e.exports=n(54718)},20137:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(5163),a=n(93849),i=n(32510),r=s.__importDefault(n(35784)),o=s.__importStar(n(2206)),l=n(5689),c=(0,i.defineOneWayResource)().defineEntity(o.processingEnv),u=(0,i.defineOneWayResource)().defineEntity(o.processingEnv),d=(0,i.defineComputedResource)().defineEntity(o.processingEnv),m=(0,i.defineOneWayResource)().defineEntity(o.processingEnv),p=(0,i.defineOneWayResource)().defineEntity(o.processingEnv),f=(0,i.defineOneWayResource)().defineEntity(o.processingEnv),v=(0,i.defineComputedResource)().defineEntity(o.processingEnv);t.default=new a.Feature({id:"gitRevision",dependencies:[o.default.asEntity,r.default.asEntity],api:{gitService:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),gitDetector:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),gitFetcher:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),gitFetcherOption:new a.Config({fetchInterval:6e5,enabled:!0}),gitSyncRepoService:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),gitHeadResourceManager:c,gitHeadResourceManagerMain:c.defineConsumer(l.mainEnv),gitRepoStatusResourceManager:u,gitRepoStatusResourceManagerMain:u.defineConsumer(l.mainEnv),gitFileStatusResourceManager:d,gitFileStatusResourceManagerMain:d.defineConsumer(l.mainEnv),gitBranchListResourceManager:m,gitBranchListResourceManagerMain:m.defineConsumer(l.mainEnv),gitMergeStateResourceManager:p,gitMergeStateResourceManagerMain:p.defineConsumer(l.mainEnv),gitSyncRepoResourceManager:f,gitSyncRepoResourceManagerMain:f.defineConsumer(l.mainEnv),gitTrackingBranchResourceManager:v,gitTrackingBranchResourceManagerMain:v.defineConsumer(l.mainEnv),gitConflictsService:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),gitEventEmitter:a.Service.withType().defineEntity(o.processingEnv),gitMonitoringService:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess()}})},3486:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s=n(5163);s.__exportStar(n(20137),t);var a=n(20137);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.__importDefault(a).default}})},72975:(e,t,n)=>{e.exports=n(3486)},26427:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s=n(5163);var a=n(16894);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.__importDefault(a).default}}),s.__exportStar(n(16894),t)},16894:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RECOMPUTE_DEMO_LIST_MARK=t.COMPUTE_DEMO_LIST_MARK=void 0;const s=n(5163),a=n(93849),i=n(5689),r=s.__importStar(n(2206)),o=s.__importDefault(n(94400)),l=s.__importDefault(n(91821)),c=s.__importDefault(n(58729)),u=s.__importDefault(n(72975)),d=s.__importDefault(n(89111)),m=s.__importDefault(n(32562)),p=n(32510),f=s.__importDefault(n(64229)),v=s.__importDefault(n(93104)),g=n(3092);t.COMPUTE_DEMO_LIST_MARK="COMPUTE_DEMO_LIST_MARK",t.RECOMPUTE_DEMO_LIST_MARK="RECOMPUTE_DEMO_LIST_MARK";const y=(0,p.defineComputedResource)().defineEntity(r.processingEnv),E=(0,p.defineTwoWayResource)().defineEntity(r.processingEnv),_=(0,p.defineComputedResource)().defineEntity(r.processingEnv);t.default=new a.Feature({id:"simulationCapabilities",dependencies:[r.default.asEntity,u.default.asEntity,l.default.asEntity,o.default.asEntity,d.default.asEntity,m.default.asEntity,f.default.asEntity,c.default.asEntity,v.default.asEntity],api:{demoListManager:y,demoListManagerMain:y.defineConsumer(i.mainEnv),simulationService:a.Service.withType().defineEntity(i.mainEnv),simulationProcessingService:a.Service.withType().defineEntity(r.processingEnv).allowRemoteAccess(),demoErrorManager:E,demoErrorManagerMain:E.defineConsumer(i.mainEnv),environmentPropsManager:_,environmentPropsManagerMain:_.defineConsumer(i.mainEnv)}}).setup(a.Universal,(({},{simpleAST:{simpleASTPlugin:e}})=>{e.register(g.jsxFunctionPlugin),e.register(g.jsxFilePlugin),e.register(g.jsxOwnerPlugin)}))},93673:(e,t,n)=>{e.exports=n(26427)},31200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s=n(5163);var a=n(98582);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.__importDefault(a).default}}),s.__exportStar(n(98582),t)},98582:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simpleAstNodeSchemaManager=t.refSchemaManager=t.moduleSymbolsSchemaManager=t.componentSchemaManager=void 0;const s=n(5163),a=n(93849),i=n(32510),r=n(5689),o=s.__importStar(n(2206)),l=s.__importDefault(n(89111)),c=s.__importDefault(n(94400));t.componentSchemaManager=(0,i.defineComputedResource)().defineEntity(o.processingEnv),t.moduleSymbolsSchemaManager=(0,i.defineComputedResource)().defineEntity(o.processingEnv),t.refSchemaManager=(0,i.defineComputedResource)().defineEntity(o.processingEnv),t.simpleAstNodeSchemaManager=(0,i.defineComputedResource)().defineEntity(o.processingEnv),t.default=new a.Feature({id:"symbolSchemaExtract",dependencies:[o.default.asEntity,l.default.asEntity,c.default.asEntity],api:{schemaService:a.Service.withType().defineEntity(o.processingEnv).allowRemoteAccess(),componentSchemaManager:t.componentSchemaManager,componentSchemaManagerMain:t.componentSchemaManager.defineConsumer(r.mainEnv),moduleSymbolsSchemaManager:t.moduleSymbolsSchemaManager,moduleSymbolsSchemaManagerMain:t.moduleSymbolsSchemaManager.defineConsumer(r.mainEnv),refSchemaManager:t.refSchemaManager,refSchemaManagerMain:t.refSchemaManager.defineConsumer(r.mainEnv),simpleAstNodeSchemaManager:t.simpleAstNodeSchemaManager,simpleAstNodeSchemaManagerMain:t.simpleAstNodeSchemaManager.defineConsumer(r.mainEnv),schemaConfig:new a.Config({getSchemasDebounceTime:500,getSchemasMaxDebounceTime:2e3}),computeSchemaCacheEnvs:a.Service.withType().defineEntity(o.processingEnv)},context:{schemaExtractContext:o.processingEnv.withContext()}})},49262:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(5163);s.__exportStar(n(53661),t),s.__exportStar(n(93608),t)},93608:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},53661:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getArrayItemSchema=t.getFileFromRef=t.getDefinitionFromRef=t.getTypeNameFromRef=t.getSimplifiedRef=void 0,t.getSimplifiedRef=e=>{const[t,n]=e.split("#"),s=n.lastIndexOf("/");return-1===s?`${t}#${n}`:`${t}#${n.substr(s+1)}`},t.getTypeNameFromRef=function(e){const t=e.split("#")[1].split("/");return t[t.length-1].replace("default.","")},t.getDefinitionFromRef=function(e){if(e.includes("#")&&e.split("#")[1].includes("/definitions/"))return e.split("#")[1].split("/definitions/")[1]},t.getFileFromRef=function(e){if(e.includes("#"))return e.split("#")[0]},t.getArrayItemSchema=function(e,t){const n=e.items;return Array.isArray(n)?n[t]:n}},45463:(e,t,n)=>{e.exports=n(31200)},73286:(e,t,n)=>{e.exports=n(49262)}}]);