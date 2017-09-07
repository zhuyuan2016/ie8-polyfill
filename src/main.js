//fix font-face problem
var head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
style.styleSheet.cssText = ':before,:after{content:none !important}';
head.appendChild(style);
setTimeout(function(){
    head.removeChild(style);
}, 0);

//require respond.js which would work for IE6~IE8