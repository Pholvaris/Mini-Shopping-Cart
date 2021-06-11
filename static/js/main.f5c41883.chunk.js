(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{29:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var c=t(1),i=t(0),r=t.n(i),a=t(17),d=t.n(a),o=(t(29),t(22)),s=t(5),l=t(23),j=t(3),u=t(21),b=t(9),p=t(4);function h(){var n=Object(j.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  /* Second Nav */\n  margin-left: 24px;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  /* Second Nav */\n  /* margin-right: 24px; */\n\n  /* Third Nav */\n /*width: 100vw;\nwhite-space: nowrap; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(j.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(j.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 5 0rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]);return g=function(){return n},n}function O(){var n=Object(j.a)(["\n  background: #222;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((50vw - 600px) / 2);\n  z-index: 10;\n\n  "]);return O=function(){return n},n}var v=p.a.nav(O()),w=Object(p.a)(b.b)(g()),y=(Object(p.a)(u.a)(x()),p.a.div(f()),p.a.nav(m()),Object(p.a)(b.b)(h()),t.p+"static/media/shoppinglogo.434a8ca2.png"),N=t.p+"static/media/cartlogo.e26818c0.png";var k=function(n){return Object(c.jsxs)(v,{children:[Object(c.jsxs)(w,{to:"/",children:[Object(c.jsx)("img",{src:y,alt:"logo",width:"80",height:"80"}),"Shopping Website"]}),Object(c.jsxs)(w,{to:"/",activeStyle:!0,children:["CART \xa0",Object(c.jsx)("img",{src:N,alt:"logo",width:"30",height:"30"})," \xa0\xa0\xa0",n.countCartItems?Object(c.jsx)("button",{className:"badge",children:n.countCartItems}):Object(c.jsx)("button",{className:"badge",children:"0"})]})]})};function C(n){var e=n.product,t=n.onAdd;return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"small",src:e.image,alt:e.name}),Object(c.jsx)("h3",{children:e.name}),Object(c.jsxs)("div",{children:["\u0e23\u0e32\u0e04\u0e32: ",e.price," \u0e1a\u0e32\u0e17"]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return t(e)},children:"Add To Cart"})})]})}function _(n){var e=n.products,t=n.onAdd,i=n.typeblock;return Object(c.jsxs)("main",{className:"block col-2",children:["nvi"===i?Object(c.jsx)("h2",{children:"Nvidia"}):Object(c.jsx)("h2",{children:"Radeon"}),Object(c.jsx)("div",{className:"row",children:e&&e.map((function(n){return Object(c.jsx)(C,{product:n,onAdd:t},n.id)}))})]})}function R(n){var e=n.cartItems,t=n.onAdd,i=n.onRemove,r=e.reduce((function(n,e){return n+e.qty*e.price}),0);return Object(c.jsxs)("aside",{className:"block col-1",children:[Object(c.jsx)("h2",{children:"Cart Items"}),Object(c.jsxs)("div",{children:[0===e.length&&Object(c.jsx)("div",{className:"cart",children:"Your cart is empty !"}),e.map((function(n){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-3",children:n.name}),Object(c.jsxs)("div",{className:"col-2",children:[Object(c.jsx)("button",{onClick:function(){return i(n)},className:"remove",children:" - "}),"\xa0",Object(c.jsx)("button",{onClick:function(){return t(n)},className:"add",children:" + "})]}),Object(c.jsxs)("div",{className:"col-2 text-right",children:[n.qty," x ",n.price," \u0e1a\u0e32\u0e17 "]})]},n.id)})),0!==e.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"cart",children:Object(c.jsx)("strong",{children:"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21"})}),Object(c.jsx)("div",{className:"cart",children:Object(c.jsxs)("strong",{children:[r," \u0e1a\u0e32\u0e17"]})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("button",{onClick:function(){return alert("Success Order. Click 'OK' to continue Shopping"),void window.location.reload()},children:"Proceed"})})]})]})]})}var T={products_nvi:[{id:"1",name:"RTX 2070 SUPER",price:24200,image:"https://cf.shopee.co.th/file/c8fca514e19e585e4de37fd0dd1e4d00"},{id:"2",name:"RTX 2080 SUPER",price:32500,image:"https://cf.shopee.co.th/file/3eca632de9dec5debefe2f2e3d6da9fc"},{id:"3",name:"RTX 3070 ",price:45e3,image:"https://www.jib.co.th/img_master/product/big/2020122311233744322_1.jpg"}]},A={products_rad:[{id:"4",name:"Radeon 5500 XT",price:21500,image:"https://th-test-11.slatic.net/p/e8853c4b053685691c3ddac258e6b18c.jpg_720x720q80.jpg_.webp"},{id:"5",name:"Radeon 5700 XT",price:26700,image:"https://img.advice.co.th/images_nas/pic_product4/A0127844/A0127844OK_BIG_1.jpg"},{id:"6",name:"Radeon 6700 XT",price:33200,image:"https://www.jib.co.th/img_master/product/original/2021040511051446150_1.jpg"},{id:"7",name:"Radeon 6800 XT",price:44300,image:"https://cf.shopee.co.th/file/0cca797fed182c37697d91af19adf8ae"}]};var S=function(){var n=T.products_nvi,e=A.products_rad,t=Object(i.useState)([]),r=Object(l.a)(t,2),a=r[0],d=r[1],j=function(n){var e=a.find((function(e){return e.id===n.id}));d(e?a.map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},e),{},{qty:e.qty+1}):t})):[].concat(Object(o.a)(a),[Object(s.a)(Object(s.a)({},n),{},{qty:1})]))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{children:Object(c.jsx)(k,{countCartItems:a.length})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(_,{products:n,onAdd:j,typeblock:"nvi"}),Object(c.jsx)(R,{cartItems:a,onAdd:j,onRemove:function(n){var e=a.find((function(e){return e.id===n.id}));1===e.qty?d(a.filter((function(e){return e.id!==n.id}))):d(a.map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},e),{},{qty:e.qty-1}):t})))}})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(_,{products:e,onAdd:j,typeblock:"rad"})})]})},q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),i(n),r(n),a(n)}))};d.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),q()}},[[40,1,2]]]);
//# sourceMappingURL=main.f5c41883.chunk.js.map