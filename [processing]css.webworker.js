(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[9271],{66697:(e,t,s)=>{let{Input:r}=s(95489),n=s(499);e.exports=function(e,t){let s=new r(e,t),i=new n(s);return i.parse(),i.root}},499:(e,t,s)=>{let r=s(21171),n=s(3285),i=s(76237);e.exports=class extends i{createTokenizer(){this.tokenizer=r(this.input,{ignoreErrors:!0})}comment(e){let t=new n;this.init(t,e[2]);let s=this.input.fromOffset(e[3])||this.input.fromOffset(this.input.css.length-1);t.source.end={offset:e[3],line:s.line,column:s.col};let r=e[1].slice(2);if("*/"===r.slice(-2)&&(r=r.slice(0,-2)),/^\s*$/.test(r))t.text="",t.raws.left=r,t.raws.right="";else{let e=r.match(/^(\s*)([^]*\S)(\s*)$/);t.text=e[2],t.raws.left=e[1],t.raws.right=e[3]}}decl(e){e.length>1&&e.some((e=>"word"===e[0]))&&super.decl(e)}unclosedBracket(){}unknownWord(e){this.spaces+=e.map((e=>e[1])).join("")}unexpectedClose(){this.current.raws.after+="}"}doubleColon(){}unnamedAtrule(e){e.name=""}precheckMissedSemicolon(e){let t,s,r=this.colon(e);if(!1===r)return;for(t=r-1;t>=0&&"word"!==e[t][0];t--);if(0===t)return;for(s=t-1;s>=0;s--)if("space"!==e[s][0]){s+=1;break}let n=e.slice(t),i=e.slice(s,t);e.splice(s,e.length-s),this.spaces=i.map((e=>e[1])).join(""),this.decl(n)}checkMissedSemicolon(){}endFile(){for(this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces;this.current.parent;)this.current=this.current.parent,this.current.raws.after=""}}},35664:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(5163),n=s(2206),i=r.__importDefault(s(11350)),o=s(16965),c=r.__importDefault(s(66697)),l=s(57906);i.default.setup(n.processingEnv,(({postCompilationSlot:e},{compilation:{compilationSlot:t},project:{fileManager:s},codeExecution:{requestsExtractors:r,resolver:n}})=>{r.register({test:e=>e.endsWith(".css")&&!e.endsWith(".st.css"),extractRequests:e=>(0,l.extractRequestsFromCssFile)(s.get(e).getLatest(),e,n.resolveFromFile)}),t.register({isApplicable:e=>e.endsWith(".css")&&!e.endsWith(".st.css"),outputLanguage:"javascript",compile:async(t,r)=>{const n=await s.getReady(t);let i=(0,c.default)(n.getLatest(),{from:t});if(!t.includes("node_modules"))for(const{transform:t,editing:s}of e)(!r||r&&!s)&&(i=t(i));return(0,o.cssDomInjectionCode)(t,i.toString())},languageName:"CSS"})}))}}]);