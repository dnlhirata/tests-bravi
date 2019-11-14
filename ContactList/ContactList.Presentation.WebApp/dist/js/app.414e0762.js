(function(e){function t(t){for(var a,r,l=t[0],o=t[1],c=t[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0639":function(e,t,n){"use strict";var a=n("8be1"),s=n.n(a);t["default"]=s.a},"080e":function(e,t,n){},"0d39":function(e,t,n){"use strict";var a=n("aac7"),s=n.n(a);t["default"]=s.a},1:function(e,t){},"3b80":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("a",{staticClass:"logo",attrs:{href:"http://localhost:80/"}},[e._v("Contact List")]),n("nav",[n("div",{staticClass:"links-right"},[n("a",{attrs:{href:"http://localhost:80/add-new-contact"}},[e._v("Adicionar novo contato")])])])])}];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}))},"556b":function(e,t,n){"use strict";var a=n("8b8d"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("28dd"),i=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("table",{attrs:{align:"center"}},[e._m(0),n("tbody",e._l(e.contacts,(function(t){return n("tr",{key:t.id},[n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return e.showContact(t.id)}}},[e._v(e._s(t.name))])]),n("td",[e._v(e._s(e._f("getEmailAddress")(e._f("primaryEmail")(t.emails))))]),n("td",[e._v(e._s(e._f("getNumber")(e._f("primaryPhone")(t.phones))))]),n("td",[e._v(e._s(e._f("getIsWhatsApp")(e._f("primaryPhone")(t.phones))))]),n("td",{attrs:{align:"center"}},[n("button",[n("img",{staticClass:"icon-small",attrs:{src:"/images/delete-icon.png"},on:{click:function(n){return e.deleteContact(t.id)}}})])])])})),0)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Email")]),n("th",[e._v("Phone")]),n("th",[e._v("Is WhatsApp?")]),n("th",[e._v("Delete?")])])}],o=(n("7db0"),n("9f12")),c=n("53fe"),u=n("bc3a"),m=n.n(u),d=function(){function e(){Object(o["a"])(this,e),this._axiosInstance=m.a.create({baseURL:"http://localhost:52168/contact-list"})}return Object(c["a"])(e,[{key:"axios",get:function(){return this._axiosInstance}}]),e}(),p=new d,f=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,[{key:"addNewContact",value:function(e,t,n){return p.axios.post("/Adicionar",{name:e,phone:t,email:n})}},{key:"updateContact",value:function(e){return p.axios.put("/UpdateContact",e)}},{key:"getContact",value:function(e){return p.axios.get("Contact/"+e)}},{key:"getAllContacts",value:function(){return p.axios.get("/GetAllContacts")}},{key:"deleteContact",value:function(e){return p.axios.delete("/DeleteContact",{data:e})}}]),e}(),h=new f,b=n("b850"),v={components:{InputImage:b["default"]},data:function(){return{contacts:[]}},created:function(){var e=this;h.getAllContacts().then((function(t){e.contacts=t.data}))},filters:{primaryPhone:function(e){return e.find((function(e){return 1==e.isPrimary}))},getNumber:function(e){return e.number},getIsWhatsApp:function(e){return e.isWhatsApp},primaryEmail:function(e){return e.find((function(e){return 1==e.isPrimary}))},getEmailAddress:function(e){return e.emailAddress}},methods:{showContact:function(e){this.$router.push({name:"UpdateContact",params:{id:e}})},deleteContact:function(e){h.getContact(e).then((function(e){var t=e.data;h.deleteContact(t).then(location.reload())}))}}},y=v,_=(n("82b6"),n("2877")),g=Object(_["a"])(y,r,l,!1,null,"253cc781",null),C=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("b-card",{attrs:{"bg-variant":"light"}},e._l(e.lines,(function(t,a){return n("b-form-group",{key:a,staticClass:"mb-0",attrs:{"label-cols-lg":"1",label:"Phone Info","label-size":"lg","label-class":"font-weight-bold pt-0"}},[n("b-form",{attrs:{inline:""}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-number"}},[e._v("Number")]),n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-name",placeholder:"Type phone number"},model:{value:t.number,callback:function(n){e.$set(t,"number",n)},expression:"line.number"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-type"}},[e._v("Type")]),n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0 col-2",attrs:{id:"inline-form-input-username",options:e.phoneTypes},model:{value:t.phoneUsageType,callback:function(n){e.$set(t,"phoneUsageType",n)},expression:"line.phoneUsageType"}}),n("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e._v("Is WhatsApp?")]),n("b-input-group",[a+1===e.lines.length?n("b-btn",{staticClass:"mr-sm-2 mb-sm-0",attrs:{pill:"",variant:"success"},on:{click:e.addLine}},[e._v("-")]):e._e(),n("b-btn",{attrs:{pill:"",variant:"danger"},on:{click:function(t){return e.removeLine(a)}}},[e._v("+")])],1)],1)],1)})),1)],1)},P=[],k=(n("4de4"),n("a434"),{name:"PhoneNumberLine",data:function(){return{lines:[],blockRemoval:!0,phoneTypes:[{text:"Home",value:"home"},{text:"Work",value:"work"},{text:"Mobile",value:"mobile"},{text:"Fax",value:"fax"}],dddCodes:[{text:"11",value:"11"},{text:"21",value:"21"}]}},watch:{lines:function(){this.blockRemoval=this.lines.length<=1}},methods:{addLine:function(){var e=this.lines.filter((function(e){return null===e.number}));e.length>=1&&this.lines.length>0||this.lines.push({countryCode:null,number:null,phoneUsageType:null})},removeLine:function(e){this.blockRemoval||this.lines.splice(e,1)}},mounted:function(){this.addLine()}}),E=k,w=(n("c0a2"),Object(_["a"])(E,x,P,!1,null,"4aacd58d",null)),T=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("FormPhone",{attrs:{phones:e.phones},on:{deletePhone:e.deletePhone}}),n("FormEmail",{attrs:{emails:e.emails},on:{deleteEmail:e.deleteEmail}})],1)},j=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spaced"},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"1",label:"Phone Info","label-size":"lg","label-class":"font-weight-bold pt-0"}},e._l(e.phones,(function(t,a){return n("FormPhoneFields",{key:a,attrs:{phone:t},on:{deletePhone:e.deletePhone}})})),1),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.addPhoneLine}},[e._v("Add phone")])],1)],1)},$=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form",{staticClass:"spaced-field",attrs:{inline:""}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-number"}},[e._v("Number")]),n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-name",placeholder:"Type phone number"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-type"}},[e._v("Type")]),n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0 col-2",attrs:{id:"inline-form-input-type",options:e.phoneTypes},model:{value:e.phoneType,callback:function(t){e.phoneType=t},expression:"phoneType"}}),n("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:e.isWpp,callback:function(t){e.isWpp=t},expression:"isWpp"}},[e._v("Is WhatsApp?")]),n("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:e.isPrimary,callback:function(t){e.isPrimary=t},expression:"isPrimary"}},[e._v("Is primary number?")]),n("b-button",{staticClass:"delete-btn"},[n("img",{staticClass:"icon-small",attrs:{src:"/images/delete-phone.png"},on:{click:function(t){return e.deletePhone(e.phone)}}})])],1),e.message?n("p",{staticClass:"error-message"},[e._v(e._s(e.message))]):e._e()],1)},F=[],I={props:["phone"],data:function(){return{phoneTypes:[{text:"Home",value:"home"},{text:"Work",value:"work"},{text:"Mobile",value:"mobile"},{text:"Fax",value:"fax"}],number:"",phoneType:"",isWpp:!1,isPrimary:!1,message:""}},mounted:function(){this.number=this.phone.number,this.isWpp=this.phone.isWhatsApp,this.isPrimary=this.phone.isPrimary,this.phoneType=this.phone.type},methods:{deletePhone:function(e){e.isPrimary?this.message="You cannot delete primary number":this.$emit("deletePhone",e)}}},L=I,N=(n("de76"),Object(_["a"])(L,W,F,!1,null,"0e1fab45",null)),S=N.exports,U={components:{FormPhoneFields:S},props:["phones"],data:function(){return{phone:""}},methods:{deletePhone:function(e){null!=e.id?this.$emit("deletePhone",e):this.phones.pop()},addPhoneLine:function(){this.phones.push({number:null,type:null,isWhatsApp:null,isPrimary:null})}}},D=U,H=(n("6bd8"),Object(_["a"])(D,A,$,!1,null,"130ccbaa",null)),M=H.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spaced"},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"1",label:"Email Info","label-size":"lg","label-class":"font-weight-bold pt-0"}},e._l(e.emails,(function(t,a){return n("FormEmailFields",{key:a,attrs:{email:t},on:{deleteEmail:e.deleteEmail}})})),1),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.addEmailLine}},[e._v("Add email")])],1)],1)},R=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form",{staticClass:"spaced-field",attrs:{inline:""}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-email-address"}},[e._v("Email")]),n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-email-address",placeholder:"Type email address"},model:{value:e.emailAddress,callback:function(t){e.emailAddress=t},expression:"emailAddress"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-type"}},[e._v("Type")]),n("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0 col-2",attrs:{id:"inline-form-input-type",options:e.emailTypes},model:{value:e.emailType,callback:function(t){e.emailType=t},expression:"emailType"}}),n("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:e.isPrimary,callback:function(t){e.isPrimary=t},expression:"isPrimary"}},[e._v("Is primary email?")]),n("b-button",{staticClass:"delete-btn"},[n("img",{staticClass:"icon-small",attrs:{src:"/images/delete-phone.png"},on:{click:function(t){return e.deleteEmail(e.email)}}})])],1),e.message?n("p",{staticClass:"error-message"},[e._v(e._s(e.message))]):e._e()],1)},Y=[],q={props:["email"],data:function(){return{emailTypes:[{text:"Personal",value:"personal"},{text:"Work",value:"work"}],emailAddress:"",emailType:"",isPrimary:!1,message:""}},mounted:function(){this.emailAddress=this.email.emailAddress,this.isPrimary=this.email.isPrimary,this.phoneType=this.email.type},methods:{deleteEmail:function(e){e.isPrimary?this.message="You cannot delete primary email":this.$emit("deleteEmail",e)}}},G=q,B=Object(_["a"])(G,J,Y,!1,null,"f330674c",null),K=B.exports,Q={components:{FormEmailFields:K},props:["emails"],data:function(){return{email:""}},methods:{deleteEmail:function(e){null!=e.id?this.$emit("deleteEmail",e):this.emails.pop()},addEmailLine:function(){this.emails.push({emailAddress:null,type:null,isPrimary:null})}}},V=Q,X=(n("556b"),Object(_["a"])(V,z,R,!1,null,"571bcd77",null)),Z=X.exports,ee=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,[{key:"deletePhone",value:function(e){return p.axios.delete("/DeletePhone",{data:e})}}]),e}(),te=new ee,ne=function(){function e(){Object(o["a"])(this,e)}return Object(c["a"])(e,[{key:"deleteEmail",value:function(e){return p.axios.delete("/DeletEmail",{data:e})}}]),e}(),ae=new ne,se={components:{FormPhone:M,FormEmail:Z},data:function(){return{phones:[],phone:{},emails:{},email:{}}},mounted:function(){this.loadContactData(this.$route.params.id)},methods:{loadContactData:function(e){var t=this;h.getContact(e).then((function(e){t.phones=e.data.phones,t.emails=e.data.emails}))},deletePhone:function(e){te.deletePhone(e)},deleteEmail:function(e){ae.deleteEmail(e)}}},ie=se,re=Object(_["a"])(ie,O,j,!1,null,"e2b02d5a",null),le=re.exports;a["default"].use(i["a"]);var oe=new i["a"]({mode:"history",routes:[{path:"/",name:"Home",component:C},{path:"/add-new-contact",name:"AddNewContact",component:T},{path:"/contact/:id",name:"UpdateContact",component:le,props:{id:{Type:String,required:!0}}}]}),ce=oe,ue=n("5f5b"),me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("title",[e._v("Contact List")]),n("header",[n("StructureHeader")],1),n("router-view")],1)},de=[],pe=n("7c55"),fe={name:"app",components:{Home:C,StructureHeader:pe["default"]}},he=fe,be=Object(_["a"])(he,me,de,!1,null,null,null),ve=be.exports;n("f9e3"),n("2dd8");a["default"].config.productionTip=!0,a["default"].use(s["a"]),a["default"].use(ue["a"]),new a["default"]({render:function(e){return e(ve)},router:ce}).$mount("#app")},"57ed":function(e,t,n){"use strict";var a=n("e96a"),s=n.n(a);s.a},"6bd8":function(e,t,n){"use strict";var a=n("080e"),s=n.n(a);s.a},7208:function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("3b80"),s=n("0639"),i=(n("57ed"),n("2877")),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"fbb4c036",null);t["default"]=r.exports},"82b6":function(e,t,n){"use strict";var a=n("7208"),s=n.n(a);s.a},"8b8d":function(e,t,n){},"8be1":function(e,t){},aac7:function(e,t){},b850:function(e,t,n){"use strict";var a=n("d0d2"),s=n("0d39"),i=n("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"033af1b2",null);t["default"]=r.exports},c0a2:function(e,t,n){"use strict";var a=n("ccbb"),s=n.n(a);s.a},ccbb:function(e,t,n){},d0d2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{attrs:{type:"image"}})},s=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}))},de76:function(e,t,n){"use strict";var a=n("fcb7"),s=n.n(a);s.a},e96a:function(e,t,n){},fcb7:function(e,t,n){}});
//# sourceMappingURL=app.414e0762.js.map