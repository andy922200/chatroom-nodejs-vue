(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-785e94a5"],{"0220":function(t,e,r){"use strict";var n=r("9899"),o=r.n(n);o.a},2375:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],a=(r("0220"),r("2877")),i={},c=Object(a["a"])(i,n,o,!1,null,"bd456636",null);e["a"]=c.exports},2594:function(t,e,r){"use strict";var n=r("5831"),o=r.n(n);o.a},5831:function(t,e,r){},6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("Navbar"),r("br"),r("br"),r("br"),r("div",{staticClass:"row justify-content-center"},[r("router-link",{attrs:{to:"/admin/users/create"}},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit",id:"addUser"}},[t._v("Add User")])])],1),r("br"),r("div",{staticClass:"table-responsive-sm"},[t.isLoading?r("Spinner"):r("table",{staticClass:"table"},[r("thead",{staticClass:"thead-light"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Name")]),r("th",{attrs:{scope:"col",width:"30"}},[t._v("Role")]),r("th",{attrs:{scope:"col",width:"280"}},[t._v("Action")])])]),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.name))]),e.isAdmin?r("td",[t._v("Admin")]):r("td",[t._v("User")]),t.currentUser.id!==e.id?r("td",[r("router-link",{attrs:{to:"/admin/users/"+e.id}},[r("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"}},[t._v("Edit")])]),e.isAdmin?r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v("Set as user")]):r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v("Set as admin")]),r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteUser({userId:e.id})}}},[t._v("Delete")])],1):r("td")])})),0)])],1)],1)},o=[],a=(r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a"),r("b64b"),r("e439"),r("dbb4"),r("53ca")),i=r("ade3"),c=r("1da1"),s=(r("d81d"),r("4de4"),r("d3b7"),r("2f62")),u=r("d178"),l=r("be6c"),f=r("2fa3"),d=r("2375");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var f={};function d(){}function h(){}function p(){}var b={};s(b,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&r.call(g,o)&&(b=g);var y=p.prototype=d.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,c,s){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,d=f.value;return d&&"object"==Object(a["a"])(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,s(y,"constructor",p),s(p,"constructor",h),h.displayName=s(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(O.prototype),s(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var b={name:"AdminUsers",components:{Navbar:u["a"],Spinner:d["a"]},data:function(){return{users:[],isLoading:!0}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(c["a"])(v().mark((function e(){var r,n,o;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getUsers();case 3:if(r=e.sent,n=r.data,o=r.statusText,"OK"===o){e.next=7;break}throw new Error;case 7:t.users=n.users,t.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,f["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggleUserRole:function(t){var e=this;return Object(c["a"])(v().mark((function r(){var n,o,a,i,c;return v().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.userId,o=t.isAdmin,a=!o,r.prev=2,r.next=5,l["a"].putRole({userId:n});case 5:if(i=r.sent,c=i.statusText,"OK"===c){r.next=9;break}throw new Error(c);case 9:e.users=e.users.map((function(t){return t.id!==n?t:p(p({},t),{},{isAdmin:a})})),f["a"].fire({icon:"success",title:"更新權限成功"}),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](2),f["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[2,13]])})))()},deleteUser:function(t){var e=this;return Object(c["a"])(v().mark((function r(){var n,o,a;return v().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.userId,r.prev=1,r.next=4,l["a"].deleteUser({userId:n});case 4:if(o=r.sent,a=o.statusText,"OK"===a){r.next=8;break}throw new Error(a);case 8:e.users=e.users.filter((function(t){return t.id!==n})),f["a"].fire({icon:"success",title:"刪除成功"}),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](1),f["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()}},computed:p({},Object(s["b"])(["currentUser","isAuthenticated"]))},m=b,g=(r("d194"),r("2877")),y=Object(g["a"])(m,n,o,!1,null,"2f86a56c",null);e["default"]=y.exports},9899:function(t,e,r){},b8c0:function(t,e,r){},be6c:function(t,e,r){"use strict";var n=r("2fa3"),o=function(){return localStorage.getItem("token")};e["a"]={getUsers:function(){return n["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(o())}})},getUser:function(t){var e=t.userId;return n["b"].get("admin/users/".concat(e),{headers:{Authorization:"Bearer ".concat(o())}})},postUser:function(t){var e=t.formData;return n["b"].post("/admin/users/create",e,{headers:{Authorization:"Bearer ".concat(o())}})},putUser:function(t){var e=t.formData,r=t.userId;return n["b"].put("/admin/users/edit/".concat(r),e,{headers:{Authorization:"Bearer ".concat(o())}})},putRole:function(t){var e=t.userId;return n["b"].put("/admin/users/".concat(e,"/put-role"),{},{headers:{Authorization:"Bearer ".concat(o())}})},deleteUser:function(t){var e=t.userId;return n["b"].delete("/admin/users/".concat(e),{headers:{Authorization:"Bearer ".concat(o())}})}}},d178:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/chatroom"}},[t._v("Chatroom")]),t._m(0),r("div",{staticClass:"navbar-collapse collapse navbar-center",attrs:{id:"navbarSupportedContent"}},[r("div",{staticClass:"ml-auto d-flex align-items-center navbar-collapse-center"},[t.currentUser.isAdmin?r("router-link",{attrs:{id:"admin",to:"/admin/users"}},[r("h4",[t._v("管理員後台")])]):t._e(),r("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{id:"logout",type:"button"},on:{click:t.logout}},[r("h5",[t._v("登出")])]),r("a",{attrs:{target:"_blank",href:"https://github.com/andy922200/chatroom-nodejs-vue"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)],1)])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],a=(r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("ade3")),i=(r("b0c0"),r("2f62")),c=r("2fa3");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"Navbar",computed:u({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$socket.emit("offlineHint",this.currentUser.name),this.$store.commit("revokeAuthentication"),this.$router.push("/signin"),c["a"].fire({icon:"success",title:"成功登出"})}}},f=l,d=(r("2594"),r("2877")),h=Object(d["a"])(f,n,o,!1,null,"c0727d0c",null);e["a"]=h.exports},d194:function(t,e,r){"use strict";var n=r("b8c0"),o=r.n(n);o.a},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),i=r("ae40"),c=a("map"),s=i("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-785e94a5.9cfa1353.js.map