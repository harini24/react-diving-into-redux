(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{12:function(e,t,s){e.exports={list:"Restaurants_list__t9PSq"}},18:function(e,t,s){},2:function(e,t,s){e.exports={restImg:"Restaurant_restImg__2097f",restItems:"Restaurant_restItems__2CSvX",restItem:"Restaurant_restItem__1ghIp",inlineBlk:"Restaurant_inlineBlk__uHx0r",restName:"Restaurant_restName__1gT4u",outletsList:"Restaurant_outletsList__HGdPP",RestDet:"Restaurant_RestDet__12Q8R",restDesc:"Restaurant_restDesc__2NzN1"}},27:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s.n(r),a=s(4),c=s.n(a),i=(s(18),s(3)),l=s(8),u=s.n(l),j=s(11),d=s(5),o=Object(d.b)({name:"restaurants",initialState:{restaurants:[]},reducers:{getRestaurants:function(e,t){e.restaurants=t.payload,console.log(e.restaurants)}}}),b=o.actions,O=o.reducer,m=s(12),x=s.n(m),h=s(13),v=s(9),_=s.n(v),p=s(1),g=function(e){return Object(p.jsx)(n.a.Fragment,{children:e.outlets.map((function(e){return Object(p.jsxs)("div",{className:_.a.outletItem,children:[Object(p.jsx)("div",{children:e.outletName}),Object(p.jsx)("div",{children:e.longDescription}),Object(p.jsxs)("div",{className:_.a.outletDet,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Time"}),Object(p.jsxs)("div",{children:[e.time," mns"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Price"}),Object(p.jsx)("div",{children:e.displayCostForTwo})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Rating"}),Object(p.jsx)("div",{children:e.averageReview})]})]})]})}))})},f=s(2),N=s.n(f),R=function(e){var t=Object(r.useState)(!1),s=Object(h.a)(t,2),a=s[0],c=s[1];return console.log(e.restaurant.outlet.length),1==e.restaurant.outlet.length?Object(p.jsxs)("div",{className:N.a.restItem,children:[Object(p.jsx)("div",{className:N.a.inlineBlk,children:Object(p.jsx)("img",{className:N.a.restImg,src:e.restaurant.restaurantImage})}),Object(p.jsxs)("div",{className:N.a.restDesc,children:[Object(p.jsx)("div",{className:N.a.restName,children:e.restaurant.restaurantName}),Object(p.jsxs)("div",{className:N.a.RestDet,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Time"}),Object(p.jsxs)("div",{children:[e.restaurant.time," mns"]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Price"}),Object(p.jsx)("div",{children:e.restaurant.displayCostForTwo})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Rating"}),Object(p.jsx)("div",{children:e.restaurant.averageReview})]})]})]})]}):Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsxs)("div",{className:N.a.restItems,children:[Object(p.jsx)("div",{className:N.a.inlineBlk,children:Object(p.jsx)("img",{className:N.a.restImg,src:e.restaurant.restaurantImage})}),Object(p.jsx)("div",{className:N.a.restName,children:Object(p.jsxs)("div",{children:[" ",e.restaurant.restaurantName]})}),!a&&Object(p.jsx)("button",{onClick:function(){return c(!0)},children:"+"}),a&&Object(p.jsx)("button",{onClick:function(){return c(!1)},children:"-"})]}),a&&Object(p.jsxs)("div",{className:N.a.outletsList,children:[" ",Object(p.jsx)(g,{outlets:e.restaurant.outlet})," "]})]})},I=function(e){var t=Object(i.b)(),s=Object(i.c)((function(e){return e.restuarants.restaurants}));return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({latitude:13.0358481,longitude:80.244455})});case 2:return(s=e.sent).ok||console.log("error"),e.next=6,s.json();case 6:r=e.sent,console.log(r),t(b.getRestaurants(r.listRestaurants));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)("div",{className:x.a.list,children:s.map((function(e){return Object(p.jsx)(R,{restaurant:e})}))})};var k=function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(I,{})})},D=Object(d.a)({reducer:{restuarants:O}});c.a.render(Object(p.jsx)(i.a,{store:D,children:Object(p.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,s){e.exports={outletItem:"Outlets_outletItem__fif7a",outletDet:"Outlets_outletDet__3AKh2"}}},[[27,1,2]]]);
//# sourceMappingURL=main.ac0776f7.chunk.js.map