"use strict";(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[3870],{37380:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.FsErrorCodes=void 0,(n=t.FsErrorCodes||(t.FsErrorCodes={})).NO_FILE="ENOENT: no such file",n.NO_DIRECTORY="ENOENT: no such directory",n.NO_FILE_OR_DIRECTORY="ENOENT: no such file or directory",n.PATH_IS_FILE="ENOTDIR: path points to a file",n.PATH_IS_DIRECTORY="EISDIR: path points to a directory",n.PATH_IS_INVALID="EINVAL: invalid argument",n.CONTAINING_NOT_EXISTS="ENOENT: containing directory does not exist",n.DIRECTORY_NOT_EMPTY="ENOTEMPTY: directory is not empty",n.PATH_ALREADY_EXISTS="EEXIST: path already exists"},63870:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(37380),t),o(n(83078),t),o(n(18796),t)},83078:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createBaseMemoryFsSync=t.createBaseMemoryFs=t.createMemoryFs=void 0;const o=n(42270),i=r(n(73654)),s=n(97648),c=n(37380),a=i.default.posix;function y(){const e=l();return{...e,...(0,o.syncToAsyncFs)(e)}}function l(){const e=d("memory-fs-root"),t=new o.SetMultiMap,n=new Set;let r=a.sep;return{root:e,...a,resolve:i,watchService:{async watchPath(e,n){const r=i(e);n&&t.add(r,n)},async unwatchPath(e,n){const r=i(e);n?t.delete(r,n):t.deleteKey(r)},async unwatchAllPaths(){t.clear()},addGlobalListener(e){n.add(e)},removeGlobalListener(e){n.delete(e)},clearGlobalListeners(){n.clear()}},caseSensitive:!0,cwd:function(){return r},chdir:function(e){r=i(e)},copyFileSync:function(e,t,n=0){const r=i(e),o=i(t),l=y(r);if(!l)throw E(r,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT");if("file"!==l.type)throw E(r,c.FsErrorCodes.PATH_IS_DIRECTORY,"EISDIR");const d=y(a.dirname(o));if(!d||"dir"!==d.type)throw E(o,c.FsErrorCodes.CONTAINING_NOT_EXISTS,"ENOENT");const f=a.basename(o),u=d.contents.get(f);if(u){if(n&s.FileSystemConstants.COPYFILE_EXCL)throw E(o,c.FsErrorCodes.PATH_ALREADY_EXISTS,"EEXIST");if("file"!==u.type)throw E(o,c.FsErrorCodes.PATH_IS_DIRECTORY,"EISDIR")}const S={...l,entry:{...l.entry,name:f,mtime:new Date}};d.contents.set(f,S),p({path:o,stats:S.entry})},existsSync:function(e){return!!y(i(e))},lstatSync:function(e,t){var n;const r=i(e),o=l(r);if(o)return o.entry;if(null===(n=null==t?void 0:t.throwIfNoEntry)||void 0===n||n)throw E(r,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT")},mkdirSync:function e(t,n){const r=i(t),o=a.dirname(r);let s=y(o);const l=null==n?void 0:n.recursive;if(s){if("dir"!==s.type)throw E(r,c.FsErrorCodes.PATH_IS_FILE,"ENOTDIR");if(o===r){if(l)return;throw E(r,c.FsErrorCodes.PATH_ALREADY_EXISTS,"EEXIST")}}else{if(!l)throw E(r,c.FsErrorCodes.CONTAINING_NOT_EXISTS,"ENOENT");e(o,n),s=y(o)}const f=a.basename(r),u=s.contents.get(f);if(u){if(l&&"dir"===u.type)return;throw E(r,c.FsErrorCodes.PATH_ALREADY_EXISTS,"EEXIST")}const S=d(f);s.contents.set(f,S),p({path:r,stats:S.entry})},readdirSync:function(e,t){const n=i(e),r=y(n);if(!r)throw E(n,c.FsErrorCodes.NO_DIRECTORY,"ENOENT");if("file"===r.type)throw E(n,c.FsErrorCodes.PATH_IS_FILE,"ENOTDIR");return t&&"object"==typeof t&&t.withFileTypes?Array.from(r.contents.values(),(({entry:e})=>e)):Array.from(r.contents.keys())},readFileSync:function(e,t){const n=i(e),r=y(n);if(!r)throw E(n,c.FsErrorCodes.NO_FILE,"ENOENT");if("dir"===r.type)throw E(n,c.FsErrorCodes.PATH_IS_DIRECTORY,"EISDIR");return r.contents},realpathSync:function(t){const n=i(t);let r="/",o=e;for(const e of n.split(a.sep)){if(!o)break;if(""!==e)if("dir"===o.type)for(o=o.contents.get(e),r=a.join(r,e);"symlink"===(null==o?void 0:o.type);)r=a.resolve(a.dirname(r),o.target),o=l(r);else o=void 0}if(!o)throw E(n,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT");return r},readlinkSync:function(e){const t=i(e),n=l(t);if(!n)throw E(t,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT");if("symlink"!==n.type)throw E(t,c.FsErrorCodes.PATH_IS_INVALID,"EINVAL");return n.target},renameSync:function(e,t){const n=i(e),r=i(t),o=y(a.dirname(n));if(!o||"dir"!==o.type)throw E(n,c.FsErrorCodes.CONTAINING_NOT_EXISTS,"ENOENT");const s=a.basename(n),l=o.contents.get(s);if(!l)throw E(n,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT");const d=y(a.dirname(r));if(!d||"dir"!==d.type)throw E(r,c.FsErrorCodes.CONTAINING_NOT_EXISTS,"ENOENT");const f=a.basename(r),u=d.contents.get(f);if(u){if("dir"!==u.type)throw E(r,c.FsErrorCodes.PATH_ALREADY_EXISTS,"EEXIST");if(u.contents.size>0)throw E(r,c.FsErrorCodes.DIRECTORY_NOT_EMPTY,"ENOTEMPTY")}o.contents.delete(s),l.entry={...l.entry,name:f,mtime:new Date},d.contents.set(f,l),p({path:n,stats:null}),p({path:r,stats:l.entry})},rmdirSync:function(e){const t=i(e),n=y(a.dirname(t));if(!n||"dir"!==n.type)throw E(t,c.FsErrorCodes.NO_DIRECTORY,"ENOENT");const r=a.basename(t),o=n.contents.get(r);if(!o||"dir"!==o.type)throw E(t,c.FsErrorCodes.NO_DIRECTORY,"ENOENT");if(o.contents.size>0)throw E(t,c.FsErrorCodes.DIRECTORY_NOT_EMPTY,"ENOTEMPTY");n.contents.delete(r),p({path:t,stats:null})},statSync:function(e,t){var n;const r=i(e),o=y(r);if(o)return o.entry;if(null===(n=null==t?void 0:t.throwIfNoEntry)||void 0===n||n)throw E(r,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT")},symlinkSync:function(e,t){const n=i(t);if(y(n))throw E(n,c.FsErrorCodes.PATH_ALREADY_EXISTS,"EEXIST");const r=y(a.dirname(n));if(!r)throw E(n,c.FsErrorCodes.NO_FILE,"ENOENT");if("file"===r.type)throw E(n,c.FsErrorCodes.PATH_IS_FILE,"ENOTDIR");const o=new Date(Date.now()),s=a.basename(n),l={type:"symlink",entry:{name:s,birthtime:o,mtime:o,isFile:u,isDirectory:u,isSymbolicLink:f},target:e};r.contents.set(s,l),p({path:n,stats:l.entry})},unlinkSync:function(e){const t=i(e),n=y(a.dirname(t));if(!n||"dir"!==n.type)throw E(t,c.FsErrorCodes.NO_FILE,"ENOENT");const r=a.basename(t),o=n.contents.get(r);if(!o)throw E(t,c.FsErrorCodes.NO_FILE,"ENOENT");if("dir"===o.type)throw E(t,c.FsErrorCodes.PATH_IS_DIRECTORY,"EISDIR");n.contents.delete(r),p({path:t,stats:null})},writeFileSync:function(e,t){if(""===e)throw E(e,c.FsErrorCodes.NO_FILE_OR_DIRECTORY,"ENOENT");const n=i(e),r=y(n);if(r){if("dir"===r.type)throw E(n,c.FsErrorCodes.PATH_IS_DIRECTORY,"EISDIR");r.entry={...r.entry,mtime:new Date},r.contents=t,p({path:n,stats:r.entry})}else{const e=y(a.dirname(n));if(!e||"dir"!==e.type)throw E(n,c.FsErrorCodes.CONTAINING_NOT_EXISTS,"ENOENT");const r=a.basename(n),o=new Date,i={type:"file",entry:{name:r,birthtime:o,mtime:o,isFile:f,isDirectory:u,isSymbolicLink:u},contents:t};e.contents.set(r,i),p({path:n,stats:i.entry})}}};function i(...e){return a.resolve(r,...e)}function y(e){let t=l(e);for(;"symlink"===(null==t?void 0:t.type);)t=l(e=a.resolve(a.dirname(e),t.target));return t}function l(t){let n="/",r=e;for(const e of t.split(a.sep)){if(!r)break;if(""!==e){for(;"symlink"===(null==r?void 0:r.type);)n=a.resolve(a.dirname(n),r.target),r=l(n);"dir"===(null==r?void 0:r.type)?(r=r.contents.get(e),n=a.join(n,e)):r=void 0}}return r}function p(e){for(const t of n)t(e);const r=t.get(e.path);if(r)for(const t of r)t(e)}}function d(e){const t=new Date;return{type:"dir",contents:new Map,entry:{name:e,birthtime:t,mtime:t,isFile:u,isDirectory:f,isSymbolicLink:u}}}t.createMemoryFs=function(e){const t=y(),n={...(0,o.createFileSystem)(t),root:t.root};return e&&n.populateDirectorySync(a.sep,e),n},t.createBaseMemoryFs=y,t.createBaseMemoryFsSync=l;const f=()=>!0,u=()=>!1;function E(e,t,n){const r=new Error(`${e} ${t}`);throw r.path=e,r.code=n,r}},18796:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},66994:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},11407:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},30175:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(11407),t),o(n(66994),t)},12085:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.FileSystemConstants=void 0,(n=t.FileSystemConstants||(t.FileSystemConstants={}))[n.COPYFILE_EXCL=1]="COPYFILE_EXCL"},63778:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},74834:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},33283:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(74834),t),o(n(63778),t)},97648:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(30175),t),o(n(12085),t),o(n(33283),t),o(n(743),t),o(n(7381),t)},743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},7381:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},54438:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createExtendedFileSystemPromiseActions=t.createAsyncFileSystem=t.createExtendedSyncActions=t.createSyncFileSystem=t.createFileSystem=void 0;const n=()=>!0,r={throwIfNoEntry:!1};function o(e){const{statSync:t,mkdirSync:o,writeFileSync:i,unlinkSync:s,rmdirSync:c,lstatSync:a,readdirSync:y,readFileSync:l,copyFileSync:d,dirname:f,join:u,resolve:E}=e;function p(e,n=t){var o;try{return!!(null===(o=n(e,r))||void 0===o?void 0:o.isFile())}catch{return!1}}function S(e,n=t){var o;try{return!!(null===(o=n(e,r))||void 0===o?void 0:o.isDirectory())}catch{return!1}}function _(e){var t,n;try{o(e)}catch(r){const i=null===(t=r)||void 0===t?void 0:t.code;if("EISDIR"===i)return;if("EEXIST"===i){if(S(e))return;throw r}if("ENOTDIR"===i||!i)throw r;const s=f(e);if(s===e)throw r;_(s);try{o(e)}catch(t){const r=null===(n=t)||void 0===n?void 0:n.code;if(!("EISDIR"===r||"EEXIST"===r&&S(e)))throw t}}}function h(e,t){const n=[];_(e);for(const[r,o]of Object.entries(t)){const t=u(e,r);"string"==typeof o?(_(f(t)),i(t,o),n.push(t)):h(t,o)}return n}function m(e){const t=a(e);if(t.isDirectory()){const t=y(e);for(const n of t)m(u(e,n));c(e)}else{if(!t.isFile()&&!t.isSymbolicLink())throw new Error(`unknown node type, cannot delete ${e}`);s(e)}}function O(e,o={},i=[]){const{filterFile:s=n,filterDirectory:c=n}=o;for(const n of y(e)){const a=u(e,n),y=t(a,r);if(!y)continue;const l={name:n,path:a,stats:y};y.isFile()&&s(l)?i.push(a):y.isDirectory()&&c(l)&&O(a,o,i)}return i}function F(e,t){_(t);for(const n of y(e,{withFileTypes:!0})){const r=u(e,n.name),o=u(t,n.name);n.isFile()?d(r,o):n.isDirectory()&&F(r,o)}}return{fileExistsSync:p,directoryExistsSync:S,ensureDirectorySync:e=>_(E(e)),populateDirectorySync:(e,t)=>h(E(e),t),removeSync:e=>m(E(e)),findFilesSync:(e,t)=>O(E(e),t),copyDirectorySync:(e,t)=>F(E(e),E(t)),findClosestFileSync:function(e,t){let n,r=E(e);for(;r!==n;){const e=u(r,t);if(p(e))return e;n=r,r=f(r)}},findFilesInAncestorsSync:function(e,t){const n=[];let r,o=E(e);for(;o!==r;){const e=u(o,t);p(e)&&n.push(e),r=o,o=f(o)}return n},readJsonFileSync:function(e,t){return JSON.parse(l(e,t||"utf8"))}}}function i(e){const{dirname:t,resolve:r,join:o,promises:{stat:i,mkdir:s,writeFile:c,lstat:a,rmdir:y,unlink:l,readdir:d,readFile:f,copyFile:u}}=e;async function E(e,t=i){try{return(await t(e)).isFile()}catch{return!1}}async function p(e,t=i){try{return(await t(e)).isDirectory()}catch{return!1}}async function S(e){var n,r;try{await s(e)}catch(o){const i=null===(n=o)||void 0===n?void 0:n.code;if("EISDIR"===i)return;if("EEXIST"===i){if(await p(e))return;throw o}if("ENOTDIR"===i||!i)throw o;const c=t(e);if(c===e)throw o;await S(c);try{await s(e)}catch(t){const n=null===(r=t)||void 0===r?void 0:r.code;if(!("EISDIR"===n||"EEXIST"===n&&await p(e)))throw t}}}async function _(e,n){const r=[];await S(e);for(const[i,s]of Object.entries(n)){const n=o(e,i);"string"==typeof s?(await S(t(n)),await c(n,s),r.push(n)):await _(n,s)}return r}async function h(e){const t=await a(e);if(t.isDirectory()){const t=await d(e);await Promise.all(t.map((t=>h(o(e,t))))),await y(e)}else{if(!t.isFile()&&!t.isSymbolicLink())throw new Error(`unknown node type, cannot delete ${e}`);await l(e)}}async function m(e,t={},r=[]){const{filterFile:s=n,filterDirectory:c=n}=t;for(const n of await d(e)){const a=o(e,n);try{const e=await i(a),o={name:n,path:a,stats:e};e.isFile()&&s(o)?r.push(a):e.isDirectory()&&c(o)&&await m(a,t,r)}catch(e){}}return r}async function O(e,t){await S(t);for(const n of await d(e,{withFileTypes:!0})){const r=o(e,n.name),i=o(t,n.name);n.isFile()?await u(r,i):n.isDirectory()&&await O(r,i)}}return{fileExists:E,directoryExists:p,ensureDirectory:e=>S(r(e)),populateDirectory:(e,t)=>_(r(e),t),remove:e=>h(r(e)),findFiles:(e,t)=>m(r(e),t),copyDirectory:(e,t)=>O(r(e),r(t)),findClosestFile:async function(e,n){let i,s=r(e);for(;s!==i;){const e=o(s,n);if(await E(e))return e;i=s,s=t(s)}},findFilesInAncestors:async function(e,n){const i=[];let s,c=r(e);for(;c!==s;){const e=o(c,n);await E(e)&&i.push(e),s=c,c=t(c)}return i},readJsonFile:async function(e,t){return JSON.parse(await f(e,t||"utf8"))}}}t.createFileSystem=function(e){return{...e,...o(e),promises:{...e.promises,...i(e)}}},t.createSyncFileSystem=function(e){return{...e,...o(e)}},t.createExtendedSyncActions=o,t.createAsyncFileSystem=function(e){return{...e,promises:{...e.promises,...i(e)}}},t.createExtendedFileSystemPromiseActions=i},42270:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(54438),t),o(n(52157),t),o(n(8289),t)},52157:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SetMultiMap=void 0;class n{constructor(){this.map=new Map}get size(){return Array.from(this.map.values()).map((({size:e})=>e)).reduce(((e,t)=>e+t),0)}get(e){return this.map.get(e)}add(e,t){const n=this.map.get(e);return n?n.add(t):this.map.set(e,new Set([t])),this}clear(){this.map.clear()}delete(e,t){const n=this.map.get(e);if(n){const r=n.delete(t);return 0===n.size&&this.map.delete(e),r}return!1}deleteKey(e){return this.map.delete(e)}has(e,t){const n=this.map.get(e);return!!n&&n.has(t)}hasKey(e){const t=this.map.get(e);return!!t&&t.size>0}[Symbol.iterator](){return this.entries()}*entries(){const{map:e}=this;for(const[t,n]of e.entries())for(const e of n)yield[t,e]}*values(){const{map:e}=this;for(const t of e.values())for(const e of t)yield e}keys(){return this.map.keys()}}t.SetMultiMap=n},8289:(e,t)=>{function n(e){return(...t)=>{const n=t.pop();if("function"!=typeof n)throw new Error("callback is not a function");try{n(null,e(...t))}catch(e){n(e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.syncToAsyncFs=void 0,t.syncToAsyncFs=function(e){return{...e,watchService:e.watchService,caseSensitive:e.caseSensitive,promises:{readFile:async function(...t){return e.readFileSync(...t)},writeFile:async(...t)=>e.writeFileSync(...t),unlink:async t=>e.unlinkSync(t),readdir:async function(...t){return e.readdirSync(...t)},mkdir:async(t,...n)=>e.mkdirSync(t,...n),rmdir:async t=>e.rmdirSync(t),exists:async t=>e.existsSync(t),stat:async t=>e.statSync(t),lstat:async t=>e.lstatSync(t),realpath:async t=>e.realpathSync(t),rename:async(t,n)=>e.renameSync(t,n),copyFile:async(...t)=>e.copyFileSync(...t),readlink:async t=>e.readlinkSync(t),symlink:async(...t)=>e.symlinkSync(...t)},exists(t,n){n(e.existsSync(t))},readFile:n(e.readFileSync),writeFile:n(e.writeFileSync),copyFile:n(e.copyFileSync),unlink:n(e.unlinkSync),readdir:n(e.readdirSync),mkdir:n(e.mkdirSync),rmdir:n(e.rmdirSync),stat:n(e.statSync),lstat:n(e.lstatSync),realpath:n(e.realpathSync),rename:n(e.renameSync),readlink:n(e.readlinkSync)}}}}]);