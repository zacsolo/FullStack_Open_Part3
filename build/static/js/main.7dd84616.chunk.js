(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),l=(n(23),n(17)),o=n(6),i=n(2);function m(e){var t=e.searchState,n=e.handleFilter;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{name:"filtered",value:t,onChange:n}))}n(24);function d(e){var t=e.message,n=e.error;return null===t?null:r.a.createElement("div",{className:n?"error":"success"},t)}function f(e){var t=e.handleSubmit,n=e.handleChange,a=e.newName,c=e.newNumber;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{name:"name",value:a,onChange:n}),"number:"," ",r.a.createElement("input",{name:"number",value:c,onChange:n})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))}function s(e){var t=e.filtered,n=e.persons,a=e.filteredName,c=e.deleteEntry;return r.a.createElement("div",null,t?r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("div",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return c(e.id)}},"Delete"))}))):n.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("div",null,e.name," ",e.number),r.a.createElement("button",{onClick:function(){return c(e.id)}},"Delete"))})))}var b=n(4),E=n.n(b),h=function(){return E.a.get("".concat("/api/persons"))},p=function(e){return E.a.post("".concat("/api/persons"),e)},v=function(e,t){return E.a.put("".concat("/api/persons","/").concat(t),e)},j=function(e){return E.a.delete("".concat("/api/persons","/").concat(e))},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),E=b[0],O=b[1],w=Object(a.useState)(""),g=Object(i.a)(w,2),S=g[0],k=g[1],y=Object(a.useState)(""),C=Object(i.a)(y,2),N=C[0],D=C[1],x=Object(a.useState)(!1),A=Object(i.a)(x,2),F=A[0],J=A[1],L=Object(a.useState)(null),B=Object(i.a)(L,2),I=B[0],M=B[1],P=Object(a.useState)(!1),T=Object(i.a)(P,2),U=T[0],q=T[1];Object(a.useEffect)((function(){h().then((function(e){c(e.data)}))}),[]);var z=function(e){return e.name===E},G=n.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),H=function(){p({name:E,number:S}).then((function(e){c(n.concat(e.data))})),O(""),k("")},K=function(){var e=n.find(z),t=Object(o.a)(Object(o.a)({},e),{},{number:S});v(t,t.id).then((function(e){c(n.map((function(e){return e.id!==t.id?e:t})))})).catch((function(e){M("The contact '".concat(t.name,"' was already deleted from server")),c(n.filter((function(e){return e.id!==t.id}))),q(!0)})),O(""),k("")};return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:I,error:U}),r.a.createElement(m,{searchState:N,handleFilter:function(e){J(!0),D(e.target.value)}}),r.a.createElement("h3",null,"Add a new contact"),r.a.createElement(f,{handleSubmit:function(e){if(e.preventDefault(),n.find(z)){if(window.confirm("".concat(E," is already added to phonebook")))return q(!1),M("Number Updated"),K();O(""),k("")}else H(),q(!1),M("New Contact Added")},newName:E,newNumber:S,handleChange:function(e){"name"===e.target.name?O(e.target.value):k(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(s,{filtered:F,persons:n,filteredName:G,deleteEntry:function(e){var t=Object(l.a)(n);j(e).then((function(n){c(t.filter((function(t){return t.id!==e})))}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7dd84616.chunk.js.map