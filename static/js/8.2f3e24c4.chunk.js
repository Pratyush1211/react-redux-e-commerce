(this["webpackJsonpreact-redux-e-commerce"]=this["webpackJsonpreact-redux-e-commerce"]||[]).push([[8],{163:function(e,t,n){"use strict";var a=n(35),o=n(0),r=n(26),i=n(15),c=n.n(i),s=n(25),u=n(37),l=n(64),d=Object(l.a)("books"),p=d.getItems,f=d.createItems,b=d.updateItems,g=d.deleteItems,m=f,h=b,v=g,x=n(166),k=function(e){return{type:u.a.setBooks,payload:{books:e}}},y=function(e){return{type:u.a.updateBooks,payload:{books:e}}},j=function(e){return{type:u.a.deleteBooks,payload:{books:e}}},w=function(){return{type:u.a.fetchStart}},O=function(e){return{type:u.a.fetchEnd,payload:{errorMessage:e}}},C=n(44);n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return E}));var S=function(e){var t=Object(o.useState)(!e),n=Object(a.a)(t,2),i=n[0],u=n[1],l=Object(r.b)(),d=Object(r.c)((function(e){return e.books})),f=d.books,b=d.loading,g=d.hasLoaded,m=d.errorMessage;return Object(o.useEffect)((function(){g&&i||b||(u(!0),l(function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w()),e.prev=1,e.next=4,p();case 4:if(0!==(n=e.sent).length){e.next=8;break}return t(k(x)),e.abrupt("return",t(O()));case 8:n.length>0&&(t(k(n)),t(O())),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t(O(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()))}),[g,b,e,l,i]),{books:f,loading:b,hasLoaded:g,errorMessage:m}},E=function(){var e=Object(r.b)(),t=Object(C.b)().me;return{addBooks:function(t){return e(function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(w()),t.prev=1,t.next=4,m(e);case 4:a=t.sent,n(k(a)),n(O()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),n(O(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},deleteBooks:function(n){return t&&e(function(e,t){return function(){var e=Object(s.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,v(t.map((function(e){return e.id||""})));case 4:a=e.sent,n(j(a)),n(O()),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),n(O(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(0,n))},updateBooks:function(n){return t&&e(function(e,t){return function(){var e=Object(s.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,h(t);case 4:a=e.sent,n(y(a)),n(O()),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),n(O(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(0,n))}}}},166:function(e){e.exports=JSON.parse('[{"title":"The Book of Why","author":"Judea Pearl","publishedDate":"2018-05-15","image":"http://books.google.com/books/content?id=BzM0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":9,"price":8378,"id":"803358d7-176b-467a-82c1-3d2fe70c1b12"},{"title":"The Book","author":"Nicole Howard","publishedDate":"2005","image":"http://books.google.com/books/content?id=4WwdMJKXzhEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":29,"price":8669,"id":"464b74b8-1bae-4a1f-ac43-0c8637fd56b5"},{"title":"Google Chrome","author":"Unknown Author","publishedDate":["2020-02-18","08:35:51.858Z"],"image":"http://books.google.com/books/content?id=8UsqHohwwVYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":47,"price":157,"id":"27dc8475-1c2e-4bba-952a-761c92126f5a"},{"title":"The Coming of the Book","author":"Lucien Febvre","publishedDate":"1997","image":"http://books.google.com/books/content?id=9opxcMjv4TUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":47,"price":5137,"id":"28238f4f-d623-4512-8730-70dd517b51cb"},{"title":"It","author":"Stephen King","publishedDate":"2016-01-05","image":"http://books.google.com/books/content?id=S85NCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":14,"price":5017,"id":"ae2d87e7-fb72-464e-acbd-e895f6b0cce9"},{"title":"The Hunger Games","author":"Suzanne Collins","publishedDate":"2008","image":"http://books.google.com/books/content?id=hlb_sM1AN0gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":56,"price":8009,"id":"20dadc87-598a-4c7e-838a-b5a5dde4373a"},{"title":"Alice\'s Adventures in Wonderland","author":"Lewis Carroll","publishedDate":"1869","image":"http://books.google.com/books/content?id=btIQAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":62,"price":8429,"id":"bce2f2e2-117f-4e13-9d17-87ceca3c1402"},{"title":"The Booklist","author":"Unknown Author","publishedDate":"1906","image":"http://books.google.com/books/content?id=S3RWpOtkvmAC&printsec=frontcover&img=1&zoom=1&source=gbs_api","quantity":89,"price":2747,"id":"f024ae49-979f-41d2-96a5-faba1019eaa7"},{"title":"The ICU Book","author":"Paul L. Marino","publishedDate":"2007","image":"http://books.google.com/books/content?id=OWEmVx9MS74C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":43,"price":9164,"id":"0134a49c-cb0f-422d-a11b-c2df1fbbdd84"},{"title":"The Nature of the Book","author":"Adrian Johns","publishedDate":"1998","image":"http://books.google.com/books/content?id=zobsj8npWeAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","quantity":72,"price":3423,"id":"8ef24bf0-5398-4330-a5cc-78bb3cd3ec0b"}]')},176:function(e,t,n){"use strict";var a=n(2),o=n(1),r=n(0),i=n.n(r),c=(n(5),n(3)),s=n(4),u=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=i.a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,s=e.alignItems,u=void 0===s?"stretch":s,l=e.classes,d=e.className,p=e.component,f=void 0===p?"div":p,b=e.container,g=void 0!==b&&b,m=e.direction,h=void 0===m?"row":m,v=e.item,x=void 0!==v&&v,k=e.justify,y=void 0===k?"flex-start":k,j=e.lg,w=void 0!==j&&j,O=e.md,C=void 0!==O&&O,S=e.sm,E=void 0!==S&&S,W=e.spacing,B=void 0===W?0:W,D=e.wrap,q=void 0===D?"wrap":D,z=e.xl,A=void 0!==z&&z,I=e.xs,M=void 0!==I&&I,_=e.zeroMinWidth,T=void 0!==_&&_,J=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),N=Object(c.a)(l.root,d,g&&[l.container,0!==B&&l["spacing-xs-".concat(String(B))]],x&&l.item,T&&l.zeroMinWidth,"row"!==h&&l["direction-xs-".concat(String(h))],"wrap"!==q&&l["wrap-xs-".concat(String(q))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==r&&l["align-content-xs-".concat(String(r))],"flex-start"!==y&&l["justify-xs-".concat(String(y))],!1!==M&&l["grid-xs-".concat(String(M))],!1!==E&&l["grid-sm-".concat(String(E))],!1!==C&&l["grid-md-".concat(String(C))],!1!==w&&l["grid-lg-".concat(String(w))],!1!==A&&l["grid-xl-".concat(String(A))]);return i.a.createElement(f,Object(o.a)({className:N,ref:t},J))})),f=Object(s.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(o,2)),width:"calc(100% + ".concat(d(o),")"),"& > $item":{padding:d(o,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.a=f},192:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(56),i=n(163),c=n(146),s=n(35),u=n(152),l=function(e){var t=e.book,n=e.actions,r=Object(a.useState)(t.title),i=Object(s.a)(r,2),c=i[0],l=i[1],d=Object(a.useState)(t.author),p=Object(s.a)(d,2),f=p[0],b=p[1],g=Object(a.useState)(new Date(t.publishedDate).toISOString().split("T")[0]),m=Object(s.a)(g,2),h=m[0],v=m[1],x=Object(a.useState)(t.image),k=Object(s.a)(x,2),y=k[0],j=k[1],w=Object(a.useState)(t.quantity),O=Object(s.a)(w,2),C=O[0],S=O[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},o.a.createElement("div",null,o.a.createElement(u.a,{type:"text",value:t.id,required:!0,disabled:!0,label:"id",fullWidth:!0})),o.a.createElement("div",null,o.a.createElement(u.a,{type:"text",value:c,onChange:function(e){return l(e.target.value)},required:!0,label:"title",fullWidth:!0})),o.a.createElement("div",null,o.a.createElement(u.a,{type:"text",value:f,onChange:function(e){return b(e.target.value)},required:!0,label:"author",fullWidth:!0})),o.a.createElement("div",null,o.a.createElement(u.a,{type:"date",value:h,onChange:function(e){return v(e.target.value)},required:!0,label:"publishedDate",fullWidth:!0})),o.a.createElement("div",null,o.a.createElement("img",{src:y,alt:"book cover"}),o.a.createElement(u.a,{type:"text",value:y,onChange:function(e){return j(e.target.value)},required:!0,label:"image",fullWidth:!0})),o.a.createElement("div",null,o.a.createElement(u.a,{type:"number",value:C,onChange:function(e){return S(parseInt(e.target.value))},required:!0,label:"quantity",fullWidth:!0})),n({id:t.id,title:c,author:f,publishedDate:h,image:y,quantity:C}))},d=n(176),p=n(148),f=function(e){var t=e.book,n=Object(i.a)(),a=n.updateBooks,r=n.deleteBooks,c=function(){return r([t])},s=function(e){return function(){return a([e])}};return o.a.createElement(l,{book:t,actions:function(e){return o.a.createElement(d.a,{container:!0,justify:"flex-end"},o.a.createElement(p.a,{type:"button",onClick:c,color:"secondary"},"Delete"),o.a.createElement(p.a,{type:"button",onClick:s(e),color:"primary"},"Save Changes"))}})},b=n(8),g=n(65),m={id:"Created on initialization",title:"",author:"",publishedDate:(new Date).toISOString().split("T")[0],image:"",quantity:1,price:1},h=function(e){var t=e.initialFields,n=Object(i.a)().addBooks;return o.a.createElement(l,{book:t||m,actions:function(e){return o.a.createElement(d.a,{container:!0,justify:"flex-end"},o.a.createElement(p.a,{type:"button",onClick:(t=e,function(){return n([Object(b.a)({},t,{id:Object(g.uuid)()})])}),color:"primary"},"Create Book"));var t}})};t.default=function(){Object(r.a)();var e=Object(i.b)(!0),t=e.books,n=e.loading;return o.a.createElement("div",null,n&&o.a.createElement(c.a,null),!n&&o.a.createElement("div",null,o.a.createElement(h,null),t.map((function(e){return o.a.createElement(f,{key:e.id,book:e})}))))}}}]);
//# sourceMappingURL=8.2f3e24c4.chunk.js.map