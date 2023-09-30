const f={context:void 0,registry:void 0};function ne(e){f.context=e}function ye(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const we=(e,t)=>e===t,F=Symbol("solid-proxy"),ve=Symbol("solid-track"),De=Symbol("solid-dev-component"),K={equals:we};let M=null,ie=he;const P=1,q=2,ce={owned:null,cleanups:null,context:null,owner:null},J={};var c=null;let Z=null,d=null,v=null,O=null,G=0;function ee(e,t){const n=d,r=c,u=e.length===0,s=t===void 0?r:t,l=u?ce:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=u?e:()=>e(()=>E(()=>Q(l)));c=l,d=null;try{return N(i,!0)}finally{d=n,c=r}}function R(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=u=>(typeof u=="function"&&(u=u(n.value)),de(n,u));return[ae.bind(n),r]}function ue(e,t,n){const r=T(e,t,!0,P);U(r)}function me(e,t,n){const r=T(e,t,!1,P);U(r)}function Le(e,t,n){ie=Oe;const r=T(e,t,!1,P);(!n||!n.render)&&(r.user=!0),O?O.push(r):U(r)}function $(e,t,n){n=n?Object.assign({},K,n):K;const r=T(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,U(r),ae.bind(r)}function Re(e,t,n){let r,u,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,u=e,s=t||{}):(r=e,u=t,s=n||{});let l=null,i=J,h=null,a=!1,o="initialValue"in s,y=typeof r=="function"&&$(r);const g=new Set,[x,C]=(s.storage||R)(s.initialValue),[j,I]=R(void 0),[D,S]=R(void 0,{equals:!1}),[m,A]=R(o?"ready":"unresolved");if(f.context){h=`${f.context.id}${f.context.count++}`;let p;s.ssrLoadFrom==="initial"?i=s.initialValue:f.load&&(p=f.load(h))&&(i=p[0])}function k(p,b,w,L){return l===p&&(l=null,L!==void 0&&(o=!0),(p===i||b===i)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(L,{value:b})),i=J,X(b,w)),b}function X(p,b){N(()=>{b===void 0&&C(()=>p),A(b!==void 0?"errored":o?"ready":"unresolved"),I(b);for(const w of g.keys())w.decrement();g.clear()},!1)}function Y(){const p=Ae,b=x(),w=j();if(w!==void 0&&!l)throw w;return d&&!d.user&&p&&ue(()=>{D(),l&&(p.resolved||g.has(p)||(p.increment(),g.add(p)))}),b}function z(p=!0){if(p!==!1&&a)return;a=!1;const b=y?y():r;if(b==null||b===!1){k(l,E(x));return}const w=i!==J?i:E(()=>u(b,{value:x(),refetching:p}));return typeof w!="object"||!(w&&"then"in w)?(k(l,w,void 0,b),w):(l=w,a=!0,queueMicrotask(()=>a=!1),N(()=>{A(o?"refreshing":"pending"),S()},!1),w.then(L=>k(w,L,void 0,b),L=>k(w,void 0,pe(L),b)))}return Object.defineProperties(Y,{state:{get:()=>m()},error:{get:()=>j()},loading:{get(){const p=m();return p==="pending"||p==="refreshing"}},latest:{get(){if(!o)return Y();const p=j();if(p&&!l)throw p;return x()}}}),y?ue(()=>z(!1)):z(!1),[Y,{refetch:z,mutate:C}]}function E(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function Ue(e,t,n){const r=Array.isArray(e);let u,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(s){s=!1;return}const h=E(()=>t(i,u,l));return u=i,h}}function fe(e){return c===null||(c.cleanups===null?c.cleanups=[e]:c.cleanups.push(e)),e}function xe(e,t){M||(M=Symbol("error")),c=T(void 0,void 0,!0),c.context={...c.context,[M]:[t]};try{return e()}catch(n){V(n)}finally{c=c.owner}}function Me(){return c}function Te(e,t){const n=c,r=d;c=e,d=null;try{return N(t,!0)}catch(u){V(u)}finally{c=n,d=r}}function Ve(e,t){const n=Symbol("context");return{id:n,Provider:Pe(n),defaultValue:e}}function He(e){return c&&c.context&&c.context[e.id]!==void 0?c.context[e.id]:e.defaultValue}function Se(e){const t=$(e),n=$(()=>re(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ae;function ae(){if(this.sources&&this.state)if(this.state===P)U(this);else{const e=v;v=null,N(()=>W(this),!1),v=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function de(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let u=0;u<e.observers.length;u+=1){const s=e.observers[u],l=Z&&Z.running;l&&Z.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?v.push(s):O.push(s),s.observers&&ge(s)),l||(s.state=P)}if(v.length>1e6)throw v=[],new Error},!1)),t}function U(e){if(!e.fn)return;Q(e);const t=c,n=d,r=G;d=c=e,Ee(e,e.value,r),d=n,c=t}function Ee(e,t,n){let r;try{r=e.fn(t)}catch(u){return e.pure&&(e.state=P,e.owned&&e.owned.forEach(Q),e.owned=null),e.updatedAt=n+1,V(u)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?de(e,r):e.value=r,e.updatedAt=n)}function T(e,t,n,r=P,u){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:c?c.context:null,pure:n};return c===null||c!==ce&&(c.owned?c.owned.push(s):c.owned=[s]),s}function B(e){if(e.state===0)return;if(e.state===q)return W(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===P)U(e);else if(e.state===q){const r=v;v=null,N(()=>W(e,t[0]),!1),v=r}}function N(e,t){if(v)return e();let n=!1;t||(v=[]),O?n=!0:O=[],G++;try{const r=e();return ke(n),r}catch(r){n||(O=null),v=null,V(r)}}function ke(e){if(v&&(he(v),v=null),e)return;const t=O;O=null,t.length&&N(()=>ie(t),!1)}function he(e){for(let t=0;t<e.length;t++)B(e[t])}function Oe(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:B(r)}if(f.context){if(f.count){f.effects||(f.effects=[]),f.effects.push(...e.slice(0,n));return}else f.effects&&(e=[...f.effects,...e],n+=f.effects.length,delete f.effects);ne()}for(t=0;t<n;t++)B(e[t])}function W(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const u=r.state;u===P?r!==t&&(!r.updatedAt||r.updatedAt<G)&&B(r):u===q&&W(r,t)}}}function ge(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=q,n.pure?v.push(n):O.push(n),n.observers&&ge(n))}}function Q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),u=n.observers;if(u&&u.length){const s=u.pop(),l=n.observerSlots.pop();r<u.length&&(s.sourceSlots[l]=r,u[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t,n){try{for(const r of t)r(e)}catch(r){V(r,n&&n.owner||null)}}function V(e,t=c){const n=M&&t&&t.context&&t.context[M],r=pe(e);if(!n)throw r;O?O.push({fn(){le(r,n,t)},state:P}):le(r,n,t)}function re(e){if(typeof e=="function"&&!e.length)return re(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=re(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Pe(e,t){return function(r){let u;return me(()=>u=E(()=>(c.context={...c.context,[e]:r.value},Se(()=>r.children))),void 0),u}}const je=Symbol("fallback");function oe(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let r=[],u=[],s=[],l=0,i=t.length>1?[]:null;return fe(()=>oe(s)),()=>{let h=e()||[],a,o;return h[ve],E(()=>{let g=h.length,x,C,j,I,D,S,m,A,k;if(g===0)l!==0&&(oe(s),s=[],r=[],u=[],l=0,i&&(i=[])),n.fallback&&(r=[je],u[0]=ee(X=>(s[0]=X,n.fallback())),l=1);else if(l===0){for(u=new Array(g),o=0;o<g;o++)r[o]=h[o],u[o]=ee(y);l=g}else{for(j=new Array(g),I=new Array(g),i&&(D=new Array(g)),S=0,m=Math.min(l,g);S<m&&r[S]===h[S];S++);for(m=l-1,A=g-1;m>=S&&A>=S&&r[m]===h[A];m--,A--)j[A]=u[m],I[A]=s[m],i&&(D[A]=i[m]);for(x=new Map,C=new Array(A+1),o=A;o>=S;o--)k=h[o],a=x.get(k),C[o]=a===void 0?-1:a,x.set(k,o);for(a=S;a<=m;a++)k=r[a],o=x.get(k),o!==void 0&&o!==-1?(j[o]=u[a],I[o]=s[a],i&&(D[o]=i[a]),o=C[o],x.set(k,o)):s[a]();for(o=S;o<g;o++)o in j?(u[o]=j[o],s[o]=I[o],i&&(i[o]=D[o],i[o](o))):u[o]=ee(y);u=u.slice(0,l=g),r=h.slice(0)}return u});function y(g){if(s[o]=g,i){const[x,C]=R(o);return i[o]=C,t(h[o],x)}return t(h[o])}}}let be=!1;function _e(){be=!0}function Fe(e,t){if(be&&f.context){const n=f.context;ne(ye());const r=E(()=>e(t||{}));return ne(n),r}return E(()=>e(t||{}))}function H(){return!0}const se={get(e,t,n){return t===F?n:e.get(t)},has(e,t){return t===F?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function te(e){return(e=typeof e=="function"?e():e)?e:{}}function $e(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ke(...e){let t=!1;for(let s=0;s<e.length;s++){const l=e[s];t=t||!!l&&F in l,e[s]=typeof l=="function"?(t=!0,$(l)):l}if(t)return new Proxy({get(s){for(let l=e.length-1;l>=0;l--){const i=te(e[l])[s];if(i!==void 0)return i}},has(s){for(let l=e.length-1;l>=0;l--)if(s in te(e[l]))return!0;return!1},keys(){const s=[];for(let l=0;l<e.length;l++)s.push(...Object.keys(te(e[l])));return[...new Set(s)]}},se);const n={},r={},u=new Set;for(let s=e.length-1;s>=0;s--){const l=e[s];if(!l)continue;const i=Object.getOwnPropertyNames(l);for(let h=0,a=i.length;h<a;h++){const o=i[h];if(o==="__proto__"||o==="constructor")continue;const y=Object.getOwnPropertyDescriptor(l,o);if(!u.has(o))y.get?(u.add(o),Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:$e.bind(r[o]=[y.get.bind(l)])})):(y.value!==void 0&&u.add(o),n[o]=y.value);else{const g=r[o];g?y.get?g.push(y.get.bind(l)):y.value!==void 0&&g.push(()=>y.value):n[o]===void 0&&(n[o]=y.value)}}}return n}function qe(e,...t){if(F in e){const u=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(i){return l.includes(i)?e[i]:void 0},has(i){return l.includes(i)&&i in e},keys(){return l.filter(i=>i in e)}},se));return s.push(new Proxy({get(l){return u.has(l)?void 0:e[l]},has(l){return u.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!u.has(l))}},se)),s}const n={},r=t.map(()=>({}));for(const u of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,u),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let i=!1,h=0;for(const a of t)a.includes(u)&&(i=!0,l?r[h][u]=s.value:Object.defineProperty(r[h],u,s)),++h;i||(l?n[u]=s.value:Object.defineProperty(n,u,s))}return[...r,n]}let Ne=0;function Be(){const e=f.context;return e?`${e.id}${e.count++}`:`cl-${Ne++}`}const Ie=e=>`Stale read from <${e}>.`;function We(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(Ce(()=>e.each,e.children,t||void 0))}function Ge(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(r,u)=>t?r===u:!r==!u});return $(()=>{const r=n();if(r){const u=e.children;return typeof u=="function"&&u.length>0?E(()=>u(t?r:()=>{if(!E(n))throw Ie("Show");return e.when})):u}return e.fallback},void 0,void 0)}let _;function Qe(e){let t,n;f.context&&f.load&&(n=f.load(f.context.id+f.context.count))&&(t=n[0]);const[r,u]=R(t,void 0);return _||(_=new Set),_.add(u),fe(()=>_.delete(u)),$(()=>{let s;if(s=r()){const l=e.fallback;return typeof l=="function"&&l.length?E(()=>l(s,()=>u())):l}return xe(()=>e.children,u)},void 0,void 0)}export{De as $,Qe as E,We as F,Ge as S,R as a,$ as b,Fe as c,Le as d,Re as e,fe as f,Me as g,Ve as h,Be as i,ee as j,me as k,E as l,Ke as m,f as n,Ue as o,_e as p,Te as r,qe as s,He as u};