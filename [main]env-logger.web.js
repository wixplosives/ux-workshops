(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[1680],{7210:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>c,keyframes:()=>r,namespace:()=>a,st:()=>u,stVars:()=>n,style:()=>l,vars:()=>i});const a="o294",o={root:"s1411",envData:"s672"},r={},n={},i={},c=s.stc.bind(null,a),l=s.sts.bind(null,a),u=l},64750:(e,t,s)=>{"use strict";s.r(t),s.d(t,{classes:()=>o,cssStates:()=>c,keyframes:()=>r,namespace:()=>a,st:()=>u,stVars:()=>n,style:()=>l,vars:()=>i});const a="o85",o={root:"s669",envData:"s672",button:"s673",copyButton:"s674"},r={},n={},i={},c=s.stc.bind(null,a),l=s.sts.bind(null,a),u=l},20329:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.universalCtrl=t.MOUSE=t.KEYBOARD=void 0;const a=s(91570);t.KEYBOARD={UNIDENTIFIED:"Unidentified",ESCAPE:"Escape",MINUS:"Minus",DASH:"Minus",EQUALS:"Equal",BACK_SPACE:"Backspace",TAB:"Tab",ENTER:"Enter",RETURN:"Enter",SHIFT:"Shift",CONTROL:"Control",ALT:"Alt",PAUSE:"Pause",CAPS_LOCK:"CapsLock",SPACE:"Space",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",PRINTSCREEN:"PrintScreen",INSERT:"Insert",DELETE:"Delete",0:"Digit0",1:"Digit1",2:"Digit2",3:"Digit3",4:"Digit4",5:"Digit5",6:"Digit6",7:"Digit7",8:"Digit8",9:"Digit9",A:"KeyA",B:"KeyB",C:"KeyC",D:"KeyD",E:"KeyE",F:"KeyF",G:"KeyG",H:"KeyH",I:"KeyI",J:"KeyJ",K:"KeyK",L:"KeyL",M:"KeyM",N:"KeyN",O:"KeyO",P:"KeyP",Q:"KeyQ",R:"KeyR",S:"KeyS",T:"KeyT",U:"KeyU",V:"KeyV",W:"KeyW",X:"KeyX",Y:"KeyY",Z:"KeyZ",META:"Meta",OS_LEFT:"OSLeft",CONTEXT_MENU:"ContextMenu",NUMPAD0:"Numpad0",NUMPAD1:"Numpad1",NUMPAD2:"Numpad2",NUMPAD3:"Numpad3",NUMPAD4:"Numpad4",NUMPAD5:"Numpad5",NUMPAD6:"Numpad6",NUMPAD7:"Numpad7",NUMPAD8:"Numpad8",NUMPAD9:"Numpad9",NUMPAD_MULTIPLY:"NumpadMultiply",NUMPAD_ADD:"NumpadAdd",NUMPAD_SUBTRACT:"NumpadSubtract",NUMPAD_DECIMAL:"NumpadDecimal",NUMPAD_DIVIDE:"NumpadDivide",NUMPAD_ENTER:"NumpadEnter",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F11",F12:"F12",F13:"F13",F14:"F14",F15:"F15",F16:"F16",F17:"F17",F18:"F18",F19:"F19",F20:"F20",F21:"F21",F22:"F22",F23:"F23",F24:"F24",NUM_LOCK:"NumLock",SCROLL_LOCK:"ScrollLock",SEMICOLON:"Semicolon",COMMA:"Comma",PERIOD:"Period",SLASH:"Slash",BACK_QUOTE:"Backquote",OPEN_BRACKET:"BracketLeft",BACK_SLASH:"Backslash",CLOSE_BRACKET:"BracketRight",QUOTE:"Quote",UNIVERSAL_CONTROL:a.isMac?"Meta":"Control"},t.MOUSE={WHEEL_VERTICAL:"wheelVertical",WHEEL_HORIZONTAL:"wheelHorizontal"},t.universalCtrl=a.isMac?t.KEYBOARD.META:t.KEYBOARD.CONTROL},90925:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163);a.__exportStar(s(20329),t),a.__exportStar(s(31287),t)},31287:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},62202:(e,t,s)=>{e.exports=s(90925)},28354:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163),o=s(93849),r=a.__importDefault(s(93208)),n=a.__importDefault(s(1529)),i=a.__importStar(s(2206));t.default=new o.Feature({id:"envLogger",dependencies:[i.default.asEntity,r.default.asEntity,n.default.asEntity],api:{itemProviders:o.Slot.withType().defineEntity(i.processingEnv),dataService:o.Service.withType().defineEntity(i.processingEnv).allowRemoteAccess()}})},69379:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163),o=a.__importDefault(s(87363)),r=s(62202),n=s(5689),i=a.__importDefault(s(28354)),c=s(17063),l=s(1251);i.default.setup(n.mainEnv,(({dataService:e},{shortcuts:{shortcutService:t},gui:{overlayPanelFactory:s,panelStore:a}})=>{t.on([r.KEYBOARD.UNIVERSAL_CONTROL,r.KEYBOARD.I],(e=>{e.preventDefault(),n()}),{forcedGlobal:!0});const n=async()=>{const t=await async function(){try{return await e.getItems()}catch(e){return[{title:"Error",text:`Error occurred while trying to get logged items:\n${String(e||"")}`}]}}();a.openOverlay({id:c.ENV_LOGGER_MODAL,panelType:c.ENV_LOGGER_MODAL,panelProps:{items:t}})};s.register({id:c.ENV_LOGGER_MODAL,factory:e=>o.default.createElement(l.EnvLoggerModal,{...e})})}))},1251:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EnvLoggerModal=void 0;const a=s(5163).__importDefault(s(87363)),o=s(70268),r=s(83135),n=s(63372),i=s(4117),c=s(64750),l=s(17063);s(7210),t.EnvLoggerModal=function({items:e}){const{close:t}=(0,r.useOverlay)(l.ENV_LOGGER_MODAL),s=Array.from(function(e){return e.reduce(((e,{title:t,text:s})=>(e.has(t)?e.get(t).push(s):e.set(t,[s]),e)),new Map)}(e).entries()).map((([e,t])=>`${e}\n${t.sort().join("\n")}`)).join("\n\n"),u=a.default.createElement(o.VerticalScrollView,{className:c.classes.envData},s);return a.default.createElement(o.ActionModal,{className:c.classes.root,dismissButton:!0,onClose:t,title:l.MODAL_TITLE,onCancel:t,cancelButtonText:"Close",content:u,closeOnClickOutside:!0,additionalActions:a.default.createElement(o.Button,{className:(0,c.style)(i.classes.action,n.classes.primaryButton,c.classes.button)},a.default.createElement(o.CopyToClipboardButton,{className:c.classes.copyButton,textToCopy:s,beforeCopyMessage:"Copy",afterCopyMessage:"Copied"}))})}},76267:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODAL_TITLE=t.ENV_LOGGER_MODAL=void 0,t.ENV_LOGGER_MODAL="envLoggerModal",t.MODAL_TITLE="Environment Information"},71853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractDeps=void 0,t.extractDeps=function(e,t){var s;const a=[],o={...e.dependencies,...e.devDependencies};if(e.dependencies)for(const e of t)a.push(`${e}: ${null!==(s=o[e])&&void 0!==s?s:"Not found"}`);return a}},17063:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(5163);a.__exportStar(s(76267),t),a.__exportStar(s(71853),t),a.__exportStar(s(24994),t)},24994:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},83135:(e,t,s)=>{e.exports=s(77467)},43934:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=s(5163);a.__exportStar(s(31434),t);var o=s(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.__importDefault(o).default}})},2206:(e,t,s)=>{e.exports=s(43934)}}]);