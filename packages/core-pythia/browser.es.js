var e,t,n,r;n=t={exports:{}},r=function(){var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return function(t){function n(e,t,n){var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.subarray&&ee)return ee.decode(e.subarray(t,n));for(r="";t<n;){var a=e[t++];if(128&a){var i=63&e[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&e[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&e[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function r(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t();else{var n=t.Mb;"number"==typeof n?void 0===t.jb?W.dynCall_v(n):W.dynCall_vi(n,t.jb):n(void 0===t.jb?null:t.jb)}}}function a(){var e=W.preRun.shift();se.unshift(e)}function i(){var e=me;return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}function o(){try{if(W.wasmBinary)return new Uint8Array(W.wasmBinary);throw"both async and sync fetching of the wasm failed"}catch(e){D(e)}}function s(e){function t(e){W.asm=e.exports,ye--,W.monitorRunDependencies&&W.monitorRunDependencies(ye),0==ye&&(null!==he&&(clearInterval(he),he=null),ve&&(e=ve,ve=null,e()))}function n(e){t(e.instance)}function r(e){return(W.wasmBinary||"function"!=typeof fetch?new Promise(function(e){e(o())}):fetch(me,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+me+"'";return e.arrayBuffer()}).catch(function(){return o()})).then(function(e){return WebAssembly.instantiate(e,a)}).then(e,function(e){X("failed to asynchronously prepare wasm: "+e),D(e)})}var a={env:e,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:Z};if(ye++,W.monitorRunDependencies&&W.monitorRunDependencies(ye),W.instantiateWasm)try{return W.instantiateWasm(a,t)}catch(e){return X("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(W.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||i()||"function"!=typeof fetch)return r(n);fetch(me,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,a).then(n,function(e){X("wasm streaming compile failed: "+e),X("falling back to ArrayBuffer instantiation"),r(n)})})}(),{}}function u(e,t){for(var n=0,r=e.length-1;0<=r;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e}function f(e){var t="/"===e.charAt(0),n="/"===e.substr(-1);return(e=u(e.split("/").filter(function(e){return!!e}),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function c(e){var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function l(e){if("/"===e)return"/";var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}function _(e){return W.___errno_location&&(ie[W.___errno_location()>>2]=e),e}function d(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if("string"!=typeof(t=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=u(e.split("/").filter(function(e){return!!e}),!t).join("/"))||"."}function p(e,t){Re[e]={input:[],Ta:[],ab:t},A(e,Be)}function y(e,t){if(t=t||{},!(e=d("/",e)))return{path:"",node:null};var n,r={rb:!0,mb:0};for(n in r)void 0===t[n]&&(t[n]=r[n]);if(8<t.mb)throw new Ye(40);e=u(e.split("/").filter(function(e){return!!e}),!1);var a=Le;for(r="/",n=0;n<e.length;n++){var i=n===e.length-1;if(i&&t.parent)break;if(a=m(a,e[n]),r=f(r+"/"+e[n]),a.gb&&(!i||i&&t.rb)&&(a=a.gb.root),!i||t.qb)for(i=0;40960==(61440&a.mode);)if(a=O(r),a=y(r=d(c(r),a),{mb:t.mb}).node,40<i++)throw new Ye(40)}return{path:r,node:a}}function h(e){for(var t;;){if(e===e.parent)return e=e.Wa.ub,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function v(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%He.length}function m(e,t){var n;if(n=(n=E(e,"x"))?n:e.Pa.cb?0:13)throw new Ye(n,e);for(n=He[v(e.id,t)];n;n=n.Db){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.Pa.cb(e,t)}function b(e,t,n,r){return Ae||((Ae=function(e,t,n,r){e||(e=this),this.parent=e,this.Wa=e.Wa,this.gb=null,this.id=Ce++,this.name=t,this.mode=n,this.Pa={},this.Qa={},this.hb=r}).prototype={},Object.defineProperties(Ae.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}})),function(e){var t=v(e.parent.id,e.name);e.Db=He[t],He[t]=e}(e=new Ae(e,t,n,r)),e}function w(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function E(e,t){return Ne?0:(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:13}function P(e,t){try{return m(e,t),17}catch(e){}return E(e,"wx")}function g(e,t){Te||((Te=function(){}).prototype={},Object.defineProperties(Te.prototype,{object:{get:function(){return this.node},set:function(e){this.node=e}}}));var n,r=new Te;for(n in e)r[n]=e[n];return e=r,t=function(e){for(e=e||0;4096>=e;e++)if(!Me[e])return e;throw new Ye(24)}(t),e.Ya=t,Me[t]=e}function A(e,t){Ue[e]={Qa:t}}function T(e,t){var n="/"===t,r=!t;if(n&&Le)throw new Ye(16);if(!n&&!r){var a=y(t,{rb:!1});if(t=a.path,(a=a.node).gb)throw new Ye(16);if(16384!=(61440&a.mode))throw new Ye(20)}t={type:e,Tb:{},ub:t,Cb:[]},(e=e.Wa(t)).Wa=t,t.root=e,n?Le=e:a&&(a.gb=t,a.Wa&&a.Wa.Cb.push(t))}function S(e,t,n){var r=y(e,{parent:!0}).node;if(!(e=l(e))||"."===e||".."===e)throw new Ye(22);var a=P(r,e);if(a)throw new Ye(a);if(!r.Pa.fb)throw new Ye(1);return r.Pa.fb(r,e,t,n)}function R(e){S(e,16895,0)}function B(e,t,n){void 0===n&&(n=t,t=438),S(e,8192|t,n)}function x(e,t){if(!d(e))throw new Ye(2);var n=y(t,{parent:!0}).node;if(!n)throw new Ye(2);var r=P(n,t=l(t));if(r)throw new Ye(r);if(!n.Pa.ib)throw new Ye(1);n.Pa.ib(n,t,e)}function O(e){if(!(e=y(e).node))throw new Ye(2);if(!e.Pa.eb)throw new Ye(22);return d(h(e.parent),e.Pa.eb(e))}function k(e,t,n,r){if(""===e)throw new Ye(2);if("string"==typeof t){var a=Ie[t];if(void 0===a)throw Error("Unknown file open mode: "+t);t=a}if(n=64&t?4095&(void 0===n?438:n)|32768:0,"object"==typeof e)var i=e;else{e=f(e);try{i=y(e,{qb:!(131072&t)}).node}catch(e){}}if(a=!1,64&t)if(i){if(128&t)throw new Ye(17)}else i=S(e,n,0),a=!0;if(!i)throw new Ye(2);if(8192==(61440&i.mode)&&(t&=-513),65536&t&&16384!=(61440&i.mode))throw new Ye(20);if(!a&&(n=i?40960==(61440&i.mode)?40:16384==(61440&i.mode)&&("r"!==w(t)||512&t)?21:E(i,w(t)):2))throw new Ye(n);if(512&t){var o;if(!(o="string"==typeof(n=i)?y(n,{qb:!0}).node:n).Pa.Va)throw new Ye(1);if(16384==(61440&o.mode))throw new Ye(21);if(32768!=(61440&o.mode))throw new Ye(22);if(n=E(o,"w"))throw new Ye(n);o.Pa.Va(o,{size:0,timestamp:Date.now()})}t&=-641,(r=g({node:i,path:h(i),flags:t,seekable:!0,position:0,Qa:i.Qa,Gb:[],error:!1},r)).Qa.open&&r.Qa.open(r),!W.logReadFiles||1&t||(Se||(Se={}),e in Se||(Se[e]=1,console.log("FS.trackingDelegate error on read file: "+e)));try{ze.onOpenFile&&(i=0,1!=(2097155&t)&&(i|=1),0!=(2097155&t)&&(i|=2),ze.onOpenFile(e,i))}catch(t){console.log("FS.trackingDelegate['onOpenFile']('"+e+"', flags) threw an exception: "+t.message)}return r}function L(e,t,n){if(null===e.Ya)throw new Ye(9);if(!e.seekable||!e.Qa.$a)throw new Ye(29);if(0!=n&&1!=n&&2!=n)throw new Ye(22);e.position=e.Qa.$a(e,t,n),e.Gb=[]}function U(e,t,n,r){if(0>n||0>r)throw new Ye(22);if(null===e.Ya)throw new Ye(9);if(1==(2097155&e.flags))throw new Ye(9);if(16384==(61440&e.node.mode))throw new Ye(21);if(!e.Qa.read)throw new Ye(22);var a=void 0!==r;if(a){if(!e.seekable)throw new Ye(29)}else r=e.position;return t=e.Qa.read(e,ne,t,n,r),a||(e.position+=t),t}function M(){Ye||((Ye=function(e,t){this.node=t,this.Fb=function(e){this.Xa=e},this.Fb(e),this.message="FS error",this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})}).prototype=Error(),Ye.prototype.constructor=Ye,[2].forEach(function(e){Qe[e]=new Ye(e),Qe[e].stack="<generic error, no stack>"}))}function C(e,t,n){e=f("/dev/"+e);var r=function(e,t){var n=0;return e&&(n|=365),t&&(n|=146),n}(!!t,!!n);ge||(ge=64);var a=ge++<<8|0;A(a,{open:function(e){e.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,n,r,a){for(var i=0,o=0;o<a;o++){try{var s=t()}catch(e){throw new Ye(5)}if(void 0===s&&0===i)throw new Ye(11);if(null==s)break;i++,n[r+o]=s}return i&&(e.node.timestamp=Date.now()),i},write:function(e,t,r,a){for(var i=0;i<a;i++)try{n(t[r+i])}catch(e){throw new Ye(5)}return a&&(e.node.timestamp=Date.now()),i}}),B(e,r,a)}function H(){return ie[(We+=4)-4>>2]}function N(){var e=Me[H()];if(!e)throw new Ye(9);return e}function z(e,t){throw Ve(e,t||1),"longjmp"}function Y(){return Y.bb||(Y.bb=[]),Y.bb.push(Xe()),Y.bb.length-1}function Q(){D("OOM")}function I(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function j(){function e(){if(!W.calledRun&&(W.calledRun=!0,!J)){if(W.noFSInit||Pe||(Pe=!0,M(),W.stdin=W.stdin,W.stdout=W.stdout,W.stderr=W.stderr,W.stdin?C("stdin",W.stdin):x("/dev/tty","/dev/stdin"),W.stdout?C("stdout",null,W.stdout):x("/dev/tty","/dev/stdout"),W.stderr?C("stderr",null,W.stderr):x("/dev/tty1","/dev/stderr"),k("/dev/stdin","r"),k("/dev/stdout","w"),k("/dev/stderr","w")),r(ue),Ne=!1,r(fe),W.onRuntimeInitialized&&W.onRuntimeInitialized(),W.postRun)for("function"==typeof W.postRun&&(W.postRun=[W.postRun]);W.postRun.length;){var e=W.postRun.shift();ce.unshift(e)}r(ce)}}if(!(0<ye)){if(W.preRun)for("function"==typeof W.preRun&&(W.preRun=[W.preRun]);W.preRun.length;)a();r(se),0<ye||W.calledRun||(W.setStatus?(W.setStatus("Running..."),setTimeout(function(){setTimeout(function(){W.setStatus("")},1),e()},1)):e())}}function D(e){throw W.onAbort&&W.onAbort(e),K(e),X(e),J=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}var W;t=t||{},W||(W=void 0!==t?t:{});var F,$={};for(F in W)W.hasOwnProperty(F)&&($[F]=W[F]);W.arguments=[],W.thisProgram="./this.program",W.quit=function(e,t){throw t},W.preRun=[],W.postRun=[];var V="";document.currentScript&&(V=document.currentScript.src),e&&(V=e),V=0!==V.indexOf("blob:")?V.substr(0,V.lastIndexOf("/")+1):"";var K=W.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),X=W.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||K);for(F in $)$.hasOwnProperty(F)&&(W[F]=$[F]);$=void 0;var Z={"f64-rem":function(e,t){return e%t},debugger:function(){}},q=0;"object"!=typeof WebAssembly&&X("no native wasm support detected");var G,J=!1,ee="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var te,ne,re,ae,ie,oe=W.TOTAL_MEMORY||16777216;5242880>oe&&X("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+oe+"! (TOTAL_STACK=5242880)"),(G=W.wasmMemory?W.wasmMemory:new WebAssembly.Memory({initial:oe/65536,maximum:oe/65536}))&&(te=G.buffer),oe=te.byteLength,W.HEAP8=ne=new Int8Array(te),W.HEAP16=ae=new Int16Array(te),W.HEAP32=ie=new Int32Array(te),W.HEAPU8=re=new Uint8Array(te),W.HEAPU16=new Uint16Array(te),W.HEAPU32=new Uint32Array(te),W.HEAPF32=new Float32Array(te),W.HEAPF64=new Float64Array(te),ie[15716]=5305776;var se=[],ue=[],fe=[],ce=[],le=Math.abs,_e=Math.ceil,de=Math.floor,pe=Math.min,ye=0,he=null,ve=null;W.preloadedImages={},W.preloadedAudios={};var me="libpythia.browser.wasm";if(!i()){var be=me;me=W.locateFile?W.locateFile(be,V):V+be}W.asm=function(e,t){return t.memory=G,t.table=new WebAssembly.Table({initial:460,maximum:460,element:"anyfunc"}),t.__memory_base=1024,t.__table_base=0,s(t)};var we,Ee,Pe,ge,Ae,Te,Se,Re=[],Be={open:function(e){var t=Re[e.node.hb];if(!t)throw new Ye(19);e.Sa=t,e.seekable=!1},close:function(e){e.Sa.ab.flush(e.Sa)},flush:function(e){e.Sa.ab.flush(e.Sa)},read:function(e,t,n,r){if(!e.Sa||!e.Sa.ab.sb)throw new Ye(6);for(var a=0,i=0;i<r;i++){try{var o=e.Sa.ab.sb(e.Sa)}catch(e){throw new Ye(5)}if(void 0===o&&0===a)throw new Ye(11);if(null==o)break;a++,t[n+i]=o}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r){if(!e.Sa||!e.Sa.ab.lb)throw new Ye(6);try{for(var a=0;a<r;a++)e.Sa.ab.lb(e.Sa,t[n+a])}catch(e){throw new Ye(5)}return r&&(e.node.timestamp=Date.now()),a}},xe={sb:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\n"):"function"==typeof readline&&(null!==(t=readline())&&(t+="\n")),!t)return null;for(var n=0,r=0;r<t.length;++r){var a=t.charCodeAt(r);55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++r)),127>=a?++n:n=2047>=a?n+2:65535>=a?n+3:n+4}var i=(n=Array(n+1)).length;if(r=0,0<i){a=r,i=r+i-1;for(var o=0;o<t.length;++o){var s=t.charCodeAt(o);if(55296<=s&&57343>=s)s=65536+((1023&s)<<10)|1023&t.charCodeAt(++o);if(127>=s){if(r>=i)break;n[r++]=s}else{if(2047>=s){if(r+1>=i)break;n[r++]=192|s>>6}else{if(65535>=s){if(r+2>=i)break;n[r++]=224|s>>12}else{if(r+3>=i)break;n[r++]=240|s>>18,n[r++]=128|s>>12&63}n[r++]=128|s>>6&63}n[r++]=128|63&s}}n[r]=0,t=r-a}else t=0;n.length=t,e.input=n}return e.input.shift()},lb:function(e,t){null===t||10===t?(K(n(e.Ta,0)),e.Ta=[]):0!=t&&e.Ta.push(t)},flush:function(e){e.Ta&&0<e.Ta.length&&(K(n(e.Ta,0)),e.Ta=[])}},Oe={lb:function(e,t){null===t||10===t?(X(n(e.Ta,0)),e.Ta=[]):0!=t&&e.Ta.push(t)},flush:function(e){e.Ta&&0<e.Ta.length&&(X(n(e.Ta,0)),e.Ta=[])}},ke={Ua:null,Wa:function(){return ke.createNode(null,"/",16895,0)},createNode:function(e,t,n,r){if(24576==(61440&n)||4096==(61440&n))throw new Ye(1);return ke.Ua||(ke.Ua={dir:{node:{Za:ke.Pa.Za,Va:ke.Pa.Va,cb:ke.Pa.cb,fb:ke.Pa.fb,xb:ke.Pa.xb,zb:ke.Pa.zb,yb:ke.Pa.yb,wb:ke.Pa.wb,ib:ke.Pa.ib},stream:{$a:ke.Qa.$a}},file:{node:{Za:ke.Pa.Za,Va:ke.Pa.Va},stream:{$a:ke.Qa.$a,read:ke.Qa.read,write:ke.Qa.write,nb:ke.Qa.nb,tb:ke.Qa.tb,vb:ke.Qa.vb}},link:{node:{Za:ke.Pa.Za,Va:ke.Pa.Va,eb:ke.Pa.eb},stream:{}},ob:{node:{Za:ke.Pa.Za,Va:ke.Pa.Va},stream:je}}),16384==(61440&(n=b(e,t,n,r)).mode)?(n.Pa=ke.Ua.dir.node,n.Qa=ke.Ua.dir.stream,n.Oa={}):32768==(61440&n.mode)?(n.Pa=ke.Ua.file.node,n.Qa=ke.Ua.file.stream,n.Ra=0,n.Oa=null):40960==(61440&n.mode)?(n.Pa=ke.Ua.link.node,n.Qa=ke.Ua.link.stream):8192==(61440&n.mode)&&(n.Pa=ke.Ua.ob.node,n.Qa=ke.Ua.ob.stream),n.timestamp=Date.now(),e&&(e.Oa[t]=n),n},Nb:function(e){if(e.Oa&&e.Oa.subarray){for(var t=[],n=0;n<e.Ra;++n)t.push(e.Oa[n]);return t}return e.Oa},Ob:function(e){return e.Oa?e.Oa.subarray?e.Oa.subarray(0,e.Ra):new Uint8Array(e.Oa):new Uint8Array},pb:function(e,t){var n=e.Oa?e.Oa.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)|0),0!=n&&(t=Math.max(t,256)),n=e.Oa,e.Oa=new Uint8Array(t),0<e.Ra&&e.Oa.set(n.subarray(0,e.Ra),0))},Eb:function(e,t){if(e.Ra!=t)if(0==t)e.Oa=null,e.Ra=0;else{if(!e.Oa||e.Oa.subarray){var n=e.Oa;e.Oa=new Uint8Array(new ArrayBuffer(t)),n&&e.Oa.set(n.subarray(0,Math.min(t,e.Ra)))}else if(e.Oa||(e.Oa=[]),e.Oa.length>t)e.Oa.length=t;else for(;e.Oa.length<t;)e.Oa.push(0);e.Ra=t}},Pa:{Za:function(e){var t={};return t.Lb=8192==(61440&e.mode)?e.id:1,t.Qb=e.id,t.mode=e.mode,t.Sb=1,t.uid=0,t.Pb=0,t.hb=e.hb,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.Ra:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.Ib=new Date(e.timestamp),t.Rb=new Date(e.timestamp),t.Kb=new Date(e.timestamp),t.Ab=4096,t.Jb=Math.ceil(t.size/t.Ab),t},Va:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&ke.Eb(e,t.size)},cb:function(){throw Qe[2]},fb:function(e,t,n,r){return ke.createNode(e,t,n,r)},xb:function(e,t,n){if(16384==(61440&e.mode)){try{var r=m(t,n)}catch(e){}if(r)for(var a in r.Oa)throw new Ye(39)}delete e.parent.Oa[e.name],e.name=n,t.Oa[n]=e,e.parent=t},zb:function(e,t){delete e.Oa[t]},yb:function(e,t){var n,r=m(e,t);for(n in r.Oa)throw new Ye(39);delete e.Oa[t]},wb:function(e){var t,n=[".",".."];for(t in e.Oa)e.Oa.hasOwnProperty(t)&&n.push(t);return n},ib:function(e,t,n){return(e=ke.createNode(e,t,41471,0)).link=n,e},eb:function(e){if(40960!=(61440&e.mode))throw new Ye(22);return e.link}},Qa:{read:function(e,t,n,r,a){var i=e.node.Oa;if(a>=e.node.Ra)return 0;if(8<(e=Math.min(e.node.Ra-a,r))&&i.subarray)t.set(i.subarray(a,a+e),n);else for(r=0;r<e;r++)t[n+r]=i[a+r];return e},write:function(e,t,n,r,a,i){if(!r)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.Oa||e.Oa.subarray)){if(i)return e.Oa=t.subarray(n,n+r),e.Ra=r;if(0===e.Ra&&0===a)return e.Oa=new Uint8Array(t.subarray(n,n+r)),e.Ra=r;if(a+r<=e.Ra)return e.Oa.set(t.subarray(n,n+r),a),r}if(ke.pb(e,a+r),e.Oa.subarray&&t.subarray)e.Oa.set(t.subarray(n,n+r),a);else for(i=0;i<r;i++)e.Oa[a+i]=t[n+i];return e.Ra=Math.max(e.Ra,a+r),r},$a:function(e,t,n){if(1===n?t+=e.position:2===n&&32768==(61440&e.node.mode)&&(t+=e.node.Ra),0>t)throw new Ye(22);return t},nb:function(e,t,n){ke.pb(e.node,t+n),e.node.Ra=Math.max(e.node.Ra,t+n)},tb:function(e,t,n,r,a,i,o){if(32768!=(61440&e.node.mode))throw new Ye(19);if(n=e.node.Oa,2&o||n.buffer!==t&&n.buffer!==t.buffer){if((0<a||a+r<e.node.Ra)&&(n=n.subarray?n.subarray(a,a+r):Array.prototype.slice.call(n,a,a+r)),e=!0,!(r=$e(r)))throw new Ye(12);t.set(n,r)}else e=!1,r=n.byteOffset;return{Ub:r,Hb:e}},vb:function(e,t,n,r,a){if(32768!=(61440&e.node.mode))throw new Ye(19);return 2&a?0:(ke.Qa.write(e,t,0,r,n,!1),0)}}},Le=null,Ue={},Me=[],Ce=1,He=null,Ne=!0,ze={},Ye=null,Qe={},Ie={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},je={open:function(e){e.Qa=Ue[e.node.hb].Qa,e.Qa.open&&e.Qa.open(e)},$a:function(){throw new Ye(29)}},De={},We=0;M(),He=Array(4096),T(ke,"/"),R("/tmp"),R("/home"),R("/home/web_user"),function(){if(R("/dev"),A(259,{read:function(){return 0},write:function(e,t,n,r){return r}}),B("/dev/null",259),p(1280,xe),p(1536,Oe),B("/dev/tty",1280),B("/dev/tty1",1536),"object"==typeof crypto&&"function"==typeof crypto.getRandomValues)var e=new Uint8Array(1),t=function(){return crypto.getRandomValues(e),e[0]};t||(t=function(){D("random_device")}),C("random",t),C("urandom",t),R("/dev/shm"),R("/dev/shm/tmp")}(),R("/proc"),R("/proc/self"),R("/proc/self/fd"),T({Wa:function(){var e=b("/proc/self","fd",16895,73);return e.Pa={cb:function(e,t){var n=Me[+t];if(!n)throw new Ye(9);return(e={parent:null,Wa:{ub:"fake"},Pa:{eb:function(){return n.path}}}).parent=e}},e}},"/proc/self/fd");var Fe=W.asm({},{n:D,d:function(e){q=e},b:function(){return q},h:function(e){var t=Xe();try{return Ze(e)}catch(e){if(Ke(t),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},j:function(e,t){var n=Xe();try{return qe(e,t)}catch(e){if(Ke(n),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},i:function(e,t,n){var r=Xe();try{return Ge(e,t,n)}catch(e){if(Ke(r),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},q:function(e,t,n,r){var a=Xe();try{return Je(e,t,n,r)}catch(e){if(Ke(a),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},D:function(e,t,n,r,a){var i=Xe();try{return et(e,t,n,r,a)}catch(e){if(Ke(i),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},m:function(e){var t=Xe();try{tt(e)}catch(e){if(Ke(t),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},e:function(e,t){var n=Xe();try{nt(e,t)}catch(e){if(Ke(n),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},f:function(e,t,n){var r=Xe();try{rt(e,t,n)}catch(e){if(Ke(r),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},g:function(e,t,n,r){var a=Xe();try{at(e,t,n,r)}catch(e){if(Ke(a),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},l:function(e,t,n,r,a){var i=Xe();try{it(e,t,n,r,a)}catch(e){if(Ke(i),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},s:function(e,t,n,r,a,i){var o=Xe();try{ot(e,t,n,r,a,i)}catch(e){if(Ke(o),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},o:function(e,t,n,r,a,i,o){var s=Xe();try{st(e,t,n,r,a,i,o)}catch(e){if(Ke(s),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},N:function(e,t,n,r,a,i,o,s){var u=Xe();try{ut(e,t,n,r,a,i,o,s)}catch(e){if(Ke(u),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},C:function(e,t,n,r,a,i,o,s,u){var f=Xe();try{ft(e,t,n,r,a,i,o,s,u)}catch(e){if(Ke(f),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},v:function(){},B:_,M:function(e,t){We=t;try{var n=N(),r=H(),a=H(),i=H(),o=H();return-9007199254740992>=(e=4294967296*r+(a>>>0))||9007199254740992<=e?-75:(L(n,e,o),Ee=[n.position>>>0,(we=n.position,1<=+le(we)?0<we?(0|pe(+de(we/4294967296),4294967295))>>>0:~~+_e((we-+(~~we>>>0))/4294967296)>>>0:0)],ie[i>>2]=Ee[0],ie[i+4>>2]=Ee[1],n.kb&&0===e&&0===o&&(n.kb=null),0)}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},L:function(e,t){We=t;try{var n=N(),r=H();e:{var a=H();for(t=e=0;t<a;t++){var i=ie[r+(8*t+4)>>2],o=U(n,ie[r+8*t>>2],i,void 0);if(0>o){var s=-1;break e}if(e+=o,o<i)break}s=e}return s}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},A:function(e,t){We=t;try{var n=N(),r=H();e:{var a=H();for(t=e=0;t<a;t++){var i=n,o=ie[r+8*t>>2],s=ie[r+(8*t+4)>>2],u=void 0;if(0>s||0>u)throw new Ye(22);if(null===i.Ya)throw new Ye(9);if(0==(2097155&i.flags))throw new Ye(9);if(16384==(61440&i.node.mode))throw new Ye(21);if(!i.Qa.write)throw new Ye(22);1024&i.flags&&L(i,0,2);var f=void 0!==u;if(f){if(!i.seekable)throw new Ye(29)}else u=i.position;var c=i.Qa.write(i,ne,o,s,u,void 0);f||(i.position+=c);try{i.path&&ze.onWriteToFile&&ze.onWriteToFile(i.path)}catch(e){console.log("FS.trackingDelegate['onWriteToFile']('"+i.path+"') threw an exception: "+e.message)}if(0>(i=c)){var l=-1;break e}e+=i}l=e}return l}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},z:function(e,t){We=t;try{var n=N();switch(H()){case 0:var r=H();return 0>r?-22:k(n.path,n.flags,0,r).Ya;case 1:case 2:return 0;case 3:return n.flags;case 4:return r=H(),n.flags|=r,0;case 12:return r=H(),ae[r+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-22;case 9:return _(22),-1;default:return-22}}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},K:function(e,t){We=t;try{return U(N(),H(),H())}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},y:function(e,t){We=t;try{var r=H();return k(r?n(re,r,void 0):"",H(),H()).Ya}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},x:function(e,t){We=t;try{var n=N(),r=H();switch(r){case 21509:case 21505:return n.Sa?0:-25;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return n.Sa?0:-25;case 21519:if(!n.Sa)return-25;var a=H();return ie[a>>2]=0;case 21520:return n.Sa?-22:-25;case 21531:if(e=H(),!n.Qa.Bb)throw new Ye(25);return n.Qa.Bb(n,r,e);case 21523:case 21524:return n.Sa?0:-25;default:D("bad ioctl syscall "+r)}}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},u:function(e,t){We=t;try{var n=N();if(null===n.Ya)throw new Ye(9);n.kb&&(n.kb=null);try{n.Qa.close&&n.Qa.close(n)}catch(e){throw e}finally{Me[n.Ya]=null}return n.Ya=null,0}catch(e){return void 0!==De&&e instanceof Ye||D(e),-e.Xa}},t:function(){},J:function(){W.abort()},I:function(){return ne.length},H:function(e,t){z(e,t)},G:function(e,t,n){re.set(re.subarray(t,t+n),e)},F:function(){Q()},k:function(e){!W.noExitRuntime&&(J=!0,W.onExit)&&W.onExit(e),W.quit(e,new I(e))},w:function(e){var t=Date.now();return ie[e>>2]=t/1e3|0,ie[e+4>>2]=t%1e3*1e3|0,0},p:function(e){var t=Y.bb[e];Y.bb.splice(e,1),Ke(t)},r:Y,c:z,E:Q,a:62864},te);W.asm=Fe,W.___errno_location=function(){return W.asm.O.apply(null,arguments)},W._free=function(){return W.asm.P.apply(null,arguments)};var $e=W._malloc=function(){return W.asm.Q.apply(null,arguments)},Ve=W._setThrew=function(){return W.asm.R.apply(null,arguments)};W._vsc_buffer_bytes=function(){return W.asm.S.apply(null,arguments)},W._vsc_buffer_data=function(){return W.asm.T.apply(null,arguments)},W._vsc_buffer_delete=function(){return W.asm.U.apply(null,arguments)},W._vsc_buffer_len=function(){return W.asm.V.apply(null,arguments)},W._vsc_buffer_make_secure=function(){return W.asm.W.apply(null,arguments)},W._vsc_buffer_new=function(){return W.asm.X.apply(null,arguments)},W._vsc_buffer_new_with_capacity=function(){return W.asm.Y.apply(null,arguments)},W._vsc_data=function(){return W.asm.Z.apply(null,arguments)},W._vsc_data_bytes=function(){return W.asm._.apply(null,arguments)},W._vsc_data_ctx_size=function(){return W.asm.$.apply(null,arguments)},W._vsc_data_len=function(){return W.asm.aa.apply(null,arguments)},W._vscp_error_ctx_size=function(){return W.asm.ba.apply(null,arguments)},W._vscp_error_reset=function(){return W.asm.ca.apply(null,arguments)},W._vscp_error_status=function(){return W.asm.da.apply(null,arguments)},W._vscp_pythia_blind=function(){return W.asm.ea.apply(null,arguments)},W._vscp_pythia_blinded_password_buf_len=function(){return W.asm.fa.apply(null,arguments)},W._vscp_pythia_blinding_secret_buf_len=function(){return W.asm.ga.apply(null,arguments)},W._vscp_pythia_cleanup=function(){return W.asm.ha.apply(null,arguments)},W._vscp_pythia_compute_transformation_key_pair=function(){return W.asm.ia.apply(null,arguments)},W._vscp_pythia_configure=function(){return W.asm.ja.apply(null,arguments)},W._vscp_pythia_deblind=function(){return W.asm.ka.apply(null,arguments)},W._vscp_pythia_deblinded_password_buf_len=function(){return W.asm.la.apply(null,arguments)},W._vscp_pythia_get_password_update_token=function(){return W.asm.ma.apply(null,arguments)},W._vscp_pythia_password_update_token_buf_len=function(){return W.asm.na.apply(null,arguments)},W._vscp_pythia_proof_value_buf_len=function(){return W.asm.oa.apply(null,arguments)},W._vscp_pythia_prove=function(){return W.asm.pa.apply(null,arguments)},W._vscp_pythia_transform=function(){return W.asm.qa.apply(null,arguments)},W._vscp_pythia_transformation_private_key_buf_len=function(){return W.asm.ra.apply(null,arguments)},W._vscp_pythia_transformation_public_key_buf_len=function(){return W.asm.sa.apply(null,arguments)},W._vscp_pythia_transformed_password_buf_len=function(){return W.asm.ta.apply(null,arguments)},W._vscp_pythia_transformed_tweak_buf_len=function(){return W.asm.ua.apply(null,arguments)},W._vscp_pythia_update_deblinded_with_token=function(){return W.asm.va.apply(null,arguments)},W._vscp_pythia_verify=function(){return W.asm.wa.apply(null,arguments)},W.stackAlloc=function(){return W.asm.La.apply(null,arguments)};var Ke=W.stackRestore=function(){return W.asm.Ma.apply(null,arguments)},Xe=W.stackSave=function(){return W.asm.Na.apply(null,arguments)},Ze=W.dynCall_i=function(){return W.asm.xa.apply(null,arguments)},qe=W.dynCall_ii=function(){return W.asm.ya.apply(null,arguments)},Ge=W.dynCall_iii=function(){return W.asm.za.apply(null,arguments)},Je=W.dynCall_iiii=function(){return W.asm.Aa.apply(null,arguments)},et=W.dynCall_iiiii=function(){return W.asm.Ba.apply(null,arguments)},tt=W.dynCall_v=function(){return W.asm.Ca.apply(null,arguments)},nt=W.dynCall_vi=function(){return W.asm.Da.apply(null,arguments)},rt=W.dynCall_vii=function(){return W.asm.Ea.apply(null,arguments)},at=W.dynCall_viii=function(){return W.asm.Fa.apply(null,arguments)},it=W.dynCall_viiii=function(){return W.asm.Ga.apply(null,arguments)},ot=W.dynCall_viiiii=function(){return W.asm.Ha.apply(null,arguments)},st=W.dynCall_viiiiii=function(){return W.asm.Ia.apply(null,arguments)},ut=W.dynCall_viiiiiii=function(){return W.asm.Ja.apply(null,arguments)},ft=W.dynCall_viiiiiiii=function(){return W.asm.Ka.apply(null,arguments)};if(W.asm=Fe,W.then=function(e){if(W.calledRun)e(W);else{var t=W.onRuntimeInitialized;W.onRuntimeInitialized=function(){t&&t(),e(W)}}return W},I.prototype=Error(),I.prototype.constructor=I,ve=function e(){W.calledRun||j(),W.calledRun||(ve=e)},W.run=j,W.abort=D,W.preInit)for("function"==typeof W.preInit&&(W.preInit=[W.preInit]);0<W.preInit.length;)W.preInit.pop()();return W.noExitRuntime=!0,j(),t}}(),n.exports=r,e=t.exports;var a=()=>{class e extends Error{constructor(e){super(e),this.name="PythiaError",this.message=e}static handleStatusCode(t){if(0!=t){if(-1==t)throw new e("This error should not be returned if assertions is enabled.");if(-200==t)throw new e("Underlying pythia library returns -1.");if(-202==t)throw new e("Underlying random number generator failed.");throw new e("Unexpected status code:"+t)}}}return e};function i(e,t){if(!("number"==typeof t||t instanceof Number))throw new TypeError(`'${e}' is not a number`);if(Number.isNaN(t))throw new TypeError(`'${e}' is NaN`);if(1/0===t)throw new TypeError(`'${e}' is Infinity`);if(-1/0===t)throw new TypeError(`'${e}' is -Infinity`)}function o(e,t){if(i(e,t),0==t)throw new TypeError(`'${e}' is NULL`)}var s={ensureNumber:i,ensureString:function(e,t){if(!("string"==typeof t||t instanceof String))throw new TypeError(`'${e}' is not a string`)},ensureBoolean:function(e,t){if("boolean"!=typeof t)throw new TypeError(`'${e}' is not a boolean`)},ensureByteArray:function(e,t){if(!(t instanceof Uint8Array))throw new TypeError(`'${e}' is not an Uint8Array`)},ensureClass:function(e,t,n){if(!(t instanceof n))throw new TypeError(`'${e}' is not an instance of the class ${n.name}`);o(e,t.ctxPtr)},ensureNotNull:o,ensureImplementInterface:function(e,t,n,r,a){if(o(e,t.ctxPtr),!a.isImplemented(t.ctxPtr,r))throw new TypeError(`'${e}' does not implement interface '${n}'`)}};export default()=>{const t=new e;return new Promise((e,n)=>{t.onRuntimeInitialized=()=>{const n={};n.PythiaError=a(),n.Pythia=((e,t)=>{class n{static configure(){const n=e._vscp_pythia_configure();t.PythiaError.handleStatusCode(n)}static cleanup(){e._vscp_pythia_cleanup()}static blindedPasswordBufLen(){return e._vscp_pythia_blinded_password_buf_len()}static deblindedPasswordBufLen(){return e._vscp_pythia_deblinded_password_buf_len()}static blindingSecretBufLen(){return e._vscp_pythia_blinding_secret_buf_len()}static transformationPrivateKeyBufLen(){return e._vscp_pythia_transformation_private_key_buf_len()}static transformationPublicKeyBufLen(){return e._vscp_pythia_transformation_public_key_buf_len()}static transformedPasswordBufLen(){return e._vscp_pythia_transformed_password_buf_len()}static transformedTweakBufLen(){return e._vscp_pythia_transformed_tweak_buf_len()}static proofValueBufLen(){return e._vscp_pythia_proof_value_buf_len()}static passwordUpdateTokenBufLen(){return e._vscp_pythia_password_update_token_buf_len()}static blind(r){s.ensureByteArray("password",r);var a=r.length*r.BYTES_PER_ELEMENT;const i=e._malloc(a);e.HEAP8.set(r,i),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,i,a),a=n.blindedPasswordBufLen(),a=e._vsc_buffer_new_with_capacity(a);var o=n.blindingSecretBufLen();o=e._vsc_buffer_new_with_capacity(o);try{const n=e._vscp_pythia_blind(r,a,o);t.PythiaError.handleStatusCode(n);const i=e._vsc_buffer_bytes(a),s=e._vsc_buffer_len(a),u=e.HEAPU8.slice(i,i+s),f=e._vsc_buffer_bytes(o),c=e._vsc_buffer_len(o);return{blindedPassword:u,blindingSecret:e.HEAPU8.slice(f,f+c)}}finally{e._free(n),e._free(r),e._vsc_buffer_delete(a),e._vsc_buffer_delete(o)}}static deblind(r,a){s.ensureByteArray("transformedPassword",r),s.ensureByteArray("blindingSecret",a);var i=r.length*r.BYTES_PER_ELEMENT;const o=e._malloc(i);e.HEAP8.set(r,o),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,o,i);var u=a.length*a.BYTES_PER_ELEMENT;i=e._malloc(u),e.HEAP8.set(a,i),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,i,u),u=n.deblindedPasswordBufLen(),u=e._vsc_buffer_new_with_capacity(u);try{const n=e._vscp_pythia_deblind(r,a,u);t.PythiaError.handleStatusCode(n);const i=e._vsc_buffer_bytes(u),o=e._vsc_buffer_len(u);return e.HEAPU8.slice(i,i+o)}finally{e._free(i),e._free(r),e._free(n),e._free(a),e._vsc_buffer_delete(u)}}static computeTransformationKeyPair(r,a,i){s.ensureByteArray("transformationKeyId",r),s.ensureByteArray("pythiaSecret",a),s.ensureByteArray("pythiaScopeSecret",i);var o=r.length*r.BYTES_PER_ELEMENT;const u=e._malloc(o);e.HEAP8.set(r,u),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,u,o);var f=a.length*a.BYTES_PER_ELEMENT;o=e._malloc(f),e.HEAP8.set(a,o),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,o,f);var c=i.length*i.BYTES_PER_ELEMENT;f=e._malloc(c),e.HEAP8.set(i,f),i=e._vsc_data_ctx_size(),i=e._malloc(i),e._vsc_data(i,f,c),c=n.transformationPrivateKeyBufLen(),c=e._vsc_buffer_new_with_capacity(c);var l=n.transformationPublicKeyBufLen();l=e._vsc_buffer_new_with_capacity(l);try{const n=e._vscp_pythia_compute_transformation_key_pair(r,a,i,c,l);t.PythiaError.handleStatusCode(n);const o=e._vsc_buffer_bytes(c),s=e._vsc_buffer_len(c),u=e.HEAPU8.slice(o,o+s),f=e._vsc_buffer_bytes(l),_=e._vsc_buffer_len(l);return{transformationPrivateKey:u,transformationPublicKey:e.HEAPU8.slice(f,f+_)}}finally{e._free(n),e._free(r),e._free(o),e._free(a),e._free(s),e._free(i),e._vsc_buffer_delete(c),e._vsc_buffer_delete(l)}}static transform(r,a,i){s.ensureByteArray("blindedPassword",r),s.ensureByteArray("tweak",a),s.ensureByteArray("transformationPrivateKey",i);var o=r.length*r.BYTES_PER_ELEMENT;const u=e._malloc(o);e.HEAP8.set(r,u),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,u,o);var f=a.length*a.BYTES_PER_ELEMENT;o=e._malloc(f),e.HEAP8.set(a,o),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,o,f);var c=i.length*i.BYTES_PER_ELEMENT;f=e._malloc(c),e.HEAP8.set(i,f),i=e._vsc_data_ctx_size(),i=e._malloc(i),e._vsc_data(i,f,c),c=n.transformedPasswordBufLen(),c=e._vsc_buffer_new_with_capacity(c);var l=n.transformedTweakBufLen();l=e._vsc_buffer_new_with_capacity(l);try{const n=e._vscp_pythia_transform(r,a,i,c,l);t.PythiaError.handleStatusCode(n);const o=e._vsc_buffer_bytes(c),s=e._vsc_buffer_len(c),u=e.HEAPU8.slice(o,o+s),f=e._vsc_buffer_bytes(l),_=e._vsc_buffer_len(l);return{transformedPassword:u,transformedTweak:e.HEAPU8.slice(f,f+_)}}finally{e._free(n),e._free(r),e._free(o),e._free(a),e._free(s),e._free(i),e._vsc_buffer_delete(c),e._vsc_buffer_delete(l)}}static prove(r,a,i,o,u){s.ensureByteArray("transformedPassword",r),s.ensureByteArray("blindedPassword",a),s.ensureByteArray("transformedTweak",i),s.ensureByteArray("transformationPrivateKey",o),s.ensureByteArray("transformationPublicKey",u);var f=r.length*r.BYTES_PER_ELEMENT;const c=e._malloc(f);e.HEAP8.set(r,c),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,c,f);var l=a.length*a.BYTES_PER_ELEMENT;f=e._malloc(l),e.HEAP8.set(a,f),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,f,l);var _=i.length*i.BYTES_PER_ELEMENT;l=e._malloc(_),e.HEAP8.set(i,l),i=e._vsc_data_ctx_size(),i=e._malloc(i),e._vsc_data(i,l,_);var d=o.length*o.BYTES_PER_ELEMENT;_=e._malloc(d),e.HEAP8.set(o,_),o=e._vsc_data_ctx_size(),o=e._malloc(o),e._vsc_data(o,_,d);var p=u.length*u.BYTES_PER_ELEMENT;d=e._malloc(p),e.HEAP8.set(u,d),u=e._vsc_data_ctx_size(),u=e._malloc(u),e._vsc_data(u,d,p),p=n.proofValueBufLen(),p=e._vsc_buffer_new_with_capacity(p);var y=n.proofValueBufLen();y=e._vsc_buffer_new_with_capacity(y);try{const n=e._vscp_pythia_prove(r,a,i,o,u,p,y);t.PythiaError.handleStatusCode(n);const s=e._vsc_buffer_bytes(p),f=e._vsc_buffer_len(p),c=e.HEAPU8.slice(s,s+f),l=e._vsc_buffer_bytes(y),_=e._vsc_buffer_len(y);return{proofValueC:c,proofValueU:e.HEAPU8.slice(l,l+_)}}finally{e._free(n),e._free(r),e._free(s),e._free(a),e._free(f),e._free(i),e._free(_),e._free(o),e._free(l),e._free(u),e._vsc_buffer_delete(p),e._vsc_buffer_delete(y)}}static verify(n,r,a,i,o,u){s.ensureByteArray("transformedPassword",n),s.ensureByteArray("blindedPassword",r),s.ensureByteArray("tweak",a),s.ensureByteArray("transformationPublicKey",i),s.ensureByteArray("proofValueC",o),s.ensureByteArray("proofValueU",u);var f=n.length*n.BYTES_PER_ELEMENT;const c=e._malloc(f);e.HEAP8.set(n,c),n=e._vsc_data_ctx_size(),n=e._malloc(n),e._vsc_data(n,c,f);var l=r.length*r.BYTES_PER_ELEMENT;f=e._malloc(l),e.HEAP8.set(r,f),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,f,l);var _=a.length*a.BYTES_PER_ELEMENT;l=e._malloc(_),e.HEAP8.set(a,l),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,l,_);var d=i.length*i.BYTES_PER_ELEMENT;_=e._malloc(d),e.HEAP8.set(i,_),i=e._vsc_data_ctx_size(),i=e._malloc(i),e._vsc_data(i,_,d);var p=o.length*o.BYTES_PER_ELEMENT;d=e._malloc(p),e.HEAP8.set(o,d),o=e._vsc_data_ctx_size(),o=e._malloc(o),e._vsc_data(o,d,p);var y=u.length*u.BYTES_PER_ELEMENT;let h;p=e._malloc(y),e.HEAP8.set(u,p),u=e._vsc_data_ctx_size(),u=e._malloc(u),e._vsc_data(u,p,y),y=e._vscp_error_ctx_size(),y=e._malloc(y),e._vscp_error_reset(y);try{h=e._vscp_pythia_verify(n,r,a,i,o,u,y);const s=e._vscp_error_status(y);return t.PythiaError.handleStatusCode(s),!!h}finally{e._free(c),e._free(n),e._free(s),e._free(r),e._free(l),e._free(a),e._free(_),e._free(i),e._free(d),e._free(o),e._free(p),e._free(u),e._free(y)}}static getPasswordUpdateToken(r,a){s.ensureByteArray("previousTransformationPrivateKey",r),s.ensureByteArray("newTransformationPrivateKey",a);var i=r.length*r.BYTES_PER_ELEMENT;const o=e._malloc(i);e.HEAP8.set(r,o),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,o,i);var u=a.length*a.BYTES_PER_ELEMENT;i=e._malloc(u),e.HEAP8.set(a,i),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,i,u),u=n.passwordUpdateTokenBufLen(),u=e._vsc_buffer_new_with_capacity(u);try{const n=e._vscp_pythia_get_password_update_token(r,a,u);t.PythiaError.handleStatusCode(n);const i=e._vsc_buffer_bytes(u),o=e._vsc_buffer_len(u);return e.HEAPU8.slice(i,i+o)}finally{e._free(i),e._free(r),e._free(n),e._free(a),e._vsc_buffer_delete(u)}}static updateDeblindedWithToken(r,a){s.ensureByteArray("deblindedPassword",r),s.ensureByteArray("passwordUpdateToken",a);var i=r.length*r.BYTES_PER_ELEMENT;const o=e._malloc(i);e.HEAP8.set(r,o),r=e._vsc_data_ctx_size(),r=e._malloc(r),e._vsc_data(r,o,i);var u=a.length*a.BYTES_PER_ELEMENT;i=e._malloc(u),e.HEAP8.set(a,i),a=e._vsc_data_ctx_size(),a=e._malloc(a),e._vsc_data(a,i,u),u=n.deblindedPasswordBufLen(),u=e._vsc_buffer_new_with_capacity(u);try{const n=e._vscp_pythia_update_deblinded_with_token(r,a,u);t.PythiaError.handleStatusCode(n);const i=e._vsc_buffer_bytes(u),o=e._vsc_buffer_len(u);return e.HEAPU8.slice(i,i+o)}finally{e._free(i),e._free(r),e._free(n),e._free(a),e._vsc_buffer_delete(u)}}}return n})(t,n),e(n)},t.onAbort=e=>{n(Error(e))}})};
