(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,r){},18:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(5),l=r(4),u=r(1),s=(r(14),r(16),function(t){var e=t.favouriteComponent;return a.a.createElement(a.a.Fragment,null,t.movies.map(function(r,n){return a.a.createElement("div",{className:"image-container d-flex justify-content-start m-3"},a.a.createElement("img",{src:r.Poster,alt:"movie"}),a.a.createElement("div",{onClick:function(){return t.handleFavouritesClick(r)},className:"overlay d-flex align-items-center justify-content-center"},a.a.createElement(e,null)))}))}),f=function(t){return a.a.createElement("div",{className:"col"},a.a.createElement("h1",null,t.heading))},h=function(t){return a.a.createElement("div",{className:"col col-sm-4"},a.a.createElement("input",{className:"form-control",value:t.value,onChange:function(e){return t.setSearchValue(e.target.value)},placeholder:"Type to search..."}))},v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"mr-2"},"Remove from favourites"),a.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),a.a.createElement("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})))},m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"mr-2"},"Add to Favourites"),a.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})))};function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function h(){}function v(){}function m(){}var d={};l(d,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==e&&r.call(g,o)&&(d=g);var w=m.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(b.prototype),l(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(w),l(w,c,"Generator"),l(w,o,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var d=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)([]),d=Object(u.a)(i,2),y=d[0],g=d[1],w=Object(n.useState)(""),E=Object(u.a)(w,2),b=E[0],x=E[1],L=function(){var t=Object(l.a)(p().mark(function t(e){var r,n,a;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://www.omdbapi.com/?s=".concat(e,"&apikey=263d22d8"),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:(a=t.sent).Search&&o(a.Search);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){L(b)},[b]),Object(n.useEffect)(function(){var t=JSON.parse(localStorage.getItem("react-movie-app-favourites"));t&&g(t)},[]);var j=function(t){localStorage.setItem("react-movie-app-favourites",JSON.stringify(t))};return a.a.createElement("div",{className:"container-fluid movie-app"},a.a.createElement("div",{className:"row d-flex align-items-center mt-4 mb-4"},a.a.createElement(f,{heading:"Movies"}),a.a.createElement(h,{searchValue:b,setSearchValue:x})),a.a.createElement("div",{className:"row"},a.a.createElement(s,{movies:r,handleFavouritesClick:function(t){var e=[].concat(Object(c.a)(y),[t]);g(e),j(e)},favouriteComponent:m})),a.a.createElement("div",{className:"row d-flex align-items-center mt-4 mb-4"},a.a.createElement(f,{heading:"Favourites"})),a.a.createElement("div",{className:"row"},a.a.createElement(s,{movies:y,handleFavouritesClick:function(t){var e=y.filter(function(e){return e.imdbID!==t.imdbID});g(e),j(e)},favouriteComponent:v})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root"))},6:function(t,e,r){t.exports=r(18)}},[[6,2,1]]]);
//# sourceMappingURL=main.1c28da63.chunk.js.map