(function(a){function t(t){for(var e,r,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var a,t=0;t<n.length;t++){for(var i=n[t],e=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(e=!1)}e&&(n.splice(t--,1),a=r(r.s=i[0]))}return a}var e={},s={app:0},n=[];function r(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return a[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=a,r.c=e,r.d=function(a,t,i){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:i})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)r.d(i,e,function(t){return a[t]}.bind(null,e));return i},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(a,t,i){a.exports=i("56d7")},"034f":function(a,t,i){"use strict";i("85ec")},"1b99":function(a,t,i){},"1ce4":function(a,t,i){},"471f":function(a,t,i){"use strict";i("7d56")},"56d7":function(a,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),s=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-app",[i("router-view")],1)],1)},n=[],r=(i("034f"),i("2877")),o=i("6544"),c=i.n(o),l=i("7496"),u={},m=Object(r["a"])(u,s,n,!1,null,null,null),d=m.exports;c()(m,{VApp:l["a"]});var f=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("Menu",{attrs:{titulo:a.titulo}}),i("br"),a._m(0),i("form",{class:{cuadroLogin:!this.$vuetify.theme.dark,cuadroLoginOscuro:this.$vuetify.theme.dark},attrs:{action:""}},[i("label",{class:{form_label:!this.$vuetify.theme.dark,form_label_oscuro:this.$vuetify.theme.dark},attrs:{for:"#email"}},[a._v("Correo electrónico:")]),i("input",{class:{form_input:!this.$vuetify.theme.dark,form_input_oscuro:this.$vuetify.theme.dark},attrs:{type:"email",id:"email",required:"",placeholder:"usuario@dominio.com"}}),i("label",{class:{form_label:!this.$vuetify.theme.dark,form_label_oscuro:this.$vuetify.theme.dark},attrs:{for:"#password"}},[a._v("Contraseña:")]),i("input",{class:{form_input:!this.$vuetify.theme.dark,form_input_oscuro:this.$vuetify.theme.dark},attrs:{type:"password",id:"password",required:"",placeholder:"Contraseña"}}),i("br"),i("input",{staticStyle:{color:"#197BF6"},attrs:{type:"submit",value:"¿Has olvidado tu contraseña?"},on:{click:function(t){return a.recuperarContrasena()}}}),i("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Login"},on:{click:function(t){return a.inicioSesion()}}})])],1)},p=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("h3",[a._v("Bienvenido a la plataforma web del proyecto acción. Aquí deberá iniciar sesión para poder acceder al control de su sistema de cámaras de videovigilancia")])])}],v=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{class:{camara_clara:!this.$vuetify.theme.dark,camara_oscura:this.$vuetify.theme.dark}},[i("div",[i("p",[a._v("Cámara de "+a._s(a.nombre)+" "+a._s(a.pos))])]),i("div",{staticClass:"contenedor-img"},[i("img",{attrs:{src:a.imagen,alt:"Imagen de la camara"}})]),i("div",{staticClass:"datos"},[i("div",{staticClass:"boton"},[i("v-switch",{attrs:{inset:"",label:a.getEtiqueta()},model:{value:a.estado,callback:function(t){a.estado=t},expression:"estado"}})],1),i("div",{staticClass:"boton"},[i("input",{staticClass:"grabar",attrs:{type:"button"},on:{click:a.grabar}}),i("p",[a._v("Grabar")])])])])},h=[],g=(i("a9e3"),i("3d20")),b=i.n(g),C={props:{nombre:String,pos:Number,imagen:String,estado:Boolean},data:function(){return{etiqueta:"Encendido"}},methods:{grabar:function(){b.a.fire({title:"¿Quieres programar la grabación de la cámara?",text:"Si no quieres programarla, pulsa grabar para comenzar.",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"Cancelar",denyButtonText:"Grabar",showLoaderOnConfirm:!0}).then((function(a){a.isConfirmed&&b.a.fire({title:"Hora de inicio de la grabación",text:"Recuerda que el tiempo mÁximo de grabación son 8 horas",html:'<input type="time"/>',showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0})}))},getEtiqueta:function(){return this.estado?"Encendido":"Apagado"}}},_=C,y=(i("88a5"),i("b73d")),S=Object(r["a"])(_,v,h,!1,null,"2c2e0054",null),w=S.exports;c()(S,{VSwitch:y["a"]});var x=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("v-app-bar",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#197BF6",dense:"",height:"60px"}},["PROYECTO ACCIÓN"!=a.titulo?i("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),a.drawer=!a.drawer}}}):a._e(),i("v-toolbar-title",{staticClass:"titulo"},[a._v(" "+a._s(a.titulo))]),i("v-spacer"),i("div",{staticStyle:{cursor:"pointer"},attrs:{name:"boton-estado"},on:{click:function(t){return a.cambio()}}},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"2em"},attrs:{icon:"cloud-sun"}}),a._v(" "+a._s(a.modo)+" ")],1)],1),"PROYECTO ACCIÓN"!=a.titulo?i("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[i("v-list",{attrs:{nav:"",dense:""},scopedSlots:a._u([{key:"append",fn:function(){return[i("v-btn",{attrs:{block:""}},[a._v(" Logout ")])]},proxy:!0}],null,!1,4054664392)},[i("v-list-item-group",{attrs:{"active-class":"blue lighten-4--text "},model:{value:a.group,callback:function(t){a.group=t},expression:"group"}},[i("v-list-item",[i("button",{staticClass:"enlace",on:{click:function(t){return a.tiempoReal()}}},[a._v("Cámaras en tiempo real")])]),i("v-list-item",[i("button",{staticClass:"enlace",on:{click:function(t){return a.controlCamaras()}}},[a._v("Gestión del circuito")])]),i("v-list-item",[i("button",{staticClass:"enlace",on:{click:function(t){return a.misGrabaciones()}}},[a._v("Mis grabaciones")])]),i("v-list-item",[i("button",{staticClass:"enlace",on:{click:function(t){return a.reportar()}}},[a._v("Repórtanos errores")])]),i("v-list-item",[i("button",{staticClass:"enlace",on:{click:function(t){return a.cerrarSesion()}}},[a._v("Cerrar sesión")])])],1)],1)],1):a._e()],1)},k=[],O={props:{titulo:{default:"TIEMPO REAL",type:String}},data:function(){return{drawer:!1,group:null,modo:"",tam:screen.availHeight}},mounted:function(){1==this.$vuetify.theme.dark?this.modo="Modo claro":this.modo="Modo oscuro"},methods:{cambio:function(){1==this.$vuetify.theme.dark?(this.modo="Modo oscuro",this.$vuetify.theme.dark=!1):(this.modo="Modo claro",this.$vuetify.theme.dark=!0)},tiempoReal:function(){this.$router.push("/tiempo-real")},controlCamaras:function(){this.$router.push("/control-camaras")},misGrabaciones:function(){this.$router.push("/mis-grabaciones")},cerrarSesion:function(){this.$router.push("/")},reportar:function(){b.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2"]}).queue([{title:"Introduce tu correo electrónico",text:"Te contactaremos si necesitamos más información sobre el incidente"},{title:"Describa el incidente que se ha producido en la aplicación",input:"textarea"}]).then((function(a){if(a.value){JSON.stringify(a.value);b.a.fire({title:"Reporte recibido correctamente",text:"Nos pondremos a solucionarlo en la mayor brevedad posible",confirmButtonText:"Aceptar"})}}))}},watch:{group:function(){this.drawer=!1}}},$=O,E=(i("efa6"),i("40dc")),T=i("5bc1"),j=i("8336"),B=i("8860"),A=i("da13"),I=i("1baa"),R=i("f774"),M=i("2fa4"),G=i("2a7f"),L=Object(r["a"])($,x,k,!1,null,null,null),z=L.exports;c()(L,{VAppBar:E["a"],VAppBarNavIcon:T["a"],VBtn:j["a"],VList:B["a"],VListItem:A["a"],VListItemGroup:I["a"],VNavigationDrawer:R["a"],VSpacer:M["a"],VToolbarTitle:G["a"]});var N=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"aviso"},[i("button",{staticClass:"boton-redondo",on:{click:a.avisar}},[a._m(0)])])},q=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"intermedio"},[i("div",{staticClass:"letra"},[a._v("SOS")])])}],P={methods:{avisar:function(){b.a.fire({title:"¿Esta seguro de avisar a emergencias?",text:"Si avisas, no hay vuelta atras.",showCancelButton:!0,confirmButtonText:"Avisar",cancelButtonText:"Cancelar",showLoaderOnConfirm:!0}).then((function(a){a.isConfirmed&&b.a.fire({title:"AVISO ENVIADO",text:"En poco tiempo contactaran con usted los servicios de emergencias"})}))}}},V=P,D=(i("5db5"),Object(r["a"])(V,N,q,!1,null,null,null)),H=D.exports,F={name:"Login",components:{ActivaCamaras:w,Menu:z,Aviso:H},data:function(){return{titulo:"PROYECTO ACCIÓN",modo:""}},methods:{inicioSesion:function(){this.$router.push("/tiempo-real")},recuperarContrasena:function(){b.a.fire({title:"Introduce el correo electronico de recuperación",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0}).then((function(a){a.isConfirmed&&b.a.fire({title:"Correo electrónico enviado",text:"Se ha enviado un correo electrónico a la cuenta introducida con las instrucciones de recuperación"})}))}}},J=F,Y=(i("471f"),Object(r["a"])(J,f,p,!1,null,"327a1e49",null)),Q=Y.exports,K=i("8c4f"),U=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("Menu",{attrs:{titulo:a.titulo}}),1==a.pag?i("div",{staticClass:"camaras"},a._l(9,(function(t,e){return i("ActivaCamaras",{key:e,attrs:{imagen:"/habitacion.jpg",estado:a.estado,nombre:"salón",pos:t}})})),1):i("div",{staticClass:"camaras"},a._l(9,(function(t,e){return i("ActivaCamaras",{key:e,attrs:{imagen:"/habitacion2.jpg",estado:a.estado,nombre:"habitación",pos:t}})})),1),i("div",{staticClass:"camaras"},[1!=a.pag?i("button",{staticClass:"boton-pag",on:{click:function(t){a.pag--}}},[a._v("Anterior")]):a._e(),i("button",{staticClass:"boton-pag",on:{click:function(t){a.pag=1}}},[a._v("1")]),i("button",{staticClass:"boton-pag",on:{click:function(t){a.pag=2}}},[a._v("2")]),2!=a.pag?i("button",{staticClass:"boton-pag",on:{click:function(t){a.pag++}}},[a._v("Siguiente")]):a._e()]),i("div",[i("button",{staticClass:"boton-apagar",on:{click:a.apagar}},[a._v(" "+a._s(a.camara))])]),i("Aviso")],1)},W=[],X={name:"ControlCamaras",components:{ActivaCamaras:w,Menu:z,Aviso:H},data:function(){return{titulo:"GESTIÓN DE CÁMARAS",pag:1,estado:!0,camara:"Apagar circuito"}},methods:{apagar:function(){var a=this;"Apagar circuito"==this.camara?b.a.fire({title:"¿Esta seguro de apagar todo el circuito de cámaras?",text:"Si apaga el circuito completo no podra observar ningún movimiento de las cámaras",showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"No",showLoaderOnConfirm:!0}).then((function(t){t.isConfirmed&&(a.estado=!1,a.camara="Encender circuito")})):(this.estado=!0,this.camara="Apagar circuito")}}},Z=X,aa=(i("d174"),Object(r["a"])(Z,U,W,!1,null,null,null)),ta=aa.exports,ia=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("Menu",{attrs:{titulo:a.titulo}}),i("div",[i("div",{staticStyle:{cursor:"pointer","margin-left":"5%",width:"200px"},on:{click:a.cambiarDisposicion}},[i("font-awesome-icon",{staticStyle:{"font-size":"1.5em"},attrs:{icon:"th"}}),i("div",{staticStyle:{display:"inline",height:"40px","line-height":"40px","margin-left":"5px"}},[a._v("Cambiar disposición")])],1)]),1==a.disposicion?i("CamarasRT1"):a._e(),2==a.disposicion?i("CamarasRT2"):a._e(),3==a.disposicion?i("CamarasRT3"):a._e(),4==a.disposicion?i("CamarasRT4"):a._e(),i("Aviso"),i("Grabar")],1)},ea=[],sa=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"grabar"},[i("button",{staticClass:"boton-redondo",on:{click:a.grabar}},[i("div",{staticClass:"letra"},[a._v("GRABAR")])])])},na=[],ra={methods:{grabar:function(){b.a.fire({title:"¿Quieres programar la grabación de la cámara?",text:"Si no quieres programarla, pulsa grabar para comenzar.",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"Cancelar",denyButtonText:"Grabar",showLoaderOnConfirm:!0}).then((function(a){a.isConfirmed&&b.a.fire({title:"Hora de inicio de la grabación",text:"Recuerda que el tiempo máximo de grabación son 8 horas",html:'<input type="time"/>',showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0})}))}}},oa=ra,ca=(i("8e67"),Object(r["a"])(oa,sa,na,!1,null,"74b98be3",null)),la=ca.exports,ua=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"disposicion1"},[i("div",{staticClass:"fila"},[i("div",{staticClass:"flechas"},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-left"},on:{click:a.cambiarCamaras}})],1),i("div",{staticClass:"ppal"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"col-lateral"},[i("div",{staticClass:"lateral"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"lateral",staticStyle:{"margin-top":"2%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"lateral",staticStyle:{"margin-top":"2%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])])]),i("div",{staticClass:"flechas",staticStyle:{"margin-left":"2%"}},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-right"},on:{click:a.cambiarCamaras}})],1)]),i("div",{staticClass:"fila2"},[i("div",{staticClass:"inferior"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])])])])},ma=[],da={name:"Camaras1RT",data:function(){return{img:"/habitacion.jpg"}},methods:{cambiarCamaras:function(){"/habitacion.jpg"==this.img?this.img="/habitacion2.jpg":this.img="/habitacion.jpg"}}},fa=da,pa=(i("f589"),Object(r["a"])(fa,ua,ma,!1,null,"3ac4e9e8",null)),va=pa.exports,ha=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"disposicion1"},[i("div",{staticClass:"fila"},[i("div",{staticClass:"flechas"},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-left"},on:{click:a.cambiarCamaras}})],1),i("div",{staticClass:"ppal"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"ppal"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"flechas",staticStyle:{"margin-left":"2%"}},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-right"},on:{click:a.cambiarCamaras}})],1)]),i("div",{staticClass:"fila2"},[i("div",{staticClass:"inferior"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])])])])},ga=[],ba={name:"Camaras1RT",data:function(){return{img:"/habitacion.jpg"}},methods:{cambiarCamaras:function(){"/habitacion.jpg"==this.img?this.img="/habitacion2.jpg":this.img="/habitacion.jpg"}}},Ca=ba,_a=(i("ab20"),Object(r["a"])(Ca,ha,ga,!1,null,"1b174e0c",null)),ya=_a.exports,Sa=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"disposicion1"},[i("div",{staticClass:"fila"},[i("div",{staticClass:"flechas"},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-left"},on:{click:a.cambiarCamaras}})],1),i("div",{staticClass:"ppal"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"flechas",staticStyle:{"margin-left":"2%"}},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-right"},on:{click:a.cambiarCamaras}})],1)]),i("div",{staticClass:"fila2"},[i("div",{staticClass:"inferior"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"inferior",staticStyle:{"margin-left":"5%"}},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])])])])},wa=[],xa={name:"Camaras1RT",data:function(){return{img:"/habitacion.jpg"}},methods:{cambiarCamaras:function(){"/habitacion.jpg"==this.img?this.img="/habitacion2.jpg":this.img="/habitacion.jpg"}}},ka=xa,Oa=(i("d4f0"),Object(r["a"])(ka,Sa,wa,!1,null,"a9a9b616",null)),$a=Oa.exports,Ea=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"disposicion1"},[i("div",{staticClass:"fila"},[i("div",{staticClass:"flechas"},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-left"},on:{click:a.cambiarCamaras}})],1),i("div",{staticClass:"ppal"},[i("img",{staticClass:"imag",attrs:{src:""+a.img,alt:"Imagen de la camara"}}),i("div",{staticClass:"nombre_cam"},[a._v(" Camara Salón ")])]),i("div",{staticClass:"flechas",staticStyle:{"margin-left":"2%"}},[i("font-awesome-icon",{staticStyle:{cursor:"pointer","font-size":"1.5em"},attrs:{icon:"arrow-right"},on:{click:a.cambiarCamaras}})],1)])])},Ta=[],ja={name:"Camaras1RT",data:function(){return{img:"/habitacion.jpg"}},methods:{cambiarCamaras:function(){"/habitacion.jpg"==this.img?this.img="/habitacion2.jpg":this.img="/habitacion.jpg"}}},Ba=ja,Aa=(i("8a29"),Object(r["a"])(Ba,Ea,Ta,!1,null,"2361885d",null)),Ia=Aa.exports,Ra={name:"TiempoReal",components:{Menu:z,CamarasRT1:va,CamarasRT2:ya,CamarasRT3:$a,CamarasRT4:Ia,Aviso:H,Grabar:la},data:function(){return{titulo:"TIEMPO REAL",disposicion:1}},methods:{cambiarDisposicion:function(){1==this.disposicion?this.disposicion=2:2==this.disposicion?this.disposicion=3:3==this.disposicion?this.disposicion=4:this.disposicion=1}}},Ma=Ra,Ga=Object(r["a"])(Ma,ia,ea,!1,null,null,null),La=Ga.exports,za=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("Menu",{attrs:{titulo:a.titulo}}),i("br"),a._m(0),i("div",{staticClass:"camaras"},a._l(this.$store.state.numGrabaciones,(function(a,t){return i("CuadritosGrabaciones",{key:t,attrs:{pos:a}})})),1),i("Aviso")],1)},Na=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticStyle:{"margin-left":"10px"}},[i("h3",[a._v("A continuación se muestran las grabaciones que usted ha realizado sobre las cámaras de su circuito")])])}],qa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:{cuadritos:!this.$vuetify.theme.dark,cuadritosOscuros:this.$vuetify.theme.dark}},[e("img",{attrs:{src:i("81bb"),alt:"Imagen de la camara"}}),e("div",{staticClass:"datos"},[e("p",[a._v("Grabación "+a._s(a.pos))]),e("div",{staticStyle:{width:"100%"}},[e("div",{class:{datos_grabaciones:!this.$vuetify.theme.dark,datos_grabaciones_oscuro:this.$vuetify.theme.dark}},[a._v(" Fecha de realización: "+a._s(a.video.fecha)+" "),e("br"),a._v(" Duración: "+a._s(a.video.duracion)+" "),e("br"),a._v(" Tamaño del archivo: "+a._s(a.video.tamaño)+" "),e("br")]),a._m(0),e("div",{staticClass:"opciones"},[e("button",{on:{click:function(t){return a.descargar()}}},[e("div",{staticStyle:{color:"white"}},[a._v("Descargar")])])]),e("div",{staticClass:"opciones"},[e("button",{on:{click:function(t){return a.eliminar()}}},[e("div",{staticStyle:{color:"white"}},[a._v("Eliminar")])])])])])])},Pa=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"opciones"},[i("button",[i("div",{staticStyle:{color:"white"}},[a._v("Reproducir")])])])}],Va={props:{pos:Number},data:function(){return{switch1:!0,videos:[{"tamaño":"275 MB",duracion:"09:27",fecha:"15/03/2020"},{"tamaño":"495 MB",duracion:"18:47",fecha:"02/05/2020"},{"tamaño":"55 MB",duracion:"01:22",fecha:"15/11/2020"}],video:{"tamaño":"495 MB",duracion:"18:47",fecha:"02/05/2020"}}},methods:{eliminar:function(){var a=this;b.a.fire({title:"¿Deseas eliminar la grabación? No se podrá deshacer",showCancelButton:!1,confirmButtonText:"Eliminar",showLoaderOnConfirm:!0}).then((function(t){t.isConfirmed&&(a.$store.state.numGrabaciones=a.$store.state.numGrabaciones-1,b.a.fire({title:"Grabación eliminada",text:"El vídeo se ha eliminado de la base de datos"}))}))},descargar:function(){b.a.fire({title:"La descarga comenzará en breves",text:"En caso de que no comience, vuelva a pulsar el botón de descarga"})}}},Da=Va,Ha=(i("b305"),Object(r["a"])(Da,qa,Pa,!1,null,"489ca2c1",null)),Fa=Ha.exports,Ja={name:"MisGrabaciones",components:{ActivaCamaras:w,Menu:z,Aviso:H,CuadritosGrabaciones:Fa},data:function(){return{titulo:"MIS GRABACIONES"}}},Ya=Ja,Qa=(i("d935"),Object(r["a"])(Ya,za,Na,!1,null,"1fb0d98b",null)),Ka=Qa.exports;e["default"].use(K["a"]);var Ua=[{path:"/tiempo-real",name:"TiempoReal",component:La},{path:"/control-camaras",name:"ControlCamaras",component:ta},{path:"/",name:"Login",component:Q},{path:"/mis-grabaciones",name:"MisGrabaciones",component:Ka}],Wa=new K["a"]({mode:"history",base:"/",routes:Ua}),Xa=Wa,Za=i("2f62");e["default"].use(Za["a"]);var at=new Za["a"].Store({state:{numGrabaciones:8},mutations:{},actions:{},modules:{}}),tt=i("f309");e["default"].use(tt["a"]);var it=new tt["a"]({theme:{dark:!1}}),et=i("ce5b"),st=i.n(et),nt=(i("bf40"),i("1f54"),i("ecee")),rt=i("c074"),ot=i("ad3d");nt["c"].add(rt["d"],rt["b"],rt["a"],rt["c"]),e["default"].component("font-awesome-icon",ot["a"]),e["default"].use(st.a);var ct={};t["default"]=new st.a(ct);e["default"].config.productionTip=!1,new e["default"]({router:Xa,store:at,vuetify:it,render:function(a){return a(d)}}).$mount("#app")},"5db5":function(a,t,i){"use strict";i("f59c")},"7c39":function(a,t,i){},"7d56":function(a,t,i){},"81bb":function(a,t,i){a.exports=i.p+"img/habitacion.cae992c7.jpg"},8527:function(a,t,i){},"85ec":function(a,t,i){},"88a5":function(a,t,i){"use strict";i("dfd3")},"8a29":function(a,t,i){"use strict";i("a808")},"8d50":function(a,t,i){},"8e67":function(a,t,i){"use strict";i("d0da")},a808:function(a,t,i){},a989:function(a,t,i){},ab20:function(a,t,i){"use strict";i("1b99")},b305:function(a,t,i){"use strict";i("7c39")},d0da:function(a,t,i){},d174:function(a,t,i){"use strict";i("8527")},d4f0:function(a,t,i){"use strict";i("e91a")},d935:function(a,t,i){"use strict";i("1ce4")},dfd3:function(a,t,i){},e91a:function(a,t,i){},efa6:function(a,t,i){"use strict";i("8d50")},f589:function(a,t,i){"use strict";i("a989")},f59c:function(a,t,i){}});
//# sourceMappingURL=app.bf3b5c29.js.map