(function(t){function e(e){for(var a,u,i=e[0],r=e[1],l=e[2],p=0,m=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&m.push(o[u][0]),o[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);s&&s(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},c=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0639":function(t,e,n){"use strict";var a=n("8be1"),o=n.n(a);e["default"]=o.a},1:function(t,e){},"12d4":function(t,e,n){},"491c":function(t,e,n){"use strict";var a=n("4933"),o=n.n(a);o.a},4933:function(t,e,n){},"4ac7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("28dd"),c=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("TITLE")]),n("ul",t._l(t.contacts,(function(e){return n("li",{key:e.id},[n("a",{on:{click:function(n){return t.showContact(e.id)}}},[t._v(t._s(e.name))])])})),0)])},i=[],r=n("9f12"),l=n("53fe"),s=n("bc3a"),p=n.n(s),m=function(){function t(){Object(r["a"])(this,t),this._axiosInstance=p.a.create({baseURL:"https://localhost:44314/contact-list"})}return Object(l["a"])(t,[{key:"axios",get:function(){return this._axiosInstance}}]),t}(),d=new m,h=function(){function t(){Object(r["a"])(this,t)}return Object(l["a"])(t,[{key:"addNewContact",value:function(t,e,n){return d.axios.post("/Adicionar",{name:t,phone:e,email:n})}},{key:"updateContact",value:function(t){return d.axios.put("/UpdateContact",t)}},{key:"getContact",value:function(t){return d.axios.get("Contact/"+t)}},{key:"getAllContacts",value:function(){return d.axios.get("/GetAllContacts")}},{key:"deleteContact",value:function(t){return d.axios.delete("/DeleteContact",{data:{id:t.id}})}}]),t}(),f=new h,v={data:function(){return{contacts:[],addedId:""}},created:function(){var t=this;f.getAllContacts().then((function(e){return t.contacts=e.data}))},methods:{showContact:function(t){this.$router.push("contact/"+t)}}},b=v,x=n("2877"),_=Object(x["a"])(b,u,i,!1,null,"52c23c2e",null),I=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"header-text"},[t._v("Fill in the details to add a new contact")]),n("div",[n("InputFormName",{ref:"input",attrs:{"preInputName:":t.preInputName},model:{value:t.contactInputName,callback:function(e){t.contactInputName=e},expression:"contactInputName"}}),n("InputEmail",{attrs:{placeholder:"Type contact email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("div",[n("InputPhoneNumber",{attrs:{placeholder:"Type contact phone number"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}}),n("InputCheckbox",{model:{value:t.isWhatsApp,callback:function(e){t.isWhatsApp=e},expression:"isWhatsApp"}})],1),n("div",[n("CommonButton",{on:{click:t.addContact}},[t._v("Confirm")])],1)])},C=[],y=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputName",{attrs:{placeholder:"Type contact name"},on:{input:t.emitValue},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})}),E=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},O=[],P={props:{value:""},methods:{updateSelf:function(t){this.$emit("input",t)}}},j=P,w={mixins:[j]},g=w,$=(n("8081"),Object(x["a"])(g,N,O,!1,null,"bff84374",null)),A=$.exports,W={components:{InputName:A},props:{preInputName:""},mounted:function(){this.name=this.preInputName},data:function(){return{name:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.name)}}},S=W,F=Object(x["a"])(S,y,E,!1,null,"0dc399af",null),T=F.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"email"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},B=[],D={mixins:[j]},H=D,M=(n("cd45"),Object(x["a"])(H,V,B,!1,null,"6ddd44d6",null)),U=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},J=[],G=n("7fd9"),R={mixins:[j],mounted:function(){new G["a"](this.$el,{numericOnly:!0,blocks:[0,2,0,9],delimiters:["(",")"," "]})}},q=R,z=(n("f169"),Object(x["a"])(q,L,J,!1,null,"0b599747",null)),K=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"checkbox"},domProps:{checked:t.value},on:{change:function(e){return t.updateSelf(e.target.checked)},click:t.click}})},X=[],Y={mixins:[j],methods:{click:function(){this.$emit("click")}}},Z=Y,tt=Object(x["a"])(Z,Q,X,!1,null,"008bf211",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.onClick}})},at=[],ot={methods:{onClick:function(){this.$emit("click")}}},ct=ot,ut={mixins:[ct]},it=ut,rt=Object(x["a"])(it,nt,at,!1,null,"460f3674",null),lt=rt.exports,st={data:function(){return{name:"",email:"",phoneNumber:"",isWhatsApp:!1}},components:{InputFormName:T,InputEmail:U,InputPhoneNumber:K,InputCheckbox:et,CommonButton:lt},methods:{addContact:function(){var t=this,e={number:t.phoneNumber,isWhatsApp:t.isWhatsApp},n={emailAddress:t.email};f.addNewContact(t.name,e,n)}}},pt=st,mt=(n("f707"),Object(x["a"])(pt,k,C,!1,null,"62d6035b",null)),dt=mt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"header-text"},[t._v("Fill in the details to add a new contact")]),n("div",[n("InputFormName",{attrs:{preInputName:t.preInputName},model:{value:t.contactName,callback:function(e){t.contactName=e},expression:"contactName"}}),n("InputFormEmail",{attrs:{preInputEmail:t.preInputEmail},model:{value:t.contactEmail,callback:function(e){t.contactEmail=e},expression:"contactEmail"}})],1),n("div",[n("InputFormPhone",{attrs:{preInputEmail:t.preInputPhone},model:{value:t.contactPhone,callback:function(e){t.contactPhone=e},expression:"contactPhone"}}),n("InputCheckbox",{model:{value:t.isWhatsApp,callback:function(e){t.isWhatsApp=e},expression:"isWhatsApp"}})],1),n("div",[n("CommonButton",{on:{click:t.updateContact}},[t._v("Update")]),n("CommonButton",{on:{click:t.deleteContact}},[t._v("Delete")])],1)])},ft=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputEmail",{attrs:{placeholder:"Type contact email"},on:{input:t.emitValue},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})},bt=[],xt={components:{InputEmail:U},props:{preInputEmail:""},mounted:function(){this.email=this.preInputEmail},data:function(){return{email:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.name)}}},_t=xt,It=Object(x["a"])(_t,vt,bt,!1,null,"6802017b",null),kt=It.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputPhone",{attrs:{placeholder:"Type contact phone"},on:{input:t.emitValue},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})},yt=[],Et={components:{InputPhone:K},props:{preInputPhone:""},mounted:function(){this.phone=this.preInputPhone},data:function(){return{phone:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.name)}}},Nt=Et,Ot=Object(x["a"])(Nt,Ct,yt,!1,null,"7e084a62",null),Pt=Ot.exports,jt={data:function(){return{contact:{},isWhatsApp:!1,preInputName:"",preInputEmail:"",preInputPhone:"",contactName:"",contactEmail:"",contactPhone:""}},components:{InputFormName:T,InputFormEmail:kt,InputFormPhone:Pt,InputCheckbox:et,CommonButton:lt},mounted:function(){this.loadContactData(this.$route.params.id)},methods:{loadContactData:function(t){var e=this;f.getContact(t).then((function(t){e.contact=t.data,e.contactName=t.data.name,e.contactEmail=t.data.email.emailAddress,e.contactPhone=t.data.phone.number,e.isWhatsApp=t.data.phone.isWhatsApp}))},updateContact:function(){this.contact.name=this.contactName,this.contact.email.emailAddress=this.contactEmail,this.contact.phone.number=this.contactPhone,this.contact.phone.isWhatsApp=this.isWhatsApp,f.updateContact(this.contact)},deleteContact:function(){f.deleteContact(this.contact)}}},wt=jt,gt=Object(x["a"])(wt,ht,ft,!1,null,"311ac2f0",null),$t=gt.exports;a["a"].use(c["a"]);var At=new c["a"]({mode:"history",routes:[{path:"/",name:"Home",component:I},{path:"/add-new-contact",name:"AddNewContact",component:dt},{path:"/contact/:id",name:"UpdateContact",component:$t}]}),Wt=At,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("StructureHeader")],1),n("router-view")],1)},Ft=[],Tt=n("7c55"),Vt={name:"app",components:{Home:I,StructureHeader:Tt["default"]}},Bt=Vt,Dt=Object(x["a"])(Bt,St,Ft,!1,null,null,null),Ht=Dt.exports;a["a"].config.productionTip=!0,a["a"].use(o["a"]),new a["a"]({render:function(t){return t(Ht)},router:Wt}).$mount("#app")},"7c55":function(t,e,n){"use strict";var a=n("baa8"),o=n("0639"),c=(n("491c"),n("2877")),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"2821db3e",null);e["default"]=u.exports},8081:function(t,e,n){"use strict";var a=n("edee"),o=n.n(a);o.a},"8be1":function(t,e){},a1a9:function(t,e,n){},baa8:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("div",{staticClass:"box-nav"},[n("a",{attrs:{href:"http://localhost:1337/"}},[t._v("Contact List")]),n("a",{attrs:{href:"http://localhost:1337/add-new-contact"}},[t._v("Adicionar novo contato")])])])])}];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}))},cd45:function(t,e,n){"use strict";var a=n("a1a9"),o=n.n(a);o.a},edee:function(t,e,n){},f169:function(t,e,n){"use strict";var a=n("12d4"),o=n.n(a);o.a},f707:function(t,e,n){"use strict";var a=n("4ac7"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a720602f.js.map