import{a as _}from"./chunk-NRTXLEHS.js";import{a as H}from"./chunk-5BYJVY74.js";import{f as N,g as R,i as U,j as g,k as S,n as b,o as A}from"./chunk-JGJDBAT5.js";import{Bb as D,Gb as O,Na as F,Pa as n,Qa as o,R as B,Ra as a,Va as h,X as m,Ya as l,_ as p,_a as v,bb as c,d as k,e as C,eb as I,f as w,fb as j,ja as L,ka as M,l as T,m as E,za as f}from"./chunk-MBA4I262.js";var P=(()=>{var e;let d=class d{constructor(){C(this,e,void 0);w(this,e,m(b)),this.show=!1}ngOnInit(){setTimeout(()=>{console.log(k(this,e).currentUserExists())},1100)}logout(){k(this,e).logOut()}};e=new WeakMap,d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=p({type:d,selectors:[["app-side-bar"]],standalone:!0,features:[c],decls:20,vars:0,consts:[[1,"d-flex","flex-column","flex-shrink-0","p-3","bg-light","h-100vh"],[1,"w-100","justify-content-between","px-2","d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","link-dark","text-decoration-none"],[1,"fs-6"],[1,"nav","nav-pills","flex-column","mb-auto"],[1,"nav-item"],["routerLink","/","aria-current","page",1,"nav-link","link-dark"],["routerLink","/calculator","aria-current","page",1,"nav-link","link-dark"],["routerLink","/sampling","aria-current","page",1,"nav-link","link-dark"],[1,"dropdown"],[1,"d-flex","align-items-center","link-dark","text-decoration-none","pointer",3,"click"]],template:function(s,y){s&1&&(n(0,"div",0)(1,"span",1)(2,"span",2),l(3,"Carbohydrate Calculator"),o()(),a(4,"hr"),n(5,"ul",3)(6,"li",4)(7,"a",5),l(8," Home "),o()(),n(9,"li",4)(10,"a",6),l(11," Calculadora "),o()(),n(12,"li",4)(13,"a",7),l(14," Toma de muestras "),o()()(),a(15,"hr"),n(16,"div",8)(17,"span",9),h("click",function(){return y.logout()}),n(18,"strong"),l(19,"Cerrar Sessi\xF3n"),o()()()())},dependencies:[S],encapsulation:2});let t=d;return t})();var x=(()=>{let e=class e{constructor(){this.router=m(g),this.isOpenSidebar=new E(!1),this._topBar=new T,this.topBar=this._topBar.asObservable()}setToolbar(r){let i={title:{value:"",visible:!0}};this._topBar.next(Object.assign(i,r))}goTo(r=""){this.router.navigate([`/${r}`])}toggleSidebar(r){this.isOpenSidebar.next(r??!this.isOpenSidebar.value)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var z=(()=>{let e=class e{constructor(){this.uiService=m(x),this.title="",this.history=[],this.router=m(g),this.location=m(D),this.titleService=m(N)}ngOnInit(){this.title=this.titleService.getTitle(),this.router.events.subscribe(r=>{r instanceof R&&(console.log(this.titleService.getTitle()),this.history.push(r.urlAfterRedirects))})}goBack(){this.title=this.titleService.getTitle(),this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/")}toggleSidebar(){this.uiService.toggleSidebar()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-top-bar"]],standalone:!0,features:[c],decls:9,vars:3,consts:[[1,"position-sticky","p-3","bg-info","text-light"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-default",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",2,"width","15px"],["d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"],[1,"w-100","m-0","text-center"]],template:function(i,s){i&1&&(n(0,"nav",0)(1,"div",1)(2,"button",2),h("click",function(){return s.goBack()}),L(),n(3,"svg",3),a(4,"path",4),o()(),M(),n(5,"p",5)(6,"strong"),l(7),I(8,"uppercase"),o()()()()),i&2&&(f(7),v(" ",j(8,1,s.title)," "))},dependencies:[O],encapsulation:2});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.show=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-admin-layout"]],standalone:!0,features:[c],decls:9,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","col-lg-3","p-0"],[1,"col-12","col-lg-9","p-0","h-90vh"],[1,""],[1,"w-100","h-100","p-3","overflow-auto","bg-gray_light"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),a(3,"app-side-bar"),o(),n(4,"div",3),a(5,"app-top-bar",4),n(6,"main",5),a(7,"router-outlet"),o()()()(),a(8,"app-toaster"))},dependencies:[U,P,z,_],styles:[".content__dashboard[_ngcontent-%COMP%]{flex-wrap:nowrap;height:100vh;height:-webkit-fill-available;max-height:100vh;overflow-x:auto;overflow-y:hidden;justify-content:space-between}"]});let t=e;return t})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-card"]],inputs:{link:"link",title:"title"},standalone:!0,features:[c],decls:4,vars:2,consts:[[1,"text-secondary",3,"routerLink"],[1,"card"],[1,"card-body"]],template:function(i,s){i&1&&(n(0,"a",0)(1,"div",1)(2,"div",2),l(3),o()()()),i&2&&(F("routerLink",s.link),f(3),v(" ",s.title," "))},dependencies:[S],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[c],decls:11,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"text-default","mb-5"],[1,"col-3"],["title","Calculadora","link","/calculator"],["title","Toma de muestras","link","/sampling"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),l(4,"Carbohydrate Calculator"),o(),n(5,"h6"),l(6,"Enlaces"),o()(),n(7,"div",4),a(8,"app-card",5),o(),n(9,"div",4),a(10,"app-card",6),o()()())},dependencies:[V],encapsulation:2});let t=e;return t})();var q=[{path:"",component:G,providers:[x,b],children:[{path:"",title:"home",data:{titulo:"Inicio"},component:$},{path:"calculator",title:"Caluladora",data:{titulo:"Caluladora"},loadChildren:()=>import("./chunk-OXWWFQWI.js")},{path:"sampling",title:"Sampling",data:{titulo:"Muestras"},providers:[A,H],loadChildren:()=>import("./chunk-XCOAOF3G.js")}]}],Me=q;export{Me as default};