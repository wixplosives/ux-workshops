(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[7812],{84253:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNonCommittedDeclarationNode=t.createOpenedShorthandDeclarationNode=t.createDeclarationNode=t.cssBuildVar=t.cssNativeVar=t.getFullExpression=t.getVariableExpression=t.getVariableName=t.isFullExpressionDeclaration=t.isNonCommittedDeclaration=t.isOpenedShortHand=t.isDeclaration=t.isDeclarationExpressionItem=t.isValueFunction=t.isValueExpression=t.isBuildVar=t.isNativeVar=void 0;var i=n(5163);function r(e){return e&&"native"===e.kind}function o(e){return e&&"expression"===e.kind}function s(e){return e&&"function"===e.kind}function a(e){return e&&("native"===e.kind||"build"===e.kind||"expression"===e.kind||"function"===e.kind)}t.isNativeVar=r,t.isBuildVar=function(e){return e&&"build"===e.kind},t.isValueExpression=o,t.isValueFunction=s,t.isDeclarationExpressionItem=a,t.isDeclaration=function(e){return e&&"declaration"===e.kind},t.isOpenedShortHand=function(e){return e&&"opened-shorthand"===e.kind},t.isNonCommittedDeclaration=function(e){return e&&"non-committed-declaration"===e.kind},t.isFullExpressionDeclaration=function(e){return 1===e.value.length&&a(e.value[0])},t.getVariableName=function(e){return s(e)?e.displayName:o(e)?e.code:e.sourceName},t.getVariableExpression=function(e){return r(e)?"var(".concat(e.sourceName,")"):e.code},t.getFullExpression=function(e){return(0,t.isFullExpressionDeclaration)(e)?e.value[0]:null},t.cssNativeVar=function(e){return{targetName:e.targetName||e.sourceName,sourceName:e.sourceName,kind:"native"}},t.cssBuildVar=function(e){return(0,i.__assign)((0,i.__assign)({id:e.definitionFile+"#"+e.sourceName},e),{kind:"build"})},t.createDeclarationNode=function(e){return(0,i.__assign)((0,i.__assign)({important:!1},e),{kind:"declaration"})},t.createOpenedShorthandDeclarationNode=function(e){return(0,i.__assign)((0,i.__assign)({important:!1},e),{kind:"opened-shorthand"})},t.createNonCommittedDeclarationNode=function(e){return(0,i.__assign)((0,i.__assign)({important:!1},e),{kind:"non-committed-declaration"})}},79180:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(5163);i.__exportStar(n(359),t),i.__exportStar(n(28534),t)},96496:(e,t,n)=>{e.exports=n(79180)},44899:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(5163).__importDefault(n(13111)),r=n(60814),o=n(4511),s=n(96496),a=n(91570);i.default.setup(o.previewEnv,(({appliedCssRulesRM:e,allCssRulesInDocumentRM:t,selectorDomHits:n},{editing:{domStructureInspector:i},computedStyles:{onStyleOrDomChangeSlot:o}})=>{const l=e=>{const t=i.getFrameworkStructureById(e);if(!t||!t.node)return{value:{rules:[]},status:{valid:!1,message:"dom node not found"}};const n=(0,s.getDocumentRules)(),r=new Map,o=t.node;return o&&o instanceof Element&&(0,s.getAppliedRulesForEl)(o,n).forEach((e=>{const{filePath:t,nodeId:n}=(0,s.getRuleId)(e);r.set(`${t}|${n}`,e)})),{value:{rules:[...r.values()].map((e=>({selector:e.selectorText,cssText:e.cssText,id:(0,s.getRuleId)(e)})))}}},u=()=>({value:{rules:[...(0,s.getDocumentRules)()].map((e=>{const t=(0,s.getRuleId)(e);if("unknown"!==t.filePath)return{selector:e.selectorText,cssText:e.cssText,id:t}})).filter((e=>void 0!==e))}}),c=({selector:e})=>{let t;try{t=window.document.querySelectorAll(e)}catch(e){t=[]}return[...t].reduce(((e,t)=>{var n;const r=i.getStructureInfoByElement(t);if(r){const{id:t,components:i}=r,o=null===(n=(0,a.last)(i))||void 0===n?void 0:n.location,s=null==o?void 0:o.astNodeId,l=null==o?void 0:o.fileName;t&&s&&l&&(e[t]={id:t,astNodeId:s,filePath:l})}return e}),{})},d=t.provide({handler:{provide:u}}),p=n.provide({handler:{provide:e=>({value:c(e)})}}),m=e.provide({handler:{provide:l}});return o.register((()=>{const e=m.getOpenResources();for(const t of e){const e=(0,r.deserializeId)(t),n=m.get(e),i=l(e),o=n.getLatest();JSON.stringify(i.value)!==JSON.stringify(o)&&n.applyChange((0,r.fullChange)(i.value))}if(d.getOpenResources().length>0){const e=d.get({}),t=u(),n=e.getLatest();JSON.stringify(t.value)!==JSON.stringify(n)&&e.applyChange((0,r.fullChange)(t.value))}})),{appliedCssRulesRM:m,allCssRulesInDocumentRM:d,selectorDomHits:p}}))}}]);