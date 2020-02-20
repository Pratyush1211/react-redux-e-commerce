(this["webpackJsonpreact-redux-e-commerce"]=this["webpackJsonpreact-redux-e-commerce"]||[]).push([[0],{114:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),u=r.n(c),s=r(67),o=r(18),i=r(26),d=r(150),l=r(151),f=r(146),b=r(62),m=r(61),p=r(78),h=r.n(p),O=r(17),j=r(13),v=r(8),g=r(6),k={users:[],loading:!1,hasLoaded:!1,errorMessage:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case g.a.setUsers:return Object(v.a)({},e,{users:n.users});case g.a.addUsers:return Object(v.a)({},e,{users:[].concat(Object(j.a)(n.users),Object(j.a)(e.users))});case g.a.fetchStart:return Object(v.a)({},e,{loading:!0});case g.a.fetchEnd:return Object(v.a)({},e,{errorMessage:n&&n.errorMessage||"",loading:!1,hasLoaded:!0});default:return e}},E=r(21),w=r(32),x={orders:[],loading:!1,hasLoaded:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case E.a.setOrders:return Object(v.a)({},e,{orders:n.orders});case E.a.addOrder:return Object(v.a)({},e,{orders:[n.order].concat(Object(j.a)(e.orders))});case E.a.updateOrders:return Object(v.a)({},e,{orders:Object(w.a)(n.orders,e.orders)});case E.a.fetchStart:return Object(v.a)({},e,{loading:!0});case E.a.fetchEnd:return Object(v.a)({},e,{loading:!1,hasLoaded:!0});default:return e}},I=r(37),M={books:[],loading:!1,hasLoaded:!1,errorMessage:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case I.a.setBooks:return Object(v.a)({},e,{books:n.books});case I.a.addBooks:return Object(v.a)({},e,{books:[].concat(Object(j.a)(n.books),Object(j.a)(e.books))});case I.a.updateBooks:return Object(v.a)({},e,{books:Object(w.a)(n.books,e.books)});case I.a.deleteBooks:return Object(v.a)({},e,{books:e.books.filter((function(e){var t=e.id;return!n.books.find((function(e){return e.id===t}))}))});case I.a.fetchStart:return Object(v.a)({},e,{loading:!0});case I.a.fetchEnd:return Object(v.a)({},e,{loading:!1,hasLoaded:!0});default:return e}},U=r(49),B={items:[],loading:!1,hasLoaded:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case U.a.setItems:return Object(v.a)({},e,{items:n.items});case U.a.addItem:var a=e.items,c=a.find((function(e){return e.id===n.item.id}));return c?Object(v.a)({},e,{items:a.map((function(e){return e.id===c.id?Object(v.a)({},c,{quantity:c.quantity+1}):e}))}):Object(v.a)({},e,{items:[].concat(Object(j.a)(e.items),[Object(v.a)({},n.item,{quantity:1})])});case U.a.removeItem:var u=e.items,s=u.find((function(e){return e.id===n.item.id}));return s&&s.quantity>1?Object(v.a)({},e,{items:u.map((function(e){return e.id===s.id?Object(v.a)({},s,{quantity:s.quantity-1}):e}))}):Object(v.a)({},e,{items:u.filter((function(e){return e.id!==n.item.id}))});default:return e}},C=r(41),q={me:null,role:g.b.unAuthenticated,loading:!1,hasLoaded:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case C.a.set:return Object(v.a)({},e,{me:n.me,role:n.me.role});case C.a.clear:return q;default:return e}},R=Object(O.combineReducers)({users:y,orders:S,books:L,cartItems:N,me:z}),J={key:"root",storage:h.a,whitelist:["me","cartItems"]},A=Object(m.a)(J,R),D=Object(b.a)({reducer:A,middleware:Object(b.b)({serializableCheck:!1})}),P=D,W=Object(m.b)(D),K=r(141),Y=r(153),T=r(145),$=r(44),F=r(47),G=function(){var e=Object(o.g)().pathname,t=Object(o.f)().push,r=Object($.b)().role;return a.a.createElement(K.a,null,a.a.createElement(Y.a,{variant:"scrollable",value:"/".concat(e.split("/")[1])||!1,onChange:function(e,r){return t(r)}},Object.keys(F.a).filter((function(e){return F.a[e].roles.includes(r)&&!F.a[e].noNav})).map((function(e){return a.a.createElement(T.a,{key:e,value:e,label:F.a[e].name})}))))},H=r(35),Q=r(56),V=r(155),X=r(152),Z=r(148),_=r(149),ee=r(84),te=function(e){var t=e.children;Object(Q.d)();var r=Object(Q.c)(),c=r.authenticated,u=r.authenticate,s=r.errorMessage,o=r.loading,i=Object(n.useState)(""),d=Object(H.a)(i,2),l=d[0],b=d[1],m=Object(n.useState)(""),p=Object(H.a)(m,2),h=p[0],O=p[1];return c?a.a.createElement("div",null,t):a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(l,h)}},a.a.createElement(V.a,{open:!!o},a.a.createElement(f.a,null)),a.a.createElement(X.a,{type:"text",label:"Username",fullWidth:!0,value:l,onChange:function(e){return b(e.target.value)},disabled:!!o,required:!0}),a.a.createElement(X.a,{type:"password",label:"Password",fullWidth:!0,value:h,onChange:function(e){return O(e.target.value)},disabled:!!o,required:!0}),a.a.createElement(Z.a,{type:"submit"},"Login"),s&&a.a.createElement(_.a,{variant:"h5",color:"error"},s),a.a.createElement("div",null,a.a.createElement("h4",null,"Initial Users"),ee.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("div",null,"Username: ",e.username),a.a.createElement("div",null,"Password: ",e.password),a.a.createElement("div",null,"Role: ",e.role),a.a.createElement("br",null))}))))},re=r(85),ne=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(5)]).then(r.bind(null,190))})),ae=Object(n.lazy)((function(){return r.e(6).then(r.bind(null,187))})),ce=Object(n.lazy)((function(){return r.e(9).then(r.bind(null,188))})),ue=Object(n.lazy)((function(){return r.e(7).then(r.bind(null,191))})),se=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,189))})),oe=Object(n.lazy)((function(){return r.e(8).then(r.bind(null,192))})),ie=function(){return a.a.createElement(i.a,{store:P},a.a.createElement(re.a,{loading:null,persistor:W},a.a.createElement(d.a,null,a.a.createElement(s.a,{basename:"/react-redux-e-commerce"},a.a.createElement(G,null),a.a.createElement(l.a,null),a.a.createElement(n.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/",exact:!0,component:ne}),a.a.createElement(te,null,a.a.createElement(o.a,{path:"/book-list",exact:!0,component:oe}),a.a.createElement(o.a,{path:"/users",exact:!0,component:ae}),a.a.createElement(o.a,{path:"/users/:userId/orders",exact:!0,component:se}),a.a.createElement(o.a,{path:"/logout",exact:!0,component:ce}),a.a.createElement(o.a,{path:"/my-orders",exact:!0,component:ue}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),function(e){e.setOrders="orders/setOrders",e.addOrder="orders/addOrder",e.updateOrders="oders/updateOrds",e.fetchStart="orders/fetchStart",e.fetchEnd="orders/fetchEnd"}(n||(n={})),function(e){e.created="created",e.dispatched="dispatched",e.canceled="canceled",e.completed="completed"}(a||(a={}))},32:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a=function(e,t){return t.map((function(t){return e.find((function(e){return t.id===e.id}))||t}))}},37:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.setBooks="books/setBooks",e.updateBooks="books/updateBooks",e.addBooks="books/addBooks",e.deleteBooks="books/deleteBooks",e.fetchStart="books/fetchStart",e.fetchEnd="books/fetchEnd"}(n||(n={}))},41:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.set="me/set",e.clear="me/clear"}(n||(n={}))},44:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var n=r(26),a=r(0),c=r(51),u=r(18),s=function(){return Object(n.c)((function(e){return e.me}))},o=function(){var e=function(){var e=Object(n.b)();return{clearMe:Object(a.useCallback)((function(){return e(Object(c.a)())}),[e])}}().clearMe,t=Object(u.f)().push;Object(a.useEffect)((function(){t("/"),e()}),[e,t])}},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(6),a={"/":{name:"Books",roles:[n.b.unAuthenticated,n.b.client,n.b.admin],href:function(){return"/"}},"/book-list":{name:"Book List",roles:[n.b.admin],href:function(){return"/book-list"}},"/my-orders":{name:"My Orders",roles:[n.b.client],href:function(){return"/my-orders"}},"/my-orders/:orderId":{name:"My Orders",roles:[n.b.client],noNav:!0,href:function(e){return"/my-orders/".concat(e)}},"/users":{name:"User List",roles:[n.b.admin],href:function(){return"/users"}},"/users/:userId/orders":{name:"My Orders",roles:[n.b.admin,n.b.client],noNav:!0,href:function(e){return"/users/".concat(e,"/orders")}},"/users/:userId/orders/:orderId":{name:"My Orders",roles:[n.b.admin,n.b.client],noNav:!0,href:function(e,t){return"/users/".concat(e,"/orders/").concat(t)}},"/login":{name:"Login",roles:[n.b.unAuthenticated],href:function(){return"/logout"}},"/logout":{name:"Logout",roles:[n.b.admin,n.b.client],href:function(){return"/logout"}}}},49:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.setItems="cart/setCart",e.addItem="cart/addItem",e.removeItem="cart/removeItem"}(n||(n={}))},51:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r(41),a=function(e){return{type:n.a.set,payload:{me:e}}},c=function(){return{type:n.a.clear}}},56:function(e,t,r){"use strict";var n=r(35),a=r(0),c=r(26),u=r(15),s=r.n(u),o=r(25),i=r(6),d=r(64),l=Object(d.a)("users"),f=l.getItems,b=l.createItems,m=f,p=b,h=function(){var e=Object(o.a)(s.a.mark((function e(t,r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:if(n=e.sent,!(a=n.find((function(e){return e.username===t&&e.password===r})))){e.next=6;break}return e.abrupt("return",a);case 6:throw new Error("Incorrect credentials");case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),O=r(51),j=[{id:"1",name:"Yagami",surname:"Light",username:"Kira",password:"DeathNode",role:i.b.admin},{id:"2",name:"User",surname:"Some",username:"simple",password:"123",role:i.b.client}],v=function(e){return{type:i.a.setUsers,payload:{users:e}}},g=function(){return{type:i.a.fetchStart}},k=function(e){return{type:i.a.fetchEnd,payload:{errorMessage:e}}},y=r(18),E=r(44),w=r(69);r.d(t,"d",(function(){return x})),r.d(t,"c",(function(){return S})),r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return M}));var x=function(e){var t=Object(c.b)(),r=Object(c.c)((function(e){return e.users})),n=r.users,u=r.loading,i=r.hasLoaded,d=r.errorMessage;return Object(a.useEffect)((function(){i&&!e||u||t(function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,m();case 4:if(0!==(r=e.sent).length){e.next=10;break}return e.next=8,p(j);case 8:n=e.sent,t(v(n));case 10:r&&t(v(r)),t(k()),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(k());case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}())}),[i,u,e,t]),{users:n,loading:u,hasLoaded:i,errorMessage:d}},S=function(){var e=Object(c.b)(),t=Object(a.useState)(!1),r=Object(n.a)(t,2),u=r[0],i=r[1],d=Object(c.c)((function(e){return e.me})).me,l=Object(c.c)((function(e){return e.users})),f=l.errorMessage,b=l.loading,m=Object(y.f)(),p=Object(a.useMemo)((function(){return!!d}),[d]),j=Object(a.useCallback)((function(t,r){i(!0),e(function(e,t){return function(){var r=Object(o.a)(s.a.mark((function r(n){var a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(g()),r.prev=1,r.next=4,h(e,t);case 4:a=r.sent,n(Object(O.b)(a)),n(k()),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),n(k(r.t0.message));case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))}),[e]);return Object(a.useEffect)((function(){u&&(i(!1),m.push("/"))}),[u,m]),{authenticated:p,authenticate:j,errorMessage:f,loading:b}},I=function(){var e=Object(E.b)().me,t=Object(y.f)().push;Object(a.useEffect)((function(){e&&e.role!==i.b.admin&&t("/")}),[e,t])},M=function(){var e=Object(E.b)().role;return function(t,r){return Object(w.b)(e,t,r)}}},6:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),function(e){e.setUsers="users/setUsers",e.updateUsers="users/updateUsers",e.removeUsers="users/removeUsers",e.addUsers="users/addUsers",e.fetchStart="users/fetchStart",e.fetchEnd="users/fetchEnd"}(n||(n={})),function(e){e.admin="admin",e.client="client",e.unAuthenticated="unAuthenticated"}(a||(a={}))},64:function(e,t,r){"use strict";var n=r(13),a=r(9),c=r(8),u=r(15),s=r.n(u),o=r(25),i=r(32),d=function(e,t){return JSON.parse(localStorage.getItem(e)||t)},l=function(e,t){var r=d(e,t);return{get:function(){return r||(r=d(e,t))},set:function(t){r=t,function(e,t){localStorage.setItem(e,JSON.stringify(t))}(e,t)}}},f=r(65);r.d(t,"a",(function(){return b}));var b=function(e){var t=l(e,JSON.stringify({items:{},keys:[]}));return{getItems:function(){var e=Object(o.a)(s.a.mark((function e(){var r,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.get(),n=r.items,a=r.keys,e.abrupt("return",a.map((function(e){return n[e]})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createItems:function(){var e=Object(o.a)(s.a.mark((function e(r){var u,o,d,l,b,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(1e3);case 2:return u=t.get(),o=u.keys,d=u.items,l=r.map((function(e){return Object(c.a)({},e,{id:Object(f.uuid)()})})),b=l.reduce((function(e,t){return Object(c.a)({},e,Object(a.a)({},t.id,t))}),{}),m={keys:[].concat(Object(n.a)(o),Object(n.a)(Object.keys(b))),items:Object(c.a)({},d,{},b)},t.set(m),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateItems:function(){var e=Object(o.a)(s.a.mark((function e(r){var n,u,o,d,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(1e3);case 2:return n=t.get(),u=n.keys,o=n.items,d=r.reduce((function(e,t){return Object(c.a)({},e,Object(a.a)({},t.id||"",t))}),{}),l={keys:u,items:Object(c.a)({},o,{},d)},t.set(l),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteItems:function(){var e=Object(o.a)(s.a.mark((function e(r){var n,u,o,d,l,f,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(1e3);case 2:return n=t.get(),u=n.keys,o=n.items,d=r.map((function(e){return o[e]})),l=u.filter((function(e){return!r.includes(e)})),f=l.reduce((function(e,t){return Object(c.a)({},e,Object(a.a)({},t,o[t]))}),{}),b={keys:u,items:f},t.set(b),e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));var n=r(6),a=r(21),c={cancelMyOrder:{userRoles:[n.b.client],orderStatuses:[a.b.created,a.b.dispatched]},adminCancelOrder:{userRoles:[n.b.admin],orderStatuses:[a.b.created,a.b.dispatched]},adminDispatchOrder:{userRoles:[n.b.admin],orderStatuses:[a.b.created]},adminCompleteOrder:{userRoles:[n.b.admin],orderStatuses:[a.b.dispatched]}},u=function(e,t,r){return r.orderStatuses.includes(t)&&r.userRoles.includes(e)}},84:function(e){e.exports=JSON.parse('[{"id":"f44b4a6c-eda1-4eca-a9e5-69df35385a1b","name":"Yagami","surname":"Light","username":"Kira","password":"DeathNode","role":"admin"},{"id":"c22cc178-2522-4ee9-833d-4c835f97680e","name":"User","surname":"Some","username":"simple","password":"123","role":"client"}]')},91:function(e,t,r){e.exports=r(114)}},[[91,1,2]]]);
//# sourceMappingURL=main.c6d25d8a.chunk.js.map