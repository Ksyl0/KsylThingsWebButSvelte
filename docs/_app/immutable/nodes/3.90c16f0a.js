import{s as Z,i as ee,n as b,o as te,f as ne,h as x}from"../chunks/scheduler.bcfd4996.js";import{S as le,i as ie,s as H,g as C,e as N,z as se,f as c,c as T,h as M,x as O,k as Q,a as _,B as oe,d as ae,m as z,j as B,n as y,y as p,C as K,o as P}from"../chunks/index.a2a7b62b.js";import{f as Y,a as R}from"../chunks/index.77dc626b.js";function V(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function W(o,n,a){const s=o.slice();return s[7]=n[a],s[9]=a,s}function fe(o){let n,a=o[1][o[9]][2]+"",s,l;return{c(){n=C("h2"),s=z(a)},l(t){n=M(t,"H2",{});var e=B(n);s=y(e,a),e.forEach(c)},m(t,e){_(t,n,e),p(n,s)},p:b,i(t){t&&(l||x(()=>{l=K(n,Y,{}),l.start()}))},o:b,d(t){t&&c(n)}}}function ce(o){let n,a=o[1][o[9]][1]+"",s,l;return{c(){n=C("h2"),s=z(a)},l(t){n=M(t,"H2",{});var e=B(n);s=y(e,a),e.forEach(c)},m(t,e){_(t,n,e),p(n,s)},p:b,i(t){t&&(l||x(()=>{l=K(n,Y,{}),l.start()}))},o:b,d(t){t&&c(n)}}}function ue(o){let n,a=o[1][o[9]][0]+"",s,l,t,e,r,d=o[7].months+"",g,D,k=o[7].weeks+"",j,u,i=o[7].days+"",m,f,E=o[7].hours+"",G,U,A=o[7].minutes+"",I,F,S=o[7].seconds+"",q,J,L;return{c(){n=C("h2"),s=z(a),t=H(),e=C("h2"),r=z("Miesiące: "),g=z(d),D=z(" Tygodnie: "),j=z(k),u=z(" Dni: "),m=z(i),f=z(` Godziny:\r
      `),G=z(E),U=z(" Minuty: "),I=z(A),F=z(" Sekundy : "),q=z(S),J=H()},l(h){n=M(h,"H2",{});var w=B(n);s=y(w,a),w.forEach(c),t=T(h),e=M(h,"H2",{});var v=B(e);r=y(v,"Miesiące: "),g=y(v,d),D=y(v," Tygodnie: "),j=y(v,k),u=y(v," Dni: "),m=y(v,i),f=y(v,` Godziny:\r
      `),G=y(v,E),U=y(v," Minuty: "),I=y(v,A),F=y(v," Sekundy : "),q=y(v,S),J=T(v),v.forEach(c)},m(h,w){_(h,n,w),p(n,s),_(h,t,w),_(h,e,w),p(e,r),p(e,g),p(e,D),p(e,j),p(e,u),p(e,m),p(e,f),p(e,G),p(e,U),p(e,I),p(e,F),p(e,q),p(e,J)},p(h,w){w&1&&d!==(d=h[7].months+"")&&P(g,d),w&1&&k!==(k=h[7].weeks+"")&&P(j,k),w&1&&i!==(i=h[7].days+"")&&P(m,i),w&1&&E!==(E=h[7].hours+"")&&P(G,E),w&1&&A!==(A=h[7].minutes+"")&&P(I,A),w&1&&S!==(S=h[7].seconds+"")&&P(q,S)},i(h){h&&(l||x(()=>{l=K(n,R,{y:-200,duration:3e3}),l.start()})),h&&(L||x(()=>{L=K(e,R,{y:200,duration:3e3}),L.start()}))},o:b,d(h){h&&(c(n),c(t),c(e))}}}function re(o){let n,a=" ",s,l,t=" ";return{c(){n=C("h2"),n.textContent=a,s=H(),l=C("h2"),l.textContent=t},l(e){n=M(e,"H2",{"data-svelte-h":!0}),O(n)!=="svelte-slfcfw"&&(n.textContent=a),s=T(e),l=M(e,"H2",{"data-svelte-h":!0}),O(l)!=="svelte-slfcfw"&&(l.textContent=t)},m(e,r){_(e,n,r),_(e,s,r),_(e,l,r)},p:b,i:b,o:b,d(e){e&&(c(n),c(s),c(l))}}}function X(o){let n;function a(t,e){return t[7].difference==null?re:t[7].difference>0?ue:t[7].difference<1e3*60*60*3&&t[7].difference>-(1e3*60*60*3+1e3*60*10)?ce:fe}let s=a(o),l=s(o);return{c(){l.c(),n=N()},l(t){l.l(t),n=N()},m(t,e){l.m(t,e),_(t,n,e)},p(t,e){s===(s=a(t))&&l?l.p(t,e):(l.d(1),l=s(t),l&&(l.c(),ae(l,1),l.m(n.parentNode,n)))},d(t){t&&c(n),l.d(t)}}}function de(o){let n,a,s="Podstrona w budowie",l,t,e=`Tutaj znajduje się odliczanie do aktualnie najważniejszej dla mnie rzeczy,\r
  może to być egzamin, albo premiera jakiejś fajnej gierki`,r,d,g,D,k,j=V(o[0]),u=[];for(let i=0;i<j.length;i+=1)u[i]=X(W(o,j,i));return{c(){n=H(),a=C("h1"),a.textContent=s,l=H(),t=C("h2"),t.textContent=e,r=H(),d=C("img"),D=H();for(let i=0;i<u.length;i+=1)u[i].c();k=N(),this.h()},l(i){se("svelte-nd5yxd",document.head).forEach(c),n=T(i),a=M(i,"H1",{"data-svelte-h":!0}),O(a)!=="svelte-cxll1e"&&(a.textContent=s),l=T(i),t=M(i,"H2",{"data-svelte-h":!0}),O(t)!=="svelte-25m3zj"&&(t.textContent=e),r=T(i),d=M(i,"IMG",{src:!0,alt:!0}),D=T(i);for(let f=0;f<u.length;f+=1)u[f].l(i);k=N(),this.h()},h(){document.title="Odliczania",ee(d.src,g="assets/Prayge.webp")||Q(d,"src",g),Q(d,"alt","A Pepe praying")},m(i,m){_(i,n,m),_(i,a,m),_(i,l,m),_(i,t,m),_(i,r,m),_(i,d,m),_(i,D,m);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(i,m);_(i,k,m)},p(i,[m]){if(m&3){j=V(i[0]);let f;for(f=0;f<j.length;f+=1){const E=W(i,j,f);u[f]?u[f].p(E,m):(u[f]=X(E),u[f].c(),u[f].m(k.parentNode,k))}for(;f<u.length;f+=1)u[f].d(1);u.length=j.length}},i:b,o:b,d(i){i&&(c(n),c(a),c(l),c(t),c(r),c(d),c(D),c(k)),oe(u,i)}}}function $(o){const n=new Date,a=o.getTime()-n.getTime();let s=Math.floor(a/(1e3*60*60*24));const l=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(a%(1e3*60*60)/(1e3*60)),e=Math.floor(a%(1e3*60)/1e3),r=Math.floor(s/30);s-=r*30;const d=Math.floor(s/7);return s-=d*7,{months:r,weeks:d,days:s,hours:l,minutes:t,seconds:e,difference:a}}function he(o,n,a){let s=new Date("2024-01-10T08:00:00"),l=new Date("2024-01-18T08:00:00"),t,e=$(s),r=$(l),d=[e,r],g=[["Pozostały czas do egzaminu zawodowego teoretycznego sesja styczeń","Aktualnie pisze egzamin(albo jestem już po nim jak jest po 09:00)!","Egzamin teoretyczny finished, cholera wie co z wynikami bo OKE zwaliło i złe klucze odpowiedzi wysłało xDDD"],["Pozostały czas do egzaminu zawodowego praktycznego sesja styczeń","Aktualnie pisze egzamin(albo jestem już po nim jak jest po 11:00)!","Egzamin praktyczny finished"]];return te(()=>{e=$(s),t=setInterval(()=>{e=$(s),r=$(l),a(0,d=[e,r])},1e3)}),ne(()=>{clearInterval(t)}),[d,g]}class ze extends le{constructor(n){super(),ie(this,n,he,de,Z,{})}}export{ze as component};
