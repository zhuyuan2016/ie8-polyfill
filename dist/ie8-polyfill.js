var head=document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.styleSheet.cssText=":before,:after{content:none !important}",head.appendChild(style),setTimeout(function(){head.removeChild(style)},0);var meta=document.createElement("meta");meta.httpEquiv="X-UA-Compatiable",meta.content="IE=edge, chrome=1",head.appendChild(meta),function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,r=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,a),t=42===i.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var a=[],r=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=r();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},o=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=i,n.queue=a,n.unsupportedmq=o,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s,l,m,c=e.document,d=c.documentElement,h=[],u=[],f=[],p={},g=c.getElementsByTagName("head")[0]||d,y=c.getElementsByTagName("base")[0],v=g.getElementsByTagName("link"),x=function(){var e,t=c.createElement("div"),n=c.body,a=d.style.fontSize,r=n&&n.style.fontSize,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=c.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,i?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,r&&(n.style.fontSize=r),e=m=parseFloat(e)},E=function(t){var n="clientWidth",a=d[n],r="CSS1Compat"===c.compatMode&&a||c.body[n]||a,i={},o=v[v.length-1],p=(new Date).getTime();if(t&&s&&30>p-s)return e.clearTimeout(l),void(l=e.setTimeout(E,30));s=p;for(var y in h)if(h.hasOwnProperty(y)){var S=h[y],w=S.minw,b=S.maxw,C=null===w,T=null===b;w&&(w=parseFloat(w)*(w.indexOf("em")>-1?m||x():1)),b&&(b=parseFloat(b)*(b.indexOf("em")>-1?m||x():1)),S.hasquery&&(C&&T||!(C||r>=w)||!(T||b>=r))||(i[S.media]||(i[S.media]=[]),i[S.media].push(u[S.rules]))}for(var F in f)f.hasOwnProperty(F)&&f[F]&&f[F].parentNode===g&&g.removeChild(f[F]);f.length=0;for(var M in i)if(i.hasOwnProperty(M)){var $=c.createElement("style"),z=i[M].join("\n");$.type="text/css",$.media=M,g.insertBefore($,o.nextSibling),$.styleSheet?$.styleSheet.cssText=z:$.appendChild(c.createTextNode(z)),f.push($)}},S=function(e,t,a){var r=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),i=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!i&&a;t.length&&(t+="/"),l&&(i=1);for(var m=0;i>m;m++){var c,d,f,p;l?(c=a,u.push(s(e))):(c=r[m].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&s(RegExp.$2))),p=(f=c.split(",")).length;for(var g=0;p>g;g++)d=f[g],o(d)||h.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},w=function(){if(a.length){var t=a.shift();i(t.href,function(n){S(n,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){w()},0)})}},b=function(){for(var t=0;t<v.length;t++){var n=v[t],r=n.href,i=n.media,o=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&o&&!p[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(S(n.styleSheet.rawCssText,r,i),p[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!y||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===r.substring(0,2)&&(r=e.location.protocol+r),a.push({href:r,media:i})))}w()};b(),n.update=b,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e,t){function n(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=f[e[h]];return t||(t={},u++,e[h]=u,f[u]=t),t}function r(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=a(n));var i;return!(i=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||c.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return p.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,t.frag)}function o(e){e||(e=t);var n=a(e);return!p.shivCSS||s||n.hasCSS||(n.hasCSS=!!function(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(e,n),e}var s,l,m=e.html5||{},c=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",u=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=!0,l=!0}}();var p={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3-pre",shivCSS:!1!==m.shivCSS,supportsUnknownElements:l,shivMethods:!1!==m.shivMethods,type:"default",shivDocument:o,createElement:r,createDocumentFragment:function(e,r){if(e||(e=t),l)return e.createDocumentFragment();for(var i=(r=r||a(e)).frag.cloneNode(),o=0,s=n(),m=s.length;m>o;o++)i.createElement(s[o]);return i},addElements:function(e,t){var n=p.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),p.elements=n+" "+e,o(t)}};e.html5=p,o(t),"object"==typeof module&&module.exports&&(module.exports=p)}("undefined"!=typeof window?window:this,document);