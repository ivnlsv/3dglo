function q(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const h=r=>{const s=document.getElementById("timer-days"),i=document.getElementById("timer-dayName"),o=document.getElementById("timer-hours"),e=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),c=t=>t<10?"0"+t:t,m=t=>t%10===1&&t%100!==11?"день":t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?"дня":"дней",a=()=>{let t=new Date(r).getTime(),u=new Date().getTime(),l=(t-u)/1e3;if(l<=0)return{timeRemaining:l,days:0,hours:0,minutes:0,seconds:0};let y=Math.floor(l/60/60/24),p=Math.floor(l/60/60%24),g=Math.floor(l/60%60),v=Math.floor(l%60);return{timeRemaining:l,days:y,hours:p,minutes:g,seconds:v}},d=()=>{let t=a();s.textContent=t.days,i.textContent=m(t.days),o.textContent=c(t.hours),e.textContent=c(t.minutes),n.textContent=c(t.seconds),t.timeRemaining<=0&&clearInterval(f)},f=setInterval(d,1e3);d()},E=()=>{const r=document.querySelector(".menu"),s=document.querySelector("menu"),i=s.querySelector(".close-btn"),o=s.querySelectorAll("ul>li>a"),e=()=>{s.classList.toggle("active-menu")};r.addEventListener("click",e),i.addEventListener("click",e),o.forEach(n=>n.addEventListener("click",e))},S=()=>{const r=document.querySelector(".popup"),s=document.querySelectorAll(".popup-btn"),i=r.querySelector(".popup-close");s.forEach(o=>{o.addEventListener("click",()=>{if(window.innerWidth>=768){var e=0;r.style.display="block",r.style.opacity=e;var n=setInterval(()=>{e<1?(e+=.03,r.style.opacity=e):clearInterval(n)},50)}else r.style.display="block",r.style.opacity="1"})}),i.addEventListener("click",()=>{if(window.innerWidth>=768){var o=1;r.style.opacity=o;var e=setInterval(()=>{o>0?(o-=.03,r.style.opacity=o):(clearInterval(e),r.style.display="none")},50)}else r.style.display="none",r.style.opacity="0"})},I=()=>{const r=document.querySelectorAll("ul>li>a"),s=document.querySelector(".scroll-to"),i=o=>{const e=o.getBoundingClientRect().top+window.scrollY,n=window.scrollY,c=e-n,m=1e3;let a=null;const d=t=>{a===null&&(a=t);const u=t-a,l=f(u,n,c,m);window.scrollTo(0,l),u<m&&requestAnimationFrame(d)},f=(t,u,l,y)=>(t/=y/2,t<1?l/2*t*t+u:(t--,-l/2*(t*(t-2)-1)+u));requestAnimationFrame(d)};r.forEach(o=>{o.addEventListener("click",e=>{e.preventDefault();const n=e.target.getAttribute("href"),c=document.querySelector(n);c&&i(c)})}),s.addEventListener("click",o=>{o.preventDefault();const e=document.querySelector("#service-block");e&&i(e)})};h("31 january 2025");E();S();I();export{q as __vite_legacy_guard};
