import{a as R}from"./chunk-YV56HQGC.js";import{l as C,p as N}from"./chunk-T37QIOS2.js";import{b as y,c as d,d as V,e as x,g as E,h as Q,i as w,m as D,o as G}from"./chunk-V64ROETT.js";import{$a as z,Db as F,Ma as b,V as l,Y as S,eb as s,fb as t,gb as g,lb as q,vb as p}from"./chunk-6LC4AVBM.js";import{f as a,g as m,h as u}from"./chunk-3WNR6LQO.js";var O=(()=>{var i,r,o,n;let e=class e{constructor(){m(this,i,void 0);m(this,r,void 0);m(this,o,void 0);m(this,n,void 0);u(this,i,l(D)),u(this,r,l(R)),u(this,o,l(N)),u(this,n,l(C)),this.quizForm=a(this,i).group({name:["",[d.required]],value:["",[d.required]],user:["",[d.required]]})}ngOnInit(){this.quizForm.patchValue({user:a(this,o).currentUserExists().id})}createQuiz(){console.log(this.quizForm.getRawValue()),a(this,r).createQuiz(this.quizForm.getRawValue()).subscribe(v=>{v.ok&&a(this,n).navigate(["/quiz"])})}};i=new WeakMap,r=new WeakMap,o=new WeakMap,n=new WeakMap,e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=S({type:e,selectors:[["app-quiz-create"]],standalone:!0,features:[F],decls:14,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Name",1,"form-control"],["for","value"],["type","text","id","value","formControlName","value","placeholder","Value",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(c,h){c&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),q("ngSubmit",function(){return h.createQuiz()}),s(4,"div",4)(5,"label",5),p(6,"Name"),t(),g(7,"input",6),t(),s(8,"div",4)(9,"label",7),p(10,"Value"),t(),g(11,"input",8),t(),s(12,"button",9),p(13,"Create"),t()()()()()),c&2&&(b(3),z("formGroup",h.quizForm))},dependencies:[G,E,y,V,x,Q,w]});let f=e;return f})();export{O as QuizCreateComponent};
