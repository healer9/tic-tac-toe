(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(6),s=n.n(a),j=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"TIC-TAC-TOE"})})},l=n(7),u=n(2),o=function(e){var t=e.onClick,n=e.value;return Object(c.jsx)("div",{onClick:t,className:"square",children:n})},b=function(e){var t=e.squares,n=e.onClick;return Object(c.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(c.jsx)(o,{value:e,onClick:function(){return n(t)}},t)}))})},O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(u.a)(t[n],3),r=c[0],i=c[1],a=c[2];if(e[r]&&e[r]===e[i]&&e[r]===e[a])return e[r]}return null},d=function(){var e=Object(r.useState)(Array(9).fill(null)),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!0),s=Object(u.a)(a,2),j=s[0],o=s[1],d=Object(r.useState)(0),h=Object(u.a)(d,2),x=h[0],f=h[1],v=O(n);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{squares:n,onClick:function(e){var t=Object(l.a)(n);v||t[e]||(t[e]=j?"X":"O",i(t),o(!j),f(x+1))}}),Object(c.jsxs)("div",{style:{textAlign:"center",marginTop:"2%"},children:[Object(c.jsx)("p",{children:9===x?"Match Draw !!!":v?"Winner is : ".concat(v):"Next Move : ".concat(j?"X":"0")}),Object(c.jsx)("button",{onClick:function(){f(0),i(Array(9).fill(null))},children:"Play Again"})]})]})},h=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(d,{}),Object(c.jsx)("footer",{children:"Build With \u2764 using REACT JS"})]})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bb03d63c.chunk.js.map