(this.webpackJsonptodo_school_project=this.webpackJsonptodo_school_project||[]).push([[0],{26:function(e,t,a){e.exports=a(46)},31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(12),r=a.n(c),i=(a(31),a(8)),l=(a(32),a(33),a(62)),s=a(11),m=a(63),u=a(65),d=a(51),f=a(54),p=a(15),g=a.n(p),E=(a(36),a(48)),b=a(64),v=a(49),O=a(50),j=a(52),h=a(53),S=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),m=s[0],u=s[1];function p(){u(!m)}return o.a.createElement("div",null,o.a.createElement(E.a,{color:"info",style:{marginBottom:"2rem",width:"100%"},onClick:p},e.title),o.a.createElement(b.a,{isOpen:m,toggle:p},o.a.createElement(v.a,{toggle:p},e.title),o.a.createElement(O.a,null,o.a.createElement(d.a,{onSubmit:function(t){t.preventDefault(),e.addItem(c),p()}},o.a.createElement(j.a,null,o.a.createElement(h.a,{for:"todo"},"Todo"),o.a.createElement(f.a,{type:"todo",name:"name",id:"todo",placeholder:e.title,onChange:function(e){r(e.target.value)}})),"true"===e.option?o.a.createElement(j.a,null,o.a.createElement(h.a,{for:"exampleSelect"},"Select List"),o.a.createElement(f.a,{type:"select",name:"select",id:"exampleSelect"},e.lists.map((function(e){return o.a.createElement("option",{key:e.title},e.title)})))):null,o.a.createElement(E.a,{color:"info",style:{marginTop:"2rem"},block:!0},e.title)))))},k=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),p=Object(i.a)(l,2),E=p[0],b=p[1],v=Object(n.useState)(""),O=Object(i.a)(v,2),j=O[0],h=O[1];function k(e,t){var a=c.map((function(a){return a.id===e&&(a.text=t),a}));r(Object(s.a)(a))}function L(e,t){e.closest(".list-group-item").classList.toggle("finished"),function(e){var t=c.map((function(t){return t.id===e&&(t.checked=!t.checked),t}));r(Object(s.a)(t))}(t)}return Object(n.useEffect)((function(){var e=localStorage.getItem("todo");r(e?JSON.parse(e):[])}),[]),o.a.createElement("div",{style:{margin:"2rem auto",padding:"0 20px"}},o.a.createElement("h2",{style:{textAlign:"center"}},e.selectedList),o.a.createElement(m.a,{style:{marginBottom:"1rem"}},o.a.createElement("div",{className:"todo-list drag-container"},c.map((function(t){var a=t.id,n=t.text,c=(t.checked,t.list);return e.selectedList.toLowerCase()!==c?null:o.a.createElement(m.a.Item,{key:a,className:"drag-box",dragobj:"0",onClick:function(e){return L(e.target,a)}},o.a.createElement(u.a,{className:"remove-btn remove-transition",variant:"danger",size:"sm",onClick:function(e){return function(e,t){e.target.classList.remove("remove-transition"),e.target.closest("button").classList.remove("remove-transition"),e.stopPropagation(),setTimeout((function(){r((function(e){return e.filter((function(e){return e.id!==t}))}))}),500)}(e,a)}},o.a.createElement("i",{className:"material-icons before-remove remove-transition"},"delete")),o.a.createElement(u.a,{variant:"info",size:"sm",onClick:function(e){return function(e,t,a){e.stopPropagation(),""===E?(h(t),b(a)):E===a?(b(""),k(a,j),b(""),h("")):(b(a),h(t))}(e,n,a)}},o.a.createElement("i",{className:"material-icons"},"edit")),o.a.createElement("span",{style:{padding:"0 30px",lineHeight:"2.4rem"}},n),E===a?o.a.createElement(d.a,{className:"form",onSubmit:function(e){return function(e,t){e.preventDefault(),k(t,j),b(""),h("")}(e,a)}},o.a.createElement(f.a,{value:j,type:"text",name:"todo",placeholder:"Update todo",onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e){h(e.target.value)}(e)}})):null)})))),o.a.createElement(S,{addItem:function(t){if(t){var a={id:g()(),list:e.selectedList.toLowerCase(),text:t,checked:""};r((function(e){return[].concat(Object(s.a)(e),[a])})),localStorage.setItem("todo",JSON.stringify([].concat(Object(s.a)(c),[a])))}},title:"Add todo",option:"true",selectedList:e.selectedList,lists:e.lists}))},L=a(55),y=a(56),x=a(57),N=a(58),w=a(59),C=a(60),I=a(61),J=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],d=m[1];Object(n.useEffect)((function(){var e=localStorage.getItem("todoList");d(e?JSON.parse(e):[])}),[d]),Object(n.useEffect)((function(){e.setLists(u)}),[c,e,u]);return o.a.createElement("div",null,o.a.createElement(L.a,{color:"faded",light:!0},o.a.createElement(y.a,{className:"mr-auto"},"Todo List"),o.a.createElement("div",{className:"mr-2"},o.a.createElement(S,{title:"Add new list",addItem:function(e){if(e){var t={id:g()(),title:e};d((function(e){return[].concat(Object(s.a)(e),[t])})),localStorage.setItem("todoList",JSON.stringify([].concat(Object(s.a)(u),[t])))}},option:"false"})),o.a.createElement(x.a,{onClick:function(){return r(!c)},className:"mr-2"}),o.a.createElement(N.a,{isOpen:!c,navbar:!0},o.a.createElement(w.a,{navbar:!0},o.a.createElement(C.a,{style:{textAlign:"right",marginTop:"20px"}},u.map((function(t){return o.a.createElement(I.a,{style:{borderBottom:"1px solid #ccc",marginRight:"10px"},onClick:function(t){return e.selectList(t.target.textContent)},key:t.id},t.title)})))))))};var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),m=s[0],u=s[1];return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,null,o.a.createElement(J,{selectList:c,setLists:u}),o.a.createElement(k,{selectedList:a,lists:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4ca482c6.chunk.js.map