import{a as d,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="55062320-0440d879b5463c33572d356a2";async function y(s,t){return(await d.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:n,comments:p,downloads:u})=>`
<li class="gallery-item">
  <a href="${o}">
    <img src="${a}" alt="${e}" />
  </a>
  <div class="info">
  <p><span class="label">Likes</span><span>${r}</span></p>
  <p><span class="label">Views</span><span>${n}</span></p>
  <p><span class="label">Comments</span><span>${p}</span></p>
  <p><span class="label">Downloads</span><span>${u}</span></p>
</div>
</li>`).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search query!"});return}L(),b();try{const a=await y(t,page);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(a.hits)}catch{i.error({message:"Something went wrong. Try again!"})}finally{w()}});
//# sourceMappingURL=index.js.map
