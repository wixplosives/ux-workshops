(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[2899],{54169:e=>{e.exports=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n=[],r="string"==typeof e?[e]:e.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(var i=0;i<r.length;i++){var a=void 0;(a=r[i].match(/\n[\t ]+/g))&&n.push.apply(n,a)}if(n.length){var s=Math.min.apply(Math,n.map((function(e){return e.length-1}))),m=new RegExp("\n[\t ]{"+s+"}","g");for(i=0;i<r.length;i++)r[i]=r[i].replace(m,"\n")}r[0]=r[0].replace(/^\r?\n/,"");var l=r[0];for(i=0;i<t.length;i++)l+=t[i]+r[i+1];return l}},34909:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENTS_SIDEBAR_PANEL_TYPE=void 0;const n=o(5163),r=o(93849),i=n.__importDefault(o(2206)),a=n.__importDefault(o(91821)),s=n.__importDefault(o(71815)),m=n.__importDefault(o(93208)),l=o(5689);t.COMPONENTS_SIDEBAR_PANEL_TYPE="componentsPanel",t.default=new r.Feature({id:t.COMPONENTS_SIDEBAR_PANEL_TYPE,dependencies:[i.default.asEntity,a.default.asEntity,m.default.asEntity,s.default.asEntity],api:{componentsPanelHeaderSlot:r.Slot.withType().defineEntity(l.mainEnv)}})},80752:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=o(5163);var r=o(34909);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(r).default}}),n.__exportStar(o(34909),t)},70931:(e,t,o)=>{e.exports=o(80752)},1105:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(5163),r=n.__importDefault(o(70931)),i=n.__importStar(o(2206)),a=n.__importDefault(o(91821)),s=n.__importDefault(o(93208)),m=n.__importDefault(o(93673)),l=n.__importDefault(o(65502)),p=n.__importDefault(o(94078)),d=n.__importDefault(o(94400)),c=o(93849);t.default=new c.Feature({id:"newComponent",dependencies:[r.default.asEntity,i.default.asEntity,s.default.asEntity,m.default.asEntity,l.default.asEntity,a.default.asEntity,p.default.asEntity,d.default.asEntity],api:{newComponentService:c.Service.withType().defineEntity(i.processingEnv).allowRemoteAccess(),newComponentConfig:i.default.api.pluggableProjectConfig.entry({},"newComponent")}})},17179:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(5163).__importDefault(o(1105)),r=o(2206),i=o(66943);n.default.setup(r.processingEnv,(({newComponentConfig:e},{project:{pluggableProjectConfig:t,fileNamingConventionConfig:o,projectService:n,fs:a},simulationCapabilities:{simulationProcessingService:s},fileComponents:{demoComponentLocationsManager:m},simpleAST:{idService:l}})=>{const p=t.get(r.PROJECT_CONFIG_NAME),d=p.isValid()?p.get(e):{},c=p.isValid()?p.get(o):void 0;return{newComponentService:new i.NewComponentService(l,m,{newComponent:d,fileNamingConvention:c},a,s,n.getProjectPath())}}))},77475:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultFileNamingConvention=t.divTemplateId=t.nullTemplateId=t.defaultComponentName=void 0;const n=o(91570);t.defaultComponentName="NewComponent",t.nullTemplateId="null",t.divTemplateId="div",t.defaultFileNamingConvention=n.NamingConvention.KebabCase},66943:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NewComponentService=void 0;const n=o(91570),r=o(98066),i=o(71790),a=o(77475),s=o(59485);t.NewComponentService=class{constructor(e,t,o,n,r,i){this.idService=e,this.simulationComponentsLocationsManager=t,this.rawConfig=o,this.fs=n,this.simulationProcessingService=r,this.projectPath=i}async createComponent(e){const{componentName:t,templateId:o,componentDir:n,simulationName:a,simulationPath:s}=e,m=this.getConfig();if(m.status===i.ResultStatus.Error)return{status:m.status,errors:m.errors};const l=this.validateDataForComponentCreation(e);if(l)return{status:i.ResultStatus.Error,errors:l};const p=this.getTemplate(o,t,m.data.fileNamingConvention);if(!p)throw new Error(i.newComponentErrorMessages[i.ErrorCode.TemplateNotFound]);const d=this.toAbsolutePath(n),c=this.fs.join(d,p.getComponentFileName()),u=this.toAbsolutePath(s),h=p.getComponentExportName(),{writeFileSync:C,ensureDirectorySync:g}=this.fs;g(d);const f=this.waitForSimulatedComponentsResourceUpdate();for(const e of p.getFiles())C(this.fs.join(d,e.name),e.contents);return this.simulationProcessingService.createDemo(u,a,(0,r.getComponentRef)(c,h)),await f,{status:i.ResultStatus.Success,data:{componentExportName:h,componentPath:c,simulationPath:u}}}getInitialDataForDialog(){const e=this.getConfig();if(e.status===i.ResultStatus.Error)return e;const t=this.createTemplateRegistry(),o=this.projectPath,n=a.defaultComponentName,r=t.getTemplateDetails(),s=r[0].id,m=this.suggestDataForDialog(n,s);return m.status===i.ResultStatus.Error?m:{status:i.ResultStatus.Success,data:{componentName:n,templateList:r,projectPath:o,templateId:s,...m.data}}}suggestDataForDialog(e,t,o){var a,s;null!=o||(o=this.suggestSimulationName(e));const m=this.getConfig();if(m.status===i.ResultStatus.Error)return m;const{fileNamingConvention:l}=m.data,{componentsPath:p}=m.data.newComponent,d=(0,n.getPackagePath)(this.fs.join(this.projectPath,p),this.fs),c=d?this.fs.relative(this.projectPath,d):"",u=null!==(s=null===(a=this.getTemplate(t,e,l))||void 0===a?void 0:a.getFileNames())&&void 0!==s?s:[],h=(0,n.toNamingConvention)(e,l),C=h,g=(0,n.toNamingConvention)(o,l)+r.boardExtension,f=this.fs.join(p,h),N=this.fs.join(c,"src",r.directoryForSimulations,C,g);return{status:i.ResultStatus.Success,data:{componentFiles:u,componentDir:f,simulationName:o,simulationPath:N}}}getConfig(){var e;const{rawConfig:t}=this;if(!(0,n.isRecord)(t)||!(0,n.isRecord)(t.newComponent))return{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigComponentsPathNotSpecified,message:i.newComponentErrorMessages[i.ErrorCode.ConfigComponentsPathNotSpecified]}}};const{componentsPath:o,templatesPath:r}=t.newComponent,s=Object.keys(t.newComponent).filter((e=>!(0,i.isNewComponentConfigOption)(e))).map((e=>`"${e}"`));return s.length?{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigUnknownOptions,message:i.newComponentErrorMessages[i.ErrorCode.ConfigUnknownOptions](s.join(", "))}}}:void 0===o?{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigComponentsPathNotSpecified,message:i.newComponentErrorMessages[i.ErrorCode.ConfigComponentsPathNotSpecified]}}}:"string"==typeof o&&(0,i.isSourcePathFormatValid)(o,this.fs.sep)?this.fs.directoryExistsSync(this.fs.join(this.projectPath,o))?void 0===r||"string"==typeof r&&(0,i.isSourcePathFormatValid)(r,this.fs.sep)?void 0===r||this.fs.directoryExistsSync(this.fs.join(this.projectPath,r))?void 0===t.fileNamingConvention||"string"==typeof t.fileNamingConvention&&(0,i.isNamingConventionValid)(t.fileNamingConvention)?(0,n.getPackagePath)(this.fs.join(this.projectPath,o),this.fs)?{status:i.ResultStatus.Success,data:{newComponent:{componentsPath:o,templatesPath:r},fileNamingConvention:null!==(e=t.fileNamingConvention)&&void 0!==e?e:a.defaultFileNamingConvention}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.PackageJsonNotFound,message:i.newComponentErrorMessages[i.ErrorCode.PackageJsonNotFound]}}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigFileNamingConventionIsInvalid,message:i.newComponentErrorMessages[i.ErrorCode.ConfigFileNamingConventionIsInvalid]}}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigTemplatesPathDirNotFound,message:i.newComponentErrorMessages[i.ErrorCode.ConfigTemplatesPathDirNotFound](r)}}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigTemplatesPathInvalidFormat,message:i.newComponentErrorMessages[i.ErrorCode.ConfigTemplatesPathInvalidFormat](String(r))}}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigComponentsPathDirNotFound,message:i.newComponentErrorMessages[i.ErrorCode.ConfigComponentsPathDirNotFound](o)}}}:{status:i.ResultStatus.Error,errors:{config:{code:i.ErrorCode.ConfigComponentsPathInvalidFormat,message:i.newComponentErrorMessages[i.ErrorCode.ConfigComponentsPathInvalidFormat](String(t.componentsPath))}}}}suggestSimulationName(e){return e}validateDataForComponentCreation(e){const{componentName:t,templateId:o,componentDir:n,simulationName:r,simulationPath:a}=e,s={...(0,i.validateComponentName)(t),...this.validateTemplate(o),...this.validateComponentDir(n),...this.validateSimulationName(r),...this.validateSimulationPath(a)};return Object.keys(s).length?s:void 0}validateTemplate(e){const t=this.createTemplateRegistry().findTemplate(e);if(!t)return{templateId:{code:i.ErrorCode.TemplateNotFound,message:i.newComponentErrorMessages[i.ErrorCode.TemplateNotFound]}};const o=t.validate();return o?{templateId:o}:void 0}validateComponentDir(e){if(!(0,i.isSourcePathFormatValid)(e,this.fs.sep))return{componentDir:{code:i.ErrorCode.ComponentDirInvalidFormat,message:i.newComponentErrorMessages[i.ErrorCode.ComponentDirInvalidFormat]}};const t=this.toAbsolutePath(e);if(!(0,n.isSubPath)(t,this.projectPath,this.fs))return{componentDir:{code:i.ErrorCode.ComponentDirOutOfProject,message:i.newComponentErrorMessages[i.ErrorCode.ComponentDirOutOfProject]}};const{directoryExistsSync:o,readdirSync:r}=this.fs;if(o(t)){const e=r(t),o=0===e.length,n=e.every((e=>e.startsWith(".")));if(!o&&!n)return{componentDir:{code:i.ErrorCode.ComponentDirIsNotEmpty,message:i.newComponentErrorMessages[i.ErrorCode.ComponentDirIsNotEmpty]}}}}validateSimulationName(e){return e&&(0,i.isSimulationNameValid)(e)?void 0:{simulationName:{code:i.ErrorCode.BoardNameIsInvalid,message:i.newComponentErrorMessages[i.ErrorCode.BoardNameIsInvalid]}}}validateSimulationPath(e){if(!(0,i.isSourcePathFormatValid)(e,this.fs.sep))return{simulationPath:{code:i.ErrorCode.BoardPathInvalidFormat,message:i.newComponentErrorMessages[i.ErrorCode.BoardPathInvalidFormat]}};if(this.fs.basename(e)===r.boardExtension)return{simulationPath:{code:i.ErrorCode.BoardFileNameIsMissing,message:i.newComponentErrorMessages[i.ErrorCode.BoardFileNameIsMissing]}};const t=this.toAbsolutePath(e);return(0,n.isSubPath)(t,this.projectPath,this.fs)?this.fs.existsSync(t)?{simulationPath:{code:i.ErrorCode.BoardAlreadyExists,message:i.newComponentErrorMessages[i.ErrorCode.BoardAlreadyExists]}}:void 0:{simulationPath:{code:i.ErrorCode.BoardFileOutOfProject,message:i.newComponentErrorMessages[i.ErrorCode.BoardFileOutOfProject]}}}toAbsolutePath(e){return this.fs.isAbsolute(e)?e:this.fs.join(this.projectPath,e)}getTemplate(e,t,o){const n=this.createTemplateRegistry().findTemplate(e);if(n)return n.setComponentName(t),n.setFileNamingConvention(o),n}waitForSimulatedComponentsResourceUpdate(){return new Promise((e=>{this.simulationComponentsLocationsManager.get(this.projectPath).subscribeOnce((()=>e()))}))}createTemplateRegistry(){const e=this.getConfig();if(e.status===i.ResultStatus.Error)throw new Error("Config is not valid");const t=new s.TemplateRegistry(this.fs,this.idService),{templatesPath:o}=e.data.newComponent;return o&&t.setTemplatesPath(this.fs.join(this.projectPath,o)),t}}},28807:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DivTemplate=void 0;const n=o(5163),r=o(91570),i=n.__importDefault(o(54169)),a=o(77475);t.DivTemplate=class{getId(){return a.divTemplateId}getTitle(){return"Div"}validate(){}setComponentName(e){this.componentName=e}setFileNamingConvention(e){this.fileNamingConvention=e}getFileNames(){return[this.getComponentFileName()]}getFiles(){return[{name:this.getComponentFileName(),contents:this.generateComponentFileContents()}]}getComponentFileName(){return`${(0,r.toNamingConvention)(this.getComponentName(),this.getFileNamingConvention())}.tsx`}getComponentExportName(){return this.getComponentName()}getFileNamingConvention(){if(!this.fileNamingConvention)throw new Error("File naming convention is not set for a template");return this.fileNamingConvention}getComponentName(){if(!this.componentName)throw new Error("Component name is not set for a template");return this.componentName}generateComponentFileContents(){const e=this.getComponentName();return(0,i.default)(`\n            import React from 'react';\n\n            export interface ${e}Props {\n                className?: string;\n            }\n\n            export const ${e}: React.FC<${e}Props> = ({ className = '' }) => (\n                <div className={className}>${e}</div>\n            );\n        `)}}},88311:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileBasedTemplate=void 0;const n=o(91570),r=o(71790),i="NewComponent",a=(0,n.toPascalCase)(i),s=(0,n.toKebabCase)(i),m=(0,n.toCamelCase)(i),l=[`${a}.tsx`,`${s}.tsx`,`${m}.tsx`];t.FileBasedTemplate=class{constructor(e,t,o){this.templatePath=e,this.fs=t,this.idService=o}getId(){return this.templatePath}getTitle(){return this.fs.basename(this.templatePath)}validate(){if(!this.getComponentTemplateFileName())return{code:r.ErrorCode.ComponentTemplateNotFound,message:r.newComponentErrorMessages[r.ErrorCode.ComponentTemplateNotFound]};const e=this.getComponentTemplateExportNames();return e.includes(i)||e.includes("default")?void 0:{code:r.ErrorCode.ComponentTemplateNotExported,message:r.newComponentErrorMessages[r.ErrorCode.ComponentTemplateNotExported]}}getFileNames(){return this.fs.readdirSync(this.templatePath).map(this.generateFileName.bind(this))}getFiles(){return this.fs.readdirSync(this.templatePath).map((e=>{const t=this.fs.join(this.templatePath,e);return{name:this.generateFileName(e),contents:this.generateFileContents(t)}}))}getComponentFileName(){const e=this.getComponentTemplateFileName();if(!e)throw new Error("This template isn't valid - no component file was found.");return this.generateFileName(e)}getComponentExportName(){const e=this.getComponentTemplateExportNames();if(e.includes(i))return this.getComponentName();if(e.includes("default"))return"default";throw new Error("A component export in a template not found.")}setComponentName(e){this.componentName=e}setFileNamingConvention(){}getComponentName(){if(!this.componentName)throw new Error("Component name is not set for a template");return this.componentName}getComponentTemplateFileName(){return this.fs.readdirSync(this.templatePath).find((e=>l.includes(e)))}generateFileName(e){return this.replaceComponentNamePlaceholders(e)}generateFileContents(e){const t=this.fs.readFileSync(e,"utf8");return this.replaceComponentNamePlaceholders(t)}replaceComponentNamePlaceholders(e){const t=this.getComponentName();return(e=(e=e.split(a).join(t)).split(s).join((0,n.toKebabCase)(t))).split(m).join((0,n.toCamelCase)(t))}getComponentTemplatePath(){const e=this.getComponentTemplateFileName();if(!e)throw new Error("A component file in a template not found");return this.fs.join(this.templatePath,e)}getComponentTemplateExportNames(){const e=this.getComponentTemplatePath(),t=this.idService.getLanguage(e);if(!t)throw new Error("Language plugin for component template not found");if(!t.getExports)throw new Error("Language plugin does not have getExport function");const o=t.getExports(e);return Object.keys(o)}}},53373:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NullTemplate=void 0;const n=o(5163),r=o(91570),i=n.__importDefault(o(54169)),a=o(77475);t.NullTemplate=class{getId(){return a.nullTemplateId}getTitle(){return"Empty"}getFileNames(){return[this.getComponentFileName()]}validate(){}setComponentName(e){this.componentName=e}setFileNamingConvention(e){this.fileNamingConvention=e}getComponentFileName(){return`${(0,r.toNamingConvention)(this.getComponentName(),this.getFileNamingConvention())}.tsx`}getComponentExportName(){return this.getComponentName()}getFiles(){return[{name:this.getComponentFileName(),contents:this.generateComponentFileContents()}]}getFileNamingConvention(){if(!this.fileNamingConvention)throw new Error("File naming convention is not set for a template");return this.fileNamingConvention}getComponentName(){if(!this.componentName)throw new Error("Component name is not set for a template");return this.componentName}generateComponentFileContents(){return(0,i.default)(`\n            import type { FC } from 'react';\n\n            export const ${this.getComponentName()}: FC = () => {\n                return null;\n            };\n\n        `)}}},59485:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateRegistry=void 0;const n=o(28807),r=o(53373),i=o(88311);t.TemplateRegistry=class{constructor(e,t){this.fs=e,this.idService=t}findTemplate(e){return this.getTemplates().find((t=>t.getId()===e))}setTemplatesPath(e){this.absoluteTemplatesPath=e}getTemplateDetails(){return this.getTemplates().map((e=>({id:e.getId(),title:e.getTitle()})))}setIdService(e){this.idService=e}getIdService(){if(!this.idService)throw new Error("IDService is not set for template registry");return this.idService}getTemplates(){const e=this.hasTemplatePath()?this.getFileBasedTemplates():[];return e.length?e:this.getBuiltInTemplates()}getBuiltInTemplates(){return[new n.DivTemplate,new r.NullTemplate]}getFileBasedTemplates(){const e=this.fs.readdirSync(this.getTemplatesPath());return e?this.getTemplateDirectories(e).map((e=>{const t=this.fs.join(this.getTemplatesPath(),e);return new i.FileBasedTemplate(t,this.fs,this.getIdService())})):[]}getTemplatesPath(){if(!this.absoluteTemplatesPath)throw new Error("The templatesPath is not set for template registry");return this.absoluteTemplatesPath}hasTemplatePath(){return void 0!==this.absoluteTemplatesPath}getTemplateDirectories(e){return e.filter((e=>this.fs.lstatSync(this.fs.join(this.getTemplatesPath(),e)).isDirectory()&&!e.startsWith(".")))}}},71311:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.links=t.newComponentErrorMessages=void 0;const n=o(42313);t.default={openDialogButtonTitle:"New Component",newComponentDialog:{title:"Create a Component",subtitle:"Enter a name for your component and choose a template to use.",configErrorDialogTitle:"Configuration Error",componentDetails:"Component Details",boardDetails:"Board Details",okButton:"OK",cancelButton:"Cancel",submitButton:"Create",advancedButton:"Advanced",browseButton:"Browse",componentNameLabel:"Component Name",templateLabel:"Template",filesLabel:"Files",componentDirLabel:"Relative Path",boardPathLabel:"Relative Path",boardNameLabel:"Name",componentNamePlaceholder:"Enter Component Name",componentDirPlaceholder:"Enter Directory Path",boardNamePlaceholder:"Enter Board Name",boardPathPlaceholder:"Enter Board Path"}},t.newComponentErrorMessages={[n.ErrorCode.ConfigUnknownOptions]:e=>`The new component config in wcs.config.js has unknown options: ${e}. Make sure that option keys are spelled correctly.`,[n.ErrorCode.ConfigComponentsPathNotSpecified]:"The path for new components hasn’t been configured yet. Ask the project owner to configure it.",[n.ErrorCode.ConfigComponentsPathInvalidFormat]:e=>`The configured path for new components ("${e}") cannot contain special characters, two periods in sequence, or be inside of a folder named node_modules.\nAsk the project owner to change the path in wcs.config.js.`,[n.ErrorCode.ConfigComponentsPathDirNotFound]:e=>`The path configured in wcs.config.js for new components ("${e}") doesn't exist on this computer.\nPlease ask the project owner for assistance.`,[n.ErrorCode.ConfigTemplatesPathInvalidFormat]:e=>`The configured path for templates ("${e}") is not valid.\nAsk the project owner to change the path in wcs.config.js.`,[n.ErrorCode.ConfigTemplatesPathDirNotFound]:e=>`The configured path for templates ("${e}") does not exist.\nAsk the project owner to change the path in wcs.config.js.`,[n.ErrorCode.ConfigFileNamingConventionIsInvalid]:"The configured file naming convention is not valid.\nAsk the project owner to change the value in wcs.config.js.",[n.ErrorCode.PackageJsonNotFound]:"The component couldn’t be created because your project is missing its package.json file. Ask the project owner to add this file to the project.",[n.ErrorCode.ComponentNameIsInvalid]:"The component name must start with a capital letter and contain only numbers and Latin characters.",[n.ErrorCode.ComponentNameExists]:"A component with this name already exists. Choose a different name or change directory path in Advanced section.",[n.ErrorCode.ComponentDirInvalidFormat]:"The component directory path cannot contain special characters, two periods in sequence, or be inside of a folder named node_modules.",[n.ErrorCode.ComponentDirIsNotEmpty]:"A component directory with this name is not empty.\nGive your component directory a new name.",[n.ErrorCode.ComponentDirOutOfProject]:"The component directory cannot be outside of the project path.",[n.ErrorCode.TemplateNotFound]:"The selected template is not found. Make sure the template directory exists.",[n.ErrorCode.ComponentTemplateNotFound]:"The selected template is invalid. Make sure it contains a component file.",[n.ErrorCode.ComponentTemplateNotExported]:"The component template is not valid. Make sure the component file exports a component.",[n.ErrorCode.BoardNameIsInvalid]:"The board name can only contain numbers and Latin characters.",[n.ErrorCode.BoardPathInvalidFormat]:"The board path cannot contain special characters, two periods in sequence, or reside in the node_modules folder.",[n.ErrorCode.BoardAlreadyExists]:"A board with this file name already exists.\nGive your board a new name.",[n.ErrorCode.BoardFileOutOfProject]:"The board path cannot be outside of the project path.",[n.ErrorCode.BoardFileNameIsMissing]:"The board file name is missing.",[n.ErrorCode.ComponentCreationFailed]:e=>e},t.links={configErrorLink:{title:"Learn More",url:"https://component-studio.wixanswers.com/en/article/initial-configuration-for-new-components-and-templates#missing-path-error"},clickHereForMoreInfo:{title:"Click here for more information",url:"https://component-studio.wixanswers.com/en/article/about-components#creating-new-components"}}},42313:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeErrors=t.hasAdvancedFieldError=t.hasFieldError=t.ErrorCode=void 0;const n=o(91570);var r;function i(e){return!!(e.componentDir||e.simulationName||e.simulationPath)}!function(e){e.ConfigUnknownOptions="CONFIG_UNKNOWN_OPTIONS",e.ConfigComponentsPathNotSpecified="CONFIG_COMPONENTS_PATH_NOT_SPECIFIED",e.ConfigComponentsPathInvalidFormat="CONFIG_COMPONENTS_PATH_INVALID_FORMAT",e.ConfigComponentsPathDirNotFound="CONFIG_COMPONENTS_PATH_DIR_NOT_FOUND",e.ConfigTemplatesPathInvalidFormat="CONFIG_TEMPLATES_PATH_INVALID_FORMAT",e.ConfigTemplatesPathDirNotFound="CONFIG_TEMPLATES_PATH_DIR_NOT_FOUND",e.ConfigFileNamingConventionIsInvalid="CONFIG_FILE_NAMING_CONVENTION_IS_INVALID",e.PackageJsonNotFound="PACKAGE_JSON_NOT_FOUND",e.ComponentNameIsInvalid="COMPONENT_NAME_IS_INVALID",e.ComponentNameExists="COMPONENT_NAME_EXISTS",e.ComponentDirInvalidFormat="COMPONENT_DIR_INVALID_FORMAT",e.ComponentDirIsNotEmpty="COMPONENT_DIR_IS_NOT_EMPTY",e.ComponentDirOutOfProject="COMPONENT_DIR_OUT_OF_PROJECT",e.TemplateNotFound="TEMPLATE_NOT_FOUND",e.ComponentTemplateNotFound="COMPONENT_TEMPLATE_NOT_FOUND",e.ComponentTemplateNotExported="COMPONENT_TEMPLATE_NOT_EXPORTED",e.BoardNameIsInvalid="BOARD_NAME_IS_INVALID",e.BoardPathInvalidFormat="BOARD_PATH_INVALID_FORMAT",e.BoardAlreadyExists="BOARD_ALREADY_EXISTS",e.BoardFileOutOfProject="BOARD_FILE_OUT_OF_PROJECT",e.BoardFileNameIsMissing="BOARD_FILE_NAME_IS_MISSING",e.ComponentCreationFailed="COMPONENT_CREATION_FAILED"}(r=t.ErrorCode||(t.ErrorCode={})),t.hasFieldError=function(e){return!!e.componentName||i(e)},t.hasAdvancedFieldError=i,t.removeErrors=function(e,t){var o;const i={};for(const o of(0,n.getObjectKeys)(e))t.includes(o)||(i[o]=e[o]);return t.includes("componentDir")&&(null===(o=e.componentName)||void 0===o?void 0:o.code)===r.ComponentNameExists&&delete i.componentName,i}},71790:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(5163);n.__exportStar(o(71311),t),n.__exportStar(o(42313),t),n.__exportStar(o(50277),t),n.__exportStar(o(92294),t)},50277:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ResultStatus=t.isNewComponentConfigOption=void 0;const o=["componentsPath","templatesPath"];var n;t.isNewComponentConfigOption=function(e){return o.some((t=>t===e))},(n=t.ResultStatus||(t.ResultStatus={})).Success="success",n.Error="error"},92294:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateComponentName=t.isNamingConventionValid=t.isSourcePathFormatValid=t.isSimulationNameValid=t.isComponentNameValid=void 0;const n=o(91570),r=o(71311),i=o(42313);function a(e){return!!e.trim()&&/^[A-Z][0-9A-Za-z_]*$/.test(e)}t.isComponentNameValid=a,t.isSimulationNameValid=function(e){return!!(e=e.trim())&&/^[\w\s()\-_.,']*$/.test(e)},t.isSourcePathFormatValid=function(e,t){return"\\"===t&&/^[a-z]:/i.test(e)&&(e=e.slice(2)),!(""===e.trim()||/[^\w\s()\-_.,'\\/]/i.test(e)||e.includes("..")||/node_modules/i.test(e)||"/"===t&&e.includes("\\"))},t.isNamingConventionValid=function(e){return Object.values(n.NamingConvention).some((t=>t===e))},t.validateComponentName=function(e){return a(e)?void 0:{componentName:{code:i.ErrorCode.ComponentNameIsInvalid,message:r.newComponentErrorMessages[i.ErrorCode.ComponentNameIsInvalid]}}}},84634:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(25199);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},25199:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(93849),r=o(5689);t.default=new n.Feature({id:"platformCapabilities",dependencies:[],api:{dialogService:n.Service.withType().defineEntity(r.mainEnv),openUrlService:n.Service.withType().defineEntity(r.mainEnv),shellService:n.Service.withType().defineEntity(r.mainEnv),windowService:n.Service.withType().defineEntity(r.mainEnv)},context:{main:r.mainEnv.withContext()}})},94078:(e,t,o)=>{e.exports=o(84634)}}]);