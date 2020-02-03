(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f5e270f"],{"0220":function(t,e,r){"use strict";var n=r("9899"),a=r.n(n);a.a},"405c":function(t,e,r){},5509:function(t,e,r){"use strict";var n=r("bc9c"),a=r.n(n);a.a},6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("Navbar"),r("br"),r("br"),r("br"),r("div",{staticClass:"row justify-content-center"},[r("router-link",{attrs:{to:"/admin/users/create"}},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[t._v("Add User")])])],1),r("br"),t.isLoading?r("Spinner"):r("table",{staticClass:"table"},[r("thead",{staticClass:"thead-light"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Name")]),r("th",{attrs:{scope:"col"}},[t._v("Email")]),r("th",{attrs:{scope:"col",width:"30"}},[t._v("Role")]),r("th",{attrs:{scope:"col",width:"280"}},[t._v("Action")])])]),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.email))]),e.isAdmin?r("td",[t._v("Admin")]):r("td",[t._v("User")]),t.currentUser.id!==e.id?r("td",[r("router-link",{attrs:{to:"/admin/users/"+e.id}},[r("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"}},[t._v("Edit")])]),e.isAdmin?r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v("Set as user")]):r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v("Set as admin")]),r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteUser({userId:e.id})}}},[t._v("Delete")])],1):r("td")])})),0)])],1)},a=[],s=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=(r("96cf"),r("1da1")),o=r("2f62"),c=r("d178"),u=r("be6c"),d=r("2fa3"),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],p=(r("0220"),r("2877")),f={},v=Object(p["a"])(f,l,b,!1,null,"bd456636",null),h=v.exports;function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"AdminUsers",components:{Navbar:c["a"],Spinner:h},data:function(){return{users:[],isLoading:!0}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].getUsers();case 3:if(e=t.sent,r=e.data,n=e.statusText,"OK"===n){t.next=7;break}throw new Error;case 7:this.users=r.users,this.isLoading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),this.isLoading=!1,d["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 15:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(){return t.apply(this,arguments)}return e}(),toggleUserRole:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.userId,n=e.isAdmin,a=!n,t.prev=2,t.next=5,u["a"].putRole({userId:r});case 5:if(s=t.sent,i=s.statusText,"OK"===i){t.next=9;break}throw new Error(i);case 9:this.users=this.users.map((function(t){return t.id!==r?t:g({},t,{isAdmin:a})})),d["a"].fire({icon:"success",title:"更新權限成功"}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),d["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 16:case"end":return t.stop()}}),t,this,[[2,13]])})));function e(e){return t.apply(this,arguments)}return e}(),deleteUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.userId,t.prev=1,t.next=4,u["a"].deleteUser({userId:r});case 4:if(n=t.sent,a=n.statusText,"OK"===a){t.next=8;break}throw new Error(a);case 8:this.users=this.users.filter((function(t){return t.id!==r})),d["a"].fire({icon:"success",title:"刪除成功"}),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),d["a"].fire({icon:"error",title:"暫時無法取得資料，請稍後再試"});case 15:case"end":return t.stop()}}),t,this,[[1,12]])})));function e(e){return t.apply(this,arguments)}return e}()},computed:g({},Object(o["b"])(["currentUser","isAuthenticated"]))},y=O,w=(r("7713"),Object(p["a"])(y,n,a,!1,null,"2aac6b04",null));e["default"]=w.exports},7713:function(t,e,r){"use strict";var n=r("405c"),a=r.n(n);a.a},9899:function(t,e,r){},bc9c:function(t,e,r){},be6c:function(t,e,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};e["a"]={getUsers:function(){return n["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(a())}})},getUser:function(t){var e=t.userId;return n["b"].get("admin/users/".concat(e),{headers:{Authorization:"Bearer ".concat(a())}})},postUser:function(t){var e=t.formData;return n["b"].post("/admin/users/create",e,{headers:{Authorization:"Bearer ".concat(a())}})},putUser:function(t){var e=t.formData,r=t.userId;return n["b"].put("/admin/users/edit/".concat(r),e,{headers:{Authorization:"Bearer ".concat(a())}})},putRole:function(t){var e=t.userId;return n["b"].put("/admin/users/".concat(e,"/put-role"),{},{headers:{Authorization:"Bearer ".concat(a())}})},deleteUser:function(t){var e=t.userId;return n["b"].delete("/admin/users/".concat(e),{headers:{Authorization:"Bearer ".concat(a())}})}}},d178:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/chatroom"}},[t._v("Chatroom")]),t._m(0),r("div",{staticClass:"navbar-collapse collapse navbar-center",attrs:{id:"navbarSupportedContent"}},[r("div",{staticClass:"ml-auto d-flex align-items-center navbar-collapse-center"},[t.currentUser.isAdmin?r("router-link",{attrs:{id:"admin",to:"/admin/users"}},[r("h4",[t._v("管理員後台")])]):t._e(),r("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{id:"logout",type:"button"},on:{click:t.logout}},[r("h5",[t._v("登出")])]),r("a",{attrs:{target:"_blank",href:"https://github.com/andy922200/chatroom-nodejs-vue"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)],1)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],s=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=r("2f62"),o=r("2fa3");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"Navbar",computed:u({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin"),o["a"].fire({icon:"success",title:"成功登出"})}}},l=d,b=(r("5509"),r("2877")),p=Object(b["a"])(l,n,a,!1,null,"3362cca6",null);e["a"]=p.exports},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),i=r("ae40"),o=s("map"),c=i("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4f5e270f.5d678870.js.map