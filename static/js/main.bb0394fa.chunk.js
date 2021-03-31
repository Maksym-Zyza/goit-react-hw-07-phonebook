(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"ContactForm_title__3MqSl",form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},13:function(t,e,n){t.exports={wrapper:"App_wrapper__2Rh_f",title:"App_title__-GfWs",message:"App_message__2vrzR",loaderDiv:"App_loaderDiv__5pqlZ"}},15:function(t,e,n){t.exports={wrapper:"Filter_wrapper__IqOjQ",label:"Filter_label__3DcZT",name:"Filter_name__pSTfl",input:"Filter_input__2DoVp"}},17:function(t,e,n){t.exports={listItem:"ContactList_listItem__29Cbr",name:"ContactList_name__2WLgA",namber:"ContactList_namber__xUfTY",btn:"ContactList_btn__1Xk4q"}},82:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(18),o=n.n(r),s=n(45),i=n(9),u=n(3),l=Object(u.b)("contacts/fetchContactRequest"),b=Object(u.b)("contacts/fetchContactSuccess"),j=Object(u.b)("contacts/fetchContactError"),m=Object(u.b)("contacts/addContactRequest"),f=Object(u.b)("contacts/addContactSuccess"),p=Object(u.b)("contacts/addContactError"),d=Object(u.b)("contacts/delContactRequest"),O=Object(u.b)("contacts/delContactSuccess"),h=Object(u.b)("contacts/delContactError"),_=Object(u.b)("Contact/filter"),x=n(19),v=function(t){return t.contacts.items},C=function(t){return t.contacts.loading},g=function(t){return t.contacts.filter},N=Object(x.a)([g,v],(function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),y=n(15),w=n.n(y),k=n(1),F=Object(i.b)((function(t){return{value:g(t)}}),(function(t){return{onChange:function(e){return t(_(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(k.jsx)("div",{className:w.a.wrapper,children:Object(k.jsxs)("label",{className:w.a.label,children:[Object(k.jsx)("span",{className:w.a.name,children:"Find contacts by name"}),Object(k.jsx)("input",{className:w.a.input,type:"text",name:"name",value:e,onChange:n})]})})})),S=n(20),D=n(21),L=n(24),A=n(23),q=n(29),R=n.n(q),B=n(42),I=n(16),T=n.n(I);T.a.defaults.baseURL="http://localhost:3000";var E,z,M=n(17),J=n.n(M),U=function(t){Object(L.a)(n,t);var e=Object(A.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDelBtnClick;return Object(k.jsx)("ul",{children:e.map((function(t){return Object(k.jsxs)("li",{className:J.a.listItem,children:[Object(k.jsxs)("span",{className:J.a.name,children:[t.name,":"]}),Object(k.jsx)("span",{className:J.a.namber,children:t.number}),Object(k.jsx)("button",{className:J.a.btn,type:"button",id:t.id,onClick:function(t){return n(t.target.id)},children:"Delete"})]},t.id)}))})}}]),n}(a.a.Component),W=Object(i.b)((function(t){return{contacts:N(t)}}),(function(t){return{onDelBtnClick:function(e){return t(function(t){return function(e){console.log("deleteContact>>",t),e(d()),T.a.delete("/contacts/".concat(t)).then((function(){return e(O(t))})).catch((function(t){return e(h(t))}))}}(e))},fetchContacts:function(){return t(function(){var t=Object(B.a)(R.a.mark((function t(e){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l()),t.prev=1,t.next=4,T.a.get("/contacts");case 4:n=t.sent,c=n.data,e(b(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(j(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(U),Z=n(5),G=n(10),P=n.n(G),Q=function(t){Object(L.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(S.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handelChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(Z.a)({},c,a))},t.resetForm=function(){t.setState({name:"",number:""})},t.handleSabmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;if(t.props.contacts.some((function(t){return t.name===c})))return alert('Name "'.concat(c,'" already exists, please enter another name.'));t.props.onSubmit({name:c,number:a}),t.resetForm()},t}return Object(D.a)(n,[{key:"render",value:function(){var t=this.props.contacts;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:P.a.title,children:"Phonebook"}),Object(k.jsxs)("form",{className:P.a.form,autoComplete:"off",onSubmit:this.handleSabmit,children:[Object(k.jsxs)("label",{className:P.a.label,children:["Name:",Object(k.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handelChange,className:P.a.input})]}),Object(k.jsxs)("label",{className:P.a.label,children:["Number:",Object(k.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handelChange,className:P.a.input})]}),Object(k.jsx)("button",{type:"submit",className:P.a.btn,children:"Add contact"})]}),Object(k.jsxs)("h2",{className:P.a.title,children:["Contacts (",t.length,")"]})]})})}}]),n}(c.Component),V=Object(i.b)((function(t){return{contacts:v(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(m()),T.a.post("/contacts",c).then((function(e){var n=e.data;return t(f(n))})).catch((function(e){return t(p(e))}))}}(e))}}}))(Q),X=n(13),Y=n.n(X),H=function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h2",{className:Y.a.message,children:"Nothing, please start creating your contact"})})},K=n(43),$=n.n(K),tt=function(){return Object(k.jsx)("div",{className:Y.a.loaderDiv,children:Object(k.jsx)($.a,{loading:!0,color:"red"})})},et=Object(i.b)((function(t){return{contacts:v(t),isLoading:C(t)}}))((function(t){var e=t.contacts,n=t.isLoading;return Object(k.jsxs)("div",{className:Y.a.wrapper,children:[Object(k.jsx)(V,{}),0===e.length&&Object(k.jsx)(H,{}),e.length>1&&Object(k.jsx)(F,{}),n&&Object(k.jsx)(tt,{}),Object(k.jsx)(W,{})]})})),nt=(n(81),n(82),n(22)),ct=n(44),at=n.n(ct),rt=n(4),ot=Object(u.c)([],(E={},Object(Z.a)(E,b,(function(t,e){return e.payload})),Object(Z.a)(E,f,(function(t,e){var n=e.payload;return[].concat(Object(nt.a)(t),[n])})),Object(Z.a)(E,O,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==Number(n)}))})),E)),st=Object(u.c)("",Object(Z.a)({},_,(function(t,e){return e.payload}))),it=Object(u.c)(!1,(z={},Object(Z.a)(z,l,(function(){return!0})),Object(Z.a)(z,b,(function(){return!1})),Object(Z.a)(z,j,(function(){return!1})),Object(Z.a)(z,m,(function(){return!0})),Object(Z.a)(z,f,(function(){return!1})),Object(Z.a)(z,p,(function(){return!1})),Object(Z.a)(z,d,(function(){return!0})),Object(Z.a)(z,O,(function(){return!1})),Object(Z.a)(z,h,(function(){return!1})),z)),ut=Object(u.c)(null,{}),lt=Object(rt.c)({items:ot,filter:st,loading:it,error:ut}),bt=n(11),jt=[].concat(Object(nt.a)(Object(u.d)({serializableCheck:{ignoredActions:[bt.a,bt.f,bt.b,bt.c,bt.d,bt.e]}})),[at.a]),mt=Object(u.a)({reducer:{contacts:lt},middleware:jt,devTools:!1});o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(i.a,{store:mt,children:Object(k.jsx)(s.a,{children:Object(k.jsx)(et,{})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.bb0394fa.chunk.js.map