import{b as E,c as m,d as F,e as _,g as q,h as N,i as R,m as V,o as I}from"./chunk-3USJYGVV.js";import{$a as D,Ca as S,Ga as f,Ia as g,P as s,Ua as A,Y as w,_ as c,da as e,ea as t,fa as u,ka as y,la as G,r as v,t as x,ua as i,wa as p,xa as k}from"./chunk-5FKKKLMV.js";import{f as b,g as h,h as C}from"./chunk-3WNR6LQO.js";function P(n,a){if(n&1&&(e(0,"div")(1,"ul",14)(2,"li",15),i(3),f(4,"number"),t(),e(5,"li",15),i(6),f(7,"number"),t()()()),n&2){let o=G();s(3),p(" Insulina Larga duraci\xF3n es de: ",g(4,3,o.formCalculator.getRawValue().peso*.2,"1.0-0"),"mg/dl "),s(3),k(" La cantidad de unidades que debe ponerce para: ",o.formCalculator.getRawValue().gramos,"G es de ",g(7,6,o.total,"1.0-0"),"mg/dl ")}}var U=(()=>{var a;let o=class o{constructor(){h(this,a,void 0);C(this,a,v(V)),this.total=0,this.result=!1,this.formCalculator=b(this,a).nonNullable.group({gramos:[0,m.required],quatityForUnit:[0,m.required],peso:[0,m.required]})}ngOnInit(){this.formCalculator.patchValue({gramos:void 0,quatityForUnit:void 0,peso:void 0})}calculator(){this.formCalculator.markAllAsTouched(),!this.formCalculator.invalid&&(this.total=this.formCalculator.getRawValue().gramos/this.formCalculator.getRawValue().quatityForUnit,this.result=!0)}};a=new WeakMap,o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=x({type:o,selectors:[["app-calculator"]],standalone:!0,features:[S],decls:28,vars:2,consts:[[1,"container-fluid",2,"height","96vh"],[1,"row","justify-content-center"],[1,"col-lg-6","col-12"],[1,"text-center","my-5"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","gramos","placeholder","Ej: 30",1,"form-control"],[1,"form-text"],["type","text","formControlName","quatityForUnit","placeholder","Ex: 4.32",1,"form-control"],["type","text","formControlName","peso","placeholder","70kg",1,"form-control"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","btn-outline-success"],[4,"ngIf"],[1,"list-group","mt-3"],[1,"list-group-item"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h6",3),i(4," Calcula las unidade de insulina / Gramos de Carbohidratos "),t(),e(5,"form",4),y("ngSubmit",function(){return l.calculator()}),e(6,"div",5)(7,"label",6),i(8," Cantidad en (G) de carbohidratos"),t(),u(9,"input",7),e(10,"div",8),i(11," Recuerde que esta es la porci\xF3n que va aingerir ya sea (Papa, Arroz...) "),t()(),e(12,"div",5)(13,"label",6),i(14,"Relac\xF3n DHO : Insulina"),t(),u(15,"input",9),e(16,"div",8),i(17," Representa cu\xE1ntos gramos de carbohidratos est\xE1n cubiertos o se desechan por una 1 unidad de insulina. "),t()(),e(18,"div",5)(19,"label",6),i(20,"Peso (Kg)"),t(),u(21,"input",10),e(22,"div",8),i(23," Recuerde que este es el peso total de la persona en ayunas y en kilogramos. "),t()(),e(24,"div",11)(25,"button",12),i(26," Calcular "),t()()(),w(27,P,8,9,"div",13),t()()()),r&2&&(s(5),c("formGroup",l.formCalculator),s(22),c("ngIf",l.result))},dependencies:[I,q,E,F,_,N,R,A,D],encapsulation:2});let n=o;return n})();var j=(()=>{var a;let o=class o{constructor(){h(this,a,void 0);C(this,a,v(V)),this.insulina_basal=[],this.insulina_antes_de_comer=0,this.formDocis=b(this,a).nonNullable.group({peso:[0,m.required],carboidratosDiarios:[0,m.required],quatityForUnit:[0,m.required]})}ngOnInit(){this.formDocis.patchValue({peso:void 0,carboidratosDiarios:void 0,quatityForUnit:void 0})}calculator(){if(this.formDocis.markAllAsTouched(),this.formDocis.invalid)return;this.insulina_basal[0]=this.formDocis.getRawValue().peso*.2;let d=this.formDocis.getRawValue().carboidratosDiarios/3;this.insulina_antes_de_comer=d/this.formDocis.getRawValue().quatityForUnit,console.log(d)}};a=new WeakMap,o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=x({type:o,selectors:[["app-docis"]],standalone:!0,features:[S],decls:27,vars:6,consts:[[3,"submit","formGroup"],[1,"form-froup","mb-3"],[1,"form-label"],["type","text","formControlName","peso","placeholder","Ej: 70",1,"form-control"],[1,"form-text"],["type","text","formControlName","carboidratosDiarios","placeholder","Ej: 30",1,"form-control"],["type","text","formControlName","quatityForUnit","placeholder","Ex: 4.32",1,"form-control"],["type","submit",1,"btn","btn-outline-success"]],template:function(r,l){r&1&&(e(0,"form",0),y("submit",function(){return l.calculator()}),e(1,"div",1)(2,"label",2),i(3,"Peso (Kg)"),t(),u(4,"input",3),e(5,"div",4),i(6," Recuerde que este es el peso total de la persona en ayunas y en kilogramos. "),t()(),e(7,"div",1)(8,"label",2),i(9,"Carbohidratos Diarios (G)"),t(),u(10,"input",5),e(11,"div",4),i(12," Recuerde que este es el total de carbohidratos que se consume diariamente. "),t()(),e(13,"div",1)(14,"label",2),i(15,"Relac\xF3n DHO : Insulina"),t(),u(16,"input",6),e(17,"div",4),i(18," Representa cu\xE1ntos gramos de carbohidratos est\xE1n cubiertos o se desechan por una 1 unidad de insulina. "),t()(),e(19,"button",7),i(20,"Calcular"),t(),e(21,"ul")(22,"li"),i(23),t(),e(24,"li"),i(25),f(26,"number"),t()()()),r&2&&(c("formGroup",l.formDocis),s(23),p("Insulina Larga duraci\xF3n es de: ",l.insulina_basal[0],"mg/dl"),s(2),p(" Insulina Antes de cada comida : ",g(26,3,l.insulina_antes_de_comer,"1.0-0"),"mg/dl "))},dependencies:[I,q,E,F,_,N,R,D]});let n=o;return n})();var L=[{path:"",data:{titulo:"Caluladora",background:"bg-success"},loadComponent:()=>U},{path:"docis",data:{titulo:"Docis",background:"bg-warning"},loadComponent:()=>j}],oe=L;export{oe as default};