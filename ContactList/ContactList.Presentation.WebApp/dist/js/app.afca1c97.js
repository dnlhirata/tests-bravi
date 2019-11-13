(function(t){function e(e){for(var a,i,u=e[0],r=e[1],l=e[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,u=1;u<n.length;u++){var r=n[u];0!==o[r]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0639":function(t,e,n){"use strict";var a=n("8be1"),o=n.n(a);e["default"]=o.a},"0d39":function(t,e,n){"use strict";var a=n("aac7"),o=n.n(a);e["default"]=o.a},1:function(t,e){},"12d4":function(t,e,n){},"3b80":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("a",{staticClass:"logo",attrs:{href:"http://localhost:80/"}},[t._v("Contact List")]),n("nav",[n("div",{staticClass:"links-right"},[n("a",{attrs:{href:"http://localhost:80/add-new-contact"}},[t._v("Adicionar novo contato")])])])])}];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}))},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("28dd"),c=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("table",{attrs:{align:"center"}},[t._m(0),n("tbody",t._l(t.contacts,(function(e){return n("tr",{key:e.id},[n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return t.showContact(e.id)}}},[t._v(t._s(e.name))])]),n("td",[t._v(t._s(e.email.emailAddress))]),n("td",[t._v(t._s(e.phone.number))]),n("td",[t._v(t._s(e.phone.isWhatsApp))]),n("td",{attrs:{align:"center"}},[n("button",[n("img",{staticClass:"icon-small",attrs:{src:"/images/delete-icon.png"},on:{click:function(n){return t.deleteContact(e.id)}}})])])])})),0)])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Email")]),n("th",[t._v("Phone")]),n("th",[t._v("Is WhatsApp?")]),n("th",[t._v("Delete?")])])}],r=n("9f12"),l=n("53fe"),s=n("bc3a"),p=n.n(s),d=function(){function t(){Object(r["a"])(this,t),this._axiosInstance=p.a.create({baseURL:"http://localhost:52168/contact-list"})}return Object(l["a"])(t,[{key:"axios",get:function(){return this._axiosInstance}}]),t}(),f=new d,h=function(){function t(){Object(r["a"])(this,t)}return Object(l["a"])(t,[{key:"addNewContact",value:function(t,e,n){return f.axios.post("/Adicionar",{name:t,phone:e,email:n})}},{key:"updateContact",value:function(t){return f.axios.put("/UpdateContact",t)}},{key:"getContact",value:function(t){return f.axios.get("Contact/"+t)}},{key:"getAllContacts",value:function(){return f.axios.get("/GetAllContacts")}},{key:"deleteContact",value:function(t){return f.axios.delete("/DeleteContact",{data:t})}}]),t}(),m=new h,v=n("b850"),b={components:{InputImage:v["default"]},data:function(){return{contacts:[]}},created:function(){var t=this;m.getAllContacts().then((function(e){return t.contacts=e.data}))},methods:{showContact:function(t){this.$router.push({name:"UpdateContact",params:{id:t}})},deleteContact:function(t){m.getContact(t).then((function(t){var e=t.data;m.deleteContact(e).then(location.reload())}))}}},_=b,C=(n("eee8"),n("2877")),y=Object(C["a"])(_,i,u,!1,null,"0979b696",null),k=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.lines,(function(e,a){return n("div",{key:a,staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("q-select",{attrs:{"float-label":"Country Code",options:t.countryPhoneCodes},model:{value:e.countryCode,callback:function(n){t.$set(e,"countryCode",n)},expression:"line.countryCode"}})],1),n("div",{staticClass:"col-10"},[n("q-field",[n("q-input",{attrs:{"float-label":"Phone Number","numeric-keyboard-toggle":"",placeholder:"5551234567",type:"text",value:""},model:{value:e.number,callback:function(n){t.$set(e,"number",n)},expression:"line.number"}})],1)],1)])]),n("div",{staticClass:"col-lg-4"},[n("q-select",{attrs:{"float-label":"Type of Usage",options:t.phoneUsageTypes},model:{value:e.phoneUsageType,callback:function(n){t.$set(e,"phoneUsageType",n)},expression:"line.phoneUsageType"}})],1),n("div",{staticClass:"col-lg-2"},[n("div",{staticClass:"block float-right"},[n("q-btn",{attrs:{icon:"delete",round:""},on:{click:function(e){return t.removeLine(a)}}}),a+1===t.lines.length?n("b-button",{attrs:{variant:"success"},on:{click:t.addLine}}):t._e()],1)])])})),0)},g=[],E=(n("4de4"),n("a434"),{name:"PhoneNumberLine",data:function(){return{lines:[],blockRemoval:!0,phoneUsageTypes:[{label:"Home",value:"home"},{label:"Work",value:"work"},{label:"Mobile",value:"mobile"},{label:"Fax",value:"fax"}],countryPhoneCodes:[{label:"+90",value:"+90"},{label:"+1",value:"+1"}]}},watch:{lines:function(){this.blockRemoval=this.lines.length<=1}},methods:{addLine:function(){var t=this.lines.filter((function(t){return null===t.number}));t.length>=1&&this.lines.length>0||this.lines.push({countryCode:null,number:null,phoneUsageType:null})},removeLine:function(t){this.blockRemoval||this.lines.splice(t,1)}},mounted:function(){this.addLine()}}),I=E,$=(n("976c"),Object(C["a"])(I,x,g,!1,null,"6f48bed2",null)),O=$.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"header-text"},[t._v("Fill in the details to add a new contact")]),n("div",[n("InputFormName",{attrs:{preInputName:t.preInputName},model:{value:t.contactName,callback:function(e){t.contactName=e},expression:"contactName"}})],1),n("div",[n("InputFormEmail",{attrs:{preInputEmail:t.preInputEmail},model:{value:t.contactEmail,callback:function(e){t.contactEmail=e},expression:"contactEmail"}}),n("InputFormPhone",{attrs:{preInputEmail:t.preInputPhone},model:{value:t.contactPhone,callback:function(e){t.contactPhone=e},expression:"contactPhone"}}),n("InputCheckbox",{model:{value:t.isWhatsApp,callback:function(e){t.isWhatsApp=e},expression:"isWhatsApp"}},[t._v("The phone number is a WhatsApp number?")])],1),n("div",[n("UpdateButton",{on:{click:t.updateContact}},[t._v("Update")]),n("DeleteButton",{on:{click:t.deleteContact}},[t._v("Delete")])],1)])},j=[],w=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputName",{attrs:{placeholder:"Type contact name"},on:{input:t.emitValue},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})}),A=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},T=[],U={props:{value:""},methods:{updateSelf:function(t){this.$emit("input",t)}}},S=U,W={mixins:[S]},L=W,D=(n("8081"),Object(C["a"])(L,N,T,!1,null,"bff84374",null)),F=D.exports,q={components:{InputName:F},props:{preInputName:""},mounted:function(){this.name=this.preInputName},data:function(){return{name:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.name)}}},V=q,H=Object(C["a"])(V,w,A,!1,null,"0dc399af",null),M=H.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputEmail",{attrs:{placeholder:"Type contact email"},on:{input:t.emitValue},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})},R=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"email"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},G=[],z={mixins:[S]},K=z,Q=(n("cd45"),Object(C["a"])(K,J,G,!1,null,"6ddd44d6",null)),X=Q.exports,Y={components:{InputEmail:X},props:{preInputEmail:""},mounted:function(){this.email=this.preInputEmail},data:function(){return{email:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.email)}}},Z=Y,tt=Object(C["a"])(Z,B,R,!1,null,"e2993bc8",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputPhone",{attrs:{placeholder:"Type contact phone"},on:{input:t.emitValue},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},domProps:{value:t.value},on:{keyup:function(e){return t.updateSelf(e.target.value)}}})},ct=[],it=n("7fd9"),ut={mixins:[S],mounted:function(){new it["a"](this.$el,{numericOnly:!0,blocks:[0,2,0,9],delimiters:["(",")"," "]})}},rt=ut,lt=(n("f169"),Object(C["a"])(rt,ot,ct,!1,null,"0b599747",null)),st=lt.exports,pt={components:{InputPhone:st},props:{preInputPhone:""},mounted:function(){this.phone=this.preInputPhone},data:function(){return{phone:""}},methods:{emitValue:function(){this.error=!1,this.$emit("input",this.phone)}}},dt=pt,ft=Object(C["a"])(dt,nt,at,!1,null,"4e165a36",null),ht=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.value},on:{change:function(e){return t.updateSelf(e.target.checked)},click:t.click}}),n("label",[t._t("default")],2)])},vt=[],bt={mixins:[S],methods:{click:function(){this.$emit("click")}}},_t=bt,Ct=(n("83f6"),Object(C["a"])(_t,mt,vt,!1,null,"fac80246",null)),yt=Ct.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.onClick}},[t._v("Confirm")])},xt=[],gt={methods:{onClick:function(){this.$emit("click")}}},Et=gt,It={mixins:[Et]},$t=It,Ot=(n("be25"),Object(C["a"])($t,kt,xt,!1,null,"a6b2b476",null)),Pt=Ot.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.onClick}},[t._v("Delete")])},wt=[],At={mixins:[Et]},Nt=At,Tt=(n("f804"),Object(C["a"])(Nt,jt,wt,!1,null,"741fd54d",null)),Ut=Tt.exports,St={data:function(){return{contact:{},isWhatsApp:!1,preInputName:"",preInputEmail:"",preInputPhone:"",contactName:"",contactEmail:"",contactPhone:""}},components:{InputFormName:M,InputFormEmail:et,InputFormPhone:ht,InputCheckbox:yt,UpdateButton:Pt,DeleteButton:Ut},mounted:function(){this.loadContactData(this.$route.params.id)},methods:{loadContactData:function(t){var e=this;m.getContact(t).then((function(t){e.contact=t.data,e.contactName=t.data.name,e.contactEmail=t.data.email.emailAddress,e.contactPhone=t.data.phone.number,e.isWhatsApp=t.data.phone.isWhatsApp}))},updateContact:function(){var t=this;t.contact.name=t.contactName,t.contact.email.emailAddress=t.contactEmail,this.contact.phone.number=this.contactPhone,this.contact.phone.isWhatsApp=this.isWhatsApp,m.updateContact(this.contact).then((function(){t.$router.push("/"),location.reload()}))},deleteContact:function(){var t=this;m.deleteContact(this.contact).then((function(){t.$router.push("/"),location.reload()}))}}},Wt=St,Lt=Object(C["a"])(Wt,P,j,!1,null,"0ca2b56a",null),Dt=Lt.exports;a["default"].use(c["a"]);var Ft=new c["a"]({mode:"history",routes:[{path:"/",name:"Home",component:k},{path:"/add-new-contact",name:"AddNewContact",component:O},{path:"/contact/:id",name:"UpdateContact",component:Dt,props:{id:{Type:String,required:!0}}}]}),qt=Ft,Vt=n("5f5b"),Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("title",[t._v("Contact List")]),n("header",[n("StructureHeader")],1),n("router-view")],1)},Mt=[],Bt=n("7c55"),Rt={name:"app",components:{Home:k,StructureHeader:Bt["default"]}},Jt=Rt,Gt=Object(C["a"])(Jt,Ht,Mt,!1,null,null,null),zt=Gt.exports;n("f9e3"),n("2dd8");a["default"].config.productionTip=!0,a["default"].use(o["a"]),a["default"].use(Vt["a"]),new a["default"]({render:function(t){return t(zt)},router:qt}).$mount("#app")},"57ed":function(t,e,n){"use strict";var a=n("e96a"),o=n.n(a);o.a},"77f8":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("3b80"),o=n("0639"),c=(n("57ed"),n("2877")),i=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"fbb4c036",null);e["default"]=i.exports},8081:function(t,e,n){"use strict";var a=n("edee"),o=n.n(a);o.a},"83f6":function(t,e,n){"use strict";var a=n("77f8"),o=n.n(a);o.a},"8be1":function(t,e){},"976c":function(t,e,n){"use strict";var a=n("a329"),o=n.n(a);o.a},a1a9:function(t,e,n){},a329:function(t,e,n){},aac7:function(t,e){},b850:function(t,e,n){"use strict";var a=n("d0d2"),o=n("0d39"),c=n("2877"),i=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"033af1b2",null);e["default"]=i.exports},be25:function(t,e,n){"use strict";var a=n("e4da"),o=n.n(a);o.a},be56:function(t,e,n){},cd45:function(t,e,n){"use strict";var a=n("a1a9"),o=n.n(a);o.a},d0d2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"image"}})},o=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}))},e103:function(t,e,n){},e4da:function(t,e,n){},e96a:function(t,e,n){},edee:function(t,e,n){},eee8:function(t,e,n){"use strict";var a=n("e103"),o=n.n(a);o.a},f169:function(t,e,n){"use strict";var a=n("12d4"),o=n.n(a);o.a},f804:function(t,e,n){"use strict";var a=n("be56"),o=n.n(a);o.a}});
//# sourceMappingURL=app.afca1c97.js.map