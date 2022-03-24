"use strict";(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[3890],{87706:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=s(5163),n=s(52151),i=s(60814),a=s(2206),o=s(9240),l=s(84253),c=s(14026),d=s(58270),g=s(13816),u=s(64419),p=s(40787),m=s(67623),f=s(79133),S=s(73974),v=s(35423),N=s(34917),C=s(88122),h=s(68855),y=s(48786),P=s(31326),F=s(15695),I=s(46678),w=r.__importStar(s(13111)),R=s(639),b=s(57759),_=s(34997),E=s(20251),O=s(92160),T=s(72251),x=s(58851),A=s(79169),L=s(7401),k=s(94845),M=s(63489),J=s(384);w.default.setup(a.processingEnv,(({selectorsInStyleFileRM:e,styleEditingSlot:t,classNamesPlugins:s,classNamesInStyleFileRM:r,cssVarsInStyleFileRM:D,usedClassesinFile:j,stylingExtensionConfig:K},{project:{fileManager:V,fs:U,pluggableProjectConfig:z},simpleAST:{idGenerator:$,languageASTPlugin:B,idService:G,languagePlugin:W,sourceIdResource:q,simpleAST:H,simpleASTPluginRepo:X},css:{postCompilationSlot:Y},sass:{postCompilationSlot:Q},codeExecution:{resolver:Z}})=>{const ee=(0,y.createCssLikeLang)((e=>V.get(e).getLatest()));W.register(ee);const te=e=>{const t=oe.getStyleEditing(e);if(!t)return{value:{},dependencies:new Set([V.get(e)])};try{return{value:t.getRuleReadableNames(e),dependencies:new Set([V.get(e)])}}catch{return{value:{},status:{valid:!1,message:I.CSS_PARSE_ERROR},dependencies:new Set([V.get(e)])}}},se=e.provide({dependencies:[V],handler:{compute:te,recompute:e=>{const t=e.getId(),s=new Set([V.get(t)]),r=te(t),n=void 0===r.status||r.status.valid?(0,i.getDefaultStatusHandling)(e.getSerializedId(),s):r.status;return{changes:JSON.stringify(r.value)!==JSON.stringify(e.getLatest())?[(0,i.fullChange)(r.value)]:[],dependencies:s,status:n}}}}),re=new d.StringClassNamesPlugin,ne=new c.ReferenceClassNamesPlugin,ie=new u.TemplateStringClassNamesPlugin,ae=new g.StringConcatClassNamesPlugin;s.register(ie),s.register(ne),s.register(re),s.register(ae);const oe={getLibraryName(e){const s=[...t].reverse().find((t=>t.isApplicable(e)));return s?s.libraryName:"unknown"},getStyleEditing(e){const s=[...t].reverse().find((t=>t.isApplicable(e)));return s?s.service:void 0},getCssRuleDeclarations(e,t){const s=this.getStyleEditing(e);if(void 0===s)throw new Error(`Style editing service for ${e} not found`);const r=s.findNode({filePath:e,nodeId:t});if(void 0===r)throw new Error(`Node with id ${t} in file ${e} not found`);const n=[];for(const e of r.nodes)"decl"===e.type&&n.push({name:e.prop,value:e.value});return n}};B.register(P.cssAtRuleConvertor),B.register(F.cssSourceFileConvertor),B.register(f.cssRuleConvertor),B.register(R.cssSelectorRootConvertor),B.register(b.cssElementSelectorConvertor),B.register(_.cssClassSelectorConvertor),B.register(E.cssPseudoclassSelectorConvertor),B.register(O.cssPseudoelementSelectorConvertor),B.register(T.cssAttributeSelectorConvertor),B.register(x.cssUniversalSelectorConvertor),B.register(A.cssNestingSelectorConvertor),B.register(L.cssIdSelectorConvertor),B.register(k.cssSelectorCombinatorConvertor),B.register(M.cssSelectorNthRootConvertor),B.register(J.cssCompoundSelectorConvertor);const le=e=>{const t=oe.getStyleEditing(e);if(!t)throw new Error("css language not found");return t};B.register((0,m.cssDeclarationConvertor)({parseDeclarationValuePart:(e,t)=>le(e).parseDeclarationValuePart(t,e),printDeclarationValuePart:(e,t)=>le(e).printDeclarationValuePart(t,e)})),B.register((0,N.classNameConvertor)(s,oe,G,$.generateId,Z.resolveFromFile));const ce=(e,t)=>{const s=V.get(e),r=oe.getStyleEditing(e);try{return{status:{valid:!0},dependencies:new Set([s]),value:{classes:r&&r.getDefinedClasses?r.getDefinedClasses(e):[],library:oe.getLibraryName(e),shouldImportNewClasses:!!r&&r.shouldImportNewClasses(e)}}}catch(r){return{status:{valid:!1,message:r.message},dependencies:new Set([s]),value:t.isReady()?t.getLatest():{classes:[],shouldImportNewClasses:!1,library:oe.getLibraryName(e)}}}},de=r.provide({dependencies:[V],handler:{compute:(e,t)=>ce(e,t),recompute(e,t,s,r){const n=ce(e.getId(),e);return{changes:JSON.stringify(n.value)!==JSON.stringify(e.getLatest())?[(0,i.fullChange)(n.value)]:[],dependencies:r,status:n.status.valid?(0,i.getDefaultStatusHandling)(e.getSerializedId(),r):n.status}}}}),ge=(e,t)=>{const s=oe.getStyleEditing(e);let r,n=[];try{n=s&&s.getAvailableVariablesForFile?s.getAvailableVariablesForFile(e):[]}catch(e){r=e.message}const i=new Set([e]);return n.forEach((e=>e.variables.forEach((e=>{(0,l.isBuildVar)(e)&&i.add(e.definitionFile)})))),{value:r?t.getLatest():n,dependencies:new Set([...i].map((e=>V.get(e)))),status:{valid:!r,message:r}}},ue=D.provide({dependencies:[V],handler:{compute:ge,recompute(e,t,s,r){const n=ge(e.getId(),e);return JSON.stringify(n)!==JSON.stringify(e.getLatest())?{changes:[(0,i.fullChange)(n.value)],status:n.status,dependencies:n.dependencies}:{changes:[],status:{valid:!0},dependencies:r}}}});t.register({libraryName:"Native",isApplicable:e=>e.endsWith(".css"),service:new p.CSSEditing(V,"css",G)}),Y.register({editing:!0,transform:(0,v.getAdderOfCustomPropertyIds)(q,G.getLanguage(".css"))});const pe={editing:!0,transform:(0,S.forceNativeStatesFactory)(n.overrideStatePrefix)};Y.register(pe),Q.register(pe);const me=e=>{const t=H.get({filePath:e,parsers:h.stylePanelJSXAstParsers}),s=new Set([t]);return{value:X.getASTInfo(t.getLatest()).byKind("jsx-element").reduce(((e,t)=>{const r=(e=>{const t=null==e?void 0:e.props.find((e=>(0,o.isNodeOfKind)("className",e)));return(null==t?void 0:t.classes)||[]})(t);return e[t.astNodeId]=r.reduce(((e,t)=>{switch(t.kind){case"string":e.push({isConditional:!1,title:t.title,targetClassName:t.targetClassName||t.className,id:t.id});break;case"import":{const r=de.get(t.importedFrom);s.add(r);const n=r.getLatest().classes.find((e=>e.id===t.id));e.push({isConditional:!1,title:t.title,targetClassName:"import"===(null==n?void 0:n.kind)?n.targetClassName:void 0,id:t.id})}break;case"conditional":switch(t.cls.kind){case"string":e.push({isConditional:!0,title:t.title,targetClassName:t.cls.targetClassName||t.cls.className,id:t.id});break;case"import":{const r=de.get(t.cls.importedFrom);s.add(r);const n=r.getLatest().classes.find((e=>e.id===t.id));e.push({isConditional:!1,title:t.title,targetClassName:"import"===(null==n?void 0:n.kind)||"state"===(null==n?void 0:n.kind)?n.targetClassName:void 0,id:t.id})}}}return e}),[]),e}),{}),dependencies:s}},fe=j.provide({dependencies:[H,de],resourceConstructor:i.JSONResource,handler:{compute:me,recompute(e,t,s,r){const n=me(e.getId());return JSON.stringify(n)!==JSON.stringify(e.getLatest())?{changes:[(0,i.fullChange)(n.value)],status:{valid:!0},dependencies:n.dependencies}:{changes:[],status:{valid:!0},dependencies:r}}}}),Se=z.get(a.PROJECT_CONFIG_NAME),ve=Se.isValid()?Se.get(K):w.DEFAULT_STYLING_EXTENSION,Ne=new C.OwnerStylingFileService(G,U,(e=>U.join(U.dirname(e),U.basename(e,U.extname(e)))+ve));return{styleEditingService:oe,classNamesInStyleFileRM:de,cssVarsInStyleFileRM:ue,selectorsInStyleFileRM:se,usedClassesinFile:fe,ownerStylingFileService:Ne}}))},14026:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceClassNamesPlugin=void 0;const r=s(20009),n=s(9240);t.ReferenceClassNamesPlugin=class{constructor(){this.pluginName="reference"}parse(e,t){return"string"==typeof e?null:(0,n.isAnyReferenceNode)(e)||(0,n.isNodeOfKind)("property-access",e)?[t(e)]:null}setClasses(e,t,s){return e.length>1||!(0,r.isImportedClassUsage)(e[0])?null:s(e[0])}}},13816:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StringConcatClassNamesPlugin=void 0;const r=s(20009),n=s(9240),i=s(58270),a=s(68648);function o(e){if((0,n.isStringNode)(e))return e.value;if((0,n.isSimpleFileReferenceNode)(e))return"+${"+(e.symbolName||e.targetExport)+"}+";if((0,n.isSimpleReferenceNode)(e))return"+${"+e.name+"}+";if(!(0,a.isConcatNode)(e))return;const t=o(e.left),s=o(e.right);return t&&s?t+s:void 0}t.StringConcatClassNamesPlugin=class{constructor(){this.pluginName="string-concatenation"}parse(e){if("string"==typeof e||!(0,a.isConcatNode)(e))return null;const t=function(e){const t=o(e);if(!t)return;const s=t.startsWith("+")?1:0,r=t.endsWith("+")?t.length-1:t.length;return t.substring(s,r)}(e);return t?(0,i.parseString)(t):null}setClasses(e){return 0===e.length||e.length>1||!(0,r.isConcatStringClassUsage)(e[0])?null:e[0].node}}},64419:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateStringClassNamesPlugin=void 0;const r=s(20009),n=s(9240),i=s(58270);t.TemplateStringClassNamesPlugin=class{constructor(){this.pluginName="template-string"}parse(e,t){return"string"!=typeof e&&(0,n.isNodeOfKind)("template-string",e)?e.elements.flatMap((e=>(0,n.isTemplateText)(e)?(0,i.parseString)(e.text):[t(e)])):null}setClasses(e,t,s){return e.find((e=>(0,r.isConditionalClassUsage)(e)))?null:(0,n.createTemplateNode)({astNodeId:t(),elements:e.reduce(((e,i)=>{const a=e[e.length-1];if((0,r.isStringClassUsage)(i))a&&(0,n.isTemplateText)(a)?a.text+=" "+i.className:e.push((0,n.createTemplateText)({astNodeId:t(),text:a?" "+i.className:i.className}));else if((0,r.isUnknownClassUsage)(i))a&&e.push((0,n.createTemplateText)({astNodeId:t(),text:" "})),e.push(i.ast);else{const r=s(i),o="string"==typeof r?r:"";a&&((0,n.isTemplateText)(a)?a.text+=" "+o:e.push((0,n.createTemplateText)({astNodeId:t(),text:" "+o}))),"string"!=typeof r&&e.push(r)}return e}),[])})}}},7514:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getClassesFromProp=void 0;const r=s(9240),n=s(20009);t.getClassesFromProp=(e,t,s,i,a,o)=>{if(!e||"boolean"==typeof e)return{classes:[],isKnownFormat:!0};const l=e=>{const s=a.getLanguage(t),r=a.getFileAPI(t).getNodeByID(e.astNodeId);return s&&r?s.getText(r):""};for(const a of[...s].reverse()){const s=a.parse(e,(e=>{if((0,r.isSimpleFileReferenceNode)(e)||(0,r.isNodeOfKind)("property-access",e)&&(0,r.isSimpleFileReferenceNode)(e.reference)){const s=(0,r.isSimpleFileReferenceNode)(e)?e.targetFile:(0,r.isSimpleFileReferenceNode)(e.reference)?e.reference.targetFile:"";if(s){const{resolvedRequest:r}=o(t,s);if(r){const s=i.getStyleEditing(r);if(s&&s.parseJSClassImport){const r=s.parseJSClassImport(e,(e=>o(t,e).resolvedRequest||""));if(r)return r}}}}const s=l(e);return(0,n.unknownClassUsage)({title:s,ast:e,code:s})}),l);if(s)return{classes:s,isKnownFormat:!0}}return{classes:[],isKnownFormat:!1}}},34917:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.classNameConvertor=void 0;const r=s(5163),n=s(91570),i=s(8260),a=s(9240),o=r.__importDefault(s(60270)),l=s(7514),c=s(76218);t.classNameConvertor=(e,t,s,r,d)=>({kind:"className",language:"typescript",isApplicable:e=>o.default.isJsxAttribute(e)&&"className"===e.name.text,defaultConfig:{},modifications:{},convert(r,n){if(!r.initializer)return{astNodeId:n.getNodeId(r),kind:"className",isKnownFormat:!0,classes:[]};const a=new i.ProjectionConvertor(n.filePath,n.lang,n.sourceFile,n.idService);a.registerPassThroughConvertor(i.expressionStatementPassThrough),a.registerPassThroughConvertor(i.variableStatementPassThrough),a.registerPassThroughConvertor(i.parenthesizedExpressionPassThrough),a.registerConvertor(c.concatConvertor);for(const e of i.basePlugins)a.registerConvertor(e);const g=o.default.isStringLiteral(r.initializer)?r.initializer.text:r.initializer.expression?a.convertLeaf(r.initializer.expression):"";return{astNodeId:n.getNodeId(r),kind:"className",...(0,l.getClassesFromProp)(g,n.sourceFile.fileName,[...e],t,s,d)}},generate(s,i){let o=null;const l=i.getFilePath(),c=e=>(0,n.getRelativeModulePath)(i.getFilePath(),e);for(const n of[...e].reverse())if(n.setClasses&&(o=n.setClasses(s.classes,(()=>r(l)),(e=>{const s=e.importedFrom,n=t.getStyleEditing(s);if(n&&n.writeJSClassImport)return n.writeJSClassImport(e,{generateId:()=>r(l),toLocalPath:c});throw new Error("plugin not found")}),c),o))break;if(!o)return[];if("string"==typeof o)return[(0,a.startNode)(s.astNodeId),`className="${o}"`,(0,a.endNode)(s.astNodeId)];const d=i.generate(o);return[(0,a.startNode)(s.astNodeId),"className={",...d,"}",(0,a.endNode)(s.astNodeId)]}})},76218:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.concatConvertor=void 0;const r=s(5163),n=s(9240),i=r.__importStar(s(60270)),a=s(68648);t.concatConvertor={kind:"concat",language:"typescript",isApplicable:e=>(0,i.isBinaryExpression)(e)&&e.operatorToken.kind===i.default.SyntaxKind.PlusToken,convert:(e,t)=>(0,a.createConcatNode)({astNodeId:t.getNodeId(e),left:t.convertLeaf(e.left),right:t.convertLeaf(e.right)}),modifications:{},generate:(e,t)=>[(0,n.startNode)(e.astNodeId),...t.generate(e.left),"+",...t.generate(e.right),(0,n.endNode)(e.astNodeId)],defaultConfig:{}}},88122:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OwnerStylingFileService=void 0;const r=s(60270);t.OwnerStylingFileService=class{constructor(e,t,s){this.idService=e,this.fs=t,this.getComponentStylingFilePath=s}getStylingFilePath(e,t){const s=this.getOwnName(t),n=this.getComponentStylingFilePath(e,s),i=this.idService.getFileAPI(e).getSourceFile();for(const t of i.statements)if((0,r.isImportDeclaration)(t)&&(0,r.isStringLiteral)(t.moduleSpecifier)){const s=this.fs.resolve(e,t.moduleSpecifier.text);if(s===n)return s}}createStylingFile(e,t){const s=this.getOwnName(t),r=this.getComponentStylingFilePath(e,s);return this.fs.fileExistsSync(r)||(this.fs.ensureDirectorySync(this.fs.dirname(r)),this.fs.writeFileSync(r,"")),r}getOwnName(e){return e.names[0].name}}},46678:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CSS_PARSE_ERROR=void 0,t.CSS_PARSE_ERROR="CSS_PARSE_ERROR"}}]);