var _borschik=function(){var t=this._borschik||function(e){return!(e in t||t[e]++)};return t}();if(_borschik("r0R8Yi2H9Hr8Y8VY0wBbmA88hvA")){var BEMHTML=function(){var t,e,n,i,r,o,s={},a=function(t){function e(){throw new Error(this)
}function n(t){return i(t||this)}function i(t){return e(t)}return t.apply=n,t}("undefined"==typeof s?{}:s);
return function(s){var c=this;return s||(s={}),o=s.cache,function(){return c===this?(c=void 0,t="",e="",n="",i="",r=""):(t="",e="",n="",i="",r=""),a.apply.call([c])
}.call(null)}}();"undefined"==typeof exports||(exports.BEMHTML=BEMHTML),_borschik("AUiCuvCsFkeXqPHTCnve3trT-eI")&&(jQuery.cookie=function(t,e,n){if("undefined"==typeof e){var i=null;
if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),o=0;o<r.length;o++){var s=jQuery.trim(r[o]);
if(s.substring(0,t.length+1)==t+"="){i=decodeURIComponent(s.substring(t.length+1));break}}return i}n=n||{},null===e&&(e="",n.expires=-1);
var a="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,a="; expires="+c.toUTCString()
}var u=n.path?"; path="+n.path:"",l=n.domain?"; domain="+n.domain:"",f=n.secure?"; secure":"";document.cookie=[t,"=",encodeURIComponent(e),a,u,l,f].join("")
}),_borschik("cAErHV4ulnr5YaxKCTqKZTQD2kI")&&!function(t){function e(e,o,s){var a=!1;if(i){var c=[];t.each(r,function(){s.hasOwnProperty(this)&&(a=!0)&&c.push({name:this,val:s[this]})
}),a&&(t.each(s,function(t){c.push({name:t,val:this})}),s=c)}t.each(s,function(i,r){if(a&&(i=r.name,r=r.val),t.isFunction(r)&&(!n||r.toString().indexOf(".__base")>-1)){var s=e[i]||function(){};
o[i]=function(){var t=this.__base;this.__base=s;var e=r.apply(this,arguments);return this.__base=t,e}
}else o[i]=r})}var n=function(){}.toString().indexOf("_")>-1,i=t.browser.msie,r=i?["toString","valueOf"]:null,o=function(){};
t.inherit=function(){var n=arguments,i=t.isFunction(n[0]),r=i?n[0]:o,s=n[i?1:0]||{},a=n[i?2:1],c=s.__constructor||i&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)
}:function(){};if(!i)return c.prototype=s,c.prototype.__self=c.prototype.constructor=c,t.extend(c,a);
t.extend(c,r);var u=function(){},l=u.prototype=r.prototype,f=c.prototype=new u;return f.__self=f.constructor=c,e(l,f,s),a&&e(r,c,a),c
},t.inheritSelf=function(t,n,i){var r=t.prototype;return e(r,r,n),i&&e(t,t,i),t}}(jQuery),_borschik("eim9mbh-HguuX6sdshSBuau-YF8")&&!function(t){var e=0,n="__"+ +new Date,i=function(){return"uniq"+ ++e
};t.identify=function(t,e){if(!t)return i();var r="uniqueID"in t?"uniqueID":n;return e||r in t?t[r]:t[r]=i()
}}(jQuery),_borschik("gOR9FuNtxxFTRUHpBJCppIiGQD8")&&!function(t){t.isEmptyObject||(t.isEmptyObject=function(t){for(var e in t)return!1;
return!0})}(jQuery),_borschik("AW47RAjsjOlefg_2L_CsT2aXktI")&&!function(t){t.extend({debounce:function(t,e,n,i){3==arguments.length&&"boolean"!=typeof n&&(i=n,n=!1);
var r;return function(){var o=arguments;i=i||this,n&&!r&&t.apply(i,o),clearTimeout(r),r=setTimeout(function(){n||t.apply(i,o),r=null
},e)}},throttle:function(t,e,n){var i,r,o;return function(){r=arguments,o=!0,n=n||this,i||function(){o?(t.apply(n,r),o=!1,i=setTimeout(arguments.callee,e)):i=null
}()}}})}(jQuery),_borschik("0WzhV_FgZkzz0oQxZmAW2O1WH7c")&&!function(t){var e="__"+ +new Date+"storage",n=function(e,n){return t.identify(e)+(n?t.identify(n):"")
},i={buildEventName:function(t){return t},on:function(i,r,o,s,a){if("string"==typeof i){t.isFunction(r)&&(s=o,o=r,r=void 0);
for(var c,u=n(o,s),l=this[e]||(this[e]={}),f=i.split(" "),d=0;i=f[d++];)if(i=this.buildEventName(i),c=l[i]||(l[i]={ids:{},list:{}}),!(u in c.ids)){var h=c.list,m={fn:o,data:r,ctx:s,special:a};
h.last?(h.last.next=m,m.prev=h.last):h.first=m,c.ids[u]=h.last=m}}else{var p=this;t.each(i,function(t,e){p.on(t,e,r,a)
})}return this},onFirst:function(t,e,n,i){return this.on(t,e,n,i,{one:!0})},un:function(i,r,o){if("string"==typeof i||"undefined"==typeof i){var s=this[e];
if(s)if(i){for(var a,c=i.split(" "),u=0;i=c[u++];)if(i=this.buildEventName(i),a=s[i])if(r){var l=n(r,o),f=a.ids;
if(l in f){var d=a.list,h=f[l],m=h.prev,p=h.next;m?m.next=p:h===d.first&&(d.first=p),p?p.prev=m:h===d.last&&(d.last=m),delete f[l]
}}else delete this[e][i]}else delete this[e]}else{var _=this;t.each(i,function(t,e){_.un(t,e,o)})}return this
},trigger:function(n,i){var r,o=this,s=o[e];if("string"==typeof n?n=t.Event(o.buildEventName(r=n)):n.type=o.buildEventName(r=n.type),n.target||(n.target=o),s&&(s=s[n.type]))for(var a,c=s.list.first;c;)n.data=c.data,a=c.fn.call(c.ctx||o,n,i),"undefined"!=typeof a&&(n.result=a,a===!1&&(n.preventDefault(),n.stopPropagation())),c.special&&c.special.one&&o.un(r,c.fn,c.ctx),c=c.next;
return this}};t.observable=t.inherit(i,i)}(jQuery),_borschik("wPX3rJZ8aeXecCalKPR3xgvNSa0")&&!function(t,e){function n(t,e,n){return(t?"__elem_"+t:"")+"__mod"+(e?"_"+e:"")+(n?"_"+n:"")
}function i(e,i,r){t.isFunction(e)?i[n(r,"*","*")]=e:t.each(e,function(e,o){t.isFunction(o)?i[n(r,e,"*")]=o:t.each(o,function(t,o){i[n(r,e,t)]=o
})})}function r(t,e){return e?Array.isArray(e)?function(n){for(var i=0,r=e.length;r>i;)if(n.hasMod(t,e[i++]))return!0;
return!1}:function(n){return n.hasMod(t,e)}:function(e){return e.hasMod(t)}}var o=[],s={},a={};this.BEM=t.inherit(t.observable,{__constructor:function(t,e,n){var i=this;
i._modCache=t||{},i._processingMods={},i._params=e,i.params=null,n!==!1?i._init():i.afterCurrentEvent(function(){i._init()
})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this
},changeThis:function(t,e){return t.bind(e||this)},afterCurrentEvent:function(t,e){this.__self.afterCurrentEvent(this.changeThis(t,e))
},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).__self.trigger(t,e),this},buildEvent:function(e){return"string"==typeof e&&(e=t.Event(e)),e.block=this,e
},hasMod:function(t,n,i){var r=arguments.length,o=!1;1==r?(i="",n=t,t=e,o=!0):2==r&&("string"==typeof t?(i=n,n=t,t=e):(i="",o=!0));
var s=this.getMod(t,n)===i;return o?!s:s},getMod:function(t,e){var n=typeof t;if("string"===n||"undefined"===n){e=t||e;
var i=this._modCache;return e in i?i[e]:i[e]=this._extractModVal(e)}return this._getElemMod(e,t)},_getElemMod:function(t,e,n){return this._extractModVal(t,e,n)
},getMods:function(t){var n=t&&"string"!=typeof t,i=this,r=[].slice.call(arguments,n?1:0),o=i._extractMods(r,n?t:e);
return n||(r.length?r.forEach(function(t){i._modCache[t]=o[t]}):i._modCache=o),o},setMod:function(n,i,r){"undefined"==typeof r&&(r=i,i=n,n=e);
var o=this;if(!n||n[0]){var s=(n&&n[0]?t.identify(n[0]):"")+"_"+i;if(this._processingMods[s])return o;
var a,c=n?o._getElemMod(i,n,a=o.__self._extractElemNameFrom(n)):o.getMod(i);if(c===r)return o;this._processingMods[s]=!0;
var u=!0,l=[i,r,c];n&&l.unshift(n),[["*","*"],[i,"*"],[i,r]].forEach(function(t){u=o._callModFn(a,t[0],t[1],l)!==!1&&u
}),!n&&u&&(o._modCache[i]=r),u&&o._afterSetMod(i,r,c,n,a),delete this._processingMods[s]}return o},_afterSetMod:function(){},toggleMod:function(t,n,i,r,o){"string"==typeof t&&(o=r,r=i,i=n,n=t,t=e),"undefined"==typeof r?r="":"boolean"==typeof r&&(o=r,r="");
var s=this.getMod(t,n);return(s==i||s==r)&&this.setMod(t,n,"boolean"==typeof o?o?i:r:this.hasMod(t,n,i)?r:i),this
},delMod:function(t,n){return n||(n=t,t=e),this.setMod(t,n,"")},_callModFn:function(t,i,r,o){var s=n(t,i,r);
return this[s]?this[s].apply(this,o):e},_extractModVal:function(){return""},_extractMods:function(){return{}
},channel:function(t,e){return this.__self.channel(t,e)},getDefaultParams:function(){return{}},del:function(t){var e=[].slice.call(arguments);
return"string"==typeof t&&e.unshift(this),this.__self.del.apply(this.__self,e),this},destruct:function(){}},{_name:"i-bem",blocks:s,decl:function(n,o,a){if("string"==typeof n?n={block:n}:n.name&&(n.block=n.name),n.baseBlock&&!s[n.baseBlock])throw'baseBlock "'+n.baseBlock+'" for "'+n.block+'" is undefined';
o||(o={}),o.onSetMod&&(i(o.onSetMod,o),delete o.onSetMod),o.onElemSetMod&&(t.each(o.onElemSetMod,function(t,e){i(e,o,t)
}),delete o.onElemSetMod);var c=s[n.baseBlock||n.block]||this;if(n.modName){var u=r(n.modName,n.modVal);
t.each(o,function(n,i){t.isFunction(i)&&(o[n]=function(){var t;if(u(this))t=i;else{var r=c.prototype[n];
r&&r!==o[n]&&(t=this.__base)}return t?t.apply(this,arguments):e})})}if(a&&"boolean"==typeof a.live){var l=a.live;
a.live=function(){return l}}var f;return n.block==c._name?(f=t.inheritSelf(c,o,a))._processLive(!0):(f=s[n.block]=t.inherit(c,o,a))._name=n.block,f
},_processLive:function(){return!1},create:function(t,e){return"string"==typeof t&&(t={block:t}),new s[t.block](t.mods,e)
},getName:function(){return this._name},_extractElemNameFrom:function(){},afterCurrentEvent:function(t,e){1==o.push({fn:t,ctx:e})&&setTimeout(this._runAfterCurrentEventFns,0)
},_runAfterCurrentEventFns:function(){var t=o.length;if(t)for(var e,n=o.splice(0,t);e=n.shift();)e.fn.call(e.ctx||this)
},changeThis:function(t,e){return t.bind(e||this)},del:function(t){var e="string"==typeof t,n=e?0:1,i=arguments.length;
for(e&&(t=this);i>n;)delete t[arguments[n++]];return this},channel:function(n,i){return"boolean"==typeof n&&(i=n,n=e),n||(n="default"),i?(a[n]&&(a[n].un(),delete a[n]),void 0):a[n]||(a[n]=new t.observable)
}})}(jQuery),_borschik("I3cBlUXdbJl5WGhNNjZ8sIMbDY4")&&!function(){Object.keys||(Object.keys=function(t){var e=[];
for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e})}(),_borschik("6OtocFE1B3Wsk4aWWQmvNc911GU")&&!function(){var t=Array.prototype,e=Object.prototype.toString,n={indexOf:function(t,e){e=+(e||0);
var n=this,i=n.length;if(i>0&&i>e)for(e=0>e?Math.ceil(e):Math.floor(e),-i>e&&(e=0),0>e&&(e+=i);i>e;){if(e in n&&n[e]===t)return e;
++e}return-1},forEach:function(t,e){for(var n=-1,i=this,r=i.length;++n<r;)n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i))
},map:function(t,e){for(var n=-1,i=this,r=i.length,o=new Array(r);++n<r;)n in i&&(o[n]=e?t.call(e,i[n],n,i):t(i[n],n,i));
return o},filter:function(t,e){for(var n=-1,i=this,r=i.length,o=[];++n<r;)n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i))&&o.push(i[n]);
return o},reduce:function(t,e){var n,i=-1,r=this,o=r.length;if(arguments.length<2){for(;++i<o;)if(i in r){n=r[i];
break}}else n=e;for(;++i<o;)i in r&&(n=t(n,r[i],i,r));return n},some:function(t,e){for(var n=-1,i=this,r=i.length;++n<r;)if(n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i)))return!0;
return!1},every:function(t,e){for(var n=-1,i=this,r=i.length;++n<r;)if(n in i&&!(e?t.call(e,i[n],n,i):t(i[n],n,i)))return!1;
return!0}};for(var i in n)t[i]||(t[i]=n[i]);Array.isArray||(Array.isArray=function(t){return"[object Array]"===e.call(t)
})}(),_borschik("vAscd2mB4A4XPDZE8_rLW4IBSF8")&&!function(){var t=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(e){var n=this,i=t.call(arguments,1);
return function(){return n.apply(e,i.concat(t.call(arguments)))}})}(),_borschik("6YSbDnoDDnBKVlioGZ_4J1-Ohhg")&&!function(t,e,n){function i(t,e,n){n.push(s,t,s,e)
}function r(t,e,n,r){r.push(t),n&&i(e,n,r)}function o(t,e,o,s,c){r(t,n,n,c),c.push(a,e),s&&i(o,s,c)}var s="_",a="__",c="[a-zA-Z0-9-]+";
t.INTERNAL={NAME_PATTERN:c,MOD_DELIM:s,ELEM_DELIM:a,buildModPostfix:function(t,e,n){var r=n||[];return i(t,e,r),n?r:r.join("")
},buildClass:function(t,e,i,s,a){var c=typeof i;if("string"==c?"string"!=typeof s&&(a=s,s=i,i=e,e=n):"undefined"!=c?(a=i,i=n):e&&"string"!=typeof e&&(a=e,e=n),!(e||i||a))return t;
var u=a||[];return e?o(t,e,i,s,u):r(t,i,s,u),a?u:u.join("")},buildClasses:function(t,i,s,a){i&&"string"!=typeof i&&(a=s,s=i,i=n);
var c=a||[];return i?o(t,i,n,n,c):r(t,n,n,c),s&&e.each(s,function(e,n){n&&(c.push(" "),i?o(t,i,e,n,c):r(t,e,n,c))
}),a?c:c.join("")}}}(BEM,jQuery),_borschik("STdDTmNJhRkxPtwjY8lncTaMvPA")&&(!function(t){function e(t){return t.replace(/^(?:https?:)?\/\//,"")
}t||(t=window.Lego={}),!t.params&&(t.params={}),t.c=function(t,n,i){var r=e(i&&i.host||BEM.blocks["i-global"].param("click-host")||"clck.yandex.ru"),o=function(t,e,n,i){return e=e.replace("'","%27"),e.indexOf("/dtype=")>-1?e:location.protocol+"//"+r+"/"+n+"/dtype="+t+"/rnd="+((new Date).getTime()+Math.round(100*Math.random()))+(i?"/*"+(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e)):"/*data="+encodeURIComponent("url="+encodeURIComponent(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e))))
},s=function(){var e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],n=document.createElement("script");
n.setAttribute("src",o(t,location.href,"jclck")),e.insertBefore(n,e.firstChild)};if(n)if(n.className.match(/b-link_pseudo_yes/)||n.href&&n.href.match(/^mailto:/)||i&&i.noRedirect===!0)s();
else if(n.href){var a=n.href;n.href=o(t,a,"redir"),setTimeout(function(){n.href=a},500)}else if(n.form)if(n.type.match(/submit|button|image/)){var a=n.form.action;
n.form.action=o(t,a,"redir",!0),setTimeout(function(){n.form.action=a},500)}else s();else{if(!n.action)throw"counter.js: not link and not form!";
n.action=o(t,n.action,"redir",!0)}else s()}}(window.Lego),function(t){t||(t=window.Lego={}),t.cp=function(e,n,i,r,o){t.c("stred/pid="+e+"/cid="+n+(i?"/path="+i:""),r,o)
}}(window.Lego),function(t){t||(t=window.Lego={}),t.ch=function(e,n){BEM.blocks["i-global"].param("show-counters")&&t.cp(0,2219,e,n)
}}(window.Lego)),_borschik("cXnDO14Y5A-NxW1rFFI6qOjFo1E")&&!function(t){t||(t=window.Lego={}),t.getCookie=function(t){var e=document.cookie;
if(e.length<1)return!1;var n=e.indexOf(t+"=");if(-1==n)return!1;n+=t.length+1;var i=e.indexOf(";",n);
return decodeURIComponent(-1==i?e.substring(n):e.substring(n,i))}}(window.Lego),_borschik("aIsupGFtZhGfKbXxiPQIrAPBfBk")&&!function(t){t||(t=window.Lego={}),t.isSessionValid=function(){return!!t.getCookie("yandex_login")
}}(window.Lego),_borschik("hLZiYMZ-GNGf_e0Cf6ywh5_Y_fY")&&!function(t,e){e||(e=window.Lego={}),e.init||(e.init=function(n){return(n=e.params=t.extend({id:"",login:e.isSessionValid()?e.getCookie("yandex_login")||"":"",yandexuid:e.getCookie("yandexuid"),locale:"ru",retpath:window.location.toString(),"passport-host":"//passport.yandex.ru","pass-host":"//pass.yandex.ru","passport-msg":n.id,"social-host":"//social.yandex.ru","lego-path":"/lego","show-counters-percent":100},n,e.params))["show-counters"]=Math.round(100*Math.random())<=n["show-counters-percent"],BEM.blocks["i-global"]._params||t.extend(BEM.blocks["i-global"]._params={},n),t(function(){n.oframebust&&e.oframebust(n.oframebust)
}),n}),e.block||(e.block={}),e.blockInit||(e.blockInit=function(n,i){n=n||document,i=i||".g-js",t(n).find(i).each(function(){var n=t(this),i=this.onclick?this.onclick():{},r=i.name||"",o=e.block[r];
o&&!n.data(r)&&(o.call(n,i),n.data(r,!0).addClass(r+"_js_inited"))})}),e.blockInitBinded||(e.blockInitBinded=!!t(document).ready(function(){e.blockInit()
}))}(jQuery,window.Lego),_borschik("E6vqydSSAYnWVICbcEV2tFXJF1U")&&!function(t,e,n){function i(t,e,n){(t[e]||(t[e]=[])).unshift(n)
}function r(t,e){return e.modName?function(n){(n._curBlock.mods||{})[e.modName]===e.modVal&&t(n)}:t}function o(t,n){var i,r=e.isArray(n);
return e.isArray(t)?r?i=t.concat(n):(i=t).push(n):r?(i=n).unshift(t):i=[t,n],i}function s(t){return t.replace(m,function(t){return h[t]
})}var a=t.INTERNAL,c=a.ELEM_DELIM,u={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1},l=a.buildClass,f=a.buildClasses,d={},h={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},m=/["&<>]/g;
t.HTML={decl:function(t,n){"string"==typeof t&&(t={block:t}),t.name&&(t.block=t.name);var o=d[t.block]||(d[t.block]={});
n.onBlock&&i(o,"_block",r(n.onBlock,t)),n.onElem&&(e.isFunction(n.onElem)?i(o,"_elem",r(n.onElem,t)):e.each(n.onElem,function(e,n){i(o,"_elem"+("*"===e?"":c+e),r(n,t))
}))},build:function(t){var e=new this.Ctx(t);return e._buildAll(),e._flush()},Ctx:e.inherit({__constructor:function(t){this._buffer=[],this._params=t,this._tParams=null,this._tParamsChanges=null,this._curBlock=n
},pos:function(){return this._params._pos},isFirst:function(){return 1===this._params._pos},isLast:function(){var t=this._params;
return t._pos===t._siblingsCount},params:function(t){var e=this;return"undefined"==typeof t?e._params:(e._params=t,e)
},param:function(t,n,i,r){var o=this,s=o._params;return"undefined"==typeof n?s[t]:(!i&&t in s?r&&(s[t]=e.extend(n,s[t])):s[t]=n,o)
},attrs:function(t,e){return this.param("attrs",t,e,!0)},attr:function(t,e,n){var i=this;if("undefined"==typeof e)return(i._params.attrs||{})[t];
var r=i._params.attrs;return r?(n||!(t in r))&&(r[t]=e):(i._params.attrs={})[t]=e,i},tag:function(t,e){return this.param("tag",t,e)
},cls:function(t,e){return this.param("cls",t,e)},mods:function(t,e){return this.param("mods",t,e,!0)
},mod:function(t,e,n){var i=this;if("undefined"==typeof e)return(i._params.mods||{})[t];var r=i._params.mods;
return r?(n||!(t in r))&&(r[t]=e):(i._params.mods={})[t]=e,i},mix:function(t,e){var n=this,i=n._params;
return"undefined"==typeof t?i.mix:(i.mix=!e&&"mix"in i?i.mix.concat(t):t,n)},js:function(t){return this.param("js",t)
},content:function(t,e){return this.param("content",t,e)},wrapContent:function(t){var e=this,n=e._params;
return t.content=n.content,n.content=t,e},beforeContent:function(t){var e=this,n=e._params;return n.content=o(t,n.content),e
},afterContent:function(t){var e=this,n=e._params;return n.content=o(n.content,t),e},wrap:function(t){var e=this,n=e._params;
return t.block||(t._curBlock=e._curBlock),t.content=n._wrapper?n._wrapper:n,n._wrapper=t,e},tParam:function(t,e){var n=this,i=n._tParams||(n._tParams={});
if("undefined"==typeof e)return i[t];var r=n._tParamsChanges||(n._tParamsChanges={});return t in r||(r[t]=i[t]),i[t]=e,n
},generateId:function(){return e.identify()},stop:function(){this._params._isStopped=!0},_buildAll:function(){var t=this,n=t._buffer,i=t._params,r=typeof i;
if("string"==r||"number"==r)n.push(i);else if(e.isArray(i))for(var o,s,a=0,c=i.length;c>a;)t._params=o=i[a++],s=typeof o,"string"==s||"number"==s?n.push(o):o&&(o._pos=a,o._siblingsCount=c,t._buildByDecl());
else i&&(t._params._pos=t._params._siblingsCount=1,t._buildByDecl())},_build:function(){var t,n=this,i=n._buffer,r=n._params,o=r.tag||"div",a=r.block||r.elem,c=a&&(r.block||n._curBlock.block),d=!1;
r.js&&((t={})[l(c,r.elem)]=r.js===!0?{}:r.js,d=!r.elem),i.push("<",o),(a||r.cls)&&(i.push(' class="'),a&&(f(c,r.elem,r.mods,i),r.mix&&e.each(r.mix,function(e,n){n&&(i.push(" "),f(n.block,n.elem,n.mods,i),n.js&&((t||(t={}))[l(n.block,n.elem)]=n.js===!0?{}:n.js,d||(d=!n.elem)))
})),r.cls&&i.push(a?" ":"",r.cls),d&&i.push(" i-bem"),i.push('"')),t&&i.push(' onclick="return ',s(JSON.stringify(t)),'"'),r.attrs&&e.each(r.attrs,function(t,e){"undefined"!=typeof e&&null!==e&&e!==!1&&i.push(" ",t,'="',e.toString().replace(/"/g,"&quot;"),'"')
}),u[o]?i.push("/>"):(i.push(">"),"undefined"!=typeof r.content&&(n._params=r.content,n._buildAll()),i.push("</",o,">"))
},_flush:function(){var t=this._buffer.join("");return delete this._buffer,t},_buildByDecl:function(){var t=this,n=t._curBlock,i=t._params;
if(i._curBlock&&(t._curBlock=i._curBlock),i.block&&(t._curBlock=i),!i._wrapper){if(i.block||i.elem){var r=d[t._curBlock.block];
if(r){var o;if(i.elem?(o=r["_elem"+c+i.elem],r._elem&&(o=o?o.concat(r._elem):r._elem)):o=r._block,o)for(var s,a=0;(s=o[a++])&&(s(t),!i._isStopped););}}if(i._wrapper)return i._curBlock=t._curBlock,t._params=i._wrapper,t._buildAll()
}var u=t._tParamsChanges;if(t._tParamsChanges=null,t._build(),t._curBlock=n,u){var l=t._tParams;e.each(u,function(t,e){"undefined"==typeof e?delete l[t]:l[t]=e
})}}})}}(BEM,jQuery),_borschik("8V4pKDaKj7uMkWJRnBMpSm4wQGs")&&!function(t){if(!window.JSON){var e,n=Object.prototype.toString,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
window.JSON={stringify:e=function(o){if(null===o)return"null";if("undefined"==typeof o)return t;switch(n.call(o)){case"[object String]":return i.lastIndex=0,'"'+(i.test(o)?o.replace(i,function(t){var e=r[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}):o)+'"';case"[object Number]":case"[object Boolean]":return""+o;
case"[object Array]":for(var s,a="[",c=0,u=o.length;u>c;)s=e(o[c]),a+=(c++?",":"")+("undefined"==typeof s?"null":s);
return a+"]";case"[object Object]":var s,a="{",c=0;for(var l in o)o.hasOwnProperty(l)&&(s=e(o[l]),"undefined"!=typeof s&&(a+=(c++?",":"")+'"'+l+'":'+s));
return a+"}";default:return t}}}}}(),_borschik("oBxXkftuvFSxIodWbtoM8GzKW3g")&&!function(t){t||(t=window.Lego={}),t.messages=t.messages||{},t.message=function(e,n){return"ru"==t.params.locale?n:t.messages[e]||n
}}(window.Lego),_borschik("c44rh8nP7qoKxk5VNJ9N30meCjY")&&!function(t,e,n){function i(t,n){var i=t[0];
e.each(a(i),function(s,a){o(a,i,s,n);var c=m[a.uniqId];c?c.domElem.index(i)<0&&(c.domElem=c.domElem.add(t),e.extend(c._params,a)):r(s,t,a)
})}function r(t,i,r,s,c){"boolean"==typeof r&&(c=s,s=r,r=n);var u=i[0];r=o(r||a(u)[t],u,t);var l=r.uniqId;
if(m[l])return m[l]._init();h[l]=h[l]?h[l].add(i):i;var f=u.parentNode;f&&11!==f.nodeType||e.unique(h[l]);
var d=b[t]||C.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||s||r.live===!1){var p=new d(h[l],r,!!s);
return delete h[l],c&&c.apply(p,Array.prototype.slice.call(arguments,4)),p}}function o(t,n,i,r){(t||(t={})).uniqId||(t.uniqId=(t.id?i+"-id-"+t.id:e.identify())+(r||e.identify()));
var o=e.identify(n),s=p[o]||(p[o]={});return s[i]||(s[i]=t),t}function s(t,e,n){var i=t.find(e);return n?i:i.add(t.filter(e))
}function a(t){var n=e.identify(t);return p[n]||(p[n]=c(t))}function c(t){var n=t.onclick||t.ondblclick;
if(!n&&"body"==t.tagName.toLowerCase()){var i=e(t),r=i.attr("onclick")||i.attr("ondblclick");r&&(n=Function(r))
}return n?n():{}}function u(t){delete p[e.identify(t)]}function l(t,e){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(e)
}var f=e(window),d=e(document),h={},m={},p={},_={},v={},b=t.blocks,g=t.INTERNAL,y=g.NAME_PATTERN,k=g.MOD_DELIM,E=g.ELEM_DELIM,x=g.buildModPostfix,M=g.buildClass;
e.fn.bem=function(t,e){return r(t,this,e,!0)};var C=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,n,i){var r=this;
r.domElem=t,r._eventNameCache={},r._elemCache={},m[r._uniqId=n.uniqId||e.identify(r)]=r,r._needSpecialUnbind=!1,r.__base(null,n,i)
},findBlocksInside:function(t,e){return this._findBlocks("find",t,e)},findBlockInside:function(t,e){return this._findBlocks("find",t,e,!0)
},findBlocksOutside:function(t,e){return this._findBlocks("parents",t,e)},findBlockOutside:function(t,e){return this._findBlocks("closest",t,e)[0]||null
},findBlocksOn:function(t,e){return this._findBlocks("",t,e)},findBlockOn:function(t,e){return this._findBlocks("",t,e,!0)
},_findBlocks:function(t,i,o,s){o||(o=i,i=n);var a=i?"string"==typeof i?this.findElem(i):i:this.domElem,c="string"==typeof o,u=c?o:o.block||o.blockName,l="."+(c?M(u):M(u,o.modName,o.modVal))+(s?":first":""),f=a.filter(l);
if(t&&(f=f.add(a[t](l))),s)return f[0]?r(u,f.eq(0),!0):null;var d=[],h={};return e.each(f,function(t,n){var i=r(u,e(n),!0);
h[i._uniqId]||(h[i._uniqId]=!0,d.push(i))}),d},bindToDomElem:function(t,n,i){var r=this;return i?t.bind(r._buildEventName(n),function(t){return(t.data||(t.data={})).domElem=e(this),i.apply(r,arguments)
}):e.each(n,function(e,n){r.bindToDomElem(t,e,n)}),r},bindToDoc:function(t,e){return this._needSpecialUnbind=!0,this.bindToDomElem(d,t,e)
},bindToWin:function(t,e){return this._needSpecialUnbind=!0,this.bindToDomElem(f,t,e)},bindTo:function(t,n,i){return!n||e.isFunction(n)?(i=n,n=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,n,i)
},unbindFromDomElem:function(t,e){return t.unbind(this._buildEventName(e)),this},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)
},unbindFromWin:function(t){return this.unbindFromDomElem(f,t)},unbindFrom:function(t,e){return e?"string"==typeof t&&(t=this.elem(t)):(e=t,t=this.domElem),this.unbindFromDomElem(t,e)
},_buildEventName:function(t){var e=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return e._buildOneEventName(t)
}).join(" "):e._buildOneEventName(t)},_buildOneEventName:function(t){var e=this,n=e._eventNameCache;if(t in n)return n[t];
var i="."+e._uniqId;if(t.indexOf(".")<0)return n[t]=t+i;var r=".bem_"+e.__self._name;return n[t]=t.split(".").map(function(t,e){return 0==e?t+r:r+"_"+t
}).join("")+i},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).domElem&&this._ctxTrigger(t,e),this
},_ctxTrigger:function(t,n){var i=this,r=_[i.__self._buildCtxEventName(t.type)],o={};r&&i.domElem.each(function(){for(var s=this,a=r.counter;s&&a;){var c=e.identify(s,!0);
if(c){if(o[c])break;var u=r.ctxs[c];u&&(e.each(u,function(e,r){r.fn.call(r.ctx||i,t,n)}),a--),o[c]=!0
}s=s.parentNode}})},setMod:function(t,n,i){if(t&&"undefined"!=typeof i&&t.length>1){var r=this;return t.each(function(){var o=e(this);
o.__bemElemName=t.__bemElemName,r.setMod(o,n,i)}),r}return this.__base(t,n,i)},_extractModVal:function(t,e,n){var i,r=(e||this.domElem)[0];
return r&&(i=r.className.match(this.__self._buildModValRE(t,n||e))),i?i[2]:""},_extractMods:function(t,e){var n={},i=!t.length,r=0;
return((e||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?y:t.join("|"))+")",e,"g"))||[]).forEach(function(t){var e=(t=t.trim()).lastIndexOf(k),i=t.substr(0,e-1).lastIndexOf(k);
n[t.substr(i+1,e-i-1)]=t.substr(e+1),++r}),r<t.length&&t.forEach(function(t){t in n||(n[t]="")}),n},_afterSetMod:function(t,n,i,r,o){var s=this.__self,a=s._buildModClassPrefix(t,o),c=s._buildModValRE(t,o),u=""===n;
(r||this.domElem).each(function(){var t=this.className;t.indexOf(a)>-1?this.className=t.replace(c,(u?"":"$1"+a+n)+"$3"):u||e(this).addClass(a+n)
}),o&&this.dropElemCache(o,t,i).dropElemCache(o,t,n)},findElem:function(t,e,n,i){arguments.length%2?(i=n,n=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));
var r=this.__self,o="."+e.split(" ").map(function(t){return M(r._name,t,n,i)}).join(",.");return s(t,o)
},_elem:function(t,e,n){var i,r=t+x(e,n);return(i=this._elemCache[r])||(i=this._elemCache[r]=this.findElem(t,e,n),i.__bemElemName=t),i
},elem:function(t,n,i){if(n&&"string"!=typeof n)return n.__bemElemName=t,n;if(t.indexOf(" ")<0)return this._elem(t,n,i);
var r=e([]),o=this;return t.split(" ").forEach(function(t){r=r.add(o._elem(t,n,i))}),r},dropElemCache:function(t,e,n){if(t){var i=this,r=x(e,n);
t.indexOf(" ")<0?delete i._elemCache[t+r]:t.split(" ").forEach(function(t){delete i._elemCache[t+r]})
}else this._elemCache={};return this},elemParams:function(t){var e;return"string"==typeof t?(e=t,t=this.elem(t)):e=this.__self._extractElemNameFrom(t),c(t[0])[M(this.__self.getName(),e)]||{}
},containsDomElem:function(t){var e=!1;return this.domElem.each(function(){return!(e=t.parents().andSelf().index(this)>-1)
}),e},buildSelector:function(t,e,n){return this.__self.buildSelector(t,e,n)},destruct:function(t){var n=this,i=n.__self;
n._isDestructing=!0,n._needSpecialUnbind&&i.doc.add(i.win).unbind("."+n._uniqId),n.dropElemCache().domElem.each(function(t,n){var i=a(n);
e.each(i,function(t,e){var r=m[e.uniqId];r?r._isDestructing||(l(r,n),delete i[t]):delete h[e.uniqId]}),e.isEmptyObject(i)&&u(n)
}),t||n.domElem.remove(),delete m[n.un()._uniqId],delete n.domElem,delete n._elemCache,n.__base()}},{doc:d,win:f,_processLive:function(t){var e=this,n=e._liveInitable;
if("live"in e){var i="undefined"==typeof n;i^t&&(n=e.live()!==!1,e.live=function(){})}return n},init:function(t,n,r){(!t||e.isFunction(t))&&(r=n,n=t,t=d);
var o=e.identify();return s(t,".i-bem").each(function(){i(e(this),o)}),n&&this.afterCurrentEvent(function(){n.call(r||this,t)
}),this._runAfterCurrentEventFns(),t},destruct:function(t,i,r){"boolean"!=typeof t&&(r=i,i=t,t=n),s(i,".i-bem",r).each(function(t,n){var i=a(this);
e.each(i,function(t,e){if(e.uniqId){var r=m[e.uniqId];r?(l(r,n),delete i[t]):delete h[e.uniqId]}}),e.isEmptyObject(i)&&u(this)
}),t||(r?i.empty():i.remove())},update:function(t,e,n,i){this.destruct(t,!0),this.init(t.html(e),n,i)
},append:function(t,n){this.init(e(n).appendTo(t))},prepend:function(t,n){this.init(e(n).prependTo(t))
},before:function(t,n){this.init(e(n).insertBefore(t))},after:function(t,n){this.init(e(n).insertAfter(t))
},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,n,i,r){var o=this;
if(n.indexOf(" ")>-1)n.split(" ").forEach(function(e){o._liveClassBind(t,e,i,r)});else{var s=v[n],a=e.identify(i);
s||(s=v[n]={},d.bind(n,o.changeThis(o._liveClassTrigger,o))),s=s[t]||(s[t]={uniqIds:{},fns:[]}),a in s.uniqIds||(s.fns.push({uniqId:a,fn:o._buildLiveEventFn(i,r)}),s.uniqIds[a]=s.fns.length-1)
}return this},_liveClassUnbind:function(t,n,i){var r=v[n];if(r)if(i){if(r=r[t]){var o=e.identify(i);if(o in r.uniqIds){var s=r.uniqIds[o],a=r.fns.length-1;
for(r.fns.splice(s,1);a>s;)r.uniqIds[r.fns[s++].uniqId]=s-1;delete r.uniqIds[o]}}}else delete r[t];return this
},_liveClassTrigger:function(t){var n=v[t.type];if(n){var i=t.target,r=[];for(var o in n)n.hasOwnProperty(o)&&r.push(o);
do for(var s=" "+i.className+" ",a=0;o=r[a++];)if(s.indexOf(" "+o+" ")>-1){for(var c,u=0,l=n[o].fns,f=!1;c=l[u++];)c.fn.call(e(i),t)===!1&&(f=!0);
if(f&&t.preventDefault(),f||t.isPropagationStopped())return;r.splice(--a,1)}while(r.length&&(i=i.parentNode))
}},_buildLiveEventFn:function(t,n){var i=this;return function(o){var s=[i._name,((o.data||(o.data={})).domElem=e(this)).closest(i.buildSelector()),!0],a=r.apply(null,n?s.concat([t,o]):s);
return a&&!n&&t?t.apply(a,arguments):void 0}},liveInitOnEvent:function(t,e,n){return this.liveBindTo(t,e,n,!0)
},liveBindTo:function(t,i,r,o){(!i||e.isFunction(i))&&(r=i,i=t,t=n),t&&"string"!=typeof t||(t={elem:t}),t.elemName&&(t.elem=t.elemName);
var s=this;return t.elem&&t.elem.indexOf(" ")>1?(t.elem.split(" ").forEach(function(e){s._liveClassBind(M(s._name,e,t.modName,t.modVal),i,r,o)
}),s):s._liveClassBind(M(s._name,t.elem,t.modName,t.modVal),i,r,o)},liveUnbindFrom:function(t,e,n){var i=this;
return t.indexOf(" ")>1?(t.split(" ").forEach(function(t){i._liveClassUnbind(M(i._name,t),e,n)}),i):i._liveClassUnbind(M(i._name,t),e,n)
},_liveInitOnBlockEvent:function(t,e,n,i){var r=this._name;return b[e].on(t,function(t){var e=arguments,o=t.block[i](r);
n&&o.forEach(function(t){n.apply(t,e)})}),this},liveInitOnBlockEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOn")
},liveInitOnBlockInsideEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOutside")
},liveInitOnBlockInit:function(t,e){return this.liveInitOnBlockEvent("init",t,e)},liveInitOnBlockInsideInit:function(t,e){return this.liveInitOnBlockInsideEvent("init",t,e)
},on:function(t,e,n,i,r){return t.jquery?this._liveCtxBind(t,e,n,i,r):this.__base(t,e,n,i)},un:function(t,e,n,i){return t.jquery?this._liveCtxUnbind(t,e,n,i):this.__base(t,e,n)
},liveCtxBind:function(t,e,n,i,r){return this._liveCtxBind(t,e,n,i,r)},_liveCtxBind:function(t,i,r,o,s){var a=this;
if("string"==typeof i)if(e.isFunction(r)&&(s=o,o=r,r=n),i.indexOf(" ")>-1)i.split(" ").forEach(function(e){a._liveCtxBind(t,e,r,o,s)
});else{var c=a._buildCtxEventName(i),u=_[c]||(_[c]={counter:0,ctxs:{}});t.each(function(){var t=e.identify(this),n=u.ctxs[t];
n||(n=u.ctxs[t]={},++u.counter),n[e.identify(o)+(s?e.identify(s):"")]={fn:o,data:r,ctx:s}})}else e.each(i,function(e,n){a._liveCtxBind(t,e,n,r)
});return a},liveCtxUnbind:function(t,e,n,i){return this._liveCtxUnbind(t,e,n,i)},_liveCtxUnbind:function(t,n,i,r){var o=this,s=_[n=o._buildCtxEventName(n)];
return s&&(t.each(function(){var t,n=e.identify(this,!0);n&&(t=s.ctxs[n])&&(i&&delete t[e.identify(i)+(r?e.identify(r):"")],(!i||e.isEmptyObject(t))&&(s.counter--,delete s.ctxs[n]))
}),s.counter||delete _[n]),o},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;
var e=t[0].className.match(this._buildElemNameRE());return e?e[1]:n},extractParams:c,_buildModClassPrefix:function(t,e){return M(this._name)+(e?E+("string"==typeof e?e:this._extractElemNameFrom(e)):"")+k+t+k
},_buildModValRE:function(t,e,n){return new RegExp("(\\s?)"+this._buildModClassPrefix(t,e)+"("+y+")(\\s|$)",n)
},_buildElemNameRE:function(){return new RegExp(this._name+E+"("+y+")(?:\\s|$)")},buildSelector:function(t,e,n){return"."+M(this._name,t,e,n)
},getBlockByUniqId:function(t){return m[t]},getWindowSize:function(){return{width:f.width(),height:f.height()}
}})}(BEM,jQuery),_borschik("5iPwhAxg0OtVlbQ7xKwlc6ZyD9A")&&!function(){String.prototype.trim||(String.prototype.trim=function(){for(var t=this.replace(/^\s\s*/,""),e=/\s/,n=t.length;e.test(t.charAt(--n)););return t.slice(0,n+1)
})}(),_borschik("Rvrta3Tyv_KfYb7thDkhBmA1zcg")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.del(this.__self._params=$.extend({},this.params),"uniqId","name");
var t=this.__self._params;t["passport-msg"]||(t["passport-msg"]=t.id),void 0===t["show-counters"]&&(t["show-counters"]=Math.round(100*Math.random())<=t["show-counters-percent"]),t.locale=t.lang,$(function(){t.oframebust&&Lego.oframebust(t.oframebust)
})}},getDefaultParams:function(){return{id:"",login:Lego.isSessionValid()?$.cookie("yandex_login")||"":"",yandexuid:$.cookie("yandexuid"),lang:"ru",retpath:window.location.toString(),"passport-host":"https://passport.yandex.ru","pass-host":"//pass.yandex.ru","social-host":"//social.yandex.ru","lego-path":"/lego","show-counters-percent":100}
}},{param:function(t){return(this._params||{})[t]}}),_borschik("eRpp7IVMuj-kBGQLeckT10TuVF8")&&$(function(){BEM.DOM.init()
}),_borschik("Y00oHNhMEA5_W0SHc2ECJAwqpA8")&&BEM.DOM.decl("b-saved-copy",{onSetMod:{js:function(){top.YaCC&&top.YaCC.date&&(this.elem("date").html(top.YaCC.date),this.elem("from").show())
}}}),_borschik("7jdffeoLT_0rKMAGDygz0M3QUUk")&&BEM.HTML.decl("b-link",{onBlock:function(t){t.tag("a").attr("href",t.param("url"));
for(var e,n=["title","target"];e=n.pop();)t.param(e)&&t.attr(e,t.param(e))}}),_borschik("tT7o-SvnXTaPu9GbIi4S7Z2ab6Y")&&(BEM.DOM.decl("b-highlight-control",{onSetMod:{js:function(){this.params.items=$(top.document).find(".highlight:visible"),this.params.tumbler=this.findBlockOn(this.elem("tumbler"),"b-form-checkbox"),this.params.selectedClass="b-safe-panel__inject-current",this.params.highlightedClass="highlight_active",this.params.current=-1,this.params.old=-1,this.top=top,this.bindTo("prev","click",this.selectPrev),this.bindTo("next","click",this.selectNext),this.params.tumbler.on("change",this.toggleHighlighterMode,this)
}},toggleHighlighterMode:function(){this.params.current=-1,this.params.old=-1,this.params.items.toggleClass(this.params.highlighterClass),this.params.items.removeClass(this.params.selectedClass),this.toggleMod(this.elem("prev"),"disabled","yes"),this.toggleMod(this.elem("next"),"disabled","yes")
},selectNext:function(){return this.selectItem(1),!1},selectPrev:function(){return this.selectItem(-1),!1
},selectItem:function(t){(!this.params.items||this.params.items.length)&&this.params.tumbler.isChecked()&&(this.smartChangeCurrent(t),this.params.items.eq(this.params.old).removeClass(this.params.selectedClass),this.params.items.eq(this.params.current).addClass(this.params.selectedClass),this.moveToCurrent())
},moveToCurrent:function(){var t=this.params.items.eq(this.params.current).offset(),e=10,n=111;this.top.scrollTo(t.left-e,t.top-e-n)
},smartChangeCurrent:function(t){for(var e=this.params.current+t,n=this.params.items.length;e>=n;)e-=n;
for(;0>e;)e+=n;this.params.old=this.params.current,this.params.current=e}}),BEM.DOM.decl({name:"b-highlight-control",modName:"type",modVal:"envelope"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.top=frames["b-page__inner-frame"],this.findBlockOutside("b-page").elem("inner-frame").load(this.changeThis(this.onFrameLoad))
}},onFrameLoad:function(){this.params.items=this.params.items.add(this.findBlockOutside("b-page").elem("inner-frame").contents().find(".highlight:visible"))
}})),_borschik("bF1s5Ce_EExZAQVA14wDiYpL8-I")&&(BEM.DOM.decl("b-form-checkbox",{onSetMod:{js:function(){var t=this,e=t.elem("checkbox");
try{var n=t.__self.doc[0].activeElement}catch(i){}t.setMod("checked",e.attr("checked")?"yes":""),n===e[0]&&t.setMod("focused","yes")
},focused:{yes:function(){return this.isDisabled()?!1:(this.elem("checkbox").focus(),void 0)},"":function(){this.elem("checkbox").blur()
}},checked:function(t,e){this.elem("checkbox").attr("checked","yes"==e),this.elem("tick").attr("alt","yes"==e?" v":""),this.afterCurrentEvent(function(){this.trigger("change")
})},disabled:function(t,e){this.elem("checkbox").attr("disabled","yes"==e)}},isDisabled:function(){return this.hasMod("disabled","yes")
},isChecked:function(){return this.hasMod("checked","yes")},toggle:function(){this.toggleMod("checked","yes","")
},val:function(t){var e=this.elem("checkbox");return void 0==t?e.val():e.val(t)},_onClick:function(t){t.button||this.isDisabled()||this.setMod("focused","yes")
},_onChange:function(t){t.target.checked?this.setMod("checked","yes"):this.delMod("checked")}},{live:function(){return this.liveBindTo("checkbox","click",function(t){this._onClick(t)
}).liveBindTo("checkbox","change",function(t){this._onChange(t)}).liveBindTo("checkbox","focusin focusout",function(t){this.setMod("focused","focusin"==t.type?"yes":"")
}),!1}}),BEM.HTML.decl("b-form-checkbox",{onBlock:function(t){var e=t.param("checkboxAttrs")||{};t.js(!0).mix(t.mod("size")?"":[{block:"b-form-checkbox",mods:{size:"m"}}]).tag("span").tParam("checkboxAttrs",$.extend(e||{},{id:t.param("id")||e.id||$.identify(),checked:t.mod("checked")?"checked":void 0,disabled:t.mod("disabled")?"disabled":void 0})).beforeContent({elem:"inner",content:[{elem:"checkbox",attrs:t.tParam("checkboxAttrs")},{elem:"bg"}]})
},onElem:{label:function(t){t.tag("label").attr("for",t.tParam("checkboxAttrs").id)},checkbox:function(t){t.tag("input").attrs($.extend(t.attrs(),{type:"checkbox"}))
},bg:function(t){t.tag("i").content({elem:"tick"})},tick:function(t){t.tag("i")},inner:function(t){t.tag("span")
}}})),_borschik("-X2f-4NCE97fyQyR29pNg7C9cp0")&&!function(t){var e=t.event.special.leftclick={setup:function(){t(this).bind("click",e.handler)
},teardown:function(){t(this).unbind("click",e.handler)},handler:function(e){e.button||(e.type="leftclick",t.event.handle.apply(this,arguments),e.type="click")
}}}(jQuery);var i18n=i18n||{};!function(t){function e(t){return"string"==typeof t&&(t={block:t}),t.block+(t.elem?u+t.elem:"")+(t.modName?c+t.modName+c+t.modVal:"")
}function n(t){var e={};return t.split(u).forEach(function(t,n){var i=[n?"elem":"block","mod","val"];
t.split(c).forEach(function(t,n){e[i[n]]=t})}),e}function i(t){return t?a.push(t):!1}function r(){return a.length&&a.pop()
}function o(){this._lang="",this._prj="lego",this._keyset="",this._key=""}var s={},a=[],c="_",u="__",l="ru";
o.prototype={lang:function(t){return this._lang=t,this},project:function(t){return this._prj=t,this},keyset:function(t,n){return n&&i(this._keyset),this._keyset=e(t),this
},key:function(t){return this._key=t,this},decl:function(t){var e=n(this._keyset),i="i-tanker"===e.block?"tanker":this._prj,r=e.elem||this._keyset,o=this._key;
i=i18n[i]||(i18n[i]={}),r=i[r]||(i[r]={}),r[o]="function"==typeof t?t:function(){return t};var a=s[this._lang]||(s[this._lang]={}),c=a[this._keyset]||(a[this._keyset]={});
c[o]=t},val:function(t,e){var n=s[this._lang]&&s[this._lang][this._keyset];if(!n)return console&&console.log&&console.log("[Error] keyset: "+this._keyset+" key: "+this._key+" (lang: "+this._lang+")"),"";
if(n=n[this._key],!n)return"";try{return"string"==typeof n?n:e?n.call(e,t):n.call(this,t)}catch(i){throw"[Error] keyset: "+this._keyset+" key: "+this._key+" (lang: "+this._lang+")"
}},_c:function(){return s}},t.I18N=function(t){var e=function(t,n,i){return e.keyset(t).key(n,i)};return e.project=function(t){return this._i18n.project(t),this
},e.keyset=function(t){return this._i18n.keyset(t,!0),this},e.key=function(t,n){var i,o,s=this._i18n;
return s.lang(this._lang).key(t),i=s.val.call(s,n,e),o=r(),o&&s.keyset(o,!1),i},e.decl=function(t,e,n){var i,r=this._i18n;
n||(n={}),n.lang&&r.lang(n.lang),r.keyset(t);for(i in e)e.hasOwnProperty(i)&&r.key(i).decl(e[i]);return this
},e.lang=function(t){return"undefined"!=typeof t&&(this._lang=t),this._lang},e._i18n=t,e._lang=l,e}(new o),BEM=this.BEM=t
}("undefined"==typeof BEM?{}:BEM),BEM.I18N.decl("b-foot",{about:"О компании",advert:"Реклама",agreement:"Пользовательское соглашение",beta:"β-версия","copyright-notice":"",design:"Дизайн","design-artlebedev":"Студия Артемия Лебедева","design-artlebedev-url":"http://www.artlebedev.ru",mobile:"Мобильная версия","privacy-policy":"","services-button-value":"Перейти",stat:"Статистика","terms-of-service":"",termsofuse:"Лицензия на поиск",vacancies:"Вакансии","yandex-is-local":"Яндекс локален","yandex-is-not-local":"Как сделать Яндекс локальным"},{lang:"ru"}),BEM.I18N.decl("b-head-logo",{yandex:"Яндекс"},{lang:"ru"}),BEM.I18N.decl("i-services",{404:"404",access:"Доступ",admins:"Админы",adresa:"Адреса",advertising:"Реклама",afisha:"Афиша",all:"Все сервисы",api:"API",appsearch:"Поиск приложений",auto:"Авто",aziada:"Азиада",ba:"Баян",backapv:"Партнер Я.Карт",balance:"Баланс",bar:"Бар","bar-ie":"Бар для ИЕ","bar-ie9":"Бар для ИЕ9",bayan:"Баннеры Яндекса",blogmon:"Блогмонитор",blogs:"Блоги",bond:"Брак",books:"Книги",calendar:"Календарь",captcha:"ой...",cards:"Открытки",catalogwdgt:"Каталог виджетов",center:"Интранет",chrome:"Хром с поиском Яндекса",city:"Города",cityday:"День города",collection:"Коллекция",company:"Компания",contest:"Contest",desktop:"Персональный поиск",diary:"Этушка",direct:"Директ","direct.market":"Маркет",disk:"Диск",doc:"Документация",ege:"ЕГЭ",expert:"Эксперт",feedback:"Обратная связь",ff:"ФФ с поиском Яндекса",fotki:"Фотки",games:"Игрушки",gap:"Планировщик отсутствий",geocontext:"Геоконтекст",goroda:"Города",help:"Помощь",i:"Мои сервисы",ie:"ИЕ с поиском Яндекса",images:"Картинки","images-com":"Картинки",interests:"Интересы",internet:"Интернет","intranet-passport":"Внутренний паспорт",invite:"Переговорки",jabber:"Джаббер","jams-arm":"АРМ экспертов Яндекс.Пробок",jing:"Джинг",jira:"Jira",job:"Job-jira",keyboard:"Клавиатура",kraski:"Краски",kuda:"Куда все идут",large:"Яндекс для слабовидящих",legal:"Правовые документы",lego:"Лего",lenta:"Лента",libra:"Библиотека",literacy:"Неделя борьбы за грамотность",local:"Локальная сеть",lost:"Незабудки",love:"День взаимного тяготения — 13 августа",lunapark:"Лунапарк",mail:"Почта",maillists:"Рассылки",maps:"Карты","maps-wiki":"Народная карта",market:"Маркет","market.advertising":"Маркет",metrika:"Метрика",metro:"Метро",mobile:"Мобильный",moikrug:"Мой Круг",money:"Деньги",museums:"Дни исторического и культурного наследия",music:"Музыка","music-partner":"Музыка: статистика",nahodki:"Мои находки",nano:"Нано",narod:"Народ",newhire:"Наниматор",news:"Новости",oauth:"Авторизация",online:"Онлайн",openid:"OpenID",opera:"Opera Software",opinion:"Цитаты",otrs:"OTRS",partners:"Рекламная сеть",partnersearch:"Поиск для партнеров",passport:"Паспорт",pdd:"Почта для домена",peoplesearch:"Поиск людей",perevod:"Перевод",planner:"Планировщик",probki:"Пробки",projects:"Проекты",pulse:"блоги: пульс",punto:"Punto switcher",pvo:"Ответы",rabota:"Работа",ramazan:"",rasp:"Расписания",realty:"Недвижимость",referats:"Рефераты",rk:"Есть вопросы?",root:"Яндекс.Олимпиада для Unix администраторов",school:"Школа",search:"Поиск",server:"Сервер",site:"Поиск для сайта",slovari:"Словари",so:"Самооборона",social:"Социализм",soft:"Программы",sport:"Спорт",sprav:"Справочник",staff:"Стафф",start:"Стартовая страница",stat:"Статистика",statface:"Статистика",subs:"Подписки",taxi:"Такси",terms:"Разговорник",tests:"Тесты и опросы",time:"Яндекс.Время",toster:"Тосты",translate:"Перевод",tune:"Настройки",tv:"Телепрограмма",uslugi:"Услуги",video:"Видео","video-com":"Видео",videoteka:"Видеотека",wdgt:"Виджеты",weather:"Погода",webmaster:"Вебмастер",widgets:"Виджеты",wiki:"Вики",wordstat:"Статистика",wow:"Я.ру",www:"Поиск",xmlsearch:"XML",yaca:"Каталог",yamb:"Медийные баннеры",zakladki:"Закладки"},{lang:"ru"}),BEM.I18N.decl("i-tanker__dynamic",{gender:function(t){return function(t){return t[t.gender]
}.call(this,t)},plural:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count,n=e%10,i=e%100;
return 1==n&&11!=i?t.one:n>1&&5>n&&(10>i||i>20)?t.some:t.many}.call(this,t)},plural_adv:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count;
return 0===e?t.none:this.keyset("i-tanker__dynamic").key("plural",{count:t.count,one:t.one,some:t.some,many:t.many})
}.call(this,t)},toggle:function(t){return function(t){return Boolean(t.condition)?t["true"]:t["false"]
}.call(this,t)}},{lang:"ru"}),BEM.I18N.lang("ru")}