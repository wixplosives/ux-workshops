"use strict";(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[6306],{35993:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.createCachedFs=void 0;const o=t(42270),a=e=>e,n=e=>e.toLowerCase();r.createCachedFs=function(e){const r=e.caseSensitive?a:n,t=new Map,s=new Map,{promises:i,delimiter:c}=e,l=c+"true",d=c+"false",v=e=>{const o=r(e);s.delete(o),t.delete(o+l),t.delete(o+d)};return{...(0,o.createFileSystem)({...e,copyFile:function(r,t,...o){return t=e.resolve(t),v(t),e.copyFile(r,t,...o)},copyFileSync:(r,t,...o)=>(t=e.resolve(t),v(t),e.copyFileSync(r,t,...o)),mkdir:function(r,...t){return r=e.resolve(r),v(r),e.mkdir(r,...t)},mkdirSync:(r,...t)=>(r=e.resolve(r),v(r),e.mkdirSync(r,...t)),rename:(r,t,o)=>(r=e.resolve(r),t=e.resolve(t),v(r),v(t),e.rename(r,t,o)),renameSync:(r,t)=>(r=e.resolve(r),t=e.resolve(t),v(r),v(t),e.renameSync(r,t)),rmdir:(r,t)=>(r=e.resolve(r),v(r),e.rmdir(r,t)),rmdirSync:r=>(r=e.resolve(r),v(r),e.rmdirSync(r)),symlinkSync:(r,t,o)=>(t=e.resolve(t),v(t),e.symlinkSync(r,t,o)),unlink:(r,t)=>(r=e.resolve(r),v(r),e.unlink(r,t)),unlinkSync:r=>(r=e.resolve(r),v(r),e.unlinkSync(r)),writeFile:function(r,...t){return r&&(r=e.resolve(r),v(r)),e.writeFile(r,...t)},writeFileSync:(r,...t)=>(r&&(r=e.resolve(r),v(r)),e.writeFileSync(r,...t)),statSync(o,a){var n;o=e.resolve(o);const s=null===(n=null==a?void 0:a.throwIfNoEntry)||void 0===n||n,i=r(o)+(s?l:d),c=t.get(i);if(c){if("failure"===c.kind)throw c.error;return c.value}try{const r=e.statSync(o,a);return t.set(i,{kind:"success",value:r}),r}catch(e){throw t.set(i,{kind:"failure",error:e}),e}},stat(o,a){o=e.resolve(o);const n=r(o)+l,s=t.get(n);s?"failure"===s.kind?a(s.error):"success"===s.kind&&a(null,s.value):e.stat(o,((e,r)=>{e?t.set(n,{kind:"failure",error:e}):t.set(n,{kind:"success",value:r}),a(e,r)}))},realpathSync(t){t=e.resolve(t);const o=r(t),a=s.get(o);if(void 0!==a)return a;const n=e.realpathSync(t);return s.set(o,n),n},realpath(t,o){t=e.resolve(t);const a=r(t),n=s.get(a);void 0!==n?o(null,n):e.realpath(t,((e,r)=>{e||s.set(a,r),o(e,r)}))}}),invalidate(o,a=!1){const n=e.resolve(o);return a&&(e=>{const o=r(e);for(const e of s.keys())e.startsWith(o)&&s.delete(e);for(const e of t.keys())e.startsWith(o)&&t.delete(e)})(e.join(n,e.sep)),v(n)},invalidateAll(){t.clear()},promises:{...i,async realpath(t){t=e.resolve(t);const o=r(t),a=s.get(o);if(void 0!==a)return a;const n=await i.realpath(t);return s.set(o,n),n},copyFile:(r,t,...o)=>(t=e.resolve(t),v(t),i.copyFile(r,t,...o)),mkdir:(r,...t)=>(r=e.resolve(r),v(r),i.mkdir(r,...t)),rename:(r,t)=>(r=e.resolve(r),t=e.resolve(t),v(r),v(t),i.rename(r,t)),rmdir:r=>(r=e.resolve(r),v(r),i.rmdir(r)),unlink:r=>(r=e.resolve(r),v(r),i.unlink(r)),writeFile:(r,...t)=>(r&&(r=e.resolve(r),v(r)),i.writeFile(r,...t)),async stat(o){o=e.resolve(o);const a=r(o)+l,n=t.get(a);if(n){if("failure"===n.kind)throw n.error;return n.value}try{const e=await i.stat(o);return t.set(a,{kind:"success",value:e}),e}catch(e){throw t.set(a,{kind:"failure",error:e}),e}},symlink:(r,t,o)=>(t=e.resolve(t),v(t),i.symlink(r,t,o))}}}},7057:function(e,r,t){var o=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),a=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||o(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),a(t(35993),r)},46855:function(e,r,t){var o=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),a=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||o(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),a(t(56459),r)},56459:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.createOverlayFs=void 0;const o=t(42270);r.createOverlayFs=function(e,r,t=e.cwd()){const{promises:a}=e,{promises:n}=r,s=`..${e.sep}`;function i(r){const o=e.resolve(r),a=e.relative(t,o);return a.startsWith(s)||e.isAbsolute(s)?{resolvedLowerPath:o}:{resolvedLowerPath:o,resolvedUpperPath:a.replace(/\\/g,"/")}}t=e.resolve(t);const c={existsSync(t){const{resolvedLowerPath:o,resolvedUpperPath:a}=i(t);return void 0!==a&&r.existsSync(a)||e.existsSync(o)},readFileSync:function(t,...o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);if(void 0!==n){const{stackTraceLimit:e}=Error;try{return Error.stackTraceLimit=0,r.readFileSync(n,...o)}catch{}finally{Error.stackTraceLimit=e}}return e.readFileSync(a,...o)},statSync:function(t,...o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);if(void 0!==n)try{const e=r.statSync(n,...o);if(e)return e}catch{}return e.statSync(a,...o)},lstatSync:function(t,...o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);if(void 0!==n)try{const e=r.lstatSync(n,...o);if(e)return e}catch{}return e.lstatSync(a,...o)},realpathSync(o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(o);if(void 0!==n){const{stackTraceLimit:o}=Error;try{return Error.stackTraceLimit=0,e.join(t,r.realpathSync(n))}catch{}finally{Error.stackTraceLimit=o}}return e.realpathSync(a)},readlinkSync(t){const{resolvedLowerPath:o,resolvedUpperPath:a}=i(t);if(void 0!==a){const{stackTraceLimit:e}=Error;try{return Error.stackTraceLimit=0,r.readlinkSync(a)}catch{}finally{Error.stackTraceLimit=e}}return e.readlinkSync(o)},readdirSync:(t,...o)=>{const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);if(void 0!==n){const{stackTraceLimit:t}=Error;try{Error.stackTraceLimit=0;const s=r.readdirSync(n,...o);try{return[...e.readdirSync(a,...o),...s]}catch{return s}}catch{}finally{Error.stackTraceLimit=t}}return e.readdirSync(a,...o)}},l={async exists(e){const{resolvedLowerPath:r,resolvedUpperPath:t}=i(e);return void 0!==t?await n.exists(t)||await a.exists(r):a.exists(r)},readFile:async function(e,...r){const{resolvedLowerPath:t,resolvedUpperPath:o}=i(e);if(void 0!==o)try{return await n.readFile(o,...r)}catch{}return a.readFile(t,...r)},async stat(e){const{resolvedLowerPath:r,resolvedUpperPath:t}=i(e);if(void 0!==t)try{return await n.stat(t)}catch{}return a.stat(r)},async lstat(e){const{resolvedLowerPath:r,resolvedUpperPath:t}=i(e);if(void 0!==t)try{return await n.lstat(t)}catch{}return a.lstat(r)},async realpath(r){const{resolvedLowerPath:o,resolvedUpperPath:s}=i(r);if(void 0!==s)try{return e.join(t,await n.realpath(s))}catch{}return a.realpath(o)},async readlink(e){const{resolvedLowerPath:r,resolvedUpperPath:t}=i(e);if(void 0!==t)try{return await n.readlink(t)}catch{}return a.readlink(r)},readdir:async function(e,...r){const{resolvedLowerPath:t,resolvedUpperPath:o}=i(e);if(void 0!==o)try{const e=await n.readdir(o,...r);try{return[...await a.readdir(t,...r),...e]}catch{}return e}catch{}return a.readdir(t,...r)}},d={exists(t,o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);void 0!==n?r.exists(n,(r=>{r?o(r):e.exists(a,o)})):e.exists(a,o)},readFile(t,o,a){if("function"==typeof o)a=o,o=void 0;else if("function"!=typeof a)throw new Error("callback is not a function.");const{resolvedLowerPath:n,resolvedUpperPath:s}=i(t);void 0!==s?r.readFile(s,o,((r,t)=>{r?e.readFile(n,o,a):a(r,t)})):e.readFile(n,o,a)},stat(t,o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);void 0!==n?r.stat(n,((r,t)=>{r?e.stat(a,o):o(r,t)})):e.stat(a,o)},lstat(t,o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);void 0!==n?r.lstat(n,((r,t)=>{r?e.lstat(a,o):o(r,t)})):e.lstat(a,o)},realpath(o,a){const{resolvedLowerPath:n,resolvedUpperPath:s}=i(o);void 0!==s?r.realpath(s,((r,o)=>{r?e.realpath(n,a):a(r,e.join(t,o))})):e.realpath(n,a)},readlink(t,o){const{resolvedLowerPath:a,resolvedUpperPath:n}=i(t);void 0!==n?r.readlink(n,((r,t)=>{r?e.readlink(a,o):o(r,t)})):e.readlink(a,o)},readdir(t,o,a){if("function"==typeof o)a=o,o=void 0;else if("function"!=typeof a)throw new Error("callback is not a function.");const{resolvedLowerPath:n,resolvedUpperPath:s}=i(t);void 0!==s?r.readdir(s,o,((r,t)=>{r?e.readdir(n,o,a):e.readdir(n,o,((e,o)=>{a(r,e?t:[...o,...t])}))})):e.readdir(n,o,a)}};return(0,o.createFileSystem)({...e,...c,...d,promises:{...a,...l}})}}}]);