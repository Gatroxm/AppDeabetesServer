import{a as p,o as a}from"./chunk-WXHSBTNS.js";import{S as h,X as o,d as r,e as s}from"./chunk-Q52YNUQE.js";var m=(()=>{var e;let i=class i{constructor(t){s(this,e,a.apiUrl);this.http=t}getNews(){return this.http.get(`${r(this,e)}new`)}getNew(t){return this.http.get(`${r(this,e)}new/${t}`)}postNew(t){return this.http.post(`${r(this,e)}new`,t)}putNew(t){return this.http.put(`${r(this,e)}new/${t._id}`,t)}deleteNew(t){return this.http.delete(`${r(this,e)}new/${t}`)}};e=new WeakMap,i.\u0275fac=function(c){return new(c||i)(o(p))},i.\u0275prov=h({token:i,factory:i.\u0275fac});let n=i;return n})();export{m as a};
