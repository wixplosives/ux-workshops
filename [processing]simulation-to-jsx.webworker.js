(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[4207],{11320:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.demoAstParsers=void 0;const r=o(26709),i=o(9240);t.demoAstParsers=[...i.commonSimpleAstParsers,r.demoPlugin].map((e=>e.nodeKind))},4601:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(5163);r.__exportStar(o(73676),t),r.__exportStar(o(11320),t),r.__exportStar(o(59114),t)},73676:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simulationAstParsers=void 0;const r=o(26709),i=o(9240),s=o(30802);t.simulationAstParsers=[...i.commonSimpleAstParsers,s.simulationPlugin,r.demoPlugin].map((e=>e.nodeKind))},59114:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},51321:(e,t,o)=>{e.exports=o(4601)},98066:(e,t,o)=>{e.exports=o(3092)},10107:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(5163),i=o(93849),s=r.__importStar(o(2206)),a=r.__importDefault(o(94400));t.default=new i.Feature({id:"simulationToJsx",dependencies:[a.default.asEntity,s.default.asEntity],api:{simulationToJsxService:i.Service.withType().defineEntity(s.processingEnv).allowRemoteAccess(),componentToJsxService:i.Service.withType().defineEntity(s.processingEnv).allowRemoteAccess()}})},59746:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(5163),i=o(2206),s=r.__importDefault(o(10107)),a=o(1278);s.default.setup(i.processingEnv,(({},{simpleAST:{simpleAST:e,idGenerator:t},project:{fs:o}})=>({simulationToJsxService:new a.SimulationToJsxConvertor(e,t,o),componentToJsxService:new a.ComponentToJsxConvertor(t,o)})))},71693:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ComponentToJsxConvertor=void 0;const r=o(91570),i=o(9240);t.ComponentToJsxConvertor=class{constructor(e,t){this.idGenerator=e,this.fs=t}convert(e,t,o){const s=()=>this.idGenerator.generateId(o),a=(0,r.getPackageJsonPath)(o,this.fs);return(0,i.createJSXElement)({astNodeId:s(),type:(0,i.createFileReferenceNode)({astNodeId:s(),targetFile:(0,r.createImportPath)({importedFilePath:t,targetFilePath:o,targetPackageJsonPath:a,fs:this.fs}),targetExport:e})})}}},47867:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DemoToJsxConvertor=void 0;const r=o(9240),i=o(98066),s=o(51321),a=o(91570),n=o(58611);t.DemoToJsxConvertor=class{constructor(e,t,o){this.simpleAstManager=e,this.idGenerator=t,this.fs=o}convert(e,t){const o=this.simpleAstManager.get({filePath:e.filePath,parsers:s.simulationAstParsers}),r=(0,i.getDemoNode)(o);if(!r)throw new Error("simulation not found");return this.convertDemo(r,e.filePath,t,(()=>this.idGenerator.generateId(t)))}convertDemo(e,t,o,r){const i=this.convertDemoNodeToJSXElement(e,r),s=(0,a.getPackageJsonPath)(o,this.fs);return this.adjustImportPaths({node:i,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:s}),i}convertDemoNodeToJSXElement(e,t){if((0,r.isSimpleFileReferenceNode)(e.demo))return this.convertComponentType(e.demo,e.props,t);if((0,i.isJSXFunction)(e.demo)&&this.isSimpleReturnRoot(e.demo))return(0,r.cloneNode)(e.demo.returnRoots[0].returnValue,t);throw new Error("Currently, demos with non-return roots and conditional returnRoots are not supported")}isSimpleReturnRoot(e){return(0,i.isJSXFunction)(e)&&1===e.returnRoots.length&&(0,r.isJSXElementNode)(e.returnRoots[0].returnValue)&&0===e.nonReturnRoots.length}convertComponentType(e,t,o){const{props:i,children:s}=(0,n.convertObjectToJSXProps)(t,o);return(0,r.createJSXElement)({astNodeId:o(),type:{...e,astNodeId:o()},children:s,props:i})}adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i}){(0,r.isSimpleFileReferenceNode)(e)&&(e.targetFile=(0,a.adjustRelativeImportPath)({importPath:e.targetFile,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i,fs:this.fs})),Object.values(e).forEach((e=>{Array.isArray(e)?e.forEach((e=>{this.adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i})})):"object"==typeof e&&e&&this.adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i})}))}}},1278:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(5163);r.__exportStar(o(71693),t),r.__exportStar(o(50313),t),r.__exportStar(o(47867),t),r.__exportStar(o(58611),t)},58611:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertObjectToJSXProps=void 0;const r=o(9240);function i(e){return!((0,r.isJSXElementNode)(e)||(0,r.isJSXExpressionNode)(e)||(0,r.isJSXTextNode)(e))}t.convertObjectToJSXProps=function(e,t){var o;let s=[];return{props:null===(o=null==e?void 0:e.properties)||void 0===o?void 0:o.flatMap((e=>{if((0,r.isPropertyNode)(e)&&(0,r.isStringNode)(e.name))return"children"===e.name.value?(s=(0,r.isArrayNode)(e.initializer)?e.initializer.elements.map((e=>i(e)?(0,r.isStringNode)(e)?(0,r.createJSXTextNode)({astNodeId:t(),value:e.value}):(0,r.createJSXExpressionNode)({astNodeId:t(),code:"",expression:(0,r.cloneNode)(e,t)}):(0,r.cloneNode)(e,t))):i(e.initializer)?[(0,r.isStringNode)(e.initializer)?(0,r.createJSXTextNode)({astNodeId:t(),value:e.initializer.value}):(0,r.createJSXExpressionNode)({astNodeId:t(),code:"",expression:(0,r.cloneNode)(e.initializer,t)})]:[(0,r.cloneNode)(e.initializer,t)],[]):[(0,r.createJSXPropNode)({astNodeId:t(),name:e.name.value,value:(0,r.isStringNode)(e.initializer)?e.initializer.value:(0,r.cloneNode)(e.initializer,t)})];throw new Error("prop name is not a string node")})),children:s}}},50313:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationToJsxConvertor=void 0;const r=o(9240),i=o(98066),s=o(51321),a=o(91570),n=o(58611);t.SimulationToJsxConvertor=class{constructor(e,t,o){this.simpleAstManager=e,this.idGenerator=t,this.fs=o}convert(e,t){const o=this.simpleAstManager.get({filePath:e.filePath,parsers:s.simulationAstParsers}),r=(0,i.getSimulationNode)(o);if(!r)throw new Error("simulation not found");return this.convertSimulation(r,e.filePath,t,(()=>this.idGenerator.generateId(t)))}convertSimulation(e,t,o,i){const s=(0,r.getSimpleObjectProp)(e.data.properties,"componentType").initializer;if(!(0,r.isSimpleFileReferenceNode)(s))throw new Error("component is not a reference");const l=(0,r.getSimpleObjectProp)(e.data.properties,"props");if(!(0,r.isObjectNode)(l.initializer))throw new Error("props is not an object");const{props:c,children:d}=(0,n.convertObjectToJSXProps)(l.initializer,i),p=(0,r.createJSXElement)({astNodeId:i(),type:{...s,astNodeId:i()},children:d,props:c}),u=(0,a.getPackageJsonPath)(o,this.fs);return this.adjustImportPaths({node:p,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:u}),p}adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i}){(0,r.isSimpleFileReferenceNode)(e)&&(e.targetFile=(0,a.adjustRelativeImportPath)({importPath:e.targetFile,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i,fs:this.fs})),Object.values(e).forEach((e=>{Array.isArray(e)?e.forEach((e=>{this.adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i})})):"object"==typeof e&&e&&this.adjustImportPaths({node:e,sourceFilePath:t,targetFilePath:o,targetPackageJsonPath:i})}))}}}}]);