import{a as $,c as q,d as B,e as P,f as H,g as U,h as K,i as Q,j as W,k as X,l as Y}from"./chunk-4OFE66PF.js";import{a as Z}from"./chunk-5BYJVY74.js";import{h as F,j as T,k as O,m as z,n as J,o as I}from"./chunk-OHS3VPAE.js";import{Db as G,Eb as j,La as b,Na as x,Pa as t,Qa as e,Ra as M,Ua as V,Va as w,Wa as E,X as g,Ya as i,Za as v,_ as y,_a as _,bb as C,cb as L,d as c,db as R,e as f,f as h,ha as N,ia as D,za as m}from"./chunk-MBA4I262.js";var ae=()=>["form"],re=a=>["/sampling",a];function oe(a,r){if(a&1){let n=V();t(0,"tr")(1,"th",11),i(2),e(),t(3,"td"),i(4),e(),t(5,"td"),i(6),e(),t(7,"td"),i(8),e(),t(9,"td"),i(10),e(),t(11,"td")(12,"div",12)(13,"a",13),i(14,"Ver"),e(),t(15,"button",14),w("click",function(){let d=N(n).$implicit,p=E();return D(p.redirect(d._id))}),i(16,"Editar"),e()()()()}if(a&2){let n=r.$implicit,l=r.index;m(2),v(l+1),m(2),v(n.muestra),m(2),v(n.fecha),m(2),v(n.jornada),m(2),v(n.descripcon),m(3),x("routerLink",R(6,re,n._id))}}var te=(()=>{var r,n,l;let d=class d{constructor(){f(this,r,void 0);f(this,n,void 0);f(this,l,void 0);h(this,r,g(I)),h(this,n,g(T)),h(this,l,g(Z)),this.listSampling=[]}ngOnInit(){c(this,r).getSampling().subscribe(o=>{o.ok&&(this.listSampling=o.data)})}redirect(o=""){let A={queryParams:{id:o}};c(this,n).navigate(["sampling/form"],A)}exportTable(){c(this,l).exportTableToExcel("excel-table","table_data")}};r=new WeakMap,n=new WeakMap,l=new WeakMap,d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=y({type:d,selectors:[["app-sampling-list"]],standalone:!0,features:[C],decls:28,vars:3,consts:[[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","col-lg-12"],[1,"w-100","d-flex","justify-content-between","align-items-center","flex-nowrap"],[1,"text-center","my-5"],[1,"btn","btn-outline-success","me-2",3,"routerLink"],[1,"btn","btn-outline-info",3,"click"],["id","excel-table",1,"table"],["scope","col"],["scope","col",1,"w-25"],[4,"ngFor","ngForOf"],["scope","row"],[1,"d-grid","gap-2","d-md-block"],["routerLinkActive","router-link-active",1,"btn","btn-outline-info","me-1",3,"routerLink"],["type","button",1,"btn","btn-outline-warning",3,"click"]],template:function(u,A){u&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),i(5,"Listado de muestras"),e(),t(6,"div")(7,"a",5),i(8,"Crear Muestra"),e(),t(9,"button",6),w("click",function(){return A.exportTable()}),i(10,"Exportar a Excel"),e()()(),t(11,"table",7)(12,"thead")(13,"tr")(14,"th",8),i(15,"#"),e(),t(16,"th",8),i(17,"muestra"),e(),t(18,"th",8),i(19,"fecha"),e(),t(20,"th",9),i(21,"Jornada"),e(),t(22,"th",9),i(23,"Descripci\xF3n"),e(),t(24,"th",8),i(25,"Acciones"),e()()(),t(26,"tbody"),b(27,oe,17,8,"tr",10),e()()()()()),u&2&&(m(7),x("routerLink",L(2,ae)),m(20),x("ngForOf",A.listSampling))},dependencies:[G,O],encapsulation:2});let a=d;return a})();function le(a,r){if(a&1&&(t(0,"p",9)(1,"strong"),i(2,"Descripci\xF3n: "),e(),i(3),e()),a&2){let n=E(2);m(3),v(n.samplig.descripcon)}}function me(a,r){if(a&1&&(t(0,"div",2)(1,"div",3)(2,"h5",4),i(3),e(),t(4,"h6",5),i(5),e(),t(6,"ul",6)(7,"li",7),i(8),e(),t(9,"li",7),i(10),e()(),b(11,le,4,1,"p",8),e()()),a&2){let n=E();m(3),_("Muestra tomada ",n.samplig.fecha,""),m(2),_("Glucometria: ",n.samplig.muestra,""),m(3),_("Hora: ",n.samplig.hora,""),m(2),_("Jornada: ",n.samplig.jornada,""),m(),x("ngIf",n.samplig.descripcon)}}var ie=(()=>{var r,n;let l=class l{constructor(){f(this,r,g(I));f(this,n,g(F))}ngOnInit(){c(this,n).paramMap.subscribe(p=>{let o=p.get("id");o&&this.getMuestra(o)})}getMuestra(p){c(this,r).getSamplingById(p).subscribe(o=>{console.log(o),this.samplig=o.data})}};r=new WeakMap,n=new WeakMap,l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=y({type:l,selectors:[["app-sampling-detail"]],standalone:!0,features:[C],decls:2,vars:1,consts:[[1,"d-flex","justify-content-center","align-items-center",2,"height","92vh"],["class","card","style","width: 25rem;",4,"ngIf"],[1,"card",2,"width","25rem"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"list-group"],[1,"list-group-item"],["class","card-text",4,"ngIf"],[1,"card-text"]],template:function(o,u){o&1&&(t(0,"div",0),b(1,me,12,5,"div",1),e()),o&2&&(m(),x("ngIf",u.samplig))},dependencies:[j],encapsulation:2});let a=l;return a})();function se(a,r){if(a&1&&(t(0,"strong"),i(1),e()),a&2){let n=E();m(),_("seleccionada ",n.formSampling.getRawValue().jornada," ")}}var ne=(()=>{var r,n,l,d,p,o;let u=class u{constructor(){f(this,r,void 0);f(this,n,void 0);f(this,l,void 0);f(this,d,void 0);f(this,p,void 0);f(this,o,void 0);h(this,r,g(I)),h(this,n,g(X)),h(this,l,g(F)),h(this,d,g(T)),h(this,p,g(z)),h(this,o,g(J)),this.edit=!1,this.formSampling=c(this,n).nonNullable.group({muestra:[],fecha:[""],hora:[""],descripcon:[""],jornada:[""],user:[""],_id:[""]})}ngOnInit(){this.user=c(this,o).currentUserExists(),this.formSampling.patchValue({user:this.user.id}),c(this,l).queryParams.subscribe(S=>{let s=S.id;s&&(this.edit=!0,this.getMuestra(s))})}send(){console.log(this.formSampling.getRawValue()),this.formSampling.markAllAsTouched(),!this.formSampling.invalid&&(this.edit?this.editMuestra(this.formSampling.getRawValue()):this.createMuestra(this.formSampling.getRawValue()))}getMuestra(S){c(this,r).getSamplingById(S).subscribe(s=>{this.formSampling.patchValue({_id:s.data._id,muestra:s.data.muestra,descripcon:s.data.descripcon,fecha:s.data.fecha,hora:s.data.hora,jornada:s.data.jornada||"",user:this.user.id})})}createMuestra(S){c(this,r).postSamplin(S).subscribe(s=>{c(this,p).dispatchToast({message:`${s.mensaje}`,dispose:"Aceptar"}),c(this,d).navigate(["sampling",s.data._id])})}editMuestra(S){c(this,r).putSampling(S).subscribe(s=>{c(this,p).dispatchToast({message:`${s.mensaje}`,dispose:"Aceptar"}),c(this,d).navigate(["sampling"])})}};r=new WeakMap,n=new WeakMap,l=new WeakMap,d=new WeakMap,p=new WeakMap,o=new WeakMap,u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=y({type:u,selectors:[["app-sampling-create"]],standalone:!0,features:[C],decls:43,vars:2,consts:[[1,"container-fluid",2,"height","96vh"],[1,"row","justify-content-center"],[1,"col-6"],[1,"text-center","my-5"],[1,"my-5",3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","muestra","placeholder","Ej: 30",1,"form-control"],["type","string","formControlName","fecha",1,"form-control"],["type","time","formControlName","hora",1,"form-control"],["name","descripcon","id","descripcon","formControlName","descripcon",1,"form-control"],[4,"ngIf"],["name","jornada","id","jornada","formControlName","jornada",1,"form-control"],["value",""],["value","Ayunas"],["value","Antes de Almuerzo"],["value","2 horas despues de almuerzo"],["value","Antes de cenar"],["value","2 horas despues de cenar"],["value","3 AM"],["type","submit",1,"btn","btn-outline-success"]],template:function(s,k){s&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h6",3),i(4,"Toma de muestra diaria"),e(),t(5,"form",4),w("ngSubmit",function(){return k.send()}),t(6,"div",5)(7,"label",6),i(8," Glucometria"),e(),M(9,"input",7),e(),t(10,"div",5)(11,"label",6),i(12," Fecha"),e(),M(13,"input",8),e(),t(14,"div",5)(15,"label",6),i(16," Hora"),e(),M(17,"input",9),e(),t(18,"div",5)(19,"label",6),i(20," Description"),e(),M(21,"textarea",10),e(),t(22,"div",5)(23,"label",6),i(24," Jornada "),b(25,se,2,1,"strong",11),e(),t(26,"select",12)(27,"option",13),i(28,"Seleccione Jornada"),e(),t(29,"option",14),i(30,"Ayunas"),e(),t(31,"option",15),i(32,"Antes de Almuerzo"),e(),t(33,"option",16),i(34,"2 horas despues de almuerzo"),e(),t(35,"option",17),i(36,"Antes de cenar"),e(),t(37,"option",18),i(38,"2 horas despues de cenar"),e(),t(39,"option",19),i(40,"3 AM"),e()()(),t(41,"button",20),i(42,"Guardar"),e()()()()()),s&2&&(m(5),x("formGroup",k.formSampling),m(20),x("ngIf",k.edit))},dependencies:[Y,P,Q,W,$,K,q,B,H,U,j],encapsulation:2});let a=u;return a})();var ce=[{path:"",title:"Muestras",loadComponent:()=>te},{path:"form",title:"Creaci\xF3n Muestra",loadComponent:()=>ne},{path:":id",title:"Detalle de Muestra",loadComponent:()=>ie}],Je=ce;export{Je as default};