var l=Object.create;var g=Object.defineProperty,m=Object.defineProperties,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,q=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var i=(a,b,c)=>b in a?g(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,s=(a,b)=>{for(var c in b||={})h.call(b,c)&&i(a,c,b[c]);if(f)for(var c of f(b))j.call(b,c)&&i(a,c,b[c]);return a},t=(a,b)=>m(a,o(b));var u=(a,b)=>{var c={};for(var d in a)h.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&f)for(var d of f(a))b.indexOf(d)<0&&j.call(a,d)&&(c[d]=a[d]);return c};var v=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports);var r=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of p(b))!h.call(a,e)&&e!==c&&g(a,e,{get:()=>b[e],enumerable:!(d=n(b,e))||d.enumerable});return a};var w=(a,b,c)=>(c=a!=null?l(q(a)):{},r(b||!a||!a.__esModule?g(c,"default",{value:a,enumerable:!0}):c,a));var k=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};var x=(a,b,c)=>(k(a,b,"read from private field"),c?c.call(a):b.get(a)),y=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},z=(a,b,c,d)=>(k(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);export{s as a,t as b,u as c,v as d,w as e,x as f,y as g,z as h};
