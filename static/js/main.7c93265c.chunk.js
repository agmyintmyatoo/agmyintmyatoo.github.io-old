(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(20),a=c.n(s),o=(c(25),c(2)),i=c(6),l=c(3),j=c(0),d=function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches;console.log("got user preference: ".concat(e));var t=Object(n.useState)(e),c=Object(l.a)(t,2),r=c[0],s=c[1];return r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),console.log("run toogle once: ".concat(r)),Object(j.jsx)("svg",{onClick:function(){return s(!r)},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 self-center mx-5 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})},h=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("h1",{className:"flex-grow p-2 lg:p-5 text-transparent bg-clip-text bg-gradient-to-tl from-emerald-500 to-cyan-500",children:"Aung Myint Myat Oo"}),Object(j.jsx)(d,{})]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"/blog",children:"Blog"})]})}),t,Object(j.jsx)("p",{className:"text-center text-xs tracking-widest text-gray-400",children:"\xa9 2021 agmyintmyatoo"})]})},u=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"dark:bg-blueGray-700 m-5 flex flex-row flex-wrap rounded-md shadow-md justify-center",children:[Object(j.jsx)("img",{src:"https://github.com/agmyintmyatoo.png",alt:"ammo",className:"m-5 rounded-full lg:rounded-xl shadow-md w-5/12 max-w-sm"}),Object(j.jsxs)("div",{className:"w-full lg:w-1/2 p-5 lg:self-center",children:[Object(j.jsxs)("p",{children:["Hello, ",Object(j.jsx)("span",{className:"emp",children:"AMMO"})," here!"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["I'm a fourth year Computer Science student at ",Object(j.jsx)("a",{className:"emp",href:"https://ucsy.edu.mm",children:"UCSY"}),". I can code well in ",Object(j.jsx)("span",{className:"emp",children:"Python"})," and ",Object(j.jsx)("span",{className:"emp",children:"JS"}),", altogether with ",Object(j.jsx)("span",{className:"emp",children:"Django"})," and ",Object(j.jsx)("span",{className:"emp",children:"React"}),". Along with software engineering background, I've touched ",Object(j.jsx)("span",{className:"emp",children:"Java"}),", ",Object(j.jsx)("span",{className:"emp",children:"C#"}),"."]})]}),Object(j.jsxs)("footer",{className:"flex-shrink-1 max-w-xs flex w-full p-2 justify-around",children:[Object(j.jsx)("a",{href:"https://twitter.com/agmyintmyatoo",children:"Twitter"}),Object(j.jsx)("a",{href:"https://github.com/agmyintmyatoo",children:"Github"}),Object(j.jsx)("a",{href:"mailto:solidifyarmor@gmail.com",children:"Mail"})]})]})})},b=function(e){var t=e.topic,c=e.setTopic;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Select topic:"}),Object(j.jsx)("input",{type:"radio",name:"topicr",id:"techi",value:"tech",checked:"tech"===t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"techi",children:"Tech"}),Object(j.jsx)("input",{type:"radio",name:"topicr",id:"booki",value:"book",checked:"book"===t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"booki",children:"Book Review"})]})},m=c(11),x=c.n(m),O=function(e){var t=e.url,c=e.renderData,r=e.renderLoading,s=void 0===r?Object(j.jsx)("p",{children:"Loading..."}):r,a=e.renderError,o=void 0===a?function(e){return Object(j.jsxs)("p",{children:["Error: ",e]})}:a,i=Object(n.useState)(!0),d=Object(l.a)(i,2),h=d[0],u=d[1],b=Object(n.useState)(),m=Object(l.a)(b,2),O=m[0],p=m[1],g=Object(n.useState)(),f=Object(l.a)(g,2),v=f[0],w=f[1],y=x.a.CancelToken;return Object(n.useEffect)((function(){var e;return x.a.get(t,{cancelToken:new y((function(t){console.log("Axios request canceled:"),e=t}))}).then((function(e){return p(e)})).then((function(){return u(!1)})).catch(w),function(){return e()}}),[t]),h&&s||O&&c(O)||v&&o(v)},p="https://api.github.com/repos/agmyintmyatoo/".concat("BlogPosts","/contents"),g=function(e){var t=e.data;return console.log(t),t.map((function(e){var t=e.name,c=e.download_url,n=e.sha;e.size;return Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:c,children:t})},n)}))},f=function(){var e=Object(n.useState)("tech"),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{topic:c,setTopic:r}),Object(j.jsx)(O,{url:"".concat(p,"/").concat(c),renderData:g})]})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"py-2",children:[Object(j.jsx)("h1",{children:"Welcome to my Blog"}),Object(j.jsx)("p",{children:"Yep, you read it right!"}),Object(j.jsx)("p",{children:"And (spoilers alert!) I'm planning to hit you with a fuckload of shitpostings."})]}),Object(j.jsx)("div",{children:Object(j.jsx)(f,{})})]})},w=function(){return Object(j.jsx)("p",{children:"Look like you're lost."})},y=function(){return Object(j.jsx)(h,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(u,{}),exact:!0}),Object(j.jsx)(o.a,{path:"/blog",element:Object(j.jsx)(v,{}),exact:!0}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(w,{})})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(y,{})})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.7c93265c.chunk.js.map