(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[74],{28354:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(5163),n=s(93849),r=i.__importDefault(s(93208)),o=i.__importDefault(s(1529)),c=i.__importStar(s(2206));t.default=new n.Feature({id:"envLogger",dependencies:[c.default.asEntity,r.default.asEntity,o.default.asEntity],api:{itemProviders:n.Slot.withType().defineEntity(c.processingEnv),dataService:n.Service.withType().defineEntity(c.processingEnv).allowRemoteAccess()}})},44323:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=s(5163),n=s(2206),r=i.__importDefault(s(28354)),o=s(87363),{version:c}=s(3699);r.default.setup(n.processingEnv,(({itemProviders:e})=>(e.register((()=>({title:"Own Dependencies",text:`@wixc3/engine-core: ${c}`}))),e.register((()=>({title:"Own Dependencies",text:`react: ${o.version}`}))),{dataService:{getItems:()=>Array.from(e).map((e=>e()))}})))},43934:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=s(5163);i.__exportStar(s(31434),t);var n=s(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.__importDefault(n).default}})},2206:(e,t,s)=>{e.exports=s(43934)},3699:e=>{"use strict";e.exports=JSON.parse('{"name":"@wixc3/engine-core","version":"26.0.0","main":"dist/index.js","types":"dist/index.d.ts","scripts":{"build:umd":"node ./scripts/bundle","test":"yarn test:node && yarn test:browser","test:node":"mocha \\"test/node/**/*.spec.ts?(x)\\"","test:browser":"mocha-play \\"test/**/*.spec.ts?(x)\\" -c ./test/webpack.config.js"},"dependencies":{"socket.io-client":"^4.4.1","typescript-type-utils":"^0.1.0"},"browser":{"process":false},"files":["dist","!dist/test","src","!*/tsconfig.{json,tsbuildinfo}"],"license":"MIT","publishConfig":{"access":"public"}}')}}]);