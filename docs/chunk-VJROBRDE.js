import{m as G}from"./chunk-OHS3VPAE.js";import{Db as N,Eb as R,Fb as z,La as g,Na as c,Pa as a,Qa as r,Ra as k,Sa as v,Ta as x,Ua as h,Va as _,Wa as C,X as y,Xa as V,Ya as b,Za as M,_ as d,_a as D,bb as w,d as m,e as E,eb as O,f as T,fb as j,ha as u,hb as L,ia as f,ja as I,qa as F,rb as B,za as p}from"./chunk-MBA4I262.js";function q(e,t){if(e&1&&(v(0),a(1,"strong",5),b(2),O(3,"titlecase"),r(),x()),e&2){let n=C();p(2),M(j(3,1,n.toast.dispose))}}function A(e,t){e&1&&(I(),a(0,"svg",6),k(1,"path",7),r())}var P=(()=>{let t=class t{constructor(){this.disposeEvent=new F}ngOnInit(){setTimeout(()=>{this.dispose()},this.toast.time||5e3)}dispose(){this.disposeEvent.emit()}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=d({type:t,selectors:[["app-toast"]],inputs:{toast:"toast"},outputs:{disposeEvent:"disposeEvent"},standalone:!0,features:[w],decls:7,vars:3,consts:[["close",""],["role","alert",1,"p-relative","d-flex","justify-content-between","align-items-center","start-5","gap-2","w-25","py-3","px-2","rounded-2","shadow","bg-primary","toaster","text-white","animate-fade-up"],[1,"text-sm","font-normal","truncate-multi-lines","self-center","text-center","flex-1"],["type","button","aria-label","Close",1,"btn","btn-success","rounded-lg","p-1.5","ml-2","inline-flex","items-center","justify-center","h-8","flex-2",3,"click"],[4,"ngIf","ngIfElse"],[1,"text-base"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"]],template:function(l,i){if(l&1){let s=h();a(0,"div",1)(1,"div",2),b(2),r(),a(3,"button",3),_("click",function(){return u(s),f(i.dispose())}),g(4,q,4,3,"ng-container",4)(5,A,2,0,"ng-template",null,0,L),r()()}if(l&2){let s=V(6);p(2),D(" ",i.toast.message," "),p(2),c("ngIf",i.toast.dispose)("ngIfElse",s)}},dependencies:[R,z],encapsulation:2});let e=t;return e})();function H(e,t){if(e&1){let n=h();v(0),a(1,"app-toast",2),_("disposeEvent",function(){let l=u(n).index,i=C();return f(i.dispose(l))}),r(),x()}if(e&2){let n=t.$implicit;p(),c("toast",n)}}var it=(()=>{var t,n;let o=class o{constructor(){E(this,t,void 0);E(this,n,void 0);T(this,t,y(G)),T(this,n,y(B)),this.toastList=[]}ngOnInit(){this.initToast()}initToast(){m(this,t).toastEvents.subscribe(i=>{this.toastList.push(i),m(this,n).detectChanges()})}dispose(i){this.toastList.splice(i,1),m(this,n).detectChanges()}};t=new WeakMap,n=new WeakMap,o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=d({type:o,selectors:[["app-toaster"]],standalone:!0,features:[w],decls:2,vars:1,consts:[[1,"d-flex","position-fixed","p-3","z-index-3","fixed-bottom","flex-column","toast","gap-4","overflow-y-auto","rounded-2",2,"scrollbar-gutter","stable"],[4,"ngFor","ngForOf"],[3,"disposeEvent","toast"]],template:function(s,S){s&1&&(a(0,"div",0),g(1,H,2,1,"ng-container",1),r()),s&2&&(p(),c("ngForOf",S.toastList))},dependencies:[P,N],encapsulation:2});let e=o;return e})();export{it as a};
