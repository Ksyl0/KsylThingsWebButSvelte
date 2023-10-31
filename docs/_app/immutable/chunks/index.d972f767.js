var Z=Object.defineProperty;var tt=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as E,k as j,f as D,i as I,l as O,m as et,p as nt,q as it,v as rt,w as q,x as st,y as lt,z as at}from"./scheduler.385010e0.js";const F=typeof window<"u";let L=F?()=>window.performance.now():()=>Date.now(),H=F?t=>requestAnimationFrame(t):v;const w=new Set;function U(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(U)}function V(t){let e;return w.size===0&&H(U),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let B=!1;function ot(){B=!0}function ct(){B=!1}function ft(t,e,n,r){for(;t<e;){const a=t+(e-t>>1);n(a)<=r?t=a+1:e=a}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let a=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,_=(a>0&&e[n[a]].claim_order<=o?a+1:ft(1,a,h=>e[n[h]].claim_order,o))-1;r[s]=n[_]+1;const f=_+1;n[f]=s,a=Math.max(f,a)}const c=[],l=[];let i=e.length-1;for(let s=n[a]+1;s!=0;s=r[s-1]){for(c.push(e[s-1]);i>=s;i--)l.push(e[i]);i--}for(;i>=0;i--)l.push(e[i]);c.reverse(),l.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<l.length;s++){for(;o<c.length&&l[s].claim_order>=c[o].claim_order;)o++;const _=o<c.length?c[o]:null;t.insertBefore(l[s],_)}}function _t(t,e){t.appendChild(e)}function W(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=J("style");return e.textContent="/* empty */",mt(W(t),e),e.sheet}function mt(t,e){return _t(t.head||t,e),e.sheet}function ht(t,e){if(B){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){B&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function jt(){return M(" ")}function Bt(){return M("")}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,r,a=!1){$t(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const i=t[l];if(e(i)){const s=n(i);return s===void 0?t.splice(l,1):t[l]=s,a||(t.claim_info.last_index=l),i}}for(let l=t.claim_info.last_index-1;l>=0;l--){const i=t[l];if(e(i)){const s=n(i);return s===void 0?t.splice(l,1):t[l]=s,a?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,i}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function yt(t,e,n,r){return K(t,a=>a.nodeName===e,a=>{const c=[];for(let l=0;l<a.attributes.length;l++){const i=a.attributes[l];n[i.name]||c.push(i.name)}c.forEach(l=>a.removeAttribute(l))},()=>r(e))}function zt(t,e,n){return yt(t,e,n,J)}function gt(t,e){return K(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>M(e),!0)}function Ht(t){return gt(t," ")}function Mt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function xt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function qt(t,e){const n=[];let r=0;for(const a of e.childNodes)if(a.nodeType===8){const c=a.textContent.trim();c===`HEAD_${t}_END`?(r-=1,n.push(a)):c===`HEAD_${t}_START`&&(r+=1,n.push(a))}else r>0&&n.push(a);return n}function It(t,e){return new t(e)}const R=new Map;let T=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:dt(e),rules:{}};return R.set(t,n),n}function k(t,e,n,r,a,c,l,i=0){const s=16.666/r;let o=`{
`;for(let m=0;m<=1;m+=s){const $=e+(n-e)*c(m);o+=m*100+`%{${l($,1-$)}}
`}const _=o+`100% {${l(n,1-n)}}
}`,f=`__svelte_${wt(_)}_${i}`,h=W(t),{stylesheet:p,rules:u}=R.get(h)||vt(h,t);u[f]||(u[f]=!0,p.insertRule(`@keyframes ${f} ${_}`,p.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${a}ms 1 both`,T+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),a=n.length-r.length;a&&(t.style.animation=r.join(", "),T-=a,T||bt())}function bt(){H(()=>{T||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&G(e)}),R.clear())})}let N;function Q(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function A(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const C=new Set;let y;function Ft(){y={r:0,c:[],p:y}}function Lt(){y.r||E(y.c),y=y.p}function Nt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function Ut(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),y.c.push(()=>{C.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const X={duration:0};function Vt(t,e,n){const r={direction:"in"};let a=e(t,n,r),c=!1,l,i,s=0;function o(){l&&z(t,l)}function _(){const{delay:h=0,duration:p=300,easing:u=I,tick:d=v,css:m}=a||X;m&&(l=k(t,0,1,p,h,u,m,s++)),d(0,1);const $=L()+h,b=$+p;i&&i.abort(),c=!0,D(()=>A(t,!0,"start")),i=V(g=>{if(c){if(g>=b)return d(1,0),A(t,!0,"end"),o(),c=!1;if(g>=$){const x=u((g-$)/p);d(x,1-x)}}return c})}let f=!1;return{start(){f||(f=!0,z(t),j(a)?(a=a(r),Q().then(_)):_())},invalidate(){f=!1},end(){c&&(o(),c=!1)}}}function Wt(t,e,n,r){let c=e(t,n,{direction:"both"}),l=r?0:1,i=null,s=null,o=null,_;function f(){o&&z(t,o)}function h(u,d){const m=u.b-l;return d*=Math.abs(m),{a:l,b:u.b,d:m,duration:d,start:u.start,end:u.start+d,group:u.group}}function p(u){const{delay:d=0,duration:m=300,easing:$=I,tick:b=v,css:g}=c||X,x={start:L()+d,b:u};u||(x.group=y,y.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),i||s?s=x:(g&&(f(),o=k(t,l,u,m,d,$,g)),u&&b(0,1),i=h(x,m),D(()=>A(t,u,"start")),V(S=>{if(s&&S>s.start&&(i=h(s,m),s=null,A(t,i.b,"start"),g&&(f(),o=k(t,l,i.b,i.duration,0,$,c.css))),i){if(S>=i.end)b(l=i.b,1-l),A(t,i.b,"end"),s||(i.b?f():--i.group.r||E(i.group.c)),i=null;else if(S>=i.start){const Y=S-i.start;l=i.a+i.d*$(Y/i.duration),b(l,1-l)}}return!!(i||s)}))}return{run(u){j(c)?Q().then(()=>{c=c({direction:u?"in":"out"}),p(u)}):p(u)},end(){f(),i=s=null}}}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function At(t,e,n){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),D(()=>{const c=t.$$.on_mount.map(st).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...c):E(c),t.$$.on_mount=[]}),a.forEach(D)}function Et(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(lt.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,r,a,c,l=null,i=[-1]){const s=rt;q(t);const o=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:a,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:O(),dirty:i,skip_bound:!1,root:e.target||s.$$.root};l&&l(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,h,...p)=>{const u=p.length?p[0]:h;return o.ctx&&a(o.ctx[f],o.ctx[f]=u)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](u),_&&St(t,f)),h}):[],o.update(),_=!0,E(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){ot();const f=pt(e.target);o.fragment&&o.fragment.l(f),f.forEach(G)}else o.fragment&&o.fragment.c();e.intro&&Nt(t.$$.fragment),At(t,e.target,e.anchor),ct(),et()}q(s)}class Qt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){Et(this,1),this.$destroy=v}$on(e,n){if(!j(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);export{Wt as A,Vt as B,Qt as S,Tt as a,Lt as b,Ht as c,Nt as d,Bt as e,G as f,J as g,zt as h,Kt as i,pt as j,Pt as k,Ot as l,M as m,gt as n,Mt as o,Ft as p,It as q,Gt as r,jt as s,Ut as t,Jt as u,At as v,Et as w,kt as x,ht as y,qt as z};
