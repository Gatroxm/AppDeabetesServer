import{db as g,j as m,n as u,ob as p,q as i}from"./chunk-5FKKKLMV.js";import{f as n,g as a,h as l}from"./chunk-3WNR6LQO.js";var c={production:!1,apiUrl:"https://appdeabetesserver.onrender.com/api/"};var v=(()=>{var o;let e=class e{constructor(t,r){a(this,o,void 0);this.http=t,this.router=r,l(this,o,c.apiUrl),this.token=null}login(t){return this.http.post(`${n(this,o)}login`,t).pipe(m(r=>{this.signOauth(r)}))}signOauth(t){this.setToken(t.token),this.saveSessionStorage(t),this.router.navigate([""])}currentUserExists(){let t=sessionStorage.getItem("user");return JSON.parse(t||"null")}setToken(t){this.token=t,sessionStorage.setItem("token",t),localStorage.setItem("token",t)}getToken(){return typeof window<"u"&&window.localStorage?localStorage.getItem("token"):this.token}saveSessionStorage(t){this.role=t.usuario.role,sessionStorage.setItem("_id",t.id),sessionStorage.setItem("user",JSON.stringify(t)),sessionStorage.setItem("role",JSON.stringify(t.usuario.role))}logOut(){sessionStorage.removeItem("user"),sessionStorage.removeItem("role"),localStorage.removeItem("token"),this.router.navigate(["/login"])}isAuthenticated(){return!!this.getToken()}getRole(){return this.role}};o=new WeakMap,e.\u0275fac=function(r){return new(r||e)(i(g),i(p))},e.\u0275prov=u({token:e,factory:e.\u0275fac});let s=e;return s})();export{c as a,v as b};
