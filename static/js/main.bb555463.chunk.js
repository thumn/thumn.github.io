(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},115:function(e,t,n){},117:function(e,t,n){},168:function(e,t){},169:function(e,t){},24:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(96),s=n.n(i),o=n(18),l=n(3),u=(n(105),n.p+"static/media/tn-logo.306dc8df.png"),j=(n(106),n(107),n.p+"static/media/Thu_Nguyen_Resume.fbaf3eee.pdf"),d=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{id:"nav",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/projects",children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/photo",children:"Photography"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:"Resume"})})]})})},h=function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Layout-heading",children:[Object(c.jsx)("img",{src:u,className:"Layout-logo",alt:""}),Object(c.jsx)(d,{})]}),Object(c.jsx)("div",{children:t})]})},b=n.p+"static/media/intro.38f4bc95.png",f=n.p+"static/media/thu-cartoon.2c8f0a2b.jpg",m=(n(115),n(24),function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Home-container",children:[Object(c.jsx)("div",{className:"Home-thu",children:Object(c.jsx)("img",{src:f,alt:""})}),Object(c.jsxs)("div",{className:"Home-rightContainer",children:[Object(c.jsx)("img",{src:b,alt:""}),Object(c.jsx)("p",{className:"body",children:"I graduated from UC Berkeley with a major in Cognitive Science and a minor in Computer Science in December 2019. I'm currently working as a software engineer at Samsara. In my free time, I enjoy playing Animal Crossing, writing snail mail to friends, going on photoshoots, and doing Chloe Ting workout challenges!"})]})]})})})}),p=n(23),O=n(12),x=n.n(O),g=n(22),v=n(99),N=n(98),y=n.n(N),w=(n(37),function(e){var t=e.albumName,n=e.onClick;return Object(c.jsx)("div",{className:"Page-tab body animatedButton",onClick:function(){return n()},children:t})}),P=(n(117),new(n(118))({apiKey:"keyqImwErlYOVbnFz"}).base("app4Rk1m18hcBC6Ge")),k=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("Albums").select({view:"Grid view"}).all().then((function(e){return!e||e.length<1?[]:e})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("Photos").select({view:"Grid view",filterByFormula:"{Album}='".concat(t,"'")}).all().then((function(e){return!e||e.length<1?[]:e})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return e.fields.Description},F=function(){var e=r.a.useState("SFAI"),t=Object(p.a)(e,2),n=t[0],a=t[1],i=r.a.useState({}),s=Object(p.a)(i,2),o=s[0],l=s[1],u=r.a.useState([]),j=Object(p.a)(u,2),d=j[0],b=j[1],f=r.a.useState(!0),m=Object(p.a)(f,2),O=m[0],N=m[1];return r.a.useEffect((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){var t,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,k();case 3:return n=e.sent,t||(c={},n.forEach((function(e){c[e.fields.Name]=e.fields.Description})),l(c)),e.abrupt("return",(function(){t=!0}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.useEffect((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,N(!0),e.next=4,C(n);case 4:return c=e.sent,t||(b(c),N(!1)),e.abrupt("return",(function(){t=!0}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),r.a.useEffect((function(){return document.body.className="Page-body",function(){document.body.className=""}})),Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Page-container",children:[Object(c.jsxs)("div",{className:"Page-left",children:[Object(c.jsx)("p",{className:"header",children:"Photography"}),Object(c.jsx)("div",{className:"Page-descriptionContainer",children:Object(c.jsx)("p",{className:"caption",children:o[n]})}),Object(c.jsx)("div",{className:"Page-tabContainer",children:Object.keys(o).map((function(e){return Object(c.jsx)(w,{albumName:e,onClick:function(){return a(e)}})}))})]}),O?Object(c.jsx)("div",{className:"Page-loaderContainer",children:Object(c.jsx)("div",{className:"Page-loader",children:Object(c.jsx)(y.a,{type:"spin",height:"20%",color:"#ff5757"})})}):Object(c.jsxs)("div",{className:"Page-right",children:[Object(c.jsx)("div",{className:"Page-rightContent",children:d.map((function(e){var t=e.fields.Attachments[0].url;return Object(c.jsxs)("div",{className:"Photo-images",children:[Object(c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(c.jsx)(v.a,{className:"Photo-image",src:t})}),Object(c.jsx)("p",{className:"caption",children:S(e)})]})}))}),Object(c.jsx)("div",{style:{height:250}})]})]})})},I=function(){return Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Page-container",children:[Object(c.jsxs)("div",{className:"Page-left",children:[Object(c.jsx)("p",{className:"header",children:"Projects"}),Object(c.jsx)("p",{className:"body",children:"Here are some projects that made me want to die"})]}),Object(c.jsx)("div",{className:"Page-right",children:"blah blah"})]})})};var B=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(c.jsx)(l.a,{exact:!0,path:"/photo",component:F}),Object(c.jsx)(l.a,{exact:!0,path:"/projects",component:I})]})},E=(n(245),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),E()},37:function(e,t,n){}},[[246,1,2]]]);
//# sourceMappingURL=main.bb555463.chunk.js.map