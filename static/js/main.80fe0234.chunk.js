(this.webpackJsonpmercadosltda=this.webpackJsonpmercadosltda||[]).push([[0],{69:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(23),r=c.n(n),o=(c(57),c(51)),j=c(9),d=c(29),i=c(30),l=c(24),b=c(11),h=c(14),O=c(31),x=c(32),m=c(35),u=c(2),p=function(){return Object(u.jsxs)(x.a,{bg:"primary",variant:"dark",children:[Object(u.jsxs)(x.a.Brand,{children:[Object(u.jsx)(h.d,{})," MercadosLTDA"]}),Object(u.jsxs)(m.a,{className:"mr-auto",children:[Object(u.jsxs)(m.a.Link,{href:"#/",children:[Object(u.jsx)(h.i,{})," In\xedcio"]}),Object(u.jsxs)(m.a.Link,{href:"#/mercados",children:[Object(u.jsx)(h.f,{})," Mercados"]}),Object(u.jsxs)(m.a.Link,{href:"#/about",children:[Object(u.jsx)(h.j,{})," Quem somos?"]})]})]})},f=function(){return Object(u.jsx)(x.a,{bg:"dark",fixed:"bottom",children:Object(u.jsxs)(x.a.Brand,{className:"text-light",children:[Object(u.jsx)(h.b,{})," MercadosLTDA \xa9 - Todos os direitos reservados! \ud83d\uddff\ud83e\udd19",Object(u.jsxs)("h4",{children:[Object(u.jsx)(h.e,{}),"Email para contato mercadosltda@contato.com"]}),Object(u.jsxs)("h4",{children:[Object(u.jsx)(h.g,{}),"Telefone para contato: (11)991234567"]})]})})},g=function(){return Object(u.jsxs)(d.a,{fluid:!0,className:"p-0",children:[Object(u.jsx)(p,{}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.a,{xs:12,lg:6,children:[Object(u.jsx)("h1",{children:"Seja bem vindo!"}),Object(u.jsx)("p",{children:" Esta \xe9 a \xe1rea de Login do site MercadosLTDA. "}),Object(u.jsx)("p",{children:"Conclua os cadastros atrav\xe9s do menu abaixo"})]})}),Object(u.jsx)(f,{}),Object(u.jsxs)("h4",{children:[Object(u.jsx)(h.a,{}),"Login"]}),Object(u.jsx)(b.a,{method:"post",children:Object(u.jsxs)(b.a.Group,{controlId:"nome",children:[Object(u.jsx)(b.a.Label,{children:"Digite seu email!"}),Object(u.jsx)(b.a.Control,{name:"nome",placeholder:"Ex: fulano@gmail.com"})]})}),Object(u.jsxs)("h4",{children:[Object(u.jsx)(h.k,{}),"Crie sua senha"]}),Object(u.jsxs)(b.a,{method:"post",children:[Object(u.jsxs)(b.a.Group,{controlId:"nome",children:[Object(u.jsx)(b.a.Label,{children:"Crie uma senha!"}),Object(u.jsx)(b.a.Control,{name:"nome"})]}),Object(u.jsxs)("h4",{children:[Object(u.jsx)(h.h,{}),"Confirmar Senha"]}),Object(u.jsxs)(b.a.Group,{controlId:"nome",children:[Object(u.jsx)(b.a.Label,{children:"Confirme sua senha!"}),Object(u.jsx)(b.a.Control,{name:"nome"})]}),Object(u.jsxs)("td",{children:["\xa0",Object(u.jsxs)(O.a,{variant:"primary",type:"submit",title:"Salvar o registro",children:[Object(u.jsx)(h.c,{})," Entrar"]})]})]})]})},v=c(34),k=c.n(v),L=c(7),y=c(3),C=c(43),S=c(10),N=c(49),M=c(50),A=c(27),D="https://mercado2021-gti.herokuapp.com/verdura",E=function(){var e=Object(a.useState)({nome:"",status:!0}),t=Object(S.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(S.a)(n,2),o=r[0],j=r[1],h=Object(a.useState)(!1),x=Object(S.a)(h,2),m=x[0],g=x[1],v=Object(a.useState)({}),E=Object(S.a)(v,2),I=E[0],T=E[1],w=c.nome,G=c.status;function B(){return(B=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),t="".concat(D,"/mercados"),e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),j(e)})).catch((function(e){console.error("Erro ao obter os mercados")}));case 4:g(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){B.apply(this,arguments)}(),document.title="MercadosLTDA"}),[]);var q=function(){var e={};return w&&""!==w?w.lenght>30?e.nome="O nome informado \xe9 muito longo":w.lenght<3&&(e.nome="O nome informado \xe9 muito curto"):e.nome="O nome n\xe3o pode ser vazio",e};function z(){return(z=Object(C.a)(k.a.mark((function e(t){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=q(),Object.keys(c).length>0?T(c):alert("Est\xe1 tudo ok!");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)(d.a,{fluid:!0,className:"p-0",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(i.a,{children:[Object(u.jsxs)(l.a,{xs:12,lg:6,children:[Object(u.jsxs)("h4",{children:[Object(u.jsx)(A.d,{}),"Cadastro dos Mercados"]}),Object(u.jsxs)(b.a,{method:"post",children:[Object(u.jsxs)(b.a.Group,{controlId:"nome",children:[Object(u.jsx)(b.a.Label,{children:"Nome do Mercado"}),Object(u.jsx)(b.a.Control,{name:"nome",placeholder:"Ex: Alvorada",value:w,onChange:function(e){s(Object(y.a)(Object(y.a)({},c),{},Object(L.a)({},e.target.name,e.target.value))),T({})},isInvalid:!!I.nome}),Object(u.jsx)(b.a.Control.Feedback,{type:"invalid",children:I.nome})]}),Object(u.jsx)(b.a.Group,{controlId:"status",children:Object(u.jsx)(b.a.Check,{type:"checkbox",label:"Ativo",name:"status",onChange:function(e){return s(Object(y.a)(Object(y.a)({},c),{},Object(L.a)({},e.target.name,e.target.checked)))},checked:G})}),Object(u.jsxs)(O.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){return z.apply(this,arguments)}(e)},title:"Salvar o registro",children:[Object(u.jsx)(A.e,{})," Salvar"]})]})]}),Object(u.jsxs)(l.a,{xs:12,lg:6,children:[Object(u.jsxs)("h4",{children:[Object(u.jsx)(A.b,{}),"Listagem dos Mercados"]}),m&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N.a,{animation:"border",variant:"primary"}),Object(u.jsx)("p",{children:"Aguarde, enquanto os mercados s\xe3o carregados..."})]}),Object(u.jsxs)(M.a,{striped:!0,bordered:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"bg-danger text-dark",children:[Object(u.jsx)("th",{children:"Nome"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{children:"Inclus\xe3o"}),Object(u.jsx)("th",{children:"Op\xe7\xf5es"})]})}),Object(u.jsxs)("tbody",{children:[o.map((function(e){e.nome,e.status,new Date(e.createdAt).toLocaleDateString(),O.a,A.c,O.a,A.a,e._id})),Object(u.jsxs)("tr",{className:"bg-light text-light",children:[Object(u.jsx)("td",{colSpan:"3",children:"Total de Registros:"}),Object(u.jsx)("td",{children:o.lenght})]})]})]})]})]}),Object(u.jsx)(f,{})]})},I=function(){return Object(u.jsxs)(d.a,{fluid:!0,className:"p-0",children:[Object(u.jsx)(p,{}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.a,{xs:12,lg:6,children:[Object(u.jsx)("h1",{children:"N\xf3s da MercadoLTDA temos um pr\xf3posito"}),Object(u.jsx)("p",{children:"Nosso site \xe9 capaz de salvar o nome de todos od mercados do mundo para isso temos servidores hospedados em diversos com uma diversidade enorme de mercados, desde o mercado da sua esquina at\xe9 o maior Walmart do mundo "})]})}),Object(u.jsx)(f,{})]})};function T(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(u.jsx)(j.a,{exact:!0,path:"/mercados",component:E}),Object(u.jsx)(j.a,{exact:!0,path:"/about",component:I})]})})}var w=function(){return Object(u.jsx)(T,{})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.80fe0234.chunk.js.map