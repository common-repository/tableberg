(function(x,J){typeof exports=="object"&&typeof module<"u"?J(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],J):(x=typeof globalThis<"u"?globalThis:x||self,J(x.React,x.ReactDOM))})(this,function(x,J){"use strict";function Pe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ne={exports:{}},xt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=x,mr=Symbol.for("react.element"),pr=Symbol.for("react.fragment"),vr=Object.prototype.hasOwnProperty,br=dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hr={key:!0,ref:!0,__self:!0,__source:!0};function Ie(t,e,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vr.call(e,r)&&!hr.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:mr,type:t,key:i,ref:o,props:a,_owner:br.current}}xt.Fragment=pr,xt.jsx=Ie,xt.jsxs=Ie,Ne.exports=xt;var f=Ne.exports,gr={};(function(t){(function(){var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function n(s){return a(o(s),arguments)}function r(s,l){return n.apply(null,[s].concat(l||[]))}function a(s,l){var u=1,d=s.length,c,g="",y,k,v,E,P,A,S,m;for(y=0;y<d;y++)if(typeof s[y]=="string")g+=s[y];else if(typeof s[y]=="object"){if(v=s[y],v.keys)for(c=l[u],k=0;k<v.keys.length;k++){if(c==null)throw new Error(n('[sprintf] Cannot access property "%s" of undefined value "%s"',v.keys[k],v.keys[k-1]));c=c[v.keys[k]]}else v.param_no?c=l[v.param_no]:c=l[u++];if(e.not_type.test(v.type)&&e.not_primitive.test(v.type)&&c instanceof Function&&(c=c()),e.numeric_arg.test(v.type)&&typeof c!="number"&&isNaN(c))throw new TypeError(n("[sprintf] expecting number but found %T",c));switch(e.number.test(v.type)&&(S=c>=0),v.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,v.width?parseInt(v.width):0);break;case"e":c=v.precision?parseFloat(c).toExponential(v.precision):parseFloat(c).toExponential();break;case"f":c=v.precision?parseFloat(c).toFixed(v.precision):parseFloat(c);break;case"g":c=v.precision?String(Number(c.toPrecision(v.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=v.precision?c.substring(0,v.precision):c;break;case"t":c=String(!!c),c=v.precision?c.substring(0,v.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=v.precision?c.substring(0,v.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=v.precision?c.substring(0,v.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase();break}e.json.test(v.type)?g+=c:(e.number.test(v.type)&&(!S||v.sign)?(m=S?"+":"-",c=c.toString().replace(e.sign,"")):m="",P=v.pad_char?v.pad_char==="0"?"0":v.pad_char.charAt(1):" ",A=v.width-(m+c).length,E=v.width&&A>0?P.repeat(A):"",g+=v.align?m+c+E:P==="0"?m+E+c:E+m+c)}return g}var i=Object.create(null);function o(s){if(i[s])return i[s];for(var l=s,u,d=[],c=0;l;){if((u=e.text.exec(l))!==null)d.push(u[0]);else if((u=e.modulo.exec(l))!==null)d.push("%");else if((u=e.placeholder.exec(l))!==null){if(u[2]){c|=1;var g=[],y=u[2],k=[];if((k=e.key.exec(y))!==null)for(g.push(k[1]);(y=y.substring(k[0].length))!=="";)if((k=e.key_access.exec(y))!==null)g.push(k[1]);else if((k=e.index_access.exec(y))!==null)g.push(k[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");u[2]=g}else c|=2;if(c===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");d.push({placeholder:u[0],param_no:u[1],keys:u[2],sign:u[3],pad_char:u[4],align:u[5],width:u[6],precision:u[7],type:u[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(u[0].length)}return i[s]=d}t.sprintf=n,t.vsprintf=r,typeof window<"u"&&(window.sprintf=n,window.vsprintf=r)})()})(gr);var Gt,Le,st,Me;Gt={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},Le=["(","?"],st={")":["("],":":["?","?:"]},Me=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;function yr(t){for(var e=[],n=[],r,a,i,o;r=t.match(Me);){for(a=r[0],i=t.substr(0,r.index).trim(),i&&e.push(i);o=n.pop();){if(st[a]){if(st[a][0]===o){a=st[a][1]||a;break}}else if(Le.indexOf(o)>=0||Gt[o]<Gt[a]){n.push(o);break}e.push(o)}st[a]||n.push(a),t=t.substr(r.index+a.length)}return t=t.trim(),t&&e.push(t),e.concat(n.reverse())}var xr={"!":function(t){return!t},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"+":function(t,e){return t+e},"-":function(t,e){return t-e},"<":function(t,e){return t<e},"<=":function(t,e){return t<=e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"==":function(t,e){return t===e},"!=":function(t,e){return t!==e},"&&":function(t,e){return t&&e},"||":function(t,e){return t||e},"?:":function(t,e,n){if(t)throw e;return n}};function wr(t,e){var n=[],r,a,i,o,s,l;for(r=0;r<t.length;r++){if(s=t[r],o=xr[s],o){for(a=o.length,i=Array(a);a--;)i[a]=n.pop();try{l=o.apply(null,i)}catch(u){return u}}else e.hasOwnProperty(s)?l=e[s]:l=+s;n.push(l)}return n[0]}function kr(t){var e=yr(t);return function(n){return wr(e,n)}}function Cr(t){var e=kr(t);return function(n){return+e({n})}}var Re={contextDelimiter:"",onMissingKey:null};function Ar(t){var e,n,r;for(e=t.split(";"),n=0;n<e.length;n++)if(r=e[n].trim(),r.indexOf("plural=")===0)return r.substr(7)}function Xt(t,e){var n;this.data=t,this.pluralForms={},this.options={};for(n in Re)this.options[n]=e!==void 0&&n in e?e[n]:Re[n]}Xt.prototype.getPluralForm=function(t,e){var n=this.pluralForms[t],r,a,i;return n||(r=this.data[t][""],i=r["Plural-Forms"]||r["plural-forms"]||r.plural_forms,typeof i!="function"&&(a=Ar(r["Plural-Forms"]||r["plural-forms"]||r.plural_forms),i=Cr(a)),n=this.pluralForms[t]=i),n(e)},Xt.prototype.dcnpgettext=function(t,e,n,r,a){var i,o,s;return a===void 0?i=0:i=this.getPluralForm(t,a),o=n,e&&(o=e+this.options.contextDelimiter+n),s=this.data[t][o],s&&s[i]?s[i]:(this.options.onMissingKey&&this.options.onMissingKey(n,t),i===0?n:r)};const Fe={"":{plural_forms(t){return t===1?0:1}}},Er=/^i18n\.(n?gettext|has_translation)(_|$)/,Sr=(t,e,n)=>{const r=new Xt({}),a=new Set,i=()=>{a.forEach(m=>m())},o=m=>(a.add(m),()=>a.delete(m)),s=(m="default")=>r.data[m],l=(m,h="default")=>{var w;r.data[h]={...r.data[h],...m},r.data[h][""]={...Fe[""],...(w=r.data[h])==null?void 0:w[""]},delete r.pluralForms[h]},u=(m,h)=>{l(m,h),i()},d=(m,h="default")=>{var w;r.data[h]={...r.data[h],...m,"":{...Fe[""],...(w=r.data[h])==null?void 0:w[""],...m==null?void 0:m[""]}},delete r.pluralForms[h],i()},c=(m,h)=>{r.data={},r.pluralForms={},u(m,h)},g=(m="default",h,w,j,N)=>(r.data[m]||l(void 0,m),r.dcnpgettext(m,h,w,j,N)),y=(m="default")=>m,k=(m,h)=>{let w=g(h,void 0,m);return n?(w=n.applyFilters("i18n.gettext",w,m,h),n.applyFilters("i18n.gettext_"+y(h),w,m,h)):w},v=(m,h,w)=>{let j=g(w,h,m);return n?(j=n.applyFilters("i18n.gettext_with_context",j,m,h,w),n.applyFilters("i18n.gettext_with_context_"+y(w),j,m,h,w)):j},E=(m,h,w,j)=>{let N=g(j,void 0,m,h,w);return n?(N=n.applyFilters("i18n.ngettext",N,m,h,w,j),n.applyFilters("i18n.ngettext_"+y(j),N,m,h,w,j)):N},P=(m,h,w,j,N)=>{let M=g(N,j,m,h,w);return n?(M=n.applyFilters("i18n.ngettext_with_context",M,m,h,w,j,N),n.applyFilters("i18n.ngettext_with_context_"+y(N),M,m,h,w,j,N)):M},A=()=>v("ltr","text direction")==="rtl",S=(m,h,w)=>{var M,Zt;const j=h?h+""+m:m;let N=!!((Zt=(M=r.data)==null?void 0:M[w??"default"])!=null&&Zt[j]);return n&&(N=n.applyFilters("i18n.has_translation",N,m,h,w),N=n.applyFilters("i18n.has_translation_"+y(w),N,m,h,w)),N};if(t&&u(t,e),n){const m=h=>{Er.test(h)&&i()};n.addAction("hookAdded","core/i18n",m),n.addAction("hookRemoved","core/i18n",m)}return{getLocaleData:s,setLocaleData:u,addLocaleData:d,resetLocaleData:c,subscribe:o,__:k,_x:v,_n:E,_nx:P,isRTL:A,hasTranslation:S}};function He(t){return typeof t!="string"||t===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function Kt(t){return typeof t!="string"||t===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function De(t,e){return function(r,a,i,o=10){const s=t[e];if(!Kt(r)||!He(a))return;if(typeof i!="function"){console.error("The hook callback must be a function.");return}if(typeof o!="number"){console.error("If specified, the hook priority must be a number.");return}const l={callback:i,priority:o,namespace:a};if(s[r]){const u=s[r].handlers;let d;for(d=u.length;d>0&&!(o>=u[d-1].priority);d--);d===u.length?u[d]=l:u.splice(d,0,l),s.__current.forEach(c=>{c.name===r&&c.currentIndex>=d&&c.currentIndex++})}else s[r]={handlers:[l],runs:0};r!=="hookAdded"&&t.doAction("hookAdded",r,a,i,o)}}function wt(t,e,n=!1){return function(a,i){const o=t[e];if(!Kt(a)||!n&&!He(i))return;if(!o[a])return 0;let s=0;if(n)s=o[a].handlers.length,o[a]={runs:o[a].runs,handlers:[]};else{const l=o[a].handlers;for(let u=l.length-1;u>=0;u--)l[u].namespace===i&&(l.splice(u,1),s++,o.__current.forEach(d=>{d.name===a&&d.currentIndex>=u&&d.currentIndex--}))}return a!=="hookRemoved"&&t.doAction("hookRemoved",a,i),s}}function ze(t,e){return function(r,a){const i=t[e];return typeof a<"u"?r in i&&i[r].handlers.some(o=>o.namespace===a):r in i}}function Ve(t,e,n=!1){return function(a,...i){const o=t[e];o[a]||(o[a]={handlers:[],runs:0}),o[a].runs++;const s=o[a].handlers;if(!s||!s.length)return n?i[0]:void 0;const l={name:a,currentIndex:0};for(o.__current.push(l);l.currentIndex<s.length;){const d=s[l.currentIndex].callback.apply(null,i);n&&(i[0]=d),l.currentIndex++}if(o.__current.pop(),n)return i[0]}}function Ue(t,e){return function(){var i;var r;const a=t[e];return(r=(i=a.__current[a.__current.length-1])==null?void 0:i.name)!==null&&r!==void 0?r:null}}function $e(t,e){return function(r){const a=t[e];return typeof r>"u"?typeof a.__current[0]<"u":a.__current[0]?r===a.__current[0].name:!1}}function Be(t,e){return function(r){const a=t[e];if(Kt(r))return a[r]&&a[r].runs?a[r].runs:0}}class Or{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=De(this,"actions"),this.addFilter=De(this,"filters"),this.removeAction=wt(this,"actions"),this.removeFilter=wt(this,"filters"),this.hasAction=ze(this,"actions"),this.hasFilter=ze(this,"filters"),this.removeAllActions=wt(this,"actions",!0),this.removeAllFilters=wt(this,"filters",!0),this.doAction=Ve(this,"actions"),this.applyFilters=Ve(this,"filters",!0),this.currentAction=Ue(this,"actions"),this.currentFilter=Ue(this,"filters"),this.doingAction=$e(this,"actions"),this.doingFilter=$e(this,"filters"),this.didAction=Be(this,"actions"),this.didFilter=Be(this,"filters")}}function _r(){return new Or}const jr=_r(),I=Sr(void 0,void 0,jr);I.getLocaleData.bind(I),I.setLocaleData.bind(I),I.resetLocaleData.bind(I),I.subscribe.bind(I);const Q=I.__.bind(I);I._x.bind(I),I._n.bind(I),I._nx.bind(I),I.isRTL.bind(I),I.hasTranslation.bind(I);function Ye({children:t,classNames:e=[]}){return f.jsx("div",{className:["right-container-item",...e].join(" "),children:t})}function We(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?We(Object(n),!0).forEach(function(r){L(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}function Tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ze(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Pr(t,e,n){return e&&Ze(t.prototype,e),n&&Ze(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qt(t,e){return Ir(t)||Mr(t,e)||Ge(t,e)||Fr()}function lt(t){return Nr(t)||Lr(t)||Ge(t)||Rr()}function Nr(t){if(Array.isArray(t))return Jt(t)}function Ir(t){if(Array.isArray(t))return t}function Lr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ge(t,e){if(t){if(typeof t=="string")return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}}function Jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xe=function(){},Qt={},Ke={},qe=null,Je={mark:Xe,measure:Xe};try{typeof window<"u"&&(Qt=window),typeof document<"u"&&(Ke=document),typeof MutationObserver<"u"&&(qe=MutationObserver),typeof performance<"u"&&(Je=performance)}catch{}var Hr=Qt.navigator||{},Qe=Hr.userAgent,tn=Qe===void 0?"":Qe,$=Qt,O=Ke,en=qe,Ct=Je;$.document;var D=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",nn=~tn.indexOf("MSIE")||~tn.indexOf("Trident/"),At,Et,St,Ot,_t,z="___FONT_AWESOME___",te=16,rn="fa",an="svg-inline--fa",G="data-fa-i2svg",ee="data-fa-pseudo-element",Dr="data-fa-pseudo-element-pending",ne="data-prefix",re="data-icon",on="fontawesome-i2svg",zr="async",Vr=["HTML","HEAD","STYLE","SCRIPT"],sn=function(){try{return!0}catch{return!1}}(),_="classic",T="sharp",ae=[_,T];function ct(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[_]}})}var ft=ct((At={},L(At,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),L(At,T,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),At)),ut=ct((Et={},L(Et,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(Et,T,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Et)),dt=ct((St={},L(St,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(St,T,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),St)),Ur=ct((Ot={},L(Ot,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(Ot,T,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ot)),$r=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ln="fa-layers-text",Br=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yr=ct((_t={},L(_t,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(_t,T,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_t)),cn=[1,2,3,4,5,6,7,8,9,10],Wr=cn.concat([11,12,13,14,15,16,17,18,19,20]),Zr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ut[_]).map(mt.add.bind(mt)),Object.keys(ut[T]).map(mt.add.bind(mt));var Gr=[].concat(ae,lt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(cn.map(function(t){return"".concat(t,"x")})).concat(Wr.map(function(t){return"w-".concat(t)})),pt=$.FontAwesomeConfig||{};function Xr(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var qr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qr.forEach(function(t){var e=qt(t,2),n=e[0],r=e[1],a=Kr(Xr(n));a!=null&&(pt[r]=a)})}var fn={styleDefault:"solid",familyDefault:"classic",cssPrefix:rn,replacementClass:an,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pt.familyPrefix&&(pt.cssPrefix=pt.familyPrefix);var tt=p(p({},fn),pt);tt.autoReplaceSvg||(tt.observeMutations=!1);var b={};Object.keys(fn).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(n){tt[t]=n,vt.forEach(function(r){return r(b)})},get:function(){return tt[t]}})}),Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){tt.cssPrefix=e,vt.forEach(function(n){return n(b)})},get:function(){return tt.cssPrefix}}),$.FontAwesomeConfig=b;var vt=[];function Jr(t){return vt.push(t),function(){vt.splice(vt.indexOf(t),1)}}var B=te,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qr(t){if(!(!t||!D)){var e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(e,r),t}}var ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){for(var t=12,e="";t-- >0;)e+=ta[Math.random()*62|0];return e}function et(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ie(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function un(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(un(t[n]),'" ')},"").trim()}function jt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function oe(t){return t.size!==H.size||t.x!==H.x||t.y!==H.y||t.rotate!==H.rotate||t.flipX||t.flipY}function na(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function ra(t){var e=t.transform,n=t.width,r=n===void 0?te:n,a=t.height,i=a===void 0?te:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&nn?l+="translate(".concat(e.x/B-r/2,"em, ").concat(e.y/B-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):l+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),l+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function dn(){var t=rn,e=an,n=b.cssPrefix,r=b.replacementClass,a=aa;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mn=!1;function se(){b.autoAddCss&&!mn&&(Qr(dn()),mn=!0)}var ia={mixout:function(){return{dom:{css:dn,insertCss:se}}},hooks:function(){return{beforeDOMElementCreation:function(){se()},beforeI2svg:function(){se()}}}},V=$||{};V[z]||(V[z]={}),V[z].styles||(V[z].styles={}),V[z].hooks||(V[z].hooks={}),V[z].shims||(V[z].shims=[]);var F=V[z],pn=[],oa=function t(){O.removeEventListener("DOMContentLoaded",t),Tt=1,pn.map(function(e){return e()})},Tt=!1;D&&(Tt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Tt||O.addEventListener("DOMContentLoaded",oa));function sa(t){D&&(Tt?setTimeout(t,0):pn.push(t))}function ht(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?un(t):"<".concat(e," ").concat(ea(r),">").concat(i.map(ht).join(""),"</").concat(e,">")}function vn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var la=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},le=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?la(n,a):n,l,u,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,e[u],u,e);return d};function ca(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function ce(t){var e=ca(t);return e.length===1?e[0].toString(16):null}function fa(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function bn(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function fe(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=bn(e);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(t,bn(e)):F.styles[t]=p(p({},F.styles[t]||{}),i),t==="fas"&&fe("fa",e)}var Pt,Nt,It,nt=F.styles,ua=F.shims,da=(Pt={},L(Pt,_,Object.values(dt[_])),L(Pt,T,Object.values(dt[T])),Pt),ue=null,hn={},gn={},yn={},xn={},wn={},ma=(Nt={},L(Nt,_,Object.keys(ft[_])),L(Nt,T,Object.keys(ft[T])),Nt);function pa(t){return~Gr.indexOf(t)}function va(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!pa(a)?a:null}var kn=function(){var e=function(i){return le(nt,function(o,s,l){return o[l]=le(s,i,{}),o},{})};hn=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),gn=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),wn=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in nt||b.autoFetchSvg,r=le(ua,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});yn=r.names,xn=r.unicodes,ue=Lt(b.styleDefault,{family:b.familyDefault})};Jr(function(t){ue=Lt(t.styleDefault,{family:b.familyDefault})}),kn();function de(t,e){return(hn[t]||{})[e]}function ba(t,e){return(gn[t]||{})[e]}function K(t,e){return(wn[t]||{})[e]}function Cn(t){return yn[t]||{prefix:null,iconName:null}}function ha(t){var e=xn[t],n=de("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return ue}var me=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?_:n,a=ft[r][t],i=ut[r][t]||ut[r][a],o=t in F.styles?t:null;return i||o||null}var An=(It={},L(It,_,Object.keys(dt[_])),L(It,T,Object.keys(dt[T])),It);function Mt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},L(e,_,"".concat(b.cssPrefix,"-").concat(_)),L(e,T,"".concat(b.cssPrefix,"-").concat(T)),e),o=null,s=_;(t.includes(i[_])||t.some(function(u){return An[_].includes(u)}))&&(s=_),(t.includes(i[T])||t.some(function(u){return An[T].includes(u)}))&&(s=T);var l=t.reduce(function(u,d){var c=va(b.cssPrefix,d);if(nt[d]?(d=da[s].includes(d)?Ur[s][d]:d,o=d,u.prefix=d):ma[s].indexOf(d)>-1?(o=d,u.prefix=Lt(d,{family:s})):c?u.iconName=c:d!==b.replacementClass&&d!==i[_]&&d!==i[T]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var g=o==="fa"?Cn(u.iconName):{},y=K(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!nt.far&&nt.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},me());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===T&&(nt.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Y()||"fas"),l}var ga=function(){function t(){Tr(this,t),this.definitions={}}return Pr(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=p(p({},n.definitions[s]||{}),o[s]),fe(s,o[s]);var l=dt[_][s];l&&fe(l,o[s]),kn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(n[s][c]=u)}),n[s][l]=u}),n}}]),t}(),En=[],rt={},at={},ya=Object.keys(at);function xa(t,e){var n=e.mixoutsTo;return En=t,rt={},Object.keys(at).forEach(function(r){ya.indexOf(r)===-1&&delete at[r]}),En.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),kt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){rt[o]||(rt[o]=[]),rt[o].push(i[o])})}r.provides&&r.provides(at)}),n}function pe(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=rt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=rt[t]||[];a.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,e):void 0}function ve(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Y();if(e)return e=K(n,e)||e,vn(Sn.definitions,n,e)||vn(F.styles,n,e)}var Sn=new ga,wa=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,q("noAuto")},ka={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(q("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,sa(function(){Aa({autoReplaceSvgRoot:n}),q("watch",e)})}},Ca={icon:function(e){if(e===null)return null;if(kt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Lt(e[0]);return{prefix:r,iconName:K(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match($r))){var a=Mt(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Y(),iconName:K(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Y();return{prefix:i,iconName:K(i,e)||e}}}},R={noAuto:wa,config:b,dom:ka,parse:Ca,library:Sn,findIconDefinition:ve,toHtml:ht},Aa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?O:n;(Object.keys(F.styles).length>0||b.autoFetchSvg)&&D&&b.autoReplaceSvg&&R.dom.i2svg({node:r})};function Rt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ht(r)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var r=O.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ea(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(oe(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=jt(p(p({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Sa(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:o}),children:r}]}]}function be(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,d=t.titleId,c=t.extra,g=t.watchable,y=g===void 0?!1:g,k=r.found?r:n,v=k.width,E=k.height,P=a==="fak",A=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(M){return c.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(c.classes).join(" "),S={children:[],attributes:p(p({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(E)})},m=P&&!~c.classes.indexOf("fa-fw")?{width:"".concat(v/E*16*.0625,"em")}:{};y&&(S.attributes[G]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||bt())},children:[l]}),delete S.attributes.title);var h=p(p({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:p(p({},m),c.styles)}),w=r.found&&n.found?U("generateAbstractMask",h)||{children:[],attributes:{}}:U("generateAbstractIcon",h)||{children:[],attributes:{}},j=w.children,N=w.attributes;return h.children=j,h.attributes=N,s?Sa(h):Ea(h)}function On(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=p(p(p({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[G]="");var d=p({},o.styles);oe(a)&&(d.transform=ra({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var c=jt(d);c.length>0&&(u.style=c);var g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Oa(t){var e=t.content,n=t.title,r=t.extra,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=jt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var he=F.styles;function ge(t){var e=t[0],n=t[1],r=t.slice(4),a=qt(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var _a={found:!1,width:512,height:512};function ja(t,e){!sn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ye(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=Y()),new Promise(function(r,a){if(U("missingIconAbstract"),n==="fa"){var i=Cn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&he[e]&&he[e][t]){var o=he[e][t];return r(ge(o))}ja(t,e),r(p(p({},_a),{},{icon:b.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var _n=function(){},xe=b.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:_n,measure:_n},gt='FA "6.5.1"',Ta=function(e){return xe.mark("".concat(gt," ").concat(e," begins")),function(){return jn(e)}},jn=function(e){xe.mark("".concat(gt," ").concat(e," ends")),xe.measure("".concat(gt," ").concat(e),"".concat(gt," ").concat(e," begins"),"".concat(gt," ").concat(e," ends"))},we={begin:Ta,end:jn},Ft=function(){};function Tn(t){var e=t.getAttribute?t.getAttribute(G):null;return typeof e=="string"}function Pa(t){var e=t.getAttribute?t.getAttribute(ne):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function Na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Ia(){if(b.autoReplaceSvg===!0)return Ht.replace;var t=Ht[b.autoReplaceSvg];return t||Ht.replace}function La(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function Ma(t){return O.createElement(t)}function Pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?La:Ma:n;if(typeof t=="string")return O.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Pn(o,{ceFn:r}))}),a}function Ra(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ht={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Pn(a),n)}),n.getAttribute(G)===null&&b.keepOriginalSource){var r=O.createComment(Ra(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ie(n).indexOf(b.replacementClass))return Ht.replace(e);var a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ht(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function Nn(t){t()}function In(t,e){var n=typeof e=="function"?e:Ft;if(t.length===0)n();else{var r=Nn;b.mutateApproach===zr&&(r=$.requestAnimationFrame||Nn),r(function(){var a=Ia(),i=we.begin("mutate");t.map(a),i(),n()})}}var ke=!1;function Ln(){ke=!0}function Ce(){ke=!1}var Dt=null;function Mn(t){if(en&&b.observeMutations){var e=t.treeCallback,n=e===void 0?Ft:e,r=t.nodeCallback,a=r===void 0?Ft:r,i=t.pseudoElementsCallback,o=i===void 0?Ft:i,s=t.observeMutationsRoot,l=s===void 0?O:s;Dt=new en(function(u){if(!ke){var d=Y();et(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Tn(c.addedNodes[0])&&(b.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&b.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Tn(c.target)&&~Zr.indexOf(c.attributeName))if(c.attributeName==="class"&&Pa(c.target)){var g=Mt(ie(c.target)),y=g.prefix,k=g.iconName;c.target.setAttribute(ne,y||d),k&&c.target.setAttribute(re,k)}else Na(c.target)&&a(c.target)})}}),D&&Dt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fa(){Dt&&Dt.disconnect()}function Ha(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Da(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Mt(ie(t));return a.prefix||(a.prefix=Y()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ba(a.prefix,t.innerText)||de(a.prefix,ce(t.innerText))),!a.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function za(t){var e=et(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||bt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Va(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Da(t),r=n.iconName,a=n.prefix,i=n.rest,o=za(t),s=pe("parseNodeAttributes",{},t),l=e.styleParser?Ha(t):[];return p({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ua=F.styles;function Fn(t){var e=b.autoReplaceSvg==="nest"?Rn(t,{styleParser:!1}):Rn(t);return~e.extra.classes.indexOf(ln)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var W=new Set;ae.map(function(t){W.add("fa-".concat(t))}),Object.keys(ft[_]).map(W.add.bind(W)),Object.keys(ft[T]).map(W.add.bind(W)),W=lt(W);function Hn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=O.documentElement.classList,r=function(c){return n.add("".concat(on,"-").concat(c))},a=function(c){return n.remove("".concat(on,"-").concat(c))},i=b.autoFetchSvg?W:ae.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");var o=[".".concat(ln,":not([").concat(G,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=we.begin("onTree"),u=s.reduce(function(d,c){try{var g=Fn(c);g&&d.push(g)}catch(y){sn||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(g){In(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(g){l(),c(g)})})}function $a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fn(t).then(function(n){n&&In([n],e)})}function Ba(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ve(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ve(a||{})),t(r,p(p({},n),{},{mask:a}))}}var Ya=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?H:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,c=n.title,g=c===void 0?null:c,y=n.titleId,k=y===void 0?null:y,v=n.classes,E=v===void 0?[]:v,P=n.attributes,A=P===void 0?{}:P,S=n.styles,m=S===void 0?{}:S;if(e){var h=e.prefix,w=e.iconName,j=e.icon;return Rt(p({type:"icon"},e),function(){return q("beforeDOMElementCreation",{iconDefinition:e,params:n}),b.autoA11y&&(g?A["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(k||bt()):(A["aria-hidden"]="true",A.focusable="false")),be({icons:{main:ge(j),mask:l?ge(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:w,transform:p(p({},H),a),symbol:o,title:g,maskId:d,titleId:k,extra:{attributes:A,styles:m,classes:E}})})}},Wa={mixout:function(){return{icon:Ba(Ya)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hn,n.nodeCallback=$a,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?O:r,i=n.callback,o=i===void 0?function(){}:i;return Hn(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,c=r.maskId,g=r.extra;return new Promise(function(y,k){Promise.all([ye(a,s),d.iconName?ye(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var E=qt(v,2),P=E[0],A=E[1];y([n,be({icons:{main:P,mask:A},prefix:s,iconName:a,transform:l,symbol:u,maskId:c,title:i,titleId:o,extra:g,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=jt(s);l.length>0&&(a.style=l);var u;return oe(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Za={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(lt(i)).join(" ")},children:o}]})}}}},Ga={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return Rt({type:"counter",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:r}),Oa({content:n.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(lt(s))}})})}}}},Xa={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?H:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,c=d===void 0?{}:d,g=r.styles,y=g===void 0?{}:g;return Rt({type:"text",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:r}),On({content:n,transform:p(p({},H),i),title:s,extra:{attributes:c,styles:y,classes:["".concat(b.cssPrefix,"-layers-text")].concat(lt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(nn){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return b.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,On({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ka=new RegExp('"',"ug"),Dn=[1105920,1112319];function qa(t){var e=t.replace(Ka,""),n=fa(e,0),r=n>=Dn[0]&&n<=Dn[1],a=e.length===2?e[0]===e[1]:!1;return{value:ce(a?e[0]:e),isSecondary:r||a}}function zn(t,e){var n="".concat(Dr).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=et(t.children),o=i.filter(function(j){return j.getAttribute(ee)===e})[0],s=$.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Br),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var c=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?T:_,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ut[g][l[2].toLowerCase()]:Yr[g][u],k=qa(c),v=k.value,E=k.isSecondary,P=l[0].startsWith("FontAwesome"),A=de(y,v),S=A;if(P){var m=ha(v);m.iconName&&m.prefix&&(A=m.iconName,y=m.prefix)}if(A&&!E&&(!o||o.getAttribute(ne)!==y||o.getAttribute(re)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);var h=Va(),w=h.extra;w.attributes[ee]=e,ye(A,y).then(function(j){var N=be(p(p({},h),{},{icons:{main:j,mask:me()},prefix:y,iconName:S,extra:w,watchable:!0})),M=O.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=N.map(function(Zt){return ht(Zt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ja(t){return Promise.all([zn(t,"::before"),zn(t,"::after")])}function Qa(t){return t.parentNode!==document.head&&!~Vr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ee)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vn(t){if(D)return new Promise(function(e,n){var r=et(t.querySelectorAll("*")).filter(Qa).map(Ja),a=we.begin("searchPseudoElements");Ln(),Promise.all(r).then(function(){a(),Ce(),e()}).catch(function(){a(),Ce(),n()})})}var ti={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?O:r;b.searchPseudoElements&&Vn(a)}}},Un=!1,ei={mixout:function(){return{dom:{unwatch:function(){Ln(),Un=!0}}}},hooks:function(){return{bootstrap:function(){Mn(pe("mutationObserverCallbacks",{}))},noAuto:function(){Fa()},watch:function(n){var r=n.observeMutationsRoot;Un?Ce():Mn(pe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$n=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ni={mixout:function(){return{parse:{transform:function(n){return $n(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$n(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:c,path:g};return{tag:"g",attributes:p({},y.outer),children:[{tag:"g",attributes:p({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:p(p({},r.icon.attributes),y.path)}]}]}}}},Ae={x:0,y:0,width:"100%",height:"100%"};function Bn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ri(t){return t.tag==="g"?t.children:[t]}var ai={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mt(a.split(" ").map(function(o){return o.trim()})):me();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,c=o.width,g=o.icon,y=na({transform:l,containerWidth:c,iconWidth:u}),k={tag:"rect",attributes:p(p({},Ae),{},{fill:"white"})},v=d.children?{children:d.children.map(Bn)}:{},E={tag:"g",attributes:p({},y.inner),children:[Bn(p({tag:d.tag,attributes:p(p({},d.attributes),y.path)},v))]},P={tag:"g",attributes:p({},y.outer),children:[E]},A="mask-".concat(s||bt()),S="clip-".concat(s||bt()),m={tag:"mask",attributes:p(p({},Ae),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,P]},h={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:ri(g)},m]};return r.push(h,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(A,")")},Ae)}),{children:r,attributes:a}}}},ii={provides:function(e){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:p(p({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=p(p({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:p(p({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:p(p({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:p(p({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oi={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},si=[ia,Wa,Za,Ga,Xa,ti,ei,ni,ai,ii,oi];xa(si,{mixoutsTo:R}),R.noAuto,R.config,R.library,R.dom;var Ee=R.parse;R.findIconDefinition,R.toHtml;var li=R.icon;R.layer,R.text,R.counter;var Yn={exports:{}},ci="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fi=ci,ui=fi;function Wn(){}function Zn(){}Zn.resetWarningCache=Wn;var di=function(){function t(r,a,i,o,s,l){if(l!==ui){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Zn,resetWarningCache:Wn};return n.PropTypes=n,n};Yn.exports=di();var mi=Yn.exports;const C=Pe(mi);function Gn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gn(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zt(t){"@babel/helpers - typeof";return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zt(t)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pi(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function vi(t,e){if(t==null)return{};var n=pi(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Se(t){return bi(t)||hi(t)||gi(t)||yi()}function bi(t){if(Array.isArray(t))return Oe(t)}function hi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gi(t,e){if(t){if(typeof t=="string")return Oe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(t,e)}}function Oe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,d=t.spinReverse,c=t.pulse,g=t.fixedWidth,y=t.inverse,k=t.border,v=t.listItem,E=t.flip,P=t.size,A=t.rotation,S=t.pull,m=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":g,"fa-inverse":y,"fa-border":k,"fa-li":v,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},it(e,"fa-".concat(P),typeof P<"u"&&P!==null),it(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),it(e,"fa-pull-".concat(S),typeof S<"u"&&S!==null),it(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(m).map(function(h){return m[h]?h:null}).filter(function(h){return h})}function wi(t){return t=t-0,t===t}function Xn(t){return wi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ki=["style"];function Ci(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ai(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Xn(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[Ci(a)]=i:e[a]=i,e},{})}function Kn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Kn(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=Ai(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Xn(u)]=d}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=vi(n,ki);return a.attrs.style=Z(Z({},a.attrs.style),o),t.apply(void 0,[e.tag,Z(Z({},a.attrs),s)].concat(Se(r)))}var qn=!1;try{qn=!0}catch{}function Ei(){if(!qn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jn(t){if(t&&zt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ee.icon)return Ee.icon(t);if(t===null)return null;if(t&&zt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function _e(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?it({},t,e):{}}var ot=x.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,i=t.className,o=t.title,s=t.titleId,l=t.maskId,u=Jn(n),d=_e("classes",[].concat(Se(xi(t)),Se(i.split(" ")))),c=_e("transform",typeof t.transform=="string"?Ee.transform(t.transform):t.transform),g=_e("mask",Jn(r)),y=li(u,Z(Z(Z(Z({},d),c),g),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!y)return Ei("Could not find icon",u),null;var k=y.abstract,v={ref:e};return Object.keys(t).forEach(function(E){ot.defaultProps.hasOwnProperty(E)||(v[E]=t[E])}),Si(k[0],v)});ot.displayName="FontAwesomeIcon",ot.propTypes={beat:C.bool,border:C.bool,beatFade:C.bool,bounce:C.bool,className:C.string,fade:C.bool,flash:C.bool,mask:C.oneOfType([C.object,C.array,C.string]),maskId:C.string,fixedWidth:C.bool,inverse:C.bool,flip:C.oneOf([!0,!1,"horizontal","vertical","both"]),icon:C.oneOfType([C.object,C.array,C.string]),listItem:C.bool,pull:C.oneOf(["right","left"]),pulse:C.bool,rotation:C.oneOf([0,90,180,270]),shake:C.bool,size:C.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:C.bool,spinPulse:C.bool,spinReverse:C.bool,symbol:C.oneOfType([C.bool,C.string]),title:C.string,titleId:C.string,transform:C.oneOfType([C.string,C.object]),swapOpacity:C.bool},ot.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Si=Kn.bind(null,x.createElement);const Vt={NEGATIVE:"negative",POSITIVE:"positive"};function Qn({title:t,onClickHandler:e=()=>{},status:n=!1,type:r=Vt.NEGATIVE}){const a=()=>{let i="";switch(r){case Vt.NEGATIVE:{i="tableberg-negative-bg";break}case Vt.POSITIVE:{i="tableberg-positive-bg";break}}return i};return f.jsx("div",{onClick:()=>{n&&e()},className:`tableberg-menu-button ${a()}`,"data-enabled":JSON.stringify(n),children:t})}var Oi={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},_i={prefix:"fas",iconName:"right-long",icon:[512,512,["long-arrow-alt-right"],"f30b","M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"]};function ji({from:t,to:e,onCloseHandler:n,onOperationStart:r,reloadDelay:a=5e3}){const i={NOT_STARTED:"notStarted",STARTED:"started",FINISHED:"finished"},o={OK:"ok",ERROR:"error"},s=(A,S=o.OK)=>({type:S,message:A}),[l,u]=x.useState(i.NOT_STARTED),[d,c]=x.useState(a/1e3),[g,y]=x.useState(s("")),k=t>e,v=x.useRef(a),E=()=>{u(i.STARTED),r().then(({message:A})=>{y(s(A,o.OK))}).catch(({message:A})=>{y(s(A,o.ERROR))}).finally(()=>{u(i.FINISHED),P()})},P=()=>{const A=setInterval(()=>{v.current<=0?(window.location.reload(),clearInterval(A)):(v.current=v.current-1e3,c(v.current/1e3))},1e3)};return f.jsx("div",{className:"version-control-popup",children:f.jsxs("div",{className:"modal-container",children:[f.jsxs("div",{className:"rollback-versions",children:[f.jsx("div",{className:`version-id ${k?"tableberg-positive-color":"tableberg-negative-color"}`,children:t}),f.jsx("div",{className:"version-icon","data-in-progress":JSON.stringify(l===i.STARTED),children:f.jsx("div",{className:"version-icon-inner-wrapper",children:f.jsx(ot,{icon:_i})})}),f.jsx("div",{className:`version-id ${k?"tableberg-negative-color":"tableberg-positive-color"}`,children:e})]}),l!==i.STARTED&&f.jsxs("div",{className:"version-content",children:[l===i.NOT_STARTED&&f.jsxs("div",{className:"version-warning",children:[f.jsx("div",{children:Q("Older versions might be unstable. Do it on your own risk and create a backup.","tableberg")}),f.jsxs("div",{className:"version-rollback-button-container",children:[f.jsx(Qn,{type:Vt.POSITIVE,onClickHandler:E,status:!0,title:"Start"}),f.jsx(Qn,{onClickHandler:n,status:!0,title:"Close"})]})]}),l===i.FINISHED&&f.jsxs("div",{className:"operation-finished-wrapper",children:[f.jsx("div",{className:"version-control-response","data-resp-type":g.type,children:g.message}),f.jsx("div",{children:d<=0?`${Q("Reloading page now…","tableberg")}`:`${Q("Reloading page in ","tableberg")} ${d}...`})]})]})]})})}function Ti({children:t,target:e}){return J.createPortal(t,e)}function Pi({currentVersion:t,availableVersions:e,onSelect:n}){const r=x.useMemo(()=>e.filter(a=>a!==t),[e]);return f.jsx("div",{className:"tableberg-header-version-info",children:f.jsxs("select",{value:t,onChange:a=>n(a.target.value),children:[f.jsx("option",{disabled:!0,value:t,children:t}),r.map(a=>f.jsx("option",{value:a,children:a},a))]})})}function tr({pluginVersion:t,allVersions:e,onVersionRollBack:n}){const[r,a]=x.useState(t),[i,o]=x.useState(!1),s=x.useMemo(()=>e.sort().reverse(),[e]),l=d=>{a(d),o(!0)},u=()=>n(r);return f.jsxs("div",{className:"version-control-container",children:[f.jsx(Pi,{availableVersions:s,currentVersion:r,onSelect:l}),i&&f.jsx(Ti,{target:document.body,children:f.jsx(ji,{onCloseHandler:()=>{a(t),o(!1)},from:t,to:r,onOperationStart:u})})]})}const Ni={path:null,title:"no_title",element:null};function Ii(t){const{path:e,title:n,element:r}={...Ni,...t};this.getPath=()=>e,this.getTitle=()=>n,this.getElement=()=>r??f.jsxs("div",{children:["no element defined for route [",this.getPath(),"]"]})}const er=t=>t.map(e=>new Ii(e));function Li({title:t,targetPath:e,onClickHandler:n,isActive:r=!1}){const a=()=>n(e);return f.jsx("div",{"data-active":r,"data-path":e,className:"tableberg-menu-navigation-header-button",tabIndex:0,role:"button",onClick:a,onKeyDown:a,children:t})}function nr({routes:t,currentRoutePath:e,setRoute:n}){const[r,a]=x.useState({});return x.useEffect(()=>{const i={gridTemplateColumns:`repeat(${t.length}, minmax(0,1fr))`};a(i)},[t]),f.jsx("div",{style:r,className:"tableberg-menu-navigation",children:t.map(i=>f.jsx(Li,{title:i.getTitle(),targetPath:i.getPath(),isActive:e===i.getPath(),onClickHandler:n},i.getPath()))})}function Mi({children:t}){return f.jsx("div",{className:"tableberg-box-content-title",children:t})}function Ri({children:t}){return f.jsx("div",{className:"tableberg-box-content-inc",children:t})}const Fi={HORIZONTAL:"horizontal",VERTICAL:"vertical"},je={JUMBO:"jumbo",NORMAL:"normal"},Hi={LEFT:"left",CENTER:"center"};function Di({title:t=null,content:e=null,layout:n=Fi.VERTICAL,size:r=je.NORMAL,alignment:a=Hi.LEFT,children:i}){return f.jsxs("div",{className:"tableberg-box-content","data-layout":n,"data-size":r,"data-alignment":a,children:[f.jsxs("div",{className:"tableberg-box-content-title-inc-wrapper",children:[t&&f.jsx(Mi,{children:t}),e&&f.jsx(Ri,{children:e})]}),i&&f.jsx("div",{className:"tableberg-box-content-footer",children:i})]})}function rr(t){this.name="ContentNotFoundError",this.message=`Content not found for key: [${t}]`}rr.prototype=Object.create(Error.prototype);const zi=t=>tablebergAdminMenuData==null?void 0:tablebergAdminMenuData[t];function Ut(t){const[e,n]=x.useState(null),[r,a]=x.useState(null),[i,o]=x.useState({}),{contentId:s,...l}=t,u=zi(s);return x.useEffect(()=>{if(u){const{title:d,content:c}=u;n(d),a(c),o(l)}else throw new rr(s)},[]),f.jsx(Di,{...i,title:e,content:r,children:t.children})}function Vi({videoId:t,width:e=null,height:n=null}){const[r,a]=x.useState(null),i={width:"100",height:"100"};return x.useEffect(()=>{const o=`https://www.youtube.com/embed/${t}`;a(o)},[]),f.jsx("div",{className:"tableberg-youtube-embed",children:f.jsx("iframe",{width:e||i.width,height:n||i.height,src:r,title:"YouTube video player",allow:"picture-in-picture; web-share; fullscreen"})})}function ar(){this.name="ButtonLinkNoUrlError",this.message="No URL is provided for ButtonLink component."}ar.prototype=Object.create(Error.prototype);const $t={TEXT:"text",DEFAULT:"default",PRIMARY:"primary"};function Bt({title:t,url:e=null,onClickHandler:n=null,type:r=$t.DEFAULT}){x.useEffect(()=>{if(!e&&!n)throw new ar},[]);const a=()=>{window.open(e,"_blank")},i=o=>{n&&typeof n=="function"?n(o):a()};return f.jsx("div",{className:"tableberg-button-link","data-buttonlink-type":r,onClick:i,role:"button",children:t})}function Ui({proStatus:t=!1,children:e,invert:n=!0}){const[r,a]=x.useState(!1);return x.useEffect(()=>{a(n?!t:t)},[]),r&&e}const Te={proBuyUrl:"https://tableberg.com/pricing/",youtubeVideoId:"TKsL_bUVCTU",documentsUrl:"https://tableberg.com/docs/",supportUrl:"https://tableberg.com/contact/"};function Yt({children:t,assetIds:e=[]}){const n=a=>Te==null?void 0:Te[a],r=e.reduce((a,i)=>(a[i]=n(i),a),{});return t(r)}function ir(t){return f.jsx(Yt,{assetIds:["proBuyUrl"],children:({proBuyUrl:e})=>f.jsx(Ui,{invert:!0,children:f.jsx(Ut,{size:je.JUMBO,contentId:"upgrade",...t,children:f.jsx(Bt,{url:e,title:"GET TABLEBERG PRO",type:$t.PRIMARY})})})})}function $i(){return f.jsx(Yt,{assetIds:["youtubeVideoId","documentsUrl","supportUrl","twitterUrl","facebookUrl","youtubeUrl"],children:({youtubeVideoId:t,documentsUrl:e,supportUrl:n,twitterUrl:r,facebookUrl:a,youtubeUrl:i})=>f.jsxs("div",{className:"tableberg-welcome-content",children:[f.jsxs("div",{className:"tableberg-welcome-content__main",children:[f.jsx(Ut,{size:je.JUMBO,contentId:"welcome",children:f.jsx(Vi,{height:315,videoId:t})}),!tablebergAdminMenuData.misc.pro_status&&f.jsx(ir,{})]}),f.jsxs("div",{className:"tableberg-welcome-content__right-sidebar",children:[f.jsx(Ut,{contentId:"documentation",children:f.jsx(Bt,{url:e,title:Q("Visit Documents","tableberg"),type:$t.DEFAULT})}),f.jsx(Ut,{contentId:"support",children:f.jsx(Bt,{url:n,title:Q("Support Forum","tableberg"),type:$t.DEFAULT})})]})]})})}const Bi=f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{width:"24",height:"24",fill:"white"}),f.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM10.8867 13.5671C10.6495 13.5035 10.5087 13.2598 10.5723 13.0226L12.3246 6.48302C12.3881 6.24585 12.6319 6.10511 12.8691 6.16866C13.1062 6.23221 13.247 6.47598 13.1834 6.71315L11.4311 13.2527C11.3676 13.4899 11.1238 13.6306 10.8867 13.5671ZM9.2624 12.9295C9.45766 13.1248 9.77424 13.1248 9.96951 12.9295C10.1648 12.7342 10.1648 12.4176 9.96951 12.2224L7.9686 10.2215C7.77333 10.0262 7.77333 9.70963 7.9686 9.51437L9.96951 7.51346C10.1648 7.3182 10.1648 7.00162 9.96951 6.80635C9.77424 6.61109 9.45766 6.61109 9.2624 6.80635L7.26149 8.80726C6.6757 9.39305 6.6757 10.3428 7.26149 10.9286L9.2624 12.9295ZM13.8853 6.8063C14.0805 6.61104 14.3971 6.61104 14.5924 6.8063L16.5933 8.80721C17.1791 9.393 17.1791 10.3427 16.5933 10.9285L14.5924 12.9294C14.3971 13.1247 14.0805 13.1247 13.8853 12.9294C13.69 12.7342 13.69 12.4176 13.8853 12.2223L15.8862 10.2214C16.0814 10.0262 16.0814 9.70958 15.8862 9.51432L13.8853 7.51341C13.69 7.31815 13.69 7.00157 13.8853 6.8063ZM7.478 15.2625H6.838V17.9465H7.478V16.8845H8.492V17.9465H9.138V15.2625H8.492V16.3205H7.478V15.2625ZM9.50056 15.2625V15.8165H10.2886V17.9465H10.9286V15.8165H11.7106V15.2625H9.50056ZM12.9884 15.2625H12.0724V17.9465H12.7124V16.166L13.3464 17.6965H13.7604L14.3624 16.2482V17.9465H15.0064V15.2625H14.1264L13.5574 16.6342L12.9884 15.2625ZM16.3257 17.3865V15.2625H15.6857V17.9465H17.3397V17.3865H16.3257Z",fill:"#671FEB"})]}),Yi=f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{width:"24",height:"24",fill:"white"}),f.jsx("path",{d:"M8.34675 8C8.15525 8 8 8.15525 8 8.34675C8 8.53826 8.15525 8.69351 8.34675 8.69351H11.1362C11.3277 8.69351 11.483 8.53826 11.483 8.34675C11.483 8.15525 11.3277 8 11.1362 8H8.34675Z",fill:"#671FEB"}),f.jsx("path",{d:"M8 9.73374C8 9.54224 8.15525 9.38699 8.34675 9.38699H11.1362C11.3277 9.38699 11.483 9.54224 11.483 9.73374C11.483 9.92525 11.3277 10.0805 11.1362 10.0805H8.34675C8.15525 10.0805 8 9.92525 8 9.73374Z",fill:"#671FEB"}),f.jsx("path",{d:"M8.34675 10.774C8.15525 10.774 8 10.9292 8 11.1207C8 11.3122 8.15525 11.4675 8.34675 11.4675H11.1362C11.3277 11.4675 11.483 11.3122 11.483 11.1207C11.483 10.9292 11.3277 10.774 11.1362 10.774H8.34675Z",fill:"#671FEB"}),f.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.04375 15.4838C7.95182 15.6493 8.00927 15.8584 8.17377 15.9534C8.25764 16.0018 8.35329 16.0113 8.43981 15.9875H11.0432C11.1297 16.0113 11.2254 16.0018 11.3092 15.9534C11.4388 15.8786 11.502 15.7328 11.478 15.5934C11.4692 15.528 11.4422 15.4683 11.4022 15.4196L10.0467 13.0717C9.98154 12.9589 9.86272 12.8965 9.74114 12.898C9.6198 12.8967 9.50133 12.9592 9.43633 13.0717L8.06292 15.4505C8.05594 15.4613 8.04954 15.4724 8.04375 15.4838ZM8.95647 15.2926L9.7415 13.9329L10.5265 15.2926H8.95647Z",fill:"#671FEB"}),f.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.478 8H16.0487V11.4674H12.478V8ZM13.078 8.6H15.4487V10.8674H13.078V8.6Z",fill:"#671FEB"}),f.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V12.258C16.7171 12.1048 16.3932 12.0178 16.0489 12.0178C14.9502 12.0178 14.0584 12.9038 14.049 14.0002C12.9524 14.0096 12.0665 14.9014 12.0665 16.0001C12.0665 16.3644 12.1638 16.7059 12.3339 17H8C7.44772 17 7 16.5523 7 16V8ZM16.0489 13.0178C16.4931 13.0178 16.8696 13.3074 17 13.7081C17.0317 13.8056 17.0489 13.9097 17.0489 14.0178V15.0001H18.0309C18.5832 15.0001 19.0309 15.4479 19.0309 16.0001C19.0309 16.5524 18.5832 17.0001 18.0309 17.0001H17.0489V17.9823C17.0489 18.5346 16.6012 18.9823 16.0489 18.9823C15.4966 18.9823 15.0489 18.5346 15.0489 17.9823V17.0001H14.0665L14.0491 17C13.5048 16.9908 13.0665 16.5466 13.0665 16.0001C13.0665 15.4479 13.5142 15.0001 14.0665 15.0001H15.0489V14.0178C15.0489 13.4655 15.4966 13.0178 16.0489 13.0178Z",fill:"#671FEB"})]}),Wi=f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{width:"24",height:"24",fill:"white"}),f.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM8 8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8ZM7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13ZM8 16C8 16.5523 7.55228 17 7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16ZM11 7.5C10.7239 7.5 10.5 7.72386 10.5 8C10.5 8.27614 10.7239 8.5 11 8.5H17C17.2761 8.5 17.5 8.27614 17.5 8C17.5 7.72386 17.2761 7.5 17 7.5H11ZM10.5 12C10.5 11.7239 10.7239 11.5 11 11.5H17C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5H11C10.7239 12.5 10.5 12.2761 10.5 12ZM11 15.5C10.7239 15.5 10.5 15.7239 10.5 16C10.5 16.2761 10.7239 16.5 11 16.5H17C17.2761 16.5 17.5 16.2761 17.5 16C17.5 15.7239 17.2761 15.5 17 15.5H11Z",fill:"#671feb"})]}),Zi=f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{width:"24",height:"24",fill:"white"}),f.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM8 9.61388C11.1954 9.04964 12.9452 9.06689 16 9.61388V12.681C12.8757 12.2134 11.125 12.1847 8 12.681V9.61388ZM7.42857 11.7356H4L4 11.7356L6.28572 13.2692L4.00002 14.8027H9.71429V13.055C9.0129 13.105 8.26382 13.1765 7.42857 13.2694V11.7356ZM14.2857 13.0511V14.8028L20 14.8028L17.7143 13.2693L20 11.7358L20 11.7357H16.5714V13.2694C15.7384 13.1741 14.9903 13.1013 14.2857 13.0511Z",fill:"#671FEB"})]}),Gi=f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{width:"24",height:"24",fill:"white"}),f.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM12 5.66844L13.9749 9.95014L18.6574 10.5053L15.1955 13.7067L16.1145 18.3316L12 16.0284L7.88549 18.3316L8.80444 13.7067L5.34259 10.5053L10.025 9.95014L12 5.66844ZM12 8.1066V14.9191L9.29297 16.4386L9.89453 13.4035L7.61328 11.2863L10.6992 10.9269L12 8.1066Z",fill:"#671feb"})]});var or={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)e.call(i,s)&&i[s]&&(o=a(o,s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(or);var Xi=or.exports;const Ki=Pe(Xi),Wt=t=>x.createElement("path",t),yt=x.forwardRef(({className:t,isPressed:e,...n},r)=>{const a={...n,className:Ki(t,{"is-pressed":e})||void 0,"aria-hidden":!0,focusable:!1};return x.createElement("svg",{...a,ref:r})});yt.displayName="SVG";const qi=x.createElement(yt,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},x.createElement(Wt,{d:"M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"})),Ji=x.createElement(yt,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},x.createElement(Wt,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),Qi=x.createElement(yt,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},x.createElement(Wt,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),to=[{name:"core/paragraph",title:"Paragraph",icon:x.createElement(yt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},x.createElement(Wt,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})),isPro:!1},{name:"core/list",title:"List",icon:Qi,isPro:!1,demoUrl:"https://tableberg.com/docs/how-to-add-a-list-to-a-table-in-wordpress/"},{name:"tableberg/button",title:"Button",icon:qi,isPro:!1,demoUrl:"https://tableberg.com/docs/how-to-add-buttons-to-wordpress-tables/"},{name:"tableberg/image",title:"Image",icon:Ji,isPro:!1,demoUrl:"https://tableberg.com/docs/how-to-add-images-to-a-table-in-wordpress/"},{name:"tableberg/styled-list",title:"Styled List",icon:Wi,isPro:!0,image:"styled_list_block_1.png",upsellText:"Elevate your lists with customizable icons as bullets for a polished look.",demoUrl:"https://tableberg.com/docs/how-to-add-styled-lists-in-wordpress-tables/"},{name:"tableberg/ribbon",title:"Ribbon",icon:Zi,isPro:!0,image:"ribbon_block_1.png",upsellText:"Overlay a decorative ribbon on your table, ideal for highlighting special offers or important notices.",demoUrl:"https://tableberg.com/docs/how-to-add-ribbons-to-wordpress-tables/"},{name:"tableberg/html",title:"Custom Html",icon:Bi,isPro:!0,image:"html_block_1.png",upsellText:"Add your own HTML code to create specialized content and integrate custom elements.",demoUrl:"https://tableberg.com/docs/how-to-add-custom-html-to-wordpress-tables/"},{name:"tableberg/icon",title:"Icon",icon:Yi,isPro:!0,image:"icon_block_1.png",upsellText:"Add scalable icons to your tables to support text and enhance user engagement.",demoUrl:"https://tableberg.com/docs/how-to-add-icons-to-wordpress-tables/"},{name:"tableberg/star-rating",title:"Star Rating",icon:Gi,isPro:!0,image:"star_rating_block_1.png",upsellText:"Add customizable star ratings, perfect for reviews and comparison tables.",demoUrl:"https://tableberg.com/docs/how-to-add-star-rating-in-wordpress/"}];function eo({title:t,name:e,iconElement:n,isPro:r,isProPlugin:a,showUpsell:i,demoUrl:o=null}){return f.jsx("div",{className:"tableberg-block-control","data-enabled":JSON.stringify(a?!0:!r),children:f.jsxs("div",{className:"tableberg-block-title",children:[f.jsxs("div",{className:"tableberg-block-title-left-container","data-demo":o!==null,children:[f.jsx("div",{className:"tableberg-title-icon",children:n}),f.jsxs("div",{className:"tableberg-title-text",children:[t,r&&f.jsx("span",{className:"tableberg-pro-block-card-title-suffix",children:"PRO"})]}),o&&f.jsx("div",{className:"tableberg-title-demo",children:f.jsx("a",{href:o,target:"_blank",rel:"noreferrer",className:"tableberg-strip-anchor-styles",children:Q("See Documentation","tableberg")})})]}),r&&!a&&f.jsx("div",{className:"tableberg-block-title-right-container",children:f.jsx("div",{role:"button",className:"tableberg-pro-block-card-info-button",onClick:s=>{s.preventDefault(),i(e)},children:f.jsx(ot,{icon:Oi})})})]})})}function no({info:t,onClose:e}){return f.jsxs("div",{className:"tableberg-upsell-modal",children:[f.jsx("div",{className:"tableberg-upsell-modal-backdrop"}),f.jsx("div",{className:"tableberg-upsell-modal-container",children:f.jsxs("div",{className:"tableberg-upsell-modal-area",children:[f.jsxs("h2",{children:[t.icon," ",t.title]}),f.jsxs("div",{className:"tableberg-upsell-modal-content",children:[f.jsx("img",{src:TABLEBERG_CFG.plugin_url+"includes/Admin/images/upsell/"+t.image,alt:t.title+" Demo"}),f.jsx("p",{children:t.upsellText}),f.jsxs("p",{children:["Limited Time: Use code ",f.jsx("b",{children:"TB10"})," to get a 10% discount."]})]}),f.jsxs("div",{className:"tableberg-upsell-modal-footer",children:[f.jsx("button",{onClick:e,children:"Cancel"}),f.jsx(Yt,{assetIds:["proBuyUrl"],children:({proBuyUrl:n})=>f.jsx("a",{href:n,children:"Buy PRO"})})]})]})})]})}function ro(){const[t,e]=x.useState(null);return f.jsxs("div",{style:{display:"flex",flexFlow:"column",gap:"30px"},children:[f.jsx("div",{className:"tableberg-controls-container controls-container","data-show-info":"false",children:to.map(n=>{const{title:r,name:a,icon:i,isPro:o,demoUrl:s}=n;return f.jsx(eo,{name:a,title:r,iconElement:i,isPro:o,showUpsell:()=>e(n),isProPlugin:tablebergAdminMenuData.misc.pro_status,demoUrl:s},a)})}),!tablebergAdminMenuData.misc.pro_status&&f.jsx(ir,{}),t&&f.jsx(no,{info:t,onClose:()=>e(null)})]})}const sr=[{path:"welcome",title:"Welcome",element:f.jsx($i,{})},{path:"blocks",title:"Blocks",element:f.jsx(ro,{})},{path:"404",title:"404",element:f.jsx("div",{children:"404"})}],lr=er(sr);function ao({currentRoutePath:t,setCurrentRoutePath:e}){x.useEffect(()=>{const o=new URL(window.location.href);o.searchParams.set("route",t),window.history.pushState(null,null,o.href)},[t]);const n=x.useMemo(()=>lr.slice(0,lr.length-1),[]),r=tablebergAdminMenuData==null?void 0:tablebergAdminMenuData.assets.logo,a=tablebergAdminMenuData==null?void 0:tablebergAdminMenuData.versionControl,i=o=>{const{url:s,action:l,nonce:u}=a.ajax.versionRollback,d=new FormData;return d.append("action",l),d.append("nonce",u),d.append("version",o),fetch(s,{method:"POST",body:d}).then(c=>c.json()).then(c=>{if(c.error)throw new Error(c.error);return c})};return f.jsxs("div",{className:"header-wrapper",children:[f.jsxs("div",{className:"menu-header",children:[f.jsx("div",{className:"left-container",children:f.jsxs("div",{className:"logo-container",children:[f.jsx("img",{alt:"plugin logo",src:r}),f.jsx("div",{className:"tableberg-plugin-logo-text",children:"Tableberg"})]})}),f.jsx("div",{className:"tableberg-menu-navigation-wrapper",children:f.jsx(nr,{routes:n,currentRoutePath:t,setRoute:e})}),f.jsxs("div",{className:"right-container",children:[f.jsx(Ye,{children:f.jsx("div",{className:"version-control-header-wrapper",children:f.jsx(tr,{pluginVersion:a.currentVersion,allVersions:a.versions,onVersionRollBack:i})})}),!tablebergAdminMenuData.misc.pro_status&&f.jsx(Ye,{children:f.jsx(Yt,{assetIds:["proBuyUrl"],children:({proBuyUrl:o})=>f.jsx(Bt,{url:o,title:"Upgrade to PRO"})})})]})]}),f.jsx("div",{className:"dropdown-navigation",children:f.jsxs("div",{className:"dropdown-drawer",children:[f.jsx(nr,{routes:n,currentRoutePath:t,setRoute:e}),f.jsx("div",{className:"hamburger-version-control",children:f.jsx(tr,{pluginVersion:a.currentVersion,allVersions:a.versions})})]})})]})}function cr({routes:t,currentRoutePath:e}){const[n,r]=x.useState(null);return x.useEffect(()=>{const a=t.find(i=>i.getPath()===e);if(a)r(a.getElement());else{const i=t[t.length-1];r(i.getElement())}},[e,t]),f.jsx("div",{className:"tableberg-router-content-wrapper","data-route-path":e,children:n},e)}function fr(){this.name="NoRouterComponentFoundError",this.message="No router component found within RouterProvider. Please make sure you have passed Router component as a child of RouterProvider."}fr.prototype=Error.prototype;function io({children:t,currentRoutePath:e,setCurrentRoutePath:n}){const r=x.useMemo(()=>{const o=(t==null?void 0:t.type)===cr?t.type:null;if(o===null)throw new fr;return o},[e]),a=x.useMemo(()=>er(sr),[]),i=()=>{const s=new URL(window.location.href).searchParams.get("route");s&&n(s)};return x.useEffect(()=>{window.addEventListener("popstate",i)},[]),x.useEffect(()=>{i()},[]),x.useEffect(()=>{const o=new URL(window.location.href);o.searchParams.set("route",e),window.history.pushState(null,null,o.href)},[e]),f.jsx(r,{routes:a,currentRoutePath:e})}function oo({currentRoutePath:t,setCurrentRoutePath:e}){return f.jsx(io,{currentRoutePath:t,setCurrentRoutePath:e,children:f.jsx(cr,{})})}function so(){const e=new URL(window.location.href).searchParams.get("route"),[n,r]=x.useState(e??"welcome");return f.jsxs("div",{className:"tableberg-admin-menu-container",children:[f.jsx(ao,{currentRoutePath:n,setCurrentRoutePath:r}),f.jsx(oo,{currentRoutePath:n,setCurrentRoutePath:r})]})}function lo({children:t}){return x.useEffect(()=>{const e=document.querySelector("#wpcontent"),n=document.querySelector("#wpbody"),r=document.querySelector("#wpadminbar");if(n){const a=r?r.offsetHeight:0;n.style.height=`calc( 100vh - ${a}px)`,e.style.padding=0}},[]),f.jsx("div",{className:"tableberg-admin-menu-wrapper",children:t})}const ur=document.querySelector("#tableberg-admin-menu");ur&&J.createRoot(ur).render(f.jsx(lo,{children:f.jsx(so,{})}))});
