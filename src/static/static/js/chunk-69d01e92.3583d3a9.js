(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69d01e92"],{"51ad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-new-terminal"},[n("div",{ref:"terminal",staticClass:"felix-xterm"})])},o=[],i=(n("99af"),n("b0c0"),n("2ef0")),s=n("fcf3"),c=n("47d02"),a=n("e762"),l=n("d1f9"),d=n("408b"),u=(n("f9ab"),n("4ad9")),f=new c["FitAddon"],h=new d["WebLinksAddon"],m=new l["SearchAddon"],w=i["debounce"]((function(){console.log("resize: onWindowResize"),f.fit()}),200),p=function(e,t){var n=function(e){console.log("resize: ",e),t.send(JSON.stringify({type:"resize",rows:e.rows,cols:e.cols}))};e.onResize(n),t.addEventListener("close",(function(){console.log("term: ",e)}))},b=function(e,t,n,r){e.write("\r\nWelcome to SqlDEV Web Ssh Terminal\n\r\n"),e.socket=t;var o=null,i=function(t){r&&r>0?o?o+=t.data:(o=t.data,setTimeout((function(){e.write(o)}),r)):e.write(t.data)},s=function(e){t.send(JSON.stringify({type:"cmd",cmd:a["a"].encode(e)}))};t.onmessage=i,n&&e.onData(s);var c=setInterval((function(){t.send(JSON.stringify({type:"heartbeat",data:""}))}),2e4);t.addEventListener("close",(function(){t.removeEventListener("message",i),delete e.socket,clearInterval(c)}))},y={props:{obj:{type:Object,require:!0},visible:Boolean},name:"CompTerm",data:function(){return{m:{},id:0,isFullScreen:!1,searchKey:"",isShow:!1,ws:null,term:null,fitAddon:null,thisV:this.visible,disable:!1}},watch:{visible:function(e){this.v=e}},computed:{termTitle:function(){return this.m?"@".concat(this.m.name):""},wsUrl:function(){var e=localStorage.getItem("token");return"".concat(u["a"].wsBase(),"/api/ws/ssh/").concat(this.id,"?cols=").concat(this.term.cols,"&rows=").concat(this.term.rows,"&access_token=").concat(e)}},created:function(){var e=this.$route.query;this.m=e,this.id=e.id,document.title=e.name+" - SQLDEV v4 - 南京树安信息技术有限公司"},mounted:function(){this.doOpened()},methods:{reset:function(){this.ws=null,this.term=null},doLink:function(e,t){"click"===e.type&&window.open(t)},doClose:function(){if(window.removeEventListener("resize",w),this.ws&&this.ws.close(),this.term){var e="您的 ".concat(this.m.name," 连接配置无法连接，请关闭当前页面，并检查连接配置信息");this.term.writeln("[1;31m".concat(e)),this.term.setOption("disableStdin",!0)}this.m={},this.id=0,this.isShow=!1},doOpened:function(){var e=this;this.term=new s["Terminal"]({fontSize:12,rows:60,convertEol:!0,cursorBlink:!0,cursorStyle:"underline",bellStyle:"sound"}),this.term.loadAddon(f),this.term.loadAddon(h),this.term.loadAddon(m),this.term.open(this.$refs.terminal),f.fit(),this.term.focus(),window.addEventListener("resize",w),console.log("this.wsUrl:",this.wsUrl),this.ws=new WebSocket(this.wsUrl),this.ws.onerror=function(t){console.log("onerror event: ",t),e.$message.error("登陆失败,请检查你的配置")},this.ws.onclose=function(t){console.log("ws close:",t),1005!==t.code&&(e.$notify.error({title:"code ".concat(t.code),message:t.reason}),e.doClose())},b(this.term,this.ws,!0,-1),p(this.term,this.ws)}}},A=y,g=(n("9c91"),n("2877")),v=Object(g["a"])(A,r,o,!1,null,"974579f8",null);t["default"]=v.exports},"9c91":function(e,t,n){"use strict";var r=n("cf65"),o=n.n(r);o.a},cf65:function(e,t,n){},e762:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));const r="3.6.0",o=r,i="function"===typeof atob,s="function"===typeof btoa,c="function"===typeof Buffer,a="function"===typeof TextDecoder?new TextDecoder:void 0,l="function"===typeof TextEncoder?new TextEncoder:void 0,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=[...d],f=(e=>{let t={};return e.forEach((e,n)=>t[e]=n),t})(u),h=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,m=String.fromCharCode.bind(String),w="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),p=e=>e.replace(/[+\/]/g,e=>"+"==e?"-":"_").replace(/=+$/m,""),b=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),y=e=>{let t,n,r,o,i="";const s=e.length%3;for(let c=0;c<e.length;){if((n=e.charCodeAt(c++))>255||(r=e.charCodeAt(c++))>255||(o=e.charCodeAt(c++))>255)throw new TypeError("invalid character found");t=n<<16|r<<8|o,i+=u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}return s?i.slice(0,s-3)+"===".substring(s):i},A=s?e=>btoa(e):c?e=>Buffer.from(e,"binary").toString("base64"):y,g=c?e=>Buffer.from(e).toString("base64"):e=>{const t=4096;let n=[];for(let r=0,o=e.length;r<o;r+=t)n.push(m.apply(null,e.subarray(r,r+t)));return A(n.join(""))},v=(e,t=!1)=>t?p(g(e)):g(e),S=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?m(192|t>>>6)+m(128|63&t):m(224|t>>>12&15)+m(128|t>>>6&63)+m(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return m(240|t>>>18&7)+m(128|t>>>12&63)+m(128|t>>>6&63)+m(128|63&t)},C=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,x=e=>e.replace(C,S),B=c?e=>Buffer.from(e,"utf8").toString("base64"):l?e=>g(l.encode(e)):e=>A(x(e)),U=(e,t=!1)=>t?p(B(e)):B(e),E=e=>U(e,!0),F=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,z=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return m(55296+(n>>>10))+m(56320+(1023&n));case 3:return m((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return m((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},k=e=>e.replace(F,z),L=e=>{if(e=e.replace(/\s+/g,""),!h.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,n,r,o="";for(let i=0;i<e.length;)t=f[e.charAt(i++)]<<18|f[e.charAt(i++)]<<12|(n=f[e.charAt(i++)])<<6|(r=f[e.charAt(i++)]),o+=64===n?m(t>>16&255):64===r?m(t>>16&255,t>>8&255):m(t>>16&255,t>>8&255,255&t);return o},O=i?e=>atob(b(e)):c?e=>Buffer.from(e,"base64").toString("binary"):L,T=c?e=>w(Buffer.from(e,"base64")):e=>w(O(e),e=>e.charCodeAt(0)),D=e=>T(I(e)),R=c?e=>Buffer.from(e,"base64").toString("utf8"):a?e=>a.decode(T(e)):e=>k(O(e)),I=e=>b(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),$=e=>R(I(e)),j=e=>{if("string"!==typeof e)return!1;const t=e.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Z=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),J=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,Z(t));e("fromBase64",(function(){return $(this)})),e("toBase64",(function(e){return U(this,e)})),e("toBase64URI",(function(){return U(this,!0)})),e("toBase64URL",(function(){return U(this,!0)})),e("toUint8Array",(function(){return D(this)}))},V=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Z(t));e("toBase64",(function(e){return v(this,e)})),e("toBase64URI",(function(){return v(this,!0)})),e("toBase64URL",(function(){return v(this,!0)}))},W=()=>{J(),V()},_={version:r,VERSION:o,atob:O,atobPolyfill:L,btoa:A,btoaPolyfill:y,fromBase64:$,toBase64:U,encode:U,encodeURI:E,encodeURL:E,utob:x,btou:k,decode:$,isValid:j,fromUint8Array:v,toUint8Array:D,extendString:J,extendUint8Array:V,extendBuiltins:W}},f9ab:function(e,t,n){}}]);