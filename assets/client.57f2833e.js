import{c as T,h as N}from"./web.ab821142.js";import{a as m}from"./solid.bd741e67.js";var L=t=>(s,d,a,{client:i})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!t.hasAttribute("ssr"))return;const l=i==="only"?T:N;let n,r={};if(Object.keys(a).length>0){if(i!=="only"){const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,o=>o===t?NodeFilter.FILTER_SKIP:o.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:o.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;n=e.nextNode();)r[n.getAttribute("name")||"default"]=n}for(const[e,o]of Object.entries(a))r[e]||(r[e]=document.createElement("astro-slot"),e!=="default"&&r[e].setAttribute("name",e),r[e].innerHTML=o)}const{default:u,...c}=r,f=t.dataset.solidRenderId,E=l(()=>m(s,{...d,...c,children:u}),t,{renderId:f});t.addEventListener("astro:unmount",()=>E(),{once:!0})};export{L as default};
