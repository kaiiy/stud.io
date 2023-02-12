import{j as m,k as A,l as k,m as b,q as P,r as x,s as R,v as T,x as C,y as N,z as S}from"./entry.007e2bf5.js";function M(t,n){return m()._useHead(t,n)}async function q(t,n=A()){if(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(t))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>q(t,n));n._routePreloaded.add(t);const l=n.resolve(t).matched.map(r=>{var a;return(a=r.components)==null?void 0:a.default}).filter(r=>typeof r=="function");for(const r of l){const a=Promise.resolve(r()).catch(()=>{}).finally(()=>e.splice(e.indexOf(a)));e.push(a)}await Promise.all(e)}const p=globalThis.requestIdleCallback||(t=>{const n=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-n))};return setTimeout(()=>{t(e)},1)}),w=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),B=t=>{const n=m();n.isHydrating?n.hooks.hookOnce("app:suspense:resolve",()=>{p(t)}):p(t)},E=(...t)=>t.find(n=>n!==void 0),I="noopener noreferrer";function L(t){const n=t.componentName||"NuxtLink";return k({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const r=A(),a=b(()=>e.to||e.href||""),o=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||P(a.value,!0)),v=x(!1),u=x(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&typeof a.value=="string"&&e.target!=="_blank"&&!O()){const f=m();let c,i=null;R(()=>{const h=D();B(()=>{c=p(()=>{var d;(d=u==null?void 0:u.value)!=null&&d.tagName&&(i=h.observe(u.value,async()=>{i==null||i(),i=null,await Promise.all([f.hooks.callHook("link:prefetch",a.value).catch(()=>{}),!o.value&&q(a.value,r).catch(()=>{})]),v.value=!0}))})})}),T(()=>{c&&w(c),i==null||i(),i=null})}return()=>{var h,d;if(!o.value)return C(N("RouterLink"),{ref:y=>{u.value=y==null?void 0:y.$el},to:a.value,...v.value&&!e.custom?{class:e.prefetchedClass||t.prefetchedClass}:{},activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom},l.default);const s=typeof a.value=="object"?((h=r.resolve(a.value))==null?void 0:h.href)??null:a.value||null,f=e.target||null,c=e.noRel?null:E(e.rel,t.externalRelAttribute,s?I:"")||null,i=()=>S(s,{replace:e.replace});return e.custom?l.default?l.default({href:s,navigate:i,route:r.resolve(s),rel:c,target:f,isExternal:o.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:u,href:s,rel:c,target:f},(d=l.default)==null?void 0:d.call(l))}}})}const z=L({componentName:"NuxtLink"});function D(){const t=m();if(t._observer)return t._observer;let n=null;const e=new Map,l=(a,o)=>(n||(n=new IntersectionObserver(v=>{for(const u of v){const s=e.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&s&&s()}})),e.set(a,o),n.observe(a),()=>{e.delete(a),n.unobserve(a),e.size===0&&(n.disconnect(),n=null)});return t._observer={observe:l}}function O(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}function g(t){return t!==null&&typeof t=="object"}function _(t,n,e=".",l){if(!g(n))return _(t,{},e,l);const r=Object.assign({},n);for(const a in t){if(a==="__proto__"||a==="constructor")continue;const o=t[a];o!=null&&(l&&l(r,a,o,e)||(Array.isArray(o)&&Array.isArray(r[a])?r[a]=[...o,...r[a]]:g(o)&&g(r[a])?r[a]=_(o,r[a],(e?`${e}.`:"")+a.toString(),l):r[a]=o))}return r}function j(t){return(...n)=>n.reduce((e,l)=>_(e,l,"",t),{})}const H=j((t,n,e)=>{if(typeof t[n]<"u"&&typeof e=="function")return t[n]=e(t[n]),!0}),U={};H(U);export{z as _,M as u};
