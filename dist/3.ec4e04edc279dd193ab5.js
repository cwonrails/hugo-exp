webpackJsonp([3],{1031:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),f=(o(u),n(161)),s=n(1041),p=o(s),d=n(253),y=o(d),m=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),l(t,[{key:"componentWillUnmount",value:function(){console.log("WillUnmount")}},{key:"render",value:function(){var e={Technical:"A natural tendency to consider the mechanics of things.",Visionary:"I seek to capture the vision required to complete tasks.",Passionate:"To continue learning is to keep the mind young; I advocate towards continous growth."};return c("div",{className:"\n          "+p["default"]["home-container"]+"\n        "},void 0,c("div",{className:""+p["default"]["welcome-copy"]},void 0,c("div",{className:""+p["default"]["self-copy"]},void 0,Object.keys(e).map(function(t,n){return c("div",{className:p["default"].item+" "+y["default"].animated+" "+y["default"].fadeInLeft,style:{WebkitAnimationDelay:n+1+"s",WebkitAnimationDuration:"1s"}},t,c("h3",{},void 0,t),c("p",{},void 0,e[t]))}))))}}]),t}(u.Component);t["default"]=(0,f.connect)()(m)},1041:function(e,t){e.exports={"home-container":"_2hUQ84X6DC3wV2SiOXHncQ","welcome-copy":"_3kooRbZxSFyDOkdn_mJPjg","self-copy":"_1e6g9SSbSUjS-LMClxquCl",item:"_2XOcjXfvYAq48mmfg5XUA0"}}});